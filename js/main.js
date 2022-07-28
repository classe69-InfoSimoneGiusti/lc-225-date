/* LUXON */

//https://moment.github.io/luxon/#/install
var DateTime = luxon.DateTime;

const oraISO = DateTime.now().toISO(); //formato internazionale come definito da 

//https://moment.github.io/luxon/#/formatting?id=toformat
const oraAttuale = DateTime.now().format(' dd/LL/y HH:mm:ss'); 
console.log(oraAttuale);




/* DAY.JS */

//https://day.js.org/docs/en/installation/browser

//https://day.js.org/docs/en/display/format#docsNav
const oraAttualeDayJS = dayjs().format('DD/MM/YYYY HH:mm:ss');
console.log(oraAttualeDayJS);