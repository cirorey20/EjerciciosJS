//Fibonacci

function fibonacci(num) {
  let init = [0, 1];
  for (let i = 2; i <= num; i++) {
    /*
      Aca lo que hago es agregar una nueva posicion en el array init (en este caso posicion 2)
      donde su valor sea la suma de las dos pósiciones anteriores de donde estoy actualmente
    */
    init[i] = init[i - 1] + init[i - 2];
  }
  //Aca muestro el array con todas las sumas en secuencia fibonacci
  return init;
}

function fibRecurs(num, tot = 0) {
  // planteamos un caso base que cuando llegue a este retorne un valor

  //cuando llegue a 0 o menor a cero paramos y devolvemos el total
  if (num <= 0) return tot;

  //sino sumamos el valor que hay en tot con el valor que hay en num
  tot = tot + num;
  //restamos el valor que hay en num en uno
  num = num - 1;

  //lo repito todo con el nuevo valor actual que haya en num y tot hasta que num me de 0
  return fibRecurs(num, tot);
}

console.log(fibonacci(10));
console.log(fibRecurs(3));
