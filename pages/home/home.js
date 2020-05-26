Page({

  data: {
    current: 'homepage'
  },

  onLoad: function(options) {

  },
  onShareAppMessage: function() {

  },
  handleChange: function(e) {
    let item = e.detail.key;
    if(item != this.data.current){
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