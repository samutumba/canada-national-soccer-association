// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { CompetitionCountOrderByAggregateInputObjectSchema } from '../internals';;
import { CompetitionMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { CompetitionMinOrderByAggregateInputObjectSchema } from '../internals';

export const CompetitionOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  sponsor: SortOrderSchema,  type: SortOrderSchema,  seasonId: SortOrderSchema,  _count: CompetitionCountOrderByAggregateInputObjectSchema,  _max: CompetitionMaxOrderByAggregateInputObjectSchema,  _min: CompetitionMinOrderByAggregateInputObjectSchema
});
