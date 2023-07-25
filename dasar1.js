// Cara membuat variabel

let a = 'a';
let b = 'b';
const c = 'c';

// Variabel bisa menampung tipe data {(yang akan dipelajari) string(text), integer/number, boolean }, array, object

let nama = 'Rengga'; //string
let umur = 18; //number 
let uang = 5000.5 //number ada koma
let apakahBenar = true; //boolean

// Operator aritmatika
let angka1 = 10;
let angka2 = 20;
console.log(angka1 + angka2, 'pertambahan'); //30
console.log(angka1 - angka2, 'pengurangan'); //-10
console.log(angka1 / angka2, 'pembagian'); //1/2
console.log(angka1 * angka2, 'perkalian'); //200
console.log(angka1 % angka2, 'modulus'); //10


// Ini belajar mengisi variabel
let penampungHasilOperatorAritmatika = angka1 + angka2;
console.log(penampungHasilOperatorAritmatika); //hasil 30

penampungHasilOperatorAritmatika = angka1 - angka2;
console.log(penampungHasilOperatorAritmatika); //-10

penampungHasilOperatorAritmatika = angka1 / angka2;
console.log(penampungHasilOperatorAritmatika); //0.5

penampungHasilOperatorAritmatika = angka1 * angka2;
console.log(penampungHasilOperatorAritmatika); //200

penampungHasilOperatorAritmatika = angka1 % angka2;
console.log(penampungHasilOperatorAritmatika); //10


// String juga bisa ditambah namun string tidak bisa dikurang dengan operator aritmatika
let firstName = 'rengga';
let lastName = 'rendi';
let fullName = firstName + ' ' + lastName;

console.log(fullName); 
console.log(firstName + ' ' + lastName);
console.log(firstName - lastName); //NaN


// alur pembacaan code
// untuk membaca code harus membaca dari kiri kanan, dan dari atas ke bawah
// contoh
let number = 20;
console.log(number + 10); //30
number = 10;
console.log(number - 5); //5
number = false;
console.log(number + 10); //10

// pertanyaan kenapa false + 10 hasilya tetap 10?? karena false bernilai = 0, dan true bernilai = 1
console.log(true + 10); //11

// membaca error
// jangan takut error, karena justru kalian harus takut kalau tidak ada yang namanya error dalam pemrogaman karena dalam pekerjaan kalau suatu fitur berjalan namun ada bug tapi tidak error, itu bikin si programmer rada muak buat mencari errornya atau letak kesalahannya

// contoh error
// const hewan = 'jerapah';
// console.log(hewan);
// hewan = 'buaya';

// Tips selalu teliti, dan kalau ada error dibaca aja, dan belajar coding itu perlu kebiasaan karena coding itu adalah habbit