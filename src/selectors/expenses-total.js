
export default (expenses)=>{
    if (expenses.length==0){
        return 0
    }else {
        return expenses.map((item)=> item.amount).reduce((a,b)=>{return a+b},0)
        
    }
}