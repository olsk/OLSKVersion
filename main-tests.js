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
	
	it('throws if ParamLimit not number', function () {
		throws(function () {
			_OLSKVersionAdd({
				ParamLimit: null,
			});
		}, /OLSKErrorInputNotValid/);
	});
	
	it('creates array at ParamKey if none', function () {
		const ParamKey = Math.random().toString();
		const ParamData = Math.random().toString();

		deepEqual(_OLSKVersionAdd({
			ParamKey,
			ParamData,
		})[ParamKey], [ParamData]);
	});
	
	it('adds ParamData to array at ParamKey if exists', function () {
		const ParamKey = Math.random().toString();
		const ParamData = Math.random().toString();

		deepEqual(_OLSKVersionAdd({
			ParamMap: {
				[ParamKey]: [ParamData],
			},
			ParamKey,
			ParamData,
		})[ParamKey], [ParamData, ParamData]);
	});
	
	it('keeps ParamLimit items', function () {
		const ParamLimit = uRandomInt();
		const array = Array.from(Array(ParamLimit));
		const ParamKey = Math.random().toString();
		const ParamData = Math.random().toString();

		deepEqual(_OLSKVersionAdd({
			ParamMap: {
				[ParamKey]: array,
			},
			ParamKey,
			ParamLimit,
			ParamData,
		})[ParamKey], array.concat(ParamData).slice(-ParamLimit));
	});
	
	it('creates copy if ParamData object', function () {
		const ParamKey = Math.random().toString();
		const item = {
			[Math.random().toString()]: Math.random().toString(),
		};

		require('assert').notStrictEqual(_OLSKVersionAdd({
			ParamMap: {
				[ParamKey]: [item],
			},
			ParamKey,
			ParamData: item,
		})[ParamKey].slice(-1).pop(), item);
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
