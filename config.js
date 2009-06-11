UnitTester.site = 'Clientcide';
UnitTester.title = 'Unit Test Demo';

window.addEvent('load', function(){
	new UnitTester({
		demo: 'DemoScripts/'
	}, {
		DemoScripts: 'DemoTests/'
	});
});