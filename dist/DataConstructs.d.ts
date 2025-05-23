/**
 * IChanges provides a structure for tracking changes for an object.
 *
 * @example
 * const employee = {id: 1, name: 'Bob'}
 * const [changes, setChanges] = useState({} as IChanges)
 * setChanges(prevState => AddChange('name', 'John', prevState)) // result: {name: 'John'}
 * const updatedEmployee = ObjectWithChanges(employee, changes) // result: {id: 1, name: 'John'}
 */
export type IChanges<T> = Partial<T>;
/**
 *
 */
export declare const initialChanges: {};
/**
 * Applies a value to a name on a change object, and removes the value if it matches what was in the original
 *
 * @param value
 * @param name
 * @param setChanges
 * @param original
 * @constructor
 */
export declare const ChangeValueChanges: <T>(value: any, name?: keyof T | undefined, setChanges?: ((prevState: (prevState: Partial<T>) => Partial<T>) => void) | undefined, original?: T | undefined) => void;
/**
 * Adds a change to the IChange object.
 *
 * @example
 * const employee = {id: 1, name: 'Bob'}
 * const [changes, setChanges] = useState({} as IChanges)
 *
 * setChanges(prevState => AddChange('name', 'John', prevState)) // result: {name: 'John'}
 *
 * const updatedEmployee = ObjectWithChanges(employee, changes) // result: {id: 1, name: 'John'}
 */
export declare const AddChange: <T>(name: keyof T, value: any, changes: Partial<T>) => Partial<T>;
/**
 * Returns the final state of an object with changes applied.
 *
 * @example
 * const employee = {id: 1, name: 'Bob'}
 * const [changes, setChanges] = useState({} as IChanges)
 * setChanges(prevState => AddChange('name', 'John', prevState)) // result: {name: 'John'}
 *
 * const updatedEmployee = ObjectWithChanges(employee, changes) // result: {id: 1, name: 'John'}
 */
export declare const ObjectWithChanges: <T>(item: T, changes: Partial<T>) => T;
/**
 *
 */
export type IIDObject = {
    id: number;
} & Record<string, any>;
/**
 * IIDChanges provides a structure for tracking changes across an array of items that have a unique "id" column.
 *
 * @example
 * const employees = [{id: 1, name: 'Bob'}, {id: 2, name: 'John'}]
 * const [idChanges, setIDChanges] = useState({} as IIDChanges)
 *
 * setIDChanges(prevState => AddIDChange(1, 'name', 'Bobby', prevState)) // result: {1: {'name', 'Bobby'}}
 * setIDChanges(prevState => AddIDChange(2, 'name', 'Johnny', prevState)) // result: {1: {'name', 'Johnny'}, 2: {'name', 'Johnny'}}
 *
 * const updatedEmployees = ArrayWithIDChanges(employees, idChanges) // result: [{id: 1, name: 'Bobby'}, {id: 2, name: 'Johnny'}]
 */
export type IIDChanges<T> = {
    [key: number]: IChanges<T>;
};
/**
 *
 */
export declare const initialIDChanges: {};
/**
 * IIDChanges provides a structure for tracking changes across an array of items that have a unique "id" column.
 *
 * @example
 * const employees = [{id: 1, name: 'Bob'}, {id: 2, name: 'John'}]
 * const [idChanges, setIDChanges] = useState({} as IIDChanges)
 *
 * setIDChanges(prevState => AddIDChange(1, 'name', 'Bobby', prevState)) // result: {1: {'name', 'Bobby'}}
 *
 * setIDChanges(prevState => AddIDChange(2, 'name', 'Johnny', prevState)) // result: {1: {'name', 'Johnny'}, 2: {'name', 'Johnny'}}
 *
 * const updatedEmployees = ArrayWithIDChanges(employees, idChanges) // result: [{id: 1, name: 'Bobby'}, {id: 2, name: 'Johnny'}]
 */
export declare const AddIDChange: <T>(id: number, name: keyof T, value: any, idChanges: IIDChanges<T>, baselines?: Partial<T>) => IIDChanges<T>;
/**
 *
 * @param id
 * @param changes
 * @param idChanges
 * @param baselines
 * @constructor
 */
export declare const AddIDChanges: <T>(id: number, changes: Partial<T>, idChanges: IIDChanges<T>, baselines?: Partial<T>) => IIDChanges<T>;
/**
 * Returns a new state for an array with elements uniquely identifiable by id or uuid, leaving it in the same order it found it.
 *
 * @example
 * const [data, setData] = useState([\{id: 1, name: 'Bob', age: 35\}, \{uuid: 'abcd', name: 'John', age: 40\}])
 *
 * setData(prevState => ChangeArrayByIDOrUUID(prevState, {id: 1, name: 'Bobby'}))
 * setData(prevState => ChangeArrayByIDOrUUID(prevState, {uuid: 'abcd', age: 42}))
 *
 *
 * @param change
 * @param prevState
 * @param initial
 * @constructor
 */
export declare const ChangeArrayByIDOrUUID: <T extends {
    [key: string]: any;
    id?: number | undefined;
    uuid?: string | undefined;
}>(prevState: T[], change: Partial<T>, initial: T) => T[];
/**
 * Combines original value arrays with changed values, and produces a new set, in order
 *
 * @example
 * const original = [{id: 1, name: 'Bob', age: 35}, {id: 2, name: 'Sally', age: 25}]
 * const changes = [{id: 1, name: 'Bobby'}, {uuid: 'abcd', age: 42}]
 *
 * CombineArrayWithIDOrUUIDChanges(original, changes) = [{id: 1, name: 'Bobby', age: 35}, {id: 2, name: 'Sally', age: 25}, {uuid: 'abcd', age: 42}]
 *
 *
 * @constructor
 * @param original
 * @param changes
 * @param initial
 */
export declare const CombineArrayWithIDOrUUIDChanges: <T extends {
    [key: string]: any;
    id?: number | undefined;
    uuid?: string | undefined;
}>(original: T[], changes: Partial<T>[], initial: T) => T[];
/**
 * IIDChanges provides a structure for tracking changes across an array of items that have a unique "id" column.
 *
 * @example
 * const employees = [{id: 1, name: 'Bob'}, {id: 2, name: 'John'}]
 * const [idChanges, setIDChanges] = useState({} as IIDChanges)
 *
 * setIDChanges(prevState => AddIDChange(1, 'name', 'Bobby', prevState)) // result: {1: {'name': 'Bobby'}}
 * setIDChanges(prevState => AddIDChange(2, 'name', 'Johnny', prevState)) // result: {1: {'name': 'Bobby'}, 2: {'name': 'Johnny'}}
 *
 * const updatedEmployees = ArrayWithIDChanges(employees, idChanges) // result: [{id: 1, name: 'Bobby'}, {id: 2, name: 'Johnny'}]
 */
export declare const ArrayWithIDChanges: <T extends IIDObject>(items: T[], idChanges: IIDChanges<T>) => T[];
/**
 * Converts Array to CSV.
 */
export declare const ArrayToCSVString: (csvData: object[], blankZeros?: boolean) => string;
/**
 * Converts Array to TSV.
 */
export declare const ArrayToTSVString: (csvData: object[], blankZeros?: boolean) => string;
/**
 * Converts Data to CSV.
 */
export declare const DataToCSVString: (csvData: any[][], blankZeros?: boolean) => string;
/**
 * Converts Data to CSV. Creates a download link and triggers
 * click event on it to download the file.
 */
export declare const DataToCSVExport: (filename: string, csvData: any[][], blankZeros?: boolean) => void;
/**
 * Converts Data to CSV without quotes. Creates a download link and triggers
 * click event on it to download the file.
 */
export declare const DataToCSVExportNoQuotes: (filename: string, csvData: any[][]) => void;
/**
 * Converts an array of records into a tab-delimited string, usable by Excel
 *
 * @param datasets
 * @param includeHeaders
 * @param headerToWords
 * @constructor
 */
export declare const DataToTabDelim: <T = Record<string, any>>(datasets: T[], includeHeaders?: boolean, headerToWords?: boolean) => string;
/**
 * Checks if a string is a valid JSON structure
 */
export declare const IsJSON: (json: any) => boolean;
/**
 *
 * @param val1
 * @param val2
 * @param consoleLog
 * @constructor
 */
export declare const IsEqual: (val1: any, val2: any, consoleLog?: boolean) => boolean;
/**
 * Removes properties from an object having the same value.
 *
 * @example
 * let data = {
 *   name: 'john doe',
 *   age: 24,
 * }
 *
 * let data2 = {
 *   name: 'john smith',
 *   age: 24,
 * }
 *
 * // returns {name: 'john doe}
 * RemoveDupProperties(data, data2)
 */
export declare const RemoveDupProperties: <T>(original: Partial<T>, propsToRemove: Partial<T>) => Partial<T>;
/**
 * Removes properties from an object having the same value by ID.
 *
 * @example
 * let data = {
 *   1: {
 *     name: 'john doe',
 *     age: 24,
 *   }
 * }
 *
 * let data2 = {
 *   1: {
 *     name: 'john smith',
 *     age: 24,
 *   }
 * }
 *
 * // returns {1: {name: 'john doe}}
 * RemoveDupPropertiesByID(data, data2)
 */
export declare const RemoveDupPropertiesByID: <T>(original: IIDChanges<T>, propsToRemove: IIDChanges<T>) => IIDChanges<T>;
/**
 * Removes properties from an object having the same value by an array of objects.
 *
 * @example
 * let data = {
 *   1: {
 *     name: 'john doe',
 *     age: 24,
 *   }
 * }
 *
 * let data2 = [
 *   {id: '1', user: 'john smith', age: 24},
 *   {id: '2', user: 'sally jones', age: 32}
 * ]
 *
 * // returns {1: {name: 'john doe}}
 * RemoveDupPropertiesByIDArray(data, data2)
 */
export declare const RemoveDupPropertiesByIDArray: <T>(original: IIDChanges<T>, propsToRemoveArray: any[]) => IIDChanges<T>;
/**
 * Returns the difference of two objects.
 *
 * @example
 * let data = {id: 1, user: 'john doe', age: 24}
 * let data2 = {id: 2, user: 'john doe', age: 23}
 *
 * // returns {id: 1, age: 24}
 * ObjectDiffs(data, data2)
 *
 * // returns {age: 24}
 * ObjectDiffs(data, data2, 'id')
 */
export declare const ObjectDiffs: (compare: any, comparedTo: any, excludeKeys?: string[]) => any;
/**
 * Returns a reduces object to other keys.
 *
 * @example
 * let data = {id: 1, user: 'john doe', age: 24}
 * let data2 = {user: 'john doe'}
 *
 * // returns {user: '', age: ''}
 * ReduceObjectToOtherKeys(data, data2)
 *
 * // returns {user: ''}
 * ReduceObjectToOtherKeys(data, data2, ['age'])
 */
export declare const ReduceObjectToOtherKeys: (main: any, reduceTo: any, excludeKeys?: string[]) => any;
/**
 * A type utility that transforms all properties of a given type `T` to allow `null` values.
 *
 * This utility type maps each property of the given type `T` to a union type
 * with `null`. It is useful when you need to represent objects where some
 * properties can explicitly have a null value, alongside their original types.
 *
 * @template T - The type to transform by allowing its properties to be `null`.
 */
export type Nullable<T> = {
    [K in keyof T]: T[K] | null;
};
/**
 * A utility type `DeepNullable` that transforms all properties of a given type `T`
 * and its nested objects into types that are nullable.
 *
 * This type recursively makes every property of `T` optionally null, allowing
 * for deeply nested structures to account for the possibility of `null` values
 * at any level.
 *
 * Example:
 * For a type `T`, applying `DeepNullable<T>` will transform it such that:
 * - All direct properties of `T` can be `null`
 * - If a property of `T` is an object, its properties can also be `null`,
 *   and this behavior continues recursively.
 *
 * Type Parameters:
 * @template T The type whose properties and sub-properties will be made nullable.
 */
export type DeepNullable<T> = {
    [K in keyof T]: DeepNullable<T[K]> | null;
};
/**
 * A utility type that transforms all the properties of a given type `T` into non-nullable properties.
 * This means that each property of `T` that could potentially be `null` or `undefined` is transformed
 * to exclude these possibilities, thus ensuring that no property in the resulting type can be `null`
 * or `undefined`.
 *
 * @template T The object type whose properties are to be made non-nullable.
 * @typedef {Object} NonNullableProperties
 * @property {T} K Represents the keys of the input type `T`.
 */
export type NonNullableProperties<T> = {
    [K in keyof T]: NonNullable<T[K]>;
};
