
function platzom(str) {
	let salida = true
	let translation = str

  const length = translation.length;
	const reverse = (str) => str.split("").reverse().join("");

	function minMay(str) {
		const length = str.length
		let translation = ""
		let capitalize = true

		for (let i = 0; i < length; i++) {
			const char = str.charAt(i)
			translation += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize
		}
		return translation
	}

	if (str == reverse(str)) {
		salida = false
		return minMay(str)
  } 

  if (str.toLowerCase().endsWith("ar")) {
  			salida = false
				translation	= str.slice(0,-2)		
	} 

	if (translation.toLowerCase().startsWith("z")) {
					salida = false
					translation = translation + "pe"
	} 

	if (length >= 10) {
				salida = false
				const firstHalf = translation.slice(0, Math.round(length/2))
				const secondHalf =translation.slice(Math.round(length/2))
				translation = firstHalf +"-"+ secondHalf
	} 
	
	if(salida) {
		return console.log(`${str} no tiene traduccion`)
	}
	return translation
}