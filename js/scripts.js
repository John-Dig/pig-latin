// // Business Logic


// Test: it will recognize a vowel
// Code: pigLatin("a")
// Expected Output: true
// const letter = "a";
// console.log(pigLatin(letter));

// function pigLatin(text) {
//   if (text === "a" || text === "e" || text === "o" || text === "u" || text === "i") {
//     return true;
//   }
// }

// Test: it will recognize a consonant
// Code: pigLatin(b)
// Expected Output: true
// const letter = "b";
// console.log(pigLatin(letter));

// function pigLatin(text) {
//   if (text === "b" || text === "c" || text === "d" || text === "f" || text === "g" || text === "h" || text === "j" || text === "k" || text === "l" || text === "m" || text === "n" || text === "p" || text === "r" || text === "s" || text === "t" || text === "v" || text === "w" || text === "x" || text === "y" || text === "z") {
//     return true;
//   }
// }
// Test: it will recognize"qu"
// Code: pigLatin("qu")
// Expected Output: true
// const letter = "qu";
// console.log(pigLatin(letter));

// function pigLatin(text) {
//   if (text === "qu") {
//     return true;
//   }
// }

// Test: it will recognize vowel and add "way"
// Code: pigLatin("add")
// Expected Output: "addway"

// const letter = "add";
// console.log(pigLatin(letter));

// function pigLatin(text) {
//   if (text.indexOf("a") === 0 || text.indexOf("e") === 0 || text.indexOf("i") === 0 || text.indexOf("o") === 0 || text.indexOf("u") === 0)  {
//     return text.concat("way");
//   }
// }
// Test: it will recognize consonant and move first letter to back and add "ay"
// Code: pigLatin("mister")
// Expected Output: istermay



// function pigLatin(text) {  
//   if (text.indexOf("b") === 0 || text.indexOf("c") === 0 || text.indexOf("d") === 0 || text.indexOf("f") === 0 || text.indexOf("g") === 0 || text.indexOf("h") === 0 || text.indexOf("j") === 0 || text.indexOf("k") === 0 || text.indexOf("l") === 0 || text.indexOf("m") === 0 || text.indexOf("n") === 0 || text.indexOf("p") === 0 || text.indexOf("q") === 0 || text.indexOf("r") === 0 || text.indexOf("s") === 0 || text.indexOf("t") === 0 || text.indexOf("v") === 0 || text.indexOf("w") === 0 || text.indexOf("x") === 0 || text.indexOf("y") === 0 || text.indexOf("z") === 0) {
//     let first = text.substring(0,1);
//     text = text.substring(1,text.length) + first + "ay";
//     return text;
//   }
// }

// console.log(pigLatin("jackass"));

// Test: it will recognize "qu", bring "qu" to back and add "ay"
// Code: pigLatin(queen)
// Expected Output: eenquay
// function pigLatin(text) {  
//   if (text.indexOf("qu") === 0) {
//     let first2 = text.substring(0,2);
//     text = text.substring(2,text.length) + first2 + "ay";
//     return text;
//   }
// }

// console.log(pigLatin("quaalude"));

// Test: it will take in a string and output an array
// Code: pigLatin("hello awesome muffins")
// Expected Output: ["hello", "awesome", "muffins"]

// function pigLatin(text) {  
//   textArray = text.split(" ");
//   return textArray;
  
// }
// console.log(pigLatin("muffin queen"));



// Test: it will loop thru string and change words that start with vowel
// Code: pigLatin("hello awesome muffins")
// Expected Output: ["hello", "awesomeway", "muffins"]

// function pigLatin(text) {
//   textArray = text.split(" ");
//   for (let i = 0; i < textArray.length; i++) {
//       if (textArray[i].indexOf("a") === 0 || textArray[i].indexOf("e") === 0 || textArray[i].indexOf("i") === 0 || textArray[i].indexOf("o") === 0 || textArray[i].indexOf("u") === 0)  {
//       textArray[i] = textArray[i].concat("way");
//     }
//   }
//   return textArray;
// }
// console.log(pigLatin("hello awesome muffins"));

// Test: it will loop thru string and change words that start with consonant
// Code: pigLatin("hello awesome muffins")
// Expected Output: ["ellohay", "awesomeway", "uffinsmay"]


// function pigLatin(text) {
//   textArray = text.split(" ");
//   for (let i = 0; i < textArray.length; i++) {
//     if (textArray[i].indexOf("b") === 0 || textArray[i].indexOf("c") === 0 || textArray[i].indexOf("d") === 0 || textArray[i].indexOf("f") === 0 || textArray[i].indexOf("g") === 0 || textArray[i].indexOf("h") === 0 || textArray[i].indexOf("j") === 0 || textArray[i].indexOf("k") === 0 || textArray[i].indexOf("l") === 0 || textArray[i].indexOf("m") === 0 || textArray[i].indexOf("n") === 0 || textArray[i].indexOf("p") === 0 || textArray[i].indexOf("q") === 0 || textArray[i].indexOf("r") === 0 || text.indexOf("s") === 0 || text.indexOf("t") === 0 || text.indexOf("v") === 0 || textArray[i].indexOf("w") === 0 || textArray[i].indexOf("x") === 0 || textArray[i].indexOf("y") === 0 || textArray[i].indexOf("z") === 0) {
//       let first = textArray[i].substring(0,1);
//       textArray[i] = textArray[i].substring(1,text.length) + first + "ay";
//     }
//   }
//   return textArray;
// }
// console.log(pigLatin("hello awesome muffins"));



// Test: it will loop thru string and change words that start with "qu"
// Code: pigLatin("hello awesome queens")
// Expected Output: ["ellohay", "awesomeway", "eensquay"]

// function pigLatin(text) {
//   textArray = text.split(" ");
//   for (let i = 0; i < textArray.length; i++) {
//     if (textArray[i].indexOf("q") === 0) {
//       let firstTwo = textArray[i].substring(0,2);
//       textArray[i] = textArray[i].substring(2,text.length) + firstTwo + "ay";
//     }
//   }
//   return textArray;
// }
// console.log(pigLatin("the queens quaalude quaternion-esque quaternarian quasar fell into a furious fulcrumatic flying machine"));

// Test: it will conglomerate all previous functionality together
// Code: pigLatin("hello awesome queens")
// Expected Output: ellohay awesomeway eensquay

// function pigLatin(text) {
//   textArray = text.split(" ");
//   for (let i = 0; i < textArray.length; i++) {
//     if (textArray[i].indexOf("q") === 0) {
//       let firstTwo = textArray[i].substring(0,2);
//       textArray[i] = textArray[i].substring(2,text.length) + firstTwo + "ay";
//     } else if (textArray[i].indexOf("b") === 0 || textArray[i].indexOf("c") === 0 || textArray[i].   indexOf("d") === 0 || textArray[i].indexOf("f") === 0 || textArray[i].indexOf("g") === 0 || textArray[i].indexOf("h") === 0 || textArray[i].indexOf("j") === 0 || textArray[i].indexOf("k") === 0 || textArray[i].indexOf("l") === 0 || textArray[i].indexOf("m") === 0 || textArray[i].indexOf("n") === 0 || textArray[i].indexOf("p") === 0 || textArray[i].indexOf("r") === 0 || text.indexOf("s") === 0 || text.indexOf("t") === 0 || text.indexOf("v") === 0 || textArray[i].indexOf("w") === 0 || textArray[i].indexOf("x") === 0 || textArray[i].indexOf("y") === 0 || textArray[i].indexOf("z") === 0) {
//       let first = textArray[i].substring(0,1);
//       textArray[i] = textArray[i].substring(1,text.length) + first + "ay";
//     } else if (text.indexOf("a") === 0 || text.indexOf("e") === 0 || text.indexOf("i") === 0 || text.  indexOf("o") === 0 || text.indexOf("u") === 0)  {
//       textArray[i] = textArray[i].concat("way");
//     }
//   }
//   return textArray;
// }
// console.log(pigLatin("the queens quaalude quaternion-esque quaternarian quasar fell into a furious fulcrumatic flying machine"));





// Test: it will change array back to string
// Code: pigLatin("hello awesome queens")
// Expected Output: ellohay awesomeway eensquay

function pigLatin(text) {
  textArray = text.split(" ");
  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i].indexOf("q") === 0) {
      let firstTwo = textArray[i].substring(0,2);
      textArray[i] = textArray[i].substring(2,text.length) + firstTwo + "ay";
    } else if (textArray[i].indexOf("b") === 0 || textArray[i].indexOf("c") === 0 || textArray[i].   indexOf("d") === 0 || textArray[i].indexOf("f") === 0 || textArray[i].indexOf("g") === 0 || textArray[i].indexOf("h") === 0 || textArray[i].indexOf("j") === 0 || textArray[i].indexOf("k") === 0 || textArray[i].indexOf("l") === 0 || textArray[i].indexOf("m") === 0 || textArray[i].indexOf("n") === 0 || textArray[i].indexOf("p") === 0 || textArray[i].indexOf("r") === 0 || text.indexOf("s") === 0 || text.indexOf("t") === 0 || text.indexOf("v") === 0 || textArray[i].indexOf("w") === 0 || textArray[i].indexOf("x") === 0 || textArray[i].indexOf("y") === 0 || textArray[i].indexOf("z") === 0) {
      let first = textArray[i].substring(0,1);
      textArray[i] = textArray[i].substring(1,text.length) + first + "ay";
    } else if (text.indexOf("a") === 0 || text.indexOf("e") === 0 || text.indexOf("i") === 0 || text.  indexOf("o") === 0 || text.indexOf("u") === 0)  {
      textArray[i] = textArray[i].concat("way");
    }
  }
  let finalString = textArray.join(" ");
  return finalString;
}
console.log(pigLatin("the queens quaalude quaternion-esque quaternarian quasar fell into a furious fulcrumatic flying machine"));



// Test: it will output string to HTML or whatever we feel like.
// Code: pigLatin("hello awesome queens")
// Expected Output: ellohay awesomeway eensquay

// Test: 
// Code: pigLatin()
// Expected Output:


