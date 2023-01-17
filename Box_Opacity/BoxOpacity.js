const BoxOpacityEl = document.getElementById("box_opacity");
const BoxSizeEl =    document.getElementById("box_size");
const CopytextareaEl = document.getElementById("Copytextarea");
// value for Box size
const ValueBoxEl = document.getElementById("valueBox");

//Value for Box Opacity
const ValueOpacity = document.getElementById("valueOpacity")

//Box
const BoxEl = document.getElementsByClassName("box")[0]

// Copy Code
const codeBoxEl = document.getElementById("codeBox")
const codeOpacityEl = document.getElementById("codeOpacity")

//Copy Btn
const copyBtnEl = document.getElementsByClassName("copy")[0]



let boxSizeValue = 200;
let boxOpacityValue = 100;
let Coding;



function Btnclick(){
    boxSizeValue = BoxSizeEl.value
    boxOpacityValue = BoxOpacityEl.value
    ValueBoxEl.innerHTML = boxSizeValue + "px";
    ValueOpacity.innerHTML = boxOpacityValue + "%"
    Coding = `
            width: ${boxSizeValue}px;
            opacity: ${boxOpacityValue}%;
        `
    BoxEl.style.cssText = Coding;
    updateCode();
}


///Code Update

function updateCode(){
    CopytextareaEl.innerText = `
                            width : ${boxSizeValue}px;
                            opacity: ${boxOpacityValue}%;
                            `
}

updateCode()



BoxSizeEl.addEventListener('mousemove',Btnclick);
BoxSizeEl.addEventListener('change',Btnclick);

BoxOpacityEl.addEventListener('mousemove',Btnclick);
BoxOpacityEl.addEventListener('change',Btnclick);

copyBtnEl.addEventListener('click',()=>{
    document.querySelector('textarea').select();
    document.execCommand('copy')
    alert("code Copied")

})




// let value = ;

// for (let i = 1; i <= 100; i++) {
//    if (value < 10) {
//       value = Number("0.0" + value);
//       console.log(value);
//       break
//    }
//    else if (value == i) {
//       value = Number("0." + value);
//       console.log(value);
//       break;
//    }

// }                                     


























