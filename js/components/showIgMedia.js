export const showIgMedia = (igToken) => {
  // Instagramデータ取得
  const data_url = new XMLHttpRequest();
  const igRequestUrl = `https://graph.instagram.com/me/media?
                        fields=id,media_type,media_url,username,timestamp
                        &access_token=${igToken}`
  
  data_url.open('GET', igRequestUrl);
  data_url.send();
  
  data_url.onreadystatechange = () => {
    if(data_url.readyState === 4 && data_url.status === 200) {
      const responseJson = JSON.parse(data_url.responseText);
      const igImages = responseJson.data;
      // Instagram データ表示
      const igField = document.getElementById('js-instagram-field');

      igImages.map((img) => {
        const imgElement = document.createElement('img');
        imgElement.src = img.media_url;
        igField.appendChild(imgElement);
      })
      
    }
  }
}
