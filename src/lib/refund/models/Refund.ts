import { VendorsRefundInfoResponse } from '../../marketplace/models/VendorsRefundInfo';

/**
 * Contains refund details
 */

export interface RefundResponse {
    amount: number;
    currency: string;
    date: string;
    refundTransactionId: number;
    vendorAmount: number;
    vendorsRefundInfo: VendorsRefundInfoResponse;
}

export type RefundRequestQueryParams = {
    amount?: number;
    reason?: string;
    cancelsubscriptions?: boolean;
} & {
    [key: string]: number; // Dynamic key for vendor, formatted as: vendor.${vendorId}.amount
}
