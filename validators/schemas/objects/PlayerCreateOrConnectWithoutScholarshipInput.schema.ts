// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerWhereUniqueInputObjectSchema } from '../internals';;
import { PlayerCreateWithoutScholarshipInputObjectSchema } from '../internals';;
import { PlayerUncheckedCreateWithoutScholarshipInputObjectSchema } from '../internals';

export const PlayerCreateOrConnectWithoutScholarshipInputObjectSchema = Yup.object({
    where: PlayerWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([PlayerCreateWithoutScholarshipInputObjectSchema,
PlayerUncheckedCreateWithoutScholarshipInputObjectSchema])
});
