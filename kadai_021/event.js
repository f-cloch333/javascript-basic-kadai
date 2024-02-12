const button = document.getElementById('btn');
const textElement = document.getElementById('text');

button.addEventListener('click', () => {

  setTimeout(() => {
    textElement.textContent = 'ボタンがクリックされました';
  }, 2000);
});
