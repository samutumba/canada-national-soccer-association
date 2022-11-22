import * as Yup from 'yup';
import { CompetitionWhereUniqueInputObjectSchema } from './internals'

export const CompetitionDeleteOneSchema = Yup.object({ where: CompetitionWhereUniqueInputObjectSchema  }).required()