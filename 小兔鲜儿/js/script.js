const toggle = document.querySelector('.toggle'),
  card = document.querySelector('.card')

toggle.onclick = () => {
  card.classList.toggle('active')
}
document
  .getElementById("goToIndex")
  .addEventListener("click", function () {
    window.location.href = "index2.html";
  });