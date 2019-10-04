const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

function addNavItems(){
  const navA = document.querySelectorAll('a');
  const navImg = document.getElementById('logo-img');
  let startObj = 1;
  navA.forEach((item)=>{
    item.textContent = siteContent.nav[`nav-item-${startObj}`];
    startObj++;
  });
  navImg.src = 'img/logo.png';

}

function addCtaItems(){
  const h1EL = document.getElementsByTagName('h1');
  const buttonEL = document.getElementsByTagName('button');
  const ctaImg = document.getElementById('cta-img');
  h1EL[0].textContent = siteContent.cta.h1;
  buttonEL[0].textContent = siteContent.cta.button;
  ctaImg.src = 'img/header-img.png'

  buttonEL[0].addEventListener('click',(event)=>{
    buttonEL[0].textContent = 'you clicked the button!';
  });

}

function addH4(){
  const h4Items = document.getElementsByTagName('h4');
  h4Items[0].textContent = siteContent["main-content"]["features-h4"];
  h4Items[1].textContent = siteContent["main-content"]["about-h4"];
  h4Items[2].textContent = siteContent["main-content"]["services-h4"];
  h4Items[3].textContent = siteContent["main-content"]["product-h4"];
  h4Items[4].textContent = siteContent["main-content"]["vision-h4"];
  h4Items[5].textContent = siteContent.contact["contact-h4"];
}

function addContent(){
  const pItems = document.getElementsByTagName('p');
  const contentImg = document.getElementById('middle-img');
  pItems[0].textContent = siteContent["main-content"]["features-content"];
  pItems[1].textContent = siteContent["main-content"]["about-content"];
  pItems[2].textContent = siteContent["main-content"]["services-content"];
  pItems[3].textContent = siteContent["main-content"]["product-content"];
  pItems[4].textContent = siteContent["main-content"]["vision-content"];
  pItems[5].textContent = siteContent.contact["address"];
  pItems[6].textContent = siteContent.contact["phone"];
  pItems[7].textContent = siteContent.contact["email"];
  pItems[8].textContent = siteContent.footer.copyright;
  contentImg.src = 'img/mid-page-accent.jpg';

}

function addNewContent(){
  const nav = document.querySelector('nav');
  const navItem1 = document.createElement('a');
  const navItem2 = document.createElement('a');
  navItem1.textContent = 'Discord';
  navItem2.textContent = 'Youtube';
  nav.appendChild(navItem1);
  nav.prepend(navItem2);
  const navEL = document.querySelectorAll('a');
  navEL.forEach((item)=>{
    item.style.color = 'green';
  })
}

addNavItems();
addCtaItems();
addH4();
addContent();
addNewContent();

