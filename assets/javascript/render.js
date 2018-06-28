// Populate nav tag with headings
var anchorCount = 0;
for (heading in sections) {
    // Create new div with class for styling
    var newDiv = $("<div>").attr("class", "nav-div");

    // Add image to new div
    newDiv.append($("<img>").attr({ "src": sections[heading].nav.imageURL, "class": "nav-img" }));
    // Add anchor tag to new div
    newDiv.append($("<a>").attr({ "href": "#" + Object.keys(sections)[anchorCount], 
        "class": "nav-heading", 
        "id": "nav-" + Object.keys(sections)[anchorCount]})
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

    // Add content specific to About Me section
    if (sections[j].title === "About Me") {
        var newContent = $("<div>");
        // Insert image tag
        var newImg = $("<img>").attr({ "src": sections[j].main.imageURL, "class": "main-img" });
        newContent.append(newImg);
        // Loop through text paragraphs
        for (element in sections[j].main.content) {
            // Create new p tag
            var newParagraph = $("<p>").text(sections[j].main.content[element]);
            // Append this p tag to new content div
            newContent.append(newParagraph);
        }
        // Append new content to the new div
        newDiv.append(newContent);
    }

    // For other two sections
    else {
        
    }



    // Append div to main
    $("main").append(newDiv);

    idCount++;
}

