'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	$('#colorBtn').click(randomizeColors);
}

var projectHTML;
var object;
/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();
	object = $(this).next();
	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);
	console.log("http://localhost:3000/project/" + idNumber);
	//$(this).next().html("FOO");
	$.get("http://localhost:3000/project/" + idNumber, cbfnct);
	//$(this).next().html(projectHTML);
}


function cbfnct(result){
	console.log(result);
	projectHTML = result['summary'];
	projectHTML += '<img class="detailsImage" src='+result['image'] + '>';
	object.html(projectHTML);
}

function colorfn(result){
	console.log(result);
	projectHTML = result['summary'];
	projectHTML += '<img class="detailsImage" src='+result['image'] + '>';
	object.html(projectHTML);
}

/*
 * Make an AJAX call to retrieve a color palette for the site
 * and apply it
 */
function randomizeColors(e) {
	console.log("User clicked on color button");
	$.get("http://localhost:3000/palatte", colorfn);
}