document.addEventListener('DOMContentLoaded', function() {
    let outputDiv = document.querySelector('.output');

    let fib = [0, 1];
    let i = 2;

    while (fib[i - 1] + fib[i - 2] <= 100) {
      fib[i] = fib[i - 1] + fib[i - 2];
      i++;
    }

    outputDiv.innerHTML = '<p>Fibonacci Sequence up to 100:</p>';
    outputDiv.innerHTML += '<p>' + fib.join(', ') + '</p>';
  });