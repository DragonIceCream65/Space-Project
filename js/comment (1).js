const toggleBtn=document.querySelector('.toggle_btn')
const toggleBtnIcon=document.querySelector('.toggle_btn i')
const dropdownMenu=document.querySelector('.dropdown_menu')
toggleBtn.onclick=function(){
    dropdownMenu.classList.toggle('open')        
}
const isOpen =dropdownMenu.classList.contains('open')

toggleBtnIcon.classList =isOpen
?'fa-solid fa-xmark'
:'fa-solid fa-bars'

let currentIndex = 0;
const backgrounds = [
    'https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
];

document.getElementById('cambiarFondo').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % backgrounds.length;
    document.body.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
});
