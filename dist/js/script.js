
//navbar fixed
window.onscroll= function () {
    const header=document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
  };

//hambuger menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#navMenu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
  });

//changeText
const texts = ["Frontend Developer", "Web Developer "];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

(function type() {
  const element = document.getElementById("changeText");
  const fullText = texts[textIndex];

  element.textContent = isDeleting
    ? fullText.substring(0, charIndex--)
    : fullText.substring(0, charIndex++);

  if (!isDeleting && charIndex === fullText.length) {
    isDeleting = true;
    setTimeout(type, 2000); // jeda sebelum menghapus teks
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, 500); // jeda sebelum mengetik teks berikutnya
  } else {
    setTimeout(type, isDeleting ? 100 : 200);
  }
})();