// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const SeasonMinOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  startDate: SortOrderSchema,  endDate: SortOrderSchema
});
