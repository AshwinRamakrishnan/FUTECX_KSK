Attendance Management System
A web-based Attendance Management System that allows teachers to mark attendance for students in various departments. The app uses Firebase for authentication, Firestore for data storage, and features role-based access where the principal can view attendance summaries by department and year.

Features
Role-Based Access: Different roles such as 'Staff' and 'Principal', each with specific permissions.
Firebase Authentication: Login using Google accounts.
Dynamic Attendance Marking: Teachers can mark attendance for students in real-time.
Department-Wise Attendance: Principals can view a detailed department-wise attendance summary.
Responsive Design: The app is designed to work seamlessly on mobile devices.
Interactive UI: A modern design with glassmorphism effects, animated buttons, and gradient colors for a visually appealing user experience.
Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Firebase (Authentication and Firestore)
Libraries: Font Awesome (Icons), Google Firebase SDK
Setup Instructions
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/attendance-app.git
cd attendance-app
Install dependencies (if needed for local development, though Firebase handles most of the functionality):

Since this is a frontend project, there's no need for npm dependencies unless you are using build tools (e.g., Webpack, Gulp). If you're using them, run:

bash
Copy code
npm install
Set up Firebase:

Go to Firebase Console, create a project, and enable Authentication (Google Login) and Firestore Database.
Download the Firebase config file and add it to your project. You can find more details in the Firebase documentation on getting started with Firebase.
Configure Firebase in your project:

Inside the Firebase config section of your app, replace the placeholder config values with your Firebase project's configuration.
javascript
Copy code
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};
Run the app:

If you're running it locally, simply open the index.html file in your browser.
bash
Copy code
open index.html
Or, you can deploy the app using Firebase Hosting or any other platform of your choice.

Screenshots
Dashboard

Attendance Section

Login Page

Contributing
If you want to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request. Any contributions or suggestions are welcome!

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Special thanks to Firebase for providing excellent tools for authentication and data management.
Thanks to the creators of Font Awesome for providing amazing icons.
