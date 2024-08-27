import "./style.css";
function onButtonClick(event) {
    alert("Clicked the button!");
}

function handleVisibilityCheckboxClicked(checkbox) {
    if (!checkbox.checked) {
        document.getElementById('target-iframe').style.zIndex = "1";
        document.getElementById('bait-button').style.zIndex = "2";
    } else {
        document.getElementById('target-iframe').style.zIndex = "2";
        document.getElementById('bait-button').style.zIndex = "1";
    }
}

function updateOpacity(event) {
    document.getElementById("target-iframe").style.opacity = event.target.value;
}

document.getElementById("opacity-slider").addEventListener("input", updateOpacity);
document.getElementById("opacity-slider").addEventListener("change", updateOpacity);
document.getElementById("bait-button").addEventListener("click", onButtonClick)
document.getElementById("target-iframe-visible").addEventListener("click", (e) => handleVisibilityCheckboxClicked(e.target));
