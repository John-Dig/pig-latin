
Test: it will recognize a vowel
Code: pigLatin("a")
Expected Output: true


Test: it will recognize a consonant
Code: pigLatin(b)
Expected Output: true

Test: it will recognize"qu"
Code: pigLatin("qu")
Expected Output: true

Test: it will recognize vowel and add "way"
Code: pigLatin("add")
Expected Output: "addway"

Test: it will recognize consonant and move first letter to back and add "ay"
Code: pigLatin("mister")
Expected Output: istermay

Test: it will recognize "qu", bring "qu" to back and add "ay"
Code: pigLatin(queen)
Expected Output: eenquay

Test: it will take in a string and output an array
Code: pigLatin("hello awesome muffins")
Expected Output: ["hello", "awesome", "muffins"]

Test: it will loop thru string and change words that start with vowel
Code: pigLatin("hello awesome muffins")
Expected Output: ["hello", "awesomeway", "muffins"]

Test: it will loop thru string and change words that start with consonant
Code: pigLatin("hello awesome muffins")
Expected Output: ["ellohay", "awesomeway", "uffinsmay"]

Test: it will loop thru string and change words that start with "qu"
Code: pigLatin("hello awesome queens")
Expected Output: ["ellohay", "awesomeway", "eensquay"]

Test: it will change array back to string
Code: pigLatin("hello awesome queens")
Expected Output: ellohay awesomeway eensquay

Test: it will output string to HTML or whatever we feel like.
Code: pigLatin("hello awesome queens")
Expected Output: ellohay awesomeway eensquay

Test: 
Code: pigLatin()
Expected Output:


