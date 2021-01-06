const mod = {

	OLSKVersionAdd (param1, param2, param3) {
		if (typeof param1 !== 'object' || param1 === null) {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (typeof param2 !== 'string') {
			throw new Error('OLSKErrorInputNotValid');
		}

		return Object.assign(param1, {
			[param2]: (param1[param2] || []).concat(param3),
		});
	},	

};

Object.assign(exports, mod);
