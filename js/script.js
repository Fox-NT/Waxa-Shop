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

    const burger = document.querySelector('.burger_menu'),
          burgerClose = document.querySelector('.burger_close'),
          burgerMenu = document.querySelector('.burger_menu_list'),
          burgeWrapper = document.querySelector('.burger_menu_wrapper'),
          burgerItem = document.querySelectorAll('.burger_item > a');

    function closeBurgerMenu() {
        burgeWrapper.classList.remove('burger_menu_act');
        burgerMenu.classList.remove('burger_menu_list_act');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    }
    
    function openBurgerMenu() {
        burgeWrapper.classList.add('burger_menu_act');
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = '16px';
        burgerMenu.classList.add('burger_menu_list_act');
    }

    burger.addEventListener('click', openBurgerMenu);

    burgerClose.addEventListener('click', closeBurgerMenu);

    burgeWrapper.addEventListener('click', (e) => {
        const target = e.target;
        if(target && target.classList.contains("burger_menu_act")) {
            closeBurgerMenu();
        }
    });

    document.addEventListener('keydown', (e) => {
        if(e.code == 'Escape' && burgerMenu.classList.contains("burger_menu_list_act")) {
            closeBurgerMenu();
        }
    });

    burgerItem.forEach(item => {
        item.addEventListener('click',closeBurgerMenu);
    });

    const upBtn = document.querySelector('.up_button'),
          downBtn = document.querySelector('.down_button');

    upBtn.addEventListener('click', () => {
        document.documentElement.scrollIntoView({block: 'start', behavior: 'smooth'});
    });

        let scrollInfo = window.pageYOffset;
    window.addEventListener('wheel', () => {
        scrollInfo = window.pageYOffset;
        // console.log(window.pageYOffset);
        return;
    });

    window.addEventListener('scroll', () => {
        let a = window.pageYOffset;
        if(a >= 90) {
            upBtn.classList.add('up_button_act');
            downBtn.classList.remove('up_button_act');
        } else {
            upBtn.classList.remove('up_button_act');
            downBtn.classList.add('up_button_act');
        }
    });

    downBtn.addEventListener('click', () => {
        window.scrollTo({top: scrollInfo, behavior: 'smooth'});
    });
});