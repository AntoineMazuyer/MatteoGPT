$(document).ready(function () {
    const botResponse = "Ahahahahahahahahah";
    
    $('#send-btn').click(function () {
        let userInput = $('#user-input').val();
        if (userInput.trim() !== "") {
            addMessage(userInput, 'user-message');
            $('#user-input').val('');
            setTimeout(function () {
                typeWriter(botResponse, 0);
            }, 500);
        }
    });

    function addMessage(text, className) {
        let message = $('<div></div>').text(text).addClass('message').addClass(className);
        $('#chat-box').append(message);
        $('#chat-box').scrollTop($('#chat-box')[0].scrollHeight);
    }

    function typeWriter(text, index) {
        if (index === 0) {
            let botMessage = $('<div class="message bot-message"></div>');
            $('#chat-box').append(botMessage);
        }
        let currentMessage = $('.bot-message').last();
        if (index < text.length) {
            currentMessage.text(text.substring(0, index + 1));
            $('#chat-box').scrollTop($('#chat-box')[0].scrollHeight);
            setTimeout(function () {
                typeWriter(text, index + 1);
            }, 50);
        }
    }

    $('#user-input').keypress(function (e) {
        if (e.which === 13) {
            $('#send-btn').click();
            return false;
        }
    });
});

