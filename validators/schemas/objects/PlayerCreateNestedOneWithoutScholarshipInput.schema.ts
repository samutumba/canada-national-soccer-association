// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerCreateWithoutScholarshipInputObjectSchema } from '../internals';;
import { PlayerUncheckedCreateWithoutScholarshipInputObjectSchema } from '../internals';;
import { PlayerCreateOrConnectWithoutScholarshipInputObjectSchema } from '../internals';;
import { PlayerWhereUniqueInputObjectSchema } from '../internals';

export const PlayerCreateNestedOneWithoutScholarshipInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PlayerCreateWithoutScholarshipInputObjectSchema,
PlayerUncheckedCreateWithoutScholarshipInputObjectSchema]),  connectOrCreate: PlayerCreateOrConnectWithoutScholarshipInputObjectSchema,  connect: PlayerWhereUniqueInputObjectSchema
});
