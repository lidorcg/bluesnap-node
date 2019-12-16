import { ValidatedResponse } from '../../errors/models/ValidatedResponse';

/**
 * Contains details for requesting a refund
 */
export type RefundRequestQueryParams = {
    amount?: number;
    reason?: string;
    cancelsubscriptions?: boolean;
} & {
    [key: string]: number; // Dynamic key for vendor, formatted as: vendor.${vendorId}.amount
}

/**
 * Refund transactions will return null if successful.
 */
export type RefundTransactionResponse = ValidatedResponse | null;

