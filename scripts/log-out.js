function handleLogout() {
    // Tampilkan kotak konfirmasi
    const confirmLogout = confirm("Are you sure you want to log out?");

    if (confirmLogout) {
      // Lanjutkan proses logout jika pengguna memilih "Yes"
      alert("Logged out successfully!");
      // Tambahkan kode logout di sini, seperti mengarahkan ke halaman login atau menghapus token
    } else {
      // Jika pengguna memilih "No", tidak ada tindakan yang diambil
      alert("Logout canceled.");
    }
  }