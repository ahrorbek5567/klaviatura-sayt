let username = document.getElementById("username");
let userphone = document.getElementById("userphone");

document.querySelector("#sendBtn").addEventListener("click", () => {
    let chechname=username.value;
    let chechnam=userphone.value;
    if (username.value == "" || userphone.value == "" || chechname.length <5 || chechnam.length<9) {
        alert("Iltimos, formatni to'liq to'ldiring!");
        username.focus();
    } else {
        sendtelegram(`Mahsulot nomi:Klaviatura. Ismi:${username.value},Telefon raqami:${userphone.value}`);
        username.value="";
        userphone.value="";

    }

});

// sendtelegram
function sendtelegram(message) {
    let telegram_bot_id = "8155254434:AAHKqJV9rVyhO-A5ItOC7AuD2CQkwrJPXW4";
    let chat_id = 5987260202;
    let settings = {
        async: true,
        crossDomain: true,
        url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "cache-control": "no-cache",
        },
        data: JSON.stringify({ chat_id: chat_id, text: message }),
    };
    $.ajax(settings).done(function (response) { });
}
