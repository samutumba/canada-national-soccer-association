import * as Yup from 'yup';
import { GameWhereInputObjectSchema, GameOrderByWithRelationInputObjectSchema, GameWhereUniqueInputObjectSchema } from './internals';
import { GameScalarFieldEnumSchema } from './internals'

export const GameFindFirstSchema = Yup.object({ where: GameWhereInputObjectSchema, orderBy: GameOrderByWithRelationInputObjectSchema, cursor: GameWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(GameScalarFieldEnumSchema) }).required()