import * as Yup from 'yup';
import { InstitutionWhereInputObjectSchema, InstitutionOrderByWithRelationInputObjectSchema, InstitutionWhereUniqueInputObjectSchema } from './internals';
import { InstitutionScalarFieldEnumSchema } from './internals'

export const InstitutionFindFirstSchema = Yup.object({ where: InstitutionWhereInputObjectSchema, orderBy: InstitutionOrderByWithRelationInputObjectSchema, cursor: InstitutionWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(InstitutionScalarFieldEnumSchema) }).required()