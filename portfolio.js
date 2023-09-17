const navToggle = document.querySelector('.navt');
const navLinks = document.querySelectorAll('.navlink');
navToggle.addEventListener('click', () =>{
    document.body.classList.toggle('nav-open');
});
navLinks.forEach(link => {
    link.addEventListener('click', () => 
    {
        document.body.classList.remove('nav-open');
    })
})
