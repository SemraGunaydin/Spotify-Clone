export class UI {
    //Kurucu metot
    constructor() {
        this.form = document.querySelector("form");
        this.list = document.querySelector (".list");
        this.title = document.querySelector("#title");
        this.player=document.querySelector (".player");
    }

// Yazilari duzenleyen fonksiyon
sliceText(text) {
    // Eğer text'in uzunluğu 15'den büyükse, 15 karakteri alarak sonuna '...' ekleyin. Bu, yazının kısa olmasını sağlar. 15 karakterin altında kalan kısmı göstermeyecek ve okunabilir hale getirecektir.
    if (text.length>15) {
        return text.slice(0,15) + '...'
    }
    return text;
}

    //Sarki verilerini render eden bir fonksiyon yaz
    renderCards(songs) {
        // listeye bir sarki eklemeden onceki verileri temizleme
        this.list.innerHTML = "";

        songs.forEach((song) => {
        
         // bir tane div olustur
        const card = document.createElement("div");
          
        // Olusturulan bu elemana  'card' clasi ekle
        card.className = "card";

        // Card elemanina sarki ile ilgili degerleri atama
        card.dataset.title = song.title;
        card.dataset.subtitle =song.subtitle;
        card.dataset.img = song.images.coverarthq;
        card.dataset.mp3 = song.hub.actions[1].uri;

        // card in html ini belirle
        card.innerHTML = `<figure>
                      
                        <img src="${song.images.coverarthq}" alt=""/>

                       
                         <div class="play">
                            <i class="bi bi-play-fill"></i>
                         </div>
                    </figure>
                   
                    <div class="card-info">
                        <h4>${this.sliceText(song.title)}</h4>
                        <h4>${song.subtitle}</h4>
                    </div> `


                    // olusturulan html i arayuze aktar
                    this.list.appendChild(card);

         // Class ve obje yapıları içerisindeki bir değişkene bu yapılar içerisinde bulunan bir metotla erişmek istersek bunların başına `this` keywordu koymamız gerekir.Bunun sebebi class ve obje yapılarının bu değerin kendi içerisinde olduğunu anlamasıdır


    });
    }

    // Loader render eden fonksiyon
    renderLoader() {
        this.list.innerHTML =`
<div class="loader">
  <div class="cell d-0"></div>
  <div class="cell d-1"></div>
  <div class="cell d-2"></div>

  <div class="cell d-1"></div>
  <div class="cell d-2"></div>
  
  
  <div class="cell d-2"></div>
  <div class="cell d-3"></div>
  
  
  <div class="cell d-3"></div>
  <div class="cell d-4"></div>
  
</div>`;
    }

    // Title' i guncelelyen fonksiyon
    updateTitle(text) {
        this.title.textContent =text;
    }

    // Animasyon guncellemesi yapan fonksiyon
    toggleAnimation(){
         // Player içerisindeki resime eriş
       const image = document.querySelector(".info img");

        // Resime class ekle-çıkar
        image.classList.toggle('animate');

    }

    // Player kismina dinamik sekilde fonksiyon renderlayacak fonksiyon ekle
    renderPlayer(song) {
        console.log(song);

        this.player.innerHTML = ` 
        <div class="info">
        <img
          src="${song.img}"
          alt=""
        />
        <div>
          <h5>${song.title}</h5>
          <p>${song.subtitle}</p>
        </div>
      </div>

      <audio
        src="${song.img}"
        controls
        autoplay
      ></audio>

      <div class="icons">
        <i class="bi bi-repeat"></i>
        <i class="bi bi-mic"></i>
        <i class="bi bi-music-note-list"></i>
        <i class="bi bi-boombox"></i>
        <i class="bi bi-pc-display"></i>
      </div> `;

      // Şarkı oynatılıyorsa image'e bir animasyon ekle durdurulursa bunu kaldır

    // i-) audio elemanına eriş
    const audio = this.player.querySelector("audio");
    // ii-) audio elemanının oyantılam ve durdurulma olaylarını izle

    audio.addEventListener("play", this.toggleAnimation);
    audio.addEventListener("pause", this.toggleAnimation);


     
    }
}