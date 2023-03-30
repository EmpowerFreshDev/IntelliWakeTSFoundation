/**
 * Converts a string to snake_case.
 *
 * @example
 * ToSnakeCase('UserToken')  // returns "user_token"
 *
 */
import {CleanNumber, CleanNumberNull, ReplaceAll, RoundTo, ToArray} from './Functions'

/**
 * Splits a string into its component words
 * @param str
 * @constructor
 *
 */
export const ToWords = (str: string | string[] | undefined | null): string[] => {
	if (!str) return []

	const strArray = ToArray(str)

	let results: string[] = []

	const separators = [' ', '_', ',', '-', '/', '\\', "'", '"', '=', '+', '~', '.', ',', '(', ')', '<', '>', '{', '}']

	loop_array: for (const strItem of strArray) {
		for (const separator of separators) {
			if (strItem.includes(separator)) {
				results = ToWords([...results, ...strItem.split(separator).filter((strText) => !!strText)])
				continue loop_array
			}
		}

		results = [...results, ...strItem.replace(/([A-Z]+|[A-Z]?[a-z]+)(?=[A-Z]|\b)/g, '!$&').split('!')].filter(
			(strText) => !!strText
		)
	}

	return results.filter((strText) => !!strText)
}

/**
 * Splits a string into its component text without whitespaces
 * @param str
 * @constructor
 *
 */
export const SplitNonWhiteSpace = (str: string | string[] | undefined | null): string[] => {
	if (!str) return []

	const strArray = ToArray(str)

	let results: string[] = []

	const separators = [' ', '_', ',', '-', '/', '\\', "'", '"', '=', '+', '~', '.', ',', '(', ')', '<', '>', '{', '}']

	loop_array: for (const strItem of strArray) {
		for (const separator of separators) {
			if (strItem.includes(separator)) {
				results = SplitNonWhiteSpace([...results, ...strItem.split(separator).filter((strText) => !!strText)])
				continue loop_array
			}
		}

		results = [...results, strItem].filter((strText) => !!strText)
	}

	return results.filter((strText) => !!strText)
}

/**
 *
 * @param str
 * @constructor
 *
 */
export const ToFirstLetterUpper = (str: string | undefined | null): string => {
	if (!str) return ''

	return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase()
}

/**
 *
 * @param str
 * @constructor
 *
 */
export const ToFirstLetterUpperSmart = (str: string | undefined | null): string => {
	if (!str) return ''

	if (str === str.toUpperCase()) return str

	if (str.toLowerCase() === 'id') return 'ID'

	return ToFirstLetterUpper(str)
}

/**
 * To Snake Case ('To Snake Case' = 'to_snake_case')
 * @param str
 * @constructor
 *
 */
export const ToSnakeCase = (str: string | string[] | undefined | null): string =>
	ToWords(str)
		.map((st) => st.toLowerCase())
		.join('_')

/**
 * Converts a string to kebab-case. *
 * @example
 * ToSnakeCase('UserToken')  // returns "user-token"
 *
 */
export const ToKebabCase = (str: string | string[] | undefined | null): string =>
	ToWords(str)
		.map((st) => st.toLowerCase())
		.join('-')

/**
 * Converts a string to camelCase.
 *
 * @example
 * ToCamelCase('user_token') //  returns "userToken
 *
 */
export const ToCamelCase = (str: string | string[] | undefined | null): string =>
	ToWords(str)
		.map((st, idx) => (!idx ? st.toLowerCase() : st === st.toUpperCase() ? st : ToFirstLetterUpperSmart(st)))
		.join('')

/**
 * To Upper Case Words
 * @param str
 * @constructor
 *
 */
export const ToUpperCaseWords = (str: string | string[] | undefined | null): string =>
	ToWords(str)
		.map((st) => (st === st.toUpperCase() ? st : ToFirstLetterUpperSmart(st)))
		.join(' ')

/**
 * Converts a string to PascalCase.
 *
 * @example
 * ToPascalCase('user_token') //  returns "UserToken
 *
 */
export const ToPascalCase = (str: string | string[] | undefined | null): string =>
	ToWords(str)
		.map((st) => (st === st.toUpperCase() ? st : ToFirstLetterUpperSmart(st)))
		.join('')

/**
 * Takes a string and returns the initials, like "Dennis J Peters" = "DJP", and "Peters, Dennis J" = "DJP"
 * @param str
 * @constructor
 *
 */
export const ToInitials = (str: string | string[] | undefined | null): string => {
	if (!str) return ''

	if (typeof str === 'string') {
		const commaItems = str.split(',')
		if (commaItems.length === 2) {
			return ToWords([commaItems[1], commaItems[0]])
				.map((st) => st.substring(0, 1).toUpperCase())
				.join('')
		}
	}

	return ToWords(str)
		.map((st) => st.substring(0, 1).toUpperCase())
		.join('')
}

/**
 * Replaces links to an anchor tag.
 *
 * @example
 * // returns <a href='https://www.google.com' target='_blank'>https://www.google.com</a>
 * ReplaceLinks('https://www.google.com')
 *
 */
export const ReplaceLinks = function (subject: string | undefined | null): string {
	if (!subject) return ''

	// noinspection RegExpUnnecessaryNonCapturingGroup
	let str = subject.replace(/(?:\r\n|\r|\n)/g, '<br />')
	// noinspection HtmlUnknownTarget
	const target = "<a href='$1' target='_blank'>$1</a>"
	// noinspection RegExpRedundantEscape
	return str.replace(/(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/gi, target)
}

/**
 * Removes script tags.
 *
 * @example
 * // returns "blank"
 * CleanScripts('<script>console.log(1)</script>blank')
 *
 */
export const CleanScripts = function (subject: string | undefined | null): string {
	if (!subject) return ''

	return subject.replace(/<.*?script.*?>.*?<\/.*?script.*?>/gim, '')
}

/**
 * Removes any given HTML tag and retains what's inside of the tag.
 *
 * @example
 * // returns "john doe"
 * TextToHTML('<p>john doe</p>')
 *
 */
export const TextToHTML = function (subject: string | undefined | null): string {
	if (!subject) return ''

	let str = subject.replace(/(<([^>]+)>)/gi, '')
	// noinspection RegExpUnnecessaryNonCapturingGroup
	return str.replace(/(?:\r\n|\r|\n)/g, '<br />')
}

/**
 * Strips scripts and other tags from HTML
 *
 * @param subject
 * HTMLToText('<p>john doe</p>') // returns john doe
 *
 */
export const HTMLToText = (subject: string | undefined | null): string => CleanScripts(subject).replace(/<[^>]*>/g, '')

/**
 *
 * @param subject
 * @param length
 * @param padString
 * @constructor
 *
 */
export const LeftPad = (subject: string | undefined | null, length: number, padString: string): string => {
	let str = subject ?? ''

	while (str.length < length) str = padString + str

	return str
}
/**
 *
 * @param subject
 * @param length
 * @param padString
 * @constructor
 *
 */
export const RightPad = (subject: string | undefined | null, length: number, padString: string): string => {
	let str = subject ?? ''

	while (str.length < length) str = str + padString

	return str
}

/**
 * Returns the given number with a dollar sign.
 *
 * @example
 * // returns $100.00
 * ToCurrency(100)
 *
 */
export const ToCurrency = (value: any, decimals: number = 2): string => {
	return (
		'$' +
		CleanNumber(value).toLocaleString(undefined, {
			maximumFractionDigits: decimals,
			minimumFractionDigits: decimals
		})
	)
}

/**
 * Returns the given number with a dollar sign.
 *
 * @example
 * // returns $100.00
 * ToCurrency(100)
 *
 */
export const ToCurrencyMax = (value: any, decimals: number = 2): string => {
	return (
		'$' +
		CleanNumber(value).toLocaleString(undefined, {
			maximumFractionDigits: decimals
		})
	)
}

/**
 * Converts the given number to a percentage with a percent sign.
 *
 * @example
 * // returns 50%
 * ToPercent(0.5)
 *
 */
export const ToPercent = (value: any, decimals: number = 0): string => {
	return (
		(CleanNumber(value) * 100).toLocaleString(undefined, {
			maximumFractionDigits: decimals,
			minimumFractionDigits: decimals
		}) + '%'
	)
}

/**
 * Converts the given number to a percentage with a percent sign.
 *
 * @example
 * // returns 50%
 * ToPercent(0.5)
 *
 */
export const ToPercentMax = (value: any, decimals: number = 0): string => {
	return (
		(CleanNumber(value) * 100).toLocaleString(undefined, {
			maximumFractionDigits: decimals
		}) + '%'
	)
}

/**
 * Returns the given number with a dollar sign if not empty or 0. Otherwise, returns empty string.
 *
 * @example
 * // returns $100.00
 * ToCurrency(100)
 *
 * // returns ''
 * ToCurrencyBlank('')
 *
 */
export const ToCurrencyBlank = (value: any, decimals: number = 2): string => {
	if (!value || isNaN(value) || CleanNumber(value) === 0) {
		return ''
	}

	return (
		'$' +
		CleanNumber(value).toLocaleString(undefined, {
			maximumFractionDigits: decimals,
			minimumFractionDigits: decimals
		})
	)
}

/**
 * Returns the given number with a dollar sign if not empty or 0. Otherwise, returns dash.
 *
 * @example
 * // returns $100.00
 * ToCurrency(100)
 *
 * // returns ''
 * ToCurrencyBlank('-')
 *
 */
export const ToCurrencyDash = (value: any, decimals: number = 2): string => {
	if (!value || isNaN(value) || CleanNumber(value) === 0) {
		return '-'
	}

	return (
		'$' +
		CleanNumber(value).toLocaleString(undefined, {
			maximumFractionDigits: decimals,
			minimumFractionDigits: decimals
		})
	)
}

/**
 * Converts the given number to a percentage with a percent sign if not empty or 0. Otherwise,
 * returns empty string.
 *
 * @example
 * // returns 50%
 * ToPercent(0.5)
 *
 * // returns ''
 * ToPercent('')
 *
 */
export const ToPercentBlank = (value: any, decimals: number = 2): string => {
	if (!value || isNaN(value) || CleanNumber(value) === 0) {
		return ''
	}

	return (
		(CleanNumber(value) * 100).toLocaleString(undefined, {
			maximumFractionDigits: decimals,
			minimumFractionDigits: decimals
		}) + '%'
	)
}

/**
 * Converts the given number to a percentage with a percent sign if not empty or 0. Otherwise,
 * returns dash.
 *
 * @example
 * // returns 50%
 * ToPercent(0.5)
 *
 * // returns '-'
 * ToPercent('')
 *
 */
export const ToPercentDash = (value: any, decimals: number = 2): string => {
	if (!value || isNaN(value) || CleanNumber(value) === 0) {
		return '-'
	}

	return (
		(CleanNumber(value) * 100).toLocaleString(undefined, {
			maximumFractionDigits: decimals,
			minimumFractionDigits: decimals
		}) + '%'
	)
}

/**
 * Returns the given number with decimal places.
 *
 * @example
 * // return 10.00
 * ToDigits(10)
 *
 */
export const ToDigits = function (value: any, decimals: number = 0, minDecimals: number | null = null): string {
	return CleanNumber(value).toLocaleString(undefined, {
		maximumFractionDigits: decimals,
		minimumFractionDigits: minDecimals ?? decimals
	})
}

/**
 * Returns the given number with decimal places.
 *
 * @example
 * // return 10.00
 * ToDigits(10)
 *
 */
export const ToDigitsMax = function (value: any, decimals: number = 0): string {
	return CleanNumber(value, decimals).toLocaleString(undefined, {
		maximumFractionDigits: decimals
	})
}

/**
 * Returns the given number with decimal places if not empty or 0. Otherwise,
 * returns empty string.
 *
 * @example
 * // return 10.00
 * ToDigits(10)
 *
 * // returns ''
 * ToDigits('')
 *
 */
export const ToDigitsBlank = function (value: any, decimals: number = 0) {
	if (!value || isNaN(value) || CleanNumber(value) === 0) {
		return ''
	}

	return CleanNumber(value).toLocaleString(undefined, {
		maximumFractionDigits: decimals,
		minimumFractionDigits: decimals
	})
}

/**
 * Returns the given number with decimal places if not empty or 0. Otherwise,
 * returns empty string.
 *
 * @example
 * // return 10.00
 * ToDigits(10)
 *
 * // returns ''
 * ToDigits('')
 *
 */
export const ToDigitsBlankMax = function (value: any, decimals: number = 0) {
	if (!value || isNaN(value) || CleanNumber(value, decimals) === 0) {
		return ''
	}

	return CleanNumber(value, decimals).toLocaleString(undefined, {
		maximumFractionDigits: decimals
	})
}

/**
 * Returns the given number with decimal places if not empty or 0. Otherwise,
 * returns dash.
 *
 * @example
 * // return 10.00
 * ToDigits(10)
 *
 * // returns '-'
 * ToDigits('')
 *
 */
export const ToDigitsDash = function (value: any, decimals: number = 0) {
	if (!value || isNaN(value) || CleanNumber(value) === 0) {
		return '-'
	}

	return CleanNumber(value).toLocaleString(undefined, {
		maximumFractionDigits: decimals,
		minimumFractionDigits: decimals
	})
}

/**
 * Returns the given number with decimal places if not empty or 0. Otherwise,
 * returns dash.
 *
 * @example
 * // return 10.00
 * ToDigits(10)
 *
 * // returns '-'
 * ToDigits('')
 *
 */
export const ToDigitsDashMax = function (value: any, decimals: number = 0) {
	if (!value || isNaN(value) || CleanNumber(value, decimals) === 0) {
		return '-'
	}

	return CleanNumber(value, decimals).toLocaleString(undefined, {
		maximumFractionDigits: decimals
	})
}

/**
 *
 * @param value
 * @constructor
 *
 */
export const DigitsNth = (value: any): string | null => {
	let result = ToDigits(value)

	if (!result) return null

	switch (result.substring(result.length - 2)) {
		case '11':
		case '12':
		case '13':
			result += 'th'
			break
		default:
			switch (result.substring(result.length - 1)) {
				case '1':
					result += 'st'
					break
				case '2':
					result += 'nd'
					break
				case '3':
					result += 'rd'
					break
				default:
					result += 'th'
					break
			}
	}

	return result
}

/**
 * Converts a string to an array.
 *
 * @example
 * // returns ['john doe']
 * ToStringArray('john doe')
 *
 */
export const ToStringArray = (value: string | string[]): string[] => {
	if (!value) {
		return []
	}

	if (typeof value === 'string') {
		return [value]
	} else {
		return value
	}
}

/**
 * Returns a formatted ssn with dashes.
 *
 * @example
 * // returns 123-12-1234
 * FormatSSN('123121234')
 *
 */
export const FormatSSN = (ssn: string | null | undefined): string => {
	// remove all non-dash and non-numerals
	let val = (ssn ?? '').replace(/[^\d-]/g, '')

	// add the first dash if number from the second group appear
	val = val.replace(/^(\d{3})-?(\d{1,2})/, '$1-$2')

	// add the second dash if numbers from the third group appear
	val = val.replace(/^(\d{3})-?(\d{2})-?(\d{1,4})/, '$1-$2-$3')

	// remove misplaced dashes
	val = val
		.split('')
		.filter((val, idx) => {
			return val !== '-' || idx === 3 || idx === 6
		})
		.join('')

	// enforce max length
	return val.substring(0, 11)
}

/**
 *
 *
 */
export interface IPhoneComponents {
	countryCode: string
	areaCode: string
	exchangeNumber: string
	subscriberNumber: string
	extension: string
}

/**
 *
 * @param phone
 * @constructor
 *
 */
export const PhoneComponents = (phone: string | null | undefined, bestGuess = true): IPhoneComponents | null => {
	if (!phone) return null

	let cleanNumber = ReplaceAll(['(', ')', '-', ' ', '+'], '', phone)

	let countryCode = ''

	while ((cleanNumber.startsWith('0') || cleanNumber.startsWith('1')) && cleanNumber.length !== 10) {
		countryCode += cleanNumber[0]
		cleanNumber = cleanNumber.substring(1)
	}

	let phoneComponents: IPhoneComponents = {
		countryCode: countryCode,
		areaCode: cleanNumber.substring(0, 3),
		exchangeNumber: cleanNumber.substring(3, 6),
		subscriberNumber: cleanNumber.substring(6, 10),
		extension: ''
	}

	if (
		!bestGuess &&
		(phoneComponents.areaCode?.length != 3 ||
			phoneComponents.exchangeNumber?.length != 3 ||
			phoneComponents.subscriberNumber?.length != 4)
	) {
		return null
	}

	if (!!phoneComponents.areaCode && !!phoneComponents.exchangeNumber && !!phoneComponents.subscriberNumber) {
		let originalPhone = phone ?? ''
		let extensionIdx = originalPhone.indexOf(phoneComponents.areaCode)
		if (extensionIdx >= 0) {
			extensionIdx = originalPhone.indexOf(
				phoneComponents.exchangeNumber,
				extensionIdx + phoneComponents.areaCode.length
			)
			if (extensionIdx >= 0) {
				extensionIdx = originalPhone.indexOf(
					phoneComponents.subscriberNumber,
					extensionIdx + phoneComponents.exchangeNumber.length
				)
				if (extensionIdx >= 0) {
					phoneComponents.extension = originalPhone
						.substring(extensionIdx + phoneComponents.subscriberNumber.length)
						.trim()
				}
			}
		}
	}

	return phoneComponents
}

/**
 * Returns a formatted ssn with dashes.
 *
 * @example
 * // returns 123-12-1234
 * FormatSSN('123121234')
 *
 */
export const FormatPhoneNumber = (phone: string | null | undefined, bestGuess = true): string | null => {
	const components = PhoneComponents(phone, bestGuess)

	if (!components) return null

	let val = ''

	if (!!components.areaCode) val += `(${components.areaCode})`
	if (!!components.exchangeNumber) val += ` ${components.exchangeNumber}`
	if (!!components.subscriberNumber) val += `-${components.subscriberNumber}`
	if (!!components.extension) val += ` ${components.extension}`

	return val
}

/**
 * Returns a formatted phone number with parenthesis.
 *
 * @example
 * // returns (555) 555-1234
 * FormatPhoneNumber('5555551234')
 *
 */
export const FormatPhoneNumberOld = (phone: string, forceNumeric: boolean = false) => {
	//Filter only numbers from the input
	const cleaned = forceNumeric ? ('' + phone).replace(/\D/g, '') : '' + phone

	//Check if the input is of correct
	const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)

	if (match) {
		//Remove the matched extension code
		//Change this to format for any country code.
		let intlCode = match[1] ? '+1 ' : ''
		return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
	}

	return phone
}

/**
 * Returns a formatted phone number with dots.
 *
 * @example
 * // returns 555.555.1234
 * FormatPhoneNumberDots('5555551234')
 *
 */
export const FormatPhoneNumberDots = (phone: string | null | undefined, bestGuess = true) => {
	const components = PhoneComponents(phone, bestGuess)

	if (!components) return null

	if (!components.areaCode || !components.exchangeNumber || !components.subscriberNumber) return null

	return `${components.areaCode}.${components.exchangeNumber}.${components.subscriberNumber}`

	// 	//Filter only numbers from the input
	// 	const cleaned = forceNumeric ? ('' + phone).replace(/\D/g, '') : '' + phone
	//
	// 	//Check if the input is of correct
	// 	const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
	//
	// 	if (match) {
	// 		//Remove the matched extension code
	// 		//Change this to format for any country code.
	// 		let intlCode = match[1] ? '+1 ' : ''
	// 		return [intlCode, match[2], '.', match[3], '.', match[4]].join('')
	// 	}
	//
	// 	return phone
}

/**
 * Returns a formatted phone number with dashes.
 *
 * @example
 * // returns 555-555-1234
 * FormatPhoneNumberDashes('5555551234')
 *
 */
export const FormatPhoneNumberDashes = (phone: string | null | undefined, bestGuess = true) => {
	const components = PhoneComponents(phone, bestGuess)

	if (!components) return null

	if (!components.areaCode || !components.exchangeNumber || !components.subscriberNumber) return null

	return `${components.areaCode}-${components.exchangeNumber}-${components.subscriberNumber}`

	// console.log('PHONE', phone, components)
	//
	// //Filter only numbers from the input
	// const cleaned = '' + phone.toString()
	//
	// //Check if the input is of correct
	// const match = cleaned.match(/^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/)
	//
	// // console.log('MATCH', phone, match)
	//
	// if (match) {
	// 	let intlCode = match[1] ? '+1 ' : ''
	// 	return [intlCode, match[2], '-', match[3], '-', match[4]].join('')
	// }
	//
	// return null
}

/**
 * Formats a zip code by adding a hyphen in a 9 digit code.
 *
 * @example
 * // returns "12345-6789"
 * FormatZip('123456789')
 *
 */
export const FormatZip = (zip: string) => {
	//Filter only numbers from the input
	let cleaned = ('' + zip).replace(/\D/g, '')

	// check if the input is a 9 digit code
	if (cleaned.length === 9) {
		cleaned = cleaned.replace(/(\d{5})/, '$1-')
	}

	return cleaned
}

/**
 * Adds "http" on urls that don't have it.
 *
 * @example
 * // returns "http://www.google.com"
 * FormatExternalURL('www.google.com')
 *
 */
export const FormatExternalURL = (url: string): string => {
	if (!!url) {
		if (!url.startsWith('http')) {
			return 'http://' + url
		}

		return url
	}

	return ''
}

/**
 * Returns formatted full name.
 *
 * @example
 * // returns 'Doe, John Smith, Jr.'
 * DisplayNameFromFL('John', 'Doe', 'Smith', 'Jr.')
 *
 */
export const DisplayNameFromFL = (first?: string, last?: string, middle?: string, suffix?: string): string => {
	let returnName = ''

	if (!!last) {
		returnName += last

		if (!!first) {
			returnName += ', ' + first

			if (!!middle) {
				returnName += ' ' + middle
			}
		} else if (!!middle) {
			returnName += ', ' + middle
		}
	} else {
		if (!!first) {
			returnName += first

			if (!!middle) {
				returnName += ' ' + middle
			}
		} else {
			if (!!middle) {
				returnName += middle
			}
		}
	}

	if (!!suffix) {
		if (!!returnName) {
			returnName += ', '
		}

		returnName += suffix
	}

	return returnName
}

/**
 * Returns formatted name from an object.
 *
 * @example
 * // returns 'Doe, John Smith, Jr.'
 * DisplayNameFromObject({
 *   first_name: 'John',
 *   last_name: 'Doe',
 *   middle_name: 'Smith',
 *   suffix_name: 'Jr.',
 * })
 *
 */
export const DisplayNameFromObject = (object?: any, prefix?: string): string => {
	if (!object) return ''

	const actualPrefix = !!prefix ? `_${prefix}` : ''

	return DisplayNameFromFL(
		object[actualPrefix + 'first_name'],
		object[actualPrefix + 'last_name'],
		object[actualPrefix + 'middle_name'],
		object[actualPrefix + 'suffix_name']
	)
}

/**
 * Converts the first character of each word of a string to uppercase.
 *
 * @example
 * // return This Is Awesome
 * UCWords('This is awesome')
 *
 */
export const UCWords = (str: string | null): string | null => {
	if (!str) {
		return str
	}
	let strVal = ''
	const strItems = str.toLowerCase().split(' ')
	for (let chr = 0; chr < strItems.length; chr++) {
		strVal += strItems[chr].substring(0, 1).toUpperCase() + strItems[chr].substring(1, strItems[chr].length) + ' '
	}
	return strVal.trim()
}

/**
 * Generates a random string with a given length and valid characters.
 *
 * @example
 * // returns '32112'
 * RandomString(5, '12345')
 *
 */
export const RandomString = (length: number, validChars = 'ABCDEFGHJKLMNPQRTUVWXYZ2346789') => {
	let result = ''

	const charactersLength = validChars.length
	for (let i = 0; i < length; i++) {
		result += validChars.charAt(Math.floor(Math.random() * charactersLength))
	}
	return result

	// const validCharLength = validChars.length - 1
	//
	// let result = ''
	// for (let i = 0; i < length; i++) {
	// 	result += validChars.substr(Math.floor(Math.random() * validCharLength), 1)
	// }
	//
	// const ts = new Date().valueOf().toString()
	//
	// if (length > ts.length * 0.5) {
	// 	const offset = RoundTo((length - ts.length) / 2, 0)
	//
	// 	return result.substr(0, offset) + ts + result.substr(offset + ts.length)
	// }
	//
	// return result
}

/**
 *
 * @param length
 * @constructor
 *
 */
export const RandomKey = (length: number) =>
	RandomString(length, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12346789')

/**
 * Takes in text, and adds an "s" to the end of it if the count is zero or > 1
 * Note: An 'es' is added if the word ends in: s, ss, z, ch, sh, or x
 *
 * @param text
 * @param count
 * @param showNumber
 * @param maxDecimals
 * @param minDecimals
 * @constructor
 *
 */
export const AddS = (
	text?: string | null,
	count?: number | null,
	showNumber = false,
	maxDecimals = 0,
	minDecimals: number | null = null
): string => {
	const checkText = (text ?? '').toLowerCase()
	const numericText = ToDigits(count ?? 0, maxDecimals, minDecimals)
	let addValue = !text
		? 's'
		: checkText.endsWith('s') ||
		  checkText.endsWith('z') ||
		  checkText.endsWith('ch') ||
		  checkText.endsWith('sh') ||
		  checkText.endsWith('x')
		? 'es'
		: 's'
	return !text
		? ''
		: `${showNumber ? numericText : ''} ${text}${CleanNumber(numericText) !== 1 ? addValue : ''}`.trim()
}

/**
 *
 * @param value
 * @param decimals
 * @param round
 * @constructor
 *
 */
export const ShortNumber = (value: any, decimals = 0, round: 'round' | 'up' | 'down' = 'round'): string | null => {
	let calcValue = CleanNumberNull(value)

	if (calcValue === null) return null

	const showValue = (val: number, extension: string): string => {
		let returnVal = ToDigits(RoundTo(val, decimals, round), decimals)

		if (!!decimals) {
			while (returnVal.endsWith('0')) returnVal = returnVal.substring(0, returnVal.length - 1)
			while (returnVal.endsWith('.')) returnVal = returnVal.substring(0, returnVal.length - 1)
		}

		return returnVal + extension
	}

	if (calcValue < 999) {
		return showValue(calcValue, '')
	}

	calcValue /= 1000
	if (calcValue < 999) {
		return showValue(calcValue, 'k')
	}

	calcValue /= 1000
	if (calcValue < 999) {
		return showValue(calcValue, 'M')
	}

	calcValue /= 1000
	if (calcValue < 999) {
		return showValue(calcValue, 'B')
	}

	calcValue /= 1000
	if (calcValue < 999) {
		return showValue(calcValue, 'T')
	}

	let trillions = ''

	do {
		trillions += 'Q'
		calcValue /= 1000
	} while (calcValue > 999)

	return showValue(calcValue, trillions)
}

/**
 *
 * @param value
 * @param maxCharacters
 * @constructor
 *
 */
export const EllipsesAtMax = (
	value: string | null | undefined,
	maxCharacters: number = 15
): string | null | undefined => {
	if (!value || value.length <= maxCharacters) return value

	return `${value.substring(0, maxCharacters)}...`
}

/**
 *
 * @param value
 * @param asteriskPattern
 * @constructor
 *
 */
export const AsteriskMatch = (value: string | null | undefined, asteriskPattern: string): boolean => {
	if (!value) return false

	const regex = ReplaceAll('*', '([\\s\\S]*?)', ReplaceAll('\\', '\\/', asteriskPattern))

	if (!regex) return false

	return !!value.match(new RegExp(regex))?.length
}

/**
 *
 * @param paths
 * @constructor
 *
 */
export const BuildPath = (...paths: (string | null)[]) => {
	let build = paths
		.map((part, i) => {
			if (i === 0) {
				return (part ?? '').trim().replace(/[\/]*$/g, '')
			} else {
				return (part ?? '').trim().replace(/(^[\/]*|[\/]*$)/g, '')
			}
		})
		.filter((x) => x.length)
		.join('/')

	if (paths[0] === '/' && !build.startsWith('/')) return '/' + build

	return build
}
