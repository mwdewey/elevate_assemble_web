var cursorX;
var cursorY;
var valid;
var socket = io('http://dvm.io:8081');

window.onload = function(){

    var cols = document.querySelectorAll('.draggable');
    [].forEach.call(cols, function(col) {
        col.addEventListener('dragstart', handleDragStart, false);
    });

    document.getElementById('area').addEventListener('dragenter', handleDragEnter, false);
    document.getElementById('area').addEventListener('dragover', handleDragOver, false);
    document.getElementById('area').addEventListener('dragleave', handleDragLeave, false);

    document.getElementById('left').addEventListener('dragend', spawnGrass, false);
    document.getElementById('mid').addEventListener('dragend', spawnRock, false);
    document.getElementById('right').addEventListener('dragend', spawnWood, false);

    socket.on('pos', updatePlayer);
    socket.on('score', updateScore);
    socket.on('invG', updateGrass);
    socket.on('invR', updateRock);
    socket.on('invW', updateWood);
};

document.ondragover = function() {
    cursorX = window.event.pageX;
    cursorY = window.event.pageY;
}




//------------------------------------

function createObj(id,pos){

    //var objStruct = '{"id":' + id + ', "pos":' + pos + '}';
    socket.emit('obj', {id: id, pos: pos});

    switch (id){
        case 1:
            document.getElementById('textOutput').innerHTML = 'Rock placed at position: ' + pos;
            break;
        case 2:
            document.getElementById('textOutput').innerHTML = 'Grass placed at position: ' + pos;
            break;
        case 3:
            document.getElementById('textOutput').innerHTML = 'Wood placed at position: ' + pos;
            break;
        default:
            break;
    }

   // $.get("api/addObject.php?obj=" + id + "&pos=" + pos, function(responseText) {});

}

function handleDragStart(e) {
    this.style.opacity = '0';
    valid = false;
}

function handleDragOver(e) {
    if (e.preventDefault) {
        valid = true;
        e.preventDefault();
    }
    else valid = false;

    e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

    return false;
}

function handleDragLeave(e) {
    this.classList.remove('over');  // this / e.target is previous target element.
    valid = false;
}

function handleDragEnter(e) {
    this.classList.add('over');
}

function getRelativePosition(){
    var screen_width = $(document).width();
    var cursorMapped = cursorX.map(20,screen_width-20,0,100);
    return Math.round(cursorMapped);
}

function spawnRock(e) {
    this.style.opacity = '1';
    var position = getRelativePosition();
    if(position >= 0 && position <= 100 && valid) createObj(1,getRelativePosition());
}

function spawnGrass(e) {
    this.style.opacity = '1';
    var position = getRelativePosition();
    if(position >= 0 && position <= 100 && valid) createObj(2,getRelativePosition());
}

function spawnWood(e) {
    this.style.opacity = '1';
    var position = getRelativePosition();
    if(position >= 0 && position <= 100 && valid) createObj(3,getRelativePosition());
}

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function updatePlayer(pos) {
    var position = pos;
    var screen_width = $(document).width();
    var mapped = position.map(-8.7,8.7,20+25,screen_width-20-25) - 50;

    $( "#player" ).css( "left", mapped + "px" );
}

function updateScore(score) {
    $("#scoreText").html('Score: ' + score);
}

function updateGrass(count) {
    $("#grassCount").html(count);
}

function updateWood(count) {
    $("#woodCount").html(count);
}

function updateRock(count) {
    $("#rockCount").html(count);
}