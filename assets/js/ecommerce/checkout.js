
$(document).ready(function() {

    var offset = $('.checkout-billing:not(.fixed-no)').offset().top
    if($(window).width() >= 770)
    $(window).scroll(function() {
        if($(window).scrollTop() >= offset) {
            $('.checkout-billing:not(.fixed-no)').addClass('fixed')
        }
        if(($(window).scrollTop() >= ($('.bottom-bar').offset().top - $('.checkout-billing:not(.fixed-no)').height())) || $(window).scrollTop() <= offset) {
            $('.checkout-billing:not(.fixed-no)').removeClass('fixed')
        }
    })
})
 

    //For Card Number formatted input
    var cardNum = $('#cr_no');
    // cardNum.keyup(function() {})
    cardNum.onkeyup = function (e) {
    if (this.value == this.lastValue) return;
        var caretPosition = this.selectionStart;
        var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
        var parts = [];

        for (var i = 0, len = sanitizedValue.length; i < len; i +=4) { parts.push(sanitizedValue.substring(i, i + 4)); } for (var i=caretPosition - 1; i>= 0; i--) {
            var c = this.value[i];
            if (c < '0' || c> '9') {
                caretPosition--;
            }
        }
        caretPosition += Math.floor(caretPosition / 4);

        this.value = this.lastValue = parts.join('-');
        this.selectionStart = this.selectionEnd = caretPosition;
    }

    //For Date formatted input
    var expDate = document.getElementById('exp');
    expDate.onkeyup = function (e) {
    if (this.value == this.lastValue) return;
    var caretPosition = this.selectionStart;
    var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
    var parts = [];

    for (var i = 0, len = sanitizedValue.length; i < len; i +=2) { parts.push(sanitizedValue.substring(i, i + 2)); } for (var i=caretPosition - 1; i>= 0; i--) {
        var c = this.value[i];
        if (c < '0' || c> '9') {
            caretPosition--;
        }   
    }
    caretPosition += Math.floor(caretPosition / 2);

    this.value = this.lastValue = parts.join('/');
    this.selectionStart = this.selectionEnd = caretPosition;
    }
