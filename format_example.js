const formatter = require('./format');

let testDuration = "01:19:23";
let testTracks = `Doom OST (Sound Canvas SC-155)
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


let durationInSeconds = formatter.formatDuration(testDuration);
let tracks = formatter.formatTracks(testTracks, durationInSeconds);

console.log( durationInSeconds - 11380 );

console.log(durationInSeconds);
console.log(tracks);