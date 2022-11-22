// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InstitutionCreateWithoutScholarshipInputObjectSchema } from '../internals';;
import { InstitutionUncheckedCreateWithoutScholarshipInputObjectSchema } from '../internals';;
import { InstitutionCreateOrConnectWithoutScholarshipInputObjectSchema } from '../internals';;
import { InstitutionUpsertWithoutScholarshipInputObjectSchema } from '../internals';;
import { InstitutionWhereUniqueInputObjectSchema } from '../internals';;
import { InstitutionUpdateWithoutScholarshipInputObjectSchema } from '../internals';;
import { InstitutionUncheckedUpdateWithoutScholarshipInputObjectSchema } from '../internals';

export const InstitutionUpdateOneRequiredWithoutScholarshipNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([InstitutionCreateWithoutScholarshipInputObjectSchema,
InstitutionUncheckedCreateWithoutScholarshipInputObjectSchema]),  connectOrCreate: InstitutionCreateOrConnectWithoutScholarshipInputObjectSchema,  upsert: InstitutionUpsertWithoutScholarshipInputObjectSchema,  connect: InstitutionWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([InstitutionUpdateWithoutScholarshipInputObjectSchema,
InstitutionUncheckedUpdateWithoutScholarshipInputObjectSchema])
});
