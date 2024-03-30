class ElectricDevice {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.pluggedIn = false;
    }

    plugIn() {
        this.pluggedIn = true;
        console.log(`${this.name} включен в розетку.`);
    }

    unplug() {
        this.pluggedIn = false;
        console.log(`${this.name} выключен из розетки.`);
    }
}

class DeskLamp extends ElectricDevice {
    constructor(name, power, brightnessLevels) {
        super(name, power);
        this.brightnessLevels = brightnessLevels;
        this.currentBrightness = 0;
    }

    changeBrightness(level) {
        if (level >= 0 && level <= this.brightnessLevels) {
            this.currentBrightness = level;
            console.log(`Яркость лампы установлена на уровень ${level}`);
        } else {
            console.log('Недопустимый уровень яркости.');
        }
    }
}

class Computer extends ElectricDevice {
    constructor(name, power, operatingSystem) {
        super(name, power);
        this.operatingSystem = operatingSystem;
        this.isOn = false;
    }

    turnOn() {
        this.isOn = true;
        console.log(`Компьютер включен. ОС: ${this.operatingSystem}`);
    }
}

const lamp = new DeskLamp('Настольная лампа', 30, 3);
const computer = new Computer('Компьютер', 500, 'Windows 10');

lamp.plugIn();
computer.plugIn();

computer.turnOn();
lamp.changeBrightness(2);

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
console.log(`Суммарная потребляемая мощность всех включенных приборов: ${totalPower} Вт`);

