// On load hide all main content
$("#main-aboutMe").hide();
$("#main-projects").hide();
$("#main-contact").hide();

// Create click events for each about me anchor
$("#nav-aboutMe").click(function () {
    // Show about me content
    $("#main-aboutMe").show();
});