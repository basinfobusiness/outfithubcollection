/* globals Chart:false */

(() => {
  'use strict'

  // Graphs
  const ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Easter Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          boxPadding: 3
        }
      }
    }
  })
})();

function ActivateCrypto(event){
    let cryptoactivator = document.getElementById("crypto");
    let cryptobtn = document.getElementById("cryptobtn");
    if(cryptoactivator.disabled === true){
        cryptoactivator.disabled = false;
       // cryptobtn.disabled = false;
    }
}

function CheckUser(){
    if(window.document.referrer !== "signin.html"){
    document.writeln("Access Denied.");
    document.writeln("Not Allowed");
   // window.location.assign("https:/\/www.outfithubcollection.com/signin.html");
    console.log(window.document.referrer);
 }
}

const logout = document.getElementById("logout");
logout.addEventListener('click',(e)=>{
    const currentUrl = window.location.href;
console.log(window.location.href);
document.writeln("logging off");
  
  history.replaceState({}, '', currentUrl);
  
   window.location.replace("https:/\/www.outfithubcollection.com/signin.html");
});

window.onload = CheckUser();