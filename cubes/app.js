class Cube{
  constructor(length){
    this.length = length;
}
get surfaceArea() {
    return this.length **2 * 6;
}
get volume() {
    return this.length **3;
}
set surfaceArea(newArea){
        this.length = (newArea / 6)**.5 ;
}
set volume(newVolume){
        this.length = (newVolume)**(1/3);
}
}

let cube = new Cube(1)
let cube1 = new Cube(3)
console.log(cube);
console.log(cube.length);
console.log(cube.surfaceArea);
console.log(cube1.length);
console.log(cube1.volume);

