const mod = {

	OLSKVersionAdd (params) {
		if (typeof params !== 'object' || params === null) {
			throw new Error('OLSKErrorInputNotValid');
		}
		if (typeof params.ParamMap !== 'object' || params.ParamMap === null) {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (typeof params.ParamKey !== 'string') {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (typeof params.ParamData === 'undefined') {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (typeof params.ParamLimit !== 'undefined') {
			if (typeof params.ParamLimit !== 'number') {
				throw new Error('OLSKErrorInputNotValid');
			}
		}

		if (typeof params.ParamData === 'object') {
			params.ParamData = JSON.parse(JSON.stringify(params.ParamData));
		}

		return Object.assign(params.ParamMap, {
			[params.ParamKey]: (params.ParamMap[params.ParamKey] || []).concat(params.ParamData).slice(-(params.ParamLimit || Infinity)),
		});
	},

	OLSKVersionClear (param1, param2) {
		if (typeof param1 !== 'object' || param1 === null) {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (typeof param2 !== 'string') {
			throw new Error('OLSKErrorInputNotValid');
		}

		delete param1[param2];

		return param1;
	},	

};

Object.assign(exports, mod);
