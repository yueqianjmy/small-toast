const app = getApp()

Page({
  data: {
    params: {
      success: 'success',
      context: '弹窗',
      time: ''
    }
  },
  onReady: () => {
    // this.toast = this.selectComponent("#toast")
  },
  onLoad: function () {
    this.toast = this.selectComponent("#toast")
    // setTimeout(() => {
    //   this.showPop()
    // }, 3000)
  },
  showPop () {
    this.toast.showToast()
  }
})
