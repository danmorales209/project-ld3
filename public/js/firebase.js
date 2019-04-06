$(document).ready(function () {
    displayLogin();

// Function to run when user clicks Register button in navbar
$("#navRegister").click(displayRegister);

    function displayRegister() {
        $("#registerDiv").show();
$("#loginDiv").hide();
}

// Function to run when user clicks Login button in navbar
$("#navLogin").click(displayLogin);

function displayLogin() {
    console.log("login clicked");
    $("#loginDiv").show();
    $("#registerDiv").hide();
}

// Function to run when user clicks Logout button in navbar
$("#navLogout").click(userLogOut);

function userLogOut() {
    console.log("logout clicked");
    // firebase.auth().signOut();
    $("#loginDiv").hide();
    $("#registerDiv").hide();
};

$("#showLogin").click(displayLogin);

$("#showRegister").click(displayRegister);

// Firebase setup
// Initialize Firebase
firebase.initializeApp(config);
var config = {
    apiKey: "AIzaSyCxWT735EGIcbdNLZyxsWYns14mJ7UvOtg",
    authDomain: "mygradebook-355d0.firebaseapp.com",
    databaseURL: "https://mygradebook-355d0.firebaseio.com",
    projectId: "mygradebook-355d0",
    storageBucket: "mygradebook-355d0.appspot.com",
    messagingSenderId: "619478408217"
};
// Function to run based on if user is logged in or not
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log(user);
        // User is signed in
        // display landing page
    } else {
        // No user is signed in.
        userLogOut();
        // display sorry you are not recognized by our database as a student
    }
});

// Function to register a new user
$("#register").on("submit", function (event) {
    event.preventDefault();

    var email = $("#register-email").val();
    var password = $("#register-password").val();
    console.log(email);
    console.log(password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function (user) {
            console.log(user);
        })
        .catch(function (err) {
            console.log(err);
        })
});

// Function to login existing user
$("#login").on("submit", function (event) {
    event.preventDefault();

    var email = $(".login .email").val();
    var password = $(".login .password").val();

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function (user) {
            console.log(user);
        })
        .catch(function (err) {
            console.log(err);
        });
});
})