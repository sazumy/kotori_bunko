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
  
};
