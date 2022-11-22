import * as Yup from 'yup';
import { GameWhereInputObjectSchema, GameOrderByWithRelationInputObjectSchema, GameWhereUniqueInputObjectSchema } from './internals'

export const GameAggregateSchema = Yup.object({ where: GameWhereInputObjectSchema, orderBy: GameOrderByWithRelationInputObjectSchema, cursor: GameWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()