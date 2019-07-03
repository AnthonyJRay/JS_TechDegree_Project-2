const student = document.querySelectorAll('li.student-item');
const postsPerPage = 10;
let currentPage = 1;
pages = [];

// Hide list of students
student.forEach( i => {
   i.style.display = 'none';
});

// Calculate number of pages
const pageCalc = () => {
   for ( let i = 1; i <= Math.ceil((student.length / postsPerPage)); i++) {
      pages.push(i);
   }
}

const startIndex = () => {
   for ( let i = 0; i <= student.length; i++) {
      if ( i >= 0 && i < (pages * postsPerPage)) {
         console.log(i)
      }
   }
}

pageCalc();
startIndex();