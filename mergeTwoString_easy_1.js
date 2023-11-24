var mergeTwoStrings = function(word1, word2) {
    
    if(word1.length === 0 && word2.length === 0) {
      return "";
    }
    let minLength = Math.min(word1.length, word2.length);
    let mergedStr = "";
    for (let i = 0; i < minLength; i++) {
      mergedStr+= word1[i];
      mergedStr+= word2[i];
    }
    if(word1.length > minLength) {
        mergedStr += word1.substring(minLength)
    }
    if(word2.length > minLength) {
        mergedStr += word2.substring(minLength)
    }
    return mergedStr;
};