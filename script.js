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

/* --- 9-10. Gün prompt egzersizleri (devre dışı) --- */

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

function topla(a, b) {
    return a + b;
}

let sonuc = topla(5, 3);
console.log(sonuc);

let renkler = ["kırmızı", "mavi", "yeşil"];

console.log(renkler);
console.log(renkler[0]);
console.log(renkler[1]);
console.log(renkler.length);

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
console.log(urunler[0]);
console.log(urunler[0].isim);

urunler.forEach(function(urun) {
    console.log(urun.isim + " - " + urun.fiyat + " TL");
});

let pahaliUrunler = urunler.filter(function(urun) {
    return urun.fiyat > 1000;
});

console.log("Pahalı Ürünler:");
console.log(pahaliUrunler);

let giyimUrunleri = urunler.filter(function(urun) {
    return urun.kategori === "Giyim";
});

console.log("Giyim Ürünleri:");
console.log(giyimUrunleri);

let enPahali = urunler.reduce(function(simdikiEnPahali, urun) {
    if (urun.fiyat > simdikiEnPahali.fiyat) {
        return urun;
    } else {
        return simdikiEnPahali;
    }
});

console.log(enPahali);

// --- 13. Hafta: DOM Manipülasyonu Pratiği ---

let urunBasligi = document.getElementById("urun-adi");
urunBasligi.textContent = "Deri Klasik Model";

let fiyatParagrafi = document.querySelector(".fiyat");
fiyatParagrafi.classList.add("indirimli");

let ekstraBilgiDivi = document.getElementById("ekstra-bilgi");
ekstraBilgiDivi.innerHTML = "<p>Stokta son 3 çift!</p>";

let satinAlButonu = document.createElement("button");
satinAlButonu.textContent = "Hemen Satın Al";
satinAlButonu.style.padding = "10px 20px";
satinAlButonu.style.backgroundColor = "#2980b9";
satinAlButonu.style.color = "white";
satinAlButonu.style.border = "none";
satinAlButonu.style.cursor = "pointer";
ekstraBilgiDivi.appendChild(satinAlButonu);


// --- 17. Hafta: Sepet Sistemini Local Storage ile Kalıcı Yapmak ---

// 1. Sayfa yüklendiğinde hafızadaki sepet sayısını kontrol et.
// LocalStorage sadece metin (string) tuttuğu için Number() ile rakama çeviriyoruz.
// Eğer hafızada bir şey yoksa (||) 0 olarak başlatıyoruz.
let sepetSayisi = Number(localStorage.getItem("kayitliSepet")) || 0; 

let sayacGostergesi = document.getElementById("sepet-sayaci");

// Sayfa ilk açıldığında hafızadaki sayıyı anında HTML'e bas
sayacGostergesi.textContent = sepetSayisi;

// Hemen Satın Al Butonu
satinAlButonu.addEventListener("click", function() {
    sepetSayisi++; 
    sayacGostergesi.textContent = sepetSayisi; 
    
    // Her artışta yeni sayıyı hafızaya kaydet
    localStorage.setItem("kayitliSepet", sepetSayisi); 
    console.log("Ürün sepete eklendi! Mevcut adet: " + sepetSayisi);
});

// Sepetten Çıkar Butonu
let sepettenCikarButonu = document.getElementById("sepetten-cikar");
sepettenCikarButonu.addEventListener("click", function() {
    if (sepetSayisi > 0) { 
        sepetSayisi--;
        sayacGostergesi.textContent = sepetSayisi;
        
        // Her azalışta yeni sayıyı hafızaya kaydet
        localStorage.setItem("kayitliSepet", sepetSayisi); 
        console.log("Ürün sepetten çıkarıldı! Mevcut adet: " + sepetSayisi);
    } else {
        console.log("Sepet zaten boş!");
    }
});

// Sepeti Boşalt Butonu
let sepetiBosaltButonu = document.getElementById("sepeti-bosalt");
sepetiBosaltButonu.addEventListener("click", function() {
    sepetSayisi = 0;
    sayacGostergesi.textContent = sepetSayisi;
    
    // Sıfırlandığında hafızayı da 0 olarak güncelle
    localStorage.setItem("kayitliSepet", sepetSayisi); 
    console.log("Sepet tamamen boşaltıldı! Mevcut adet: " + sepetSayisi);
});


// --- 15. Hafta: Dışarıdan Veri Çekme (Fetch API - SADECE AVATARLI YENİ VERSİYON) ---

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
            
            avatarliListe.appendChild(yeniMadde);
        });
    });


// --- 16. Hafta: Kalıcı To-Do App (Local Storage Destekli YENİ VERSİYON) ---

let gorevInput = document.getElementById("yeni-gorev");
let gorevEkleButonu = document.getElementById("gorev-ekle");
let gorevListesi = document.getElementById("gorev-listesi");

let kayitliGorevler = JSON.parse(localStorage.getItem("gorevler")) || [];

function gorevleriEkranaBas() {
    gorevListesi.innerHTML = ""; 

    kayitliGorevler.forEach(function(gorevMetni, index) {
        let yeniMadde = document.createElement("li");
        yeniMadde.textContent = gorevMetni + " ";
        
        // Üstünü çizme özelliği
        yeniMadde.addEventListener("click", function() {
            if (yeniMadde.style.textDecoration === "line-through") {
                yeniMadde.style.textDecoration = "none";
            } else {
                yeniMadde.style.textDecoration = "line-through";
            }
        });

        let silButonu = document.createElement("button");
        silButonu.textContent = "Sil";

        silButonu.addEventListener("click", function(event) {
            event.stopPropagation(); // Sil'e basınca üstünü çizmesini engeller
            kayitliGorevler.splice(index, 1); 
            localStorage.setItem("gorevler", JSON.stringify(kayitliGorevler)); 
            gorevleriEkranaBas(); 
        });

        yeniMadde.appendChild(silButonu);
        gorevListesi.appendChild(yeniMadde);
    });
}

gorevleriEkranaBas();

gorevEkleButonu.addEventListener("click", function() {
    let girilenMetin = gorevInput.value.trim();

    if (girilenMetin !== "") {
        kayitliGorevler.push(girilenMetin);
        localStorage.setItem("gorevler", JSON.stringify(kayitliGorevler));
        gorevleriEkranaBas();
        gorevInput.value = "";
    } else {
        alert("Lütfen bir görev girin!");
    }
});


// --- GECE MODU (EKSİK OLAN KOD BURADA) ---

let temaButonu = document.getElementById("tema-butonu");
let sayfaGovdesi = document.body; 

let kayitliTema = localStorage.getItem("siteTemasi");

if (kayitliTema === "gece") {
    sayfaGovdesi.style.backgroundColor = "#121212"; 
    sayfaGovdesi.style.color = "white"; 
    temaButonu.textContent = "☀️ Gündüz Moduna Geç";
}

temaButonu.addEventListener("click", function() {
    
    if (sayfaGovdesi.style.backgroundColor === "rgb(18, 18, 18)" || kayitliTema === "gece") {
        sayfaGovdesi.style.backgroundColor = "white";
        sayfaGovdesi.style.color = "black";
        temaButonu.textContent = "🌙 Gece Moduna Geç";
        localStorage.setItem("siteTemasi", "gunduz");
        kayitliTema = "gunduz"; 
    } else {
        sayfaGovdesi.style.backgroundColor = "#121212";
        sayfaGovdesi.style.color = "white";
        temaButonu.textContent = "☀️ Gündüz Moduna Geç";
        localStorage.setItem("siteTemasi", "gece");
        kayitliTema = "gece"; 
    }
});
