// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerWhereUniqueInputObjectSchema } from '../internals';;
import { PlayerCreateWithoutHealthRecordInputObjectSchema } from '../internals';;
import { PlayerUncheckedCreateWithoutHealthRecordInputObjectSchema } from '../internals';

export const PlayerCreateOrConnectWithoutHealthRecordInputObjectSchema = Yup.object({
    where: PlayerWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([PlayerCreateWithoutHealthRecordInputObjectSchema,
PlayerUncheckedCreateWithoutHealthRecordInputObjectSchema])
});
