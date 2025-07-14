const azerty = {
    "q": "a",
    "w": "z",
    "Q": "A",
    "W": "Z",
    "a": "q",
    "z": "w",
    "A": "Q",
    "Z": "W",
    "1": "&",
    "2": "é",
    "3": "\"",
    "4": "'",
    "5": "(",
    "6": "-",
    "7": "è",
    "8": "_",
    "9": "ç",
    "0": "à",
    "-": ")",
    "!": "1",
    "@": "2",
    "#": "3",
    "$": "4",
    "%": "5",
    "^": "6",
    "&": "7",
    "*": "8",
    "(": "9",
    ")": "0",
    "_": "°",
    "m": ",",
    "M": "?",
    ";": "m",
    ":": "M",
    "'": "ù",
    "\"": "%",
    ",": ";",
    "<": ".",
    ".": ":",
    ">": "/",
    "/": "!",
    "?": "§",
    "[": "^",
    "{": "¨",
    "]": "$",
    "}": "£",
    "\\": "*",
    "|": "µ",
    "`": "²"
};
const azerty_combo = {
    "~": "Maj + ²",
}
const qwerty = {
    "a": "q",
    "z": "w",
    "A": "Q",
    "Z": "W",
    "q": "a",
    "w": "z",
    "Q": "A",
    "W": "Z",
    "&": "1",
    "é": "2",
    "\"": "3",
    "'": "4",
    "(": "5",
    "-": "6",
    "è": "7",
    "_": "8",
    "ç": "9",
    "à": "0",
    ")": "-",
    "1": "!",
    "2": "@",
    "3": "#",
    "4": "$",
    "5": "%",
    "6": "^",
    "7": "&",
    "8": "*",
    "9": "(",
    "0": ")",
    "°": "_",
    "¨": "{",
    "£": "}",
    "^": "[",
    "$": "]",
    "m": ";",
    "M": ":",
    "%": "\"",
    "ù": "'",
    "*": "\\",
    "µ": "|",
    ",": "m",
    "?": "M",
    ";": ",",
    ":": ".",
    ".": "<",
    "/": ">",
    "!": "/",
    "§": "?"
}
const qwerty_combo = {
    "€": "Alt Gr + E",
    "~": "Alt Gr + 2",
    "#": "Alt Gr + 3",
    "{": "Alt Gr + 4",
    "[": "Alt Gr + 5",
    "|": "Alt Gr + 6",
    "`": "Alt Gr + 7",
    "\\": "Alt Gr + 8",
    "^": "Alt Gr + 9",
    "@": "Alt Gr + 0",
    "]": "Alt Gr + °",
    "}": "Alt Gr + +",
    "¤": "Alt Gr + ]",
    "<": "There is no key for this character",
    ">": "There is no key for this character",
}

function convertQw2Az() {
    const input = document.getElementById("input").value;
    let output = "";
    let combo = false;
    let comboList = [];
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (azerty[char]) {
            output += azerty[char];
        } else if (azerty_combo[char]) {
            combo = true;
            if (!comboList[char]) {
                comboList.push(char);
            }
            output += char;
        } else {
            output += char;
        }
    }
    document.getElementById("output").value = output;
    if (combo) {
        let comboMessage = "Your input contains the special characters that require a combination of keys: \n";
        for (let i = 0; i < comboList.length; i++) {
            comboMessage += "\n" + comboList[i] + " → " + azerty_combo[comboList[i]];
        }
        comboMessage += "\n\nIn the output, these characters are not converted to help you find them more easily.";
        showWarning(comboMessage);
    } else {
        hideWarning();
    }
}

function convertAz2Qw() {
    const input = document.getElementById("input").value;
    let output = "";
    let combo = false;
    let comboList = [];
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (qwerty[char]) {
            output += qwerty[char];
        } else if (qwerty_combo[char]) {
            combo = true;
            if (!comboList[char]) {
                comboList.push(char);
            }
            output += char;
        } else {
            output += char;
        }
    }
    document.getElementById("output").value = output;
    if (combo) {
        let comboMessage = "Your input contains the special characters that require a combination of keys: \n";
        for (let i = 0; i < comboList.length; i++) {
            comboMessage += "\n" + comboList[i] + " → " + qwerty_combo[comboList[i]];
        }
        comboMessage += "\n\nIn the output, these characters are not converted to help you find them more easily.";
        showWarning(comboMessage);
    } else {
        hideWarning();
    }
}

function showWarning(msg) {
    const warningCard = document.getElementById('warning_card');
    const mainCard = document.querySelector('.card');
    document.getElementById('warning_text').textContent = msg;
    warningCard.style.visibility = "visible";
    warningCard.classList.add('show');
    mainCard.classList.add('shift');
}

function hideWarning() {
    const warningCard = document.getElementById('warning_card');
    const mainCard = document.querySelector('.card');
    warningCard.classList.remove('show');
    mainCard.classList.remove('shift');
    setTimeout(() => {
        warningCard.style.visibility = "hidden";
        document.getElementById('warning_text').textContent = "";
    }, 300);
}

function checkScreenRatio() {
    const mainContainer = document.getElementById("main_container");
    const btnContainer = document.getElementById("btn_container");
    const mainDiv = document.getElementById("main_div");

    if (window.innerHeight > window.innerWidth) {
        mainContainer.classList.remove("horizontal");
        mainContainer.classList.add("vertical");
        btnContainer.classList.remove("vertical");
        btnContainer.classList.add("horizontal");
        mainDiv.classList.remove("horizontal");
        mainDiv.classList.add("vertical");
    } else {
        mainContainer.classList.add("horizontal");
        mainContainer.classList.remove("vertical");
        btnContainer.classList.remove("horizontal");
        btnContainer.classList.add("vertical");
        mainDiv.classList.add("horizontal");
        mainDiv.classList.remove("vertical");
    }
}


let themeState = localStorage.getItem('themeState') || 'system';
function switchTheme() {
    const icon = document.getElementById('theme_icon');
    const btn = document.getElementById('theme_btn');

    if (themeState === 'light') {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        icon.textContent = 'light_mode';
        btn.title = "Theme: Light";
    } else if (themeState === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        icon.textContent = 'dark_mode';
        btn.title = "Theme: Dark";
    } else if (themeState === 'system') {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        icon.textContent = 'settings_suggest';
        btn.title = "Theme: System";
        if (prefersDarkScheme) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
    }
}

function toggleThemeOption() {
    if (themeState === 'light') {
        themeState = 'dark';
    } else if (themeState === 'dark') {
        themeState = 'system';
    } else {
        themeState = 'light';
    }

    localStorage.setItem('themeState', themeState); // Store the current theme state in localStorage
    switchTheme();
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', () => {
    if (themeState === 'system') {
        switchTheme();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    switchTheme();
});

window.addEventListener('resize', checkScreenRatio);
window.addEventListener('load', () => {
    checkScreenRatio();
    const warningCard = document.getElementById('warning_card');
    warningCard.style.visibility = "hidden";
});