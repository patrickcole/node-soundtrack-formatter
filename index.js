const titleBeforeTime = false;

let input = ``;

let titleAfterTimeExample = `Doom OST (Sound Canvas SC-155)
Composed by Robert Prince.

<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=0s">0:00</a> Intro
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=8s">0:08</a> At Doom's Gate
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=107s">1:47</a> The Imp's Song
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=265s">4:25</a> Dark Halls
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=540s">9:00</a> Kitchen Ace (And Taking Names)
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=713s">11:53</a> Suspense
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=880s">14:40</a> On The Hunt
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=967s">16:07</a> Demons On The Prey
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=1121s">18:41</a> Sign Of Evil
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=1276s">21:16</a> Hiding The Secrets
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=1417s">23:37</a> Intermission From DOOM
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=1620s">27:00</a> I Sawed The Demons
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=1776s">29:36</a> The Demons From Adrian's Pen
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=1931s">32:11</a> They're Going To Get You
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=2186s">36:26</a> Sinister
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=2366s">39:26</a> Waltz of the Demons
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=2474s">41:14</a> Nobody Told Me About id
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=2652s">44:12</a> Untitled
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=2751s">45:51</a> Victory
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=2946s">49:06</a> Donna To The Rescue
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=3066s">51:06</a> Deep Into The Code
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=3191s">53:11</a> Facing The Spider
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=3291s">54:51</a> Bunny
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=3356s">55:56</a> Un14
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=3423s">57:03</a> Un17
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=3503s">58:23</a> Un18
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=3564s">59:24</a> We Die Young
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=3663s">1:01:03</a> Man In The Box
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=3793s">1:03:13</a> Dead and Bloated
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=3959s">1:05:59</a> Sex Type Thing
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=4061s">1:07:41</a> Un30
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=4141s">1:09:01</a> Rusty Cage
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=4196s">1:09:56</a> Rooster
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=4287s">1:11:27</a> JunkHead
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=4400s">1:13:20</a> Dirt
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=4543s">1:15:43</a> God Smack
<a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=0gEkNVq1ct0&amp;list=PLHp5n26L7H0ialJ83UXuyRj-uTa6KH42e&amp;index=1&amp;t=4675s">1:17:55</a> Un51`;

let titleBeforeTimeExample = `
*I do not own the rights to the music.
-This is the track list in order of song played.
-The times are from when the annotations take in (so they may be off by a few seconds).
-Recommendations and comments are more than welcome.

1-Bumper to Bumper <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=0s">0:00:00</a>
2-The Morning Commute <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=430s">0:7:10</a>.7
3-Wheels of Progress <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=713s">0:11:53</a>.8
4-Deserted <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=1074s">0:17:54</a>.1
5-Metropolis <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=1385s">0:23:05</a>.2
6-ElectriCITY <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=1690s">0:28:10</a>.0
7-Floating Population <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=2002s">0:33:22</a>.3
8-Chain Reaction <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=2315s">0:38:35</a>.4
9-Rush Hour <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=2693s">0:44:53</a>.8
10-By The Bay <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=3014s">0:50:14</a>.6
11-The New Hood <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=3380s">0:56:20</a>.6
12-No Gridlock <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=3697s">1:01:37</a>.4
13-Re-Development <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=4140s">1:09:00</a>.0
14-Bohemian Street Jam <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=4471s">1:14:31</a>.0
15-Urban Underground <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=4812s">1:20:12</a>.5
16-Street Sweeper <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=5118s">1:25:18</a>.6
17-Crosswalk Talk <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=5417s">1:30:17</a>.3
18-Tarmack <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=5721s">1:35:21</a>.1
19-NightOwl <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=6053s">1:40:53</a>.5
20-EpiCenter <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=6372s">1:46:12</a>.3
21-Gritty City <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=6754s">1:52:34</a>.6
22-Zone System <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=7088s">1:58:08</a>.1
23-Transit Angst <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=7302s">2:01:42</a>.6
24-Landfill <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=7583s">2:06:23</a>.9
25-Oasis <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=7900s">2:11:40</a>.2

Region music - 
26-Area 52 <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=8265s">2:17:45</a>.3
27-Big Deep <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=8722s">2:25:22</a>.3
28-Arctica <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=8895s">2:28:15</a>.9
29-Above The Clouds <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=9388s">2:36:28</a>.3
30-Shape Shifter <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=9622s">2:40:22</a>.1
31-Terrain <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=10077s">2:47:57</a>.3
32-Without Form <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=10409s">2:53:29</a>.4
33-Taking Shape <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=10799s">2:59:59</a>.6
34-Primordial Dream <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=11059s">3:04:19</a>.9
35-Parallel View <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=PSv37HwwojU&amp;list=PLHp5n26L7H0iJHp_7-VIgdftsSQI1nw4f&amp;index=5&amp;t=11380s">3:09:40</a>.9
`;

let lines;

if ( titleBeforeTime ) {
  lines = titleBeforeTimeExample.split(`\n`);
} else {
  lines = titleAfterTimeExample.split(`\n`);
}

let tracks = [];
let prevValueSeconds = 0;

let hours = 1;
let minutes = 19;
let seconds = 23;

let totalHoursInSeconds = ((hours * 60) * 60);
let totalMinutesInSeconds = minutes * 60;

let totalDuration = totalHoursInSeconds + totalMinutesInSeconds + seconds;

prevValueSeconds = totalDuration;

let linesReversed = lines.reverse();

for ( let index = 0; index < linesReversed.length; index++ ){

  let thisLine = linesReversed[index];

  let tagStartIndex = -1;
  let title;
  if ( titleBeforeTime ){
    tagStartIndex = thisLine.indexOf(' <a class');
    title = thisLine.substr(0, tagStartIndex);
  } else {
    tagStartIndex = thisLine.indexOf(`</a>`);
    title = thisLine.substr((tagStartIndex + 5), thisLine.length);
  }
  
  //console.log( title );

  let timeStartIndex = thisLine.indexOf('&amp;t=');
  let startAt = thisLine.substr((timeStartIndex + 7), thisLine.length);
  let startAtSeconds = startAt.substr(0, startAt.indexOf('s">'));

 

  if ( title !== '' && startAtSeconds !== '' ){

    let trackInfo;

    if ( titleBeforeTime ){
      // a little regex help from:
      // https://stackoverflow.com/a/4607799:
      trackInfo = title.split(/-(.+)/);
    } else {
      trackInfo = [null, title];
    }
    

    let duration = parseInt(prevValueSeconds - startAtSeconds);
    prevValueSeconds = startAtSeconds;

    tracks.push({ title: trackInfo[1], playAt: parseInt(startAtSeconds), duration: duration });
  }
}

let reversedNewTracks = tracks.reverse();
/* if we need index added:
let tracksFinal = reversedNewTracks.map( (track, index) => {

  track.index = index;
  return track;
});
*/

console.log(JSON.stringify(reversedNewTracks));