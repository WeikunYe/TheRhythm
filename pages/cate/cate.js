// pages/cate/cate.js
Page({

  /**
   * Page initial data
   */
  data: {
    current: 'category'
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },
  handleChange: function (e) {
    let item = e.detail.key;
    if (item != this.data.current) {
      switch (item) {
        case "homepage":
          wx.redirectTo({
            url: '../home/home',
          });
          break;
        case "category":
          wx.redirectTo({
            url: '../cate/cate',
          });
          break;
        case "account":
          wx.redirectTo({
            url: '../account/account',
          })
          break;
      }
    }
  }
})