_____________________
OSUNO (version 3.0.1)
_____________________
Written by: Hoang Khuong Tang, Sophia Bouck, Matthew Wells, and Jaaron Green

ABOUT:
Our purpose is to develop a new major exploration experience for Oregon State University’s  College of Engineering. Our goal is to build upon and expand the resources already available to COE students via Oregon State University’s website.
The team’s vision is to produce a game similar to Uno that provides major information in a unique way. Players will have in their hands major and class cards. Major cards will play as “wild” cards and class cards as “regular” Uno cards, where a player can put down a class card if it is a class that is taken by the current major. These cards will provide detailed information on each respective card that can be highlighted and examined by the students as they play.

GETTING STARTED:
This project has both a client and a server. In order for the game to properly run both need to be running...

Inside the root directory run:
npm install

Inside the client directory run:
npm install
npm run build

To launch the project start both the server and the client simultaneously:
npm run start

Open two tabs, http://localhost:8080, to start the game.


_____________________
CHANGELOG
_____________________

Version (3.0.1) - 5/30/24:
• Assets for 14 CoE majors are now included 
• 4 majors and their associated courses will be present at a time per OSUNO session
• Card sizes were made uniform
• Removed Bee Movie Script
• Removed the "End Turn & Draw" button for players if it is not currently their turn
• Added links to the "Additional Resources" tab
• Added tier-1 courses 
• Changed all .jpg images to .png for consistency
• Trimmed some major descriptions and added some course descriptions

Version (3.0.0) - First Release - 5/26/24:
• Game logic was implemented 
• Tested using limited number of courses and majors
