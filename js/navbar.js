window.addEventListener('scroll', function() {
    // Mendapatkan elemen-elemen yang diperlukan
    const navItems = document.getElementsByClassName('nav-item-text');
    const darkLogo = document.getElementsByClassName('logo-dark');
    const lightLogo = document.getElementsByClassName('logo-light');
    
    // Fungsi untuk mengubah tampilan item navigasi
    const toggleNavItems = (scrollY) => {
      Array.from(navItems).forEach(item => {
        // Menghapus kelas 'text-white' jika scrollY tidak sama dengan 0
        item.classList.remove('text-white'), scrollY === 0 ? item.classList.add('text-white') : item.classList.remove('text-white');
        // Mengubah tampilan item navigasi sesuai dengan scrollY
        item.classList.toggle(['text-jackarta-900', 'dark:text-white'], scrollY !== 0);
      });
    };

    // Fungsi untuk mengubah tampilan logo
    const toggleLogoVisibility = (scrollY) => {
      // Mendeteksi apakah mode gelap aktif
      const isDarkMode = document.body.classList.contains('dark');
      // Mengubah tampilan logo gelap
      Array.from(darkLogo).forEach(logo => {
        logo.classList.toggle('hidden', isDarkMode ? false : scrollY !== 0);
      });
      // Mengubah tampilan logo terang
      Array.from(lightLogo).forEach(logo => {
        logo.classList.toggle('hidden', isDarkMode ? false : scrollY === 0);
      });
    };

    // Memanggil fungsi untuk mengubah tampilan item navigasi dan logo
    toggleNavItems(window.scrollY);
    toggleLogoVisibility(window.scrollY);
  });



// active state

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.js-mobile-menu nav ul li a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
