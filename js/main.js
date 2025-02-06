
// UI clasini import et
import { UI } from "./ui.js";
// API classini import et 
import { API } from "./api.js";

// UI clasinin ornegini alma
const ui = new UI();

//API clasinin ornegini al
const api = new API();

// Sayfanin yuklendigi ani izle
document.addEventListener("DOMContentLoaded", async () => {

    // loader i render et
    ui.renderLoader();

    // API ye sitek at ve API den gelen veri ile arayuzu renderla
    api
     .getPopular()
     .then((data) => ui.renderCards(data))
     .catch((err) => {
        console.log(err);
         
    });   
});

ui.form.addEventListener("submit",(e) => {
    // sayfa yenilemeyi engelle
    e.preventDefault();
    
   // form gonderildiginde form input icerisindeki degere eris
   const query = e.target[0].value;

   // Aratilan kelimenin basinda ve sonunda bulunan bosluklari kaldirmak icin,kelimenin uzunlugunu kontrol eder.Eger query degeri yoksa uyari ver
   if (!query.trim()) {
    return alert("lutfen gecerli bir arama islemi gerceklestiriniz");
   }


   // Loader i render et
  ui.renderLoader();

  // title guncelle
  ui.updateTitle("Results for "   +  query );

   // Aratilan kelime ile birlikte API ye istek at sonrasinda gelen veriyle ekrana cartlari render et
   api
   .searchMusic(query)
   .then((data)=> ui.renderCards(data))
   .catch((err) => alert(err));

});

// Liste kısmındaki play iconuna tıklayınca arayüzü bu şarkı verisine göre renderlayacak fonksiyon
ui.list.addEventListener("click",(e) => {
    // List içerisinde tıklanılan elemanın play butonu olup olmadığını kontrol et
    if (e.target.className == "play") {
          // Play butonunun kapsayıcısına eriş
        const card = e.target.closest(".card");
  // Kapsayıcıya verilen dataset özelliklerini al(title,image,mp3)
        const data = card.dataset;

        // Player kismini render et
        ui.renderPlayer(data);


    }
})