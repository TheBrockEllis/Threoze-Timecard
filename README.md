# Threoze-Timecard
A large, full-screen kiosk to be used at the HQ of Sycamore Education.

Build using initializr.com, Bootstrap, jQuery, Threoze public API and nw.js 

## Build instructions
 - Install nw.js with `npm install nw -g`
 - `git clone git@github.com:TheBrockEllis/Threoze-Timecard.git`
 - `cd Threoze-Timecard`
 - Zip up assets into a `.nw` package with `zip -r ${PWD##*/}.nw *` 
 - Run locally using `nw Threoze-Timecard.nw` 

## Packing insructions 
 - Use [node-webkit-builder](https://github.com/mllrsohn/node-webkit-builder) to help package app for multiple platforms
 - `npm install node-webkit-builder -g`  
 - Build using `nwbuild -o /home/brock/code/Threoze-Timecard/.builds -r --buildType versioned /home/brock/code/Threoze-Timecard/`

## To Do
- [x] Add button to leave kiosk mode
- [x] Horitzontally center content on the page
- [x] Display large clock with moment.js (opted to display clock in navbar instead)
