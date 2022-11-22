import * as Yup from 'yup';
import { StaffWhereUniqueInputObjectSchema } from './internals'

export const StaffDeleteOneSchema = Yup.object({ where: StaffWhereUniqueInputObjectSchema  }).required()