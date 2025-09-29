let num = document.getElementById('num');
let tab = document.getElementById('tab');
let alert = document.getElementById('alert');
let alertTimeout;

function tabuada() {
    if (num.value.length === 0) {
        alert.style.display = 'block';
        
        if (alertTimeout) {
            clearTimeout(alertTimeout);
        }
        
        alertTimeout = setTimeout(() => {
            alert.style.display = 'none';
            alertTimeout = null;
        }, 2000);
    } else {
        const n = Number(num.value);
        tab.style.display = 'block';
        tab.innerHTML = '';
        for (c = 1; c <= 10; c++) {
            tab.innerHTML += `${n} x ${c} = ${n*c}<br>`;
        }
    }
}    