function calculate() {
    var temp = document.getElementById('temp').value;
    var humidity = document.getElementById('humidity').value;
    var Patm = document.getElementById('pressure').value;
    console.log(temp)
    var Ppar;
    if (temp < 0) {
        Ppar = Math.exp((1738.4 + 28.74 * temp) / (271 + temp));
    } else {
        Ppar = Math.exp((1500.3 + 23.5 * temp) / (234 + temp));
    }
    var d = 0.6222 * (humidity / 100) * Ppar / (Patm - (humidity / 100) * (Ppar / 1000));
    var h = 1.01 * temp + (2501 + 1.86 * temp) * d / 1000;
    var rho = Patm * 1000 * (d / 1000 + 1) / 461.39 / (273.15 + temp) / (d / 1000 + 0.6222);
    var Tdp = (237.7 * ((17.27 * temp) / (237.7 + temp) + Math.log(humidity / 100))) / (17.27 - ((17.27 * temp) / (237.7 + temp) + Math.log(humidity / 100)));
    console.log(d.toFixed(2));
    console.log(document.getElementById('enth').value = h.toFixed(2));
    console.log(rho.toFixed(2));
    console.log(Tdp.toFixed(2));
}