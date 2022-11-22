// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { HeathRecordCountOrderByAggregateInputObjectSchema } from '../internals';;
import { HeathRecordMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { HeathRecordMinOrderByAggregateInputObjectSchema } from '../internals';

export const HeathRecordOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  cardNumber: SortOrderSchema,  issueDate: SortOrderSchema,  expiryDate: SortOrderSchema,  _count: HeathRecordCountOrderByAggregateInputObjectSchema,  _max: HeathRecordMaxOrderByAggregateInputObjectSchema,  _min: HeathRecordMinOrderByAggregateInputObjectSchema
});
