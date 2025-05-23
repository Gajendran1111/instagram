// promise 

// syntax 

// return  new Promise((resolve, reject) => {})

    function go (){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const shop =true
                if(shop){
                 resolve ("going to the shope")
                }
                else {
                    reject("iam not going to the shop")
                }
            }, 5000);
        })
    }
    function buy (){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const product = false
                if(product){
                   resolve ("but the product")
                }
                else {
                    reject("iam not buy the product")
                }
            }, 2000);
        })
    }
    function change (){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const get = false 
                if(get){
                   resolve("collected the changes")
                }
                else {
                    reject("forgot to collect the changes")
                }
            }, 2000);
        })
    }
    function home (){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const back = true 
                if(back){
                     resolve ("back to home")
                }
                else {
                    reject("not return to home")
                }
            }, 5000);
        })
    }
    // go()
    // .catch(val => {console.log(val);return buy()})
    // .then(val => {console.log(val);return change()})
    // .catch(val => {console.log(val);return home()})
    // .then(val => {console.log(val)})

    async function output() {
        try {
              const a = await go();
        console.log(a);
        const b =await buy();
        console.log(b);
        const c = await change();
        console.log(c);
        const d = await home();
        console.log(d);
        } catch (er) {
            console.log(er);   
        }
    }
    output();