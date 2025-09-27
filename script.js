// Heart Animation
function createHeart() {
    const div = document.createElement('div');
    div.classList.add('heart');
    div.style.left = `${Math.random() * 100}vw`;
    div.style.animationDuration = `${5 + Math.random() * 4}s`;
    document.querySelector('.hearts-bg').appendChild(div);
    setTimeout(() => div.remove(), 8000);
}
setInterval(createHeart, 500);

// Shift Photos Button Function
function showPhotos() {
    const gallery = document.getElementById('photoGallery');
    if (gallery.style.display === 'none') {
        gallery.style.display = 'flex';
    } else {
        gallery.style.display = 'none';
    }
}
