// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerUpdateWithoutScholarshipInputObjectSchema } from '../internals';;
import { PlayerUncheckedUpdateWithoutScholarshipInputObjectSchema } from '../internals';;
import { PlayerCreateWithoutScholarshipInputObjectSchema } from '../internals';;
import { PlayerUncheckedCreateWithoutScholarshipInputObjectSchema } from '../internals';

export const PlayerUpsertWithoutScholarshipInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([PlayerUpdateWithoutScholarshipInputObjectSchema,
PlayerUncheckedUpdateWithoutScholarshipInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([PlayerCreateWithoutScholarshipInputObjectSchema,
PlayerUncheckedCreateWithoutScholarshipInputObjectSchema])
});
