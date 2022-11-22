import * as Yup from 'yup';
import { PlayerWhereUniqueInputObjectSchema } from './internals'

export const PlayerDeleteOneSchema = Yup.object({ where: PlayerWhereUniqueInputObjectSchema  }).required()