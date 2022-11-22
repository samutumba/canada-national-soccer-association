import * as Yup from 'yup';
import { StaffWhereUniqueInputObjectSchema } from './internals'

export const StaffFindUniqueSchema = Yup.object({ where: StaffWhereUniqueInputObjectSchema }).required()