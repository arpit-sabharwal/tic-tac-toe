window.addEventListener('load',bindevent);
let buttons;
function bindevent(){
    buttons=document.getElementsByTagName('button');
    Array.prototype.forEach.call(buttons,(button)=>button.addEventListener('click',printxor0));
}

function reset(){
    let buttons=document.querySelectorAll('button');
    buttons.forEach(button=>button.innerText='');
    flag=true;
    count=0;
    setTimeout(()=>{document.getElementById('res').innerText='';},3000);
}
const allsame=(but1,but2,but3)=>(but1.innerText==but2.innerText&&but1.innerText==but3.innerText);

const isNotBlank=(but)=>but.innerText.length!=0?true:false;

function check(but1,but2,but3){
    if(isNotBlank(but1)&&isNotBlank(but2)&&isNotBlank(but3)){
        if(allsame(but1,but2,but3))
        return true;
    }
    return false;
}

function gameover(){
    return check(buttons[0],buttons[1],buttons[2])||check(buttons[3],buttons[4],buttons[5])||check(buttons[6],buttons[7],buttons[8])||
    check(buttons[0],buttons[3],buttons[6])||check(buttons[1],buttons[4],buttons[7])||check(buttons[2],buttons[5],buttons[8])||
    check(buttons[0],buttons[4],buttons[8])||check(buttons[2],buttons[4],buttons[6]);
}


let flag=true;
var count=0;
function printxor0(){
let button =this;
if(button.innerText.length==0){
    count++;
    button.innerText=(flag===true?'X':'0');
    flag=!flag;
}
if(count==9)
{
    if(!gameover()){
    document.getElementById('res').innerText='Game Draw';reset();}
}
if(count>=5){
    if(gameover())
    {document.getElementById('res').innerText='Game Over';reset();}
}
}
