import * as Yup from 'yup';
import { CompetitionCreateInputObjectSchema } from './internals'

export const CompetitionCreateSchema = Yup.object({ data: CompetitionCreateInputObjectSchema  }).required()