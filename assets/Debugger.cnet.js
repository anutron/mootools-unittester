//adds the debugger for non FF browsers (or FF w/o firebug)
//sets up the dbug alias; see dbug.js in Clientside lib
window.addEvent('domready', function(){
	try {
		if (!window.debug || !window.debug.path){
			var debug = {
				path: (window.UnitTester ? UnitTester.path : '') + 'assets/moobugger/'
			};
			var script = new Element('script', {
				id: 'debug-bookmarklet',
				src: debug.path + 'debugger.js'
			}).inject(document.head);
		}
	} catch(e){
	}
});
