var bio = {
	"name" : "Xiang Lu",
	"role" : "Web Developer",
	"welcomeMessage": "Hello",
	"contacts": {
		"mobile": "512-221-8658",
		"email": "luxiang1986@gmail.com",
		"location": "Stroudsburg, PA",
		"twitter": "@ArtieLu",
		"github": "luxiang2015"
	},
	"skills": ["java", "python", "HTML", "CSS", "javascript"],
	"bioPic": "images/Artie.jpg"
};

var education = {
	"schools": [
		{
			"name": "East Stroudsburg University",
			"location": "East Stroudsburg, PA",
			"major": "Computer Science",
			"degree": "Master, (expected)",
			"dates": "2014-",
			"url": "http://www.esu.edu"
		},
		{
			"name": "Emory University",
			"location": "Atlanta, GA",
			"degree": " ",
			"major": "Organic Chemistry",
			"dates": "2011-2014",
			"url": "http://www.emory.edu"
		},
		{
			"name": "Shanghai Institute of Organic Chemistry， CAS",
			"location": "Shanghai, China",
			"degree": "Master",
			"major": "Organic Chemistry",
			"dates": "2008-2011",
			"url": "http://english.sioc.cas.cn/"
		},
		{
			"name": "Wuhan University",
			"location": "Wuhan, China",
			"degree": "Bachelor",
			"major": "Finance",
			"dates": "2004-2008",
			"url": "http://en.whu.edu.cn/"
		}
	],
	"onlineCourses":[
		{
			"title": "Intro to Java Programming",
			"school": "Udacity",
			"date": "2014",
			"url": "https://www.udacity.com/course/cs046"
		},
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"date": "2015",
			"url": "https://www.udacity.com/course/nd001"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "Emory University",
			"title": "Teaching Assistant",
			"location": "Atlanta, GA",
			"dates": "2011-2014",
			"description": "Help students in the lab to improve their experimental skill."
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Mockup to website",
			"date": "2015",
			"description": "It's the first project in Udacity's front-end Nanodegree.In this project, I mocked up a given webpage using HTML and CSS.",
			"images": ""
		},
		{
			"title": "Interactive Resume",
			"date": "2015",
			"description": "It's the second project in Udacity's front-end Nanodegree. In this project, I worte an interactive resume of my own using javascript.",
			"images":""
		},
	]
};

function displayWork(){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(
		formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

function displaybio(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formaattedNameRole = formattedName + formattedRole;
	$("#header").prepend(formaattedNameRole);
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var bioPic = HTMLbioPic.replace("%data%", bio.bioPic);

	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedgithub);
	$("#topContacts").append(formattedtwitter);
	$("#topContacts").append(formattedLocation);
	$("#header").append(formattedWelcomeMsg);
	$("#header").append(bioPic);
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills){
		var formattedskill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#header").append(formattedskill);
	}
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedgithub);
	$("#footerContacts").append(formattedtwitter);
	$("#footerContacts").append(formattedLocation);

}

displaybio();

function displayeducation(){
	for (school in education.schools){
		$("#education").append(HTMLschoolStart);

		var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

		var formattedSchoolDegree = formattedSchool + formattedDegree;
		$(".education-entry:last").append(formattedSchoolDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedSchoolMajor);
	}

	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLschoolStart);

	for (course in education.onlineCourses){
		var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedonlineTitleSchool = formattedonlineTitle + formattedonlineSchool;

		$(".education-entry:last").append(formattedonlineTitleSchool);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		$(".education-entry:last").append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}

displayeducation();

function displayprojects(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
	}
}

displayprojects();


function displaymap(){
	$("#mapDiv").append(googleMap);
}

displaymap();

// function inName(name){
// 	name = name.trim().split(" ");
// 	console.log(name);
// 	name[1] = name[1].toUpperCase();
// 	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

// 	return name[0] + " " + name[1];
// }

// $('#main').append(internationalizeButton);

