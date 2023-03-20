function CalBMI() {
    let a = parseFloat(document.getElementById("weight").value);
    let b = parseFloat(document.getElementById("height").value);
    let BMI = (a / (b * b));
    document.getElementById('bmi').innerHTML = BMI;
    let x = BMI >= 30;
    let phanloai = document.getElementById('phanloai')
    if (BMI >= 30)
        phanloai.innerHTML = 'Obese';
    else if (BMI >= 25) phanloai.innerHTML = 'Overweight';
    else if (BMI >= 18.5) phanloai.innerHTML = 'Normal';
    else phanloai.innerHTML = 'Underweight';
}







