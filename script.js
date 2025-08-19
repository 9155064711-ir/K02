const notification = document.getElementById('notification');
const contactBtn = document.getElementById('contact-btn');
const aboutBtn = document.getElementById('about-btn');

function showNotification(message, className) {
    notification.textContent = message;
    notification.className = 'notification ' + className;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

contactBtn.addEventListener('click', () => {
    showNotification('شماره تماس 09153885542', 'notification-contact');
});

aboutBtn.addEventListener('click', () => {
    showNotification('ایمیل kambizmamduhi@gmail.com', 'notification-about');
});
