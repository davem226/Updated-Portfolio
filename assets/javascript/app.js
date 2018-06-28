// On load hide all main content
$("#main-aboutMe").hide();
$("#main-projects").hide();
$("#main-contact").hide();

// Create click events for each about me anchor
$("#nav-aboutMe").click(function () {
    // Show about me content
    $("#main-aboutMe").show();

    // Hide all else
    $("#main-projects").hide();
    $("#main-contact").hide();
});
// Create click events for each about me anchor
$("#nav-projects").click(function () {
    // Show about me content
    $("#main-projects").show();

    // Hide all else
    $("#main-aboutMe").hide();
    $("#main-contact").hide();
});
// Create click events for each about me anchor
$("#nav-contact").click(function () {
    // Show about me content
    $("#main-contact").show();

    // Hide all else
    $("#main-projects").hide();
    $("#main-aboutMe").hide();
});