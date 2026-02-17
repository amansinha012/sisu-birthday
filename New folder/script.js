let currentPhotoIndex = 0;
const photos = [
    "img1.jpg.jpeg",
    "img2.jpg.jpeg",
    "img3.jpg.jpeg",
    "img4.jpg.jpeg"
];

function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
    });
    // Show the requested screen
    document.getElementById(screenId).classList.remove('hidden');
}

function nextPhoto() {
    currentPhotoIndex++;
    
    if (currentPhotoIndex < photos.length) {
        // Update the image and counter
        document.getElementById('slideshow-img').src = photos[currentPhotoIndex];
        document.getElementById('photo-counter').innerText = `Photo ${currentPhotoIndex + 1} of 4`;
    } else {
        // If no more photos, move to final message
        showScreen('screen4');
    }
}