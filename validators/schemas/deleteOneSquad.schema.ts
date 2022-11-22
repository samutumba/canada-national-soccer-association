import * as Yup from 'yup';
import { SquadWhereUniqueInputObjectSchema } from './internals'

export const SquadDeleteOneSchema = Yup.object({ where: SquadWhereUniqueInputObjectSchema  }).required()