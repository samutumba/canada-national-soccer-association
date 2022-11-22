// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ScholarshipScalarWhereInputObjectSchema } from '../internals';;
import { ScholarshipUpdateManyMutationInputObjectSchema } from '../internals';;
import { ScholarshipUncheckedUpdateManyWithoutScholarshipInputObjectSchema } from '../internals';

export const ScholarshipUpdateManyWithWhereWithoutPlayerInputObjectSchema = Yup.object({
    where: ScholarshipScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([ScholarshipUpdateManyMutationInputObjectSchema,
ScholarshipUncheckedUpdateManyWithoutScholarshipInputObjectSchema])
});
