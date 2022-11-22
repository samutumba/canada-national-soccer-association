// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameEventUncheckedCreateNestedManyWithoutGameInputObjectSchema } from '../internals';

export const GameUncheckedCreateWithoutTeamInputObjectSchema = Yup.object({
    id: Yup.string(),  events: GameEventUncheckedCreateNestedManyWithoutGameInputObjectSchema,  updatedAt: Yup.date(),  attendance: Yup.number().required(),  locationId: Yup.string().required(),  competitionId: Yup.string().required()
});
