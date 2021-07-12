const doc = document;

const playSound = (e) => {
  const audio = doc.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = doc.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0 // rewinds to start of audio to allow for playing in quick succession
  audio.play();
  key.classList.add('playing');
}

const removeTransition = (e) => {
  if (e.propertyName !== 'transform') return; // skip if not a transform
  e.target.classList.remove('playing');
}

const keys = doc.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound); 

