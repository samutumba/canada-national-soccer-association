// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { HeathRecordCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { HeathRecordUncheckedCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { HeathRecordCreateOrConnectWithoutPlayerInputObjectSchema } from '../internals';;
import { HeathRecordUpsertWithoutPlayerInputObjectSchema } from '../internals';;
import { HeathRecordWhereUniqueInputObjectSchema } from '../internals';;
import { HeathRecordUpdateWithoutPlayerInputObjectSchema } from '../internals';;
import { HeathRecordUncheckedUpdateWithoutPlayerInputObjectSchema } from '../internals';

export const HeathRecordUpdateOneWithoutPlayerNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([HeathRecordCreateWithoutPlayerInputObjectSchema,
HeathRecordUncheckedCreateWithoutPlayerInputObjectSchema]),  connectOrCreate: HeathRecordCreateOrConnectWithoutPlayerInputObjectSchema,  upsert: HeathRecordUpsertWithoutPlayerInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: HeathRecordWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([HeathRecordUpdateWithoutPlayerInputObjectSchema,
HeathRecordUncheckedUpdateWithoutPlayerInputObjectSchema])
});
