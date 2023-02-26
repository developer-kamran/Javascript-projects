const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener('click', () => {
  counter++;
  carousel();
});
prevBtn.addEventListener('click', () => {
  counter--;
  carousel();
});

function carousel() {
  //working with slides
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }

  //working with buttons
  if (counter < slides.length - 1) {
    nextBtn.style.display = 'block';
  } else {
    nextBtn.style.display = 'none';
  }
  if (counter > 0) {
    prevBtn.style.display = 'block';
  } else {
    prevBtn.style.display = 'none';
  }

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
prevBtn.style.display = 'none';

/*
In Example # 1, we have an array with five elements. The console.log() statement reflects this as well because the “length” property of this array is “5” (i.e. this is a one-based value).

So, even though the array has a length of 5, the first element has an index of 0, and the last element (the 5th element) has an index of 4. Now this is the most important point, and it’s what explains the “off” reference: the length of the array is always one higher than the index of the last array element because the array indexes are zero-based, but the length property is one-based.

One Less Than the Length – Example # 2
var arr = ["monday","tuesday","wednesday","thursday","friday"],
  len = arr.length - 1;

for (var i = 0; i <= len; i++){
  console.log( "The value of element # " + i + " is: " + arr[i] );
}


In Example # 2, we create a variable who’s value is one LESS than the length of our array. So, since our array’s “length” property is “5”, our “len” variable is equal to “4”. Our loop will start at 0, and run until it equals “4”. This IS five iterations, but we are starting at 0, not one. So, since JavaScript starts counting Arrays from Zero, our code successfully outputs the value of each element in the array.
*/
