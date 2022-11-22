import * as Yup from 'yup';
import { StaffWhereInputObjectSchema, StaffOrderByWithRelationInputObjectSchema, StaffWhereUniqueInputObjectSchema } from './internals';
import { StaffScalarFieldEnumSchema } from './internals'

export const StaffFindFirstSchema = Yup.object({ where: StaffWhereInputObjectSchema, orderBy: StaffOrderByWithRelationInputObjectSchema, cursor: StaffWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(StaffScalarFieldEnumSchema) }).required()