// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ScholarshipWhereUniqueInputObjectSchema } from '../internals';;
import { ScholarshipUpdateWithoutPlayerInputObjectSchema } from '../internals';;
import { ScholarshipUncheckedUpdateWithoutPlayerInputObjectSchema } from '../internals';

export const ScholarshipUpdateWithWhereUniqueWithoutPlayerInputObjectSchema = Yup.object({
    where: ScholarshipWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([ScholarshipUpdateWithoutPlayerInputObjectSchema,
ScholarshipUncheckedUpdateWithoutPlayerInputObjectSchema])
});
