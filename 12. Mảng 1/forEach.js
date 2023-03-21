let i = 1;
let j = 1;
var Table = '<table border="1" width="300" cellspacing="0" cellpadding="3">';
for (i=1; i<=9; i++) {
    Table = Table + '<tr>';
    for (j=2; j<=9; j++) {
        Table = Table + '<td>' + j + '*' + i + '=' + j*i + '</td>';
    }
    Table = Table + '</tr>';
}
Table = Table + '</table>';
document.write(Table);  