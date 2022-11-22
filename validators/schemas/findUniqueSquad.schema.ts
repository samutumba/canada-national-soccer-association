import * as Yup from 'yup';
import { SquadWhereUniqueInputObjectSchema } from './internals'

export const SquadFindUniqueSchema = Yup.object({ where: SquadWhereUniqueInputObjectSchema }).required()