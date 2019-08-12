import Vue from 'vue/dist/vue.js'
import axios from 'axios'
import 'moment/src/locale/ja'
import moment from 'moment'
// import errImg from './../images/err.jpg'

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
    axios.get('http://hakolab.co.jp/api/loadConnpass.cgi')
      .then((res) => {
        console.log(res)
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
          const eventDay = moment(resEvent.started_at)
          const today = moment().hour(0).minute(0).seconds(0)
          const diff = eventDay.diff(today, 'days', true)
          eventVue.events[i].title = resEvent.title
          eventVue.events[i].link = resEvent.event_url
          eventVue.events[i].startDate = moment(resEvent.started_at).format('YYYY年M月D日(ddd) H:mm')
          eventVue.events[i].desc = /<p>([\s\S]*?)<\/p>/g.exec(resEvent.description)[1]
          if (diff < 0) {
            eventVue.events[i].status = '終了しました'
            eventVue.events[i].statusColor = 'eventStatus-end'
          } else if (diff >= 0 && diff <= 1) {
            eventVue.events[i].status = '本日開催'
            eventVue.events[i].statusColor = 'eventStatus-today'
          } else if (diff > 1 && diff <= 2) {
            eventVue.events[i].status = '明日開催'
            eventVue.events[i].statusColor = 'eventStatus-tommorow'
          } else {
            eventVue.events[i].status = '受付中（詳細はリンク先をご確認ください）'
            eventVue.events[i].statusColor = 'eventStatus-yet'
          }
          axios({
            method: 'GET',
            url: 'http://hakolab.co.jp/api/avoidACAO.cgi?url=' + resEvent.event_url,
            validateStatus: function (status) {
              return status < 500
            }
          })
            .then(function (res2) {
              eventVue.events[i].imageSrc = /background-image:url\((\S*)\)/.exec(res2.data)[1]
              eventVue.switchLoadingStyle()
            })
            .catch(function (err) {
              if (err) {
                eventVue.events[i].imageSrc = 'http://miraibase.jp/err.jpg'
              }
            })
        })
      })
      .catch((err) => {
        this.errorIconStyle = 'display: block' // ここにアイコン画像のパスを入れる
        this.errorMessage = 'イベント情報の取得に失敗しました。\n少し時間を置いてリロードして下さい。'
        this.thumbnailStyle = 'display: none'
        this.loadingStyle = 'display: none'
        console.log(err)
      })
  }
})
