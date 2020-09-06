// // var string="hello";
// // var str="world!";
// // string+=str;
// // console.log(string)
// // if(0){
// //     console.log("shit");
// // }
// var x="false";
// var y=false;
// if(x==y){
//     console.log("shit");
// }

// function orderwith(param) {
//     console.log("order shit with "+param)
// }
// orderwith("Another shit")
// var multiply_by_n =function (multiplier) {
//     var result =function (x) {
//         return multiplier*x;
//     }
//     return result;
// }
// var shit=multiply_by_n(10);
// console.log(shit(10));
// function circle(radius) {
//     console.log(this)
// }
// var cir=new circle();
// console.log(cir);
// var arr=new Array();
// arr[0]=0;
// arr[1]="String"
// arr[2]=function multipy(x) {
//     return x*3;
// }  
// arr[3]={course:"html css and js"};
// console.log(arr[2](3));
var names=["sdfasd","Asdfas","asdfasfd"];
for (var name in names) {
    console.log(names[name]);
}