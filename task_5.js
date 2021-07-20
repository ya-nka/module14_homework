class Electronics {
  constructor(power, time) {
    this.time = time;
    this.power = power;
    this.costElectricPower = 3.5;
  }
  day() {
    return this.time * this.power;
  }
  Month() {
    return this.time * this.power * 30;
  }
  Cost() {
    return this.time * this.power * 30 * 3.5;
  }
}

class Comp extends Electronics {
  constructor(time, power) {
    super(time, power);
  }
}

class Lamp extends Electronics {
  constructor(time, power) {
    super(time, power);
  }
}

let comp = new Comp(0.25, 8);
let lamp = new Lamp(0.4, 8);

console.log('потребляемая мощность компьютера за 1 рабочий день = ' + comp.day() + ' Вт');
console.log('потребляемая мощность компьютера в месяц = ' + comp.Month() + ' Вт');
console.log('стоимость потребляемой электроэнергии компьютера в месяц = ' + comp.Cost() + ' руб');
console.log('потребляемая мощность настольной лампы за 1 рабочий день = ' + lamp.day() + ' Вт');
console.log('потребляемая мощность настольной лампы в месяц = ' + lamp.Month() + ' Вт');
console.log(
  'стоимость потребляемой электроэнергии настольной лампы в месяц = ' + lamp.Cost() + ' руб',
);
