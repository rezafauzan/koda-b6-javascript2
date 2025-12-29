const temperature = {
    base: 0,
    toFahrenheit: function (temp){
        return this.base * 9/5 + 32
    },
    toKelvin: function (temp){
        return this.base + 273.15
    },
    toReamur: function (temp){
        return this.base * 4/5
    }
}

temperature.base = 40
console.log(temperature.toFahrenheit())
console.log(temperature.toKelvin())
console.log(temperature.toReamur())