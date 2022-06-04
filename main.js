
getMetaData = async () => {
	
	let url = document.getElementById('input-search').value
	
	let metadata = await fetch('https://nft.babyswap.shop/55474.json')
	.then(response => response.json())
	.then(data = console.log(data));
}

cloudMeta = async () => {
	
	let url = document.getElementById('input-search').value
	const params { theUrl: url }
	const metadata = await Moralis.Cloud.run("fetchJSON", params);
	console.log(metadata);
	
	
}
	
	
