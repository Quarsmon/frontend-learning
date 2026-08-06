console.log("merhaba, JavaScript çalışıyor!");

let isim = "Eren";
const yas = 21;

console.log("İsmim: " + isim);
console.log("Yaşım: " + yas);

// Veri Tipleri
let sayi = 10;
let yazi = "Merhaba";
let dogruMu = true;

console.log(typeof sayi);   // number
console.log(typeof yazi);   // string
console.log(typeof dogruMu); // boolean

// Operatörler
console.log(5 + 3);
console.log(5 - 3);
console.log(5 * 3);
console.log(5 / 3);
console.log(5 % 3);


let kullaniciIsim = prompt("İsminiz nedir?");
let kullaniciYas = prompt("Yaşınız kaç?");
console.log(`Merhaba ${kullaniciIsim}, ${kullaniciYas} yaşındasın.`);

let kontrolYas = Number(prompt("Yaşınız kaç?"));
if (kontrolYas >= 18) {
    console.log("Reşitsiniz.");
} else {
    console.log("Reşit değilsiniz.");
}

/* --- 9-10. Gün prompt egzersizleri (devre dışı, tekrar denemek istersen yorum işaretini kaldır) ---

let dogruSifre = "1234";
let girilenSifre = prompt("Şifrenizi girin:");
if (girilenSifre === dogruSifre) {
    console.log("Giriş başarılı!");
} else {
    console.log("Yanlış şifre.");
}

let gizliSayi = 7;
let tahmin = Number(prompt("1 ile 10 arasında bir sayı tahmin et:"));
while (tahmin !== gizliSayi) {
    if (tahmin > gizliSayi) {
        tahmin = Number(prompt("Daha küçük bir sayı dene:"));
    } else {
        tahmin = Number(prompt("Daha büyük bir sayı dene:"));
    }
}
console.log("Tebrikler, doğru bildin! Sayı: " + gizliSayi);

--- */

// Döngüler (sessiz çalışsın diye kalsın, prompt yok)
for (let i = 1; i <= 5; i++) {
    console.log("Sayı: " + i);
}

let sayac = 1;
while (sayac <= 5) {
    console.log("While ile: " + sayac);
    sayac++;
}

// 11. Gün — Fonksiyonlar
function selamVer() {
    console.log("Merhaba!");
}

selamVer();
selamVer();
selamVer();

function selamVerIsimle(isim) {
    console.log("Merhaba! " + isim + "!");
}

selamVerIsimle("Eren");
selamVerIsimle("Buse");

function topla(a, b) {
    return a + b;
}

let sonuc = topla(5, 3);
console.log(sonuc);