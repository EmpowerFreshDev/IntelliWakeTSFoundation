/**
 * Splits a string into its component words
 * @param str
 * @constructor
 *
 */
export declare const ToWords: (str: string | string[] | undefined | null) => string[];
/**
 * Splits a string into its component text without whitespaces
 * @param str
 * @constructor
 *
 */
export declare const SplitNonWhiteSpace: (str: string | string[] | undefined | null) => string[];
/**
 *
 * @param str
 * @constructor
 *
 */
export declare const ToFirstLetterUpper: (str: string | undefined | null) => string;
/**
 *
 * @param str
 * @constructor
 *
 */
export declare const ToFirstLetterUpperSmart: (str: string | undefined | null) => string;
/**
 * To Snake Case ('To Snake Case' = 'to_snake_case')
 * @param str
 * @constructor
 *
 */
export declare const ToSnakeCase: (str: string | string[] | undefined | null) => string;
/**
 * Converts a string to kebab-case. *
 * @example
 * ToSnakeCase('UserToken')  // returns "user-token"
 *
 */
export declare const ToKebabCase: (str: string | string[] | undefined | null) => string;
/**
 * Converts a string to camelCase.
 *
 * @example
 * ToCamelCase('user_token') //  returns "userToken
 *
 */
export declare const ToCamelCase: (str: string | string[] | undefined | null) => string;
/**
 * To Upper Case Words
 * @param str
 * @constructor
 *
 */
export declare const ToUpperCaseWords: (str: string | string[] | undefined | null) => string;
/**
 * Converts a string to PascalCase.
 *
 * @example
 * ToPascalCase('user_token') //  returns "UserToken
 *
 */
export declare const ToPascalCase: (str: string | string[] | undefined | null) => string;
/**
 * Takes a string and returns the initials, like "Dennis J Peters" = "DJP", and "Peters, Dennis J" = "DJP"
 * @param str
 * @constructor *
 */
export declare const ToInitials: (str: string | string[] | undefined | null) => string;
/**
 * Checks if a string contains HTML tags
 *
 * @param {string | undefined | null} str - The string to check for HTML tags
 * @returns {boolean} True if the string contains HTML tags, False otherwise
 */
export declare const IncludesHTML: (str: string | undefined | null) => boolean;
/**
 * Replaces all URLs in a string with anchor tags, unless there is an "<img " item in the string
 * @param {string|null|undefined} subject - The string to replace the links in.
 * @param {string|null} [classes] - Optional classes to add to the anchor tag.
 * @returns {string} - The updated string with anchor tags replacing URLs.
 *
 * @example
 * // returns <a href='https://www.google.com' target='_blank' class='testClass'>https://www.google.com</a>
 * ReplaceLinks('https://www.google.com', 'testClass')
 *
 */
export declare const ReplaceLinks: (subject: string | undefined | null, classes?: string | null) => string;
/**
 * Removes script tags.
 *
 * @example
 * // returns "blank"
 * CleanScripts('<script>console.log(1)</script>blank')
 *
 */
export declare const CleanScripts: (subject: string | number | undefined | null) => string;
/**
 * Converts the given text to HTML format.
 *
 * @param {string | number | undefined | null} subject - The text to convert.
 * @returns {string} - The converted HTML string.
 */
export declare const TextToHTML: (subject: string | number | undefined | null) => string;
/**
 * Strips scripts and other tags from HTML
 *
 * @param subject
 * HTMLToText('<p>john doe</p>') // returns john doe
 *
 */
export declare const HTMLToText: (subject: string | number | undefined | null) => string;
/**
 *
 * @param subject
 * @param length
 * @param padString
 * @constructor
 *
 */
export declare const LeftPad: (subject: string | number | undefined | null, length: number, padString: string) => string;
/**
 *
 * @param subject
 * @param length
 * @param padString
 * @constructor
 *
 */
export declare const RightPad: (subject: string | number | undefined | null, length: number, padString: string) => string;
/**
 * Returns the given number with a dollar sign.
 *
 * @example
 * // returns $100.00
 * ToCurrency(100)
 *
 */
export declare const ToCurrency: (value: any, decimals?: number) => string;
/**
 * Returns the given number with a dollar sign.
 *
 * @example
 * // returns $100.00
 * ToCurrency(100)
 *
 */
export declare const ToCurrencyMax: (value: any, decimals?: number) => string;
/**
 * Converts the given number to a percentage with a percent sign.
 *
 * @example
 * // returns 50%
 * ToPercent(0.5)
 *
 */
export declare const ToPercent: (value: any, decimals?: number) => string;
/**
 * Converts the given number to a percentage with a percent sign.
 *
 * @example
 * // returns 50%
 * ToPercent(0.5)
 *
 */
export declare const ToPercentMax: (value: any, decimals?: number) => string;
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
export declare const ToCurrencyBlank: (value: any, decimals?: number) => string;
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
export declare const ToCurrencyDash: (value: any, decimals?: number) => string;
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
export declare const ToPercentBlank: (value: any, decimals?: number) => string;
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
export declare const ToPercentDash: (value: any, decimals?: number) => string;
/**
 * Returns the given number with decimal places.
 *
 * @example
 * // return 10.00
 * ToDigits(10)
 *
 */
export declare const ToDigits: (value: any, decimals?: number, minDecimals?: number | null) => string;
/**
 * Returns the given number with decimal places.
 *
 * @example
 * // return 10.00
 * ToDigits(10)
 *
 */
export declare const ToDigitsMax: (value: any, decimals?: number) => string;
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
export declare const ToDigitsBlank: (value: any, decimals?: number) => string;
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
export declare const ToDigitsBlankMax: (value: any, decimals?: number) => string;
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
export declare const ToDigitsDash: (value: any, decimals?: number) => string;
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
export declare const ToDigitsDashMax: (value: any, decimals?: number) => string;
/**
 * Converts a value to its corresponding ordinal number representation.
 *
 * @param {any} value - The value to convert.
 * @returns {string | null} - The ordinal number representation of the value or null if the conversion fails.
 */
export declare const DigitsNth: (value: any) => string | null;
/**
 * Converts a string to an array.
 *
 * @example
 * // returns ['john doe']
 * ToStringArray('john doe')
 *
 */
export declare const ToStringArray: (value: string | string[]) => string[];
/**
 * Returns a formatted ssn with dashes.
 *
 * @example
 * // returns 123-12-1234
 * FormatSSN('123121234')
 *
 */
export declare const FormatSSN: (ssn: string | null | undefined) => string;
/**
 *
 *
 */
export interface IPhoneComponents {
    countryCode: string;
    areaCode: string;
    exchangeNumber: string;
    subscriberNumber: string;
    extension: string;
}
/**
 * Extracts and returns the components of a phone number.
 *
 * @param phone - The input phone number as a string, which can be `null` or `undefined`.
 * @param bestGuess - An optional boolean flag (default is `true`) that determines
 *                    whether to return an object with the best guess of the
 *                    components if the input phone format is incorrect.
 * @returns An `IPhoneComponents` object with the extracted components, or `null`
 *          if the input phone number is not provided or cannot be parsed under
 *          the specified conditions.
 *
 * @remarks
 * The function takes a phone number string and extracts its components:
 * - countryCode
 * - areaCode
 * - exchangeNumber
 * - subscriberNumber
 * - extension
 *
 * The `bestGuess` flag allows choosing between returning an object with potential
 * partially correct components (if set to `true`) or refusing to return anything
 * (`null`) if the format is incorrect.
 *
 * Example usage:
 *
 * const phoneComponents = PhoneComponents("(123) 456-7890", false);
 * console.log(phoneComponents);
 * // Output: {
 * //   countryCode: "",
 * //   areaCode: "123",
 * //   exchangeNumber: "456",
 * //   subscriberNumber: "7890",
 * //   extension: ""
 * // }
 */
export declare const PhoneComponents: (phone: string | null | undefined, bestGuess?: boolean) => IPhoneComponents | null;
/**
 * Returns a formatted phone number.
 *
 * @example
 * // returns (123) 123-1234
 * FormatPhoneNumber('1231231234')
 *
 */
export declare const FormatPhoneNumber: (phone: string | null | undefined, bestGuess?: boolean) => string | null;
/**
 * Returns a formatted phone number in E.164 format for the US.
 *
 * @example
 * // returns +12231231234
 * FormatPhoneNumber('2231231234')
 *
 */
export declare const FormatPhoneNumberE164US: (phone: string | null | undefined, bestGuess?: boolean) => string | null;
/**
 * Returns a formatted phone number with parenthesis.
 *
 * @example
 * // returns (555) 555-1234
 * FormatPhoneNumber('5555551234')
 *
 */
export declare const FormatPhoneNumberOld: (phone: string, forceNumeric?: boolean) => string;
/**
 * Returns a formatted phone number with dots.
 *
 * @example
 * // returns 555.555.1234
 * FormatPhoneNumberDots('5555551234')
 *
 */
export declare const FormatPhoneNumberDots: (phone: string | null | undefined, bestGuess?: boolean) => string | null;
/**
 * Returns a formatted phone number with dashes.
 *
 * @example
 * // returns 555-555-1234
 * FormatPhoneNumberDashes('5555551234')
 *
 */
export declare const FormatPhoneNumberDashes: (phone: string | null | undefined, bestGuess?: boolean) => string | null;
/**
 * Formats a zip code by adding a hyphen in a 9 digit code.
 *
 * @example
 * // returns "12345-6789"
 * FormatZip('123456789')
 *
 */
export declare const FormatZip: (zip: string | number | null | undefined) => string;
/**
 * Formats a tax number by adding a hyphen.
 *
 * @example
 * // returns "11-2222222"
 * FormatTaxID('112222222')
 *
 */
export declare const FormatTaxID: (taxID: string | number | null | undefined) => string | null;
/**
 * Adds "http" on urls that don't have it.
 *
 * @example
 * // returns "http://www.google.com"
 * FormatExternalURL('www.google.com')
 *
 */
export declare const FormatExternalURL: (url: string | null | undefined) => string;
/**
 * Returns formatted full name.
 *
 * @example
 * // returns 'Doe, John Smith, Jr.'
 * DisplayNameFromFL('John', 'Doe', 'Smith', 'Jr.')
 *
 */
export declare const DisplayNameFromFL: (first?: string, last?: string, middle?: string, suffix?: string) => string;
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
export declare const DisplayNameFromObject: (object?: any, prefix?: string) => string;
/**
 * Converts the first character of each word of a string to uppercase.
 *
 * @example
 * // return This Is Awesome
 * UCWords('This is awesome')
 *
 */
export declare const UCWords: (str: string | null) => string | null;
/**
 * Generates a random string with a given length and valid characters.
 *
 * @example
 * // returns '32112'
 * RandomString(5, '12345')
 *
 */
export declare const RandomString: (length: number, validChars?: string) => string;
/**
 *
 * @param length
 * @constructor
 *
 */
export declare const RandomKey: (length: number) => string;
/**
 * Checks if a character is a vowel.
 *
 * @param {string} char - The character to check.
 * @returns {boolean} True if the character is a vowel, false otherwise.
 * @example
 * IsVowel('a'); // returns true
 * IsVowel('b'); // returns false
 * @export
 */
export declare function IsVowel(char: string): boolean;
/**
 * Takes in text, and adds an "s" to the end of it if the count is zero or > 1
 * Note: An 'es' is added if the word ends in: s, ss, z, ch, sh, or x
 * Note: An ending 'y' is changed to ies if the previous letter to the 'y' is not a vowel
 *
 * @param text
 * @param count
 * @param showNumber
 * @param maxDecimals
 * @param minDecimals
 * @constructor
 *
 */
export declare function AddS(text?: string | null, count?: number | null, showNumber?: boolean, maxDecimals?: number, minDecimals?: number | null): string;
/**
 * Takes in text, and adds an "s" to the end of it if the count is > 1
 * If the count is zero, returns null
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
export declare function AddSNull(text?: string | null, count?: number | null, showNumber?: boolean, maxDecimals?: number, minDecimals?: number | null): string | null;
/**
 * Takes in text, and adds an "s" to the end of it if the count is > 1
 * If the count is zero, returns a blank string
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
export declare function AddSBlank(text?: string | null, count?: number | null, showNumber?: boolean, maxDecimals?: number, minDecimals?: number | null): string;
/**
 *
 * @param value
 * @param decimals
 * @param round
 * @constructor
 *
 */
export declare const ShortNumber: (value: any, decimals?: number, round?: 'round' | 'up' | 'down') => string | null;
/**
 *
 * @param value
 * @param maxCharacters
 * @constructor
 *
 */
export declare const EllipsesAtMax: (value: string | null | undefined, maxCharacters?: number) => string | null | undefined;
/**
 *
 * @param value
 * @param asteriskPattern
 * @constructor
 *
 */
export declare const AsteriskMatch: (value: string | null | undefined, asteriskPattern: string) => boolean;
/**
 *
 * @param paths
 * @constructor
 *
 */
export declare const BuildPath: (...paths: (string | null)[]) => string;
/**
 * Checks if the provided string contains any numeric digit.
 *
 * @param {string|number|null|undefined} value - The string to be evaluated.
 * @returns {boolean} - Returns true if the provided string contains any numeric digit, otherwise false.
 */
export declare const HasDigits: (value: string | number | null | undefined) => boolean;
/**
 * Check if a string contains at least one alphabetical character.
 * @param {string|number|null|undefined} value - The input string to check.
 * @return {boolean} - Returns true if the string contains at least one alphabetical character, false otherwise.
 */
export declare const HasAlpha: (value: string | number | null | undefined) => boolean;
export declare enum EStringComparisonResult {
    Same = "Same",
    Inserted = "Inserted",
    Deleted = "Deleted"
}
export type TStringComparison = {
    result: EStringComparisonResult;
    value: string;
    newValue?: string;
};
/**
 * Compares two strings line by line and returns an array of comparison results.
 *
 * @param startString - The starting string for comparison. Can be a string, null, or undefined.
 * @param endString - The ending string for comparison. Can be a string, null, or undefined.
 * @returns {TStringComparison[]} - An array of TStringComparison objects summarizing the differences between the two input strings.
 * Each object contains a `result` (EStringComparisonResult) and a `value` (string) that indicates the line content.
 *
 * The EStringComparisonResult has the following possibilities:
 * - EStringComparisonResult.Same: The line is the same in both strings.
 * - EStringComparisonResult.Inserted: The line is inserted in the `endString` compared to the `startString`.
 * - EStringComparisonResult.Deleted: The line is deleted in the `endString` compared to the `startString`.
 */
export declare function StringCompares(startString: string | null | undefined, endString: string | null | undefined): TStringComparison[];
/**
 * Represents the fixed fields of a property in a generic object.
 *
 * @template T - The type of the object the property belongs to.
 */
export type TPropertyFixedFields<T extends Record<string, any>> = {
    property: keyof T | 'FIXED';
    length: number;
    padCharacter?: string | null;
    rightJustify?: boolean;
    transform?: (val: any, obj: T) => string;
};
/**
 * Converts an object to fixed-length fields based on the provided settings.
 *
 * @param {object} obj - The object to convert.
 * @param {Array<object>} settings - An array of settings that define the fixed-length fields.
 * @param {string} [separator=''] - The string used to separate the fields.
 * @returns {string} The fixed-length fields as a single string.
 */
export declare function ObjectToFixedFields<T extends Record<string, any>>(obj: T, settings: TPropertyFixedFields<T>[], separator?: string): string;
/**
 * Converts an array of objects into a string with fixed fields using the provided settings.
 *
 * @param {Array.<Object>} objs - The array of objects to convert.
 * @param {Array.<Object>} settings - The settings for the fixed fields.
 * @param {string} [separator=''] - The separator to use between fields. Default is an empty string.
 * @param {string} [newLine='\r'] - The new line character to use. Default is '\r'.
 * @return {string} The string with fixed fields.
 */
export declare function ObjectsToFixedFields<T extends Record<string, any>>(objs: T[], settings: TPropertyFixedFields<T>[], separator?: string, newLine?: string): string;
/**
 * Finds the common string patterns among an array of strings.
 *
 * @param strings - The array of strings to find common patterns from.
 * @returns An array of common string patterns.
 */
/**
 * Finds the differences between given strings based on common patterns.
 *
 * @param {string[]} commonPatterns - An array of common patterns to match in the strings.
 * @param {string[]} strings - An array of strings to compare.
 * @returns {string[][]} - A 2D array containing the differences found in the strings.
 */
