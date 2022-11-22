import * as Yup from 'yup';
import { PlayerWhereInputObjectSchema, PlayerOrderByWithRelationInputObjectSchema, PlayerWhereUniqueInputObjectSchema } from './internals';
import { PlayerScalarFieldEnumSchema } from './internals'

export const PlayerFindManySchema = Yup.object({ where: PlayerWhereInputObjectSchema, orderBy: PlayerOrderByWithRelationInputObjectSchema, cursor: PlayerWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(PlayerScalarFieldEnumSchema)  }).required()