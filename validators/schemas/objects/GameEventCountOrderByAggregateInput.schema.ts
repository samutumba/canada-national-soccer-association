// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const GameEventCountOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  minute: SortOrderSchema,  gameId: SortOrderSchema,  playerId: SortOrderSchema,  type: SortOrderSchema
});
