import Vue from 'vue/dist/vue.js'
import axios from 'axios'
import 'moment/src/locale/ja'
import moment from 'moment'

const eventVue = new Vue({
  el: '#event',
  data: {
    events: [
      {
        title: '',
        link: '',
        desc: '',
        imageSrc: '',
        startDate: ''
      },
      {
        title: '',
        link: '',
        desc: '',
        imageSrc: '',
        startDate: ''
      },
      {
        title: '',
        link: '',
        desc: '',
        imageSrc: '',
        startDate: ''
      }
    ],
    thumbnailStyle: 'display: none',
    loadingStyle: '',
    loadedThumbnails: 0
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
      .then(function (res) {
        res.data.events.forEach((resEvent, i) => {
          eventVue.events[i].title = resEvent.title
          eventVue.events[i].link = resEvent.event_url
          // eventVue.events[i].startDate = moment(resEvent.started_at).format('YYYY年M月D日ddd H:mm')
          eventVue.events[i].startDate = moment(resEvent.started_at).format('YYYY年M月D日(ddd) H:mm')
          eventVue.events[i].desc = /<p>(.+?)<\/p>/g.exec(resEvent.description)[1]
          axios.get('http://hakolab.co.jp/api/avoidACAO.cgi?url=' + resEvent.event_url)
            .then(function (resres) {
              eventVue.events[i].imageSrc = /background-image:url\((\S*)\)/.exec(resres.data)[1]
            })
        })
      })
  }
})
