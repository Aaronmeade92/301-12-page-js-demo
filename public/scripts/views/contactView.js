// This is where we define the view for the "Contact" page

'use strict';

const contactView = {};

contactView.init = function() {
  console.log('HELLO FROM THE CONTACTS VIEW!!!!');
  document.getElementById('content').textContent = 'This is the view of the Contacts page created by PageJS  accessing the "/contacts" route';
}
