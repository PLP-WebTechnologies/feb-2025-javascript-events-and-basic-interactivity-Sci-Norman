// Ensure DOM is fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', () => {
    // Magic Button Event Handling
    const magicButton = document.getElementById('magicButton');
    const buttonStatus = document.getElementById('buttonStatus');

    magicButton.addEventListener('click', () => {
        magicButton.textContent = 'Clicked!';
        magicButton.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        buttonStatus.textContent = 'You clicked the button!';
    });

    magicButton.addEventListener('mouseover', () => {
        buttonStatus.textContent = 'Hovering...';
        magicButton.style.transform = 'scale(1.1)';
    });

    magicButton.addEventListener('mouseout', () => {
        buttonStatus.textContent = 'Try clicking, hovering, or double-clicking!';
        magicButton.style.transform = 'scale(1)';
    });

    magicButton.addEventListener('dblclick', () => {
        buttonStatus.textContent = 'Secret Double Click Activated! 🎉';
        document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    });

    document.addEventListener('keypress', (e) => {
        buttonStatus.textContent = `Key pressed: ${e.key}`;
    });

    // Image Gallery
    const galleryImage = document.getElementById('galleryImage');
    const prevImage = document.getElementById('prevImage');
    const nextImage = document.getElementById('nextImage');
    const images = [
        'https://via.placeholder.com/400x300?text=Image+1',
        'https://via.placeholder.com/400x300?text=Image+2',
        'https://via.placeholder.com/400x300?text=Image+3'
    ];
    let currentImageIndex = 0;

    function updateGalleryImage() {
        galleryImage.src = images[currentImageIndex];
    }

    prevImage.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateGalleryImage();
    });

    nextImage.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateGalleryImage();
    });

    // Tabs
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active classes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add active class to clicked button and corresponding pane
            button.classList.add('active');
            document.getElementById(button.dataset.tab).classList.add('active');
        });
    });

    // Form Validation
    const form = document.getElementById('userForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validateForm() {
        let isValid = true;

        // Name validation
        if (!nameInput.value.trim()) {
            nameError.textContent = 'Name is required';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        // Email validation
        if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // Password validation
        if (passwordInput.value.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }

        return isValid;
    }

    // Real-time validation
    [nameInput, emailInput, passwordInput].forEach(input => {
        input.addEventListener('input', () => {
            validateForm();
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Form submitted successfully! 🎉');
            form.reset();
        }
    });
});