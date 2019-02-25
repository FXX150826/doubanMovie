// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //显示加载动画图标
    hidden:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //请求电影详情
    wx.request({
      url: 'https://www.ucaitop.com/douBanServer/FindMovie?id='+options.id,
      data:{},
      method:"GET",
      header:{
        "ContentType":"json"
      },
      //请求成功返回参数说明
      success:function(res){
        console.log("详情页");
        console.log(res.data);
        that.setData({
          movieDetail:res.data,
          //隐藏加载动画
          hidden:true
        })
        //动态更改微信小程序的标题
        wx.setNavigationBarTitle({
          title: res.data.movName
        })
      }
    })
  }
})