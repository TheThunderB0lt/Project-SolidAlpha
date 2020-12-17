const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");

const setupUI = (user) => {
	if (user) {
		// toggle ui elements
		loggedInLinks.forEach((item) => (item.style.display = "block"));
		loggedOutLinks.forEach((item) => (item.style.display = "none"));
	} else {
		// toggle ul elements
		loggedInLinks.forEach((item) => (item.style.display = "none"));
		loggedOutLinks.forEach((item) => (item.style.display = "block"));
	}
};

// checking user login & logout
auth.onAuthStateChanged((user) => {
	if (user) {
		setupUI(user);
	} else {
		setupUI();
	}
});

//  logout method
const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
	e.preventDefault();
	auth.signOut().then(() => {
		window.setTimeout(function () {
			console.log("logout");
		}, 300);
	});
});
