function displayLogin() {
  $("#loginDiv").show();
  $("#registerDiv").hide();
}

function displayRegister() {
  $("#registerDiv").show();
  $("#loginDiv").hide();
}

function userLogOut() {
  firebase.auth().signOut();
  $("#loginDiv").show();
  $("#registerDiv").hide();
}

$(document).ready(function () {
  displayLogin();

  // Function to run when user clicks Register button in navbar
  $("#navRegister").click(displayRegister);

  // Function to run when user clicks Login button in navbar
  $("#navLogin").click(displayLogin);

  // Function to run when user clicks Logout button in navbar
  $("#navLogout").on("click", function (event) {
    event.preventDefault();
    console.log("logout clicked");
    location = "/";
    userLogOut();
  });

  $("#showLogin").click(displayLogin);

  $("#showRegister").click(displayRegister);

  // Firebase setup
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC1BNApFh7kXWjeklAQsLoPaAQGbOw5QKI",
    authDomain: "my-grade-book.firebaseapp.com",
    databaseURL: "https://my-grade-book.firebaseio.com",
    projectId: "my-grade-book",
    storageBucket: "my-grade-book.appspot.com",
    messagingSenderId: "928221026384"
  };
  firebase.initializeApp(config);

  // var database = firebase.database();

  // Function to run based on if user is logged in or not
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log("user is signed in!");
    } else {
      console.log("no user signed in!");
      // No user is signed in.
      userLogOut();
    }
  });

  // Function to register a new user
  $("#register").on("submit", function (event) {
    event.preventDefault();
    console.log("register was clicked!");
    var email = $("#register-email").val();
    var password = $("#register-password").val();
    console.log(email);
    console.log(password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function (user) {
        console.log(user);
        //window.location = "/teacher";
      })
      .catch(function (err) {
        console.log(err);
      });
  });

  // Function to login existing user
  $("#login").on("submit", function (event) {
    event.preventDefault();

    var email = $("#login-email").val();
    var password = $("#login-password").val();
    console.log("logged in");
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function (user) {
        console.log(user);
        console.log(firebase.auth().currentUser);
        //window.location = "/teacher";
      })
      .catch(function (err) {
        console.log(err);
      });
  });
});
