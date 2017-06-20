var musicList = [{
  src: 'http://cloud.hunger-valley.com/music/ifyou.mp3',
  title: 'IF YOU',
  auther: 'Big Bang',
  imgUrl: "http://pic.xiami.net/images/album/img81/23681/236811442023681.jpg@4e_1c_100Q_185w_185h"
}, {
  src: 'http://cloud.hunger-valley.com/music/玫瑰.mp3',
  title: '玫瑰',
  auther: 'The Beatles',
  imgUrl: "http://pic.xiami.net/images/album/img29/10029/1684161450154192.jpeg@4e_1c_100Q_185w_185h"
}]

function data() {
  function getMusic(callback) {
    var xhr = new XMLHttpRequest()
    xhr.open('get', 'src/music.json', true)
    xhr.send()
    xhr.onload = function () {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
        callback(JSON.parse(xhr.responseText))
      }
    }
  }
  // getMusic(function (musicList) {
  // loadSongs(musicList[musicIndex])
  // })

  function loadSongs(songObj) {
    music.src = songObj.src
    titleNode.innerText = songObj.title
    authorNode.innerText = songObj.auther
  }
}

// create music elmNode and timer
var timer
var music = new Audio()
// music.autoplay = true
var musicIndex = 1

function createPlayer() {
  var Player = document.createElement('div')
  Player.className = 'musicBox'
  let imgUrl = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497855017539&di=b2826bf994aafeae0c6e1d1eed289cab&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2F9113862234eee8b8d6cae209.jpg"
  let title = "歌曲名xdadfaxx"
  let author = "Betals & Betals"

  Player.innerHTML = `
  <div class='detailShow'>
    <img src=${imgUrl}>
    <h3>${title}</h3>
    <span>${author}</span>  
  </div>
  <div class='controlShow'>
    <div class='statusZone'>
      <div class='bar'>
        <div class='barStatic'>
                <div class='now'></div>
        </div> 
      </div>
      <div class="time">00:00</div>
    </div>
    <div class='funcZone'>
      <span class='back iconfont icon-shangyishou' ></span>
      <span class='play iconfont icon-weibiaoti-' ></span>
      <span class='forward iconfont icon-xiayishou' ></span>
    </div>
  </div>
  `
  document.getElementById('root').appendChild(Player)
}
createPlayer()

function MusicPlayer() {

  var backBtn = document.querySelector('.musicBox .controlShow .funcZone .back')
  var playBtn = document.querySelector('.musicBox .controlShow .funcZone .play')
  var forwardBtn = document.querySelector('.musicBox .controlShow .funcZone .forward')
  var timeNode = document.querySelector('.musicBox .controlShow .statusZone .time')
  var barNode = document.querySelector('.musicBox .controlShow .statusZone .bar')
  var nowNode = document.querySelector('.musicBox .controlShow .statusZone .bar .now')

  var titleNode = document.querySelector('.musicBox .detailShow h3')
  var authorNode = document.querySelector('.musicBox .detailShow span')
  var imgNode = document.querySelector('.musicBox .detailShow img')


  function readySonge(songObj) {
    music.src = songObj.src
    titleNode.innerText = songObj.title
    authorNode.innerText = songObj.auther
    imgNode.src = songObj.imgUrl
  }
  readySonge(musicList[musicIndex])

  // console.log(`${music.duration} : ${music.currentTime} - ${music.readyState}`)

  playBtn.onclick = function() {
    if (this.classList.contains('icon-weibiaoti-')) {
      console.log('plause')
      music.pause()
    } else {
      console.log('play')
      music.play()
    }
    this.classList.toggle('icon-weibiaoti-')
    this.classList.toggle('icon-bofang')
  }

  forwardBtn.onclick = function() {
    loadNextMusic()
  }
  backBtn.onclick = function() {
    loadPreMusic()
  }
  barNode.onclick = function (e) {
    var percent = e.offsetX / parseInt(getComputedStyle(this).width)
    music.currentTime = percent * music.duration
    nowNode.style.width = parseInt(percent * 100) + "%"
    music.play()
  }

  music.onplaying = function () {
    console.dir(this)
    var _this = this
    timer = setInterval(function() {
      // console.log(`${_this.currentTime} : ${_this.duration}`)
      var percent = (_this.currentTime / _this.duration) * 100 + '%'
      nowNode.style.width = percent
      var minutes = parseInt(_this.currentTime / 60)
      var seconds = parseInt(_this.currentTime % 60) + ''
      seconds = seconds.length == 2 ? seconds : '0' + seconds
      timeNode.innerText = minutes + ':' + seconds
    }, 100)
  }
  music.onpause = function () {
    clearInterval(timer)
  }
  music.onended = loadNextMusic

  function loadNextMusic() {
    musicIndex++
    musicIndex = musicIndex % musicList.length
    readySonge(musicList[musicIndex])
  }
  function loadPreMusic() {
    musicIndex--
    musicIndex = (musicIndex + musicList.length) % musicList.length
    readySonge(musicList[musicIndex])
  }
}

module.exports = MusicPlayer