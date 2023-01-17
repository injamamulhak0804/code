//        input id
let LorR = document.getElementById("lr");
let TorB = document.getElementById("tb");
let Blur_radiusEL = document.getElementById("Blur_radius");
let Spread_radiusEL = document.getElementById("Sradius");
let opacityEL = document.getElementById("opacity");
let colorEl = document.getElementById("color")
//         options Value
let valEl = document.getElementById("valueforLR")
let val_TB_option = document.getElementById("valueforTB")
let val_Blur_option = document.getElementById("valueforBlur")
let val_Sradius_option = document.getElementById("valueforSradius")
let val_opacity_option = document.getElementById("valueforopacity")


//          Copy code Value

let copyLorREl = document.getElementById("copylr");
let copyLorTorBEl = document.getElementById("copytb");
let copy_blur_BEl = document.getElementById("copyblur");
let copy_Sradius_El = document.getElementById("copySradius");
let copy_opacity_El = document.getElementById("copyopacity");

//        Copy Button
let copy_button_BEl = document.getElementById("copyBtn")

copyBtn
let val_for_LR = 10;
let val_for_TB = 10;
let val_for_Blur = 10;
let val_for_Sradius = 10;
let val_for_opacity = 0.99;
let colorValue = "#0000"
let coding = 0;
let value;
function setValue() {
    val_for_LR = LorR.value;
    val_for_TB = TorB.value;
    val_for_Blur = Blur_radiusEL.value;
    val_for_Sradius = Spread_radiusEL.value;
    val_for_opacity = opacityEL.value;
    value =  Number(val_for_opacity)


    for (let i = 1; i <= 100; i++) {
        if (value < 10) {
            value = Number("0.0" + value);
            break;
        }
        else if (value == i) {
            value = Number("0." + value);
            break;
        }
    }

    updateCode();
}

function updateCode() {
    valEl.innerText = val_for_LR + "px";
    val_TB_option.innerText = val_for_TB + "px";
    val_Blur_option.innerText = val_for_Blur + "px";
    val_Sradius_option.innerText = val_for_Sradius + "px";
    val_opacity_option.innerText = value+ "%";
    // console.log(typeof val_for_opacity);

    copyLorREl.innerHTML = val_for_LR + "px";
    copyLorTorBEl.innerHTML = val_for_TB + "px";
    copy_blur_BEl.innerHTML = val_for_Blur + "px";
    copy_Sradius_El.innerHTML = val_for_Sradius + "px";
    copy_opacity_El.innerHTML = value;

    coding = `box-shadow: ${val_for_LR}px ${val_for_TB}px ${val_for_Blur}px ${val_for_Sradius}px rgba(0,0,0,${value})`;
    BoxEl.style.cssText = coding;
}


LorR.addEventListener('mousemove', setValue);
TorB.addEventListener('mousemove', setValue);
Blur_radiusEL.addEventListener('mousemove', setValue);
Spread_radiusEL.addEventListener('mousemove', setValue);
opacityEL.addEventListener('mousemove', setValue);
colorEl.addEventListener('mousemove', sample);


copy_button_BEl.addEventListener('click', () => {
    alert("Your Code is successfully Copied");
});
const BoxEl = document.getElementById("box");




function sample(){
    
    let colorvalue = colorEl.value; 
    console.log(colorvalue);
}



