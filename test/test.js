const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function() {

	// #1 (la palabra Programar, NO tenia mayuscula incial)
	it('Si la palabra termina con "ar", se le quitan esas dos letras', function() {
		const translation = platzom("Programar")
		expect(translation).to.equal("Program")
	})

	// #2 (La palabra Zorro no tenia mayuscula inicial)
	it('Si la palabra inicia con Z, se le añade al final "pe"', function() {
		const translation = platzom("Zorro")
		const translation2 = platzom("Zarpar")

		expect(translation).to.equal("Zorrope")
		expect(translation2).to.equal("Zarppe")
	})

	// #3 la palabra: Abece-dario  que es la palabra esperada, NO tenia mayuscula inicial: abece-dario
	it("Si la palabra traducida tiene 10 o mas letras, se debe separar con un guion en  medio", function() {
		const translation = platzom("Abecedario")
		expect(translation).to.equal("Abece-dario")
	})
	
	// #4 ( en la palabra sometemos antes tenia mayuscula incial:  Sometemos)
	it("por ultimo, si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayusculas y minusculas", function() {
		const translation = platzom("sometemos")
		expect(translation).to.equal("SoMeTeMoS")
	})

})