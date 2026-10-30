const company = "DOVATECH GENERAL SUPPLY";
console.log(company);

const slides = document.querySelectorAll(".slides img");

let currentSlide = 0;

function showNextSlide() {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides.forEach(function(slide) {
        slide.style.display = "none";
    });

    slides[currentSlide].style.display = "block";
}

if (slides.length > 0) {
    slides.forEach(function(slide) {
        slide.style.display = "none";
    });

    slides[0].style.display = "block";

    setInterval(showNextSlide, 4000);
}

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    
    menuToggle.addEventListener("click", function() {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
        isOpen ? "close navigation menu" : "open navigation menu"
    );

    menuToggle.innerHTML = isOpen ? "X" : "☰";
});
}
//DOVATECH SEARCH FEATURE

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchResults = document.getElementById("search-results");

if (searchInput && searchButton && searchResults) {
    searchButton.addEventListener("click", searchWebsite);

    searchInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            searchWebsite();
        }
    });
}

//OUR BUSINESS CATEGORIES

const categories = [
    {
        name:"Trading",
        description: "Reliable trading and supply solutions.",
        link: "services.html"
    },
    {
        name:"General supply",
        description:"Quality goods supplied to meet client needs.",
        link: "services.html"
    },
    {
        name:"Construction materials",
        description:"Quality materials for construction projects.",
        link: "services.html"
    },
    {
        name:"Electronics",
        description:"Reliable electronics and related products.",
        link: "services.html"
    },
    {
        name:"Food products",
        description:"Food products for businesses and institutions.",
        link: "services.html"
    }
];

//Search Function

function searchWebsite() {

    const searchTerm = searchInput.value.toLowerCase().trim();
    searchResults.innerHTML = "";
    searchResults.style.display="block";

    if (searchTerm == "") {
        searchResults.innerHTML = "<p>Please enter something to search for.</p>"
        return;
    }
    const matchingCategories = categories.filter(function(category) {
        return (
            category.name.toLowerCase().includes(searchTerm) ||
            category.description.toLowerCase().includes(searchTerm)
        );
    });

    if (matchingCategories.length > 0) {
        matchingCategories.forEach(function(category) {
            searchResults.innerHTML += `
                <div class="search-result">
                    <h3>${category.name}</h3>
                    <p>${category.description}</p>
                    <a href="${category.link}" class="search-link">
                        LEARN MORE →
                    </a>
                </div>
            `;
        });
    } else {
        searchResults.innerHTML = "<p>NO MATCHING CATEGORIES FOUND.</p>";
    }
}

//CONTACT FORM

inquiryForm.reset();

//CALCULATOR PROGRAM
function addItem () {
    const items = document.getElementById("items");
    const row = document.createElement("div");appendChild(row);

    row.innerHTML = ` 
        <input type="text" placeholder="Item name"> 
        <input type="number" placeholder="price (KSH)" class="price">
    `;

    items.appendChild(row);        
}

document.addEventListener("input", function() {
    const prices = document.querySelectorAll("price");

    let total= 0;

    prices.forEach(function (price) {
        total += Number(price.value) || 0;

    });

    document.getElementById("total").innerText - total;

});