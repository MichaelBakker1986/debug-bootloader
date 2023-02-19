
'use strict'
// noinspection ES6ConvertRequireIntoImport
const consola = require('consola')
// noinspection ES6ConvertRequireIntoImport
const path = require('path');

['debug', 'log', 'warn', 'info', 'error'].forEach((methodName) => {
	const originalLoggingMethod = consola[methodName]
	console[methodName] = (firstArgument, ...otherArguments) => {
		const originalPrepareStackTrace = Error.prepareStackTrace
		Error.prepareStackTrace = (_, stack) => stack
		const callee = new Error().stack[1]
		Error.prepareStackTrace = originalPrepareStackTrace
		 const relativeFileName = path.relative(process.cwd(), callee.getFileName())
//		const relativeFileName = path.basename(callee.getFileName())
		const prefix = `.(${ relativeFileName }:${ callee.getLineNumber() }) `
		if (typeof firstArgument === 'string') {
			originalLoggingMethod(prefix + ' ' + firstArgument, ...otherArguments)
		} else {
			originalLoggingMethod(prefix, firstArgument, ...otherArguments)
		}
	}
})
