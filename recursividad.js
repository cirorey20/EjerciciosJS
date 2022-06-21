function bucleFor(num) {
  for (let i = 1; i <= num; i++) {
    let message = `${i}: Hola Ciro Rey`;
    console.log(message);
  }
}

function bucleRecur(num, tot = 1) {
  if (num <= 0) return;

  let mes = `${tot}: Hola Ciro`;
  console.log(mes);

  //tot = tot + 1;
  num = num - 1;

  return bucleRecur(num, tot + 1);
}

//bucleFor(4);
bucleRecur(4);
