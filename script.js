// deposit part here.......
document.getElementById('btn-deposit').addEventListener('click', function(){
    let moneyIn = parseFloat(document.getElementById('deposit').value);
    let depositIn = parseFloat(document.getElementById('depositIn').innerHTML);
    let total = moneyIn + depositIn;
    document.getElementById('depositIn').innerHTML = total;
    document.getElementById('deposit').value = "";
})

// withdraw part here...
document.getElementById('btn-withdraw').addEventListener('click', function(){
    let moneyOut = parseFloat(document.getElementById('withdraw').value);
    let depositIn = parseFloat(document.getElementById('depositIn').innerHTML);
    let total = moneyIn + depositIn;
    document.getElementById('depositIn').innerHTML = total;
    document.getElementById('deposit').value = "";
})




