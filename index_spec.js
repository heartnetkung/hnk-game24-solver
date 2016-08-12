var solver = require('./index');

describe('solve(intArray)', function() {
	it('should work', function() {
		var temp;

		temp = solver.solve([3, 7, 7, 3]);
		expect(temp.solvable).toBe(true);
		expect(temp.solutions.length).toBe(1);
		expect(temp.solutions[0]).toBe('((3/7)+3)*7');

		temp = solver.solve([6, 4, 1, 1]);
		expect(temp.solvable).toBe(true);
		expect(temp.solutions.length).toBe(6);

		temp = solver.solve([1, 2, 3, 4]);
		expect(temp.solvable).toBe(true);
		expect(temp.solutions.length).toBe(4);

		temp = solver.solve([1, 2, 3, 1]);
		expect(temp.solvable).toBe(false);
		expect(temp.solutions.length).toBe(0);
	});
});
