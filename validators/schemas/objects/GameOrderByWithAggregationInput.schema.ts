// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { GameCountOrderByAggregateInputObjectSchema } from '../internals';;
import { GameAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { GameMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { GameMinOrderByAggregateInputObjectSchema } from '../internals';;
import { GameSumOrderByAggregateInputObjectSchema } from '../internals';

export const GameOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  updatedAt: SortOrderSchema,  attendance: SortOrderSchema,  locationId: SortOrderSchema,  competitionId: SortOrderSchema,  _count: GameCountOrderByAggregateInputObjectSchema,  _avg: GameAvgOrderByAggregateInputObjectSchema,  _max: GameMaxOrderByAggregateInputObjectSchema,  _min: GameMinOrderByAggregateInputObjectSchema,  _sum: GameSumOrderByAggregateInputObjectSchema
});
