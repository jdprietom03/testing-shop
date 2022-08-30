export const convertToCurrency = (currency, value) => {
  let output = '';

  const digits = [];
  while (value >= 0) {
    digits.push(value % 10);
    value = Math.floor(value / 10);
    if (value == 0) value = -1;
  }

  output = digits.reduce((last, curr, index) => {
    if (index % 3 == 0 && index > 0) last = `${curr}.${last}`;
    else last = `${curr}${last}`;
    return last;
  });

  switch (currency) {
    case 'COP':
      output = '$' + output + ' COP';
      break;
  }

  return output;
};
