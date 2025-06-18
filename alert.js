// alert.js

// Fungsi untuk mencegah scroll
function disableScroll() {
    document.body.style.overflow = "hidden";
}

// Fungsi untuk mengaktifkan kembali scroll
function enableScroll() {
    document.body.style.overflow = "";
}

// Tampilkan alert otomatis saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
    let alertOverlay = document.getElementById("alertOverlay");
    let alertBox = document.getElementById("customAlert");

    if (!sessionStorage.getItem('alertShown')) {
        setTimeout(() => {
            alertOverlay.classList.add("show");
            alertBox.classList.add("show");
            disableScroll();
            sessionStorage.setItem('alertShown', 'true');
        }, 1000); // Delay for 1 second
    } else {
        enableScroll(); // If already shown, enable scroll immediately
    }
});

function closeAlert() {
    let alertOverlay = document.getElementById("alertOverlay");
    let alertBox = document.getElementById("customAlert");

    alertBox.classList.remove("show");
    setTimeout(() => {
        alertOverlay.classList.remove("show");
        enableScroll();
    }, 500);
}