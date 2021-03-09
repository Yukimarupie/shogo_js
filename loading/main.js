const loadingWrap = document.getElementById('loadingWrap');
function lodingStop() {
  loadingWrap.classList.add('loadingNone');
}
window.addEventListener('load', lodingStop());