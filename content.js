alert("All Roads Lead to Codesmith");
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
  console.log(badLinks[0]);
  if (badURL.hasOwnProperty(url)) {
    //alert "Whoops, your on the wrong website"
    window.location.replace("https://codesmith.io/");
  }
}

replaceURL(window.location.href);

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


