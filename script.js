// Кнопки з анімацією
const buttons = document.querySelectorAll('.action-btn');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#ffcc80';
        button.style.color = '#000';
    });

    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#ff5722';
        button.style.color = '#fff';
    });
});
