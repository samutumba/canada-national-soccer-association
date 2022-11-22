// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { HeathRecordCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { HeathRecordUncheckedCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { HeathRecordCreateOrConnectWithoutPlayerInputObjectSchema } from '../internals';;
import { HeathRecordWhereUniqueInputObjectSchema } from '../internals';

export const HeathRecordCreateNestedOneWithoutPlayerInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([HeathRecordCreateWithoutPlayerInputObjectSchema,
HeathRecordUncheckedCreateWithoutPlayerInputObjectSchema]),  connectOrCreate: HeathRecordCreateOrConnectWithoutPlayerInputObjectSchema,  connect: HeathRecordWhereUniqueInputObjectSchema
});
