// DOMContentLoaded is fired once the document has been loaded and parsed,
// but without waiting for other external resources to load (css/images/etc)
// That makes the app more responsive and perceived as faster.
// https://developer.mozilla.org/Web/Reference/Events/DOMContentLoaded

window.onload = function onload() {
    // nfc event handler
    navigator.mozSetMessageHandler('activity', NfcActivityHandler);

};


window.addEventListener('DOMContentLoaded', function() {

  // We'll ask the browser to use strict code to help us catch errors earlier.
  // https://developer.mozilla.org/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode
  'use strict';

  var translate = navigator.mozL10n.get;

  // We want to wait until the localisations library has loaded all the strings.
  // So we'll tell it to let us know once it's ready.
  navigator.mozL10n.once(start);

  // ---

  function start() {

    var message = document.getElementById('message');

    // We're using textContent because inserting content from external sources into your page using innerHTML can be dangerous.
    // https://developer.mozilla.org/Web/API/Element.innerHTML#Security_considerations
    message.textContent = translate('message');

  }

});

function NfcActivityHandler(activity) {

    alert('hello nfc');


    var activityName = activity.source.name;
    var data = activity.source.data;

    switch (activityName) {
        case 'nfc-ndef-discovered':

            alert('');

            console.log('nfc ndef message records(s): ' + JSON.stringify(data.records));
            console.log('Session Token: ' + JSON.stringify(data.sessionToken));
            console.log('Technology Detected: ' + JSON.stringify(data.tech));
            handleNdefDiscovered(data);
            break;
    }
}

