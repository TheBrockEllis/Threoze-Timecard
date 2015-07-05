# Threoze-Timecard
A large, full-screen kiosk to be used at the HQ of Sycamore Education.

Build using initializr.com, Bootstrap, jQuery, Threoze public API and nw.js 

## Build instructions
 - Install nw.js with `npm install nw -g`
 - `git clone git@github.com:TheBrockEllis/Threoze-Timecard.git`
 - `cd Threoze-Timecard`

## Packing insructions 
 - Use [node-webkit-builder](https://github.com/mllrsohn/node-webkit-builder) to help run and package app for multiple platforms
 - `npm install node-webkit-builder -g`  
 - Build app for local developing/testing: `nwbuild -r ./` 
 - Package app for distribution: `nwbuild -p platform ./`
  - Platforms can be found on nwbuilder README file

## To Do
- [x] Add button to leave kiosk mode
- [x] Horitzontally center content on the page
- [x] Display large clock with moment.js (opted to display clock in navbar instead)
