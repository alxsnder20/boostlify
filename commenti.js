var mediacommenti = document.getElementById("commenti");
if (mediacommenti.innerHTML.length == 2) {
  document.getElementById( 'commentiperc' ).style.color = '#9c9c9c';
   document.getElementById("commentiperc").innerHTML = "Nessun commento";
    document.getElementById( 'status-green-comment' ).style.display = 'none';
           document.getElementById( 'data-green-comment' ).style.display = 'none';
    document.getElementById( 'status-red-comment' ).style.display = 'none';
    document.getElementById( 'status-red-comment' ).style.display = 'none';
}
else if ((document.getElementById("commenti").innerHTML.indexOf('-') > -1)) {
  //-Commenti
  var x = "-";
  var y = "%";
  var str = document.getElementById("commenti").innerHTML;
  var commentiperc = '-' + str.substring(str.indexOf(x) + x.length, str.lastIndexOf(y)) + '%';
  document.getElementById("commentiperc").innerHTML = commentiperc;
  var stro = document.getElementById("commenti").innerHTML;
  var commenti = stro.slice(0, stro.lastIndexOf('-'));
  document.getElementById("commenti").innerHTML = commenti;
  document.getElementById( 'data-green-comment' ).style.display = 'none';
  document.getElementById( 'commentiperc' ).style.color = '#f64f59';
  document.getElementById( 'status-green-comment' ).style.display = 'none';
  document.getElementById( 'status-none-comment' ).style.display = 'none';
}
else {
//+ Commenti
  var x = "+";
  var y = "%";
  var str = document.getElementById("commenti").innerHTML;
  var commentiperc = '+' + str.substring(str.indexOf(x) + x.length, str.lastIndexOf(y)) + '%';
  document.getElementById("commentiperc").innerHTML = commentiperc;
  var stro = document.getElementById("commenti").innerHTML;
  var commenti = stro.slice(0, stro.lastIndexOf('+'));
  document.getElementById("commenti").innerHTML = commenti;
  document.getElementById( 'data-red-comment' ).style.display = 'none';
  document.getElementById( 'commentiperc' ).style.color = '#31ba7e';
  document.getElementById( 'status-red-comment' ).style.display = 'none';
   document.getElementById( 'status-none-comment' ).style.display = 'none';
}
