/*******************************************************************************

LIGHTSWITCH: A DARK MODE SWITCHER WITH USER OVERRIDE

By Nick Punt 10/26/2018

How to use:
  *  Create two color schemes in CSS under the classes 'light' and 'dark'
  *  Add the class 'light' or 'dark' to your body as your default color scheme
  *  Add button to page with id 'lightswitch', which lets users change/override
  *  Use the class 'flipswitch' for any style changes you want on lightswitch

Logic:
  1. When user hits page for first time, color scheme is based on OS/browser
     (if supported), otherwise it defaults to the body class you added
  2. When user clicks lightswitch to override colors, their preference is stored
  3. When user alters their OS light/dark mode, switch to dark if dark mode,
     and light if light mode
     
Note:
The 'prefers-color-scheme' css support is currently only available in Safari 
Technology Preview 68. 

*******************************************************************************/

// New prefers-color-scheme media query to detect OS light/dark mode setting
var prefers_light = window.matchMedia('(prefers-color-scheme: light)')
var prefers_dark = window.matchMedia('(prefers-color-scheme: dark)')
var btn = document.getElementById("nav-light");

// Change to dark and rotate the switch icon
function darkmode() {
  document.body.classList.replace('light', 'dark');
}

// Change to light and rotate the switch icon
function lightmode() {
  document.body.classList.replace('dark', 'light');
}

// Initialization triggers light/dark mode based on prior preference, then OS setting
if(localStorage.getItem("mode")=="dark") {
  darkmode();
} else if(localStorage.getItem("mode")=="light") {
  lightmode();
} else if(prefers_light.matches) {
  lightmode();
} else if(prefers_dark.matches) {
  darkmode();
}

// Fires when user clicks light/dark mode switch in top right
function handleThemeUpdate() {
  if (document.body.classList.contains('light')) {
    darkmode();
    localStorage.setItem("mode", "dark");
  } else {
    lightmode();
    localStorage.setItem("mode", "light");
  }
}

btn.addEventListener('click', handleThemeUpdate);

// Runs when OS changes light/dark mode. Changes only if you were on default
// color state (light on light mode, dark on dark mode).
function OSColorChange() {
  if (prefers_light.matches) {
    lightmode();
    localStorage.setItem("mode", "light");
  } else if (prefers_dark.matches) {
    darkmode();
    localStorage.setItem("mode", "dark");
  }
}

// Listeners for when you change OS setting for light/dark mode
prefers_light.addListener(OSColorChange)
prefers_dark.addListener(OSColorChange)