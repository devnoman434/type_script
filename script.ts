function addnumbers(a:number,b:number,c:any,rest:number){
    return a+b+(c || 0)
}

console.log(addnumbers(2,5,7))