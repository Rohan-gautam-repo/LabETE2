// Fetch Dog Images and Display on New Page
document.getElementById('fetchBtn').addEventListener('click', function () {
    window.location.href = "index1.html";
});

document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.includes("index1.html")) {
        fetch('https://dog.ceo/api/breeds/image/random/3')
            .then(response => response.json())
            .then(data => {
                const container = document.getElementById('dogImagesContainer');
                data.message.forEach(imageUrl => {
                    const img = document.createElement('img');
                    img.src = imageUrl;
                    img.alt = "Random Dog";
                    container.appendChild(img);
                });
            })
            .catch(error => console.log(error));
    }
});

// Form Validation
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Sign up successful!');
});
