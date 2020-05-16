"use strict";
var _a;
var socket = window.io();
var Chat = /** @class */ (function () {
    function Chat(cb) {
        this.cb = cb;
    }
    Chat.prototype.emmitMessage = function (message) {
        Chat.io.emit('message', message);
    };
    return Chat;
}());
function messageReceived(response) {
}
Chat.io = socket;
var chat = new Chat(messageReceived);
(_a = document.querySelector('#form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var message = document.querySelector("#mensaje").value;
    chat.emmitMessage(message);
    return false;
});
