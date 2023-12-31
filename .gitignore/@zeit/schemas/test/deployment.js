/* eslint camelcase: 0 */
const AJV = require('ajv');
const assert = require('assert');
const deploymentConfigSchema = require('../deployment/config');

const ajv = new AJV({allErrors: true, $data: true});

exports.test_unknown_keys = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		foo: 1,
		bar: 2
	});
	assert.equal(isValid, false);
	assert.equal(ajv.errors.length, 2);
	['foo', 'bar'].forEach((prop, i) => {
		const error = ajv.errors[i];
		assert.equal(error.keyword, 'additionalProperties');
		assert.equal(error.params.additionalProperty, prop);
	});
};

exports.test_features_object = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		features: {
			foo: 'v2',
			bar: 2
		}
	});
	assert.equal(isValid, true);
};

exports.test_slot_key = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		features: {
			cloud: 'v2'
		},
		slot: 'c.125-m512'
	});
	assert.equal(isValid, true);
};

exports.test_staging_slot_key = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		features: {
			cloud: 'v2'
		},
		slot: 'staging-c.5-t1-w-m1024'
	});
	assert.equal(isValid, true);
};

exports.test_invalid_slot_key = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		features: {
			cloud: 'v2'
		},
		slot: 'invalid-key'
	});
	assert.equal(isValid, false);
};

exports.test_slot_key_without_cloud_v2 = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		slot: 'c.125-m512'
	});
	assert.equal(isValid, false);
};

exports.test_invalid_features_object = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		features: {
			foo: []
		}
	});
	assert.equal(isValid, false);
};

exports.test_features_object = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		limits: {
			duration: 60000,
			maxConcurrentReqs: 2,
			timeout: 60000 * 2
		}
	});
	assert.equal(isValid, true);
};

exports.test_invalid_limits_object = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		limits: {
			foo: []
		}
	});
	assert.equal(!isValid, true);
};

exports.test_valid_env_types = () => {
	let isValid = ajv.validate(deploymentConfigSchema, {
		env: {
			VALID: '1'
		}
	});
	assert.equal(isValid, true);

	isValid = ajv.validate(deploymentConfigSchema, {
		env: [
			'VALID'
		]
	});
	assert.equal(isValid, true);
};

exports.test_invalid_env_types = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		env: {
			INVALID: true
		}
	});
	assert.equal(!isValid, true);
};

exports.test_valid_build_env_types = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		build: {
			env: {
				VALID: '1'
			}
		}
	});
	assert.equal(isValid, true);
};

exports.test_invalid_build_env_types = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		build: {
			env: {
				INVALID: true
			}
		}
	});
	assert.equal(!isValid, true);
};

exports.test_invalid_static_object = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		'static': {
			foo: []
		}
	});
	assert.equal(isValid, false);
};

exports.test_valid_static_headers_object = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		'static': {
			headers: [
				{
					source: '/_next/webpack/chunks/*',
					headers: [{
						key: 'Cache-Control',
						value: 'adssds'
					}]
				},
				{
					source: '/_next/static/commons/**',
					headers: [{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable'
					}]
				},
				{
					source: '/_next/*/page/**/*.js',
					headers: [{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable'
					}]
				}
			]
		}
	});

	assert.equal(isValid, true);

	for (let i = 0x20; i <= 0xff; i++) {
		if (i > 0x7e && i < 0xa0) {
			continue;
		}

		const result = ajv.validate(deploymentConfigSchema, {
			'static': {
				headers: [
					{
						source: '/',
						headers: [{
							key: 'X-Test',
							value: `value ${String.fromCharCode(i)}`
						}]
					}
				]
			}
		});

		assert.equal(result, true, `Failed to validate for char: 0x${i.toString(16)}`);
	}
};

exports.test_invalid_static_headers_object = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		'static': {
			headers: [
				{
					source: '/_next/webpack/chunks/*',
					headers: [{
						key: ':alternate-protocol',
						value: 'foo\x00bar'
					}]
				},
				{
					source: '/_next/static/commons/**',
					headers: [{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable'
					}]
				}
			]
		}
	});

	assert.equal(isValid, false);

	// Use 256 to go above 0xff
	for (let i = 0; i <= 256; i++) {
		if ((i >= 0x20 && i <= 0x7e) || (i >= 0xa0 && i <= 0xff)) {
			continue;
		}

		const result = ajv.validate(deploymentConfigSchema, {
			'static': {
				headers: {
					source: '/',
					headers: [{
						key: 'X-Test',
						value: `value ${String.fromCharCode(i)}`
					}]
				}
			}
		});

		assert.equal(result, false, `Failed to error for char: 0x${i.toString(16)}`);
	}
};

exports.test_valid_static_object_trailing_slash = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		'static': {
			trailingSlash: true
		}
	});
	assert.equal(isValid, true);
};

exports.test_valid_static_object_invalid_prop = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		'static': {
			trailingSlash: []
		}
	});
	assert.equal(isValid, false);
};

exports.test_project = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		project: 'cool-project'
	});
	assert.equal(isValid, true);
};

exports.test_github_enabled = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		github: {
			enabled: false
		}
	});
	assert.equal(isValid, true);
};

exports.test_github_silent = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		github: {
			silent: true
		}
	});
	assert.equal(isValid, true);
};

exports.test_github_auto_alias = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		github: {
			autoAlias: false
		}
	});
	assert.equal(isValid, true);
};

exports.test_github_auto_job_cancelation = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		github: {
			autoJobCancelation: false
		}
	});
	assert.equal(isValid, true);
};

exports.test_github_additional_field = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		github: {
			abc: 'bbc'
		}
	});
	assert.equal(isValid, false);
};

exports.test_scale_sfo1 = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		scale: {
			sfo1: {
				min: 0,
				max: 1
			}
		}
	});
	assert.equal(isValid, true);
};

exports.test_scale_all = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		scale: {
			all: {
				min: 0,
				max: 'auto'
			}
		}
	});
	assert.equal(isValid, true);
};

exports.test_scale_invalid = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		scale: {
			foo: {
				min: -1,
				max: 'auto'
			}
		}
	});
	assert.equal(isValid, false);
};

exports.test_scale_invalid_min = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		scale: {
			foo: {
				min: 2,
				max: 1
			}
		}
	});
	assert.equal(isValid, false);
};

exports.test_service_invalid = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		service: 'foo'
	});
	assert.equal(isValid, false);
};

exports.test_service_port_valid = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		service: {
			port: 80
		}
	});
	assert.equal(isValid, true);
};

exports.test_service_port_invalid = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		service: {
			port: 0
		}
	});
	assert.equal(isValid, false);
};

exports.test_service_port_invalid_type = () => {
	const isValid = ajv.validate(deploymentConfigSchema, {
		service: {
			port: '3000'
		}
	});
	assert.equal(isValid, false);
};
