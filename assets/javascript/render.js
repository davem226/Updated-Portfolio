// Populate nav tag with headings
var anchorCount = 0;
for (heading in sections) {
    // Create new div with class for styling
    var newDiv = $("<div>").attr("class", "nav-div");

    // Add image to new div
    newDiv.append($("<img>").attr({ "src": sections[heading].nav.imageURL, "class": "nav-img" }));
    // Add anchor tag to new div
    newDiv.append($("<a>").attr({
        "href": "#" + Object.keys(sections)[anchorCount],
        "class": "nav-heading",
        "id": "nav-" + Object.keys(sections)[anchorCount]
    })
        // Add text to anchor tag
        .text(sections[heading].title));

    // Append div to nav
    $("nav").append(newDiv);

    anchorCount++;
}

// Populate main content
var idCount = 0;
for (j in sections) {
    // Create new div with class for styling and id for click events in app.js
    var newDiv = $("<div>").attr({ "class": "main-div", "id": "main-" + Object.keys(sections)[idCount] });

    // New div for housing main content of about me section
    var newContent = $("<div>");

    // Insert heading
    var mainHeading = $("<h2>").text(sections[j].title);
    newContent.append(mainHeading);

    // Add content specific to About Me section
    if (sections[j].title === "About Me") {
        // Insert image tag
        var newImg = $("<img>").attr({ "src": sections[j].main.imageURL, "class": "main-img" });
        newContent.append(newImg);

        // Loop through text paragraphs
        for (p in sections[j].main.content) {
            // Create new p tag
            var newParagraph = $("<p>").text(sections[j].main.content[p]);
            // Append this p tag to new content div
            newContent.append(newParagraph);
        }
        // Append new content to the new div
        newDiv.append(newContent);
    }

    // For other two sections
    else {
        // Loop through an with length of imageURLs
        for (var x = 0; x < sections[j].main.imageURLs.length; x++) {
            // Create new div to house only the image and its corresponding content
            var subDiv = $("<div>");

            // Create image tag
            var newImg = $("<img>").attr({ "src": sections[j].main.imageURLs[x], "class": "main-img" });
            subDiv.append(newImg);

            // Create p tag with content
            var newParagraph = $("<p>").text(sections[j].main.content[x]);
            subDiv.append(newParagraph);

            // Append to newContent
            newContent.append(subDiv);
        }

        newDiv.append(newContent);
    }



    // Append div to main
    $("main").append(newDiv);

    idCount++;
}

