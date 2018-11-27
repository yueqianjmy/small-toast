const app = getApp()

Page({
  data: {
    params: {
      success: 'success',
      context: '弹窗',
      time: ''
    }
  },
  onLoad: function () {
    this.toast = this.selectComponent("#toast")
  },
  showPop () {
    this.toast.showToast()
  }
})
