import * as Yup from 'yup';
import { PlayerUpdateManyMutationInputObjectSchema, PlayerWhereInputObjectSchema } from './internals'

export const PlayerUpdateManySchema = Yup.object({ data: PlayerUpdateManyMutationInputObjectSchema, where: PlayerWhereInputObjectSchema  }).required()