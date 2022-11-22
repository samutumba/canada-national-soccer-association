import * as Yup from 'yup';
import { InjuryCreateInputObjectSchema } from './internals'

export const InjuryCreateSchema = Yup.object({ data: InjuryCreateInputObjectSchema  }).required()