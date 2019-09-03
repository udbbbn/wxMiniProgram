const app = getApp()

Page({
  data: {
    city: []
  },
  onLoad: function () {

  },
  choseCity() {
    this.selectComponent('#cityChose').showPicker();
  },
  cityChange(e) {
    const { value } = e.detail;
    this.setData({
      city: value
    })
  }
})
