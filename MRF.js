// map 

// syntac 
// variable name.map((value,index,acctualarray)=>)

    let a= [10,20,30,40,50]
    let b= a.map((val,ind,acc)=>ind+5) 
console.log(b);

// filter
// variable name.filter((value,index,acctualarray)=>)

    let com =[15,49,25,95,9,9,52,59,487,54,9,5,885,4,5,5,78,7,98,46,4,9]
    let fil = com.filter((x,y,z)=>y>=10)
    console.log(fil);

// reduce 
// syntax 
// variablename.reduce((accumalator,acctualarray)=>)
let ac = [10,20,30,40]
let acc = ac.reduce((l,i)=>l+i)  
console.log(acc);
  
