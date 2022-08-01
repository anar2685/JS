// Number
// const num = 42 //integer
// const float = 42.5 // float
// const pow = 10e3

// console.log(num)

// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER) // 9007199254740991
// console.log(Math.pow(2, 53)-1) //2 в 53 степени минус 1 даёт значение 'MAX_SAFE_INTEGER'
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER) //-9007199254740991
// console.log('MAX_VALUE', Number.MAX_VALUE) // 1.7976931348623157e+308
// console.log('MIN_VALUE', Number.MIN_VALUE) // 5e-324
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY) //  Infinity   Безконечность
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY) // -Infinity  -Безконечность
// console.log('2 / 0', 2 / 0)
// console.log(Number.NaN) // Not a Number
// const weird = 2 / undefined
// console.log(isNaN(weird)) // true
// console.log(Number.isNaN(42)) //false

// console.log(Number.isFinite(Infinity)) // Конечнали безконечность? false нет
// console.log(Number.isFinite(42)) //Конечноли 42? true да

// const stringInt = '42'
// const stringFloat = '42.42'
// console.log(Number.parseInt(stringInt) + 2)
// console.log(parseInt(stringInt) + 2)
// console.log(Number(stringInt) + 2)
// console.log(+stringInt + 2)

// console.log(parseFloat(stringFloat) + 2)
// console.log(+stringFloat + 2)

//______________________________________________________________________

//     //Скрипт снежинок в начале страницы!!!

// // Установите количество снежинок (больше 30 - 400 не рекомендуется)
// var snowmax=100
 
// // Установите цвета снега. Добавьте столько цветов, сколько захотите
// var snowcolor=new Array("#b9dff5","#b9dff5","#b9dff5","#b9dff5","#b9dff5")
 
// // Установите шрифты, которые создают снежинки. Добавьте столько шрифтов, сколько захотите
// var snowtype=new Array("Times")
 
// // Установите букву, из которой будет создана ваша снежинка (recommended: * )
// var snowletter="*"
 
// // Установите скорость погружения (рекомендуемые значения от 0.3 до 2)
// var sinkspeed=0.8
 
// // Установите максимальный размер снежинок
// var snowmaxsize=35
 
// // Установите минимальный размер снежинок
// var snowminsize=8
 
// // Set 1 for all-over-snowing, set 2 for left-side-snowing
// // Set 3 for center-snowing, set 4 for right-side-snowing
// var snowingzone=1
 
// var snow=new Array()
// var marginbottom
// var marginright
// var timer
// var i_snow=0
// var x_mv=new Array();
// var crds=new Array();
// var lftrght=new Array();
// var browserinfos=navigator.userAgent
// var ie5=document.all&&document.getElementById&&!browserinfos.match(/Opera/)
// var ns6=document.getElementById&&!document.all
// var opera=browserinfos.match(/Opera/)
// var browserok=ie5||ns6||opera
 
// function randommaker(range) {
//         rand=Math.floor(range*Math.random())
//     return rand
// }
 
// function initsnow() {
//         if (ie5 || opera) {
//                 marginbottom = document.body.scrollHeight
//                 marginright = document.body.clientWidth-15
//         }
//         else if (ns6) {
//                 marginbottom = document.body.scrollHeight
//                 marginright = window.innerWidth-15
//         }
//         var snowsizerange=snowmaxsize-snowminsize
//         for (i=0;i<=snowmax;i++) {
//                 crds[i] = 0;
//             lftrght[i] = Math.random()*15;
//             x_mv[i] = 0.03 + Math.random()/10;
//                 snow[i]=document.getElementById("s"+i)
//                 snow[i].style.fontFamily=snowtype[randommaker(snowtype.length)]
//                 snow[i].size=randommaker(snowsizerange)+snowminsize
//                 snow[i].style.fontSize=snow[i].size+'px';
//                 snow[i].style.color=snowcolor[randommaker(snowcolor.length)]
//                 snow[i].style.zIndex=1000
//                 snow[i].sink=sinkspeed*snow[i].size/5
//                 if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
//                 if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
//                 if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
//                 if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
//                 snow[i].posy=randommaker(2*marginbottom-marginbottom-2*snow[i].size)
//                 snow[i].style.left=snow[i].posx+'px';
//                 snow[i].style.top=snow[i].posy+'px';
//         }
//         movesnow()
// }
 
// function movesnow() {
//         for (i=0;i<=snowmax;i++) {
//                 crds[i] += x_mv[i];
//                 snow[i].posy+=snow[i].sink
//                 snow[i].style.left=snow[i].posx+lftrght[i]*Math.sin(crds[i])+'px';
//                 snow[i].style.top=snow[i].posy+'px';
 
//                 if (snow[i].posy>=marginbottom-2*snow[i].size || parseInt(snow[i].style.left)>(marginright-3*lftrght[i])){
//                         if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
//                         if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
//                         if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
//                         if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
//                         snow[i].posy=0
//                 }
//         }
//         var timer=setTimeout("movesnow()",50)
// }
 
// for (i=0;i<=snowmax;i++) {
//         document.write("<span id='s"+i+"' style='position:absolute;top:-"+snowmaxsize+"'>"+snowletter+"</span>")
// }
// if (browserok) {
//         window.onload=initsnow
// }

//Скрипт снежинок в начале страницы!!!

//______________________________________________________________________________________




