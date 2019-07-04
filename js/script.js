const student = document.querySelectorAll('li.student-item');
const postsPerPage = 10;
let currentPage = 1;
pages = [];
pageIndex = [];

// Hide list of students
student.forEach( i => {
   i.style.display = 'none';
});

// Calculate number of pages


const pageCalc = () => {
   for ( let i = 1; i <= Math.ceil((student.length / postsPerPage)); i++) {
      pages.push(i);
      // console.log(i);
   }
}
pageCalc();

const startIndex = () => {
   for (i = 1; i <= student.length; i++) {

   }
   console.log(i);
   console.log(currentPage);
         if( i > (currentPage * 10) ) {
            
         }

}
startIndex();

// const endIndex = () => {

// }

// const startIndex = () => {
//    const pageindex = pages * postsPerPage;
//    console.log(pageindex);
//    for ( let i = 0; i <= student.length; i++) {
//       if ( i >= 0 && i < pages * postsPerPage) {
//          console.log(i);
//          console.log(pages);
//          // console.log(x);
//          // student.style.display = 'block';
//          // console.log(student);
//       }
//    }
// }
// // startIndex(pageCalc(pageIndex));
// startIndex();
