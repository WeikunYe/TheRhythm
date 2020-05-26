// pages/poetry/poetry.js
Page({
  data: {
    poetry: {
      title: "SONNET 18",
      author: "William Shakespeare",
      year: 1609,
      genre: "Elizabethan Sonnet",
      banner: "../../img/8.png",
      translater: "梁秋实",
      en: [
        "Shall I compare thee to a summer's day?",
        "Thou art more lovely and more temperate:",
        "Rough winds do shake the darling buds of May,",
        "And summer's lease hath all too short a date;",
        "Sometime too hot the eye of heaven shines,",
        "And often is his gold complexion dimm'd;",
        "And every fair from fair sometime declines,",
        "By chance or nature’s changing course untrimm'd;",
        "But thy eternal summer shall not fade,",
        "Nor lose possession of that fair thou ow’st;",
        "Nor shall death brag thou wander’st in his shade,",
        "When in eternal lines to time thou grow’st:",
        "So long as men can breathe or eyes can see,",
        "So long lives this, and this gives life to thee."
      ],
      cn: [
        "我可能把你和夏天相比拟？",
        "你比夏天更可爱更温和；",
        "狂风会把五月的花苞吹落地，",
        "夏天也嫌太短促，匆匆而过： ",
        "有时太阳照得太热， ",
        "常常又遮暗他的金色的脸； ",
        "美的事物总不免要凋落， ",
        "偶然的，或是随自然变化而流转。 ",
        "但是你的永恒之夏不会褪色； ",
        "你不会失去你的俊美的仪容； ",
        "死神不能夸说你在他的阴影里面走着， ",
        "如果你在这不朽的诗句里获得了永生； ",
        "只要人们能呼吸，眼睛能看东西， ",
        "此诗就会不朽，使你永久生存下去。"
      ],
      bgm: '../../img/1.mp3'
    },
    language: 1,
    isPlay: false
  },
  onLoad: function(options) {
    var that = this;
    wx.setNavigationBarTitle({
      title: this.data.poetry.title
    })
  },
  onReady: function() {
    this.audioCtx = wx.createAudioContext('myAudio');
  },
  onShow: function() {

  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  },
  changeLanguage: function() {
    var that = this;
    this.setData({
      language: !that.data.language
    })
  }
})