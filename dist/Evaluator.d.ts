export type TVariables = {
    [key: string]: any;
};
export type TProcessMathResults = {
    calculation: number | null;
    missingVariables: string[];
    variables?: TVariables;
    warnings: string[];
    errors: string[];
};
export type TProcessMathOptionsResponse = null | number | {
    value?: number | null;
    warning?: string;
    error?: string;
};
export type TProcessMathOptions = {
    requestVariable?: (variable: string) => Promise<TProcessMathOptionsResponse>;
};
export declare function ProcessMath(expression: string, variables?: TVariables, options?: TProcessMathOptions): Promise<TProcessMathResults>;
/**
 * Evaluates a mathematical expression and returns the result.
 * Variables enclosed in square braces are replaced by the appropriate variables.
 *
 * @param {string} expression - The expression to be evaluated.
 * @param {TVariables} [variables] - Variables to be used in the expression.
 * @returns {number | null} - The result of the evaluation, or null if the expression is invalid.
 */
export declare function EvaluateMath(expression: string, variables?: TVariables): number | null;
/**
 * Accepts a string, and processes variables against it. Everything within square brackets [] will run through a calculation.
 *
 * @example
 * // returns "Hello, Bob"
 * EvaluateString("Hello, [Name]!", {Name: "Bob"})
 *
 * // returns "1 + SomeValue = 3"
 * EvaluateString("1 + SomeValue = [1 + [SomeValue]]", {SomeValue: 2})
 */
export declare const EvaluateString: (expression: string, variables?: TVariables) => string;
/**
 * Accepts a string, processes variables against the entire string, and returns a boolean if the condition is true or false.
 *
 * @example
 *
 * // returns false
 * EvaluateCondition("1 = SomeValue", {SomeValue: 2})
 *
 * // returns true
 * EvaluateCondition("2 = SomeValue", {SomeValue: 2}) = true
 */
export declare const EvaluateCondition: (expression: string, variables?: TVariables) => boolean;
export declare function StringGetSets(stringItem: string | null, setStart: string, setEnd: string): string[];
