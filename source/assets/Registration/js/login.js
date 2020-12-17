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

// ============================================== LOGIN =============================================================

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
	e.preventDefault();

	var email = loginForm["email_id"].value;
	var password = loginForm["pass_word"].value;

	auth.signInWithEmailAndPassword(email, password)
		.then((cred) => {
			window.setTimeout(function () {
				// Your redirect is here
				window.location.href = "../../../../index.html";
			}, 10);
			alert("Welcome to Algorithm Visualization :)");
			const modal = document.querySelector("#modal-login");
			M.Modal.getInstance(modal);
			loginForm.reset();
			loginForm.querySelector(".error").innerHTML = "";
		})
		.catch((err) => {
			loginForm.querySelector(".error").innerHTML = err.message;
		});
});
