document.getElementById('biodataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit secara default
  
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const umur = document.getElementById('umur').value.trim();
    const hasil = document.getElementById('hasil');
  
    // Validasi form
    if (nama === '' || email === '' || umur === '') {
      hasil.innerHTML = `<p style="color:red;">Semua field wajib diisi!</p>`;
      return;
    }
  
    if (!validateEmail(email)) {
      hasil.innerHTML = `<p style="color:red;">Email tidak valid!</p>`;
      return;
    }
  
    if (isNaN(umur) || umur < 1) {
      hasil.innerHTML = `<p style="color:red;">Umur harus angka lebih dari 0!</p>`;
      return;
    }
  
    // Jika valid, tampilkan hasilnya
    hasil.innerHTML = `
      <h3>Hasil Biodata:</h3>
      <p><strong>Nama:</strong> ${nama}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Umur:</strong> ${umur} tahun</p>
    `;
  });
  
  // Fungsi validasi email sederhana
  function validateEmail(email) {
    const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return regex.test(email);
  }  
