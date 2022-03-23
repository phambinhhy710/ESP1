var socket = io("https://esp2.herokuapp.com");

socket.on("server-send-browser", function(data){
    if (data.value == "On") {
        if(data.address=="ledOn"){
            $("#ledOn").css("background-color", "green");
        } else{
            $("#ledStart").css("background-color", "green");
        };              
    } else {
        if(data.address=="ledOn"){
            $("#ledOn").css("background-color", "red");
        } else{
            $("#ledStart").css("background-color", "red");
        }
    }    
});

$(function() {
    $("#btnOn").on("click", function() {
        socket.emit("browser-send-data", {name: "Browser", address: "btnOn", value: "On"});
    });
    $("#btnOff").on("click", function() {
        socket.emit("browser-send-data", {name: "Browser", address: "btnOff1", value: "On"});
    });

    $("#btnStart").on("click", function() {
        socket.emit("browser-send-data", {name: "Browser", address: "btnStart", value: "On"});
    });
    $("#btnStop").on("click", function() {
        socket.emit("browser-send-data", {name: "Browser", address: "btnStop", value: "On"});
    });
});
