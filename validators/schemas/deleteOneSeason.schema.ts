import * as Yup from 'yup';
import { SeasonWhereUniqueInputObjectSchema } from './internals'

export const SeasonDeleteOneSchema = Yup.object({ where: SeasonWhereUniqueInputObjectSchema  }).required()