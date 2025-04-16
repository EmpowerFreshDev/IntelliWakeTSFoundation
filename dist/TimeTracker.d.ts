export type TTimeEvent = {
    eventMS: number;
    label: string;
    durationMS: number;
};
export type TTimeTrackerOptions = {
    offendingMS?: number | null;
    warnAutomatically?: boolean | null;
};
export declare class TimeTracker {
    events: TTimeEvent[];
    offendingMS: number;
    warnAutomatically: boolean;
    constructor(options?: TTimeTrackerOptions);
    /**
     * Reset the control to start tracking times from this point forward
     */
    reset(): void;
    /**
     * Get the maximum TS in the events
     */
    get maxTS(): number;
    /**
     * Get the minimum TS in the events
     */
    get minTS(): number;
    /**
     * Get the total duration of all events
     */
    get duration(): number;
    /**
     * Mark the current time with a label for analysis later, and throw a console warn if appropriate
     * @param label
     * @param options
     */
    mark(label: string, options?: TTimeTrackerOptions): TTimeEvent;
    /**
     * Mark the current time with a label for analysis later, and throw a console warn if appropriate
     * @param label
     * @param promiseFunction
     * @param options
     */
    markResolved(label: string, promiseFunction: Promise<any>, options?: TTimeTrackerOptions): Promise<any>;
    /**
     * Report back only the events that exceeded the offending MS
     */
    get offendingEvents(): TTimeEvent[];
    /**
     * Analyze events, and if any are offending, or if the sum offends, then display those events and return them
     * @param options
     */
    durationOffends(options?: TTimeTrackerOptions & {
        label?: string;
        showAll?: boolean;
    }): TTimeEvent[] | null;
    /**
     * Analyze events, and if any are offending, or if the sum offends, then display those events and return them
     * @param label
     * @param offendingMS
     * @param showAll
     */
    consoleDurationOffends(label: string, offendingMS?: number, showAll?: boolean): TTimeEvent[] | null;
}
/**
 * Tracks the time taken by a promise function to resolve and logs a warning if it exceeds the specified time limit.
 *
 * @param {string} label - The label to identify the time tracking operation.
 * @param {number | null | undefined} offendingMS - The time limit (in milliseconds) that triggers a warning if the promise function takes longer to resolve.
 * @param {Promise<T>} promiseFunction - The promise function to track the resolution time.
 * @returns {Promise<T>} - A promise that resolves with the same value as the input promise function.
 */
export declare function TimeTrackResolved<T>(label: string, offendingMS: any | null | undefined, promiseFunction: Promise<T>): Promise<T>;
