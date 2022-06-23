function persistence(num) {
  //code me
  //1
  var digits = num.toString().split('');
  if (digits.length === 1) {
    return 0;
  }
  //2
  var realDigits = digits.map(Number);
  let contador = [];

  //3 hago un array vacio llamado mult[]
  let mult = [];
  //4 hago un let llamado result
  let result = 0;

  //5 multiplico los numeros de realDigits y pongo el resultado en let llamada result
  const pot = realDigits.reduce(
    (previousValue, currentValue) => previousValue * currentValue
  );
  //6 luego separo ese resultado de result en digitos poniendolos en el array vacio mult
  result = pot.toString().split('');
  contador.push(result);
  mult = result.map(Number);

  //mientras que (la longitud de mult sea mayor a 1)
  while (mult.length > 1) {
    //multiplico los numeros de mult y pongo el resultado en let llamada result
    const pot = mult.reduce(
      (previousValue, currentValue) => previousValue * currentValue
    );
    //luego separo ese resultado de result en digitos poniendolos en el array vacio mult
    result = pot.toString().split('');
    contador.push(result);
    mult = result.map(Number);
  }

  //hago return de result
  return contador.length;
}
