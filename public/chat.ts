const socket = (window as any).io();

class Chat {
    static io : any;
    constructor(private cb : Function){}

    emmitMessage(message:string){

        Chat.io.emit('message',message);

    }
}

function messageReceived(response : any){

}

Chat.io=socket;
let chat : Chat = new Chat (messageReceived);


chat.emmitMessage("Hola servidor");


/* (document.querySelector("#form")as HTMLInputElement).addEventListener('submit',(ev)=>{
    ev.preventDefault();
    const message : string = (document.querySelector("#message") as HTMLInputElement).value;
    chat.emmitMessage(message);
    return false;
})  */