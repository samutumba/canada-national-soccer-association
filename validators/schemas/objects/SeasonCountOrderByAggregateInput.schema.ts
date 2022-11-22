// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const SeasonCountOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  startDate: SortOrderSchema,  endDate: SortOrderSchema
});
