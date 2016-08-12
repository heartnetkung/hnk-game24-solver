exports.solve = function(intArray) {
	var len = intArray.length;
	if (len !== 4)
		throw new Error('There should be exactly 4 numbers');
	var solutions = [];
	var temp, temp2;
	for (var i = 0; i < len; i++)
		for (var j = 0; j < len; j++)
			for (var k = 0; k < len; k++)
				for (var l = 0; l < len; l++) {
					if (i === j || j === k || k === l || i === k || i === l || j === l)
						continue;
					temp = solveCase1(intArray[i], intArray[j], intArray[k], intArray[l]);
					temp2 = solveCase2(intArray[i], intArray[j], intArray[k], intArray[l]);
					solutions = solutions.concat(temp, temp2);
				}

	var keys = {};
	var uniqueSolutions = [];
	for (var i = 0, ii = solutions.length; i < ii; i++)
		keys[solutions[i].ops] = solutions[i].results;
	for (var x in keys)
		uniqueSolutions.push(keys[x]);

	return { solvable: uniqueSolutions.length !== 0, solutions: uniqueSolutions };
};

//(a.b).(c.d)
var solveCase1 = function(a, b, c, d) {
	var ans = [];
	for (var i = 0, ii = OPS.length; i < ii; i++)
		for (var j = 0, jj = OPS.length; j < jj; j++)
			for (var k = 0, kk = OPS.length; k < kk; k++)
				if (OPS[k](OPS[i](a, b), OPS[j](c, d)) === 24)
					ans.push({
						results: ['(', a, OPS[i], b, ')', OPS[k], '(', c, OPS[j], d, ')'].join(''),
						ops: [i, j, k].sort().join('')
					});
	return ans;
};

//((a.b).c).d
var solveCase2 = function(a, b, c, d) {
	var ans = [];
	for (var i = 0, ii = OPS.length; i < ii; i++)
		for (var j = 0, jj = OPS.length; j < jj; j++)
			for (var k = 0, kk = OPS.length; k < kk; k++)
				if (OPS[k](OPS[j](OPS[i](a, b), c), d) === 24)
					ans.push({
						results: ['((', a, OPS[i], b, ')', OPS[j], c, ')', OPS[k], d].join(''),
						ops: [i, j, k].sort().join('')
					});
	return ans;
};

var OPS = [function(a, b) {
	return a + b;
}, function(a, b) {
	return a - b;
}, function(a, b) {
	return a * b;
}, function(a, b) {
	return a / b;
}];
OPS[0].toString = function() {
	return '+';
};
OPS[1].toString = function() {
	return '-';
};
OPS[2].toString = function() {
	return '*';
};
OPS[3].toString = function() {
	return '/';
};
