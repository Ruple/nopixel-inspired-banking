var firstname = {};
var lastname = {};
var bank = {};
var job = {};
var rtarget = {};
var ramount = {};
var rlabel = {};
var rsender = {};
var cash = {};
var bankid = {};
var iden = {};

$(document).ready(function () {
    $("#bank-container").hide();
    window.addEventListener('message', function (event) {
        var item = event.data;
        if (item.type == "bank") {
            if (item.boa == "atm") {
                if (item.toggle) {
                    $(".spinner").hide();
                    $("#bank-container").slideToggle(500);
                    $("#load-container").hide();
                    $(".deposit-button").hide();
                } else {
                    $(".deposit-button").show();
                }
            } else {
                if (item.toggle) {
                    $(".spinner").hide();
                    $("#bank-container").slideToggle(500);
                    $("#load-container").hide();
                } else {
                    $("#bank-container").hide();
                }
            }
        } else if (item.type == "refresh") {
            console.log("refresh")
            // $("#bank-container").show();
        }

        if (item.type == "load") {
            $("#load-container").show();
            $(".spinner").show();
        }


        if (item.type == "infos") {
            firstname = item.firstname
            lastname = item.lastname
            job = item.job,
                bank = item.bank,
                cash = item.cash,
                bankid = item.bankid
            accountbox()
        }


        if (item.type == "recent") {
            rtarget = item.target,
                ramount = item.amount,
                rlabel = item.label,
                rdate = item.date,
                rsender = item.sender,
                rtype = item.rtype,
                riden = item.iden,
                minibox()
        }


        if (item.type == "ccon") {

            $(".spinner-co").show();
            $(".hide-co").hide();
            setTimeout(
                function () {
                    $("#withdraw-page").hide();
                    $("#transfer-page").hide();
                    $("#deposit-page").hide();
                    $(".back-filter").hide();
                    $(".hide-co").show();
                      $(".spinner-co").hide();
                }, 1200);
                $("#transaction").empty();
               
        }
    })

});

var active = 1;

$('.accounts-box').click(function (e) {
    var theClass = this.className;

    if (theClass == "accounts-box second") {
        $(".second").addClass("active");
        $(".first").removeClass("active");
    } else if (theClass == "accounts-box first") {
        $(".first").addClass("active");
        $(".second").removeClass("active");
    }
});

var money = {};


function accountbox() {
    abank = Math.abs(bank).toLocaleString();
    acash = Math.abs(cash).toLocaleString();

    $(".account-f-name").html(firstname + " " + lastname);
    $(".account-f").html("Personal Account / " + bankid);
    $(".box-header").html("Personal Account / " + bankid);
    $(".account-f-balance").html('$' + abank + ".00");
    $(".cash").html('Cash: $' + acash + ".00");
}

function minibox() {

    var timesences = humanized_time_span(rdate)
    var pos = ""
    if (rtype !== "pos") {
        color = "#eea06d"
        pos = "-"
        money = Math.abs(ramount).toLocaleString();

    } else {
        color = "#7bda78"
        money = ramount.toLocaleString();
    }
    $("#transaction").prepend('<div id="transaction-box"><div class="tr-head"><h3 > Personal Account / ' + bankid + ' [' + riden + ']</h3><h3 class="headr"> ewewe543-dsrfedfg654-65423sdfsr2-2ad3a</h3></div><div class="middle"><div class="money" style="color:' + color + ' ">' + pos + '$' + money + '.00</div><div class="name">' + rtarget + '</div><div class="clock">' + timesences + '</div></div><div class="middle-two"><div class="name-bottom">' + rsender + '</div></div><div class="bottom"><div class="msg-font">Message</div><div class="msg-ex">' + rlabel + '</div></div></div>');
    // $("#transaction").append('<div id="transaction-box"><div class="tr-head"><h3 > Personal Account / ' + bankid + ' [' + riden + ']</h3><h3 class="headr"> ewewe543-dsrfedfg654-65423sdfsr2-2ad3a</h3></div><div class="middle"><div class="money" style="color:' + color + ' ">' + pos + '$' + money + '.00</div><div class="name">' + rtarget + '</div><div class="clock">' + timesences + '</div></div><div class="middle-two"><div class="name-bottom">' + rsender + '</div></div><div class="bottom"><div class="msg-font">Message</div><div class="msg-ex">' + rlabel + '</div></div></div>');
}


$('.withdraw-button').click(function (e) {
    e.preventDefault();
    $("#withdraw-page").fadeIn();
    $(".back-filter").show();
});

$('.deposit-button').click(function (e) {
    e.preventDefault();
    $("#deposit-page").fadeIn();
    $(".back-filter").show();
});

$('.transfer-button').click(function (e) {
    e.preventDefault();
    $("#transfer-page").fadeIn();
    $(".back-filter").show();
});

document.onkeyup = function (data) {
    if (data.which == 27) {
        $("#transaction").empty();
        $.post('http://rpl-banking/close', JSON.stringify({}));

    }
}

$('.cancel').click(function (e) {
    e.preventDefault();
    $("#withdraw-page").fadeOut();
    $("#deposit-page").fadeOut();
    $("#transfer-page").fadeOut();
    $(".back-filter").hide();
});


$('.w-okay').click(function (e) {
    var wvalue = document.getElementById("w-number").value;
    var wcomment = document.getElementById("w-comment").value;

    if (wvalue == "") {
        console.log("null")
    } else if (wvalue > bank) {
        console.log("toomuch")
    } else {
        $.post('http://rpl-banking/withdraw', JSON.stringify({
            value: wvalue,
            comment: wcomment
        })
        );
    }
});

$('.d-okay').click(function (e) {
    var dvalue = document.getElementById("d-number").value;
    var dcomment = document.getElementById("d-comment").value;

    if (dvalue == "") {
        console.log("null")
    } else if (dvalue > cash) {
        console.log("toomuch")
    } else {
        $.post('http://rpl-banking/deposit', JSON.stringify({
            value: dvalue,
            comment: dcomment
        })
        );
    }
});


$('.t-okay').click(function (e) {
    var tvalue = document.getElementById("t-number").value;
    var tcomment = document.getElementById("t-comment").value;
    var tid = document.getElementById("t-target").value;

    if (tvalue == "" && tcomment =="") {
        console.log("null")
    } else if (tvalue > bank) {
        console.log("toomuch")
    } else {
        $.post('http://rpl-banking/transfer', JSON.stringify({
            value: tvalue,
            comment: tcomment,
            id: tid
        })
        );
    }
});

// 

function humanized_time_span(date, ref_date, date_formats, time_units) {
    //Date Formats must be be ordered smallest -> largest and must end in a format with ceiling of null
    date_formats = date_formats || {
        past: [
            { ceiling: 60, text: "$seconds seconds ago" },
            { ceiling: 3600, text: "$minutes minutes ago" },
            { ceiling: 86400, text: "$hours hours ago" },
            { ceiling: 2629744, text: "$days days ago" },
            { ceiling: 31556926, text: "$months months ago" },
            { ceiling: null, text: "$years years ago" }
        ],
        future: [
            { ceiling: 60, text: "in $seconds seconds" },
            { ceiling: 3600, text: "in $minutes minutes" },
            { ceiling: 86400, text: "in $hours hours" },
            { ceiling: 2629744, text: "in $days days" },
            { ceiling: 31556926, text: "in $months months" },
            { ceiling: null, text: "in $years years" }
        ]
    };
    //Time units must be be ordered largest -> smallest
    time_units = time_units || [
        [31556926, 'years'],
        [2629744, 'months'],
        [86400, 'days'],
        [3600, 'hours'],
        [60, 'minutes'],
        [1, 'seconds']
    ];

    date = new Date(date);
    ref_date = ref_date ? new Date(ref_date) : new Date();
    var seconds_difference = (ref_date - date) / 1000;

    var tense = 'past';
    if (seconds_difference < 0) {
        tense = 'future';
        seconds_difference = 0 - seconds_difference;
    }

    function get_format() {
        for (var i = 0; i < date_formats[tense].length; i++) {
            if (date_formats[tense][i].ceiling == null || seconds_difference <= date_formats[tense][i].ceiling) {
                return date_formats[tense][i];
            }
        }
        return null;
    }

    function get_time_breakdown() {
        var seconds = seconds_difference;
        var breakdown = {};
        for (var i = 0; i < time_units.length; i++) {
            var occurences_of_unit = Math.floor(seconds / time_units[i][0]);
            seconds = seconds - (time_units[i][0] * occurences_of_unit);
            breakdown[time_units[i][1]] = occurences_of_unit;
        }
        return breakdown;
    }

    function render_date(date_format) {
        var breakdown = get_time_breakdown();
        var time_ago_text = date_format.text.replace(/\$(\w+)/g, function () {
            return breakdown[arguments[1]];
        });
        return depluralize_time_ago_text(time_ago_text, breakdown);
    }

    function depluralize_time_ago_text(time_ago_text, breakdown) {
        for (var i in breakdown) {
            if (breakdown[i] == 1) {
                var regexp = new RegExp("\\b" + i + "\\b");
                time_ago_text = time_ago_text.replace(regexp, function () {
                    return arguments[0].replace(/s\b/g, '');
                });
            }
        }
        return time_ago_text;
    }

    return render_date(get_format());
}