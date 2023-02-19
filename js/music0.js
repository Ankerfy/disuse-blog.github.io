var music = {
    // 音乐节目切换背景
    changeMusicBg: function (isChangeBg = true) {
      if (window.location.pathname != "/music/") {
        return;
      }
      const MusicBg = document.getElementById("an_music_bg")
  
      if (isChangeBg) {
        // player listswitch 会进入此处
        const musiccover = document.querySelector("#Music-page .aplayer-pic");
        MusicBg.style.backgroundImage = musiccover.style.backgroundImage;
      } else {
        // 第一次进入，绑定事件，改背景
        let timer = setInterval(()=>{
          const musiccover = document.querySelector("#Music-page .aplayer-pic");
          // 确保player加载完成
          console.info(MusicBg);
          if (musiccover) {
            clearInterval(timer)
            MusicBg.style.backgroundImage = musiccover.style.backgroundImage;
            // 绑定事件
            music.addEventListenerChangeMusicBg();
            
            // 暂停nav的音乐
            if (document.querySelector("#nav-music meting-js").aplayer && !document.querySelector("#nav-music meting-js").aplayer.audio.paused){
              music.musicToggle()
            }
          }
        }, 100)
      }
    },
    addEventListenerChangeMusicBg: function () {
      const MusicPage = document.getElementById("Music-page");
      const aplayerIconMenu = MusicPage.querySelector(".aplayer-info .aplayer-time .aplayer-icon-menu");
  
      MusicPage.querySelector("meting-js").aplayer.on('loadeddata', function () {
        music.changeMusicBg();
        console.info('player loadeddata');
      });
  
      aplayerIconMenu.addEventListener("click", function () {
        document.getElementById('menu-mask').style.display = "block";
        document.getElementById('menu-mask').style.animation = "0.5s ease 0s 1 normal none running to_show";
      })
  
      document.getElementById('menu-mask').addEventListener("click", function () {
        if (window.location.pathname != "/music/") return;
        MusicPage.querySelector('.aplayer-list').classList.remove("aplayer-list-hide");
      })
    },
  }
  
  // 初始化
  music.changeMusicBg(false);
  