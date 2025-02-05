export class UI {
    //Kurucu metot
    constructor() {
        this.form = document.querySelector("form");
        this.list = document.querySelector (".list");
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
        card.className = "card" ;

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
}