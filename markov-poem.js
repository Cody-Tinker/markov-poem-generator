function generatePoem() {
  const myMarkovChain = {};
  const inputArr = document.getElementById("textInput").value.split(" ");

  function takeInput() {
    for (let i = 0; i < inputArr.length; i++) {
      let currentWord = inputArr[i].toLowerCase().replace(/[\W_]/, "");
      if (!myMarkovChain[currentWord]) {
        myMarkovChain[currentWord] = [];
      }
      if (inputArr[i + 1]) {
        myMarkovChain[currentWord].push(
          inputArr[i + 1].toLowerCase().replace(/[\W_]/, "")
        );
      }
    }
  }

  function writeLine() {
    const words = Object.keys(myMarkovChain);
    let currentWord = words[Math.floor(Math.random() * words.length)];
    let result = "";
    for (let i = 0; i < words.length; i++) {
      result += currentWord + " ";
      newWord =
        myMarkovChain[currentWord][
          Math.floor(Math.random() * myMarkovChain[currentWord].length)
        ];
      currentWord = newWord;
      if (!currentWord || !myMarkovChain.hasOwnProperty(currentWord))
        currentWord = words[Math.floor(Math.random() * words.length)];
    }
    document.getElementById("textOutput").innerText = result;
  }

  takeInput();
  writeLine();
}
