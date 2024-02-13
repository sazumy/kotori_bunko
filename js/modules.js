import { runAdobeFont } from "./components/runAdobeFont.js";
import { openAndCloseGnav } from "./components/openAndCloseGnav.js";
import { viewMoreAndLess } from "./components/viewMoreAndLess.js";

runAdobeFont(document);
openAndCloseGnav();
viewMoreAndLess();
// NOTE: showIdMediaはGithubアクションズの中で追記される。（トークンを直接コードに書けないため）


// jQueryのコード仮置き
$(function(){
    // DEV環境の時はここにtokenを入れる（そのうち.envにする）
    // showIgMedia(token)
});

const showIgMedia = (igToken) => {
    // Instagramデータ取得
    const data_url = new XMLHttpRequest();
    const igRequestUrl = `https://graph.instagram.com/me/media?
                          fields=id,media_type,media_url,permalink,username,timestamp
                          &access_token=${igToken}`;

    data_url.open('GET', igRequestUrl);
    data_url.send();
                          
    const $igField= $("#js-instagram-field");

    data_url.onreadystatechange = () => {
        if(data_url.readyState === 4 && data_url.status === 200) {
            const responseJson = JSON.parse(data_url.responseText);
            const displayDataCount = 8;
            const igImages = responseJson.data.slice(-1 * displayDataCount);

            // Instagram データ表示
            igImages.map((img) => {
                let html = `<a href="${img.permalink}" target="_blank" class="ig-img-wrap">
                                <img src="${img.media_url}" />
                            </a>`

            $igField.append(html);
        })
        
      }
    }
  }
  