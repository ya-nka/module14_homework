function Electronics(name, power) {
  (this.time = 8), (this.costElectricPower = 3.5), (this.power = power);
  this.name = name;
}
Electronics.prototype.Month = function (timeMonth) {
  console.log(`${timeMonth} дней`);
};
Electronics.prototype.powerElectro = function () {
  const itog = this.power * this.time;
  console.log(itog);
}; //стоимость в день
Electronics.prototype.costInDay = function () {
  const cost = this.costElectricPower * this.power * 24;
  console.log(cost);
}; //стоимость в сутки

Electronics.prototype.costInMonth = function () {
  const cost = this.costElectricPower * this.power * 24 * 30;
  console.log(cost);
}; //стоимость в месяц

const comp = new Electronics(`comp`, 0.25);
const lamp = new Electronics(`lamp`, 0.4);
comp.Month(30);
lamp.Month(30);
console.log(comp, lamp);
comp.powerElectro();
lamp.powerElectro();
comp.costInDay();
lamp.costInDay();
comp.costInMonth();
lamp.costInMonth();
