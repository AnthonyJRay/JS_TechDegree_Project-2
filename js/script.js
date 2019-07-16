const studentList = document.querySelectorAll('li.student-item');
const postsPerPage = 10;
let currentPage = 1;
const nextPage = currentPage + 1;
const previousPage = currentPage - 1;
const pageLinks = document.querySelector('#pages');
pages = [];
let maxDisplay = currentPage * 10;
let minDisplay = maxDisplay - 10;
let buttons = document.querySelectorAll('.pageButtons');
// const btn = document.createElement("button");

// Calculates the number of Maximum Pages by taking the length of the student Nodelist and dividing it by the amount of max posts per page
const maxPages = Math.ceil((studentList.length / postsPerPage));

const createPageArray = () => {
   for ( let i = 0; i <= studentList.length / postsPerPage; i ++) {
      pages.push(i);
   }
   console.log(pages);
}

createPageArray();


// Hide list of students
studentList.forEach( i => {
   i.style.display = 'none';
});

for ( let i = 0; i < studentList.length; i++) {
   if  ( i >= minDisplay && i <= maxDisplay) {
      studentList[i].style.display = 'block';
      // console.log(i);
   }
}

   for (let i = 0; i < pages.length; i++) {
      // console.log(i);
      let btn = document.createElement('a');
      btn.className = 'pageButtons';
      btn.href = '#';
      btn.textContent = i;
      pageLinks.appendChild(btn);
   }
   console.log(buttons);

   buttons.forEach (e => {
      e.addEventListener('click', () {
         return e.target.innerContent;
      }
   })
   buttons.addEventListener = (e) => {
      let btnValue = e.target.innerContent;
      return btnValue;
   }




/** if the index value of student is > than or = to the lowest number in 
 * a multiple of 10, and the index value of student is < or equal to the maximum
 * number in a multiple of 10, set display to 'block'.
 */

 /** if the index value of student is > than or = to currentPage * postPerPage
  * && is <= nextPage, set display to 'block'.
  */


