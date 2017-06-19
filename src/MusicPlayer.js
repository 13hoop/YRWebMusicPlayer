var musicList = [{
  src: 'http://cloud.hunger-valley.com/music/ifyou.mp3',
  title: 'IF YOU',
  auther: 'Big Bang'
}, {
  src: 'http://cloud.hunger-valley.com/music/玫瑰.mp3',
  title: '玫瑰',
  auther: '贰佰'
}]

// class MusicModel {
//   constructor(src, title, imgUrl, auther){
//     this.src = src
//     this.title = title
//     this.imgUrl = imgUrl
//     this.auther = auther
//   }
// }
var backBtn = document.querySelector('.musicBox .back')
var playBtn = document.querySelector('.musicBox .play')
var forwardBtn = document.querySelector('.musicBox .forward')
var titleNode = document.querySelector('.musicBox .playerMain H3')
var authorNode = document.querySelector('.musicBox .playerMain span')
var timeNode = document.querySelector('.musicBox .time')
var progressBarNode = document.querySelector('.musicBox .palyerProgress .progressBar')
var progressNowNode = document.querySelector('.musicBox .palyerProgress .progress-now')
var music = new Audio()
music.autoplay = true
var musicIndex = 0

// getMusic(function (musicList) {
//   loadMusic(musicList[musicIndex])
// })

// function loadMusic(songObj) {
//   music.src = songObj.src
//   titleNode.innerText = songObj.title
//   authorNode.innerText = songObj.auther
// }

module.exports = function () {
  var MusicPlayer = document.createElement('div')
  MusicPlayer.className = 'musicBox'
  //  <span class='btn iconfont icon-bofang' ></span>




  let imgUrl = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497855017539&di=b2826bf994aafeae0c6e1d1eed289cab&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2F9113862234eee8b8d6cae209.jpg"
  let title = "歌曲名xdadfaxx"
  let author = "Betals & Betals"

  MusicPlayer.innerHTML = `
  <div class='playerMain'>
    <img src=${imgUrl}>
    <h3>${title}</h3>
    <span>${author}<span>  
  </div>
  <div class='palyerProgress'>
    <div class='progressBar'></div>
    <div class="time">0:00</div>
    <div class='btnRow'>
      <span class='btn back iconfont icon-shangyishou' ></span>
      <span class='btn play palyOrPlause iconfont icon-weibiaoti-' ></span>
      <span class='btn forward iconfont icon-xiayishou' ></span>
    </div>
  </div>
  `
  return MusicPlayer
}