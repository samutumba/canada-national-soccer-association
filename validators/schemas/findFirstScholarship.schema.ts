import * as Yup from 'yup';
import { ScholarshipWhereInputObjectSchema, ScholarshipOrderByWithRelationInputObjectSchema, ScholarshipWhereUniqueInputObjectSchema } from './internals';
import { ScholarshipScalarFieldEnumSchema } from './internals'

export const ScholarshipFindFirstSchema = Yup.object({ where: ScholarshipWhereInputObjectSchema, orderBy: ScholarshipOrderByWithRelationInputObjectSchema, cursor: ScholarshipWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(ScholarshipScalarFieldEnumSchema) }).required()