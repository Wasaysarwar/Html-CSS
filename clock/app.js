function updateclock(){
    var now = new Date();
    var hours = now.getHours();
    var minutes=now.getMinutes();
    var seconds=now.getSeconds();
    var clock = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").textContent = clock;
 }
 setInterval(updateclock,1000)