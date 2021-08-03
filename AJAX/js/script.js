let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    //request.open(method, url, async, login, pass);
    request.open('GET', "js/current.json");
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    //status
    //statusText
    //responseText / response
    //readyState

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let date = JSON.parse(request.response);

            inputUsd.value = inputRub.value / data.usd;
        }  else {
            inputUsd.value = "Что-то пошло не так!";
        }
    });
});


//ЧТО-ТО НЕ ПОЛУЧИЛОСЬ НАДО ЗАНОВА 