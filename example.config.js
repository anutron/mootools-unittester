UnitTester.site = 'YOUR SITE';
UnitTester.title = 'TITLE OF THIS SUITE - LIKE "MY SITE TESTS"';

window.addEvent('load', function(){
	new UnitTester({
		demo: 'PATH_TO_YOUR_SCRIPTS_DIRECTORY/' //contains Source/scripts.json
	}, {
		DemoScripts: 'PATH_TO_YOUR_TESTS_DIRECTORY/' //contains tests.json
	});
});