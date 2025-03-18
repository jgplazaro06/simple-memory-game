const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 4200;
const server = require('http').Server(app);


app.use(express.static(__dirname + '/dist/'));
app.get('*', function(req,res) {
    res.sendFile(path.join(__dirname + '/dist/memory-game/browser/main/index.html'))
});


server.listen(port, function() {
    console.log("CONNECTED TO: " + port)
})