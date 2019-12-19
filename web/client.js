(function() {

if (location.protocol === "https:" || location.protocol === "http:") {
	// Page is pre-rendered on the server under file://, so these should only run on the client
	if (location.pathname.indexOf("/classes/") > -1) {
		// Class readings

		// Load NB
		var script = document.createElement("script");
		script.src = "https://nb.mit.edu/embed_NB.js";
		document.head.appendChild(script);
	}
}

})();
