function flipUp(id) {
    var element = document.getElementById(id);
    element.style.transform="rotateX(-180deg)";
//    document.getElementById(id).style.
    var index = element.style.zIndex;
    element.style.zIndex = -1 * index;
}

function flipFlap(level){
    /*for (i = 1; i <= level; i++) {
        flipUp('level'+i);
    }*/
    if (level == 1) {
        flipUp('level1');
    }
    if (level == 2) {
        flipDown('level1');
    }
}

function flipDown(id) {
    var element = document.getElementById(id);
    element.style.transform="rotateX(90deg)";
    var index = element.style.zIndex;
    element.style.zIndex = -1 * index;
}