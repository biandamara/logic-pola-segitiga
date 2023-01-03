function drawTriangle(num) {
  // memulai looping sebanyak num kali
  for (let i = 1; i <= num; i++) {
    // inisialisasi variabel row dengan string kosong
    let row = '';
    // memulai looping sebanyak i kali
    for (let j = 1; j <= i; j++) {
      // memeriksa apakah j adalah bilangan genap atau tidak
      if (j % 2 === 0) {
        // jika j adalah bilangan genap, tambahkan string 'o' ke row
        row += 'o';
      } else {
        // jika j adalah bilangan ganjil, tambahkan string 'x' ke row
        row += 'x';
      }
    }
    // cetak row ke console
    console.log(row);
  }
}

// penggunaan variable argumen
drawTriangle(3);
drawTriangle(6);

/* Berikut adalah penjelasan dari setiap baris kode di atas:

1. Membuat sebuah function bernama drawTriangle dengan parameter num yang akan digunakan sebagai panjang sisi masing-masing segitiga yang akan dibuat.
2. Memulai sebuah looping dengan variabel i sebagai counter. Looping akan dilakukan sebanyak num kali.
3. Membuat sebuah variabel bernama row yang akan digunakan untuk menyimpan baris yang akan dicetak. Inisialisasi dengan string kosong.
4. Memulai sebuah looping dengan variabel j sebagai counter. Looping akan dilakukan sebanyak i kali.
5. Memeriksa apakah j adalah bilangan genap atau tidak. Jika j adalah bilangan genap, maka tambahkan string 'o' ke variabel row. Jika j adalah bilangan ganjil, tambahkan string 'x' ke variabel row.
6. Setelah looping selesai, cetak row ke console.
7. Setelah looping dengan i selesai, function akan berakhir. */
