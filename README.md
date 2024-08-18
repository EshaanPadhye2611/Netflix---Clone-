Overview:
The Netflix Clone is a fully functional web application designed to replicate the core features of the popular streaming service Netflix. Built using modern web development technologies, this project demonstrates the power and flexibility of React.js, Redux, and Firebase, combined with Stripe for secure payment processing. The application leverages the TMDB (The Movie Database) API to fetch and display a vast collection of movies and TV shows, offering users an immersive and dynamic viewing experience.
Key Features:

User Authentication:

Firebase Authentication: Provides secure user login and registration with email/password and social media accounts.
User Management: Integration with Firebase Firestore to manage user data and subscriptions.
Responsive UI:

React.js: Implements a responsive and dynamic user interface with reusable components, providing a seamless experience across devices.
CSS & Styling: Custom CSS for styling the UI to closely mimic the look and feel of the original Netflix interface.
State Management:

Redux: Centralized state management for handling user sessions, subscriptions, and media browsing, ensuring consistent data flow throughout the application.
React Hooks: Utilized for managing component state and side effects, enhancing the app's interactivity and performance.
Media Content Integration:

TMDB API: Integration with The Movie Database API to fetch and display trending movies, TV shows, and categories, including detailed information like ratings, genres, and descriptions.
Search Functionality: Allows users to search for their favorite movies or TV shows with real-time filtering and suggestions.
Payment Processing:

Stripe Integration: Secure and efficient payment processing for subscription plans. Users can subscribe to different plans (e.g., Basic, Standard, Premium) with real-time payment status updates.
Checkout Sessions: Managed through Firebase, allowing seamless transactions and tracking of payment history.
Cloud Services:

Firebase Firestore: Cloud-based database to store user data, subscription details, and session information.
Firebase Hosting: Deployed on Firebase Hosting for fast and reliable content delivery with SSL certificates for secure access.
Subscription Management:

Subscription Plans: Users can choose from different subscription tiers, and the app dynamically adjusts content availability based on the user's subscription status.
Renewal and Billing Cycles: Managed via Stripe, with real-time updates on subscription status and billing cycles.
Deployment & Hosting:

Firebase Hosting: The application is hosted on Firebase, ensuring high availability, scalability, and performance.
Continuous Deployment: Integrated with CI/CD pipelines for automated builds and deployments.

Technologies Used:

Frontend: React.js, Redux, React Hooks, JavaScript, CSS
Backend: Firebase (Authentication, Firestore, Cloud Functions)
APIs: TMDB API (The Movie Database), Stripe API (Payment Processing)
Deployment: Firebase Hosting
Tools & Libraries: Firebase CLI, Stripe.js, Axios (for API requests)
