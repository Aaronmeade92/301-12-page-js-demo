// This is where we define the view for the "About" page

'use strict';

const aboutView = {};

aboutView.init = function() {
  console.log('HELLO FROM THE ABOUT VIEW!!!!');
  document.getElementById('content').textContent = 'This is the view of the About page created by PageJS by accessing the "/about" route';
}
