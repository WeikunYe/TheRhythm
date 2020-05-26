Page({

  data: {
    current: "account"
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

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