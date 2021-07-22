if (!(window.location.href === "https://codesmith.io/")){
  alert("All Roads Lead to Codesmith");
}

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
  }
}

replaceURL(window.location.href);

if (window.location.href === "https://codesmith.io/"){
  document.body.style = "background-color: pink !important";
  rainbowfy(document.body);
  // document.body.style = "background-image: url('cs-logo.png'); background-repeat: repeat-y";
}

function rainbowfy (element) {
  if(element.hasChildNodes()) {
    element.childNodes.forEach(rainbowfy)
  }else if (element.nodeType === Node.TEXT_NODE) {
    if(element.textContent.match(/codesmith/gi)){
      const newWord = document.createElement('span');
      newWord.innerHTML = element.textContent.replace(/(codesmith)/gi,
        '<span class="rainbow">$1</span>')
        element.replaceWith(newWord);
    }
  }
}

