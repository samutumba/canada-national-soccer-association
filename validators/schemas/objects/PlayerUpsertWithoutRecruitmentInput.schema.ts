// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerUpdateWithoutRecruitmentInputObjectSchema } from '../internals';;
import { PlayerUncheckedUpdateWithoutRecruitmentInputObjectSchema } from '../internals';;
import { PlayerCreateWithoutRecruitmentInputObjectSchema } from '../internals';;
import { PlayerUncheckedCreateWithoutRecruitmentInputObjectSchema } from '../internals';

export const PlayerUpsertWithoutRecruitmentInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([PlayerUpdateWithoutRecruitmentInputObjectSchema,
PlayerUncheckedUpdateWithoutRecruitmentInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([PlayerCreateWithoutRecruitmentInputObjectSchema,
PlayerUncheckedCreateWithoutRecruitmentInputObjectSchema])
});
