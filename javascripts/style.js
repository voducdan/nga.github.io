document.addEventListener('DOMContentLoaded',function(){
	var pinwheel = document.querySelector('.windmill1');
	window.addEventListener('load',function(){
		pinwheel.classList.add('rotate');
	})
	var colors = [
	'#845EC2',
	'#D65DB1',
	'#FF6F91',
	'#FF9671',
	'#FFC75F',
	'#F9F871',
	'#845EC2',
	'#55D6BE',
	'#ACFCD9',
	'#ED1C24',
	'#002F54',
	'#86B709',
	'#557503'
	]
	var body = document.querySelector('body');
	for (var i = 0; i <300; i++) {
		var star = document.createElement('div');
		star.className = 'star';
		body.appendChild(star);
		var dx = Math.random()*window.innerWidth + 1;
		var dy = Math.random()*window.innerHeight + 1;
		star.style.top = dy + 'px';
		star.style.left = dx + 'px';
		var color = Math.floor(Math.random()*colors.length);
		star.style.backgroundColor = colors[color];
		star.classList.add('star-flicker');
	}
	var starFlicker = document.querySelectorAll('.star');
	starFlicker.forEach(function(x){
		var delay = Math.floor(Math.random()*10);
		x.style.animationDelay = delay + 's';
	});
	var timer = 3000;
	var bolides = setInterval(function(){
		var bolide = document.createElement('div');
		bolide.id = 'meteor';
		var x = Math.random()*window.innerWidth + 1;
		var y = Math.random()*window.innerHeight/2 + 1;
		bolide.style.top = y + 'px';
		bolide.style.left = x + 'px';
		body.appendChild(bolide);
		setTimeout(function(){
			body.removeChild(bolide);
		},250);
	},timer);
},false)