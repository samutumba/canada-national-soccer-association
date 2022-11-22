import * as Yup from 'yup';
import { GameUpdateManyMutationInputObjectSchema, GameWhereInputObjectSchema } from './internals'

export const GameUpdateManySchema = Yup.object({ data: GameUpdateManyMutationInputObjectSchema, where: GameWhereInputObjectSchema  }).required()