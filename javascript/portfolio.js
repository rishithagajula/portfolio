const shareButton = document.getElementById('shareButton');

if (navigator.share) {
    shareButton.addEventListener('click', () => {
        navigator.share({
            title: 'Your Portfolio',
            text: 'Check out my portfolio!',
            url: window.location.href
        })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    });
} else {
    shareButton.style.display = 'none'; 
}
