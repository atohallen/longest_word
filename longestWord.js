function findLongestWord(sentence) {
    const countVowels = (word) => {
        let count = 0;
        for (let char of word) {
            if("aeiou".includes(char)) {
                count++;
            }
        }
        return count;
    }

    const cleanedSentence = sentence.replace(/[^a-z\s]/g, "");

    const words = cleanedSentence.split(" ");

    let longestWord = "";
    let longestLength = 0, maxVowels = 0;

    for (let word of words) {
        const currentLength = word.length;
        const currentVowels = countVowels(word);

        if(currentLength > longestLength || (currentLength === longestLength && currentVowels > maxVowels)) {
            longestWord = word;
            longestLength = currentLength;
            maxVowels = currentVowels;
        }
    }

    return longestWord;
}

console.log(findLongestWord("Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"));
