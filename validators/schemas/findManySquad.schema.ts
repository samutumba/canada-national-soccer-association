import * as Yup from 'yup';
import { SquadWhereInputObjectSchema, SquadOrderByWithRelationInputObjectSchema, SquadWhereUniqueInputObjectSchema } from './internals';
import { SquadScalarFieldEnumSchema } from './internals'

export const SquadFindManySchema = Yup.object({ where: SquadWhereInputObjectSchema, orderBy: SquadOrderByWithRelationInputObjectSchema, cursor: SquadWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(SquadScalarFieldEnumSchema)  }).required()