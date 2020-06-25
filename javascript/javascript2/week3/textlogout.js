const buttton = document.getElementById('logtext');

const logout = () => {
	console.log('called after 2.5 seconds');
};

const Click = () => {
	setTimeout(logout, 2500);
};

buttton.addEventListener('click', Click);
