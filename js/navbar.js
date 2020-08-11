'use strict';

/*window.addEventListener ? 
window.addEventListener("load",script_js,false) : 
window.attachEvent && window.attachEvent("onload",script_js);

function script_js () {
	const burger = document.getElementById('hamburger');
	function toggleMenu(visible) { 
	  document.querySelector('.mobile_menu').classList.toggle('show_mobile_menu', visible);
	}

	burger.addEventListener('click', function(e) {
	  e.preventDefault();
	  toggleMenu();
    });

    const smile = document.getElementById('smile')
    function toggleColors() { 
        document.querySelector('.day_mode').classList.toggle('.night_mode');
    }

    smile.addEventListener('click', function(e){
        e.preventDefault();
        toggleColors()
    })

}*/

const menuBtn = document.getElementById('hamburger');
const mainMenu = document.querySelector('.mobile_menu');

function openMenu () {
  mainMenu.classList.toggle('show_mobile_menu');
}

menuBtn && menuBtn.addEventListener('click', openMenu);