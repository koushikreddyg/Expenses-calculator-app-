const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //resolve({
          //  name:'koushik',
            //age: 23,
        //})
        reject('Something went wrong')
    },1500)

})
console.log('before');
promise.then ((data)=>{
    console.log('1',data)
}).catch((e)=>{
    console.log('the error is ',e)
})
console.log('after');
