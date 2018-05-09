#!/usr/bin/ruby
# coding: utf-8

require 'open-uri'

droplet_ep = <<EOS
{
  "results_returned": 3,
  "events": [{
    "event_url": "https://asoviva.connpass.com/event/83246/",
    "event_type": "participation",
    "owner_nickname": "deckeye",
    "series": {
      "url": "https://asoviva.connpass.com/",
      "id": 3760,
      "title": "MIRAI BASE"
    },
    "updated_at": "2018-04-27T13:59:27+09:00",
    "lat": "41.814460600000",
    "started_at": "#{Time.now}",
    "hash_tag": "",
    "title": "Today's Event",
    "event_id": 84980,
    "lon": "140.757158800000",
    "waiting": 0,
    "limit": 40,
    "owner_id": 34024,
    "owner_display_name": "でかいひと",
    "description": "Today's Event",
    "catch": "",
    "accepted": 1,
    "ended_at": "2018-04-27T21:00:00+09:00",
    "place": "MIRAI BASE"
  }, {
    "event_url": "https://asoviva.connpass.com/event/83246/",
    "event_type": "participation",
    "owner_nickname": "natmark",
    "series": {
      "url": "https://asoviva.connpass.com/",
      "id": 3760,
      "title": "MIRAI BASE"
    },
    "updated_at": "2018-04-19T12:39:19+09:00",
    "lat": "41.814460600000",
    "started_at": "#{Time.now - 1 * 60 * 60 * 24}",
    "hash_tag": "miraibase",
    "title": "Yesterday's Event",
    "event_id": 83246,
    "lon": "140.757158800000",
    "waiting": 0,
    "limit": 31,
    "owner_id": 110145,
    "owner_display_name": "Atsuya Sato",
    "description": "Yesterday's Event",
    "address": "北海道函館市美原２丁目７−２１ 万勝ビル",
    "catch": "みんな大好きLT大会！",
    "accepted": 21,
    "ended_at": "2018-04-19T22:00:00+09:00",
    "place": "MIRAI BASE"
  }, {
    "event_url": "https://asoviva.connpass.com/event/83246/",
    "event_type": "participation",
    "owner_nickname": "deckeye",
    "series": {
      "url": "https://asoviva.connpass.com/",
      "id": 3760,
      "title": "MIRAI BASE"
    },
    "updated_at": "2018-04-09T21:00:57+09:00",
    "lat": "41.814460600000",
    "started_at": "#{Time.now + 1 * 60 * 60 * 24}",
    "hash_tag": "",
    "title": "あしたのいべんと",
    "event_id": 84400,
    "lon": "140.757158800000",
    "waiting": 0,
    "limit": 30,
    "owner_id": 34024,
    "owner_display_name": "でかいひと",
    "description": "あしたのいべんと",
    "catch": "",
    "accepted": 4,
    "ended_at": "2018-04-15T18:00:00+09:00",
    "place": "MIRAI BASE"
  }],
  "results_start": 1,
  "results_available": 13
}
EOS

puts "Content-Type: application/json\n"
puts "Access-Control-Allow-Methods: GET,POST\n"
puts "Access-Control-Allow-Origin: *\n\n"

puts droplet_ep
