#!/usr/bin/ruby
# coding: utf-8

require 'open-uri'
require 'cgi'

cgi = CGI.new


droplet_ep = cgi['url']

# puts "Content-Type: application/json\n"
puts "Access-Control-Allow-Methods: GET,POST\n"
puts "Access-Control-Allow-Origin: *\n\n"

res = open(droplet_ep) do |f|
    f.each_line do |line|
      puts line
    end
end
