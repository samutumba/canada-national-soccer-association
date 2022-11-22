import * as Yup from 'yup';
import { StaffUpdateManyMutationInputObjectSchema, StaffWhereInputObjectSchema } from './internals'

export const StaffUpdateManySchema = Yup.object({ data: StaffUpdateManyMutationInputObjectSchema, where: StaffWhereInputObjectSchema  }).required()