const student = document.querySelectorAll('li.student-item');
const postsPerPage = 10;
let currentPage = 1;
pages = [];

for ( let i = 1; i <= (student.length / 10); i++) {
   pages.push(i);
   console.log(pages);
   // console.log(i);
}

for ( let i = 0; i < student.length; i++) {
   if (i >= 0 && i <= pages * 10) {
      pages.push(i);
      console.log(i);
      console.log(pages);
   }
}

for ( let i = 0; i < pages.length; i++) {
   // console.log(pages);
   // console.log(i);
   if (student.length[i] <= pages.length * 10) {
      console.log(pages);
      console.log(student);
      console.log(i);
   }
}


// console.log(pages);