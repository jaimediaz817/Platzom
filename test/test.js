const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function() {

	it('Si la palabra termina con "ar", se le quitan esas dos letras', function() {
		const translation = platzom("Programar")
		expect(translation).to.equal("program")
	})

	it('Si la palabra inicia con Z, se le añade al final "pe"', function() {
		const translation = platzom("Zorro")
		const translation2 = platzom("Zarpar")

		expect(translation).to.equal("Zorrope")
		expect(translation2).to.equal("Zarppe")
	})

	it("Si la palabra traducida tiene 10 o mas letras, se debe separar con un guion en  medio", function() {
		const translation = platzom("Abecedario")
		expect(translation).to.equal("abece-dario")
	})
	
	it("por ultimo, si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayusculas y minusculas", function() {
		const translation = platzom("Sometemos")
		expect(translation).to.equal("SoMeTeMoS")
	})

})