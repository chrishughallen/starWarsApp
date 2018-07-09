"use strict";

function getCharacterFromApi(){


var characterBasicInfoAjaxRequest = $.ajax('https://swapi.co/api/people')

characterBasicInfoAjaxRequest.done(function(data){
var charactersArray = data.results
var randomCharacter = Math.floor(Math.random()*charactersArray.length)
var character = charactersArray[randomCharacter]
var characterSpecies = character.species.join('')

displayCharacterData(character)

})



}

function displayCharacterData(char){
	$('#characterInfo').html('')
	var characterInfo = ""
	characterInfo += "<u><h1> " + char.name + "</h1></u>"
	characterInfo += "<h5>Birth Year: " + char.birth_year + "</h5>" 
	characterInfo += "<h5>Eye Color: " + char.eye_color + "</h5>"
	characterInfo += "<h5>Height: " + char.height + "cm </h5>" 
	characterInfo += "<h5>Mass: " + char.mass + "kg</h5>" 
	characterInfo += "<h5>Skin Color: " + char.skin_color + "</h5>" 

	$('#characterInfo').append(characterInfo)
}

$('#newCharacterButton').click(getCharacterFromApi)


