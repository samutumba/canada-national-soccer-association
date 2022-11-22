// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamUncheckedCreateNestedManyWithoutGameInputObjectSchema } from '../internals';

export const GameUncheckedCreateWithoutEventsInputObjectSchema = Yup.object({
    id: Yup.string(),  team: TeamUncheckedCreateNestedManyWithoutGameInputObjectSchema,  updatedAt: Yup.date(),  attendance: Yup.number().required(),  locationId: Yup.string().required(),  competitionId: Yup.string().required()
});
