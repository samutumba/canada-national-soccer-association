// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerCreateWithoutHealthRecordInputObjectSchema } from '../internals';;
import { PlayerUncheckedCreateWithoutHealthRecordInputObjectSchema } from '../internals';;
import { PlayerCreateOrConnectWithoutHealthRecordInputObjectSchema } from '../internals';;
import { PlayerWhereUniqueInputObjectSchema } from '../internals';

export const PlayerUncheckedCreateNestedOneWithoutHealthRecordInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PlayerCreateWithoutHealthRecordInputObjectSchema,
PlayerUncheckedCreateWithoutHealthRecordInputObjectSchema]),  connectOrCreate: PlayerCreateOrConnectWithoutHealthRecordInputObjectSchema,  connect: PlayerWhereUniqueInputObjectSchema
});
