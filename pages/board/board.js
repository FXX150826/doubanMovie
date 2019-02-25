// pages/board/board.js
Page({

  onLoad: function (options) {

    var that = this;
    //轮播图的请求
    wx.request({
      url: 'https://www.ucaitop.com/douBanServer/GetMovies?type=coming',
      data: {},
      //请求的方式
      method: "GET",
      //设置请求的header
      header: {
        // Accept:"application-json"
        "ContentType": "json"

      },
      success: function (res) {
        console.log("轮播图：");
        console.log(res.data);
        var sliderData = res.data.result;
        console.log(sliderData);
        that.setData({
          sliderData: sliderData
        })

      }
    }),
      //正在上映
      wx.request({
        url: 'https://www.ucaitop.com/douBanServer/GetMovies?type=theaters',
        data: {},
        method: 'GET',
        // 设置请求的 header
        header: {
          "Content-Type": "json"
        },
        success: function (res) {
          console.log("正在上映:");
          console.log(res.data);
          var moviesOn = res.data.result;
          console.log(moviesOn);
          // 打印的是对应电影的id值
          console.log(moviesOn[0].id);
          that.setData({
            // movieTitle:res.data.title,
            moviesOn: moviesOn
          })
        }


      }),
      //即将上映
      wx.request({
        url: 'https://www.ucaitop.com/douBanServer/GetMovies?type=coming',
        data: {},
        method: 'GET',
        // 设置请求的 header
        header: {
          "Content-Type": "json"
        },
        success: function (res) {
          console.log("即将上映:");
          console.log(res.data);
          var moviesComing = res.data.result;
          console.log(moviesComing);
          that.setData({
            //movieTitle: res.data.title,
            moviesComing: moviesComing
          })
        }
      }),
      //top250
      wx.request({
        url: 'https://www.ucaitop.com/douBanServer/GetMovies?type=top',
        data: {},
        method: 'GET',
        // 设置请求的 header
        header: {
          "Content-Type": "json"
        },
        success: function (res) {
          console.log("top250:")
          console.log(res.data)
          var moviesBest = res.data.result;
          console.log(moviesBest);
          that.setData({
            // movieTitle:res.data.title,
            moviesBest: moviesBest
          })
        }
      })


  }


})