  const startButton = document.getElementById('startButton');

  if (startButton) {
    startButton.addEventListener('click', () => {
      window.location.href = 'home.html'; // имя следующего экрана
    });
  }