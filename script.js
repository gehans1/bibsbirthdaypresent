+  1 let currentPage = 1;
+  2 const totalPages = 5;
+  3 
+  4 function showPage(pageNumber) {
+  5     // Hide all pages
+  6     document.querySelectorAll('.page').forEach(page => {
+  7         page.classList.remove('active');
+  8     });
+  9     
+ 10     // Show the current page
+ 11     document.getElementById(`page${pageNumber}`).classList.add('active');
+ 12     currentPage = pageNumber;
+ 13 }
+ 14 
+ 15 function nextPage() {
+ 16     if (currentPage < totalPages) {
+ 17         showPage(currentPage + 1);
+ 18     }
+ 19 }
+ 20 
+ 21 function prevPage() {
+ 22     if (currentPage > 1) {
+ 23         showPage(currentPage - 1);
+ 24     }
+ 25 }
+ 26 
+ 27 // Keyboard navigation
+ 28 document.addEventListener('keydown', (e) => {
+ 29     if (e.key === 'ArrowRight') {
+ 30         nextPage();
+ 31     } else if (e.key === 'ArrowLeft') {
+ 32         prevPage();
+ 33     }
+ 34 });
