// call back 


function box1 (callback){
    setTimeout(() => {
        console.log("loading");
        callback()
    }, 5000);
}
function box2 (callback){
    setTimeout(() => {
        console.log("loading completed");
        callback()
    },2000);
}
// box1(box2);
// callback hell 
function box3 (callback){
    setTimeout(() => {
        console.log("finish");
        
    },1000);
}

box1(()=>{
    box2(()=>{
        box3(()=>{})
    })
})