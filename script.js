const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");


function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-white/50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-[#11001f]', 'dark:shadow-white/20');
        navLinks.classList.remove('bg-white', 'shadow-sm', 'dark:border', 'dark:border-white/70', 'dark:bg-transparent');
    }else{
        navBar.classList.remove('bg-white/50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-[#11001f]', 'dark:shadow-white/20');
        navLinks.classList.add('bg-white', 'shadow-sm', 'dark:border', 'dark:border-white/70', 'dark:bg-transparent');
    }
})

function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");

    localStorage.theme =
      document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
  }

  if (localStorage.theme === "dark") {
    document.documentElement.classList.add("dark");
  }