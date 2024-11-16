function visitLink(path) {
	let clicks=localStorage.getItem(path);
	if(!clicks){
		clicks=0;
	}
	clicks++;
	localStorage.setItem(path,clicks);
}

function viewResults() {
	const links=['Page1','Page2','Page3'];
	const resultsList=document.createElement('ul');
	links.forEach((link) => {
		const clicks=localStorage.getItem(link);
		const listItem=document.createElement('li');
		listItem.innerText=`You Visited${link}: ${clicks} time(s)`;
		resultsList.appendChild(listItem);
	});
	document.body.appendChild(resultsList);
	localStorage.clear();
}
