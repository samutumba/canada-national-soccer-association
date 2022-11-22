// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadUpdateWithoutTeamInputObjectSchema } from '../internals';;
import { SquadUncheckedUpdateWithoutTeamInputObjectSchema } from '../internals';;
import { SquadCreateWithoutTeamInputObjectSchema } from '../internals';;
import { SquadUncheckedCreateWithoutTeamInputObjectSchema } from '../internals';

export const SquadUpsertWithoutTeamInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([SquadUpdateWithoutTeamInputObjectSchema,
SquadUncheckedUpdateWithoutTeamInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([SquadCreateWithoutTeamInputObjectSchema,
SquadUncheckedCreateWithoutTeamInputObjectSchema])
});
