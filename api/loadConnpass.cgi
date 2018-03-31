#!/usr/bin/ruby
# coding: utf-8

require 'open-uri'

droplet_ep = 'https://connpass.com/api/v1/event/?series_id=3760&order=2&count=3'

puts "Content-Type: application/json\n"
puts "Access-Control-Allow-Methods: GET,POST\n"
puts "Access-Control-Allow-Origin: *\n\n"

res = open(droplet_ep) do |f|
    f.each_line do |line|
      puts line
    end
end
