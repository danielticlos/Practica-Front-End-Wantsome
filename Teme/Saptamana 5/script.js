// 1. Scrieti o functie care verifica daca un input este sau nu de tip string.
// console.log(is_string('w3resource'));
// true
// console.log(is_string([1, 2, 4, 0]));
// false

// Rezolvare:

is_string = function(input) {
  if (Object.toString(input) === '[object String]')
    return true;
  else
    return false;   
    };
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0])); 

// 2. Scrieti o functie care verifica daca un string este gol sau nu.
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));
// true
// False
// Rezolvare:

is_Blank =  function(input) {
        if (input.length === 0)
        return true;
        else 
        return false;
      }
console.log(is_Blank(''));
console.log(is_Blank('abc'));

// 3. Scrieti o functie accepta ca input un string si il transforma intr-un array de cuvinte:
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]

// Rezolvare:

string_to_array = function (str) {
     return str.trim().split(" ");
};
console.log(string_to_array("Robin Singh"));

// 4. Scrieti o functie care transforma un string in forma abreviata:
// console.log(abbrev_name("Robin Singh"));
// "Robin S."

// Rezolvare:

Abbrev_name = function (str) {
    var split = str.trim().split(" ");
    if (split.length > 1) {
        return (split[0] + " " + split[1].charAt(0) + ".");
    }
    return split[0];
};2
console.log(abbrev_name("Robin Singh"));

// 5. Scrieti o functie care face prima litera a unui string sa fie de tip capital ( litera mare ):
// console.log(capitalize('js string exercises'));
// "Js string exercises"

// Rezolvare:
capitalize = function(str1){
  return str1.charAt(0).toUpperCase() + str1.slice(1);
}
    
 console.log(capitalize('js string exercises'));

// 6. Scrieti o functie care elimina un numar specificat de caractere pornind de la inceputul string-ului:
// console.log(truncate_string("Robin Singh",4));
// "Robi"

// Rezolvare:

truncate_string = function (str, length) {
  
    if ((str.constructor === String) && (length>0)) {
        return str.slice(0, length);
    }
};
console.log(truncate_string("Robin Singh",4));


// 7. Scrieti o functie care specifica daca caracterul de la o anumita pozitie specificata dintr-un string este litera mare sau nu:
// console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
// false

// Rezolvare:


// 8. Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string:
// console.log(insert('We are doing some exercises.','JavaScript ',18));
// "We are doing some exercises."
// "JavaScript We are doing some exercises."
// "We are doing some JavaScript exercises."

// Rezolvare:  

insert = function insert(main_string, ins_string, pos) {
   if(typeof(pos) == "undefined") {
    pos = 0;
  }
   if(typeof(ins_string) == "undefined") {
    ins_string = '';
  }
   return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
    }
console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));  

// 9. Scrieti o functie care elimina prima aparitie a unui string dintr-un alt string:
// console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
// "The quick brown fox jumps over lazy dog"

// Rezolvare:

function remove_first_occurrence(str, searchstr)       {
	var index = str.indexOf(searchstr);
	if (index === -1) {
		return str;
	}
	return str.slice(0, index) + str.slice(index + searchstr.length);
}
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));

// 10. Scrieti o functie care compara doua string-uri case-insensitive:
// console.log(compare_strings('abcd', 'AbcD'));
// true

// Rezolvare:
function compare_strings(str1, str2) {
  var areEqual = str1.toUpperCase() === str2.toUpperCase();
  return areEqual;
}
console.log(compare_strings('abcd', 'AbcD'));

// 11. Scrieti o functie care face ca primul caracter a unui string sa fie de tip uncapital:
// console.log(Uncapitalize('Js string exercises'));
// "js string exercises"

// Rezolvare:
 function Uncapitalize(str){
  return str.charAt(0).toLowerCase() + str.slice(1);
}
 console.log(Uncapitalize('Js string exercises'));

function is_Blank(input){
    input.length === 0;

}
console.log(is_Black(""));
console.log(is_Blank("abc"));