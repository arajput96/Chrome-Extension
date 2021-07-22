if (!(window.location.href === "https://codesmith.io/")){
  alert("All Roads Lead to Codesmith");
}
// alert(window.location.href);
// redirectLink(document.body);
// create recursive function to loop through every element on the page
// function redirectLink (element) {
//   if(element.hasChildNodes()) {
//     element.childNodes.forEach(redirectLink)
//   }else if (element.nodeType === Node.TEXT_NODE) {
//     element.textContent = element.textContent.replace(/fullstack/gi, "TESTING")
//   }
// }

// const badLinks = ['https://www.fullstackacademy.com/', 'fullstackacademy.com']

const badURL = {
  //hack reactor, flat iron, app academy, coding dojo
  "https://www.fullstackacademy.com/" : null,
  "https://www.hackreactor.com/" : null,
  "https://flatironschool.com/" : null,
  "https://www.appacademy.io/" : null,
  "https://www.codingdojo.com/" : null,
  "https://www.nucamp.co/" : null
};


function replaceURL (url) {
  console.log(url);
  console.log(badURL);
  if (badURL.hasOwnProperty(url)) {
    alert ("I don't think that's where you wanted to go");
    alert ("I got you don't worry about it");
    window.location.replace("https://codesmith.io/");
    // testing updating the background color once we land on the codesmith page - SB
    // do we need an event listener to update the background once the page has loaded???
  }
}

replaceURL(window.location.href);

if (window.location.href === "https://codesmith.io/"){
  document.body.style = "background-color: pink !important";
  // document.body.style = "background-image: url('cs-logo.png'); background-repeat: repeat-y";
}

// document.addEventListener('loading', function () {
//   alert("Hello WOrld");
//   console.log('is this line')

// Create a bank of reference URLs to compare against
// const badLinks = ['https://www.fullstackacademy.com', 'fullstackacademy.com'];
// store current window.location in a variable
// let currentPage = window.location.href;
// console.log(currentPage);
// if the current window.location is in our badLinks array
// function redirect (){
//   if(badLinks.includes(currentPage)){
    // replace that url with codesmith.io
    // window.location.replace('https://codesmith.io/');
  // }
// }

// redirect();
  // chrome.webRequest.onBeforeRequest.addListener(
  //   modifyUrl, { urls: ['https://www.fullstackacademy.com/'] }, ['blocking']
  // );
  
  // function modifyUrl(details) {
  //   if (details.url === 'https://www.fullstackacademy.com/') {
  //     return { redirect: 'https://codesmith.io/' }
  //   }
  // }
  // chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  //   if(tab.url.indexOf("https://fullstackacademy.com/") == 0 && changeInfo.status == "loading") {
  //       chrome.tabs.update(tabId, {url: "https://codesmith.io/"});
  //   }
  // })
  
// });


