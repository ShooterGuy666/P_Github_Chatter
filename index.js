const app = require('express')();
const express = require('express');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const db = require('./queries');
const port = process.env.PORT || 3000;


server.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});

app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/javascript', (req, res) =>{
    res.sendFile(__dirname + '/public/javascript.html');
});

app.get('/swift', (req, res) =>{
    res.sendFile(__dirname + '/public/swift.html');
});

app.get('/css', (req, res) =>{
    res.sendFile(__dirname + '/public/css.html');
});

app.get('/nightlife', (req, res) =>{
    res.sendFile(__dirname + '/public/nightlife.html');
});

app.get('/chillout', (req, res) =>{
    res.sendFile(__dirname + '/public/chillout.html');
});

app.get('/moviesseries', (req, res) =>{
    res.sendFile(__dirname + '/public/series_movies.html');
});

app.get('/sports', (req, res) =>{
    res.sendFile(__dirname + '/public/sports.html');
});

//tech namespace
const tech = io.of('/tech');

tech.on('connection', (socket) => {
    socket.on('join', (data) => {
        socket.join(data.room);
        tech.in(data.room).emit('message', `new user joined ${data.room} room!`);
    })

    socket.on('message', (data) => {
        console.log(`message: ${data.msg}`);
        tech.in(data.room).emit('message', data.msg);
        var insert_message = {
            name: "user",
            room: data.room,
            text: data.msg
        };
        db.insertChats(insert_message);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');

        tech.emit('message', 'user disconnected');
    });
});

//chill namespace
const chill = io.of('/chill');

chill.on('connection', (socket) => {
    socket.on('join', (data) => {
        socket.join(data.room);
        chill.in(data.room).emit('message', `new user joined ${data.room} room!`);
    })

    socket.on('message', (data) => {
        console.log(`message: ${data.msg}`);
        chill.in(data.room).emit('message', data.msg);
        var insert_message = {
            name: "user",
            room: data.room,
            text: data.msg
        };
        db.insertChats(insert_message);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');

        chill.emit('message', 'user disconnected');
    });
});

// test