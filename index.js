const adf = document.getElementById('adf');
const pali = document.getElementById('pali');
const ui = document.getElementById('ui');
const tdd = document.getElementById('tdd')
const p = document.getElementById('p');
let result;
let prettyfiedResult;
document.getElementById('btn').addEventListener('click', () => {
    if(validation(adf, pali, ui, tdd, p)){
        return;
    }
    result = Number(adf.value) * 0.15 + 
    Number(pali.value) * 0.27 +
    Number(ui.value) * 0.2 + Number(tdd.value) * 0.2 + Number(p.value) * 0.18;
    prettyfiedResult = ('' + result.toFixed(5)).replace(/[0]+$/, '');
    document.getElementById('result').innerText = "Your score is: " + prettyfiedResult;
    result = null;
});
function validation(f1, f2, f3, f4, f5){
    if(parseInt(f1.value) > 100){
        document.getElementById('eadf').innerText = 'Mark value can\'t be greater than 100';
        return true;
    }
    if(parseInt(f2.value) > 100){
        document.getElementById('epali').innerText = 'Mark value can\'t be greater than 100';
        return true;
    }
    if(parseInt(f3.value) > 100){
        document.getElementById('eui').innerText = 'Mark value can\'t be greater than 100';
        return true;
    }
    if(parseInt(f4.value) > 100){
        document.getElementById('etdd').innerText = 'Mark value can\'t be greater than 100';
        return true;
    }
    if(parseInt(f5.value) > 100){
        document.getElementById('ep').innerText = 'Mark value can\'t be greater than 100';
        return true;
    }
}