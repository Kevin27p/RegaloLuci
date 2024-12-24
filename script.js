$(document).ready(function() {
    function toggleBox(boxId, addClass, removeClass) {
        $(boxId).removeClass(removeClass).addClass(addClass);
    }
    console.log($("#greeting").attr("class"));

    $("#box1").click(function() {
        if ($("#box1").hasClass("box1closed")) {
            toggleBox("#box1", "box1open", "box1closed shake bounce");
            toggleBox("#box2", "", "hideBox");
            toggleBox("#box-top2", "shake bounce", "");
            toggleBox("#box-bottom2", "", "hideBox");
        } else {
            toggleBox("#box1", "box1closed shake bounce", "box1open");
            toggleBox("#box2", "box2closed hideBox", "box2open");
            toggleBox("#box3", "box3closed hideBox", "box3open");
            toggleBox("#greeting", "greetingClosed", "greetingOpen");
            $("body").css("background", "url(https://ericanton.co/archive/patterson/present/img/bg_pattern.jpg)");
        }
    });

    $("#box2").click(function() {
        if ($("#box2").hasClass("box2closed")) {
            toggleBox("#box2", "box2open", "box2closed");
            toggleBox("#box3", "", "hideBox");
            toggleBox("#box-top2", "", "shake bounce");
            toggleBox("#box-top3", "shake bounce", "");
            toggleBox("#box-bottom3", "", "hideBox");
        } else {
            toggleBox("#box2", "box2closed", "box2open");
            toggleBox("#box3", "box3closed hideBox", "box3open");
        }
    });

    $("#box3").click(function() {
        if ($("#box3").hasClass("box3closed")) {
            $("#box3").removeClass("box3closed").addClass("box3open");
            $("#greeting").removeClass("greetingClosed").addClass("greetingOpen");
        } else {
            toggleBox("#box3", "box3closed", "box3open");
        }
    });
});
