// Родительская функция для электроприборов
function ElectricDevice(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
}

  // Метод для включения прибора в розетку
    ElectricDevice.prototype.plugIn = function () {
    this.pluggedIn = true;
    console.log(this.name + ' включен в розетку.');
};

  // Метод для выключения прибора из розетки
    ElectricDevice.prototype.unplug = function () {
    this.pluggedIn = false;
    console.log(this.name + ' выключен из розетки.');
};

  // Пример - Настольная лампа
function DeskLamp(name, power, brightnessLevels) {
    ElectricDevice.call(this, name, power);
    this.brightnessLevels = brightnessLevels;
    this.currentBrightness = 0;
}

  // Делегирующая связь с родительским классом
    DeskLamp.prototype = Object.create(ElectricDevice.prototype);
    DeskLamp.prototype.constructor = DeskLamp;

  // Метод изменения яркости лампы
    DeskLamp.prototype.changeBrightness = function (level) {
    if (level >= 0 && level <= this.brightnessLevels) {
    this.currentBrightness = level;
    console.log('Яркость лампы установлена на уровень ' + level);
    } else {
    console.log('Недопустимый уровень яркости.');
    }
};

  // Пример  прибора - Компьютер
    function Computer(name, power, operatingSystem) {
    ElectricDevice.call(this, name, power);
    this.operatingSystem = operatingSystem;
    this.isOn = false;
}

  // Делегирующая связь с родительским классом
    Computer.prototype = Object.create(ElectricDevice.prototype);
    Computer.prototype.constructor = Computer;

  // Метод для включения компьютера
    Computer.prototype.turnOn = function () {
    this.isOn = true;
    console.log('Компьютер включен. ОС: ' + this.operatingSystem);
};

  // Создание экземпляров каждого прибора
    const lamp = new DeskLamp('Настольная лампа', 30, 3);
    const computer = new Computer('Компьютер', 500, 'Windows 10');

  // Подключение приборов к розетке
lamp.plugIn();
computer.plugIn();

  // Включение компьютера и изменение яркости лампы
computer.turnOn();
lamp.changeBrightness(2);

  // Вычисление суммарной потребляемой мощности всех включенных приборов
    function calculateTotalPowerConsumption(...devices) {
    let totalPower = 0;
    devices.forEach(device => {
    if (device.pluggedIn) {
        totalPower += device.power;
}
    });
    return totalPower;
}

const totalPower = calculateTotalPowerConsumption(lamp, computer);
console.log('Суммарная потребляемая мощность всех включенных приборов: ' + totalPower + ' Вт');