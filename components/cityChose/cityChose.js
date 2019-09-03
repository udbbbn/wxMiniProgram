// components/picker/picker.
const json = require('../../util/city').data;

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pickerShow: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false,
    curJson: json,
    proIdx: 0,
    cityIdx: 0,
    disIdx: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    pickChangeHandle(e) {
      const { value } = e.detail;
      this.setData({
        proIdx: value[0],
        cityIdx: value[1],
        disIdx: value[2]
      })
    },
    showPicker() {
      this.setData({
        isShow: true,
        proIdx: 0,
        cityIdx: 0,
        disIdx: 0
      }, () => {
        setTimeout(this.setData({
          transformClass: 'transY0'
        }), 300)
      })
    },
    cancelHandle() {
      this.setData({
        isShow: false,
        transformClass: ''
      })
    },
    comfirmHandle() {
      let _d = this.data.curJson;
      let { proIdx, cityIdx, disIdx } = this.data;
      this.setData({
        isShow: false,
        transformClass: ''
      });
      this.triggerEvent('bindchange', {
        value: [_d[proIdx], _d[proIdx].cs[cityIdx],_d[proIdx].cs[cityIdx].as[disIdx]]
      })
    }
  }
})
