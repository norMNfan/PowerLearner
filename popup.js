// Add word + definition to storage
document.getElementById("addWord").onsubmit = function() {
	newWord = document.getElementById("word").value;
  newDefinition = document.getElementById("definition").value;
  
  chrome.storage.sync.get(function(items) {
    if (Object.keys(items).length > 0 && items.wordList) {
        items.wordList.push({word: newWord, definition: newDefinition});
    } else {
        items.wordList = [{word: newWord, definition: newDefinition}];
    }
    chrome.storage.sync.set(items, function() {
        console.log('Data successfully saved to the storage!');
    });
  });
 }

// Clear all data
document.getElementById("clearWords").onclick = function() {
  chrome.storage.sync.clear(function() {
    alert("Add data has been cleared");
  })
}
