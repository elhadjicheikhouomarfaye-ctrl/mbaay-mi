const annonces = [
	{ title: 'Semences de mil', desc: 'Semences locales de qualité pour la prochaine saison.', img: 'images/mil.png' },
	{ title: 'Fertilisant organique', desc: 'Sacs de 20kg, idéal pour petites parcelles.', img: 'images/fer.png' },
	{ title: 'Location de tracteur', desc: 'Service disponible par journée avec chauffeur.', img: 'images/location.png' },
	{ title: 'Outils agricoles', desc: 'Lot d\'outils pour petit exploitant.', img: 'images/outils.png' },
	{ title: 'Récolte de maïs', desc: 'Maïs sec, livraison possible.', img: 'images/mais.png' },
	{ title: 'Plants de tomate', desc: 'Variétés résistantes aux maladies.', img: 'images/tomate.png' }
];

const grid = document.getElementById('liste');
annonces.forEach(a => {
	const card = document.createElement('a');
	card.className = 'annonce-card';
	card.href = 'annonces.html';
	card.innerHTML = `
		<img src="${a.img}" alt="${a.title}">
		<h3>${a.title}</h3>
		<p>${a.desc}</p>
	`;
	grid.appendChild(card);
});