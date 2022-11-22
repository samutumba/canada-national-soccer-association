// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const SeasonMaxOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  startDate: SortOrderSchema,  endDate: SortOrderSchema
});
