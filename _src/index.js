// CSS and SASS files
import './index.scss';
import './js/lightswitch.js';
import Clipboard from 'clipboard';

const ccSection = document.querySelector('.ccSection'),
    bccSection = document.querySelector('.bccSection'),
    ccBtn = document.querySelector('.ccButton'),
    bccBtn = document.querySelector('.bccButton'),
    input = document.querySelectorAll('.input'),
    copyCode = document.querySelector('.copyCode');


for (let item of input) {
    item.addEventListener('keyup', (e) => {
        const value = e.target.value,
            id = e.target.id,
            output = document.querySelector('.' + id + 'Output'),
            link = document.querySelector('.mailto-link-container'),
            label = document.getElementById('' + id + 'Label'),
            comma = new RegExp(',');
        console.log(output, id, label, value);

        output.innerHTML = value;

        //If not recipient input then show adjoining label when value over 1 else hide
        if (id != 'recipient') {
            if (value.length >= 1) {
                label.classList.add('dib');
            } else {
                label.classList.remove('dib');
                //link.classList.remove('active');
            }
        }

        //Show email address when email field has 3 chars or more, hide if not
        if (id == 'recipient') {
            link.classList.add('active');

            if (value.length >= 3) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
        
        //if email field and comma, then remove space after it in output
        if (id == 'recipient' || id == 'cc' || id == 'bcc') {
            if (comma.test(value)) {
                let str = output.innerHTML;
                str = str.replace(/\s+/g, '');
                output.innerHTML = str;
            } else {
                output.innerHTML = value;
            }
        }

        //if subject or body, replace spaces and line breaks
        if (id == 'subject' || id == 'body') {
            let str = output.innerHTML;
            str = str.replace(/\n/g, "%0A");
            str = str.replace(/ /g, "%20");
            output.innerHTML = str;
        }

    });
}

ccBtn.addEventListener("click", function (e) {
    if (ccSection.classList.contains('dn')) {
        ccSection.classList.remove('dn');
        document.getElementById('cc').focus();
    } else {
        ccSection.classList.add('dn');
    }
});

bccBtn.addEventListener("click", function (e) {
    if (bccSection.classList.contains('dn')) {
        bccSection.classList.remove('dn');
        document.getElementById('bcc').focus();
    } else {
        bccSection.classList.add('dn');
    }
});

var clipboard = new Clipboard('.copyCode', {
    target: function (trigger) {
        console.log(trigger.innerHTML = 'Copied');
        return trigger.previousElementSibling;
        //return document.getElementById('password')
    }
});

clipboard.on('success', function (e, el) {
    var elems = document.getElementsByClassName('copyCode');
    for (var i = 0; i < elems.length; i += 1) {
        elems[i].innerHTML = 'Copy';
    }
    e.trigger.innerHTML = 'Copied'
});

copyCode.addEventListener("click", function (e) {
    const labelVisible = document.querySelectorAll('.label.dib'),
        labelFirst = labelVisible[0],
        label = document.querySelector('.label.dib'),
        labelCount = labelVisible.length;
    
    
        //console.log(labelCount);

    for (let item of labelVisible) {
        if (item.innerHTML.indexOf('&') === -1) {
            item.prepend('&');
        }
        //console.log(labelFirst.innerHTML);
    }

    if (labelFirst) {
        let str = labelFirst.innerHTML;
        str = str.replace('&amp;', '');
        labelFirst.innerHTML = str;

        if (labelFirst.innerHTML.indexOf('?') === -1) {
            labelFirst.prepend('?');
        }
    }

    let mailtoText = document.querySelector('.mailto-text').innerText;


    mailtoText = mailtoText.replace(/\n/g, "%0A");

    console.log(`Spaces gone?:: ${mailtoText}`);

});

clipboard.on('success', function (e, el) {
    var elems = document.getElementsByClassName('copyCode');
    e.trigger.innerHTML = 'Copied!'

    copyCode.addEventListener("mouseover", function (e) {
        if (copyCode.innerHTML = "Copied!") {
            copyCode.innerHTML = 'Copy Code';
        }
    });
});