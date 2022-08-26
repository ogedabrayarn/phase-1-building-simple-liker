// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector('#modal').className = 'hidden';

const icons = document.querySelectorAll('.like-glyph')
icons.forEach(icon => {
  icon.addEventListener('click', (e) => {
    mimicServerCall()

    .then(res => {
      if (icon.innerHTML === EMPTY_HEART) {
        icon.innerHTML = FULL_HEART
        icon.className = 'activated-heart'
      } else {
        icon.innerHTML = EMPTY_HEART
        icon.className = ''
      }
    })

    .catch(error => {
      modal.className = ''
      modal.innerText = error
      setTimeout(() => {
        modal.className = 'hidden'
      }, 1000)
    })
  })
})


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
