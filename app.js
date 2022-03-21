setInterval(showTime, 1000);
var weekdays = ['Sunday','Monday','Tuesday','Wesnesday','Thrusday','Friday','Saturday','Sunday'];

 function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    let date = time.getDay();
    let weekname = weekdays[date];
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" + min;
  
    document.getElementById("text1").innerHTML = currentTime;
    document.getElementById("text2").innerHTML = currentTime;
    document.getElementById("day").innerHTML = weekname;
 }
function displayList(){
    var list = document.querySelector(".container1");
    var para = document.querySelector(".container2");
    if(list.style.display == 'none'){
        list.style.display = 'flex'
    }else{
        list.style.display = 'none'
    }
    para.style.display = 'none'
}
function displayJava(){
    var para = document.querySelector(".container2");
    if(para.style.display == 'none'){
        para.style.display = 'flex';
        para.innerHTML = `<p>Java is a high level programming language developed my Sun Microsystem</p>`
    }else{
        para.style.display = 'none'
    }
}

function displayHtml(){
    var para = document.querySelector(".container2");
    if(para.style.display == 'none'){
        para.style.display = 'flex';
        para.innerHTML = `<p>HTML is the standard markup language for creating Web pages.</p>`
    }else{
        para.style.display = 'none'
    }
}

function displayCss(){
    var para = document.querySelector(".container2");
    if(para.style.display == 'none'){
        para.style.display = 'flex';
        para.innerHTML = `<p>CSS is the language we use to style a Web page.</p>`
    }else{
        para.style.display = 'none'
    }
}