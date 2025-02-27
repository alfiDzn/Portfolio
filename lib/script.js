anime({
    targets: '.anyong',
    direction: 'alternate',
    loop: true,
    easing: 'steps(2)',
    duration: 500,
    rotate: [-2,2],
    scale: [1,1.03],
})

const viewmyporto = document.querySelector('.viewporto');
const home = document.querySelector('.homenav');
const about = document.querySelector('.aboutnav');
const tools = document.querySelector('.toolsnav');
const projects = document.querySelector('.projectsnav');
const education = document.querySelector('.educationnav');

viewmyporto.addEventListener('click', function() {
    document.querySelector('#projects').scrollIntoView({
        behavior: 'smooth'
    })
})

home.addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah perilaku default dari anchor tag
    document.querySelector('#home').scrollIntoView({
        behavior: 'smooth'
    });
});

about.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});

tools.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#tools').scrollIntoView({
        behavior: 'smooth'
    });
});

projects.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#projects').scrollIntoView({
        behavior: 'smooth'
    });
});

education.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#education').scrollIntoView({
        behavior: 'smooth'
    });
});

const viewallporto = document.querySelector('.viewall');

viewallporto.addEventListener('click', function() {
    window.location.href = 'projects.html';
});

const imghome = document.querySelectorAll('.imghome');

anime({
    targets: imghome,
    rotate: [1],
    loop: true,
    direction: 'alternate',
    easing: 'steps(2)',
    duration: 500,
})

const cardcontent = document.querySelectorAll('.card-content');

anime({
    targets: cardcontent,
    scale: [
        {value: 1.03, easing: 'easeInOutExpo', duration: 400},
        {value: 1, easing: 'easeInOutExpo', duration: 600}
      ],
    loop: true,
    easing: 'easeInOutExpo',
    delay: anime.stagger(200),
})

const contactme = document.querySelector('.contactme');

contactme.addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    })
})


const socmed = document.querySelectorAll('.icon-socmed');

socmed.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        anime({
            targets: icon,
            scale: 1.1,
            duration: 200,
            easing: 'easeInOutExpo',
        })
    })

    icon.addEventListener('mouseleave', function() {
        anime({
            targets: icon,
            scale: 1,
            duration: 200,
            easing: 'easeInOutExpo',
        })
    })
})


const icons = document.querySelectorAll('.icons');

icons.forEach(tools => {
    tools.addEventListener('mouseenter', function() {
        anime({
            targets: tools,
            scale: 1.1,
            duration: 100,
            easing: 'easeInOutExpo',
        })
    })

    tools.addEventListener('mouseleave', function() {
        anime({
            targets: tools,
            scale: 1,
            duration: 100,
            easing: 'easeInOutExpo',
        })
    })
})

// Fungsi untuk menandai link navigasi yang aktif
function setActiveNav() {
    const sections = document.querySelectorAll('section'); // Ambil semua section
    const navLinks = document.querySelectorAll('.navlist a'); // Ambil semua link navigasi
  
    let currentSection = '';
  
    // Cek setiap section untuk menentukan section yang sedang aktif
    sections.forEach(section => {
      const sectionTop = section.offsetTop; // Posisi atas section
      const sectionHeight = section.clientHeight; // Tinggi section
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id'); // Ambil ID section yang sedang aktif
      }
    });
  
    // Hapus class 'active' dari semua link navigasi
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
  
    // Tambahkan class 'active' ke link navigasi yang sesuai dengan section aktif
    navLinks.forEach(link => {
      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('active');
      }
    });
  }
  
  // Panggil fungsi saat halaman dimuat
  document.addEventListener('DOMContentLoaded', setActiveNav);
  
  // Panggil fungsi saat terjadi scroll
  document.addEventListener('scroll', setActiveNav);


  const numabout = document.querySelectorAll('.numabout');

  anime({
    targets: numabout,
    scale: [
        {value: 1.03, easing: 'easeInOutExpo', duration: 400},
        {value: 1, easing: 'easeInOutExpo', duration: 600}
      ],
    duration: 400,
    easing: 'easeInOutExpo',
    delay: anime.stagger(200),
    loop: true,
  });

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
})


