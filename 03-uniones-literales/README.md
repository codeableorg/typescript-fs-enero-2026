# 03 · Uniones y tipos literales

## El problema

A veces un valor no es de un solo tipo. Un identificador puede llegar como texto
o como número. Y a veces, al revés, un valor no puede ser cualquier texto, sino
solo unos pocos valores exactos: una talla es "sm", "md" o "lg", y nada más.
Para los dos casos TypeScript ofrece la misma herramienta: las uniones.

## Uniones

Una **unión** describe un valor que puede ser de un tipo **o** de otro. Se
escribe con `|`:

```ts
let id: string | number;
id = "abc-123"; // ok
id = 42;        // ok
id = true;      // Error: 'boolean' no es asignable a 'string | number'.
```

Mientras el tipo siga siendo la unión, TypeScript solo deja usar lo que es
**común** a todos sus miembros, porque todavía no sabe cuál de ellos es:

```ts
function imprimirId(id: string | number) {
  id.toUpperCase();
  //  Property 'toUpperCase' does not exist on type 'number'.
}
```

`toUpperCase` existe en `string` pero no en `number`, así que sobre la unión no
se permite. Para usarlo hay que **distinguir el caso** primero (más abajo).

## Tipos literales

Un **tipo literal** es un tipo cuyo único valor permitido es un valor exacto:

```ts
let talla: "md";
talla = "md"; // ok
talla = "lg"; // Error: '"lg"' no es asignable a '"md"'.
```

Por sí solos sirven de poco. Su fuerza aparece al combinarlos en una unión, para
expresar "uno de estos valores y ninguno más":

```ts
let talla: "sm" | "md" | "lg";
talla = "md"; // ok
talla = "xl"; // Error: '"xl"' no es asignable a '"sm" | "md" | "lg"'.
```

Esto es mucho más preciso que `string`: el editor sugiere las opciones válidas y
TypeScript rechaza cualquier otro texto.

## Distinguir el caso con `typeof`

Para usar lo específico de un miembro de la unión, primero se comprueba qué tipo
es. La forma más simple es `typeof`:

```ts
function describir(valor: string | number) {
  if (typeof valor === "string") {
    return valor.toUpperCase(); // acá `valor` es string
  }
  return valor * 2;             // acá `valor` es number
}
```

Dentro del `if`, TypeScript ya sabe que `valor` es `string` y permite
`toUpperCase`; fuera, sabe que es `number`. Esta "reducción" del tipo según una
comprobación se llama *narrowing*, y se ve en profundidad más adelante (tema 08).
Acá alcanza con `typeof`.

## Ejercicio

Abrir `ejercicio.ts` y completar cada `TODO`. Correr `npm test` y dejar los tests
en verde.
