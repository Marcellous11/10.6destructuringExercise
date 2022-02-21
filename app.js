//  Object Destructuring 1
//  - 8
//  - 1846

//  Object Destructuring 2
//  - {yearNepturnDiscovered:1846, yearMarsDiscovered: 1659}

//  Object Destructuring 3
//  - Your name is Alejandro and you like purple
//  - Your name is Melissa and you like green
//  - Your name is undefined and you like green

//  array Destructuring 1
//  - Maya
//  - Marisa
//  - Chi

//  array Destructuring 2
//  - "Raindropd on roses"
//  - "Whiskers"
//  - ["Brighter copper kettles","warm woolen mittens","Brown paper packages tied up with a string"]

//  array  Destructuring 3
//  - [10,30,20]


// ____________________________________________________________________________

var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
//   var a = obj.numbers.a;
//   var b = obj.numbers.b;

  /* Write an ES2015 Version */
 
  [arr[0], arr[1]] = [arr[1],arr[0]]
//   ______________________________________________________________________________

const raceResults = ([first,second,third,...rest]) =>{ 
    return {
        first,
        second,
        third,
        rest
    }

}