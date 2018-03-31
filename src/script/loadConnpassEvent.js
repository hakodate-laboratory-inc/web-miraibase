import Vue from 'vue/dist/vue.js'
import axios from 'axios'

const eventVue = new Vue({  // eslint-disable-line
  el: '#event',
  data: {
    events: [
      {
        title: '',
        link: '',
        desc: '',
        imageSrc: ''
      },
      {
        title: '',
        link: '',
        desc: '',
        imageSrc: ''
      },
      {
        title: '',
        link: '',
        desc: '',
        imageSrc: ''
      }
    ]
  },
  mounted () {
    axios.get('http://hakolab.co.jp/api/loadConnpass.cgi')
      .then(function (res) {
        res.data.events.forEach((resEvent, i) => {
          eventVue.events[i].title = resEvent.title
          eventVue.events[i].link = resEvent.event_url
          eventVue.events[i].desc = /<p>(.+?)<\/p>/g.exec(resEvent.description)[1]
          axios.get('http://hakolab.co.jp/api/avoidACAO.cgi?url=' + resEvent.event_url)
            .then(function (resres) {
              eventVue.events[i].imageSrc = /background-image:url\((\S*)\)/.exec(resres.data)[1]
            })
        })
      })
  }
})