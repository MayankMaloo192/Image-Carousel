var currInd =0;

const images = document.querySelectorAll('.image');

images.forEach((image,index)=>{
   image.style.transform = `translateX(${index*100}%)`;
})

//Moving each image item by index*100%
// item 0 will move 0%, item1 will move by 100% and so on..

const nextSlide = document.querySelector('.btn-next');
const prevSlide = document.querySelector('.btn-prev');

nextSlide.addEventListener('click',()=>{
   currInd +=1;
   if(currInd ===images.length)
   currInd = 0;

   images.forEach((image,index)=>{
      image.style.transform = `translateX(${(index - currInd)*100}%)`;
   })
  //whenever we click on next button it will shift an item to left.

});

prevSlide.addEventListener('click',()=>{
   currInd -=1;
   if(currInd <0)
   currInd = images.length-1;
   
   images.forEach((image,index)=>{
      image.style.transform = `translateX(${(index - currInd)*100}%)`;

   })
 //whenever we click on prev button it will shift an item to right.

   


});