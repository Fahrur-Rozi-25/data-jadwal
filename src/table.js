

// Membuat elemen tabel
const table = document.createElement('table');


// Membuat elemen baris header
const headerRow = document.createElement('tr');

// Membuat elemen sel header
const headerCell1 = document.createElement('th');
headerCell1.textContent = 'Nama';
headerRow.appendChild(headerCell1);

const headerCell2 = document.createElement('th');
headerCell2.textContent = 'Usia';
headerRow.appendChild(headerCell2);

// Menambahkan baris header ke dalam tabel
table.appendChild(headerRow);


// Looping data untuk membuat baris data
for (let i = 0; i < data.length; i++) {
  const row = document.createElement('tr');

  // Membuat sel data nama
  const namaCell = document.createElement('td');
  namaCell.textContent = data[i].pelajaran;
  row.appendChild(namaCell);

  // Membuat sel data usia
  const usiaCell = document.createElement('td');
  usiaCell.textContent = data[i].usia;
  row.appendChild(usiaCell);

  // Menambahkan baris data ke dalam tabel
  table.appendChild(row);
}

// Menambahkan tabel ke dalam elemen dengan id 'tabel-container'
const tableContainer = document.getElementById('tabel-container');
tableContainer.appendChild(table);

