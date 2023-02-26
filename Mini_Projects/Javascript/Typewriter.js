// const TypeWriter = function (txtElement, words, wait = 3000) {
//   this.txtElement = txtElement;
//   this.words = words;
//   this.txt = '';
//   this.wordIndex = 0;
//   this.wait = parseInt(wait, 10);
//   this.type();
//   this.isDeleting = false;
// };

// //Type Method
// TypeWriter.prototype.type = function () {
//   //current index of word
//   const current = this.wordIndex % this.words.length;
//   //get full text of current word
//   const fullTxt = this.words[current];

//   // check if deleting
//   if (this.isDeleting) {
//     //removeCharacter
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     //addCharacter
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   //insert txt into element
//   this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//   //type speed
//   let typeSpeed = 300;

//   if (this.isDeleting) {
//     typeSpeed /= 2;
//   }
//   // if word is complete
//   if (!this.isDeleting && this.txt == fullTxt) {
//     // make pause at end
//     typeSpeed = this.wait;

//     //set Delete To True
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === '') {
//     this.isDeleting = false;
//     //move to next word
//     this.worIndex++;
//     //pause before next word
//     typeSpeed = 500;
//   }
//   setTimeout(() => {
//     this.type();
//   }, typeSpeed);
// };

// //Init on DOM load
// document.addEventListener('DOMContentLoaded', init);

// function init() {
//   const txtElement = document.querySelector('.txt-type');
//   const words = JSON.parse(txtElement.getAttribute('data-words'));
//   const wait = txtElement.getAttribute('data-wait');
//   //init TypeWriter
//   new TypeWriter(txtElement, words, wait);
// }

// ES6 Class
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    //current index of word
    const current = this.wordIndex % this.words.length;
    //get full text of current word
    const fullTxt = this.words[current];
    // console.log(fullTxt);

    // check if deleting
    if (this.isDeleting) {
      //removeCharacter
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      //addCharacter
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //type speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }
    // if word is complete
    if (!this.isDeleting && this.txt == fullTxt) {
      // make pause at end
      typeSpeed = this.wait;

      //set Delete To True
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      //move to next word
      this.wordIndex++;
      //pause before next word
      typeSpeed = 500;
    }
    setTimeout(() => {
      this.type();
    }, typeSpeed);
  }
}

//Init on DOM load
document.addEventListener('DOMContentLoaded', init);

function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  //init TypeWriter
  new TypeWriter(txtElement, words, wait);
}
