import * as Yup from 'yup';
import { HeathRecordWhereInputObjectSchema, HeathRecordOrderByWithRelationInputObjectSchema, HeathRecordWhereUniqueInputObjectSchema } from './internals';
import { HeathRecordScalarFieldEnumSchema } from './internals'

export const HeathRecordFindManySchema = Yup.object({ where: HeathRecordWhereInputObjectSchema, orderBy: HeathRecordOrderByWithRelationInputObjectSchema, cursor: HeathRecordWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(HeathRecordScalarFieldEnumSchema)  }).required()