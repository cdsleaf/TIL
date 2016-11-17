### Shortest Word

https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript  

x Simple, given a string of words, return the length of the shortest word(s).  
String will never be empty and you do not need to account for different data types.  


For example:  
```
Test.describe("Example tests",_=>{
Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3);
});
```

solution

```
function findShort(s) {
  let sArray = s.split(" ");
  let wordLenth = 0;
  for(var index in sArray){
    if(wordLenth === 0 || wordLenth > sArray[index].length) wordLenth = sArray[index].length;
  }
  return wordLenth;
}
```
