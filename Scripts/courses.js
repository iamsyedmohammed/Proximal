 const filterBtns = document.querySelectorAll('.filter-btn');
 const cards = document.querySelectorAll('.course-card');
 const readMoreBtns = document.querySelectorAll('.read-more-btn');

 // Function to apply stagger animation on initial load and filter changes
 const applyStaggerAnimation = (elements) => {
 elements.forEach((el, index) => {
 el.classList.remove('slide-in-up'); // Remove to re-apply animation
 el.style.animationDelay = `${index * 80}ms`;
 el.classList.add('slide-in-up');
 });
 };

 // Initial stagger animation on page load
 document.addEventListener('DOMContentLoaded', () => {
 applyStaggerAnimation(cards);
 });

 filterBtns.forEach(btn => {
 btn.addEventListener('click', () => {
 // Remove active state from all buttons
 filterBtns.forEach(b => b.classList.remove('bg-professional-yellow', 'hover:bg-professional-yellow-darker', 'text-black'));
 filterBtns.forEach(b => {
 if (b.dataset.filter === 'beginner') b.classList.add('bg-purple-600', 'hover:bg-purple-700', 'text-white');
 else if (b.dataset.filter === 'intermediate') b.classList.add('bg-blue-600', 'hover:bg-blue-700', 'text-white');
 else if (b.dataset.filter === 'advanced') b.classList.add('bg-green-600', 'hover:bg-green-700', 'text-white');
 });

 // Add active state to clicked button
 btn.classList.remove('bg-purple-600', 'bg-blue-600', 'bg-green-600', 'hover:bg-purple-700', 'hover:bg-blue-700', 'hover:bg-green-700', 'text-white');
 btn.classList.add('bg-professional-yellow', 'hover:bg-professional-yellow-darker', 'text-black');

 const filter = btn.dataset.filter;
 let visibleCards = [];

 cards.forEach(card => {
 if (filter === 'all' || card.dataset.level === filter) {
 card.classList.remove('hidden');
 visibleCards.push(card);
 } else {
 card.classList.add('hidden');
 }
 // Ensure details are hidden on filter change and remove animation class
 const details = card.querySelector('.course-details');
 details.classList.add('hidden');
 details.classList.remove('visible'); // Remove animation class
 card.querySelector('.read-more-btn').textContent = 'Read More';
 });

 applyStaggerAnimation(visibleCards); // Apply stagger to visible cards
 });
 });

 readMoreBtns.forEach(btn => {
 btn.addEventListener('click', () => {
 const details = btn.closest('.course-card').querySelector('.course-details');
 details.classList.toggle('hidden');
 if (details.classList.contains('hidden')) {
 btn.textContent = 'Read More';
 details.classList.remove('visible'); // Remove animation class when hidden
 } else {
 btn.textContent = 'Show Less';
 details.classList.add('visible'); // Add animation class when visible
 }
 });
 });
