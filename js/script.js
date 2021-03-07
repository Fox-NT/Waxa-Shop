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

        class ChatMsg {
            constructor(avatar, text, hourse, minutes, parenT) {
                this.avatar = avatar;
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
                            <img src=${this.avatar} alt="Avatar">
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

              let t = new Date();
              const hours = t.getHours();
              const minutes = t.getMinutes();
          
        

        function sendRobot() {
            const leftMsg = document.querySelectorAll('.message_left');
        function addClassRobot() {
            leftMsg.forEach(msg => {
                msg.classList.add('message_left_act');
                let a = chatList.scrollHeight;
                chatList.scrollTop = a;
                console.log(leftMsg.length);
            });
        }
            const list = document.querySelector('.chat_message_list');
               const robotMsg = document.createElement('div');
                robotMsg.classList.add('message_left');
                robotMsg.classList.add('message_left_act');
            if(leftMsg.length === 0) {
                robotMsg.innerHTML = `
                    <div class="message">
                        <div class="avatar">
                            <img src='img/robot_avatar.png' alt="Avatar">
                        </div>
                        <div class="message_text">
                            Привет, я еще глуп. Я пока тебя не понимаю. Попробуй позже!
                        </div>
                    </div>
                    <div class="date_message">
                        <time>${hours}:${minutes}</time>
                    </div>`;
                list.append(robotMsg);
                addClassRobot();
              } else if (leftMsg.length === 1) {
                    robotMsg.innerHTML = `
                    <div class="message">
                        <div class="avatar">
                            <img src='img/robot_avatar.png' alt="Avatar">
                        </div>
                        <div class="message_text">
                            Я же говорю, я еще глуп! Я не могу тебе ответить.
                        </div>
                    </div>
                    <div class="date_message">
                        <time>${hours}:${minutes}</time>
                    </div>`;
                    list.append(robotMsg);
                    addClassRobot();
              } else if (leftMsg.length === 2) {
                robotMsg.innerHTML = `
                    <div class="message">
                        <div class="avatar">
                            <img src='img/robot_avatar.png' alt="Avatar">
                        </div>
                        <div class="message_text">
                            Мне кажется, что глупый тут не я, а - ты!
                        </div>
                    </div>
                    <div class="date_message">
                        <time>${hours}:${minutes}</time>
                    </div>`;
                    list.append(robotMsg);
                    addClassRobot();
            } else {
                robotMsg.innerHTML = `
                <div class="message">
                    <div class="avatar">
                        <img src='img/robot_avatar.png' alt="Avatar">
                    </div>
                    <div class="message_text">
                        Отстань!
                    </div>
                </div>
                <div class="date_message">
                    <time>${hours}:${minutes}</time>
                </div>`;
                list.append(robotMsg);
                addClassRobot();
          }
        }

          sendBtn.addEventListener('click', (e) => {
              e.preventDefault();
              new ChatMsg(
              "img/avatar.png",
              inputMsg.value,
              hours,
              minutes,
              '.chat_message_list')
              .render();
              setTimeout(sendRobot, 1000);
          });

          document.addEventListener('click', (e) => {
            if (e.code === 'Enter' && chat.classList.contains('chat_active')) { 
                e.preventDefault();
                new ChatMsg(
                "img/avatar.png",
                inputMsg.value,
                hours,
                minutes,
                '.chat_message_list')
                .render();
                setTimeout(sendRobot, 1000);
            }
          });

});