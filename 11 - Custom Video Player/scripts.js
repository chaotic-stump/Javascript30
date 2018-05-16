/* Get Our Elements */
const play = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('player__slider');

/* Build out functions */
function togglePlay() {
  const method = video.paused ? 'play': 'pause';
  video[method]();

  // if (video.paused) {
  //   video.play()
  // } else {
  //   video.paused();
  // }
}

function updateButton() {
  const icon = this.paused ? '►' :'❚❚';
  toggle.textContent = icon;
  console.log(icon);
}

function skip() {
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));