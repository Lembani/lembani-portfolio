let navMenu = document.querySelector(".nav");
let menuContainer = document.querySelector(".menu");
let brand = document.querySelector(".brand");
let mobileNavItems = document.querySelector(".mobile-nav-items");
let mobileNavItem = document.querySelectorAll(".mobile-nav-item");
let menuIcon = document.querySelector(".menu-icon");
let closeIcon = document.querySelector(".close-menu-icon");

mobileNavItems.style.display = "none";
closeIcon.style.display = "none";

const menuToggle = () => {
	if (navMenu.classList.contains("displayMenu")) {
		navMenu.classList.remove("displayMenu");
		closeIcon.style.display = "none";
		menuIcon.style.display = "block";
		brand.style.display = "block";
		mobileNavItems.style.display = "none";
	} else {
		navMenu.classList.add("displayMenu");
		closeIcon.style.display = "block";
		mobileNavItems.setAttribute("class", "mobile-nav-items");
		menuIcon.style.display = "none";
		brand.style.display = "none";
		mobileNavItems.style.display = "block";
	}
};

menuContainer.addEventListener("click", menuToggle);
function closeMenu(e) {
	closeIcon.style.display = "none";
	menuIcon.style.display = "block";
	brand.style.display = "block";
	mobileNavItems.style.display = "none";
}
