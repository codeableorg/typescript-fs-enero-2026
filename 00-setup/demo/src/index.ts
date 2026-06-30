// Ejemplo mínimo con tipos. Al compilar con `tsc`, los tipos desaparecen y en
// dist/index.js queda JavaScript puro, listo para ejecutar con Node.

type Usuario = {
  nombre: string;
  edad: number;
};

function presentar(usuario: Usuario): string {
  return `${usuario.nombre} tiene ${usuario.edad} años`;
}

const ana: Usuario = { nombre: "Ana", edad: 30 };
console.log(presentar(ana));
