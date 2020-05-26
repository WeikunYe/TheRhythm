// pages/welcome/welcome.js
Page({
  data: {

  },
  onLoad: function (options) {

  },
  login: function(){
    wx.redirectTo({
      url: '../home/home',
    })
  }
})