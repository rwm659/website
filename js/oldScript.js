function doFirst(){
  mypic = document.getElementById('applePic');
  mypic.addEventListener("dragstart", startDrag, false);
    mypic.addEventListener("dragend", endDrag, false);

  leftBox = document.getElementById('left_box');
  leftBox.addEventListener('dragenter',dragEnter, false);
  leftBox.addEventListener('dragleave', dragLeave, false);
  leftBox.addEventListener('dragover', function(e){e.preventDefault();}, false);
  leftBox.addEventListener('drop', dropped, false);
}


function startDrag(e){
  console.log("startDrag called");
   var code = '<img id="applePic" src="pics/cool-pictures-2018-9.jpg" alt="" heitght="200" width="200">';
   e.dataTransfer.setData('Text', code);
   console.log("setData has been set");
}

function dropped(e){
  console.log("dropped called");
  e.preventDefault("e is: ");
  console.log(e);
  console.log();
  leftBox.innerHTML = e.dataTransfer.getData('Text');
}

function endDrag(e){
  pic = e.target;
  pic.style.visibility = 'hidden';
}

function dragEnter(e){
  e.preventDefault();
  leftBox.style.background="SkyBlue";
  leftBox.style.border="3px solid red";
}

function dragLeave(e){
  e.preventDefault();
  leftBox.style.background="White";
  leftBox.style.border="3px solid blue";
}


window.addEventListener("load", doFirst, false);
