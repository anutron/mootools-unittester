var UnitTester = {
	site: 'MooTools', //title of your site
	title: 'Unit Test Demo', //title of this test group
	path: '',
	ready: function(UnitTester){
		new UnitTester({
			demo: 'DemoScripts/' //path to Source/scripts.json
		}, {
			DemoScripts: 'DemoTests/' //path to tests.json
		});
	}
};