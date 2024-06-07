onload = () => {
  document.body.classList.remove("container");
};

document.addEventListener('click', () => {
  const audio = document.getElementById('background-audio');
  if (audio.paused) {
    audio.play();
  }
});






