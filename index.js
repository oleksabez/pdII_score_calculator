const adf = document.getElementById('adf');
const pali = document.getElementById('pali');
const ui = document.getElementById('ui');
const tdd = document.getElementById('tdd')
const p = document.getElementById('p');
document.getElementById('btn').addEventListener('click', () => {
    document.getElementById('result').innerText += Number(adf.value) * 0.15 + 
    Number(pali.value) * 0.27 +
    Number(ui.value) * 0.2 + Number(tdd.value) * 0.2 + Number(p.value) * 0.18;
});