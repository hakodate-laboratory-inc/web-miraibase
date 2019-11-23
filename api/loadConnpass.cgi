#!/usr/bin/ruby
# coding: utf-8

require 'open-uri'
require 'json'

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
puts JSON.generate(json)
