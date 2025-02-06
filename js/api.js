const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '14677ada3cmshceb8e85d5db8480p134ed3jsn0b0385b534b2',
		'x-rapidapi-host': 'shazam.p.rapidapi.com'
	}
};
export class API {
  // Popular şarkıları alan fonksiyon
  async getPopular() {
    // const url =
    //   "https://shazam.p.rapidapi.com/search?term=imany&locale=en-US&offset=0&limit=5";
    // //  Apı'a istek at
    // const response = await fetch(url, options);

    // //  Apı'dan gelen veriyi js nesnesine çevir
    // const data = await response.json();

    // const formattedData = data.tracks.hits.map((item) => item.track);

    // return formattedData;

    const data = await this.searchMusic("imany");

    const data1 = await this.searchMusic("sia");
    const data2 = await this.searchMusic("beyonce");

    return [...data, ...data1, ...data2];
  }

  // Aratilan sarki verisinin alan fonksiyon

  async searchMusic(query) {

    const url = `https://shazam.p.rapidapi.com/search?term=${query}`;

     // Aratılan değer ile api'a istek at
    const res = await fetch(url, options);

     // Gelen veriyi js nesnesine çevir
    const data = await res.json();

     // Veriyi projeye uygun şekilde dönüştür
     const formattedData = data.tracks.hits.map((item) => item.track);

     return (formattedData);
  }
}
