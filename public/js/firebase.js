// $(document).ready(function () {
//     displayLogin();

//     // Function to run when user clicks Register button in navbar
//     $("#navRegister").click(displayRegister);

//     function displayRegister() {
//         $("#registerDiv").show();
//         $("#loginDiv").hide();
//     }

//     // Function to run when user clicks Login button in navbar
//     $("#navLogin").click(displayLogin);

//     function displayLogin() {
//         console.log("login clicked");
//         $("#loginDiv").show();
//         $("#registerDiv").hide();
//     }

//     // Function to run when user clicks Logout button in navbar
//     $("#navLogout").click(userLogOut);

//     function userLogOut() {
//         console.log("logout clicked");
//         // firebase.auth().signOut();
//         $("#loginDiv").hide();
//         $("#registerDiv").hide();
//     };

//     $("#showLogin").click(displayLogin);

//     $("#showRegister").click(displayRegister);

//     // Firebase setup
//     // Initialize Firebase
//     var config = {
//         apiKey: "AIzaSyC1BNApFh7kXWjeklAQsLoPaAQGbOw5QKI",
//         authDomain: "my-grade-book.firebaseapp.com",
//         databaseURL: "https://my-grade-book.firebaseio.com",
//         projectId: "my-grade-book",
//         storageBucket: "my-grade-book.appspot.com",
//         messagingSenderId: "928221026384"
//     };
//     firebase.initializeApp(config);

//     // Function to run based on if user is logged in or not
//     firebase.auth().onAuthStateChanged(function (user) {
//         if (user) {
//             console.log(user);
//             // User is signed in
//             // display landing page
//         } else {
//             // No user is signed in.
//             // userLogOut();
//             // display sorry you are not recognized by our database as a student
//         }
//     });

//     // Function to register a new user
//     $("#register").on("submit", function (event) {
//         event.preventDefault();

//         var email = $("#register-email").val();
//         var password = $("#register-password").val();
//         console.log(email);
//         console.log(password);
//         firebase.auth().createUserWithEmailAndPassword(email, password)
//             .then(function (user) {
//                 console.log(user);
//             })
//             .catch(function (err) {
//                 console.log(err);
//             })
//     });

//     // Function to login existing user
//     $("#login").on("submit", function (event) {
//         event.preventDefault();

//         var email = $(".login .email").val();
//         var password = $(".login .password").val();

//         firebase.auth().signInWithEmailAndPassword(email, password)
//             .then(function (user) {
//                 console.log(user);
//             })
//             .catch(function (err) {
//                 console.log(err);
//             });
//     });
// })