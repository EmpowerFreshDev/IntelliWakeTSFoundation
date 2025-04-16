/**
 * A JavaScript function that checks whether two inputs are equal, considering only String and Number types. Other types return false. It cleans the input values before comparison using CleanNumberNull function.
 *
 * @param {any} object1 - The first object to compare
 * @param {any} object2 - The second object to compare
 * @returns {boolean} Returns true if the inputs are equal (considering only Strings and Numbers), otherwise false
 *
 * @example
 * StringOrNumberEqual('100', 100) // returns true
 * StringOrNumberEqual('abc', 'abc') // returns true
 * StringOrNumberEqual({a: 1}, {a: 1}) // returns false
 */
export declare const StringOrNumberEqual: (object1: any, object2: any) => boolean;
export type TDifferences = Record<string, {
    val1?: any;
    val2?: any;
}>;
/**
 * This JavaScript function compares two objects and generates a report of their differences. It only considers an object's own properties and not its inherited properties for the comparison. It used the DeepEqual function to check deep equality.
 *
 * @param {any} object1 - The first object to compare
 * @param {any} object2 - The second object to compare
 * @returns {TDifferences} A JavaScript object representing the differences. Each key-value pair in this object represents a differing key, with an object as its value showing the values in `object1` and `object2` respectively.
 *
 * @example
 *
 * Differences({a: 1, b: 2}, {a: 1, b: 3, c: 4})
 * // returns {b: {val1: 2, val2: 3}, c: {val2: 4}}
 */
export declare const Differences: (object1: any, object2: any) => TDifferences;
/**
 * A JavaScript function that deeply compares two objects, whether they are primitive types, arrays, or complex objects. It functions recursively to navigate compound objects and arrays. It has special conditions to account for dates and React.
 *
 * @param object1 First object to compare. Can be of any type
 * @param object2 Second object to compare. Can be of any type
 * @returns {boolean} returns true if objects are deeply identical, false otherwise
 *
 * @example
 * DeepEqual({a: 1, b: 2}, {a: 1, b: 2}) // returns true
 * DeepEqual([1, 2, 3], [1, 2, 4]) // returns false
 * DeepEqual({a: {b: 1}}, {a: {b: 1}}) // returns true
 */
export declare const DeepEqual: (object1: any, object2: any) => boolean;
/**
 * A JavaScript function that checks whether the first object (subset) is a subset of the second object (superset). This deep comparison function handles multiple types including: arrays, functions, booleans, objects, and strings.
 *
 * @param {any} subset - The object that is checked to see if it is a subset
 * @param {any} superset - The object that is being checked against
 * @returns {boolean} Returns true if the subset is indeed a subset of the superset, otherwise false.
 *
 * @example
 * SubsetEqual({a: 1}, {a: 1, b: 2}) // returns true
 * SubsetEqual({a: 1, b: 2}, {a: 1}) // returns false
 * SubsetEqual('abc', 'abc') // returns true
 * SubsetEqual('abc', 'def') // returns false
 */
export declare const SubsetEqual: (subset: any, superset: any) => boolean;
/**
 * Compares two objects that are forms, checking whether the first object (subset) is a subset of the second object (superset).
 * In a form context, it considers empty strings and null values as equal, as well as the string 'false' and the boolean value false.
 * Accepts arrays and deep-comparison of primitives (string, boolean, number, undefined and null) and objects.
 * Returns true if the first object is a subset of the second object. Returns false otherwise, also in case of different types.
 *
 * @param {any} subset - The object that might be a subset
 * @param {any} superset - The object to compare against
 * @returns {boolean} - The result of the subset comparison
 *
 * @example
 * SubsetFormEqual({a: 1}, {a: 1, b: 2}); // returns true
 * SubsetFormEqual({a: 1, b: 2}, {a: 1}); // returns false
 * SubsetFormEqual('abc', 'abc'); // returns true
 * SubsetFormEqual('abc', 'def'); // returns false
 * SubsetFormEqual('', null); // returns true
 * SubsetFormEqual('false', false); // returns true
 */
export declare const SubsetFormEqual: (subset: any, superset: any) => boolean;
/**
 * Deep clone function for both primitive and reference data types including objects and arrays.
 *
 * @param {T} obj - The object to be cloned
 * @returns {T} - The cloned object.
 */
export declare function DeepClone<T>(obj: T): T;
