// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { SeasonCountOrderByAggregateInputObjectSchema } from '../internals';;
import { SeasonMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { SeasonMinOrderByAggregateInputObjectSchema } from '../internals';

export const SeasonOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  startDate: SortOrderSchema,  endDate: SortOrderSchema,  _count: SeasonCountOrderByAggregateInputObjectSchema,  _max: SeasonMaxOrderByAggregateInputObjectSchema,  _min: SeasonMinOrderByAggregateInputObjectSchema
});
