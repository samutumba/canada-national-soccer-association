// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ScholarshipWhereUniqueInputObjectSchema } from '../internals';;
import { ScholarshipCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { ScholarshipUncheckedCreateWithoutPlayerInputObjectSchema } from '../internals';

export const ScholarshipCreateOrConnectWithoutPlayerInputObjectSchema = Yup.object({
    where: ScholarshipWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([ScholarshipCreateWithoutPlayerInputObjectSchema,
ScholarshipUncheckedCreateWithoutPlayerInputObjectSchema])
});
