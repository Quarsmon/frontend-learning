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

console.log(`Merhaba ${kullaniciIsim}, ${kullaniciYas} yaşındasın.`);

let kontrolYas = Number(prompt("Yaşınız kaç?"));

console.log(typeof kontrolYas);

if (kontrolYas >= 18) {
    console.log("Reşitsiniz.");
} else {
    console.log("Reşit değilsiniz.");
}

for (let i =1; i<= 5; i++) {
    console.log("Sayı; " + i);
}

let sayac = 1;
while (sayac <= 5) {
    console.log("While ile: " + sayac);
    sayac++;
}

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