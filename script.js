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

// --- 13. Hafta: DOM Manipülasyonu Pratiği ---

// 1. İçerik Değiştirme
let urunBasligi = document.getElementById("urun-adi");
urunBasligi.textContent = "Deri Klasik Model";

// 2. Class Ekleme
let fiyatParagrafi = document.querySelector(".fiyat");
fiyatParagrafi.classList.add("indirimli");

// 3. HTML Enjekte Etme
let ekstraBilgiDivi = document.getElementById("ekstra-bilgi");
ekstraBilgiDivi.innerHTML = "<p>Stokta son 3 çift!</p>";

// 1. ADIM: Elementi yaratıyoruz (Şu an sadece JavaScript'in hafızasında yaşıyor, ekranda yok)
let satinAlButonu = document.createElement("button");

// 2. ADIM: Elementin içini ve özelliklerini dolduruyoruz
satinAlButonu.textContent = "Hemen Satın Al";
satinAlButonu.style.padding = "10px 20px";
satinAlButonu.style.backgroundColor = "#2980b9";
satinAlButonu.style.color = "white";
satinAlButonu.style.border = "none";
satinAlButonu.style.cursor = "pointer";

// 3. ADIM: Elementi HTML'deki yuvasına yerleştiriyoruz (DOM'a fiziksel olarak ekleme)
// Daha önce yakaladığımız ekstraBilgiDivi'nin içine (en son çocuk eleman olarak) yapıştırıyoruz
ekstraBilgiDivi.appendChild(satinAlButonu);

// urunBasligi.remove(); // Görmek istersen kendi kodunda başındaki // işaretlerini kaldırıp test edebilirsin.


// --- 14. Hafta: Olaylar (Events) Pratiği ---

let sepetSayisi = 0; // Sayacımız 0'dan başlıyor
let sayacGostergesi = document.getElementById("sepet-sayaci");

// Butona tıklandığında çalışacak kod bloğu (Event Listener)
satinAlButonu.addEventListener("click", function() {
    sepetSayisi++; // Her tıklamada sepet sayısını 1 artır (+1)
    sayacGostergesi.textContent = sepetSayisi; // Yeni sayıyı ekrana (HTML'e) bas
    console.log("Ürün sepete eklendi! Mevcut adet: " + sepetSayisi);
});

let sepettenCikarButonu = document.getElementById("sepetten-cikar");
sepettenCikarButonu.addEventListener("click", function() {
    if (sepetSayisi > 0) { // Sıfırın altına düşmemesi için kontrol
        sepetSayisi--;
        sayacGostergesi.textContent = sepetSayisi;
        console.log("Ürün sepetten çıkarıldı! Mevcut adet: " + sepetSayisi);
    } else {
        console.log("Sepet zaten boş!");
    }
});

// 1. Butonu id'si ile yakala
let sepetiBosaltButonu = document.getElementById("sepeti-bosalt");

// 2. Tıklama olayını (Event) ekle
sepetiBosaltButonu.addEventListener("click", function() {
    
    // 3. Sepet sayısını direkt 0'a eşitle (Reset işlemi)
    sepetSayisi = 0;
    
    // 4. Güncel olan 0 değerini HTML ekranına bas
    sayacGostergesi.textContent = sepetSayisi;
    
    // 5. Konsola bilgi mesajı gönder
    console.log("Sepet tamamen boşaltıldı! Mevcut adet: " + sepetSayisi);
});

// --- 14. Hafta: To-Do App Pratiği ---

// Elementleri SADECE BİR KERE yakalıyoruz
let gorevInput = document.getElementById("yeni-gorev");
let gorevEkleButonu = document.getElementById("gorev-ekle");
let gorevListesi = document.getElementById("gorev-listesi");

// Ekle butonu tıklama olayı
gorevEkleButonu.addEventListener("click", function() {
    
    // Kutunun içindeki değeri tam butona basıldığı an alıyoruz
    let girilenMetin = gorevInput.value.trim(); 
    
    if (girilenMetin !== "") {

        // 1. Yeni görev maddesini (li) yarat
        let yeniMadde = document.createElement("li");
        yeniMadde.textContent = girilenMetin + " "; //Yanına buton geleceği için ufak bir boşluk bıraktık

        // --- YENNİ EKLENEN KISIM: Tamamlandı İşareti ---

        // Maddeye (yanının kendisine) tıklama olayı ekliyoruz
        yeniMadde.addEventListener("click", function() {
            // CSS'teki text-decoration özelliğini kontrol ediyoruz
            if (yeniMadde.style.textDecoration === "line-through") {
                yeniMadde.style.textDecoration = "none"; // Zaten çiziliyse, çizgiyi kaldır
            } else {
                yeniMadde.style.textDecoration = "line-through"; // Çizili değilse, üstünü çiz
            }
        });

        // --- YENİ EKLENEN KISIM BİTİŞİ ---

        // -- YENİ EKLENEN KISIM BAŞLANGICI --

        // 2. Bu göreve özel bir "Sil" butonu yarat
        let silButonu = document.createElement("button");
        silButonu.textContent = "Sil";

        // 3. Bu sil butonuna bir tıklama olayı (görev) ver
        silButonu.addEventListener("click", function() {
            yeniMadde.remove(); // .remove () komutu o elementi HTML'den tamamen siler
    });

        // 4. Sil butonunu, görev maddesinin (li) içine yerleştir
        yeniMadde.appendChild(silButonu);

        // --- YENİ EKLENEN KISIM BİTİŞİ --

        // 5. İçine sil butonu da olan maddeyi ana listeye (ul) ekle
        gorevListesi.appendChild(yeniMadde);
        
        // Kutuyu temizle
        gorevInput.value = ""; 
    } else {
        alert("Lütfen bir görev girin!");
    }
});

// --- 15. Hafta: Dışarıdan Veri Çekme (Fetch API) ---

console.log("1. Dükkan açıldı, sipariş veriliyor...");

let kullaniciListesi = document.getElementById("kullanici-listesi");

console.log("Veri çekiliyor...");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(cevap) {
        return cevap.json();
    })
    .then(function(kullanicilar) {
        // Gelen 10 kişilik listede tek tek dönüyoruz
        kullanicilar.forEach(function(kullanici) {
            
            // Her kullanıcı için yeni bir <li> elementi yaratıyoruz
            let yeniMadde = document.createElement("li");
            
            // İçine kullanıcının adını ve mail adresini yazıyoruz
            yeniMadde.textContent = kullanici.name + " - " + kullanici.email;
            
            // Hazırladığımız maddeyi HTML'deki listemize ekliyoruz
            kullaniciListesi.appendChild(yeniMadde);
        });
        
        console.log("Veriler başarıyla ekrana basıldı!");
    });

 
// --- 15. Hafta: Dışarıdan Veri Çekme (Fetch API) ---

// Değişken ismini avatarliListe yaparak çakışma sorununu kökten çözdük
let avatarliListe = document.getElementById("kullanici-listesi");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(cevap) {
        return cevap.json();
    })
    .then(function(kullanicilar) {
        
        avatarliListe.innerHTML = ""; 

        kullanicilar.forEach(function(kullanici) {
            
            let yeniMadde = document.createElement("li");
            yeniMadde.style.display = "flex";
            yeniMadde.style.alignItems = "center";
            yeniMadde.style.marginBottom = "15px";
            
            let profilFoto = document.createElement("img");
            profilFoto.src = "https://robohash.org/" + kullanici.username + "?size=50x50";
            profilFoto.style.borderRadius = "50%"; 
            profilFoto.style.marginRight = "15px";
            
            let kullaniciBilgisi = document.createElement("span");
            kullaniciBilgisi.textContent = kullanici.name + " - " + kullanici.email;
            
            yeniMadde.appendChild(profilFoto);
            yeniMadde.appendChild(kullaniciBilgisi);
            
            // Yeni isimle listeye ekliyoruz
            avatarliListe.appendChild(yeniMadde);
        });
    });