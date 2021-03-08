document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    const chatBtn = document.querySelector('.chat_button'),
          chatBlock = document.querySelector('.chat'),
          chatList = document.querySelector('.chat_message');


    function openChat() {
        chatBlock.classList.add('chat_active');
        let a = chatList.scrollHeight;
        chatList.scrollTop = a;
        chatBtn.innerHTML = '';
        chatBtn.innerHTML = '<i class="fas fa-times"></i>';
        chatBtn.classList.add('chat_button_activ');
    }

    function closeChat() {
        chatBlock.classList.remove('chat_active');
        chatBtn.innerHTML = '';
        chatBtn.innerHTML = '<i class="fas fa-comment-alt"></i>';
        chatBtn.classList.remove('chat_button_activ');
    }

    chatBtn.addEventListener('click', () => {
        if (chatBlock.classList.contains('chat_active')) {
            closeChat();
        } else {
            openChat();
        }
        
    });
});