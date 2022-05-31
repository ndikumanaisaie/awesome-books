export default () => {
  // Add navigation to the Awesome Book project
  const menu = document.getElementById('menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const listSection = document.getElementById('book-list');
  const formSection = document.getElementById('form-section');
  const contactSection = document.getElementById('contact-section');
  const nav = document.getElementById('nav');

  const menuList = document.querySelectorAll('.nav-item');

  const hamb = document.querySelector('.hamburger');
  const closModal = document.querySelector('.close-modal');
  hamb.addEventListener('click', () => {
    nav.style.display = 'block';
    hamb.style.display = 'none';
    closModal.style.display = 'block';
  });

  closModal.addEventListener('click', () => {
    nav.style.display = 'none';
    hamb.style.display = 'block';
    closModal.style.display = 'none';
  });

  menuList.forEach((list) => {
    list.addEventListener('click', () => {
      nav.style.display = 'none';
      hamb.style.display = 'block';
      closModal.style.display = 'none';
    });
  });

  window.addEventListener('load', () => {
    menuList[0].classList.add('active');
    formSection.style.display = 'none';
    contactSection.style.display = 'none';
  });

  // For desktop
  menu.addEventListener('click', (e) => {
    if (e.target.classList.contains('list')) {
      formSection.style.display = 'none';
      contactSection.style.display = 'none';
      listSection.style.display = 'flex';
      for (let i = 0; i < menuList.length; i += 1) {
        menuList[i].classList.remove('active');
      }
      e.target.classList.add('active');
    } else if (e.target.classList.contains('add-new')) {
      formSection.style.display = 'flex';
      formSection.style.flexDirection = 'column';
      contactSection.style.display = 'none';
      listSection.style.display = 'none';

      for (let i = 0; i < menuList.length; i += 1) {
        menuList[i].classList.remove('active');
      }
      e.target.classList.add('active');
    } else if (e.target.classList.contains('contact')) {
      formSection.style.display = 'none';
      contactSection.style.display = 'flex';
      listSection.style.display = 'none';

      for (let i = 0; i < menuList.length; i += 1) {
        menuList[i].classList.remove('active');
      }
      e.target.classList.add('active');
    }
  });

  // for mobile menu

  mobileMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('list')) {
      formSection.style.display = 'none';
      contactSection.style.display = 'none';
      listSection.style.display = 'flex';
    } else if (e.target.classList.contains('add-new')) {
      formSection.style.display = 'flex';
      formSection.style.flexDirection = 'column';
      contactSection.style.display = 'none';
      listSection.style.display = 'none';
    } else if (e.target.classList.contains('contact')) {
      formSection.style.display = 'none';
      contactSection.style.display = 'flex';
      listSection.style.display = 'none';
    }
  });
};