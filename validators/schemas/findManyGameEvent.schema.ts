import * as Yup from 'yup';
import { GameEventWhereInputObjectSchema, GameEventOrderByWithRelationInputObjectSchema, GameEventWhereUniqueInputObjectSchema } from './internals';
import { GameEventScalarFieldEnumSchema } from './internals'

export const GameEventFindManySchema = Yup.object({ where: GameEventWhereInputObjectSchema, orderBy: GameEventOrderByWithRelationInputObjectSchema, cursor: GameEventWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(GameEventScalarFieldEnumSchema)  }).required()