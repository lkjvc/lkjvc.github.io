// define language reload anchors
var dataReload = document.querySelectorAll("[data-reload]");

// language translations
var dropdownicon = ' <i class="fas fa-caret-down"></i>';
var language = {
	en: {
		lang: '<span class="flag flag-us"> </span> English ',
		flag: "flag-en",
		about: "About Me",
		work: "Work",
		contact: "Contact",
		extra: "Extra",
		contactMe: "Contact Me",
		downloadCV: "Download CV",
	},
	rs: {
		lang: '<span class="flag flag-rs"> </span>  Srpski',
		flag: "flag-rs",
		about: "O meni",
		work: "Radovi",
		contact: "Kontakt",
		extra: "Dodatno",
		contactMe: "Kontaktiraj me",
		downloadCV: "Preuzmi CV",
		aboutmeh: "O Meni",
		aboutmet: "asdasdas",
	}
};
var lang1 = document.getElementById("lang1");
var lang2 = document.getElementById("lang2");
var about = document.getElementById("about");
var work = document.getElementById("work");
var contact = document.getElementById("contact");
var extra = document.getElementById("extra");
var contactMe = document.getElementById("contactMe");
var downloadCV = document.getElementById("downloadCV");
var aboutmeh = document.getElementById("aboutmeh");
var aboutmet = document.getElementById("aboutmet");


// define language changes via window hash
if (window.location.hash) {
	
	if ( window.location.hash === "#rs") {
		lang1.innerHTML = language.rs.lang + dropdownicon;
		lang2.innerHTML = language.en.lang;
		lang2.href = "#en";
		about.textContent = language.rs.about;
		work.textContent = language.rs.work;
		contact.textContent = language.rs.contact;
		extra.innerHTML = language.rs.extra + dropdownicon;
		contactMe.textContent = language.rs.contactMe;
		downloadCV.textContent = language.rs.downloadCV;
		aboutmeh.textContent = language.rs.aboutmeh;
		aboutmet.textContent = language.rs.aboutmet;
	}
}



// define language reload onclick illiteration
for (i=0; i <= dataReload.length; i++) {
	dataReload[i].onclick = function(){
		location.reload(true);
	}
}