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

/* --- 9-10. Gün prompt egzersizleri (devre dışı, tekrar denemek istersen yorum işaretini kaldır) ---

let kullaniciIsim = prompt("İsminiz nedir?");
let kullaniciYas = prompt("Yaşınız kaç?");
console.log(`Merhaba ${kullaniciIsim}, ${kullaniciYas} yaşındasın.`);

let kontrolYas = Number(prompt("Yaşınız kaç?"));
if (kontrolYas >= 18) {
    console.log("Reşitsiniz.");
} else {
    console.log("Reşit değilsiniz.");
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

let renkler = ["kırmızı", "mavi", "yeşil"];

console.log(renkler);           // tüm dizi
console.log(renkler[0]);        // kırmızı
console.log(renkler[1]);        // mavi
console.log(renkler.length);    // 3

let urun = {
    isim: "Nike Aır",
    fiyat: 5000,
    kategori: "Ayakkabı"
};

let urunler = [
    { isim: "Nike Air", fiyat: 2500, kategori: "Ayakkabı" },
    { isim: "Adidas Superstar", fiyat: 1800, kategori: "Ayakkabı" },
    { isim: "Puma Tişört", fiyat: 350, kategori: "Giyim" },
    { isim: "Levis Kot", fiyat: 900, kategori: "Giyim" }
];

console.log(urunler);
console.log(urunler[0]);        // ilk ürün (obje)
console.log(urunler[0].isim);   // ilk ürünün ismi

urunler.forEach(function(urun) {
    console.log(urun.isim + " - " + urun.fiyat + " TL");
});

let pahaliUrunler = urunler.filter(function(urun) {
    return urun.fiyat > 1000;
});

console.log("Pahalı Ürünler:");
console.log(pahaliUrunler);   // ← bu satır eksikti

let giyimUrunleri = urunler.filter(function(urun) {
    return urun.kategori === "Giyim";
});

console.log("Giyim Ürünleri:");
console.log(giyimUrunleri);   // ← bu satır eksikti

let enPahali = urunler.reduce(function(simdikiEnPahali, urun) {
    if (urun.fiyat > simdikiEnPahali.fiyat) {
        return urun;
    } else {
        return simdikiEnPahali;
    }
});

console.log(enPahali);


