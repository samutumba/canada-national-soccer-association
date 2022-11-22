// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerCreateWithoutRecruitmentInputObjectSchema } from '../internals';;
import { PlayerUncheckedCreateWithoutRecruitmentInputObjectSchema } from '../internals';;
import { PlayerCreateOrConnectWithoutRecruitmentInputObjectSchema } from '../internals';;
import { PlayerWhereUniqueInputObjectSchema } from '../internals';

export const PlayerCreateNestedOneWithoutRecruitmentInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PlayerCreateWithoutRecruitmentInputObjectSchema,
PlayerUncheckedCreateWithoutRecruitmentInputObjectSchema]),  connectOrCreate: PlayerCreateOrConnectWithoutRecruitmentInputObjectSchema,  connect: PlayerWhereUniqueInputObjectSchema
});
