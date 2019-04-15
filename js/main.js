
let displayed = document.getElementById('displayed-number');
let subtract = document.getElementById('subtract');
let add = document.getElementById('add');
let modifier = document.getElementById('modifier');

let count = 0;

displayed.innerHTML = count;

add.addEventListener('click', function () {
  count += parseInt(modifier.value);
  displayed.innerHTML = count;
});

subtract.addEventListener('click', function () {
  count -= parseInt(modifier.value);
  displayed.innerHTML = count;
});
