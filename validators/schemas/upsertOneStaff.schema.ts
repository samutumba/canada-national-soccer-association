import * as Yup from 'yup';
import { StaffWhereUniqueInputObjectSchema, StaffCreateInputObjectSchema, StaffUpdateInputObjectSchema } from './internals'

export const StaffUpsertSchema = Yup.object({ where: StaffWhereUniqueInputObjectSchema, data: StaffCreateInputObjectSchema, update: StaffUpdateInputObjectSchema  }).required()