// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ScholarshipWhereUniqueInputObjectSchema } from '../internals';;
import { ScholarshipUpdateWithoutPlayerInputObjectSchema } from '../internals';;
import { ScholarshipUncheckedUpdateWithoutPlayerInputObjectSchema } from '../internals';;
import { ScholarshipCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { ScholarshipUncheckedCreateWithoutPlayerInputObjectSchema } from '../internals';

export const ScholarshipUpsertWithWhereUniqueWithoutPlayerInputObjectSchema = Yup.object({
    where: ScholarshipWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([ScholarshipUpdateWithoutPlayerInputObjectSchema,
ScholarshipUncheckedUpdateWithoutPlayerInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([ScholarshipCreateWithoutPlayerInputObjectSchema,
ScholarshipUncheckedCreateWithoutPlayerInputObjectSchema])
});
