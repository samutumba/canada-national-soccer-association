// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerCreateWithoutScholarshipInputObjectSchema } from '../internals';;
import { PlayerUncheckedCreateWithoutScholarshipInputObjectSchema } from '../internals';;
import { PlayerCreateOrConnectWithoutScholarshipInputObjectSchema } from '../internals';;
import { PlayerUpsertWithoutScholarshipInputObjectSchema } from '../internals';;
import { PlayerWhereUniqueInputObjectSchema } from '../internals';;
import { PlayerUpdateWithoutScholarshipInputObjectSchema } from '../internals';;
import { PlayerUncheckedUpdateWithoutScholarshipInputObjectSchema } from '../internals';

export const PlayerUpdateOneRequiredWithoutScholarshipNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PlayerCreateWithoutScholarshipInputObjectSchema,
PlayerUncheckedCreateWithoutScholarshipInputObjectSchema]),  connectOrCreate: PlayerCreateOrConnectWithoutScholarshipInputObjectSchema,  upsert: PlayerUpsertWithoutScholarshipInputObjectSchema,  connect: PlayerWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([PlayerUpdateWithoutScholarshipInputObjectSchema,
PlayerUncheckedUpdateWithoutScholarshipInputObjectSchema])
});
