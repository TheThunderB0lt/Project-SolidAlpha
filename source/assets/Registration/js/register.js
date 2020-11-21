// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAlqEI6NLTQfLsSqmPM6AqFX_FH8UAtG3c",
  authDomain: "algo-viz-c7e38.firebaseapp.com",
  databaseURL: "https://algo-viz-c7e38.firebaseio.com",
  projectId: "algo-viz-c7e38",
  storageBucket: "algo-viz-c7e38.appspot.com",
  messagingSenderId: "325946583453",
  appId: "1:325946583453:web:a6b6b7103de085b6d32774",
  measurementId: "G-85NTD90R91",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// ============================================== LOGIN =============================================================

document.getElementById("log-in").addEventListener("submit", function (e) {
  e.preventDefault();
  var email = document.getElementById("email_id");
  var password = document.getElementById("pass_word");

  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then(function (response) {
    //   alert("Welcome: " + email.value);
    
      window.setTimeout(function(){

      // Your redirect is here
          window.location.href = "../../../../index.html";
      }, 10);
      console.log(response);
      email.value = "";
      password.value = "";
    })
    .catch(function (error) {
      var errorMessage = error.message;
      alert("Invalid credentials", errorMessage);
      // var errorCode = error.code;
      // console.log(errorCode);
      // console.log(errorMessage);
      // alert("invalid credentials", errorCode);
    });
});

// =============================================SIGNUP===================================================================

document.getElementById("log-up").addEventListener("submit", function (e) {
  e.preventDefault();

  var username = document.getElementById("user_name1");
  var email = document.getElementById("email_id1");
  var password = document.getElementById("pass_word1");

  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then(function (response) {
      alert("Account created successfully :  " + username.value);
      console.log(response);
      firebase.database().ref("users").push({
          username: username.value,
          userId: firebase.auth().currentUser.uid,
          email: firebase.auth().currentUser.email,
        });
        firebase.auth().signOut();
        email.value = "";
        password.value = "";
        username.value = "";
    })
    .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    });
});

