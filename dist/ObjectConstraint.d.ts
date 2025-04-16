/**
 * Defines the constraints to be placed on a field of an object
 */
export type TObjectFieldConstraint = {
    type?: 'boolean' | 'string' | 'number' | 'date' | 'datetime' | 'time' | 'object';
    nullable?: boolean;
    nullIfFalsey?: boolean;
    default?: any;
    length?: number;
    values?: any[];
    minValue?: any;
    maxValue?: any;
    isArray?: boolean;
    arrayAllowFalsey?: boolean;
};
/**
 * Defines the constraints to be placed on an object
 */
export type TObjectConstraint<T extends Record<string, any> = Record<string, any | null>> = Record<keyof T, TObjectFieldConstraint>;
/**
 * Takes an object and returns an object that matches the types provided by the constraint
 *
 * @param obj
 * @param constraint
 * @constructor
 */
export declare const ConstrainObject: <T extends Record<string, any>>(obj: T, constraint: TObjectConstraint<T>) => T;
/**
 * Options when converting FormData to an Object
 */
export type TObjectFromFormDataOptions<T extends Record<string, any> = Record<string, any | null>> = {
    excludeColumns?: (keyof T)[];
    includeColumns?: (keyof T)[];
    arrayFormDataItems?: (keyof T)[];
    default?: T;
    constraint?: TObjectConstraint<T> | null;
};
/**
 * This function transforms FormData into an object of type T. It allows for selective inclusion or
 * exclusion of form data entries and provides functionality for default values and constraints.
 *
 * @template T - The type of the return object. Must extend Record<string, any | null>.
 *               Defaults to Record<string, any | null> if not provided.
 *
 * @param {FormData} formData - The FormData instance to transform into an object.
 * @param {TObjectFromFormDataOptions<T>} [options] - Optional configuration for the transformation.
 *   These options can include default values for keys, include/exclude certain keys, or set certain keys
 *   to be treated as array. It also allows to apply generic constraints on resulting object. If not provided,
 *   all keys and their respective values in the FormData will be included in the returned object.
 *
 * @returns {T} - The transformed input FormData as an object of type T.
 *
 * @example
 *  const formData = new FormData();
 *  formData.append("key1", "value1");
 *  formData.append("key2", "value2");
 *  const options = {
 *    default: {
 *      key1: "default1",
 *      key2: "default2",
 *    },
 *    includeColumns: ["key1"]
 *  };
 *  const obj = ObjectFromFormData(formData, options);
 */
export declare const ObjectFromFormData: <T extends Record<string, any> = Record<string, any>>(formData: FormData, options?: TObjectFromFormDataOptions<T> | undefined) => T;
/**
 * Converts an object into a FormData instance. If the input is already an instance of FormData, returns the
 * given FormData instance.
 *
 * @param {Record<string, any> | FormData} obj - An object or FormData instance to be transformed into FormData.
 *
 * @returns {FormData} - The transformed input object as a FormData instance or the input FormData instance itself.
 *
 * @example
 *  const obj = {
 *    key1: "value1",
 *    key2: "value2",
 *  };
 *  const formData = FormDataFromObject(obj);
 *  // formData is now a FormData instance with key1 and key2 appended
 */
export declare const FormDataFromObject: (obj: Record<string, any> | FormData) => FormData;
