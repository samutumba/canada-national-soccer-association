// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameUpdateWithoutTeamInputObjectSchema } from '../internals';;
import { GameUncheckedUpdateWithoutTeamInputObjectSchema } from '../internals';;
import { GameCreateWithoutTeamInputObjectSchema } from '../internals';;
import { GameUncheckedCreateWithoutTeamInputObjectSchema } from '../internals';

export const GameUpsertWithoutTeamInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([GameUpdateWithoutTeamInputObjectSchema,
GameUncheckedUpdateWithoutTeamInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([GameCreateWithoutTeamInputObjectSchema,
GameUncheckedCreateWithoutTeamInputObjectSchema])
});
