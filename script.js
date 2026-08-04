console.log("merhaba, JavaScript çalışıyor!");

let isim = "Eren";
const yas = 21;

console.log("İsmim: " + isim);
console.log("Yaşım: " + yas);

//Veri Tipleri
let sayi = 10;
let yazi = "Merhaba";
let dogruMu = true;
let bosDeger = null;
let tanimsiz;

console.log(typeof sayi); // number
console.log(typeof yazi); // string
console.log(typeof dogruMu); // boolean

//Operatörler
console.log(5 + 3); // Toplama
console.log(5 - 3); // Çıkarma
console.log(5 * 3); // Çarpma
console.log(5 / 3); // Bölme
console.log(5 % 3); // Mod (kalan) - 5'i 3'e böl, kalanı ver

let kullaniciIsim = prompt("İsminiz nedir?");
let kullaniciYas = prompt("Yaşınız kaç?");

console.log("Merhaba " + kullaniciIsim + ", " + kullaniciYas + " yaşındasın.");

console.log(`Merhaba ${kullaniciIsim}, ${kullaniciYas} yaşındasın.`);