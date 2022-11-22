// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { HeathRecordUpdateWithoutPlayerInputObjectSchema } from '../internals';;
import { HeathRecordUncheckedUpdateWithoutPlayerInputObjectSchema } from '../internals';;
import { HeathRecordCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { HeathRecordUncheckedCreateWithoutPlayerInputObjectSchema } from '../internals';

export const HeathRecordUpsertWithoutPlayerInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([HeathRecordUpdateWithoutPlayerInputObjectSchema,
HeathRecordUncheckedUpdateWithoutPlayerInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([HeathRecordCreateWithoutPlayerInputObjectSchema,
HeathRecordUncheckedCreateWithoutPlayerInputObjectSchema])
});
