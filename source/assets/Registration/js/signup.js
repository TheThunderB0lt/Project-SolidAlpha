// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyDGjvv5QmFg8Ew6F9j9fiD_-xDsxuWDNPA",
	authDomain: "project-solidalpha.firebaseapp.com",
	projectId: "project-solidalpha",
	appId: "1:828898872322:web:f0ce971b500ccfa834eb1b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// make auth and firebase references
const auth = firebase.auth();

// =============================================SIGNUP===================================================================

const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
	e.preventDefault();

	var username = signupForm["user_name1"].value;
	var email = signupForm["email_id1"].value;
	var password = signupForm["pass_word1"].value;

	auth.createUserWithEmailAndPassword(email, password)
		.then((cred) => {
			alert(username + " <=> Your account has been created successfully");
			alert(username + " <=>  Redirecting to login page");
			window.setTimeout(function () {
				// Your redirect is here
				window.location.href =
					"/source/templates/registration/login.html";
			}, 10);
			const modal = document.querySelector("#modal-signup");
			M.Modal.getInstance(modal);
			signupForm.querySelector(".error").innerHTML = "";
		})
		.catch((err) => {
			signupForm.querySelector(".error").innerHTML = err.message;
		});
});
