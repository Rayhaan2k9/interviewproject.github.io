function captureName() {
console.log(document.getElementById("name").value)
alert ('Hi ' + document.getElementById("name").value);
}

var img1images = {
    before: 'https://i.imgur.com/DpwkckU.jpg',
    after: 'https://i.imgur.com/foO4uWu.jpg'
};

var img2images = {
    before: 'https://i.imgur.com/dd6WEZu.jpg',
    after: 'https://i.imgur.com/A6KAOZz.jpg'
};

var img3images = {
    before: 'https://i.imgur.com/O2cjLB7.jpg',
    after: 'https://i.imgur.com/Mpnx3rP.jpg'
};


var img1 = document.getElementById("Yusuf-log");
var img2 = document.getElementById("Yusuf-field");
var img3 = document.getElementById("Zak-mosque");

function switchImage() {
	if (img1.src.match(img1images.before)) {
		img1.src = img1images.after; 
	}
	else {
		img1.src = img1images.before; 
	}
	}

	// function before1(){
	// 	img1.src='https://i.imgur.com/DpwkckU.jpg';
	// }

	// function after1(){
	// 	img1.src=''https://i.imgur.com/foO4uWu.jpg';
		
	// }
	
	
	function before2(){
		img2.src='https://i.imgur.com/dd6WEZu.jpg';
	}

	function after2(){
		img2.src='https://i.imgur.com/A6KAOZz.jpg';
		
	}

	
	function before3(){
		img3.src='https://i.imgur.com/O2cjLB7.jpg';
	}

	function after3(){
		img3.src='https://i.imgur.com/Mpnx3rP.jpg';
		
	}
	
	function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);

			 
