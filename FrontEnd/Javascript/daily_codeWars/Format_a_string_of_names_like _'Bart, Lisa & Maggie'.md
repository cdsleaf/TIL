## Format a string of names like 'Bart, Lisa & Maggie'.

https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript  

Given: an array containing hashes of names  

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.  

Example:  

```
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
```

solution
```
function list(names){
  return names.reverse().reduce( (prev, curr, index) => {
    return curr.name+(prev!==''?(index===1?' & ':', '):'')+prev;
  }, '');
}
```
