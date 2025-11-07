function mask(card) {
  let temp = "";
  for (let i = 14; i < 19; i++) {
    temp += card[i];
  }

  card = card.replace(/\d/g, "*");

  let final = "";

  for (let j = 0; j < 14; j++) {
    final += card[j];
  }
  final += temp;

  return final;
}

mask("4012-8888-8888-1881");

/* From AI

function maskCardNumber(card) {
  // Replace every digit with * except the last four digits
  return card.replace(/\d(?=\d{4})/g, '*');
} */
