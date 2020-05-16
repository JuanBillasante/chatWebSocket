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

document.querySelector('#form')?.addEventListener('submit',(ev)=>{
    ev.preventDefault();
    const message : string = (document.querySelector("#mensaje") as HTMLInputElement).value;
    chat.emmitMessage(message);
    return false;
})