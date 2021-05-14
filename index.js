import axios from 'axios';

const USD_url_1 = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&date=20200312&json';
const USD_url_2 = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&date=20200313&json';
const EUR_url_1 = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=EUR&date=20200314&json';

const USD_1 = await axios.get(USD_url_1);
const USD_2 = await axios.get(USD_url_2);
const EUR_1 = await axios.get(EUR_url_1);

const incomes = [
  {currency: 'USD', summ: 104, date: "2020-04-12"},
  {currency: 'USD', summ: 204, date: "2020-04-13"},
  {currency: 'EUR', summ: 203, date: "2020-04-14"},
];

const USD_1_to_UAH = USD_1.data[0].rate * incomes[0].summ;
const USD_2_to_UAH = USD_2.data[0].rate * incomes[1].summ;
const EUR_1_to_UAH = EUR_1.data[0].rate * incomes[2].summ;

let sum_summ = incomes[0].summ+incomes[1].summ+incomes[2].summ;
let sum_UAH = USD_1_to_UAH + USD_2_to_UAH + EUR_1_to_UAH;
let tax = sum_UAH * (5 * 0.01);

const result = {

  totalEarned: sum_summ,
  totalEarnedUAH: sum_UAH,
  tax5percent: tax,
  rawData: incomes

};

console.log(result);

