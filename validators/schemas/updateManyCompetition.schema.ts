import * as Yup from 'yup';
import { CompetitionUpdateManyMutationInputObjectSchema, CompetitionWhereInputObjectSchema } from './internals'

export const CompetitionUpdateManySchema = Yup.object({ data: CompetitionUpdateManyMutationInputObjectSchema, where: CompetitionWhereInputObjectSchema  }).required()