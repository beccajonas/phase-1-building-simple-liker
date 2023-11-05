// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// ! Targeting heart 
let likeButton = document.querySelectorAll('li');

// ! Add click event listener
likeButton.forEach(li => li.addEventListener('click', onClick))

function onClick() {
  console.log('click');
  mimicServerCall()
  .catch( error => {
    console.log(error.message, 'Random server error. Try again.');
    let errorPopUp = document.querySelector('#modal');
    errorPopUp.className= '';
    errorPopUp.innerText = 'Random server error. Try again.'
    setTimeout(removeError, 3000)
  }) // error
}

// ! Remove error message
function removeError() {
  let modal = document.querySelector('#modal')
  modal.className = 'hidden'
}

// ! Turn heart red on click / Revert on click  
let click = true
likeButton.forEach(li => li.addEventListener('click', (e) => {
    if (click) {
     e.target.innerText = '♥'
     e.target.className = 'activated-heart'
     click = false;
    }
   else {
     e.target.innerText = '♡'
     e.target.className = 'like-glyph'
     click = true;
    }
  })
)

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
