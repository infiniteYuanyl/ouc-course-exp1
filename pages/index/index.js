// index.js
// 获取应用实例
const app = getApp()

Page({
  data:{
    img_src:"",
    username:""
  },
    getMyInfo:function(e){
      //console.log(e.detail.userInfo)
      let info = e.detail.userInfo
      this.setData({
        img_src:info.avatarUrl,
        username:info.nickName
      })
    }
  })
