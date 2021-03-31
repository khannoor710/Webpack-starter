function startCars(car1, car2, car3, ...rest){
  console.log(car1,car2, car3, rest);
}

let carIds = [1,2,3,4,5];
startCars(...carIds);

function stopCars(...rest){
  console.log(typeof(rest));
}

let restArray = [7,8];
stopCars(...restArray);

console.log(Number.parseInt('55ABC'));
console.log(Number.parseFloat('55.88ABC'));
console.log(Number.parseFloat('ABS55.88ABC'));


let i =0;
for(; i < 10;i++){
  console.log(i);
  if(i===4)
  break;
}
console.log("");
for (let i = 0; i < 5; i++) {
  
  if(i === 3)
    continue;
  console.log(i);
}

let userSettings = null;
let DefaultSettings = {name: 'Default'};

console.log(userSettings || DefaultSettings);