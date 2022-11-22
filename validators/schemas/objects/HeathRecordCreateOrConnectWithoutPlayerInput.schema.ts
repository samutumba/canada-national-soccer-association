// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { HeathRecordWhereUniqueInputObjectSchema } from '../internals';;
import { HeathRecordCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { HeathRecordUncheckedCreateWithoutPlayerInputObjectSchema } from '../internals';

export const HeathRecordCreateOrConnectWithoutPlayerInputObjectSchema = Yup.object({
    where: HeathRecordWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([HeathRecordCreateWithoutPlayerInputObjectSchema,
HeathRecordUncheckedCreateWithoutPlayerInputObjectSchema])
});
