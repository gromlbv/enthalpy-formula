function calculate() {
    var t = parseFloat(20);
    var f = parseFloat(50);
    var Patm = 101.425;
    var Ppar;
    if (t < 0) {
        Ppar = Math.exp((1738.4 + 28.74 * t) / (271 + t));
    } else {
        Ppar = Math.exp((1500.3 + 23.5 * t) / (234 + t));
    }
    var d = 0.6222 * (f / 100) * Ppar / (Patm - (f / 100) * (Ppar / 1000));
    var h = 1.01 * t + (2501 + 1.86 * t) * d / 1000;
    var rho = Patm * 1000 * (d / 1000 + 1) / 461.39 / (273.15 + t) / (d / 1000 + 0.6222);
    var Tdp = (237.7 * ((17.27 * t) / (237.7 + t) + Math.log(f / 100))) / (17.27 - ((17.27 * t) / (237.7 + t) + Math.log(f / 100)));
    console.log(d.toFixed(2));
    console.log(h.toFixed(2));
    console.log(rho.toFixed(2));
    console.log(Tdp.toFixed(2));
}
calculate()