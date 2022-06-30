console.log("hello world")

function nameTransform(name) {
	var lowerName = name.toLowerCase();
	var firstLetter = lowerName[0];
	var firstCapitalLetter = firstLetter.toUpperCase();
	var nameWithoutFirstLetter = lowerName.substring(1, lowerName.length);
	var correctName = firstCapitalLetter + nameWithoutFirstLetter;
	return correctName;
}

function checkAge(age) {
    if(age < 0) { 
            return false;
        } else { 
            return true;
        }
    }

function repeatSentence(sentence, times) {
    for(var i = 0; i < times; i = i + 1) { 
            console.log(i + " " + sentence);
        } 
    }

    function listTransform(listofnames) {
        var transformedNames = [];
        for(var i = 0; i < listofnames.length; i = i + 1) { 
                transformedNames.push(nameTransform(listofnames[i]));
            } 
        return transformedNames;
        }
        
function applyTransform(listOfNames, transformFunction) {
	var transformedNames = [];
    for(var i = 0; i < listOfNames.length; i = i + 1) { 
    	var transformedNameI = transformFunction(listOfNames[i]);
    		transformedNames.push(transformedNameI);
    	} 
    	return transformedNames;
        }
        
        function upperName(name) {
            return name.toUpperCase();
        }

        function createListItem(ingredient, id) {
            var htmlString = '<li id="ingredient-' + id + '" class="li-ingredient">'
                + ingredient + '</li>';
                return htmlString;
            }
            
// list of ingredients

function createListItem(ingredient, id) {
    var htmlString = '<li id="ingredient-' + id + '" class="li-ingredient">'
        + ingredient + '</li>';
        return htmlString;
    }
    
    function createList(listOfIngredients) {
        var htmlString = '';
        for(var i = 0; i < listOfIngredients.length; i = i + 1) {
            htmlString = htmlString + createListItem(listOfIngredients[i], i);
        }
        return htmlString;
    }
    
    var listOfIngredients = ["apple", "orange", "pear", "nutella"];
    
    function populateList() {
        var ulElement = document.getElementById('ingredients');
        ulElement.innerHTML = createList(listOfIngredients);
    }
    
                
// Exercise 03


// 01 

function secondHalf(string) {
    if (string.length % 2 == 0) {
      return string.substring(string.length / 2);
    } else {
        return string.substring((string.length-1)/2);
    }
    return string;
  }

// 02

function squareRoot(number) {
	var squareRoot = Math.sqrt(number);
	return squareRoot;
}


// 03

// 04

// 05

// 06

function createListLang(lang, id) {
    var htmlString = '<li id="lang-' + id + '" class="li-lang">'
        + lang + '</li>';
        return htmlString;
    }
    
    function createList2(listOfLanguages) {
        var htmlString = '';
        for(var i = 0; i < listOfLanguages.length; i = i + 1) {
            htmlString = htmlString + createListLang(listOfLanguages[i], i);
        }
        return htmlString;
    }
    
    var listOfLanguages = ["apple", "orange", "pear", "nutella"];
    
    function populateList2() {
        var ulElement = document.getElementById('lang');
        ulElement.innerHTML = createList2(listOfLanguages);
    }
    