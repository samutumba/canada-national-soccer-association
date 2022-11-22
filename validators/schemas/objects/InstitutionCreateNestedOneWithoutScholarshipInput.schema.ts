// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InstitutionCreateWithoutScholarshipInputObjectSchema } from '../internals';;
import { InstitutionUncheckedCreateWithoutScholarshipInputObjectSchema } from '../internals';;
import { InstitutionCreateOrConnectWithoutScholarshipInputObjectSchema } from '../internals';;
import { InstitutionWhereUniqueInputObjectSchema } from '../internals';

export const InstitutionCreateNestedOneWithoutScholarshipInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([InstitutionCreateWithoutScholarshipInputObjectSchema,
InstitutionUncheckedCreateWithoutScholarshipInputObjectSchema]),  connectOrCreate: InstitutionCreateOrConnectWithoutScholarshipInputObjectSchema,  connect: InstitutionWhereUniqueInputObjectSchema
});
