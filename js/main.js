
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

   // Aratilan kelime ile birlikte API ye istek at sonrasinda gelen veriyle ekrana cartlari render et
   api
   .searchMusic(query)
   .then((data)=> ui.renderCards(data))
   .catch((err) => alert(err));

})