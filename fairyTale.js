// 1. Create a variable named `place` and set the value to a string that says whatever place you want.
let place = "NYC";
// 2. Create a variable named `creatureName` and set the value to a string that says whatever name you want to give the creature.
let creatureName ="satyr";
// 3. Create a variable named `color` and set the value to a string that says whatever color you want.
let color ="red";
// 4. Create a variable named `color2` and set the value to a string that says a different color you want.
let color2 ="blue";
// 5. Create a variable named `emotion` and set the value to a string that says whatever emotion you want.
let emotion ="happy";
// 6. Create a variable named `character` and set the value to a string that says whatever name for a character you want.
let character ="kermit";
// 7. Create a variable named `number` and set the value to a number greater than 1.
let number ="42";
// 8. Create a variable named `item` and set the value to a string that says whatever item/thing you want.
let item ="table";
// 9. Create a variable named `item2` and set the value to a string that says a different item/thing you want.
let item2 ="chair";
// 10. Create a variable named `verb` and set the value to a string that says whatever verb you want.
let verb ="ran";
// 11. Create a variable named `adverb` and set the value to a string that says whatever adverb you want.
let adverb ="run";
// 12. Create a variable named `number2` and set the value to a number greater than 1.
let number2 ="13";





// 14. Replace the null values with the appropriate variable you created above.
// - Afterwards, run your code and press the button to see your story ✨

document.querySelector("button").addEventListener("click", function() {
    document.querySelector(".place").innerHTML = "NYC";
    document.querySelector(".creature-name").innerHTML = "satyr";
    document.querySelector(".color").innerHTML = "red";
    document.querySelector(".color-2").innerHTML = "blue";
    document.querySelector(".emotion").innerHTML = "happy";
    document.querySelector(".character").innerHTML = "kermit";
    document.querySelector(".creature-name-again").innerHTML = null;
    document.querySelector(".number").innerHTML = "42";
    document.querySelector(".item").innerHTML = "table";
    document.querySelector(".character-again").innerHTML = null;
    document.querySelector(".item-2").innerHTML = "chair";
    document.querySelector(".verb").innerHTML = "ran";
    document.querySelector(".adverb").innerHTML = "run";
    document.querySelector(".number-2").innerHTML = "13";
    document.querySelector(".story-container").style = "display:block";
});
