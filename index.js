$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function() {
        console.log("Envelope clicked");
        open();
    });
    btn_open.click(function() {
        console.log("open button clicked");
        open();
    });
    btn_reset.click(function() {
        console.log("reset button clicked");
        close();
    });

    function open() {
        console.log("opening envelope...");
        envelope.addClass("open").removeClass("close");
    }

    function close() {
        console.log("closing envelope...");
        envelope.addClass("close").removeClass("open");
    }

})
