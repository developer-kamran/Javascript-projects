//   SETTING FOOTER YEAR
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

//   SETTING NAVBAR TOGGLE FUNCTIONALITY
const navTogggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navTogggle.addEventListener('click', () => {
  // linksContainer.classList.toggle('show-links');

  const containerHeight = linksContainer.getBoundingClientRect().height;
  //   console.log(containerHeight);
  const linksHeight = links.getBoundingClientRect().height;
  //   console.log(linksHeight);

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

//FIXED NAVBAR
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
  // console.log(window.pageYOffset)
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  // console.log('nav Height is:', navHeight);
  // console.log(scrollHeight);
  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }

  if (scrollHeight > 600) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

//Setting links height due to fixe nav
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const id = e.currentTarget.getAttribute('href').slice(1);
    // console.log(id);
    const element = document.getElementById(id);
    // calculate the height
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;
    if (!fixedNav) {
      position -= navHeight;
    }
    if (navHeight > 82) {
      position += containerHeight;
    }
    // console.log(position)
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
