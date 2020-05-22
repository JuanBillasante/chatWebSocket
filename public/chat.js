"use strict";
var socket = io.connect('http://localhost:5000/',{'forceNew':true})
var Chat = /** @class */ (function () {
    function Chat(cb) {
        this.cb = cb;
    }
    Chat.prototype.emmitMessage = function (message) {
        Chat.io.emit('message', message);
    };
    return Chat;
});

function messageReceived(response) {
}
Chat.io = socket;
var chat = new Chat(messageReceived);
document.querySelector("#form").addEventListener('submit', function (ev) {
    ev.preventDefault();
    var message = document.querySelector("#message").value;
    chat.emmitMessage(message);
    return false;
});
