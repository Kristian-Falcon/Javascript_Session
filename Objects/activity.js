var number = 100;

function MyFunc() {
    this.number = 200;
    console.log(number);
    console.log(this.number);
}

var obj = new MyFunc();
console.log(obj.number);