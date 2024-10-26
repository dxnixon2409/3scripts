let count = 0;

document.getElementById('countButton').addEventListener('click', function() {
    count++;
    document.getElementById('countDisplay').innerText = 'Contador: ' + count;
});