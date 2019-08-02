export default function recursiva () {

var today = new Date();
var day = today.getDate() + "";
var month = (today.getMonth() + 1) + "";
var year = today.getFullYear() + "";
var hour = today.getHours() + "";
var minutes = today.getMinutes() + "";
var seconds = today.getSeconds() + "";

    console.log(`Checagem feita em: ${day}/${month}/${year} as ${hour}horas ${minutes} minutos e ${seconds} segundos`);
    setTimeout(recursiva,600000);
  }
  