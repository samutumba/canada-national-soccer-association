import * as Yup from 'yup';
import { StaffWhereInputObjectSchema } from './internals'

export const StaffDeleteManySchema = Yup.object({ StaffWhereInputObjectSchema  }).required()