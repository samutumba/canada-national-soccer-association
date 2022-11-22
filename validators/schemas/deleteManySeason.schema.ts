import * as Yup from 'yup';
import { SeasonWhereInputObjectSchema } from './internals'

export const SeasonDeleteManySchema = Yup.object({ SeasonWhereInputObjectSchema  }).required()