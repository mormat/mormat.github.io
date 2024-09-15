
const fs = require('fs');

const { extract_sections, extract_codes, slugify } = require ('../../src/markdown_utils');

function format_scenario( { title, given = [], when = [], then = [] } ) {

	const indent = '  ';
	
	var string = indent + 'Scenario: ' + title + '\n';
	
	const keywords = {'Given': given, 'When': when, 'Then': then };

	for ( const [keyword, items] of Object.entries(keywords) ) {
	
		for ( const [n, text] of Object.entries(items) ) {
		
			const prefix = (n == 0 ? keyword : 'And');
			
			const lines = text.split("\n");
			string += indent.repeat(2) + prefix + ' ' + lines.shift() + "\n" ;
			while (lines.length > 0) {
				string += indent.repeat(3) + ' ' + lines.shift() + "\n" ;
			}
		
		}
		
	}
	
	string += "\n";
	
	return string;
	
}

function extract_scenarios(markdown) {

	const scenarios = [];
	
	const anchors = [];
	
	const sections = extract_sections(markdown);
	for (const section of sections) {
		const anchor = slugify(section.split("\n")[0], Object.keys(anchors));
		anchors[anchor] = section;
	
		const expecteds = section.split("\n")
			.filter(s => s.startsWith('> &#8227; '))
			.map(s => s.substring('> &#8227; '.length))
			.map(s => s.at(-1) == '\\' ? s.slice(0, -1) :s)
			;
			
		if (expecteds.length > 0) {
			const scenario = { 
				title: anchor, 
				given: [],
				when: ['I opened the test page'], 
				then: []
			};
			
			const codes = extract_codes(section);
			for (const code of codes) {
				const lines = code.split("\n");
				lines[0] = '"""';
				lines[lines.length - 1] = '"""';
				lines.unshift("the page contains the HTML:");
				scenario.given.push( lines.join("\n") );
			}
			
			for (const expected of expecteds) {
				scenario.then.push('expect to ' + expected);
			}
			
			scenarios.push(scenario);		
		}

	}

	return scenarios;
}

// called directly (not called through `require`)
if (require.main === module) {

	const [src, dest] = process.argv.slice(2, 4);
	
	const markdown = fs.readFileSync(src, 'utf8');
		
	console.log( extract_scenarios(markdown).map(format_scenario).join("\n") );
}

