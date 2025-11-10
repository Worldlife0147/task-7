// Day/Night Toggle
const ToggleDarkMode = document.getElementById("ToggleDarkMode")
const body = document.body;

ToggleDarkMode.addEventListener('click', () => {
            body.classList.toggle('night');
            body.classList.toggle('day');

            // Update button text
            if (body.classList.contains('night')) {
                ToggleDarkMode.textContent = 'Switch to Day Mode';
            } else {
                ToggleDarkMode.textContent = 'Switch to Night Mode';
            }
        });

// MoodBox
const moodBox = document.getElementById("moodBox")
function changeSize(value){
    let currentWidth = moodBox.offsetWidth
    moodBox.style.width = (currentWidth + value) + "px"

    let currentHeight = moodBox.offsetHeight
    moodBox.style.height = (currentHeight + value) + "px"
    
}

const nameInput = document.getElementById("nameInput")
let nameOutput = document.getElementById("nameOutput")

nameInput.addEventListener("input", function(){
            nameOutput.innerText = nameInput.value
        })

    // Secret Message    
const secretMessage = document.getElementById("secretMessage")        

function toggleSecret() {
      // toggle between showing and hiding
      if (secretMessage.style.display === 'none' || secretMessage.style.display === '') {
        secretMessage.style.display = 'block';
      } else {
        secretMessage.style.display = 'none';
      }
    }
