import * as Yup from 'yup';
import { StaffCreateInputObjectSchema } from './internals'

export const StaffCreateSchema = Yup.object({ data: StaffCreateInputObjectSchema  }).required()