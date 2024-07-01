let vize = 50;
let final = 40;
let donemNotu;
let harfNotu;
donemNotu = vize * 0.3 + final * 0.7;
if (donemNotu >= 90 && donemNotu <= 100) {
  harfNotu = 'A';
} else if (donemNotu >= 80 && donemNotu < 90) {
  harfNotu = 'B';
} else if (donemNotu >= 70 && donemNotu < 80) {
  harfNotu = 'C';
} else if (donemNotu >= 60 && donemNotu < 70) {
  harfNotu = 'D';
} else if (donemNotu >= 50 && donemNotu < 60) {
  harfNotu = 'E';
} else if (donemNotu < 50) {
  harfNotu = 'F';
}
