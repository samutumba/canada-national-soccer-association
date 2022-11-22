// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const HeathRecordMinOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  cardNumber: SortOrderSchema,  issueDate: SortOrderSchema,  expiryDate: SortOrderSchema
});
