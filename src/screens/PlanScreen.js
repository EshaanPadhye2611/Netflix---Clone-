import React, { useEffect, useState } from 'react';
import './PlanScreen.css';
import db from '../firebase';
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from 'react-redux'; // Import useSelector
import { selectUser } from '../features/userSlice'; // Import selectUser from where it is defined


function PlanScreen() {
    const [products, setProducts] = useState([]);
    const user = useSelector(selectUser); // useSelector is now defined
    const [subscription, setSubscription] = useState(null);

    useEffect(() =>{
        db.collection('customers').doc(user.uid).collection('subscriptions').get().then(querySnapshot =>{
            querySnapshot.forEach(async subscription => {
               setSubscription({
                   role: subscription.data().role,
                   current_period_end: subscription.data().current_period_end.seconds,
                   current_period_start: subscription.data().current_period_start.seconds,
               });
            });

        });
    }, [user.uid]);

    useEffect(() => {
        db.collection("products")
          .where("active", "==", true)
          .get()
          .then(querySnapshot => {
            const products = {};
            querySnapshot.forEach(async productDoc => {
                products[productDoc.id] = productDoc.data();
                
                // Fetch prices for each product
                const priceSnap = await productDoc.ref.collection("prices").get();
                priceSnap.docs.forEach(doc => {
                    products[productDoc.id].prices = {
                        priceId: doc.id, // Use doc.id here instead of price.id
                        priceData: doc.data() // Use doc.data() here instead of price.data()
                    };
                });
            });
            setProducts(products);
        });
    }, []);
    
    console.log(products);
    console.log(subscription);
    const loadCheckout  = async (priceId) => {
        const docRef = await db.collection("customers").doc(user.uid).collection("checkout_sessions").add({
            price: priceId,
            success_url: window.location.origin,
            cancel_url : window.location.origin,
        });
        docRef.onSnapshot(async(snap) =>{
            const { error, sessionId} = snap.data();

            if (error) {
                alert(`Error Occurred: ${error.message}`);
            }
            if (sessionId) {
                const stripe  = await loadStripe('pk_test_51Porj8P3s5uERXr9xYK8vMc2bIkch89AdOUZIsE9BcQYEG0Hr6Khu0Lu7Lu7njOy9yKqr0Ief7QGj0EGF7bOL0b000bKNaRVbK');
                stripe.redirectToCheckout({ sessionId});
            }
        })
    };

    return (
        <div className='planScreen'>
            {subscription && <p>Renewal Date : {new Date(subscription?.current_period_end * 1000).toLocaleDateString()} </p>}

            {Object.entries(products).map(([productId, productData]) =>{
                const isCurrentPackage = productData.name?.toLowerCase().includes(subscription?.role);
                return (

                  <div 
                  key = {productId} 
                  className={` ${isCurrentPackage && "plansScreen_plan--disabled" } plansScreen_plan` }>
                    <div className="plansScreen_info">
                        <h5>{productData.name}</h5>
                        <h6>{productData.description}</h6>
                    </div>
                    <button onClick={() => !isCurrentPackage && loadCheckout(productData.prices.priceId)}>
                       {!isCurrentPackage ? 'Subscribe' : 'Current Package'}
                    </button>
                  </div>
            );
            })}
        </div>
    );
}

export default PlanScreen;
