document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    const sendBtn = document.querySelector('.chat_send > button'),
          inputMsg = document.querySelector('.chat_send > input'),
          chatList = document.querySelector('.chat_message'),
          chatBlock = document.querySelector('.chat'),
          list = document.querySelector('.chat_message_list');

    function addZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    const chat = {
        msg: []
    };

    function styleMessage() {
        const rightMsg = document.querySelectorAll('.message_right');
        rightMsg.forEach(msg => {
            msg.classList.add('message_right_act');
            let a = chatList.scrollHeight;
            chatList.scrollTop = a;
        });
    }

    function createMessage(avatar, text, hourse, minutes, parent) {
        const newMsg = document.createElement('div');
            newMsg.classList.add('message_right');
            newMsg.innerHTML = `
                <div class="message">
                    <div class="avatar">
                        <img src=${avatar} onError="this.src='img/zagl.png'" alt="Avatar">
                    </div>
                    <div class="message_text">
                        ${text}
                    </div>
                </div>
                <div class="date_message">
                    <time>${hourse}:${minutes}</time>
                </div>`;
        parent.append(newMsg);
        styleMessage();
        let a = chatList.scrollHeight;
        chatList.scrollTop = a;
    }

    class ChatMsg {
        constructor(avatar, text, hourse, minutes, parent) {
                this.avatar = avatar || 'img/zagl.png';
                this.text = text;
                this.hourse = hourse;
                this.minutes = minutes;
                this.parent = document.querySelector(parent);
            } 
            render() {
                createMessage(this.avatar, this.text, this.hourse, this.minutes, this.parent);
            }
        }        

    function addClassRobot(messageRobot) {
        messageRobot.forEach(msg => {
            msg.classList.add('message_left_act');
            let a = chatList.scrollHeight;
            chatList.scrollTop = a;
        });
    }

    function robotMessage(robotText, leftMsg) {
        const robotMsg = document.createElement('div');
                robotMsg.classList.add('message_left');
                robotMsg.classList.add('message_left_act');
        let time = new Date();
        robotMsg.innerHTML = `
            <div class="message">
                <div class="avatar">
                    <img src='img/robot_avatar.png' alt="Avatar">
                </div>
                <div class="message_text">
                    ${robotText}
                </div>
            </div>
            <div class="date_message">
                <time>${time.getHours()}:${time.getMinutes()}</time>
            </div>`;
        list.append(robotMsg);
        addClassRobot(leftMsg);    
    }

    function sendRobot() {
        const leftMsg = document.querySelectorAll('.message_left');
        let b = inputMsg.value;
        if (leftMsg.length === 1) {
            robotMessage("Замечательно! Теперь я знаю, как ты выглядишь. Давай теперь познакомимся. Я - Петя, как тебя зовут?", leftMsg);
        } else if (leftMsg.length === 2) {
            robotMessage(`Очень приятно, ${chat.msg[1]}. ${chat.msg[1]}, давай поболтаем.`, leftMsg);
        } else if (b == 'Хорошо') {
            robotMessage(`Замечательно, у меня тоже все хорошо`, leftMsg);
        } else if (b == 'Как дела?') {
            robotMessage(`У меня все хорошо, а у тебя?`, leftMsg);
        } else if (b == 'Давай') {
            robotMessage(`Прекрасно, давай.`, leftMsg);
        } else if (b == 'Плохо') {
                robotMessage(`Мне тоже плохо. Давай грустить вместе.`, leftMsg);
        } else if (b == 'Привет') {
                robotMessage(`Привет. Поболтаем? Как твои дела?`, leftMsg);
        } else {
            robotMessage('Можешь написать мне "Привет" и мы поболтаем.', leftMsg);
            }
            
        inputMsg.value = '';
    }



    function test(text) {
        for (let i = 0; i < chat.msg.length; i++){
            if (chat.msg[i] === "Как тебя зовут?"){
                robotMessage("Меня Петя.", text);
            }
        }
    }

    function writeDB() {
        let msg = inputMsg.value;
        chat.msg[i] = msg;
        i++;
        
    }

    let i = 0;
    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let time = new Date();
        new ChatMsg(
                    chat.msg[1],
                    inputMsg.value,
                    time.getHours(),
                    addZero(time.getMinutes()),
                    '.chat_message_list')
        .render();
        setTimeout(sendRobot, 1000);
        writeDB();
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Enter' && chatBlock.classList.contains('chat_active')) { 
            e.preventDefault();
            let time = new Date();
            new ChatMsg(
                        chat.msg[1],
                        inputMsg.value,
                        time.getHours(),
                        addZero(time.getMinutes()),
                        '.chat_message_list')
            .render();
            setTimeout(sendRobot, 1000);
            writeDB();
        }
        });
});