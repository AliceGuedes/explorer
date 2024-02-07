const buttons = document.querySelectorAll('button');
const audios = document.querySelectorAll('audio');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    toggleAudio(button.id);
  });
});

function toggleAudio(id) {
  audios.forEach(audio => {
    if (audio.id === `audio${id.charAt(0).toUpperCase() + id.slice(1)}`) {
      if (audio.paused) {
        audio.play();
        document.getElementById(id).classList.add('active');
      } else {
        audio.pause();
        audio.currentTime = 0; // Volta para o início da música
        document.getElementById(id).classList.remove('active');
      }
    } else {
      const correspondingButtonId = audio.id.charAt(5).toLowerCase() + audio.id.slice(6);
      document.getElementById(correspondingButtonId).classList.remove('active');
      audio.pause();
      audio.currentTime = 0;
    }
  });
}