  // function toggleMenu() 
  // {
  //   const links = document.getElementById('navLinks');
  //   links.classList.toggle('open');
  // }

  // // Close the menu when any nav link is clicked (on mobile)
  // document.addEventListener('DOMContentLoaded', function () 
  // {
  //   const navLinks = document.querySelectorAll('#navLinks a');
  //   navLinks.forEach(link => 
  //   {
  //     link.addEventListener('click', () => 
  //     {
  //       const linksContainer = document.getElementById('navLinks');
  //       linksContainer.classList.remove('open');
  //     });
  //   });
  // });



  function toggleMenu() {
  const links = document.getElementById('navLinks');
  links.classList.toggle('open');
}

// Close the menu when any nav link is clicked
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('#navLinks a');
  const linksContainer = document.getElementById('navLinks');
  const menuToggle = document.querySelector('.menu-toggle');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      linksContainer.classList.remove('open');
    });
  });

  // Close the menu if clicking outside of it
  document.addEventListener('click', function (event) {
    const isClickInsideMenu = linksContainer.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);

    if (!isClickInsideMenu && !isClickOnToggle) {
      linksContainer.classList.remove('open');
    }
  });
});
