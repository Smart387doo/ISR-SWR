import cheerio from "cheerio";
import axios from "axios";

export const getCryptoFromAPI = async () => {
  let result = [];
  const response = await axios(`https://coinmarketcap.com?cb=${Date.now()}`)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      $(".cmc-table tr", html).each(function () {
        const coin = $(this)
          .find(":nth-child(3) p:first-child, :nth-child(3) span")
          .text();
        const price = $(this).find(":nth-child(4)").text();
        result.push({ coin, price });
      });
      return result;
    })
    .catch((err) => console.log(err));
  return response;
};
