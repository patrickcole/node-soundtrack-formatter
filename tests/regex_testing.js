let input =`00:00 Intro
00:40 Intro 2
01:16 Title
01:37 Boss Select
02:34 Dive Man
04:00 Drill Man
05:30 Toad Man
06:39 Bright Man
07:49 Pharaoh Man
09:03 Ring Man
10:14 Dust Man
11:22 Skull Man
12:55 Boss
13:27 Beat Boss
13:31 Get Weapon
13:52 Get Adapter
13:57 Game Over
14:00 Password
14:30 Cossack's Castle
14:40 Cossack Stage 1-2
15:47 Cossack Stage 3-4
17:43 Wily's Castle
17:49 Wily Stage 1-2
19:16 Wily Stage 3-4
20:52 Final Boss
21:26 Beat Final Boss
21:36 Ending
23:19 Credits

Mega Man 4, known in Japan as Rockman 4 Aratanaru Yabō!! (ロックマン4 新たなる野望!! Rokkuman Fō Aratanaru Yabō!!, lit. "Rockman 4: A New Ambition!!"), is a platform game developed by Capcom for the Nintendo Entertainment System. It is the fourth game in the original Mega Man series and was originally released in Japan on December 6, 1991. The game was localized in North America the following January, and in Europe in August 1993.

The game's story takes place after the third defeat and supposed death of Dr. Wily, and features the Earth coming under threat from a mysterious scientist named Dr. Cossack and his eight "Robot Masters". Fearing the worst, Dr. Light sends Mega Man to save the world once again. Mega Man 4 carries on the same action and platforming gameplay as the first three games, in which the player completes a series of stages in any order and adds the weapon of each stage's boss to Mega Man's arsenal. One notable added feature is the "New Mega Buster" (often shortened to "Mega Buster"), an upgraded arm cannon that lets the player charge a regular shot into a much more powerful blast. The development team was mindful that this innovation would change the overall feel of the game.

Despite Mega Man 4 receiving positive critical reviews during its early 1990s release, the game is widely regarded today to represent a downward shift from the quality of the first three games in the series. The Mega Buster itself has been considered an overused mechanic by several sources. Mega Man 4 was re-released on the Japanese PlayStation, PlayStation Network, and mobile phones; the North American Mega Man Anniversary Collection; and worldwide on the Virtual Console for 3 Nintendo systems (Wii, Nintendo 3DS and Wii U).

The musical score for Mega Man 4 was composed by Minae Fujii, credited as "Ojalin", while the sound programming and sound effects were handled by Yasuaki Fujita, credited as "Bun Bun", who had composed the soundtrack for Mega Man 3 the previous year.

Mega Man 4 has received mostly positive critical reviews. Reviews contemporary with the game's release by the United States magazine Nintendo Power and the United Kingdom publications Nintendo Magazine System and Total! all found Mega Man 4 to have high quality graphics, sound, and gameplay.

However, they also noted very little improvement over previous entries in the series. GamePro was satisfied with the lack of changes. "Mega Man 4 continues the tradition — crazed robot baddies, good character graphics, great background art and warped, mechanical music," the reviewer said. "When you have a good game, why make radical changes? Capcom sticks to the blueprints in Mega Man 4 — guaranteeing happiness for Mega Man fans everywhere."

Numerous video game journalists and enthusiasts including Thomas, Craig Skistimas of ScrewAttack, GameSpot editors Christian Nutt and Justin Speer, and 1UP.com's Jeremy Parish, refer to the fourth installment as a turning point for the quality of titles in the Mega Man series. Nutt and Speer admitted that the series was beginning to deteriorate with this game, likely due to the growing reputation of the more powerful Super Nintendo Entertainment System at the time of its release. Parrish proclaimed, "Here's where the series starts to go off the rails a bit -- the Dr. Wily fake out was silly, the music was terrible, the bosses and weapons were uninspired, and the ability to charge up the Mega Buster is often cited as a game-breaking innovation." Thomas identified the chargeable Mega Buster as disrupting the balance of the game and rendering many of the Master Weapons useless, one of the concepts that set the Mega Man games apart from other action-platformers.

Mega Man 4 was re-released for the PlayStation as part of the Rockman Complete Works series in 1999. This version of the game features a special "navi mode" that guides players through each level and has arranged music remixes.`;

let lines = input.split(`\n`);
lines = lines.reverse();

for ( let i = 0; i < lines.length; i++ ) {

  let line = lines[i];
  let digitsFollowedByColon = /\d{1,2}[\:]\d{1,2}/.exec(line);
  let alphaChars = /[a-zA-Z]/.exec(line);

  if ( digitsFollowedByColon && alphaChars ){
    console.log(digitsFollowedByColon);
    console.log(alphaChars);
    console.log('--------------');
  }
}
