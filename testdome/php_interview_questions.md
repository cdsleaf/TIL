# Php Interview Questions

### 1. File Owners

Implement a groupByOwners function that:

 - Accepts an associative array containing the file owner name for each file name.
 - Returns an associative array containing an array of file names for each owner name, in any order.

For example, for associative array ["Input.txt" => "Randy", "Code.py" => "Stan", "Output.txt" => "Randy"] the groupByOwners function should return ["Randy" => ["Input.txt", "Output.txt"], "Stan" => ["Code.py"]].

```php
<?php
function groupByOwners(array $files) : array
{
    $returnArray = array();
    
    foreach($files as $key => $value){
        if(array_key_exists($value, $returnArray)){
            array_push($returnArray[$value], $key);
        }else{
            $returnArray[$value] = array($key);
        }
    }
    
    return $returnArray;
}

$files = array
(
    "Input.txt" => "Randy",
    "Code.py" => "Stan",
    "Output.txt" => "Randy"
);
var_dump(groupByOwners($files));
?>
```

### 2. Merge Names

Implement the unique_names function. When passed two arrays of names, it will return an array containing the names that appear in either or both arrays. The returned array should have no duplicates.

For example, calling unique_names(['Ava', 'Emma', 'Olivia'], ['Olivia', 'Sophia', 'Emma']) should return ['Emma', 'Olivia', 'Ava', 'Sophia'] in any order.

```php
<?php

function unique_names(array $array1, array $array2) : array
{
    return array_unique (array_merge ($array1, $array2));;
}

$names = unique_names(['Ava', 'Emma', 'Olivia'], ['Olivia', 'Sophia', 'Emma']);
echo join(', ', $names); // should print Emma, Olivia, Ava, Sophia
```

### 3. Palindrome

A palindrome is a word that reads the same backward or forward.

Write a function that checks if a given word is a palindrome. Character case should be ignored.

For example, isPalindrome("Deleveled") should return true as character case should be ignored, resulting in "deleveled", which is a palindrome since it reads the same backward and forward.

```php
<?php

function isPalindrome(string $word) : bool
{
    $upperString = strtoupper($word);
    return $upperString == strrev($upperString);
}   

echo isPalindrome('Deleveled');
```

### 4. Quadratic Equation

Implement the function findRoots to find the roots of the quadratic equation: ax2 + bx + c = 0. The function should return an array containing both roots in any order.
The roots of the quadratic equation can be found with the following formula: A quadratic equation.
For example, findRoots(2, 10, 8) should return [-1, -4] or [-4, -1] as the roots of the equation 2x2 + 10x + 8 = 0 are -1 and -4.

```php
<?php
/**
 * @return array An array of two elements containing roots in any order
 */
function findRoots($a, $b, $c)
{
    $calculateSqrt = sqrt(pow($b, 2)-(4*$a*$c));
    
    return array((-$b+$calculateSqrt)/(2*$a), (-$b-$calculateSqrt)/(2*$a));
}

print_r(findRoots(2, 10, 8));
```

### 5. User Input

The user interface contains two types of user input controls: TextInput, which accepts all texts and NumericInput, which accepts only digits.

Implement the class TextInput that contains:

Public function add($text) - adds the given text to the current value.
Public function getValue() - returns the current value (string).

Implement the class NumericInput that:

Inherits from TextInput.
Overrides the add method so that each non-numeric text is ignored.

For example, the following code should output '10':

```php
<?php

class TextInput
{
    public $value;
    public function add($text) {
        $this->value = $this->value.$text;
    }
    
    public function getValue(){
        return $this->value;
    }
}

class NumericInput extends TextInput
{
    public function add($text){
        if(is_numeric($text)){
            $this->value = $this->value.$text;
        }
    }
}

//$input = new NumericInput();
//$input->add('1');
//$input->add('a');
//$input->add('0');
//echo $input->getValue();
```

### 6. Pipeline

As part of a data processing pipeline, complete the implementation of the make_pipeline method:

 - The method should accept a variable number of functions, and it should return a new function that accepts one parameter $arg.
 - The returned function should call the first function in the make_pipeline with the parameter $arg, and call the second function with the result of the first function.
 - The returned function should continue calling each function in the make_pipeline in order, following the same pattern, and return the value from the last function.

For example, make_pipeline(function($x) { return $x * 3; }, function($x) { return $x + 1; }, function($x) { return $x / 2; }) then calling the returned function with 3 should return 5.

```php
<?php

function make_pipeline(...$funcs)
{
    return function($arg) use ($funcs)
    {
        foreach($funcs as $function){
            if(!isset($value)){
                $value = $function($arg);
            }else{
                $value = $function($value);
            }
        }
        return $value;
    };
}

$fun = make_pipeline( function($x) { return $x * 3; },
                      function($x) { return $x + 1; },
                      function($x) { return $x / 2; } );
echo $fun(3); # should print 5
```

### 7. Thesaurus

A thesaurus contains words and synonyms for each word. Below is an example of a data structure that defines a thesaurus:

array("buy" => array("purchase"), "big" => array("great", "large"))

Implement the function getSynonyms, which accepts a word as a string and returns all synonyms for that word in JSON format, as in the example below.

For example, the call $thesaurus->getSynonyms("big") should return:

'{"word":"big","synonyms":["great", "large"]}'

while a call with a word that doesn't have synonyms, like $thesaurus->getSynonyms("agelast") should return:

'{"word":"agelast","synonyms":[]}'

```php
<?php

class Thesaurus
{
    private $thesaurus;

    function Thesaurus(array $thesaurus)
    {
        $this->thesaurus = $thesaurus;
    }

    public function getSynonyms(string $word) : string
    {
        $obj->word = $word;
        
        if(array_key_exists($word, $this->thesaurus)){
            $obj->synonyms = $this->thesaurus[$word];
        }else{
            $obj->synonyms = array();
        }
        
        return json_encode($obj);
    }
}

$thesaurus = new Thesaurus(
    [
        "buy" => array("purchase"),
        "big" => array("great", "large")
    ]
);

echo $thesaurus->getSynonyms("big");
echo "\n";
echo $thesaurus->getSynonyms("agelast");
```

### 8. League Table

The LeagueTable class tracks the score of each player in a league. After each game, the player records their score with the recordResult function. 

The player's rank in the league is calculated using the following logic:

1. The player with the highest score is ranked first (rank 1). The player with the lowest score is ranked last.
2. If two players are tied on score, then the player who has played the fewest games is ranked higher.
3. If two players are tied on score and number of games played, then the player who was first in the list of players is ranked higher.

Implement the playerRank function that returns the player at the given rank.

For example:

```php
$table = new LeagueTable(array('Mike', 'Chris', 'Arnold'));
$table->recordResult('Mike', 2);
$table->recordResult('Mike', 3);
$table->recordResult('Arnold', 5);
$table->recordResult('Chris', 5);
echo $table->playerRank(1);
```

All players have the same score. However, Arnold and Chris have played fewer games than Mike, and as Chris is before Arnold in the list of players, he is ranked first. Therefore, the code above should display "Chris".

```php
<?php

class LeagueTable
{
    public function __construct(array $players)
    {
        $this->standings = [];
        foreach($players as $index => $p) {
            $this->standings[$p] = [
                'index'        => $index,
                'games_played' => 0,
                'score'        => 0
            ];
        }
    }

    public function recordResult(string $player, int $score) : void
    {
        $this->standings[$player]['games_played']++;
        $this->standings[$player]['score'] += $score;
    }

    public function playerRank(int $rank) : string
    {
        
        $standings = new ArrayObject($this->standings);
        $sorted = $standings->getArrayCopy();
        
        uasort($sorted, function ($a, $b){
            if($a['score'] != $b['score']){
                return $a['score'] > $b['score'] ? -1 : 1;
            }
            
            if($a['games_played'] != $b['games_played']){
                return $a['games_played'] > $b['games_played'] ? 1 : -1;
            }
                
            return $a['index'] > $b['index'] ? 1 : -1;
        });
        return array_keys($sorted)[$rank-1];
    }
}

$table = new LeagueTable(array('Mike', 'Chris', 'Arnold'));
$table->recordResult('Mike', 2);
$table->recordResult('Mike', 3);
$table->recordResult('Arnold', 5);
$table->recordResult('Chris', 5);
echo $table->playerRank(1);
```

### 9. Path

Write a function that provides change directory (cd) function for an abstract file system.

Notes:

Root path is '/'.
Path separator is '/'.
Parent directory is addressable as '..'.
Directory names consist only of English alphabet letters (A-Z and a-z).
The function should support both relative and absolute paths.
The function will not be passed any invalid paths.
Do not use built-in path-related functions.

For example:

$path = new Path('/a/b/c/d');
$path->cd('../x')
echo $path->currentPath;

should display '/a/b/c/x'.

```php

```