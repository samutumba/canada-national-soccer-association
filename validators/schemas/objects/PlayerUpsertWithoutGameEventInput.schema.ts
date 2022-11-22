// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerUpdateWithoutGameEventInputObjectSchema } from '../internals';;
import { PlayerUncheckedUpdateWithoutGameEventInputObjectSchema } from '../internals';;
import { PlayerCreateWithoutGameEventInputObjectSchema } from '../internals';;
import { PlayerUncheckedCreateWithoutGameEventInputObjectSchema } from '../internals';

export const PlayerUpsertWithoutGameEventInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([PlayerUpdateWithoutGameEventInputObjectSchema,
PlayerUncheckedUpdateWithoutGameEventInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([PlayerCreateWithoutGameEventInputObjectSchema,
PlayerUncheckedCreateWithoutGameEventInputObjectSchema])
});
