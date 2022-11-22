import * as Yup from 'yup';
import { StaffWhereInputObjectSchema, StaffOrderByWithRelationInputObjectSchema, StaffWhereUniqueInputObjectSchema } from './internals'

export const StaffAggregateSchema = Yup.object({ where: StaffWhereInputObjectSchema, orderBy: StaffOrderByWithRelationInputObjectSchema, cursor: StaffWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()