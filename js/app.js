//* Define Global Variables
const sections = document.querySelectorAll('section');
const nav = document.getElementById('navlist');
const hero = document.querySelector('.main-content');
const topbtn = document.querySelector('#top');

//* Helper Function of Back To Top Button
function backTop() {
  topbtn.addEventListener("click",() => {
      window.scrollTo({ top:0, behavior: "smooth", });
  });
}
backTop();

//* Helper Function of Build Navigation Bar Dynamically
function navMenu(){
  sections.forEach((el) => {
    let items = document.createElement('li');
    items.innerHTML = ` <a id= "menubar-${el.id}" class= "menu"> ${el.firstElementChild.firstElementChild.textContent} </a> `;
    items.addEventListener('click', () => { el.scrollIntoView({  behavior: 'smooth', block: 'center', });
    });
    nav.appendChild(items);
  });
}
navMenu();

//* Helper Function To Set Active Section & Navbar Item 
function setActive(){  
  const selector = { rootMargin: '-335px 0px -335px 0px ', };
  const i = (e) => { e.forEach((sec) => { const navItem = document.querySelector(`#menubar-${sec.target.id}`);
      if (sec.isIntersecting) {
        navItem.classList.add('active');
        sec.target.classList.add('active-section');
      } 
      else {
        navItem.classList.remove('active');
        sec.target.classList.remove('active-section');
      }
    });
  };
  const viewer = new IntersectionObserver(i, selector);
  sections.forEach((section) => viewer.observe(section));  
}
setActive();
