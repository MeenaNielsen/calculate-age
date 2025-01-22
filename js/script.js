"use strict";


//birthyear

let birthdate = prompt(`What is your birth year?`);
const  birthYear =parseInt(`${birthdate}`);
console.log(`${birthYear}`)
/* current year */
const date = new Date();
let currentYear = date.getFullYear();
console.log(`${currentYear}`);

//calculate the current age

let calculatedAge=0;
	calculatedAge =currentYear-birthYear;
	
	console.log(`${calculatedAge}`);
	/* let currentYear= new Date(document.getElementById("currentAge").value); */
/* 	presentParseAge = parseInt(presentAge);
	console.log(`${presentParseAge}`) */
	const calAgeInnerHtml =document.getElementById("currentAge").innerHTML = calculatedAge;

	/* document.querySelector("#calculatedAge").appendChild(h1); */

	


