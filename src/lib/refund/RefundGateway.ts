import * as querystring from 'querystring';
import { HttpClient } from '../http/HttpClient';
import { RefundRequestQueryParams, RefundTransactionResponse } from './models/RefundTransaction';

export class RefundGateway {
    private http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }

    public async refund(transactionId: string, params?: RefundRequestQueryParams): Promise<RefundTransactionResponse> {
        const queryParams = querystring.stringify(params);
        const path = `/services/2/transactions/${transactionId}/refund?${queryParams}`;
        return this.http.put(path);
    }
}
