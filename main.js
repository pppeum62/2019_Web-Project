var upbtn = document.getElementById("upBtn");           // steel-cut up 버튼
var downbtn = document.getElementById("downBtn");       // steel-cut down 버튼
var playbtn = document.getElementById("play");          // ost play 버튼
var stopbtn = document.getElementById("stop");          // ost stop 버튼

var files = [ './image/steelCut(1).jpg', './image/steelCut(2).jpg', './image/steelCut(3).jpg' ];
var arr = new Array();

var index = 0;
var upindex = 1;
var downindex = 2;

for(var i = 0; i < files.length; i++) {
    arr[i] = new Image();
    arr[i].src = files[i];
}

upbtn.addEventListener('click', function() {
    if(index == 0) {
        index = 2;
    } else {
        index--;
    }

    if(upindex == 0) {
        upindex = 2;
    } else {
        upindex--;
    }

    if(downindex == 0) {
        downindex = 2;
    } else {
        downindex--;
    }

    console.log(index);

    var mainimg = document.getElementById("mainimg");
    var upimg = document.getElementById("upimg");
    var downimg = document.getElementById("downimg");

    mainimg.src = arr[index%3].src;
    upimg.src = arr[upindex%3].src;
    downimg.src = arr[downindex%3].src;

    mainimg.style.boxShadow = "10px 10px 10px rgba(0, 0, 0, 0.35)";
});

downbtn.addEventListener('click', function() {
    index++;
    upindex++;
    downindex++;

    console.log(index);

    var mainimg = document.getElementById("mainimg");
    var upimg = document.getElementById("upimg");
    var downimg = document.getElementById("downimg");

    mainimg.src = arr[index%3].src;
    upimg.src = arr[upindex%3].src;
    downimg.src = arr[downindex%3].src;

    mainimg.style.boxShadow = "10px 10px 10px rgba(0, 0, 0, 0.35)";
});

playbtn.addEventListener('click', function() {      // play 버튼을 누르면 stop 버튼으로 바뀌는 이벤트 리스너
    playbtn.style.display = 'none';
    stopbtn.style.display = 'inline';
});

stopbtn.addEventListener('click', function() {      // stop 버튼을 누르면 play 버튼으로 바뀌는 이벤트 리스너
    stopbtn.style.display = 'none';
    playbtn.style.display = 'inline';
});