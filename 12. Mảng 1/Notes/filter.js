var  a = Array(10);
for (i=0; i<a.length; i++) {
    a[i] = Math.floor(Math.random()*100)
}
var b = a.filter(function(x) {
    return x>=50;
});

document.write('Mảng a ' + a + '<br>')
document.write('Mảng b ' + b + ' gồm các số  >= 50 của mảng a')