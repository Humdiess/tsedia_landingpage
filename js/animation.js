const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const element = entry.target;
            const delay = element.getAttribute('data-delay') || 0;

            // Terapkan delay dan tambahkan kelas 'show' setelah waktu yang ditentukan
            setTimeout(() => {
                element.classList.add('show');
            }, delay);
            
            // Unobserve agar tidak memicu lagi setelah elemen terlihat
            // observer.unobserve(element);
        } else {
            // Opsional: Hapus kelas 'show' jika elemen keluar dari viewport
            // Ini akan menonaktifkan animasi ulang ketika elemen hilang dari viewport
            entry.target.classList.remove('show');
        }
    });
});

// Ambil elemen-elemen yang memiliki kelas animasi yang berbeda
const hiddenElements = document.querySelectorAll('.slide-left, .slide-right, .fade-in');
hiddenElements.forEach((element) => observer.observe(element));
