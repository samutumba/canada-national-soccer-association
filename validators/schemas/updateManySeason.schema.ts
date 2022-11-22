import * as Yup from 'yup';
import { SeasonUpdateManyMutationInputObjectSchema, SeasonWhereInputObjectSchema } from './internals'

export const SeasonUpdateManySchema = Yup.object({ data: SeasonUpdateManyMutationInputObjectSchema, where: SeasonWhereInputObjectSchema  }).required()