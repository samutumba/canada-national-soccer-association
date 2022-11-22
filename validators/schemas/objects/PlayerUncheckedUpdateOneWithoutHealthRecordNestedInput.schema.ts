// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerCreateWithoutHealthRecordInputObjectSchema } from '../internals';;
import { PlayerUncheckedCreateWithoutHealthRecordInputObjectSchema } from '../internals';;
import { PlayerCreateOrConnectWithoutHealthRecordInputObjectSchema } from '../internals';;
import { PlayerUpsertWithoutHealthRecordInputObjectSchema } from '../internals';;
import { PlayerWhereUniqueInputObjectSchema } from '../internals';;
import { PlayerUpdateWithoutHealthRecordInputObjectSchema } from '../internals';;
import { PlayerUncheckedUpdateWithoutHealthRecordInputObjectSchema } from '../internals';

export const PlayerUncheckedUpdateOneWithoutHealthRecordNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PlayerCreateWithoutHealthRecordInputObjectSchema,
PlayerUncheckedCreateWithoutHealthRecordInputObjectSchema]),  connectOrCreate: PlayerCreateOrConnectWithoutHealthRecordInputObjectSchema,  upsert: PlayerUpsertWithoutHealthRecordInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: PlayerWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([PlayerUpdateWithoutHealthRecordInputObjectSchema,
PlayerUncheckedUpdateWithoutHealthRecordInputObjectSchema])
});
