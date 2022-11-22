// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamUncheckedCreateNestedManyWithoutGameInputObjectSchema } from '../internals';;
import { GameEventUncheckedCreateNestedManyWithoutGameInputObjectSchema } from '../internals';

export const GameUncheckedCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  team: TeamUncheckedCreateNestedManyWithoutGameInputObjectSchema,  events: GameEventUncheckedCreateNestedManyWithoutGameInputObjectSchema,  updatedAt: Yup.date(),  attendance: Yup.number().required(),  locationId: Yup.string().required(),  competitionId: Yup.string().required()
});
