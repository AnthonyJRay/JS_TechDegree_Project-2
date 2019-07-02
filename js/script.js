const studentItem = document.querySelectorAll('.student-item');
const pages = document.querySelector('#pages');
const itemsArr = Array.from(studentItem);

function loop() {
   for(i = 0; i < itemsArr.length; i++) {
      itemsArr[i].style.display = "hidden";
   }
}
loop();
console.log(itemsArr);



// function students(list) {
//    for (i = 0; i <= list; i++) {
//       if (list[i] >= 0 && list[i] <= page) {
//          list[i].style.display = visible;
//       }
//    }
// }

// students(studentItem);

// function func() {

// }