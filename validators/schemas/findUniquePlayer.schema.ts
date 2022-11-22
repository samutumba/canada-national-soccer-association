import * as Yup from 'yup';
import { PlayerWhereUniqueInputObjectSchema } from './internals'

export const PlayerFindUniqueSchema = Yup.object({ where: PlayerWhereUniqueInputObjectSchema }).required()