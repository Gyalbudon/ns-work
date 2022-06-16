

const inputRadio = document.querySelector(".js-radio1");
const hiddenSelectBox = document.getElementById("js-hiddenSelectBox");

const onInputChecked = () => {
    inputRadio.addEventListener("change", applyConditionalRequired);
};

const passValueToRadio = (e) => {
  inputRadio.value = `セミナー申し込み ${e.target.value}`;
};

const applyConditionalRequired = () => {
    if(inputRadio.checked === true) {
        const selectElement = hiddenSelectBox.firstElementChild;
        selectElement.required = true;
        selectElement.addEventListener("change", passValueToRadio); 
    }  else {
        hiddenSelectBox.firstElementChild.required = false;
    }
};

export {
    onInputChecked
};