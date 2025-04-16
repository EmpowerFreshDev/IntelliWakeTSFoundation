type EnumKeys<Enum> = Exclude<keyof Enum, number>;
export declare function EnumArray<Enum>(e: Enum): Array<{
    key: EnumKeys<Enum>;
    value: Enum[EnumKeys<Enum>];
}>;
/**
 * A utility function that takes an enumeration as input and returns a new array,
 * with the keys and values from the original enumeration.
 *
 * @template Enum The enumeration object.
 * @param {Enum} e The object from which to create the new array.
 * @return [ { [K in EnumKeys<Enum>]: Enum[K] } ] The new array that contains key/value entries from the original enumeration.
 *
 * @example
 *   enum Gender {
 * 		Male= 'm',
 * 		Female= 'f'
 * 	}
 *
 *   const copy = EnumKeyNames(Gender)
 *   // copy = [{ key: 'm', name: 'Male'}, { key: 'f', name: 'Female' }]
 */
export declare function EnumKeyNames<Enum>(e: Enum): Array<{
    key: Enum[EnumKeys<Enum>];
    name: EnumKeys<Enum>;
}>;
/**
 * A utility function that takes an enumeration as input and returns an array
 * of keys from the enumeration. The returned array will only contain keys of
 * entries where the value is a string.
 *
 * @template Enum The enumeration type.
 * @param {Enum} e The enumeration from which to retrieve the keys.
 * @return {EnumKeys<Enum>[]} An array of keys from the enumeration.
 *
 * @example
 *   const Gender = {
 *     Male: 'm',
 *     Female: 'f',
 *     Unknown: 0
 *   }
 *
 *   const keys = EnumKeys(Gender)
 *   // keys => ['Male', 'Female']
 */
export declare const EnumKeys: <Enum extends Record<string, string | number>>(e: Enum) => Exclude<keyof Enum, number>[];
/**
 * A utility function that takes an enumeration as an input and returns an array
 * of unique values from the enumeration. The returned array will only contain
 * values of entries where the value is a string.
 *
 * @template Enum The enumeration type.
 * @param {Enum} e The enumeration from which to retrieve the values.
 * @return {Enum[EnumKeys<Enum>][]} An array of unique values from the enumeration.
 *
 * @example
 *   const Gender = {
 *     Male: 'm',
 *     Female: 'f',
 *     Unknown: 0
 *   }
 *
 *   const values = EnumValues(Gender)
 *   // values => ['m', 'f']
 */
export declare const EnumValues: <Enum extends Record<string, string | number>>(e: Enum) => Enum[Exclude<keyof Enum, number>][];
/**
 * A utility function that, given an enumeration and a value, returns the key
 * corresponding to that value in the enumeration. Returns undefined if the value
 * is null, undefined, or not present in the enumeration.
 *
 * @template Enum The enumeration type.
 * @param {Enum} e The enumeration to locate the value in.
 * @param {Enum[EnumKeys<Enum>] | string | null | undefined} value The value to get the key for.
 * @return {string | undefined} The corresponding key from the enumeration, or undefined
 * if the value is null, undefined, or not present in the enumeration.
 *
 * @example
 *   const Gender = {
 *     Male: 'm',
 *     Female: 'f',
 *     Unknown: 0
 *   }
 *
 *   const key = EnumKeyFromValue(Gender, 'f')
 *   // key => 'Female'
 */
export declare const EnumKeyFromValue: <Enum extends Record<string, string | number>>(e: Enum, value: string | Enum[Exclude<keyof Enum, number>] | null | undefined) => string | undefined;
/**
 * A utility function that, given an enumeration and a key, returns the value
 * corresponding to that key within the enumeration. Returns undefined if the key
 * is null, undefined, or not present in the enumeration.
 *
 * @template Enum The enumeration type.
 * @param {Enum} e The enumeration to locate the key in.
 * @param {string | null | undefined} key The key to retrieve the value for.
 * @return {Enum[EnumKeys<Enum>] | undefined} The corresponding value from the enumeration,
 * or undefined if the key is null, undefined, or not present in the enumeration.
 *
 * @example
 *   const Gender = {
 *     Male: 'm',
 *     Female: 'f',
 *     Unknown: 0
 *   }
 *
 *   const value = EnumValueFromKey(Gender, 'Female')
 *   // value => 'f'
 */
export declare const EnumValueFromKey: <Enum extends Record<string, string | number>>(e: Enum, key: string | null | undefined) => Enum[Exclude<keyof Enum, number>] | undefined;
/**
 * A utility function that checks if a given value is a valid value within a
 * given enumeration. The function returns true if the value is found within
 * the enumeration; otherwise, it returns false.
 *
 * @template Enum The enumeration type.
 * @param {Enum} e The enumeration to check within.
 * @param {Enum[EnumKeys<Enum>] | string | null | undefined} value The value to validate.
 * @param {{ignoreSpace?: boolean}} options Options that can be passed to change the behavior of the validation.
 * @return {boolean} true if the value is found within the enumeration, false otherwise.
 *
 * @example
 *   const Gender = {
 *     Male: 'm',
 *     Female: 'f',
 *     Unknown: 0
 *   }
 *
 *   const isValidMale = EnumValidValue(Gender, 'm') => true
 *   const isValidOther = EnumValidValue(Gender, 'x') => false
 */
export declare function EnumValidValue<Enum extends Record<string, number | string>>(e: Enum, value: Enum[EnumKeys<Enum>] | string | null | undefined, options?: {
    ignoreSpace?: boolean;
}): boolean;
export {};
