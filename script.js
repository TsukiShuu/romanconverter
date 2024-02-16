const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const convertToRoman = (number) => {
  const romanText = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  const romanNumeral = [];

  romanText.forEach(([roman, value]) => {
    while (number >= value) {
      romanNumeral.push(roman);
      number -= value;
    }
  });

  return romanNumeral.join('');
}

const showError = (message) => {
  output.innerText = message;
  output.classList.add('error');
}

const clearError = () => {
  output.innerText = '';
  output.classList.remove('error');
};

const validateInput = (input) => {
  if (!/[0-9]/.test(input)) {
    showError("Please enter a valid number");
    return false;
  }

  const num = parseInt(input, 10);
  if (num <= 0) {
    showError("Please enter a number greater than or equal to 1");
    return false;
  } else if (num >= 4000) {
    showError("Please enter a number less than or equal to 3999");
    return false;
  }

  return true;
}

convertBtn.addEventListener('click', () => {
  const numberValue = document.getElementById('number').value;
  clearError();

  if (validateInput(numberValue)) {
    output.innerText = convertToRoman(parseInt(numberValue, 10));
  }
});
