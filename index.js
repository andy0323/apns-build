var builder = require('./lib/apns-build.js');

module.exports = function (cer_path, key_path, cer_pem_output_path, key_pem_output_path) {

	builder.node(cer_path, key_path, cer_pem_output_path, key_pem_output_path);
}