const sub_links = [
  {
    page: 'products',
    links: [
      {
        label: 'payment',
        icon: '<i class="fas fa-credit-card"></i>',
        url: '/products',
      },
      {
        label: 'terminal',
        icon: '<i class="fas fa-credit-card"></i>',
        url: '/products',
      },
      {
        label: 'connect',
        icon: '<i class="fas fa-credit-card"></i>',
        url: '/products',
      },
    ],
  },
  {
    page: 'developers',
    links: [
      {
        label: 'plugins',
        icon: '<i class="fas fa-briefcase"></i>',
        url: '/products',
      },
      {
        label: 'libraries',
        icon: '<i class="fas fa-briefcase"></i>',
        url: '/products',
      },
      {
        label: 'help',
        icon: '<i class="fas fa-briefcase"></i>',
        url: '/products',
      },
      {
        label: 'billing',
        icon: '<i class="fas fa-briefcase"></i>',
        url: '/products',
      },
    ],
  },
  {
    page: 'company',
    links: [
      {
        label: 'about',
        icon: '<i class="fas fa-book"></i>',
        url: '/products',
      },
      {
        label: 'customers',
        icon: '<i class="fas fa-book"></i>',
        url: '/products',
      },
    ],
  },
];

const sidebar = document.querySelector('.sidebar-wrapper'),
  sidebar_links = document.querySelector('.sidebar-links'),
  sidebar_sublinks = document.querySelector('.sidebar-sublinks'),
  closeBtn = document.querySelector('.close-btn'),
  nav = document.querySelector('.nav'),
  navToggle = document.querySelector('.toggle-btn'),
  linkBtn = document.querySelectorAll('.link-btn'),
  aside = document.querySelector('.submenu');

window.addEventListener('DOMContentLoaded', () => {
  setSubLinks(sub_links);
});

//            Sidebar

navToggle.addEventListener('click', () => {
  sidebar.classList.toggle('show');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show');
});

function setSubLinks(sub_links) {
  let subLinks = sub_links
    .map((link) => {
      return `
            <article>
            <h4>${link.page}</h4>
            <div class='sidebar-sublinks'>
            ${link.links
              .map((link) => {
                const { label, icon, url } = link;
                return `
                <a  href=${url}>
                  ${icon} ${label}
                </a>
                `;
              })
              .join('')}
          
            </div>
            </article>
        `;
    })
    .join('');
  sidebar_links.innerHTML = subLinks;
}
