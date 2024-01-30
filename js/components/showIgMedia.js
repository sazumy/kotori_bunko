export const showIgMedia = () => {
  // Instagramデータ取得
  const data_url = new XMLHttpRequest();
  // TODO: 環境変数などで管理しないと、Facebookによってトークンは無効化されてしまう。
  const token = 'IGQWRQbmk2YTFvLVNmbjhYWE56bloyb1Q1UkhlQjVpM2doOEhQZAWdEWlZAYZAzV1aVRZAYWR0SjVtZA2VDMVJlNW5pOFNHWHctR2JyVHBYTFJhaWs0WjZA1NTh1bk1VUmtEN2F6SUlmU1hmZAHQwalplWkVQQ2xvaG5ZASzliSnZAudWtmWEROUQZDZD';
  data_url.open('GET', `https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,timestamp&access_token=${token}`);
  data_url.send();
  
  data_url.onreadystatechange = () => {
    if(data_url.readyState === 4 && data_url.status === 200) {
      const responseJson = JSON.parse(data_url.responseText);
      const igImages = responseJson.data;
      // Instagram データ表示
      const igField = document.getElementById('instagram-field');

      igImages.map((img) => {
        const imgElement = document.createElement('img');
        imgElement.src = img.media_url;
        igField.appendChild(imgElement)
      })
    }
  }
}