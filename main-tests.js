const { throws, deepEqual } = require('assert');

const mod = require('./main.js');

describe('OLSKVersionAdd', function test_OLSKVersionAdd() {

	const _OLSKVersionAdd = function (inputData = {}) {
		return mod.OLSKVersionAdd(Object.assign({
			ParamMap: {},
			ParamKey: Math.random().toString(),
			ParamData: Math.random().toString(),
		}, inputData));
	}

	it('throws if not object', function () {
		throws(function () {
			mod.OLSKVersionAdd(null);
		}, /OLSKErrorInputNotValid/);
	});

	it('throws if ParamMap not object', function () {
		throws(function () {
			_OLSKVersionAdd({
				ParamMap: null,
			});
		}, /OLSKErrorInputNotValid/);
	});
	
	it('throws if ParamKey not string', function () {
		throws(function () {
			_OLSKVersionAdd({
				ParamKey: null,
			});
		}, /OLSKErrorInputNotValid/);
	});
	
	it('throws if ParamData not defined', function () {
		throws(function () {
			_OLSKVersionAdd({
				ParamData: undefined,
			});
		}, /OLSKErrorInputNotValid/);
	});
	
	it('returns ParamMap', function () {
		const ParamMap = {
			[Math.random().toString()]: Math.random().toString(),
		};

		deepEqual(_OLSKVersionAdd({
			ParamMap,
		}), ParamMap);
	});
	
	it('creates array at ParamKey if none', function () {
		const ParamKey = Math.random().toString();

		deepEqual(_OLSKVersionAdd({
			ParamKey,
			ParamData: ParamKey,
		})[ParamKey], [ParamKey]);
	});
	
	it('adds ParamData to array at ParamKey if exists', function () {
		const ParamKey = Math.random().toString();

		deepEqual(_OLSKVersionAdd({
			ParamMap: {
				[ParamKey]: [ParamKey],
			},
			ParamKey,
			ParamData: ParamKey,
		})[ParamKey], [ParamKey, ParamKey]);
	});
	
});

describe('OLSKVersionClear', function test_OLSKVersionClear() {

	it('throws if param1 not object', function () {
		throws(function () {
			mod.OLSKVersionClear(null, Math.random().toString(), Math.random());
		}, /OLSKErrorInputNotValid/);
	});
	
	it('throws if param2 not string', function () {
		throws(function () {
			mod.OLSKVersionClear({}, null, Math.random());
		}, /OLSKErrorInputNotValid/);
	});
	
	it('returns param1', function () {
		const item = {
			[Math.random().toString()]: Math.random().toString(),
		};

		deepEqual(mod.OLSKVersionClear(item, Math.random().toString()), item);
	});
	
	it('clears array at param2 if exists', function () {
		const item = Math.random().toString();

		deepEqual(mod.OLSKVersionClear({
			[item]: [item]
		}, item), {});
	});
	
});
