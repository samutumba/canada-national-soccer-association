import * as Yup from 'yup';
import { PlayerWhereInputObjectSchema } from './internals'

export const PlayerDeleteManySchema = Yup.object({ PlayerWhereInputObjectSchema  }).required()