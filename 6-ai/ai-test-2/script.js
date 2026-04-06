document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('openModalBtn');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const closeIconBtn = document.getElementById('closeIconBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const resetForm = document.getElementById('resetForm');
    const emailInput = document.getElementById('emailInput');

    // Function to open modal
    const openModal = () => {
        modalBackdrop.classList.add('active');
        // Small delay to focus input for better UX after animation starts
        setTimeout(() => {
            emailInput.focus();
        }, 100);
    };

    // Function to close modal
    const closeModal = () => {
        modalBackdrop.classList.remove('active');
        // Reset form when closing
        setTimeout(() => {
            resetForm.reset();
            const submitBtn = document.getElementById('submitBtn');
            submitBtn.innerHTML = 'Send Reset Link';
            submitBtn.disabled = false;
        }, 300); // Wait for transition to finish
    };

    // Event listeners
    openModalBtn.addEventListener('click', openModal);
    closeIconBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent accidental form submission
        closeModal();
    });

    // Close when clicking outside the modal
    modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) {
            closeModal();
        }
    });

    // Handle form submission
    resetForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = emailInput.value;
        const submitBtn = document.getElementById('submitBtn');
        
        // Simulate API call and loading state
        submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
            alert(`Password reset link sent to ${email}`);
            closeModal();
        }, 1500);
    });

    // Keyboard support - Escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
            closeModal();
        }
    });
});
