#!/usr/bin/ruby
# coding: utf-8

require 'open-uri'
require 'json'
require 'date'

droplet_ep = 'https://connpass.com/api/v1/event/?keyword_or=mirai%20base&keyword_or=miraibase&order=2&count=3'

puts "Content-Type: application/json\n"
puts "Access-Control-Allow-Methods: GET,POST\n"
puts "Access-Control-Allow-Origin: *\n\n"

r = ''
res = open(droplet_ep) do |f|
  f.each_line do |line|
    r = r << line
  end
end

json = JSON.parse(r)

# 特例イベントURL追加場所
# 明らかに古いものは消していきたい
SpecialCaseEventList = [
  'https://connpass.com/event/156703/'
]

SpecialCaseEventList.each do |specialCaseEvent|
  # URLからidを抽出
  id = specialCaseEvent.match(/event\/(\d+)\//)[1]
  url = 'https://connpass.com/api/v1/event/?event_id=' << id

  # イベント情報を取得し、eventリストに追加
  r = ''
  res = open(url) do |f|
    f.each_line do |line|
      r = r << line
    end
  end
  json_temp = JSON.parse(r)
  json['events'].push(json_temp['events'][0])

  # 開始日時でソート
  # Date型を文字列に変換して比較
  json['events'] = json['events'].sort_by do |hash|
    -Date.parse(hash['started_at']).strftime("%Y%m%d%H%M%S").to_i
  end

  # 返すeventリストを3つに固定したいので溢れたものを削除
  json['events'].delete_at 3
end

puts JSON.generate(json)
