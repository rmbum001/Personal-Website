const showMenus =(toggleId, NavId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(NavId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenus('nav_toggle','navmenu')

const navLink = document.querySelector('nav_link')
function linkAction(){
    const navMenu = document.getElementById('navmenu')
    navMenu.classList.remove('show')
}
 navLink.forEach(n => n.addEventListener('click',linkAction) )

 const sections = document.querySelectorAll('section[id]')
 window.addEventListener('scroll' scrollActive)

 function scrollActive(){
     const scrollY = window.pageYOffset

     sections.forEach(current =>{
         const sectionHeight  = current.offsetHeight
         const sectionTop = current.offsetTop - 50;
         sectionId = current.getAttribute('id')
        
         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
             document.querySelector('.navmenu a[href*=]' + sectionId +']').classList.add('active')
         } else{
            document.querySelector('.navmenu a[href*=]' + sectionId +']').classList.remove('active')
         }
     })
 }