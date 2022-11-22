import * as Yup from 'yup';
import { SeasonUpdateInputObjectSchema, SeasonWhereUniqueInputObjectSchema } from './internals'

export const SeasonUpdateOneSchema = Yup.object({ data: SeasonUpdateInputObjectSchema, where: SeasonWhereUniqueInputObjectSchema  }).required()