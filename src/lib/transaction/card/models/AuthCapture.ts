import { ThreeDSecureRequest } from '../../models/ThreeDSecure';
import { TransactionMetaDataRequest } from '../../models/TransactionMetaData';
import { Level3DataRequest } from '../../models/Level3Data';
import { CardHolderInfoRequest } from './CardHolderInfo';
import { CreditCardRequest } from './CreditCard';
import { WalletRequest } from '../../../wallet/models/Wallet';
import { VendorsInfoRequest } from '../../../marketplace/models/VendorsInfo';
import { TransactionFraudInfoRequest } from '../../models/TransactionFraudInfo';

export interface AuthCaptureRequest {
    walletId?: number;
    wallet?: WalletRequest;
    amount: number;
    vaultedShopperId?: number;
    merchantTransactionId?: string;
    softDescriptor?: string;
    descriptorPhoneNumber?: string;
    vendorsInfo?: VendorsInfoRequest;
    cardHolderInfo?: CardHolderInfoRequest;
    currency: string;
    transactionFraudInfo?: TransactionFraudInfoRequest;
    creditCard?: CreditCardRequest;
    cardTransactionType: string;
    threeDSecure?: ThreeDSecureRequest;
    transactionMetaData?: TransactionMetaDataRequest;
    pfToken?: string;
    level3Data?: Level3DataRequest;
    storeCard?: boolean;
}

export interface AuthRequest {
    walletId?: number;
    wallet?: WalletRequest;
    amount: number;
    vaultedShopperId?: number;
    merchantTransactionId?: string;
    softDescriptor?: string;
    descriptorPhoneNumber?: string;
    vendorsInfo?: VendorsInfoRequest;
    cardHolderInfo?: CardHolderInfoRequest;
    currency: string;
    transactionFraudInfo?: TransactionFraudInfoRequest;
    creditCard?: CreditCardRequest;
    cardTransactionType: string;
    threeDSecure?: ThreeDSecureRequest;
    transactionMetaData?: TransactionMetaDataRequest;
    pfToken?: string;
    level3Data?: Level3DataRequest;
    storeCard?: boolean;
}

export interface AuthReversalRequest {
    cardTransactionType: string;
    transactionId: string; // Must be the transactionId from the AuthOnly response
}

export interface CaptureRequest {
    amount? : number;
    softDescriptor?: string;
    vendorsInfo?: VendorsInfoRequest;
    cardTransactionType: string;
    transactionMetaData?: TransactionMetaDataRequest;
    transactionId: string; // Must be the transactionId from the AuthOnly response
}
