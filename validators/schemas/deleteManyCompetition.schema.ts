import * as Yup from 'yup';
import { CompetitionWhereInputObjectSchema } from './internals'

export const CompetitionDeleteManySchema = Yup.object({ CompetitionWhereInputObjectSchema  }).required()