// 1.0 FUNCTIONS
// Dialogue Modal Functions
function aDialogueTree() {
    faceSwitch(aDialogue[aDiaCount].className)
    body.classList.add('cursor-faded');
    demo.classList.remove('display-none');
    textClear();
    body.classList.remove('cursor-faded');
    aDialogue[aDiaCount].classList.add('display-none')
    aDiaCount++
}

// starting face
function origFace() {
  meLye.src = meFaceOps[0][2];
  meRye.src = meFaceOps[1][1];
  meNose.src = meFaceOps[2][4];
  meMouth.src = meFaceOps[3][0];
}

// Randomizing using K face assets
function randomKFace() {
    let newIn = getRandomInt(6);
    meLye.src = meFaceOps[0][newIn]
    meRye.src = meFaceOps[1][newIn]
    meNose.src = meFaceOps[2][newIn]
    meMouth.src = meFaceOps[3][newIn]
}

// Randomizing family face assets
function randomFFace(x) {
  let newIn = getRandomInt(x);
  meLye.src = famFace[0][newIn]
  meRye.src = famFace[1][newIn]
  meNose.src = famFace[2][newIn]
  meMouth.src = famFace[3][newIn]
}

// To stop the cycle later
function stopFFace() {
  clearInterval(myInterval);
}

// Selecting specific family members faces
function relFace(x){
  meLye.src = famFace[0][x]
  meRye.src = famFace[1][x]
  meNose.src = famFace[2][x]
  meMouth.src = famFace[3][x]
}


// What Progresses The Story After Launching
let progressClick = function(event){
    setTimeout(function(){
      stopFFace();
      if(selectionCount[l].className.includes('opa-zero')){

      } else {
        meFace.classList.remove('opa-zero');  
      }
      
    }, timeOut);

    if (selectionCount[l].outerText == rDialogue[rDiaCount].children[rDialogue[rDiaCount].children.length - 1].innerHTML && rDiaCount < rDialogue.length) {
        textClear();
        setTimeout(function() {
            aDialogue[aDiaCount].classList.remove('display-none');
            rDiaCount++; 
            demo.classList.add('display-none');
        }, timeOut)
     } else {
        event.preventDefault()
        $('.display-once').addClass('display-none');
        $('display-once').removeClass('display-once');
        clearTimeout(keyup_timeout);
        keyup_timeout = setTimeout(function() {
          if(selectionCount[l].className.includes("aDia")) {
            dBox[0].classList.add("aDia");
          } else {
            dBox[0].classList.remove("aDia");
          }
        faceSwitch(selectionCount[l].className)
          textClear();
          }, timeOut);
     }
  
    finalClick();
  };
  
  // Setting For Next Dialogue
  function textClear() {
      demo.innerHTML = "";
      enter.classList.add('display-none');
      $('body').removeClass('cursor-faded-click');
      $('body').addClass('cursor-faded');
         body.classList.add('no-click');
        if(l < selectionCount.length) {
          typeWriter()
        } 
  }
  
  // Dialogue Animation
  function typeWriter() {
    if (l == selectionCount.length) {
    } else if (i < selectionCount[l].outerText.length) {
        demo.innerHTML += selectionCount[l].outerText.charAt(i);
        i++;
        net_timeout = 500 + timeout_delay_in_ms - (speed * i);
        setTimeout(typeWriter, speed);
    } else if (l < selectionCount.length) {
        if (selectionCount[l].outerText !== rDialogue[rDiaCount].children[rDialogue[rDiaCount].children.length - 1].innerHTML) { 
            enter.classList.remove('display-none');
        }
        $('body').removeClass('cursor-faded');
        body.classList.remove('no-click');
        $('body').addClass('cursor-faded-click');
      l++;
      i = 0;
  
    } 
  }

// Refactor 
function faceSwitch(x) {
  switch(true) {
    case x.includes('dad'):
      relFace(0);
    break;
    case x.includes('gpa'):
      relFace(1);
    break;
    case x.includes('cuz'):
      relFace(2);
    break;
    case x.includes('mom'):
      relFace(3)
    break;
    case x.includes('gma'):
      relFace(4)
    break;
    case x.includes('sis'):
      relFace(5)
    break;
    case x.includes('orig'):
      origFace()
    break
    case x.includes('ran'):
      randomFFace(6)
      myInterval = setInterval(randomFFace, 200, 6);
    break;
    case x.includes('pat'):
      randomFFace(3)
      myInterval = setInterval(randomFFace, 200, 3);
    break;
    case x.includes('kev'):
      randomKFace(6)
      myInterval = setInterval(randomKFace, 200, 6);
    break;
    case x.includes('no-face'):
      meFace.classList.add('opa-zero');
    default:
  }
}
// Showing the Ending
  function finalClick() {
    if(l == selectionCount.length) {
        body.classList.add('display-none')
        setTimeout(function() {
          credits.classList.remove('display-none')
        }, 3000) 
      setTimeout(() => { 
        $('body').removeClass('cursor-faded');
        $('body').removeClass('mouse-Down-faded');
        body.classList.remove('no-click');
        $('.circle').remove();
        body.removeEventListener("click", progressClick);
      }, 3000);
    }
  }


// HELPER FUNCTIONS
function classAdd(x, y) {
    x.classList.add(y); 
}

function classRemove(x, y) {
    x.classList.remove(y)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  


// 2.0 DELCARES
h4Catch.forEach(function(elem) {
    elem.addEventListener("click", aDialogueTree);
});

enter.addEventListener("click", progressClick);