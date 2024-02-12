const button = document.getElementById('btn');
const textElement = document.getElementById('text');

button.addEventListener('click', () => {

  setTimeout(() => {
    textElement.textContent = 'ボタンをクリックしました';
  }, 2000);
});
