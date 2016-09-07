$( document ).ready(function(){
  //chrome.identity.getAuthToken({ 'interactive': false }, function(token) {
  //});
});

function appendButton(){
  if(chrome.identity == null || chrome.identity == 'undefined'){
    $('#content').append('<button id="login">Login con google</button>')
    $("#login").click(function(){
      chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
        alert(token);
      });
    })
  }
}
