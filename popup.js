  let changeColor = document.getElementById('changeColor');

  chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
  });

changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
};

// Add word + definition to storage
document.getElementById("addWord").onsubmit = function() {
	word = document.getElementById("word").value;
	definition = document.getElementById("definition").value;
    chrome.storage.sync.set({word: definition}, function() {});
 }