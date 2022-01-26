
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


/**
 * Interval which the clock will be updated (in milliseconds).
 */
const clockInterval = 100;

/**
 * Search engine query url
 */
const searchEngineUrl = 'https://duckduckgo.com/?q=';

const tabKeyCode = 9;
const enterKeyCode = 13;
const escapeKeyCode = 27;
const searchBarElement = document.getElementById('search-bar');
const clockElement = document.getElementById('clock');
const formElement = document.getElementById('search-form');

/**
 * Return a string containing the formatted current date and time.
 */
function getDateTime() {
    const dateTime = new Date();
    let day = dateTime.getDate();
    let month = dateTime.getMonth() + 1;
    let hour = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    let dotw = dateTime.getDay();
        switch(dotw){
            case 0: dotw='日'; break;
            case 1: dotw='月'; break;
            case 2: dotw='火'; break;
            case 3: dotw='水'; break;
            case 4: dotw='木'; break;
            case 5: dotw='金'; break;
            case 6: dotw='土'; break;
        }
    if (hour < 0) {
        hour = 24 + hour;
    }
    //Greetings
    let greeting = 'おい！！';
    if (hour>=12 && hour<19)
        greeting = 'こんにちは！';
    else if ((hour>=19 && hour<=24) || (hour>=0 && hour<5))
        greeting = 'こんばんは！';
    else greeting = 'おはよう！';
//    let date = (day < 10 ? '0' + day : day) + '/' + (month < 10 ? '0' + month : month) + '/' + dateTime.getFullYear();
    let date = (month < 10 ? '0' + month : month) + '月' + (day < 10 ? '0' + day : day) + '日' + '(' + dotw + ')';
    let time = (hour < 10 ? '0' + hour : hour) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);

    return greeting + '\n' + date + '\n' + time;
}

function setClock() {
    clockElement.innerText = getDateTime();
}

function search() {
    let value = searchBarElement.value;
    if (!value) {
        return;
    }

    if (value.startsWith('https://') || value.startsWith('http://')) {
        window.location = value;
    } else {
        window.location = searchEngineUrl + encodeURIComponent(value);
    }
}


setClock();

setInterval(() => {
    setClock();
}, clockInterval);

searchBarElement.focus();
searchBarElement.value = '';

formElement.addEventListener('submit', (ev) => {
    ev.preventDefault();
    search();
});

document.addEventListener('keypress', (event) => {
    if (event.keyCode == escapeKeyCode) {
        searchBarElement.blur();
        searchBarElement.value = '';
    } else if (event.keyCode != tabKeyCode && event.keyCode != enterKeyCode) {
        searchBarElement.focus();
    }
});