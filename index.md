<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css">
	<meta name="viewport" content="width = device-width, initial-scale = 1">
	<link rel="stylesheet" type="text/css" href="piano.css">
	<link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet">
	<link rel="shortcut icon" href="./Assets/favicon.ico" type="image/x-icon"/>
	<title>Divij's Piano</title>
</head>

<body>
	<div id="header">
		<div id='nav-bar'>
			<div id="nav-bar-logo">
				<img src="./Assets/vinyl.jpg" alt="Music">
			</div>
			<span id="nav-bar-text">
				<span class="blur">
					Gera's
				</span>
				<span class="bold">
					Studio
				</span>
			</span>
		</div>
		<div id="nav-bar-heading">
			<h1>
				Welcome to Divij's Virtual Piano! 🎹
			</h1>
		</div>
	</div>

	<div id="piano">
		 <div data-note = "C4" class="key white"><span class='text bt'>Q</span></div>
		 <div data-note = "Db4" class="key black"><span class='text wt'>2</span></div>
		 <div data-note = "D4" class="key white"><span class='text bt'>W</span></div>
		 <div data-note = "Eb4" class="key black"><span class='text wt'>3</span></div>
		 <div data-note = "E4" class="key white"><span class='text bt'>E</span></div>
		 <div data-note = "F4" class="key white"><span class='text bt'>R</span></div>
		 <div data-note = "Gb4" class="key black"><span class='text wt'>5</span></div>
		 <div data-note = "G4" class="key white"><span class='text bt'>T</span></div>
		 <div data-note = "Ab4" class="key black"><span class='text wt'>6</span></div>
		 <div data-note = "A4" class="key white"><span class='text bt'>Y</span></div>
		 <div data-note = "Bb4" class="key black"><span class='text wt'>7</span></div>
		 <div data-note = "B4" class="key white"><span class='text bt'>U</span></div>
		 <div data-note = "C5" class="key white"><span class='text bt'>I</span></div>
		 <div data-note = "Db5" class="key black"><span class='text wt'>9</span></div>
		 <div data-note = "D5" class="key white"><span class='text bt'>O</span></div>
		 <div data-note = "Eb5" class="key black"><span class='text wt'>0</span></div>
		 <div data-note = "E5" class="key white"><span class='text bt'>P</span></div>



	</div>

	<audio id="C4" src="./sounds/C4.mp3"></audio>
	<audio id="Db4" src="./sounds/Db4.mp3"></audio>
	<audio id="D4" src="./sounds/D4.mp3"></audio>
	<audio id="Eb4" src="./sounds/Eb4.mp3"></audio>
	<audio id="E4" src="./sounds/E4.mp3"></audio>
	<audio id="F4" src="./sounds/F4.mp3"></audio>
	<audio id="Gb4" src="./sounds/Gb4.mp3"></audio>
	<audio id="G4" src="./sounds/G4.mp3"></audio>
	<audio id="Ab4" src="./sounds/Ab4.mp3"></audio>
	<audio id="A4" src="./sounds/A4.mp3"></audio>
	<audio id="Bb4" src="./sounds/Bb4.mp3"></audio>
	<audio id="B4" src="./sounds/B4.mp3"></audio>
	<audio id="C5" src="./sounds/C5.mp3"></audio>
	<audio id="Db5" src="./sounds/Db5.mp3"></audio>
	<audio id="D5" src="./sounds/D5.mp3"></audio>
	<audio id="Eb5" src="./sounds/Eb5.mp3"></audio>
	<audio id="E5" src="./sounds/E5.mp3"></audio>


	<div id="about-me">
		Built by Divij Gera, Junior at Netaji Subhas University of Technology
	</div>

	<script type="text/javascript" src="piano.js"></script>
</body>
</html>
