
const tabLinks = document.querySelectorAll('.tab-links');
const tabContents = document.querySelectorAll('.tab-contents');

tabLinks.forEach((tabLink, index) => {
   tabLink.addEventListener('click', (e) => {
      tabLinks.forEach(link => link.classList.remove('active-link'));
      tabContents.forEach(content => content.style.display = 'none');

      e.target.classList.add('active-link');
      tabContents[index].style.display = 'block';
   });
});

const sideMenu = document.querySelector("#sideMenu")
function openMenu() {
   sideMenu.style.right = "0";
}

function closeMenu() {
   sideMenu.style.right = "-200px";
}




