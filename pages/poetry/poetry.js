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

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    var that = this;
    wx.setNavigationBarTitle({
      title: this.data.poetry.title
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {

  },
  changeLanguage: function() {
    var that = this;
    this.setData({
      language: !that.data.language
    })
  },
  playAudio: function(ev) {
    var that = this;
    var isPlay = this.data.isPlay;
    if (isPlay) {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlay: false
      })
    } else {
      wx.playBackgroundAudio({
        dataUrl: "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46",
        title: that.data.poetry.title,
        coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
      })
      this.setData({
        isPlay: true
      })
    }

  }
})