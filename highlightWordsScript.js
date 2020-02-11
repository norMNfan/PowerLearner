chrome.storage.sync.get(function(items) {
    var wordList = items.wordList;

    console.log(wordList);

    var elements = document.getElementsByTagName('*');

    // for (var i = 0; i < elements.length; i++) {
    //     var html = elements[i].innerHTML;
    //     html = html.replace(/a/g, "<span class='highlight'>04</span>");
    //     elements[i].innerHTML = html;
    // }

    //     var words = html.split(" ");


        // for (var j = 0; j < wordList.length; j++) {
        //     var word = wordList[j].word;
        //     x = x.replace(word, '<span style="color:green">' + word + '</span>');
        // }

        // x = x.replace('dev', '<span style="color:green">dev</span>')

        // elements[i].innerHTML = x;
    // }
});

// chrome.storage.sync.get(function(items) {
//     console.log(items.wordList);
// });