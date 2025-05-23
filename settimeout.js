// settime out

function box1 (){
    setTimeout(() => {
        console.log("loading");
        
    }, 5000);
}
function box2 (){
    setTimeout(() => {
        console.log("successful");
        
    },1000);
}
box1();
box2();