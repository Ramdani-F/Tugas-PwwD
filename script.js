// ===== SOAL 1: pengulangan 1-10, tampilkan hanya yang genap =====
let genap = [];
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    genap.push(i);
  }
}
document.getElementById("hasil1").innerHTML =
  "Bilangan genap: " + genap.join(", ");

// ===== SOAL 2: tabel perkalian matriks 10 x 10 =====
let tabel = "<table>";

// Baris header
tabel += "<tr><td class='judul'>bilangan</td>";
for (let k = 1; k <= 10; k++) {
  tabel += "<td class='header'>" + k + "</td>";
}
tabel += "</tr>";

// Baris isi
for (let baris = 1; baris <= 10; baris++) {
  tabel += "<tr>";
  tabel += "<td class='header'>" + baris + "</td>"; // kolom pertama (hijau)

  for (let kolom = 1; kolom <= 10; kolom++) {
    let hasil = baris * kolom;
    let kelas = (hasil % 2 === 0) ? "genap" : "ganjil"; // genap = biru, ganjil = kuning
    tabel += "<td class='" + kelas + "'>" + hasil + "</td>";
  }

  tabel += "</tr>";
}

tabel += "</table>";
document.getElementById("hasil2").innerHTML = tabel;