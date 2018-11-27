
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    params: {
      type: Object,
      value: {
        
      },
      observer (val) {
        if (val.success === 'success') {
          this.setData({
            icon: './image/right.png'
          })
        } else if (val.success === 'warning') {
          this.setData({
            icon: './image/warning.png'
          })
        } else {
          this.setData({
            icon: ''
          })
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false,
    icon: '',
    animation: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 显示弹窗
    showToast: function () {
      this.setData({
        isShow: true
      })
      this.clickShow()
    },
    // 隐藏弹窗
    hideToast: function () {
      this.setData({
        isShow: false
      })
    },
    clickShow: function () {
      let animate = wx.createAnimation({
        duration: 300,
        timingFunction: 'linear',
      })
      animate.opacity(1).step()
      this.setData({
        animation: animate.export()
      })
      // 延时隐藏
      if (this.data.params.time) {
        setTimeout(() => {
          this.hideToast()
          this.setData({
            animation: {}
          })
        }, this.data.params.time)
      } else {
        setTimeout(() => {
          this.hideToast()
          this.setData({
            animation: {}
          })
        }, 2000)
      }
    }
  }
})
