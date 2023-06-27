var button_1 = document.querySelector('#button_1');

button_1.addEventListener('click', onClick)

function onClick() {
    var metros = Number(window.prompt("Digite uma distância em metros (m)"));

    var mensagem = document.getElementById('msg');
    var m_value_span = document.getElementById('m-value');

    mensagem.style.display = "inline";
    m_value_span.innerHTML = metros.toLocaleString();

    var km = document.getElementById('quilometros');
    var km_value_span = document.getElementById('km-value');
    var km_value = metros / 1000;

    km.style.display = "inline";
    km_value_span.innerHTML = km_value.toLocaleString();

    var hm = document.getElementById('hectometros');
    var hm_value_span = document.getElementById('hm-value');
    var hm_value = metros / 100;

    hm.style.display = "inline";
    hm_value_span.innerHTML = hm_value.toLocaleString();

    var dam = document.getElementById('decametros');
    var dam_value_span = document.getElementById('dam-value');
    var dam_value = metros / 10;

    dam.style.display = "inline";
    dam_value_span.innerHTML = dam_value.toLocaleString();

    var dm = document.getElementById('decimetros');
    var dm_value_span = document.getElementById('dm-value');
    var dm_value = metros * 10;

    dm.style.display = "inline";
    dm_value_span.innerHTML = dm_value.toLocaleString();

    var cm = document.getElementById('centimetros');
    var cm_value_span = document.getElementById('cm-value');
    var cm_value = metros * 100;

    cm.style.display = "inline";
    cm_value_span.innerHTML = cm_value.toLocaleString();

    var mm = document.getElementById('milimetros');
    var mm_value_span = document.getElementById('mm-value');
    var mm_value = metros * 1000;

    mm.style.display = "inline";
    mm_value_span.innerHTML = mm_value.toLocaleString();
}