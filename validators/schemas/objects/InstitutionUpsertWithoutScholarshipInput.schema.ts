// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InstitutionUpdateWithoutScholarshipInputObjectSchema } from '../internals';;
import { InstitutionUncheckedUpdateWithoutScholarshipInputObjectSchema } from '../internals';;
import { InstitutionCreateWithoutScholarshipInputObjectSchema } from '../internals';;
import { InstitutionUncheckedCreateWithoutScholarshipInputObjectSchema } from '../internals';

export const InstitutionUpsertWithoutScholarshipInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([InstitutionUpdateWithoutScholarshipInputObjectSchema,
InstitutionUncheckedUpdateWithoutScholarshipInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([InstitutionCreateWithoutScholarshipInputObjectSchema,
InstitutionUncheckedCreateWithoutScholarshipInputObjectSchema])
});
