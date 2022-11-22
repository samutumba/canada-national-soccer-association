import * as Yup from 'yup';
import { InjuryWhereInputObjectSchema, InjuryOrderByWithRelationInputObjectSchema, InjuryWhereUniqueInputObjectSchema } from './internals';
import { InjuryScalarFieldEnumSchema } from './internals'

export const InjuryFindManySchema = Yup.object({ where: InjuryWhereInputObjectSchema, orderBy: InjuryOrderByWithRelationInputObjectSchema, cursor: InjuryWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(InjuryScalarFieldEnumSchema)  }).required()