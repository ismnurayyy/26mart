//1.İstifadəçinin daxil etdiyi adın neçə simoldan ibarət olduöunu tapın.
//2.İstifadəçinin daxil etdiyi 1-ci sözdə daxil etdiyi 2-ci simvol varmı?
//3.İstifadəçinin daxil etdiyi 1-ci sözdə daxil etdiyi 2-ci simvolla başlayırmı?
//4.İstifadəçinin daxil etdiyi 1-ci sözdə daxil etdiyi 2-ci simvolla bitirmi?
//5.İstifadəçinin daxil etdiyi 1-ci sözdə daxil etdiyi 2-ci simvolun indexini tapın.
//6.İstifadəçinin daxil etdiyi sözün boyük hərf olub olmadığını tapın.
//HELLO->true
//HELLo->false
//hello->false
//heLLo->false


// ------------------------------------------------------------------------
//CONCAT
//let text2="hello";
// let text3="world";
// let text4=text2.concat(text3)
// console.log("tam:"+text4)


//-------------------------------------------------------------------------
//REPEAT
// let soz = "salam";
// console.log(soz.repeat(3))


//-------------------------------------------------------------------------
//MATCH
// let text10 = "nuray nurtac aynure";
// let netice = text10.match(/nur/g); 
// console.log(netice);
//gi olduqda hem böyükləri həmdə kiçikləri götürür

//-------------------------------------------------------------------------
//TEST
// var metin = "Bu bir örnek metindir. Bu metinde JavaScript örnekleri bulunabilir.";
// var desen = /örnek/;

// var sonuc = desen.test(metin);

// console.log(sonuc);





//-------------------------------------------------------------------------
//1.İstifadəçinin daxil etdiyi adın neçə simoldan ibarət olduöunu tapın.

let text ="gdsifbsdbkierg";
console.log( text.length);



//-------------------------------------------------------------------------
//2.İstifadəçinin daxil etdiyi 1-ci sözdə daxil etdiyi 2-ci simvol varmı?
let text5="Hello World";
let herf="l";
console.log(text5.indexOf(herf) !== -1)
// if (text5.indexOf(herf) !== -1){
//     console.log("var")
// }
// else{
//     console.log("yoxdu")
// }


//-------------------------------------------------------------------------
//3.İstifadəçinin daxil etdiyi 1-ci sözdə daxil etdiyi 2-ci simvolla başlayırmı?
let text6="Hello";
let herf1="J";
let ilkherf = text6.charAt(0);
console.log(ilkherf == herf1);
// if(ilkherf == herf1){
//     console.log("ilk herfle eynidir")
// }
// else{
//     console.log("ilk herfle eyni deyil")
// }


//------------------------------------------------------------------------------
//4.İstifadəçinin daxil etdiyi 1-ci sözdə daxil etdiyi 2-ci simvolla bitirmi?
let text7="Hello World";
let herf2="d";
let sonherf = text7.charAt(-1);
console.log(sonherf=== herf2);
// if(sonherf == herf2){
//     console.log("son herfle eynidir");
// } 
// else{
//     console.log("son herfle eyni deyil")
// }


//---------------------------------------------------------------------------------
//5.İstifadəçinin daxil etdiyi 1-ci sözdə daxil etdiyi 2-ci simvolun indexini tapın.
let text8 = "Nuray Ismayilova";
let herf3 = "r"; 
let index = text8.indexOf(herf3)
console.log("index: " + index);


//---------------------------------------------------------------------------------
//6.İstifadəçinin daxil etdiyi sözün boyük hərf olub olmadığını tapın.
let text9 = "HElLO"
console.log( (text9 === text9.toUpperCase()));