var swarm = require('discovery-swarm')

var sw = swarm()

sw.listen(10000)
sw.join('hackerdome') // can be any id/name/hash

sw.on('connection', function (connection, info) {
  console.log('found + connected to peer')
  console.log(info)
})
