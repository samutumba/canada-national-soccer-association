// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerUncheckedCreateNestedManyWithoutTeamInputObjectSchema } from '../internals';

export const TeamUncheckedCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  starters: PlayerUncheckedCreateNestedManyWithoutTeamInputObjectSchema,  shirtColor: Yup.string().required(),  squadId: Yup.string().required(),  gameId: Yup.mixed().oneOfSchemas([Yup.string()])
});
