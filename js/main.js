(function ($) {
    "use strict";

    // $('.input100').each(function() {
    //     $(this).on('blur', function() {
    //         if ($(this).val().trim() != "") {
    //             $(this).addClass('has-val');
    //         } else {
    //             $(this).removeClass('has-val');
    //         }
    //     })
    // })

    var input = $('.custom-validation-input');

    $('.validate-form').on('submit', function () {
        var check = true;
        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }
        return check;
    });

    $('.custom-validation-input').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        } else if ($(input).attr('type') == 'number') {
            if ($(input).val().trim() == '') {
                return false;
            } else if ($(input).hasClass("max-marks-100") && $(input).val() > 100) {
                return false;
            } else if ($(input).hasClass("max-marks-1000") && $(input).val() > 1000) {
                return false;
            } else if ($(input).hasClass("marks-obtained-100")) {
                if (Number($(input).parent().find(".max-marks-100").val()) < Number($(input).val()))
                    return false;
            } else if ($(input).hasClass("marks-obtained-1000")) {
                if (Number($(input).parent().find(".max-marks-1000").val()) < Number($(input).val()))
                    return false;
            }
        } else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisParentAlert = $(input).parent();
        var thisGrandParentAlert = $(input).parent().parent();
        if ($(input).parent().hasClass("custom-validation-child"))
            $(thisParentAlert).addClass('alert-validate');
        else
            $(thisGrandParentAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisParentAlert = $(input).parent();
        var thisGrandParentAlert = $(input).parent().parent();
        if ($(input).parent().hasClass("custom-validation-child"))
            $(thisParentAlert).removeClass('alert-validate');
        else
            $(thisGrandParentAlert).removeClass('alert-validate');
    }
})(jQuery);