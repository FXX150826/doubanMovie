// pages/splash/splash.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    wx.request({
      url: 'https://www.ucaitop.com/douBanServer/GetMovies?type=coming',
      data:{},
      method:"GET",
      header:{
        "Accept":"application-json"
      },
      success:function(res){
        console.log(res);
        var result = res.data.result;
        //图片的截取result.slice(n,m)截取result[n]到result[m]的信息（不包括result[m]）
        var splash=result.slice(3,6);
        that.setData({
          splash: splash
        })
      }
    })
  },
  //按钮的绑定事件
  handleStart:function(e){
    //点击按钮后，进行页面跳转

    wx.switchTab({
      url: '../board/board',
    })
  }
})