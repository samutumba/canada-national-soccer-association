// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InstitutionWhereUniqueInputObjectSchema } from '../internals';;
import { InstitutionCreateWithoutScholarshipInputObjectSchema } from '../internals';;
import { InstitutionUncheckedCreateWithoutScholarshipInputObjectSchema } from '../internals';

export const InstitutionCreateOrConnectWithoutScholarshipInputObjectSchema = Yup.object({
    where: InstitutionWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([InstitutionCreateWithoutScholarshipInputObjectSchema,
InstitutionUncheckedCreateWithoutScholarshipInputObjectSchema])
});
