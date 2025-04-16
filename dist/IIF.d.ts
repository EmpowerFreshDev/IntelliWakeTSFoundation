export type TCheckForIIF = {
    id?: string | number | null;
    /** Format: MM/DD/YYYY */
    date: string;
    account: string;
    payee: string;
    amount: number;
    memo: string;
    number: number;
    category: string;
};
export declare function ChecksToIIF(checks: TCheckForIIF[]): string;
