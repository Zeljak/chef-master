document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello Bulma!');
});

// Anketa
document.querySelector('#submit-form').addEventListener('click', function(e){

  // const url = 'https://script.google.com/macros/s/AKfycbzWcax1gToT9a6TznrmKls20vo1aNrQcLwnItM7-swK6FTg76_ZIEmdQW3gkDFjEEOk/exec';
  const url = 'https://script.google.com/macros/s/AKfycbxvrRxsba5_DCVAVDmMSMIzOp1kpFmV7QETxsvaQwxTqssJpebK33Uum5f9xezvXJce/exec';
  

  e.preventDefault();

  if(document.getElementById('pravila').checked) {

      document.querySelector('#submit-form').classList.add('is-hidden');
      document.querySelector('#error-msg').classList.add('is-hidden');
      document.querySelector('#loading-indicator').classList.remove('is-hidden');

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#prijava').serializeJSON()
      })
        .then(document.querySelector('#loading-indicator').classList.add('is-hidden'))
        .then(document.querySelector('#response-msg').classList.remove('is-hidden'));
        
  } else {
    document.querySelector('#error-msg').classList.remove('is-hidden');
  }

});
