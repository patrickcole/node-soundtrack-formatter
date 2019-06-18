const formatter = require('../utils/format');

let duration_example = "PT1H19M24S";

let duration_converted = formatter.formatDuration(duration_example);
let durationInSeconds = formatter.formatTimestamp(duration_converted);

let currentDurationInSeconds = durationInSeconds;

//let input = `*I do not own the rights to the music.\n-This is the track list in order of song played.\n-The times are from when the annotations take in (so they may be off by a few seconds).\n-Recommendations and comments are more than welcome.\n\n1-Bumper to Bumper 0:00:00\n2-The Morning Commute 0:7:10.7\n3-Wheels of Progress 0:11:53.8\n4-Deserted 0:17:54.1\n5-Metropolis 0:23:05.2\n6-ElectriCITY 0:28:10.0\n7-Floating Population 0:33:22.3\n8-Chain Reaction 0:38:35.4\n9-Rush Hour 0:44:53.8\n10-By The Bay 0:50:14.6\n11-The New Hood 0:56:20.6\n12-No Gridlock 1:01:37.4\n13-Re-Development 1:09:00.0\n14-Bohemian Street Jam 1:14:31.0\n15-Urban Underground 1:20:12.5\n16-Street Sweeper 1:25:18.6\n17-Crosswalk Talk 1:30:17.3\n18-Tarmack 1:35:21.1\n19-NightOwl 1:40:53.5\n20-EpiCenter 1:46:12.3\n21-Gritty City 1:52:34.6\n22-Zone System 1:58:08.1\n23-Transit Angst 2:01:42.6\n24-Landfill 2:06:23.9\n25-Oasis 2:11:40.2\n\nRegion music - \n26-Area 52 2:17:45.3\n27-Big Deep 2:25:22.3\n28-Arctica 2:28:15.9\n29-Above The Clouds 2:36:28.3\n30-Shape Shifter 2:40:22.1\n31-Terrain 2:47:57.3\n32-Without Form 2:53:29.4\n33-Taking Shape 2:59:59.6\n34-Primordial Dream 3:04:19.9\n35-Parallel View 3:09:40.9`;

let input = `Doom OST (Sound Canvas SC-155)\nComposed by Robert Prince.\n\n0:00 Intro\n0:08 At Doom's Gate\n1:47 The Imp's Song\n4:25 Dark Halls\n9:00 Kitchen Ace (And Taking Names)\n11:53 Suspense\n14:40 On The Hunt\n16:07 Demons On The Prey\n18:41 Sign Of Evil\n21:16 Hiding The Secrets\n23:37 Intermission From DOOM\n27:00 I Sawed The Demons\n29:36 The Demons From Adrian's Pen\n32:11 They're Going To Get You\n36:26 Sinister\n39:26 Waltz of the Demons\n41:14 Nobody Told Me About id\n44:12 Untitled\n45:51 Victory\n49:06 Donna To The Rescue\n51:06 Deep Into The Code\n53:11 Facing The Spider\n54:51 Bunny\n55:56 Un14\n57:03 Un17\n58:23 Un18\n59:24 We Die Young\n1:01:03 Man In The Box\n1:03:13 Dead and Bloated\n1:05:59 Sex Type Thing\n1:07:41 Un30\n1:09:01 Rusty Cage\n1:09:56 Rooster\n1:11:27 JunkHead\n1:13:20 Dirt\n1:15:43 God Smack\n1:17:55 Un51`;

tracks = formatter.formatTracks( input, currentDurationInSeconds );

console.log( tracks );