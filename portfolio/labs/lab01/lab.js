/*
    https://www.cns11643.gov.tw/wordView.jsp?ID=0
*/


function start(e) {
    var name = [
        {
            char:'羅',
            big5:'C3B9',
            cns:'1-7865',
            unicode:'7F85'
        },
        {
            char:'羽',
            big5:'A6D0',
            cns:'1-4851',
            unicode:'7FBD'
        },
        {
            char:'軒',
            big5:'B061',
            cns:'1-5846',
            unicode:'8ED2 '
        }
    ];

    var ele = document.getElementById("div1");

    for(var i=0; i<3; i++){
        ele.innerHTML += name[i].char;
        ele.innerHTML += 'big5 = ';
        ele.innerHTML += name[i].big5;
        ele.innerHTML += 'cns = ';
        ele.innerHTML += name[i].cns;
        ele.innerHTML += 'unicode = ';
        ele.innerHTML += name[i].unicode;
        ele.innerHTML += '<br>';
    }


}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
