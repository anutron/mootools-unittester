{
	tests: [
		{
			title: "Simple Prompt :: capitalization disabled", //the title of the test
			description: "Prompts the user to enter their name; does NOT capitalize it for them.", //a one liner description of the test
			verify: "Was your name added to the test frame (not capitalized)?", //the question the user should answer 
																																		//"yes" to that signifies success
			before: function(){
				simplePrompt(get("usersName"), "Enter your name (lower case):", "fred flintstone", false);
			}
		},
		{
			title: "Tests the .post format of tests (pass).",
			description: "An automated test that should pass without user interaction.",
			verify: "This should pass without you doing anything when it runs.",
			post: function(){
				dbug.log('returning true!');
				return true;
			}
		},
		{
			title: "Tests the .post format of tests (fail).",
			description: "An automated test that should fail without user interaction.",
			verify: "This should fail without you doing anything when it runs.",
			post: function(){
				dbug.log('returning false!');
				return false;
			}
		}
	],
	otherScripts: ["getElement"] //getElement isn't in our dependency chain, but I use it in the test itself
}