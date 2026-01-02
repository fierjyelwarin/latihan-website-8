// Tunggu sampai DOM selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
    
    // Dropdown Utama (Navbar)
    const mainMenu = document.getElementById("mainMenu");
    const mainDropdown = document.getElementById("mainDropdown");

    // Dropdown Login/Logout (Header)
    const authTrigger = document.getElementById("authTrigger");
    const authDropdown = document.getElementById("authDropdown");

    // Event Klik Menu Utama
    if(mainMenu) {
        mainMenu.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation(); // Biar gak kena event 'click' document
            mainDropdown.classList.toggle("show");
            if(authDropdown) authDropdown.classList.remove("show");
        });
    }

    // Event Klik Auth (Log in/out)
    if(authTrigger) {
        authTrigger.addEventListener("click", function (e) {
            e.stopPropagation(); 
            authDropdown.classList.toggle("show");
            if(mainDropdown) mainDropdown.classList.remove("show");
        });
    }

    // Menutup dropdown jika klik di luar area
    document.addEventListener("click", function (e) {
        // Tutup jika klik bukan di area Main Menu
        if (mainMenu && !mainMenu.contains(e.target) && !mainDropdown.contains(e.target)) {
            mainDropdown.classList.remove("show");
        }
        // Tutup jika klik bukan di area Auth Trigger
        if (authTrigger && !authTrigger.contains(e.target) && !authDropdown.contains(e.target)) {
            authDropdown.classList.remove("show");
        }
    });
});