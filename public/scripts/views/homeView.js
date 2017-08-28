// This is where we define the view for the "Home" page, in other words, the default view
'use strict';

const homeView = {};

homeView.init = function() {
  console.log('HELLO FROM THE HOME VIEW!!!!');
  document.getElementById('content').textContent = 'This is the view of the home page created by PageJS  accessing the "/" route';
}
