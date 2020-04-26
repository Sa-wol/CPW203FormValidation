window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");
}
function isTextPresent(id, errMsg) {
    var txtBox = document.getElementById(id);
    var textBoxValue = txtBox.value;
    if (textBoxValue == "") {
        var errSpan = txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
