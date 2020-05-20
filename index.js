// Math.fifthRoot = (x) => Math.pow(x, 1/5);
// Math.avg=(...args,precision)=>(a+b+c)/3;

Math.avg=(args,precision=0)=>{
  let sum=0;
  for(let i=0;i<args.length;i++){
    sum=sum+args[i];
  }
  let average=sum/args.length;
  return precision===0?Number(average):Number((average).toFixed(precision));;
}
Math.qAvg=(args,precision=0)=>{
  let sum=0;
  for(let i=0;i<args.length;i++){
    sum=sum+args[i]*args[i];
  }
  let average=Math.sqrt((sum)/args.length);
  return precision===0?Number(average):Number((average).toFixed(precision));
}
Math.hAvg=(args,precision=0)=>{
  let sum=0;
  for(let i=0;i<args.length;i++){
    sum=sum+Math.pow(args[i],-1);
  }
  let average=Math.pow((sum)/args.length,-1);
  return precision===0?Number(average):Number((average).toFixed(precision));
}
Math.gAvg=(args,precision=0)=>{
  let product=1;
  for(let i=0;i<args.length;i++){
    product=product*args[i];
  }
  let average=Math.pow(product,Math.pow(args.length,-1));
  return precision===0?Number(average):Number((average).toFixed(precision));
}

console.log(Math.avg([1,2,3])===2);
console.log(Math.avg([1,2,3.5],2)===2.17);
console.log(Math.qAvg([3, 5, 7], 1)===5.3);
console.log(Math.hAvg([3, 5, 7], 1)===4.4);
console.log(Math.gAvg([3, 5, 7], 1)===4.7);
console.log(Math.hAvg([1, 23, 456, 7890])===3.8248304676450755);