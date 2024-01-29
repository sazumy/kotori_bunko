// JSが大きくなるようならモジュールごとにファイル分割する
window.onload = function() {
  // Adobe Font
  (function(d) {
    var config = {
      kitId: 'ktg1tyu',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
  
  // gnavの開閉
  const gnavButton = document.getElementById('js-gnav-btn');
  const gnavSp = document.getElementById('js-gnav-sp');
  const gnavCloseBtn = document.getElementById('js-gnav-close-btn');
  const openNav = () => {
    gnavSp.classList.add('show');
  }
  const closeNav = () => {
    gnavSp.classList.remove('show');
  }

  gnavButton.addEventListener('click', openNav);
  gnavCloseBtn.addEventListener('click', closeNav);
  
  // もっと見るボタンの操作
  const hiddenContent = document.getElementById('js-hidden-content');
  const viewMoreBtn = document.getElementById('js-view-more-btn');
  const viewLessBtn = document.getElementById('js-view-less-btn');

  const viewMore = () => {
    hiddenContent.classList.add('show');
    viewMoreBtn.classList.remove('show');
    viewLessBtn.classList.add('show');
  }

  const viewLess = () => {
    hiddenContent.classList.remove('show');
    viewMoreBtn.classList.add('show');
    viewLessBtn.classList.remove('show');
  }

  viewMoreBtn.addEventListener('click', viewMore);
  viewLessBtn.addEventListener('click', viewLess);

  // Instagramデータ取得
  const data_url = new XMLHttpRequest();
  const token = 'IGQWROaDJTNVVTVXFGcmd5YXM2YXpWa1N4QUpfaFdvOW1PTkVvTE9RUFlQb2NZAZAUUtLTBCbGFERUc3RGJ6UmVudUFZAbXA1NlZAFT1hDQ0lEaFRmbEtXV09QeFp2dVlvMlYwVFVSdlJNTVk1STAtUG9MSmtWY2hlRmUwSnh6R3MwdWN6ZAwZDZD';
  data_url.open('GET', `https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,timestamp&access_token=${token}`);
  data_url.send();
  
  data_url.onreadystatechange = () => {
      if(data_url.readyState === 4 && data_url.status === 200) {
        const responseJson = JSON.parse(data_url.responseText);
        const igImages = responseJson.data;
        // Instagram データ表示
        const igField = document.getElementById('instagram-field');

        igImages.map((img) => {
          console.log(img)
          const imgElement = document.createElement('img');
          imgElement.src = img.media_url;
          igField.appendChild(imgElement)
        })
        
        
      }
  }

  
};
