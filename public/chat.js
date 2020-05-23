var socket = io.connect('http://localhost:5000/', {'forceNew': true});

socket.on('message',function(data){
    console.log(data);
})


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
chat.emmitMessage("Hola servidor");
/* (document.querySelector("#form")as HTMLInputElement).addEventListener('submit',(ev)=>{
    ev.preventDefault();
    const message : string = (document.querySelector("#message") as HTMLInputElement).value;
    chat.emmitMessage(message);
    return false;
})  */ 
