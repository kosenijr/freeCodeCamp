/*
Manipulating Complex Objects

Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.

Here's an example of a complex data structure:

var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
This is an array which contains one object inside. The object has various pieces of metadata about an album. It also has a nested formats array. If you want to add more album records, you can do this by adding records to the top level array. Objects hold data in a property, which has a key-value format. In the example above, "artist": "Daft Punk" is a property that has a key of artist and a value of Daft Punk. JavaScript Object Notation or JSON is a related data interchange format used to store data.

{
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}
Note: You will need to place a comma after every object in the array, unless it is the last object in the array.

Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.

myMusic should be an array

myMusic should have at least two elements

The elements in the myMusic array should be objects

Your object in myMusic should have at least 4 properties

Your object in myMusic should contain the property artist which is a string

Your object in myMusic should contain the property title which is a string

Your object in myMusic should contain the property release_year which is a number

Your object in myMusic should contain a formats property which is an array

formats should be an array of strings with at least two elements
__________________________________________________________________
*/

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },                    // don't forget this comma

  {
    'artist': 'Mr.Eazi',
    'title': 'Life is Eazi, Vol. 2 - Lagos to London',
    'release_year': 2018,
    'formats': [
      'CD',
      'Digital',
      'Stream'
    ]
  }
];