import * as Yup from 'yup';
import { StaffUpdateInputObjectSchema, StaffWhereUniqueInputObjectSchema } from './internals'

export const StaffUpdateOneSchema = Yup.object({ data: StaffUpdateInputObjectSchema, where: StaffWhereUniqueInputObjectSchema  }).required()