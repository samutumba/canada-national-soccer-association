// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerUpdateWithoutInjuryInputObjectSchema } from '../internals';;
import { PlayerUncheckedUpdateWithoutInjuryInputObjectSchema } from '../internals';;
import { PlayerCreateWithoutInjuryInputObjectSchema } from '../internals';;
import { PlayerUncheckedCreateWithoutInjuryInputObjectSchema } from '../internals';

export const PlayerUpsertWithoutInjuryInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([PlayerUpdateWithoutInjuryInputObjectSchema,
PlayerUncheckedUpdateWithoutInjuryInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([PlayerCreateWithoutInjuryInputObjectSchema,
PlayerUncheckedCreateWithoutInjuryInputObjectSchema])
});
