// https://www.omnicalculator.com/finance/financial-leverage-ratio

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const financialleverageRadio = document.getElementById('financialleverageRadio');
const currentassetsRadio = document.getElementById('currentassetsRadio');
const noncurrentassetsRadio = document.getElementById('noncurrentassetsRadio');
const totalequityRadio = document.getElementById('totalequityRadio');

let financialleverage;
let currentassets = v1;
let noncurrentassets = v2;
let totalequity = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

financialleverageRadio.addEventListener('click', function() {
  variable1.textContent = 'Current assets';
  variable2.textContent = 'Non-current assets';
  variable3.textContent = 'Total equity';
  currentassets = v1;
  noncurrentassets = v2;
  totalequity = v3;
  result.textContent = '';
});

currentassetsRadio.addEventListener('click', function() {
  variable1.textContent = 'Financial leverage';
  variable2.textContent = 'Non-current assets';
  variable3.textContent = 'Total equity';
  financialleverage = v1;
  noncurrentassets = v2;
  totalequity = v3;
  result.textContent = '';
});

noncurrentassetsRadio.addEventListener('click', function() {
  variable1.textContent = 'Financial leverage';
  variable2.textContent = 'Current assets';
  variable3.textContent = 'Total equity';
  financialleverage = v1;
  currentassets = v2;
  totalequity = v3;
  result.textContent = '';
});

totalequityRadio.addEventListener('click', function() {
  variable1.textContent = 'Financial leverage';
  variable2.textContent = 'Current assets';
  variable3.textContent = 'Non-current assets';
  financialleverage = v1;
  currentassets = v2;
  noncurrentassets = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(financialleverageRadio.checked)
    result.textContent = `Financial leverage = ${computefinancialleverage().toFixed(2)}`;

  else if(currentassetsRadio.checked)
    result.textContent = `Current assets = ${computecurrentassets().toFixed(2)}`;

  else if(noncurrentassetsRadio.checked)
    result.textContent = `Non-current assets = ${computenoncurrentassets().toFixed(2)}`;

  else if(totalequityRadio.checked)
    result.textContent = `Total equity = ${computetotalequity().toFixed(2)}`;
})

// calculation

function computefinancialleverage() {
  return (Number(currentassets.value) + Number(noncurrentassets.value)) / Number(totalequity.value);
}

function computecurrentassets() {
  return (Number(financialleverage.value) * Number(totalequity.value)) - Number(noncurrentassets.value);
}

function computenoncurrentassets() {
  return(Number(financialleverage.value) * Number(totalequity.value)) - Number(currentassets.value);
}

function computetotalequity() {
  return (Number(currentassets.value) + Number(noncurrentassets.value)) / Number(financialleverage.value);
}