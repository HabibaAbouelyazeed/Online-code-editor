const htmlCodeTxtArea = document.querySelector('#htmlCode');
const cssCodeTxtArea = document.querySelector('#cssCode');
const jsCodeTxtArea = document.querySelector('#jsCode');
const outputResultIframe = document.querySelector('#outputResult');
const runBtnDiv = document.querySelector('.run-Btn')


runBtnDiv.addEventListener('click', function(){
    renderCode();
})


function renderCode(){
    outputResultIframe.contentDocument.body.innerHTML = htmlCodeTxtArea.value;
    outputResultIframe.contentDocument.body.innerHTML += `<style>${cssCodeTxtArea.value}</style>`;
    outputResultIframe.contentWindow.eval(jsCodeTxtArea.value);
}
