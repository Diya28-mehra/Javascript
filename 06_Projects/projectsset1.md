#Projects Related to DOM
##Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

##Project 1
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function (button) {
  button.addEventListener('click', function (obj) {
    console.log(obj);
    console.log(obj.target);
    if (obj.target.id==="grey"){
      body.style.backgroundColor = obj.target.id
    }
    if (obj.target.id==="white"){
      body.style.backgroundColor = obj.target.id
    }
    if (obj.target.id==="blue"){
      body.style.backgroundColor = obj.target.id
    }
    if (obj.target.id==="yellow"){
      body.style.backgroundColor = obj.target.id
    }
    if (obj.target.id==="purple"){
      body.style.backgroundColor = obj.target.id
    }
  });
});

```

##Project 2
```javascript

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const mssg = document.querySelector('#weight-guide');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight';
  } else {
    const result = (weight / ((height * height) / 1000)).toFixed(2);
    results.innerHTML = `<span>${result}</span>`;
    if (result < 18.6) {
      mssg.innerHTML = `<p>Under Weight</p>`;
    } else if (result < 24.9) {
      mssg.innerHTML = `<p>Normal Weight</p>`;
    } else {
      mssg.innerHTML = `<p>OverWeight</p>`;
    }
  }
});
```

####Project 3

```javascript
const time = document.getElementById('clock');


setInterval(function () {
  // console.log(date.toLocaleTimeString());
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

###Project 4

```javascript

let randomnum = parseInt(Math.random() * 100 + 1);
const submt = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const prevguess = document.querySelector('.guesses');
const chance = document.querySelector('.lastResult');
const loworhigh = document.querySelector('.lowOrHi');
const result = document.querySelector('.resultParas');
const p = document.createElement('p');

let prev = []; // Array to store previous guesses
let numguess = 1;
let playgame = true;

if (playgame) {
  submt.addEventListener('click', function (e) {
    e.preventDefault();
    const value = parseInt(userinput.value);
    validateguess(value);
  });
}

function validateguess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prev.push(guess); // Update the array
    if (numguess === 11) {
      displayguess(guess);
      displaymessage(`Game Over. Random number was ${randomnum}`);
      endgame();
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess === randomnum) {
    displaymessage('You guessed it right');
    endgame();
  } else if (guess < randomnum) {
    displaymessage('Number is too low');
  } else {
    displaymessage('Number is too high');
  }
}

function displayguess(guess) {
  userinput.value = '';
  prevguess.innerHTML += `${guess}  `;
  numguess++;
  chance.innerHTML = `${11 - numguess}`;
}

function displaymessage(message) {
  loworhigh.innerHTML = `<h2>${message}</h2>`;
}

function newgame() {
  const newbtn = document.querySelector('#newgame');
  newbtn.addEventListener('click', function (e) {
    prev = []; // Reset the guesses array
    randomnum = parseInt(Math.random() * 100 + 1);
    numguess = 1;
    prevguess.innerHTML = ''; // Reset the guesses display
    loworhigh.innerHTML = ''; // Clear messages
    chance.innerHTML = `${11 - numguess}`;
    userinput.removeAttribute('disabled');
    p.remove(); // Remove the new game button
    playgame = true;
  });
}

function endgame() {
  userinput.value = '';
  userinput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<p id="newgame">Start New Game</p>`;
  result.appendChild(p);
  playgame = false;
  newgame();
}
```


###project 5 

```javascript
console.log('Project 5');
const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class = 'color'>
      <table>
      <tr>
      <th>Key</th>
      <th>Key Code</th>
      <th>Code</th>
      </tr>
      <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
      </tr>
      </table>
    <div>
  `;
});
```


###Project 6 
```javascript
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

const choosecolor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalid = null;

const changecolor = function () {
  if (intervalid !== null) return;
  intervalid = setInterval(changebgcolor, 1000);
  
  function changebgcolor() {
    document.body.style.backgroundColor = choosecolor();
  }
};

const stopcolor = function () {
  if (intervalid !== null) {
    clearInterval(intervalid);
    intervalid = null;
  }
};

start.addEventListener('click', changecolor);
stop.addEventListener('click', stopcolor);
```
