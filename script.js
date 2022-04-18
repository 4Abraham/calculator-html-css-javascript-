let output = document.querySelector(".screenInput").value;
let ans=0;
let equalClicked = false;

function afterClick(){
    if(equalClicked == true){
        clickBtnAc();
    }
    equalClicked = false;
}
function removeZero(){
    if(output == undefined){

    }else{
        if(output.charAt(0) === '0'){
            output = output.substring(1);
        }
    }
    
}


//adding eventListeners to numbering buttons
const clickBtn9=document.querySelector("#btn9");
clickBtn9.addEventListener('click', function () {
    afterClick();
    removeZero()
    output=document.querySelector(".screenInput").innerHTML +=clickBtn9.value;
});
const clickBtn8=document.querySelector("#btn8");
clickBtn8.addEventListener('click', function () {
    afterClick();
    removeZero()
    output=document.querySelector(".screenInput").innerHTML +=clickBtn8.value;
    
});
const clickBtn7=document.querySelector("#btn7");
clickBtn7.addEventListener('click', function () {
    afterClick();
    removeZero()
    output=document.querySelector(".screenInput").innerHTML +=clickBtn7.value;
    
});
const clickBtn6=document.querySelector("#btn6");
clickBtn6.addEventListener('click', function () {
    afterClick();
    removeZero()
    output=document.querySelector(".screenInput").innerHTML +=clickBtn6.value;
    
});
const clickBtn5=document.querySelector("#btn5");
clickBtn5.addEventListener('click', function () {
    afterClick();
    removeZero()
    output=document.querySelector(".screenInput").innerHTML +=clickBtn5.value;
    
});
const clickBtn4=document.querySelector("#btn4");
clickBtn4.addEventListener('click', function () {
    afterClick();
    removeZero()
    output=document.querySelector(".screenInput").innerHTML +=clickBtn4.value;
    
});
const clickBtn3=document.querySelector("#btn3");
clickBtn3.addEventListener('click', function () {
    afterClick();
    removeZero()
    output=document.querySelector(".screenInput").innerHTML +=clickBtn3.value;
    
});
const clickBtn2=document.querySelector("#btn2");
clickBtn2.addEventListener('click', function () {
    afterClick();
    removeZero()
    output=document.querySelector(".screenInput").innerHTML +=clickBtn2.value;
    
});
const clickBtn1=document.querySelector("#btn1");
clickBtn1.addEventListener('click', function () {
    afterClick();
    removeZero()
    output=document.querySelector(".screenInput").innerHTML +=clickBtn1.value;
    
});
const clickBtn0=document.querySelector("#btn0");
clickBtn0.addEventListener('click', function () {
    afterClick();
    removeZero()
    output=document.querySelector(".screenInput").innerHTML +=clickBtn0.value;
    
});
const clickBtnDot=document.querySelector("#btnDot");
clickBtnDot.addEventListener('click', function () {
    afterClick();
    removeZero()
    output=document.querySelector(".screenInput").innerHTML +=clickBtnDot.value;
    
});
const clickBtnMod=document.querySelector("#btnMod");
clickBtnMod.addEventListener('click', function () {
    removeZero()
    output=document.querySelector(".screenInput").innerHTML +=clickBtnMod.value;
    
});
// addind eventListeners to operator buttons
const clickBtnAdd=document.querySelector("#btnAdd");
clickBtnAdd.addEventListener('click', function () {
    removeZero()
    output=document.querySelector(".screenInput").innerHTML +=clickBtnAdd.value;
    
});
const clickBtnSub=document.querySelector("#btnSub");
clickBtnSub.addEventListener('click', function () {
    removeZero()
    output=document.querySelector(".screenInput").innerHTML +=clickBtnSub.value;
    
});
const clickBtnMult=document.querySelector("#btnMult");
clickBtnMult.addEventListener('click', function () {
    removeZero()
    output=document.querySelector(".screenInput").innerHTML +=clickBtnMult.value;
    
});
const clickBtnDiv=document.querySelector("#btnDiv");
clickBtnDiv.addEventListener('click', function () {
    removeZero()
    output=document.querySelector(".screenInput").innerHTML +=clickBtnDiv.value;
    
});

document.querySelector("#btnAc").onclick = clickBtnAc;
function clickBtnAc() {
    removeZero()
    output = document.querySelector(".screenInput").innerHTML = " ";
    ans = 0;
    document.querySelector(".screenOutput").innerHTML = " ";
};

document.querySelector("#btnDel").onclick = clickBtnDel;
function clickBtnDel() {
    removeZero()
    output = document.querySelector(".screenInput").innerHTML = output.substring(0, output.length - 1);

};

document.querySelector('#btnEqu').onclick = clickBtnEqual;
function clickBtnEqual() {
    try{
        removeZero()
        ans=document.querySelector(".screenOutput").innerHTML = eval(output);
        equalClicked = true;
    }
    catch(err){
        removeZero()
        document.querySelector(".screenOutput").innerHTML = 'Math Error';
        equalClicked = true;
    }

}


document.querySelector('#btnAnsw').onclick = clickBtnAnsw;
function clickBtnAnsw() {
   // removeZero()
 document.querySelector(".screenInput").innerHTML = ans;
}

console.log(output.indexof());