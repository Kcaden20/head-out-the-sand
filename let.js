// Text Typing variables
let i = 0;
let l = 0;
let selectionCount = document.querySelectorAll("h2");
let demo = document.getElementById('text-box');
let dBox = document.getElementsByClassName('dialogue-wrap')
let enter = document.getElementById('enter');
let keyup_timeout;
let timeout_delay_in_ms = (selectionCount[l].outerText.length + 3) * 50;
let type = document.getElementById('helper');
let body = document.getElementById('body');
let credits = document.getElementById('credits');
let speed = 5;
let timeOut = 1000;

// Dialogue Switching Variables
let aDialogue = document.querySelectorAll(".a-dialogue")
let rDialogue = document.querySelectorAll('.r-dialogue')
let h4Catch = document.querySelectorAll("H4");
let aDiaCount = 0;
let rDiaCount = 0;

// Image Rotation 
let ogFace = document.querySelector('#face');
let meFace = document.querySelector('#face');
let meLye = meFace.children[0].children[0].children[0];
let meRye = meFace.children[0].children[1].children[0];
let meNose = meFace.children[1].children[0]; 
let meMouth = meFace.children[2].children[0]; 

let myInterval; 

let meFaceOps = [ 
    // LEFT EYE: 0
    [
    'assets/04_me/0401_left-eye/0401a_baby-me.png',
    `assets/04_me/0401_left-eye/0401b_toddler-me.png`, 
    `assets/04_me/0401_left-eye/0401c_toddler-me.png`,
    `assets/04_me/0401_left-eye/0401d_child-me.png`,
    `assets/04_me/0401_left-eye/0401e_teen-me.png`,
    `assets/04_me/0401_left-eye/0401f_birthday-me.png`
], 
    // RIGHT EYE: 1
[
    `assets/04_me/0402_right-eye/0402a_baby-me.png`,
    `assets/04_me/0402_right-eye/0402b_toddler-me.png`,
    `assets/04_me/0402_right-eye/0402c_toddler-me.png`,
    `assets/04_me/0402_right-eye/0402d_child-me.png`,
    `assets/04_me/0402_right-eye/0402e_teen-me.png`,
    `assets/04_me/0402_right-eye/0402f_birthday-me.png`
],
    // NOSE: 2
[
    `assets/04_me/0403_nose/0403_baby-me.png`,
    `assets/04_me/0403_nose/0403b_toddler-me.png`,
    `assets/04_me/0403_nose/0403c_toddler-me.png`,
    `assets/04_me/0403_nose/0403d_child-me.png`,
    `assets/04_me/0403_nose/0403e_teen-me.png`,
    `assets/04_me/0403_nose/0403f_birthday-me.png`
], 
    // MOUTH: 3
[
    `assets/04_me/0404_mouth/0404a_baby-me.png`,
    `assets/04_me/0404_mouth/0404b_toddler-me.png`,
    `assets/04_me/0404_mouth/0404c_toddler-me.png`, 
    `assets/04_me/0404_mouth/0404d_child-me.png`,
    `assets/04_me/0404_mouth/0404e_teen-me.png`,
    `assets/04_me/0404_mouth/0404f_birthday-me.png`
]
]

let famFace = [
      // LEFT EYE: 0
    [
        'assets/01_eyes/0101_m-eyes/0101a_dad-left.png',
        `assets/01_eyes/0101_m-eyes/0101b_gpa-left.png`,
        'assets/01_eyes/0101_m-eyes/0101c_cuz_left.png',
        'assets/01_eyes/0102_w-eyes/0102a_mom-left.png',
        'assets/01_eyes/0102_w-eyes/0102c_grandma-left.png',
        'assets/01_eyes/0102_w-eyes/0102b_sis-left.png',
],
      // RIGHT EYE: 1
    [
        'assets/01_eyes/0101_m-eyes/0101a_dad-right.png',
        'assets/01_eyes/0101_m-eyes/0101b_gpa-right.png',
        'assets/01_eyes/0101_m-eyes/0101c_cuz-right.png',
        'assets/01_eyes/0102_w-eyes/0102a_mom-right.png',
        'assets/01_eyes/0102_w-eyes/0102c_grandma-right.png',
        'assets/01_eyes/0102_w-eyes/0102b_sis-right.png'
],
    // NOSE: 2
    [
        'assets/02_noses/0201_m-nose/0201a_dad-nose.png',
        'assets/02_noses/0201_m-nose/0201b_gpa-nose.png',
        'assets/02_noses/0201_m-nose/0201c_cuz-nose.png',
        'assets/02_noses/0202_w-nose/0202a_mom-nose.png',
        'assets/02_noses/0202_w-nose/0202c_grandma-nose.png',
        'assets/02_noses/0202_w-nose/0202b_sis-nose.png'
],
    // MOUTH: 3
    [
        'assets/03_mouths/0301_m-mouth/0301a_dad-mouth.png',
        'assets/03_mouths/0301_m-mouth/0301b_gpa-mouth.png',
        'assets/03_mouths/0301_m-mouth/0301c_cuz-mouth.png',
        'assets/03_mouths/0302_w-mouth/0302a_mom-mouth.png',
        'assets/03_mouths/0302_w-mouth/0302c_grandma-mouth.png',
        'assets/03_mouths/0302_w-mouth/0302b_sis-mouth.png'
    ]
]