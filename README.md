# Platzom

platzom es un idioma inventado para el [curso de fundamento de javascript](https://platzi.com/clases/fundamentos-javascript/).


## Descripcion del idioma

- Si la palabra termina con "ar", se le quitan esas dos letras.
- Si la palabra inicia con Z, se le añade al final "pe".
- Si la palabra traducida tiene 10 o mas letras, se debe separar con un guion en  medio.
 - por ultimo, si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayusculas y minusculas. 

## Instalacion 

```
npm install platzom
```

## Uso

```
import platzom from "platzom"

console.log(platzom("Programar"))
console.log(platzom("Zorro"))
console.log(platzom("Zarpar"))
console.log(platzom("Abecedario"))
console.log(platzom("sometemos"))
```

## Creditos

- [manuel montaño](https://github.com/JManu21)

## Licencia

[MIT](https://opensource.org/licenses/MIT)