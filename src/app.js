import 'normalize.css'
import './style.css';//使用require导入css文件

var music = require('./MusicPlayer.js');
document.getElementById('root').appendChild(music());
