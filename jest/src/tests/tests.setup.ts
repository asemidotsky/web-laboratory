import { db } from "../database";

function init(){
  db.addItem(5);
  db.addItem(10);
  db.addItem(15);
}

module.exports = async function() {
  console.log('One time tests setup started');
  init();
  console.log(`One time tests setup finished. There are ${db.itemsCount()} items in DB`);
}

