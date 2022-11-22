import * as Yup from 'yup';
import { SeasonCreateInputObjectSchema } from './internals'

export const SeasonCreateSchema = Yup.object({ data: SeasonCreateInputObjectSchema  }).required()