document.getElementById("battleSubmit").addEventListener("click", 
function(event) 
{
	event.preventDefault();
	var gender = "male";
	if(document.getElementById("heroMale").checked)
		gender = "male";
	else if(document.getElementById("heroFemale").checked)
		gender = "female";

	const heroName = document.getElementById("heroName").value;
	if (heroName === "")
		return;
	console.log("Generating boss fight for " + heroName);
	
	const heroSrc = "https://avatars.dicebear.com/v2/" + gender + "/:" + heroName + ".svg";
	const bossSrc = "https://robohash.org/" + new Date().getTime() + ".png";
	const adjectives = ["Atrocious", "Baneful", "Calamitous", "Destroyer", "Earth-shatterer", "Flamebearer", "Great", "Hideous", "Insipid",
		"Juggernaut", "Kraken", "Loath", "Malicious", "Nefarious", "Onerous", "Pernicious", "Quasi-godlike", "Racacious", "Slayer of Heroes",
		"Terrible", "Ungodly", "Voracious", "Warlike", "Xterminator", "Youngling-slayer", "Zero-er of Champions", "Oddly Named"];

	var bossName = "";
	//Url for generating boss name
	const url = "https://uinames.com/api/";
	fetch(url)
		.then(function(response) {
			return response.json();
		})
		.then(function(json) 
		{
      			let results = "";
			bossName = json.surname;
			var adjectiveIndex = bossName.charCodeAt(0) - 65;
			if(adjectiveIndex < 0 || adjectiveIndex > 25)
				adjectiveIndex = 26;
			bossName = bossName + " the " + adjectives[adjectiveIndex];

			results += "<div class=\"item-1\">";
			results += "<img src=\"" + heroSrc + "\" width=\"200\" height=\"200\"/><br/>";
			results += "<p>" + heroName + ", Lvl 100 Hero</p>";
			results += "</div>";

			results += "<div class=\"item-2\">";
			results += "<img src=\"/images/versus.jpg\" width=\"200\" height=\"200\"/><br/>";
			results += "</div>";

			results += "<div class=\"item-3\">";
			results += "<img src=\"" + bossSrc + "\" width=\"200\" height=\"200\"/>";
			results += "<p>" + bossName + ", Lvl 100 Boss</p>";	
			results += "</div>";	
			document.getElementById("battleStats").innerHTML = results;

			document.getElementById("meme").innerHTML = "<img src=\"/images/legendary.jpg\"/>";
	
			//console.log(json);
		});
});
