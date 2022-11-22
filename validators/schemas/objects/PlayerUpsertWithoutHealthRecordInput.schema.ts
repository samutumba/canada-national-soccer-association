// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerUpdateWithoutHealthRecordInputObjectSchema } from '../internals';;
import { PlayerUncheckedUpdateWithoutHealthRecordInputObjectSchema } from '../internals';;
import { PlayerCreateWithoutHealthRecordInputObjectSchema } from '../internals';;
import { PlayerUncheckedCreateWithoutHealthRecordInputObjectSchema } from '../internals';

export const PlayerUpsertWithoutHealthRecordInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([PlayerUpdateWithoutHealthRecordInputObjectSchema,
PlayerUncheckedUpdateWithoutHealthRecordInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([PlayerCreateWithoutHealthRecordInputObjectSchema,
PlayerUncheckedCreateWithoutHealthRecordInputObjectSchema])
});
