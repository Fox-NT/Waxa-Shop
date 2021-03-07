"use strict" 

document.addEventListener('DOMContentLoaded', () => {
    const chatBtn = document.querySelector('.chat_button'),
          chat = document.querySelector('.chat'),
          body = document.querySelector('.main_container'),
          chatList = document.querySelector('.chat_message');


    function openChat() {
        chat.classList.add('chat_active');
            let a = chatList.scrollHeight;
            chatList.scrollTop = a;
            chatBtn.innerHTML = '';
            chatBtn.innerHTML = '<i class="fas fa-times"></i>';
            chatBtn.classList.add('chat_button_activ');
    }

    function closeChat() {
        chat.classList.remove('chat_active');
        chatBtn.innerHTML = '';
        chatBtn.innerHTML = '<i class="fas fa-comment-alt"></i>';
        chatBtn.classList.remove('chat_button_activ');
    }

    chatBtn.addEventListener('click', () => {
        if (chat.classList.contains('chat_active')) {
            closeChat();
        } else {
            openChat();
        }
    });

    const sendBtn = document.querySelector('.chat_send > button'),
          inputMsg = document.querySelector('.chat_send > input');


          let a = new Date();

        

          function addZero(num) {
            if (num >= 0 && num < 10) {
                return `0${num}`;
            } else {
                return num;
            }
        }

        const b = {
            msg: [
                {
                name: ''
                }
            ]
        };
        class ChatMsg {
            avatar = 'img/zagl.png'
            constructor(avatar, text, hourse, minutes, parenT) {
                this.avatar = avatar || 'img/zagl.png';
                this.text = text;
                this.hourse = hourse;
                this.minutes = minutes;
                this.parent = document.querySelector(parenT);
            } 
            render() {
                const newMsg = document.createElement('div');
                newMsg.classList.add('message_right');
                newMsg.innerHTML = `
                    <div class="message">
                        <div class="avatar">
                            <img src=${this.avatar} onError="this.src='img/zagl.png'" alt="Avatar">
                        </div>
                        <div class="message_text">
                            ${this.text}
                        </div>
                    </div>
                    <div class="date_message">
                        <time>${this.hourse}:${this.minutes}</time>
                    </div>`;
                this.parent.append(newMsg);
                
            const right = document.querySelectorAll('.message_right');
                right.forEach(msg => {
                    msg.classList.add('message_right_act');
                    let a = chatList.scrollHeight;
                    chatList.scrollTop = a;
                });
                let a = chatList.scrollHeight;
                chatList.scrollTop = a;
            }
        }        

        function sendRobot() {
            const leftMsg = document.querySelectorAll('.message_left');
        function addClassRobot() {
            leftMsg.forEach(msg => {
                msg.classList.add('message_left_act');
                let a = chatList.scrollHeight;
                chatList.scrollTop = a;
                // console.log(leftMsg.length);
            });
        }
            const list = document.querySelector('.chat_message_list');
               const robotMsg = document.createElement('div');
                robotMsg.classList.add('message_left');
                robotMsg.classList.add('message_left_act');
            if(leftMsg.length === 0) {
                a = new Date();
                robotMsg.innerHTML = `
                    <div class="message">
                        <div class="avatar">
                            <img src='img/robot_avatar.png' alt="Avatar">
                        </div>
                        <div class="message_text">
                            Привет, мы еще не знакомы! Отправь мне ссылку на свою аватарку. Я посмотрю на тебя.
                        </div>
                    </div>
                    <div class="date_message">
                        <time>${a.getHours()}:${a.getMinutes()}</time>
                    </div>`;
                list.append(robotMsg);
                addClassRobot();
                a = null;
              } else if (leftMsg.length === 1) {
                a = new Date();
                    robotMsg.innerHTML = `
                    <div class="message">
                        <div class="avatar">
                            <img src='img/robot_avatar.png' alt="Avatar">
                        </div>
                        <div class="message_text">Круто! А теперь давай познакомимся, Меня зовут Петя. А тебя?
                        </div>
                    </div>
                    <div class="date_message">
                        <time>${a.getHours()}:${a.getMinutes()}</time>
                    </div>`;
                    list.append(robotMsg);
                    addClassRobot();
                    a = null;
              } else if (leftMsg.length === 2) {
                a = new Date();
                robotMsg.innerHTML = `
                    <div class="message">
                        <div class="avatar">
                            <img src='img/robot_avatar.png' alt="Avatar">
                        </div>
                        <div class="message_text">
                        ${b.msg[1].name}, замечательно! Я еще плохо понимаю людей, заходи ко мне позже!
                        </div>
                    </div>
                    <div class="date_message">
                        <time>${a.getHours()}:${a.getMinutes()}</time>
                    </div>`;
                    list.append(robotMsg);
                    addClassRobot();
                    a = null;
            } else {
                a = new Date();
                robotMsg.innerHTML = `
                <div class="message">
                    <div class="avatar">
                        <img src='img/robot_avatar.png' alt="Avatar">
                    </div>
                    <div class="message_text">
                        Еще рано, ${b.msg[1].name}!
                    </div>
                </div>
                <div class="date_message">
                    <time>${a.getHours()}:${a.getMinutes()}</time>
                </div>`;
                list.append(robotMsg);
                addClassRobot();
                a = null;
          }
        }
let i = 0;
          sendBtn.addEventListener('click', (e) => {
              e.preventDefault();
                a = new Date();
              new ChatMsg(
              b.msg[0].name,
              inputMsg.value,
              a.getHours(),
              addZero(a.getMinutes()),
              '.chat_message_list')
              .render();
                a = null;
              setTimeout(sendRobot, 1000);

              let User = inputMsg.value;

              b.msg[i] = {
                  name: User
              };
              i++;
              console.log(b.msg[0].name);
              console.log(b);
            //   console.log()
          });

          document.addEventListener('click', (e) => {
            if (e.code === 'Enter' && chat.classList.contains('chat_active')) { 
                e.preventDefault();
                a = new Date();
                new ChatMsg(
                b.msg[0].name,
                inputMsg.value,
                a.getHours(),
                addZero(a.getMinutes()),
                '.chat_message_list')
                .render();
                    a = null;
                setTimeout(sendRobot, 1000);

                let User = inputMsg.value;

                b.msg[i] = {
                    name: User
                };
                i++;
                console.log(b.msg[0].name);
                console.log(b);
            }
          });
});