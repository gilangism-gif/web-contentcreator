// Menampilkan dialog welcome saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Tampilkan dialog welcome setelah 1 detik
    setTimeout(function() {
        document.getElementById('welcomeDialog').style.display = 'flex';
    }, 1000);
    
    // Tambahkan efek aktif pada menu navigasi
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = getCurrentPage();
    
    navLinks.forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
            link.style.fontWeight = '600';
        }
        
        // Tambahkan konfirmasi untuk link login
        if (link.getAttribute('href').includes('login')) {
            link.addEventListener('click', function(e) {
                if (!confirm('Anda akan menuju halaman login admin. Lanjutkan?')) {
                    e.preventDefault();
                }
            });
        }
    });
    
    // Inisialisasi produk dari database (simulasi)
    loadProducts();
});

// Fungsi untuk mendapatkan halaman saat ini
function getCurrentPage() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('page') || 'home';
}

// Fungsi untuk menutup dialog
function closeDialog() {
    document.getElementById('welcomeDialog').style.display = 'none';
}

// Fungsi untuk memuat produk (simulasi data dari database)
function loadProducts() {
    // Ini akan diganti dengan data dari database PHP
    console.log('Memuat data produk dari database...');
    
    // Simulasi data produk
    const products = [
        { id: 1, name: "Paket Video Profil", description: "Pembuatan video profil perusahaan dengan durasi 2-3 menit", price: "Rp 2.500.000", icon: "fas fa-film" },
        { id: 2, name: "Konten Media Sosial", description: "Manajemen dan pembuatan konten untuk Instagram & TikTok (10 post/bulan)", price: "Rp 1.800.000", icon: "fas fa-hashtag" },
        { id: 3, name: "Video Iklan", description: "Pembuatan video iklan produk dengan konsep kreatif", price: "Rp 3.500.000", icon: "fas fa-ad" },
        { id: 4, name: "Konsultasi Branding", description: "Konsultasi personal untuk branding digital bisnis Anda", price: "Rp 1.200.000", icon: "fas fa-chart-line" },
        { id: 5, name: "Editing Video", description: "Jasa editing video dengan efek dan transisi profesional", price: "Rp 800.000/jam", icon: "fas fa-cut" },
        { id: 6, name: "Foto Produk", description: "Pemotretan produk untuk katalog dan media sosial", price: "Rp 1.500.000/sesi", icon: "fas fa-camera" }
    ];
    
    // Simpan data ke localStorage untuk simulasi
    localStorage.setItem('products', JSON.stringify(products));
}

// Fungsi untuk memesan produk (dengan dialog konfirmasi)
function orderProduct(productName, productPrice) {
    const name = prompt(`Silakan masukkan nama Anda untuk memesan ${productName}:`, "Nama Anda");
    
    if (name) {
        const email = prompt("Masukkan email Anda untuk konfirmasi pemesanan:", "email@example.com");
        
        if (email) {
            const confirmMessage = `Terima kasih ${name}! Anda telah memesan ${productName} dengan harga ${productPrice}. Konfirmasi akan dikirim ke ${email}.`;
            alert(confirmMessage);
            
            // Log untuk simulasi
            console.log(`Pemesanan: ${productName} oleh ${name} (${email}) - ${productPrice}`);
        }
    }
}

// Fungsi untuk validasi form login
function validateLoginForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (!username || !password) {
        alert('Username dan password harus diisi!');
        return false;
    }
    
    // Simulasi login (dalam implementasi nyata ini akan dicek dengan PHP)
    if (username === 'admin' && password === 'admin123') {
        alert('Login berhasil! Mengarahkan ke halaman admin...');
        
        // Simulasi redirect ke halaman admin
        setTimeout(function() {
            window.location.href = 'admin/index.php';
        }, 1000);
        
        return false; // Mencegah form submit default
    } else {
        alert('Username atau password salah! Coba: admin / admin123');
        return false;
    }
}

// Fungsi untuk menampilkan video
function showVideo(videoId) {
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    const videoHtml = `
        <div class="video-modal">
            <div class="video-container">
                <iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>
                <button onclick="closeVideo()" class="btn-close-video">Tutup</button>
            </div>
        </div>
    `;
    
    // Tambahkan ke body
    const videoDiv = document.createElement('div');
    videoDiv.innerHTML = videoHtml;
    document.body.appendChild(videoDiv);
    
    // Tambahkan CSS untuk modal video
    const style = document.createElement('style');
    style.textContent = `
        .video-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
        }
        .video-container {
            background: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
        }
        .btn-close-video {
            margin-top: 15px;
            padding: 10px 20px;
            background: #3949ab;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);
}

function closeVideo() {
    const videoModal = document.querySelector('.video-modal');
    if (videoModal) {
        videoModal.remove();
    }
}