/**
 * Replace all occurrences of a string.
 *
 * @example
 * // returns "john-doe-bob"
 * ReplaceAll(' ', '-', 'john doe bob')
 */
export declare const ReplaceAll: (find: string | string[], replace: string, subject: string | null | undefined) => string;
/**
 * Replaces multiple strings in a subject string.
 *
 * @param {([string, string] | Record<string, string>)[]} findReplace - Array of tuples or objects containing the strings to find and replace.
 * @param {string|null|undefined} subject - The subject string to perform replacements on.
 * @returns {string} - The subject string with all replacements made.
 */
export declare const ReplaceAllMultiple: (findReplace: (string[] | Record<string, any>)[] | null | undefined, subject: string | null | undefined) => string;
/**
 * Determines whether a given value is a number.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns true if the value is a number; otherwise, returns false.
 */
export declare function IsNumber(value: any): boolean;
/**
 * Determines whether a given value is a whole number.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns true if the value is a number; otherwise, returns false.
 */
export declare function IsWholeNumber(value: any): boolean;
/**
 * Constrain a number based on an increment value and round to a given number of decimal places.
 *
 * @param {number} num - The input number to be constrained.
 * @param {number} increment - The value by which the input number should be constrained.
 * @param {number} [round=2] - The number of decimal places to round the constrained number to. Defaults to 2.
 * @returns {number | null} - The constrained number or null.
 */
export declare function NumberConstrainToIncrementNull(num: any, increment: number, round?: number): number | null;
/**
 * Constrain a number based on an increment value and round to a given number of decimal places.
 *
 * @param {number} num - The input number to be constrained.
 * @param {number} increment - The value by which the input number should be constrained.
 * @param {number} [round=2] - The number of decimal places to round the constrained number to. Defaults to 2.
 * @returns {number} - The constrained number.
 */
export declare function NumberConstrainToIncrement(num: any, increment: number, round?: number): number;
/**
 * Cleans a number with a symbol like '$', ',' or '%'.
 *
 * @example
 * // return 100
 * CleanNumber('$100')
 *
 * // return 1000
 * CleanNumber('1,000')
 *
 * // return 50
 * CleanNumber('50%')
 *
 * Add a rounding to round to a certain number of digits:
 *
 * // return 100.1
 * CleanNumber('100.12', 1)
 */
export declare const CleanNumber: (value: any, roundClean?: number, allowNaN?: boolean) => number;
/**
 * Determines if two numbers are equal, by default to rounded 2 decimal places.
 *
 * @param {any} value1 - The first value to compare.
 * @param {any} value2 - The second value to compare.
 * @param {number} roundClean - The number of decimal places to round the numbers to. Default is 2.
 * @returns {boolean} Returns true if the numbers are equal, false otherwise.
 */
export declare const EqualNumber: (value1: any, value2: any, roundClean?: number) => boolean;
/**
 * Count the number of decimal digits in a given number.
 *
 * @param {any} num - The number to count decimal digits for.
 * @returns {number} - The number of decimal digits.
 */
export declare function CountDecimalDigits(num: any): number;
/**
 * Returns the greatest number from the provided values.
 * If no valid numbers are found, null is returned.
 *
 * @param {...(any | any[])} values - The values to evaluate.
 * @returns {number | null} - The greatest number or null if no valid numbers are found.
 */
export declare const GreaterNumberNull: (...values: (any | any[])[]) => number | null;
/**
 * Calculates the greater number among the given values.
 *
 * @param {...(any|any[])[]} values - The values to compare.
 * @returns {number} - The greater number among the given values. Returns 0 if no values are provided.
 */
export declare const GreaterNumber: (...values: (any | any[])[]) => number;
/**
 *
 * @param values
 * @constructor
 */
export declare const LeastNumberNull: (...values: (any | any[])[]) => number | null;
/**
 * Calculates the least number among the given values.
 * If any of the values passed are arrays, it considers the minimum value within each array.
 * If no numbers are found, it returns 0.
 *
 * @param {...(any | any[])} values - The values to calculate the least number from.
 * @returns {number} - The least number among the values.
 */
export declare const LeastNumber: (...values: (any | any[])[]) => number;
/**
 * Returns an array of valid numbers from the given values.
 *
 * @param {...(any|any[])} values - One or more values or arrays of values.
 * @returns {number[]} - An array of valid numbers.
 */
export declare const ValidNumbers: (...values: (any | any[])[]) => number[];
/**
 * Calculates the average of a set of values or an array of values.
 * If no valid numbers are given, it returns `null`.
 * @param decimals - The number of decimal places to be used in the final average calculation result.
 * @param values - The spread parameter representing numbers, or array of numbers, whose average is to be calculated.
 * @returns The average of the provided numbers (based on the number of valid numbers). Returns `null` if no valid numbers are found.
 * @function AverageNumberNull
 * @example
 * AverageNumberNull(2, 3, 4, 5, 6); // Returns 4.50
 * AverageNumberNull(2, [3, 4, 5, 6]); // Returns 4.50
 * AverageNumberNull(2, null, undefined, "five"); // Returns null
 */
export declare const AverageNumberNull: (decimals: number, ...values: (any | any[])[]) => number | null;
/**
 * Computes the arithmetic mean of a set of values or array of values and returns the result.
 * If the average is `null`, result will be `0`.
 * @param decimals - The number of decimal places to be used in the final average calculation result.
 * @param values - The spread parameter representing numbers whose average is to be calculated.
 * This may consist of individual numbers or arrays of numbers.
 * @returns The calculated average of the supplied numbers.
 * @function AverageNumber
 * @example
 * AverageNumber(2, 3, 4, 5, 6); // Returns 4.50
 * AverageNumber(2, [3, 4, 5, 6]); // Returns 4.50
 * AverageNumber(2, null, 4, 5, 6); // Returns 0
 */
export declare const AverageNumber: (decimals: number, ...values: (any | any[])[]) => number;
/**
 * Calculates the median number from an array of values.
 *
 * @param values - The values to calculate the median from.
 *
 * @returns The median number if the array is not empty, otherwise null.
 */
export declare function MedianNumber(...values: (any | any[])[]): number | null;
/**
 * Performs division operation and returns the quotient. Takes care of `null` and `0` denominator cases.
 *
 * @param numerator - The top number in a division.
 * @param denominator - The bottom number in a division.
 * @param decimals - The number of decimal places to include in the quotient. Optional.
 * @returns The resulting quotient of the division if denominator is not `0` or `null`, otherwise returns `null`.
 * @function CleanDivideNull
 * @example
 * CleanDivideNull(10, 2, 2); // Returns 5.00
 * CleanDivideNull(10, 0); // Returns null
 * CleanDivideNull(10, null); // Returns null
 * CleanDivideNull(null, 2); // Returns null
 */
export declare const CleanDivideNull: (numerator: any, denominator: any, decimals?: number) => number | null;
/**
 * Performs division operation and returns the result. Takes care of `null` and `0` denominator cases.
 * @param numerator - The top number in a division.
 * @param denominator - The bottom number in a division.
 * @param decimals - The number of decimal places to include in the quotient. Optional.
 * @returns The quotient of the division if denominator is not `0` or `null`, otherwise returns `0`.
 * @function CleanDivide
 * @example
 * CleanDivide(5, 2, 1); // Returns 2.5
 * CleanDivide(5, 0); // Returns 0
 * CleanDivide(5, null); // Returns 0
 * CleanDivide(null, 2); // Returns 0
 */
export declare const CleanDivide: (numerator: any, denominator: any, decimals?: number) => number;
/**
 * Cleans a multiple numbers, adding and rounds them
 *
 * @example
 * // return 112.23
 * CleanNumbers(2, '$100', 12.234)
 *
 * // return 1012.24
 * CleanNumbers(2, '$1,000', 12.236)
 *
 * // return 1012
 * CleanNumbers(0, '$1,000', 12.236)
 */
export declare const CleanNumbers: (roundTo: number, ...values: (any | any[])[]) => number;
/**
 * Cleans a multiple numbers, subtracting and rounds them
 *
 */
export declare const CleanSubtractNumbers: (roundTo: number, ...values: (any | any[])[]) => number;
/**
 * Cleans a number with a symbol like '$', ',' or '%'.
 *
 * @example
 * // return 100
 * CleanNumberNull('$100')
 *
 * // return 1000
 * CleanNumberNull('1,000')
 *
 * // return 50DataToCSVExport
 * CleanNumberNull('50%')
 *
 * Add a rounding to round to a certain number of digits:
 *
 * // return 100.1
 * CleanNumberNull('100.12', 1)
 */
export declare const CleanNumberNull: (value: any, roundClean?: number) => number | null;
/**
 * Tries to parse a JSON string into an object and returns it.
 * If parsing fails or the input is not a valid JSON, it returns `null`.
 * Already parsed objects are returned as is.
 * @param json - The JSON string to parse.
 * @returns The parsed object of type `T` or `null` if parsing fails or input is not a valid JSON.
 * @template T - The expected type of the parsed object.
 * @function JSONParse
 * @example
 * JSONParse<{ name: string }>('{"name": "Bob"}'); // Returns { name: 'Bob' }
 * JSONParse('invalid JSON'); // Returns null
 * JSONParse(null); // Returns null
 */
export declare const JSONParse: <T = any>(json: any) => T | null;
/**
 *
 * @param subject
 * @param length
 * @constructor
 */
export declare const Trunc: (subject: string, length: number) => string;
/**
 * Returns a google maps link with the given coordinates.
 *
 * @example
 * // returns "http://maps.google.com/maps?q=12345,12345"
 * GoogleMapsGPSLink({latitude: '12345', longitude: '12345'})
 */
export declare const GoogleMapsGPSLink: (dataArray: any, prefix?: string) => string;
/**
 * Generates a Google Maps search link for a given address object.
 * Constructs the address string using the provided prefix and address fields.
 * Returns an empty string if required fields are missing.
 *
 * @param {object|null|undefined} address - The address object containing components such as address1, address2, city, state, and zip.
 * @param {string} [prefix=''] - An optional prefix used to access address fields in the object (e.g., 'billing_' for 'billing_address1').
 * @returns {string} A URL string for the Google Maps search query corresponding to the provided address.
 */
export declare const GoogleMapsAddressLink: (address: object | null | undefined, prefix?: string) => string;
/**
 * Generates a Google Maps directions link between two addresses.
 *
 * @param {object | null | undefined} address1 - The first address (origin) object which contains address details such as address1, city, state, and zip.
 * @param {object | null | undefined} address2 - The second address (destination) object which contains address details such as address1, city, state, and zip.
 * @param {string} [prefix1=''] - The prefix to prepend to the property keys of the first address object (e.g., if keys are prefixed like "home_address1").
 * @param {string} [prefix2=''] - The prefix to prepend to the property keys of the second address object (e.g., if keys are prefixed like "work_address1").
 * @return {string} A URL string for Google Maps directions, or an empty string if any required parameters or address components are missing.
 */
export declare function GoogleMapsDirectionsLink(address1: object | null | undefined, address2: object | null | undefined, prefix1?: string, prefix2?: string): string;
/**
 * Determines whether a value is a valid input decimal.
 *
 * @example
 * // returns true
 * IsValidInputDecimal('1')
 *
 * // returns false
 * IsValidInputDecimal('1%')
 */
export declare const IsValidInputDecimal: (value: string) => boolean;
/**
 * Generates a unique UID
 */
export declare const GenerateUUID: () => string;
export type TIsOnOptions = {
    yeses?: string[];
    nos?: string[];
};
/**
 * Function `IsOn` checks if a given value can be considered as a boolean 'true' value.
 * It performs various checks on the given value to determine if it can be considered 'on' or 'true'.
 * By default, the values considered as 'true' are 'true', 'active', 'on', 'yes', 'y', 't' and all positive numbers.
 * @param value - The value to be checked.
 * @param options - (Optional) An object that you can use to specify additional 'true' or 'false' values. 'nos' key for 'false' and 'yeses' key for 'true'.
 * @returns A boolean indicating whether the value can be considered as a 'true' or 'positive'.
 * @example
 *
 * const result = IsOn('active'); // result is true.
 * const result2 = IsOn(15); // result2 is true.
 * const result3 = IsOn('new', {yeses: ['new']}); // result3 is true.
 */
export declare const IsOn: (value: any, options?: TIsOnOptions) => boolean;
/**
 *
 */
export interface IAddress {
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    zip: string;
}
/**
 * Copies an address object to another object.
 *
 * Fields copied: address_1, address_2, city, state, zip, phone, timezone, latitude, longitude
 *
 * The "prefix" properties are simply appended: prefix: "employee_" results in "employee_address_1"
 *
 * @example
 * let address1 = {
 *   address_1: 'Blk 1, Lot 2, Some Street',
 *   address_2: 'Blk 2, Lot 3, Some Street',
 *   city: 'Burr Ridge',
 *   state: 'IL',
 *   zip: '61257',
 * }
 *
 * let address2 = {}
 * AddressCopy(address1, '', address2, '')
 * // address2 is now a copy of address1
 * console.log(address2)
 */
export declare const AddressCopy: (fromObject: any, fromPrefix: string, toObject: any, toPrefix: string, includeName?: boolean, includePhone?: boolean, includeTimeZone?: boolean, includeGPS?: boolean) => void;
/**
 * Determines whether an object has a property of "address_1".
 *
 * @example
 * // returns false
 * AddressValid({ address: 'Blk1, Lot1, Some street' })
 *
 * // returns false
 * AddressValid({ address_1: '' })
 *
 * // returns true
 * AddressValid({ address_1: 'Blk1, Lot1, Some street' })
 */
export declare const AddressValid: (address: any, prefix?: string) => boolean;
/**
 * Combines an address object into a single row string.
 *
 * @example
 * let address1 = {
 *   address_1: 'Blk 1, Lot 2, Some Street',
 *   address_2: 'Suite 100',
 *   city: 'Burr Ridge',
 *   state: 'IL',
 *   zip: '61257',
 * }
 *
 * // returns "Blk 1, Lot 2, Some Street, Suite 100, Burr Ridge, IL  61257"
 * AddressSingleRow(address1)
 */
export declare const AddressSingleRow: (object: any, prefix?: string) => string;
/**
 * Combines an address object into a multiline row string.
 *
 * @example
 * let address1 = {
 *   address_1: 'Blk 1, Lot 2, Some Street',
 *   address_2: 'Appt 1',
 *   city: 'Burr Ridge',
 *   state: 'IL',
 *   zip: '61257',
 * }
 *
 * // returns "
 * // Blk 1, Lot 2, Some Street
 * // Appt 1
 * // Burr Ridge, IL, 61257"
 * AddressMultiRow(address1)
 */
export declare const AddressMultiRow: (object: any, prefix?: string) => string;
/**
 *
 * @param byteArray
 * @constructor
 */
export declare const ArrayToGuidString: (byteArray: any) => string;
/**
 *
 * @param str
 * @constructor
 */
export declare const StringToByteArray: (str: string) => any;
/**
 *
 * @param x
 * @constructor
 */
export declare const FormUrlEncoded: (x: any) => string;
/**
 *
 * @param num
 * @param decimalPlaces
 * @param roundDir
 * @constructor
 */
export declare const RoundTo: (num: any, decimalPlaces?: number, roundDir?: 'round' | 'up' | 'down') => number;
/**
 *
 * @param val
 * @constructor
 */
export declare const ObjectToJSONString: (val: any) => string;
/**
 *
 * @param val
 * @constructor
 */
export declare const JSONStringToObject: <T = any>(val: string) => T;
/**
 * Is ArrayBuffer
 * @param buf
 */
export declare const isAB: (buf: ArrayBuffer | string) => boolean;
/**
 * ArrayBuffer to String
 * @param buf
 */
export declare const ab2str: (buf: ArrayBuffer | string) => string;
/**
 * String to ArrayBuffer
 * @param str
 */
export declare const str2ab: (str: string) => ArrayBuffer;
/**
 * Async version of find
 * @param array
 * @param predicate
 */
export declare const findAsync: <T>(array: T[], predicate: (t: T) => Promise<boolean>) => Promise<T | undefined>;
/**
 * Async version of some
 * @param array
 * @param predicate
 */
export declare const someAsync: <T>(array: T[], predicate: (t: T) => Promise<boolean>) => Promise<boolean>;
/**
 * Async version of every
 * @param array
 * @param predicate
 */
export declare const everyAsync: <T>(array: T[], predicate: (t: T) => Promise<boolean>) => Promise<boolean>;
/**
 * Async version of filter
 * @param array
 * @param predicate
 */
export declare const filterAsync: <T>(array: T[], predicate: (t: T) => Promise<boolean>) => Promise<T[]>;
/**
 * Converts a single value or array of values to an array of values
 *
 * @example
 * ToArray([1, 2, 3]) = [1, 2, 3]
 * ToArray(1) = [1]
 *
 * @param value
 * @constructor
 */
export declare const ToArray: <T>(value: T | T[]) => T[];
/**
 * Generates a range of numbers
 *
 * @param end
 * @param increment
 * @param start
 * @constructor
 */
export declare const ArrayRange: (end: number, increment?: number, start?: number) => number[];
/**
 * Converts a given string into an array of substrings, splitting based on whitespace by default
 * or using specified separators to ignore.
 *
 * @param {string} str - The input string to be split into an array.
 * @param {string} [ignoreSeparators=''] - Optional parameter representing characters that should not
 *                                         be treated as separators during the split operation.
 * @returns {string[]} Array of substrings derived from the input string, split based on specified rules.
 */
export declare const ArrayFromStringWS: (str: string, ignoreSeparators?: string) => string[];
/**
 *
 * @param data
 * @param keys
 * @constructor
 */
export declare const PropertiesExist: <T extends object, K extends Extract<keyof T, string>>(data: T, ...keys: K[]) => boolean;
/**
 *
 * @param data
 * @param keys
 */
export declare const PropertiesNotFalsey: <T extends object, K extends Extract<keyof T, string>>(data: T, ...keys: K[]) => boolean;
/**
 * OmitProperty is a function that creates a new object by omitting the specified keys from the input object.
 *
 * @param {Record<any, any>} obj - The input object from which the keys will be omitted.
 * @param {any[]} keys - The keys to be omitted from the input object.
 * @return {Record<any, any>} - A new object that does not contain the specified keys.
 */
export declare function OmitProperty<T extends Record<any, any>, K extends Extract<keyof T, any>>(obj: T, ...keys: K[]): Omit<T, K>;
/**
 * Remove properties with falsy values from an object, excluding specified keys.
 *
 * @param {object} obj - The object to omit falsey properties from.
 * @param {...string} keys - The keys to exclude from removal.
 * @returns {object} - A new object with falsey properties omitted, excluding the specified keys.
 */
export declare function OmitFalsey<T extends object, K extends Extract<keyof T, string>>(obj: T, ...keys: K[]): Omit<T, K> & Partial<K>;
/**
 * OmitUndefined function eliminates the properties from an object that have undefined values.
 *
 * @param {object} obj - The object from which to omit undefined properties.
 * @returns {object} - A new object without the undefined properties.
 *
 * @example
 *
 * const obj = {
 *   name: 'John',
 *   age: 30,
 *   gender: undefined
 * };
 *
 * const result = OmitUndefined(obj);
 * // result is { name: 'John', age: 30 }
 */
export declare function OmitUndefined<T extends object>(obj: T): Partial<T>;
/**
 * Picks specified properties from an object and returns a new object with just those properties.
 *
 * @param {Record<any, any>} obj - The object from which properties will be picked.
 * @param {...any} keys - The keys of the properties to be picked.
 * @returns {Object} - A new object containing only the specified properties.
 */
export declare function PickProperty<T extends Record<any, any>, K extends Extract<keyof T, any>>(obj: T, ...keys: K[]): Pick<T, K>;
/**
 * Retrieves the value of the property or properties from a given object, comparing keys in a case-insensitive manner.
 * Works with a single property or an array of properties. The function returns the value of the first matching property found.
 * It can process null, undefined, or actual values for both input object and properties.
 *
 * @param obj - The object to examine. This can be any JS object, or null, or undefined.
 * @param props - The single string or array of strings specifying the name(s) of the property or properties to retrieve.
 * This also accepts null or undefined. The comparison with object keys is case-insensitive.
 *
 * @return The value of the first property found in the object that matches one of the input properties; `undefined` otherwise.
 */
export declare function GetPropertyValueCaseInsensitive(obj: any | null | undefined, props: string | string[] | null | undefined): any;
/**
 * Removes the starting substring(s) from a given value.
 *
 * @param {string|string[]|null|undefined} remove - The substring(s) to remove from the beginning of the value.
 * @param {string|null|undefined} value - The value from which to remove the starting substring(s).
 * @param {boolean} [recursive=false] - Indicates whether to recursively remove all possible starting substrings.
 * @return {string} The updated value with the starting substring(s) removed.
 */
export declare function RemoveStarting(remove: string | string[] | null | undefined, value: string | null | undefined, recursive?: boolean): string;
/**
 * Removes specified endings from a given value.
 *
 * @param {string|string[]|null|undefined} remove - The ending(s) to be removed. Accepts a single ending as a string, multiple endings as an array, or null/undefined for no removal.
 * @param {string|null|undefined} value - The value from which the endings should be removed.
 * @param {boolean} [recursive=false] - Specifies whether to remove endings recursively.
 * @returns {string} - The resulting value after removing the specified endings.
 */
export declare function RemoveEnding(remove: string | string[] | null | undefined, value: string | null | undefined, recursive?: boolean): string;
/**
 * CoalesceFalsey function coalesces the value provided with the other values,
 * returning the first non-falsey value encountered.
 * If checkVal is true, checkVal is returned immediately without checking otherVals.
 *
 * @template T
 * @param {T} checkVal - The value to be checked.
 * @param {...T[]} otherVals - Additional values to be checked.
 * @returns {T} - The first non-falsey value encountered, or the last element of otherVals if all are falsey.
 */
export declare function CoalesceFalsey<T>(checkVal: T, ...otherVals: T[]): T;
/**
 * Get color brightness from RGB
 *
 * @param r
 * @param g
 * @param b
 * @constructor
 */
export declare const ColorBrightnessRGB: (r: number, g: number, b: number) => number;
/**
 * Get RGB from hex
 *
 * @param hex
 * @constructor
 */
export declare const RBGFromHex: (hex: string) => [r: number, g: number, b: number];
/**
 * Get brightness from Hex color
 *
 * @param hex
 * @constructor
 */
export declare const ColorBrightnessHex: (hex: string) => number;
/**
 * Inverts a RBG color, use the BW flag to set it to black or white
 *
 * @param r
 * @param g
 * @param b
 * @param bw
 * @constructor
 */
export declare function InvertColorRGB(r: number, g: number, b: number, bw?: boolean): string;
/**
 * Inverts a hex color, use the BW flag to set it to black or white
 *
 * @param hex
 * @param bw
 * @constructor
 */
export declare function InvertColorHex(hex: string, bw?: boolean): string;
/**
 * Sleep function that pauses the execution for a given number of milliseconds.
 *
 * @param {number} ms - The number of milliseconds to sleep.
 * @returns {Promise<void>} A promise that resolves after the specified duration.
 */
export declare function Sleep(ms?: number): Promise<unknown>;
export declare function ConsoleAsyncTime<T>(name: string, asyncFunction: Promise<T>): Promise<T>;
/**
 * `AddPrefixToObject` is a TypeScript utility type that adds a specified
 * string prefix to the keys of an object.
 *
 * @template T - The original object type.
 * @template P - The string prefix to be added to the keys of the object.
 *
 * @typedef {{
 *   [K in keyof T as K extends string ? `${P}${K}` : never]: T[K]
 * }} AddPrefixToObject
 *
 * @example
 * // If T is `{ foo: number, bar: boolean }` and P is `'prefix_'`,
 * // then `AddPrefixToObject<T, P>` will be `{ prefix_foo: number, prefix_bar: boolean }`.
 */
export type AddPrefixToObject<T, P extends string> = {
    [K in keyof T as K extends string ? `${P}${K}` : never]: T[K];
};
/**
 * Adds a prefix to each key in an object.
 * @param {Object} obj - The input object.
 * @param {string} prefix - The prefix to add.
 * @return {Object} - The object with the keys prefixed.
 */
export declare function PrefixKeys<T extends Record<string, any>, S extends string>(obj: T, prefix: S): AddPrefixToObject<T, S>;
/**
 * Represents a type that prefixes keys of an object with a specified string.
 * @template T - the original object type
 * @template U - the prefix string type
 */
export type PrefixedKeys<T, U extends string> = {
    [P in keyof T as P extends `${U}${infer Rest}` ? Rest : never]: T[P];
};
/**
 * Extracts all keys from an object that have a specified prefix.
 *
 * @param {Record<string, any>} obj - The object from which to extract keys.
 * @param {string} prefix - The prefix to match when extracting keys.
 * @returns {Record<string, any>} - An object containing the extracted keys and their values.
 */
export declare function ExtractPrefixedKeys<T extends Record<string, any>, S extends string>(obj: T, prefix: S): PrefixedKeys<T, S>;
/**
 * Extracts the whole and decimal parts from a given value.
 *
 * @param {any} value - The value to extract from.
 * @returns {{whole: number; decimal: number}} - An object containing the whole and decimal parts of the value.
 */
export declare function ExtractWholeDecimal(value: any): {
    whole: number;
    decimal: number;
};
export type TEvenDistribution = {
    percentage: number;
    amount: number;
};
/**
 * Distributes the given amount evenly among the values based on their percentages.
 *
 * @param {number} amount - The total amount to be distributed.
 * @param {number[]} values - An array of numbers representing the values.
 * @param {number} toDecimals - Number of decimal places
 * @returns {TEvenDistribution[]} - An array of objects representing the distribution.
 */
export declare function DistributeEvenly(amount: number, values: number[], toDecimals?: number): TEvenDistribution[];
