import Vue from 'vue/dist/vue.js'
import axios from 'axios'

const eventVue = new Vue({
  el: '#event',
  data: {
    events: [],
    thumbnailStyle: 'display: none',
    loadingStyle: '',
    loadedThumbnails: 0,
    errorMessage: '',
    errorIconStyle: ''
  },
  methods: {
    switchLoadingStyle: function () {
      this.loadedThumbnails++
      if (this.loadedThumbnails >= 3) {
        this.thumbnailStyle = ''
        this.loadingStyle = 'display: none'
      }
    }
  },
  mounted () {
    axios.get('http://halab.co.jp/api/loadConnpass.cgi')
      .then((res) => {
        res.data.events.sort(function (a, b) {
          if (a.started_at < b.started_at) return -1
          if (a.started_at > b.started_at) return 1
          return 0
        })
        res.data.events.forEach((resEvent, i) => {
          eventVue.events.push({
            title: '',
            link: '',
            desc: '',
            imageSrc: ''
          })
          eventVue.events[i].title = resEvent.title
          eventVue.events[i].link = resEvent.event_url
          eventVue.events[i].desc = /<p>(.+?)<\/p>/g.exec(resEvent.description)[1]
          axios.get('http://hakolab.co.jp/api/avoidACAO.cgi?url=' + resEvent.event_url)
            .then(function (resres) {
              eventVue.events[i].imageSrc = /background-image:url\((\S*)\)/.exec(resres.data)[1]
            })
        })
      })
      .catch(() => {
        this.errorIconStyle = 'display: block' // ここにアイコン画像のパスを入れる
        this.errorMessage = 'イベント情報の取得に失敗しました。\n少し時間を置いてリロードして下さい。'
        this.thumbnailStyle = 'display: none'
        this.loadingStyle = 'display: none'
      })
  }
})
