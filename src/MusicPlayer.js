var musicList = [{
  src: '//cloud.hunger-valley.com/music/ifyou.mp3',
  title: 'IF YOU',
  author: 'Big Bang',
  imgUrl: "//pic.xiami.net/images/album/img81/23681/236811442023681.jpg@4e_1c_100Q_185w_185h"
}, {
  src: '//cloud.hunger-valley.com/music/玫瑰.mp3',
  title: '玫瑰',
  author: 'The Beatles',
  imgUrl: "//pic.xiami.net/images/album/img29/10029/1684161450154192.jpeg@4e_1c_100Q_185w_185h"
},
{
  title: 'Preparation',
  author: 'Hans Zimmer & Richard Harvey',
  src: 'http://devtest.qiniudn.com/Preparation.mp3',
  imgUrl: 'http://devtest.qiniudn.com/Preparation.jpg'
},
{
  title: '回レ！雪月花',
  author: '小倉唯',
  src: 'http://devtest.qiniudn.com/回レ！雪月花.mp3',
  imgUrl: 'http://devtest.qiniudn.com/回レ！雪月花.jpg',
}, {
  title: 'secret base~君がくれたもの~',
  author: '茅野愛衣',
  src: 'http://devtest.qiniudn.com/secret base~.mp3',
  imgUrl: 'http://devtest.qiniudn.com/secret base~.jpg'
}, {
  title: 'あっちゅ～ま青春!',
  author: '七森中☆ごらく部',
  src: 'http://devtest.qiniudn.com/あっちゅ～ま青春!.mp3',
  imgUrl: 'http://devtest.qiniudn.com/あっちゅ～ま青春!.jpg'
}
]

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
    authorNode.innerText = songObj.author
  }
}

// create music elmNode and timer
var timer
var music = new Audio()
music.crossOrigin = "anonymous";
// music.autoplay = true
var musicIndex = 0

function createPlayer() {
  var Player = document.createElement('div')
  Player.className = 'musicBox'
  let imgUrl = "//iph.href.lu/300x300?text=%E4%B8%93%E8%BE%91%E5%9B%BE%E7%89%87"
  let title = "歌曲名"
  let author = "作词 & 作曲"

  Player.innerHTML = `
  <div class='playerSection'>
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
        <span class='play iconfont icon-bofang1' ></span>
        <span class='forward iconfont icon-xiayishou' ></span>
      </div>
    </div>
  </div>
  <div class='listSection'>
    <div class='bgBlur'></div>
  </div>
  `
      // <div class='listContent'></div>

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

  var waveNode = document.querySelector('.musicBox .waveShow')


  var titleNode = document.querySelector('.musicBox .detailShow h3')
  var authorNode = document.querySelector('.musicBox .detailShow span')
  var imgNode = document.querySelector('.musicBox .detailShow img')

  var listSecNode = document.querySelector('.musicBox .listSection')
  var blurBgDiv = document.querySelector('.listSection .bgBlur')
  function createList(songArr) {
    var ulNode = document.createElement('ul')
    var html = ''
    var index = 0
    songArr.forEach(function (obj) {
      html += `<li data-index=${index}>
                <span class='iconfont icon-yinle' ></span>
                <div>${obj.title}</div>
                <span>${obj.author}</span>
               </li>`
      index++
    })
    ulNode.innerHTML = html
    return ulNode
  }
  listSecNode.appendChild(createList(musicList))

  // playList event handle
  var lastIndex = -1
  document.querySelector('.musicBox .listSection ul').addEventListener("click", function (e) {
    if (event.target.tagName.toLowerCase() === 'ul') {
      return
    }
    let liNode = event.target.closest('li')
    let s = liNode.closest('ul').querySelectorAll('li')
    for (var i = 0; i < s.length; i++) {
      s[i].classList.remove('activeSongTtem')
    }
    liNode.classList.add('activeSongTtem')

    musicIndex = liNode.dataset.index
    console.log(` ${lastIndex} -- ${musicIndex}`)

    if(lastIndex === musicIndex) { 
      console.log('same song ') 
      return
    }
    readySonge(musicList[musicIndex])
    playBtn.classList.toggle('icon-bofang1')
    playBtn.classList.toggle('icon-zanting')
    // console.log(' start playing ...') 
    music.play()
    lastIndex = musicIndex
  }, true)

  function liSelectedAtIndex(index) {
    let allLiNode = document.querySelectorAll('.musicBox .listSection ul li')
    for (var i = 0; i <allLiNode.length; i++) {
      allLiNode[i].classList.remove('activeSongTtem')
    }
    allLiNode[index].classList.add('activeSongTtem')
  }

  var isReady = false
  function readySonge(songObj) {
    console.log("readySonge here ")
    isReady = true
    music.src = songObj.src
    titleNode.innerText = songObj.title
    authorNode.innerText = songObj.author
    imgNode.src = songObj.imgUrl
    blurBgDiv.style.backgroundImage = `url(${songObj.imgUrl})`
  }

  playBtn.onclick = function () {
    if(!isReady) {
      alert("请在歌曲列表中选择一首歌曲")
      return
    } 

    if (!this.classList.contains('icon-bofang1')) {
      console.log('plause')
      music.pause()
    } else {
      console.log('play')
      music.play()
    }
    
    this.classList.toggle('icon-bofang1')
    this.classList.toggle('icon-zanting')
  }
  forwardBtn.onclick = function () {
    if(!isReady) {
      alert("请在歌曲列表中选择一首歌曲")
      return
    } 
    loadNextMusic()
  }
  backBtn.onclick = function () {
    if(!isReady) {
      alert("请在歌曲列表中选择一首歌曲")
      return
    } 
    loadPreMusic()
  }
  barNode.onclick = function (e) {
    var percent = e.offsetX / parseInt(getComputedStyle(this).width)
    music.currentTime = percent * music.duration
    nowNode.style.width = parseInt(percent * 100) + "%"
    music.play()
  }
  music.onplaying = function () {
    console.log(' palying ing ...')
    var _this = this
    timer = setInterval(function () {
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
    liSelectedAtIndex(musicIndex)
    music.play()
  }
  function loadPreMusic() {
    musicIndex--
    musicIndex = (musicIndex + musicList.length) % musicList.length
    readySonge(musicList[musicIndex])
    liSelectedAtIndex(musicIndex)
    music.play()
  }

  // not using this time
  function wave(audioObj, canvasNode) {
    window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
    var context = new window.AudioContext();
    var analyser = context.createAnalyser()
    // var source = context.createMediaElementSource(audioObj)
    var source = context.createMediaStreamSource(audioObj)
    source.connect(analyser)
    analyser.connect(context.destination)

    console.dir(context)
    console.log(canvasNode)
    var ctx = canvasNode.getContext('2d')

    // frameLooper()
    function frameLooper() {
      console.log(' ... ')
      window.requestAnimationFrame(frameLooper)
      var fbcArr = new Uint8Array(analyser.frequencyBinCount)
      analyser.getByteFrequencyData(fbcArr)

      ctx.clearRect(0, 0, canvasNode.width, canvasNode.height)
      ctx.fillStyle = '#000'
      var bars = 100
      var bar_x, bar_height
      var bar_width = 2;
      for (var i = 0; i < bars; i++) {
        bar_x = i * 3
        bar_width = 2
        bar_height = -(fbcArr[i] / 2)
        ctx.fillRect(bar_x, canvasNode.height, canvasNode.width, canvasNode.height)
      }
    }
  }
}

module.exports = MusicPlayer