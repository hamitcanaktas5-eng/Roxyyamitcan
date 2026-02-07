/**
 * ROXY STORE - GLOBAL JS KONTROL MERKEZİ
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. GLOBAL MENÜ YÖNETİMİ ---
    const sideMenu = document.getElementById('side-menu');
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenuBtn = document.getElementById('close-menu-btn');

    if (menuToggle && sideMenu) {
        menuToggle.onclick = () => sideMenu.style.width = "300px";
    }

    if (closeMenuBtn && sideMenu) {
        closeMenuBtn.onclick = () => sideMenu.style.width = "0";
    }

    // --- 2. DEĞERLENDİRME SAYFASI ÖZEL (Sadece o sayfada çalışır) ---
    const queryModal = document.getElementById('query-modal');
    const openModalBtn = document.getElementById('open-query-modal');
    const closeModalBtn = document.getElementById('close-modal');

    if (openModalBtn && queryModal) {
        openModalBtn.onclick = () => {
            queryModal.classList.remove('hidden');
            document.body.style.overflow = "hidden";
        };
    }

    if (closeModalBtn && queryModal) {
        closeModalBtn.onclick = () => {
            queryModal.classList.add('hidden');
            document.body.style.overflow = "auto";
        };
    }

    // Sorgulama Butonu Fonksiyonu
    const searchBtn = document.getElementById('q-btn');
    if (searchBtn) {
        searchBtn.onclick = () => {
            const results = document.getElementById('q-results');
            searchBtn.innerText = "Sorgulanıyor...";
            setTimeout(() => {
                searchBtn.innerText = "Sorgulamayı Başlat";
                results.innerHTML = `
                    <div class="glass-card" style="margin-top:20px; border-left:4px solid #38bdf8; text-align:left;">
                        <p style="color:#38bdf8; font-weight:bold;">Yorum Durumu: Onaylandı</p>
                        <p style="margin-top:10px;">Harika bir hizmet!</p>
                        <div style="background:rgba(0,0,0,0.3); padding:10px; margin-top:10px; border-radius:10px;">
                            <small style="color:#818cf8; font-weight:900;">ROXY STORE YANITI:</small>
                            <p>Teşekkür ederiz!</p>
                        </div>
                    </div>`;
            }, 1000);
        };
    }

    // --- 3. DIŞARI TIKLAMA KONTROLÜ ---
    window.onclick = (e) => {
        // Menü dışına tıklandığında kapat
        if (sideMenu && sideMenu.style.width === "300px") {
            if (!sideMenu.contains(e.target) && e.target !== menuToggle && !menuToggle.contains(e.target)) {
                sideMenu.style.width = "0";
            }
        }
        // Modal dışına tıklandığında kapat
        if (e.target === queryModal) {
            queryModal.classList.add('hidden');
            document.body.style.overflow = "auto";
        }
    };
});
