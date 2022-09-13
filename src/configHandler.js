const ctlystPreferenceBlur = document.querySelector('#pref-blur');

ctlystPreferenceBlur.addEventListener('change', () => {
    if (ctlystPreferenceBlur.checked) {
        localStorage.setItem('ctlystBlurDisabled', true);
        alert("Restart the browser to apply changes.");
    } else {
        localStorage.setItem('ctlystBlurDisabled', false);
        alert("Restart the browser to apply changes.");
    }
    }
);

// if ctlystBlurDisabled is bool, set the blur checkbox to ctlystBlurDisabled
if (typeof localStorage.getItem('ctlystBlurDisabled') == 'boolean') {
    ctlystPreferenceBlur.checked = "true";
} else {
    ctlystPreferenceBlur.checked = "false";
}

// if localStorage value ctlystBlurDisabled is true, then run a function
function toggleBlur() {
if (localStorage.getItem('ctlystBlurDisabled') === 'true') {
    const blurredElements = document.querySelectorAll('.blurred');
    blurredElements.forEach(element => {
        element.classList.remove('blurred');
        element.classList.remove('backdrop-blur-md');
        
    });
}
}

if (localStorage.getItem('ctlystLogging') === 'true') {
console.log(localStorage.getItem('ctlystBlurDisabled'))
}

toggleBlur();

const ctlystPreferenceLogging = document.querySelector('#pref-logging');

ctlystPreferenceLogging.addEventListener('change', () => {
    if (ctlystPreferenceLogging.checked) {
        localStorage.setItem('ctlystLogging', true);
        alert("Restart the browser to apply changes.");
    } else {
        localStorage.setItem('ctlystLogging', false);
        alert("Restart the browser to apply changes.");
    }
    }
);

var enableLogging = localStorage.getItem('ctlystLogging');
// if ctlystLogging is set to true, set the blur checkbox to checked
if (enableLogging == "true") {
    ctlystPreferenceLogging.checked = "true";
} else {
ctlystPreferenceLogging.checked = "false";
}
