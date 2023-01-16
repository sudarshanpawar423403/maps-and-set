// Q1 removing duplicate
console.log("Map And Set")

let str="abcadeecfb";

let setStr= new Set(str);
console.log(setStr);

const uniqueArr=[...setStr];
console.log(uniqueArr);
let newStr="";

for (let index = 0; index < uniqueArr.length; index++) {
    newStr += uniqueArr[index];
    
}
console.log("newStr:",newStr)

// Q2
let map= new Map();
for(let i=0;i<str.length;i++){
   if(map.has(str[i])){
        let value=map.get(str[i]);
        map.set(str[i],value+1);
   } 
   else{
    map.set(str[i],1);
   }
}

for(let [k,v] of map){
    console.log(k+"-->"+v);
}