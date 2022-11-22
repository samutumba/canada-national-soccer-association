import * as Yup from 'yup';
import { SquadWhereInputObjectSchema } from './internals'

export const SquadDeleteManySchema = Yup.object({ SquadWhereInputObjectSchema  }).required()