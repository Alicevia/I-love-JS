
function ins(target,source){
  while(target){
    if(target.__proto__===source.prototype){
      return true
    }else{
      target = target.__proto__
    }
  }
  return false
}

function objEqu (a,b){
  if(a===b) return true
  if(typeof a !='object' || typeof b!='object' )  return false
  const a1= Object.getOwnPropertyNames(a)
  const b1= Object.getOwnPropertyNames(b)
  if(a1.length!==b1.length) return false
  return a1.every((key)=>{
    return objEqu(a[key],b[key])
   })
}
