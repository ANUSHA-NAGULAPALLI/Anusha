// Interactive Quiz Functionality
document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let result = document.querySelector('input[name="coffee"]:checked');
    if (result) {
        document.getElementById('quizResult').innerText = `You chose: ${result.value}! Enjoy your cup of coffee.`;
    } else {
        document.getElementById('quizResult').innerText = 'Please select a coffee type!';
    }
});

// Image Carousel Functionality
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

document.getElementById('nextBtn').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
});

document.getElementById('prevBtn').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
});

// Fetching Coffee Joke from an API
async function fetchJoke() {
    const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single&lang=en');
    const data = await response.json();
    const joke = data.joke || "No joke available!";
    document.getElementById('jokeText').innerText = joke;
}

fetchJoke(); // Fetch joke on page load
