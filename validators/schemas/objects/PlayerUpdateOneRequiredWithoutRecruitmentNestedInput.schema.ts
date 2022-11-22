// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerCreateWithoutRecruitmentInputObjectSchema } from '../internals';;
import { PlayerUncheckedCreateWithoutRecruitmentInputObjectSchema } from '../internals';;
import { PlayerCreateOrConnectWithoutRecruitmentInputObjectSchema } from '../internals';;
import { PlayerUpsertWithoutRecruitmentInputObjectSchema } from '../internals';;
import { PlayerWhereUniqueInputObjectSchema } from '../internals';;
import { PlayerUpdateWithoutRecruitmentInputObjectSchema } from '../internals';;
import { PlayerUncheckedUpdateWithoutRecruitmentInputObjectSchema } from '../internals';

export const PlayerUpdateOneRequiredWithoutRecruitmentNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PlayerCreateWithoutRecruitmentInputObjectSchema,
PlayerUncheckedCreateWithoutRecruitmentInputObjectSchema]),  connectOrCreate: PlayerCreateOrConnectWithoutRecruitmentInputObjectSchema,  upsert: PlayerUpsertWithoutRecruitmentInputObjectSchema,  connect: PlayerWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([PlayerUpdateWithoutRecruitmentInputObjectSchema,
PlayerUncheckedUpdateWithoutRecruitmentInputObjectSchema])
});
