const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const letters = characters.slice(0, 52); // A-Z and a-z
const numbers = characters.slice(52, 62); // 0-9
const symbols = characters.slice(62); // Special symbols

const lengthSlider = document.getElementById("length");
const sliderNumber = document.getElementById("slider-number");

const formOne = document.getElementById("form-one");
const formTwo = document.getElementById("form-two");
const generateBtn = document.getElementById("btn");

// Update slider display value dynamically
lengthSlider.addEventListener("input", function() {
    sliderNumber.textContent = lengthSlider.value;
});

generateBtn.addEventListener("click", function() {
    let length = lengthSlider.value;
    let includeSymbols = document.getElementById("include-symbols").checked;
    let includeNumbers = document.getElementById("include-numbers").checked;
    
    // Build character set based on toggles
    let charSet = [...letters];
    if (includeNumbers) charSet = charSet.concat(numbers);
    if (includeSymbols) charSet = charSet.concat(symbols);

    // Generate two random passwords
    let passwordOne = "";
    let passwordTwo = "";

    for (let i = 0; i < length; i++) {
        passwordOne += charSet[Math.floor(Math.random() * charSet.length)];
        passwordTwo += charSet[Math.floor(Math.random() * charSet.length)];
    }

    formOne.textContent = passwordOne;
    formTwo.textContent = passwordTwo;

    // Enable cursor pointer after generation
    formOne.classList.add("active");
    formTwo.classList.add("active");
});

// Copy-on-click functionality
formOne.addEventListener("click", function() {
    if (formOne.textContent) {  
        navigator.clipboard.writeText(formOne.textContent);
        alert("Password copied to clipboard!");
    }
});

formTwo.addEventListener("click", function() {
    if (formTwo.textContent) {
        navigator.clipboard.writeText(formTwo.textContent);
        alert("Password copied to clipboard!");
    }
});
