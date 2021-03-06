var db = require('./lib/db')
var http = require('./lib/http')
var public = require('./lib/public')
var renderer = require('./lib/renderer')
var resourceful = require('./lib/resourceful')
var sys = require('sys')

var connection = db.create(db.connect)

http.serve(function (request, response) {
  sys.puts(sys.inspect(request))

  if (public.found(request)) {
    public.render(response)
    return
  }

  resourceful.render(connection, renderer, request, response)
})
