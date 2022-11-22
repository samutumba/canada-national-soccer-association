// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerWhereUniqueInputObjectSchema } from '../internals';;
import { PlayerCreateWithoutRecruitmentInputObjectSchema } from '../internals';;
import { PlayerUncheckedCreateWithoutRecruitmentInputObjectSchema } from '../internals';

export const PlayerCreateOrConnectWithoutRecruitmentInputObjectSchema = Yup.object({
    where: PlayerWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([PlayerCreateWithoutRecruitmentInputObjectSchema,
PlayerUncheckedCreateWithoutRecruitmentInputObjectSchema])
});
