var upbtn = document.getElementById("upBtn");           // steel-cut up 버튼
var downbtn = document.getElementById("downBtn");       // steel-cut down 버튼

var files = [ './image/steelCut(1).jpg', './image/steelCut(2).jpg', './image/steelCut(3).jpg' ];
var arr = new Array();

var index = 0;

for(var i = 0; i < files.length; i++) {
    arr[i] = new Image();
    arr[i].src = files[i];
}

upbtn.addEventListener('click', function() {
    index++;

    console.log(index);

    var mainimg = document.getElementById("mainimg");
    mainimg.src = arr[index%3].src;
});

downbtn.addEventListener('click', function() {
    if(index == 0) {
        index = 2;
    } else {
        index--;
    }

    console.log(index);

    var mainimg = document.getElementById("mainimg");
    mainimg.src = arr[index%3].src;
});