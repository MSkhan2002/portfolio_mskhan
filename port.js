function togglemenu() {
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.humburger-icon');
    const body = document.querySelector('body'); // Body ko select karna hai blur ke liye
  
    menuLinks.classList.toggle('open');
    hamburgerIcon.classList.toggle('open');
    body.classList.toggle('blur-background'); // Yeh line background blur karegi
  }
  