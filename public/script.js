var socket = io("https://localhost:3000");

socket.on("server-send-browser", function(data){
    if (data.value == "on") {
        $("#console").text("LED ON");
        $("#led").css("background-color", "green");
    } else {
        $("#console").text("LED OFF");
        $("#led").css("background-color", "red");
    }
});

$(function() {
    $("#btnOn").on("click", function() {
        socket.emit("browser-send-data", {name: "Browser", address: "led", value: "on"});
    });
    $("#btnOff").on("click", function() {
        socket.emit("browser-send-data", {name: "Browser", address: "led", value: "off"});
    })
});