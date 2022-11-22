import * as Yup from 'yup';
import { GameEventWhereInputObjectSchema } from './internals'

export const GameEventDeleteManySchema = Yup.object({ GameEventWhereInputObjectSchema  }).required()