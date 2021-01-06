const { throws, deepEqual } = require('assert');

const mod = require('./main.js');

describe('OLSKVersionAdd', function test_OLSKVersionAdd() {

	it('throws if param1 not object', function () {
		throws(function () {
			mod.OLSKVersionAdd(null, Math.random().toString(), Math.random());
		}, /OLSKErrorInputNotValid/);
	});
	
	it('throws if param2 not string', function () {
		throws(function () {
			mod.OLSKVersionAdd({}, null, Math.random());
		}, /OLSKErrorInputNotValid/);
	});
	
	it('returns param1', function () {
		const item = {
			[Math.random().toString()]: Math.random().toString(),
		};

		deepEqual(mod.OLSKVersionAdd(item, Math.random().toString(), Math.random()), item);
	});
	
	it('creates array at param2 if not exists', function () {
		const item = Math.random().toString();

		deepEqual(mod.OLSKVersionAdd({}, item, item)[item], [item]);
	});
	
	it('adds param3 to array at param2 if exists', function () {
		const item = Math.random().toString();

		deepEqual(mod.OLSKVersionAdd({
			[item]: [item]
		}, item, item)[item], [item, item]);
	});
	
});
