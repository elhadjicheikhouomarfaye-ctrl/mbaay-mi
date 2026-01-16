console.log('Accueil chargé');

// Simple horizontal sliders for partners sections
document.addEventListener('DOMContentLoaded', function(){
	document.querySelectorAll('.partners-row').forEach(function(row){
		var viewport = row.querySelector('.partners-viewport');
		var prev = row.querySelector('.slider-btn.prev');
		var next = row.querySelector('.slider-btn.next');

		if(!viewport || !prev || !next) return;

		var scrollStep = function(){
			return Math.max( viewport.clientWidth * 0.8, 200 );
		};

		prev.addEventListener('click', function(){
			viewport.scrollBy({ left: -scrollStep(), behavior: 'smooth' });
		});
		next.addEventListener('click', function(){
			viewport.scrollBy({ left: scrollStep(), behavior: 'smooth' });
		});
	});
});