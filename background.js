// document.addEventListener('DOMContentLoaded', function () {
  // Create a bank of reference URLs to compare against
  // const badLinks = ['https://www.fullstackacademy.com', 'fullstackacademy.com'];
  // store current window.location in a variable
  // let currentPage = window.location.href;
  // console.log(currentPage);
  // if the current window.location is in our badLinks array

  // if(badLinks.includes(currentPage)){
  //   // replace that url with codesmith.io
  //   window.location.replace('https://codesmith.io/');
  // }

  // chrome.webRequest.onBeforeRequest.addListener(
  //   modifyUrl, { urls: ['https://www.fullstackacademy.com/'] }, ['blocking']
  // );
  
  // function modifyUrl(details) {
  //   if (details.url === 'https://www.fullstackacademy.com/') {
  //     return { redirect: 'https://codesmith.io/' }
  //   }
  // }

//   chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     if(tab.url.indexOf("https://www.fullstackacademy.com/") == 0 && changeInfo.status == "loading") {
//         chrome.tabs.update(tabId, {url: "https://codesmith.io/"});
//     }
// });

// })

