const {algo} = require('../index');

describe('algo', () => {
	[
		{input: '', output: ''},
		{input: 'SPORTIHOME', output: 'S'},
		{input: 'SSPORTIHOME', output: 'SS'},
		{input: 'SSPPORTIHOME', output: 'SS'},
		{input: 'SSPPPOORTIHOME', output: 'PPP'},
		{input: 'SSPPOORRRTTIIHHOOOMMEE', output: 'RRR'}
	].forEach(({input, output}) => {
		it(`returns ${output || 'an empty string'} when input is ${input || 'an empty string'}`, () => {
			expect(algo(input)).toBe(output);
		});
	});
});
