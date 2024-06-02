//Tham chiếu sendBtn, để sd nút send
var sendBtn = document.getElementById('sendBtn'); //= tài document lấy phần tử id, id được gửi đến sendBtn
//Tham chiếu textbox, để nhận tn input
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer')

var user = { message: "" };



function sendMessage(userMessage) {

    var messageElement = document.createElement('div');

    messageElement.innerHTML = "<span> You: </span>" +
        "<span>" + userMessage + "</span";

    chatContainer.appendChild(messageElement);

}





//Trình xử lý sự kiện, khi user click vào send thì cần send xảy ra 1 điều gì đó
//Có 2 tham số, tham số đầu muốn mã nghe, tham số 2 khi mã nghe thì nó sẽ thực hiện 1 điều gì đó/ như phản hồi
sendBtn.addEventListener('click', function (e) {
    //alert('button clicked'), cảnh báo ở đầu web
    // textbox, hiện tn user đầu web
    var userMessage = textbox.value;

    if (userMessage == "") {
        alert('Please type in a message');
    }
    else {

        let userMessageText = userMessage.trim();
        user.message = userMessageText;
        textbox.value = "";
        sendMessage(userMessageText);
    }





}) 