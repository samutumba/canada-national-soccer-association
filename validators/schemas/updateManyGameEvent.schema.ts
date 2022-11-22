import * as Yup from 'yup';
import { GameEventUpdateManyMutationInputObjectSchema, GameEventWhereInputObjectSchema } from './internals'

export const GameEventUpdateManySchema = Yup.object({ data: GameEventUpdateManyMutationInputObjectSchema, where: GameEventWhereInputObjectSchema  }).required()