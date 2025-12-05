fetch('navbar.html')
.then(response => response.text())
.then(data => {document.getElementById('navbar-container').innerHTML = data});


function toggleSidebar(){
  const sidebar = document.getElementById('sideBar');
  sidebar.classList.toggle('visible');
}



document.body.addEventListener('click', function(event) {
  // Check if the clicked element (or any of its parents) has the 'menubutton' class
  if (event.target.closest('.menubutton')) {
      toggleSidebar();
  }
  if (event.target.closest('#closebutton')) {
    toggleSidebar();
}
});
