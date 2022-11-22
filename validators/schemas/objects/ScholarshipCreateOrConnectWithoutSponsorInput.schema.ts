// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ScholarshipWhereUniqueInputObjectSchema } from '../internals';;
import { ScholarshipCreateWithoutSponsorInputObjectSchema } from '../internals';;
import { ScholarshipUncheckedCreateWithoutSponsorInputObjectSchema } from '../internals';

export const ScholarshipCreateOrConnectWithoutSponsorInputObjectSchema = Yup.object({
    where: ScholarshipWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([ScholarshipCreateWithoutSponsorInputObjectSchema,
ScholarshipUncheckedCreateWithoutSponsorInputObjectSchema])
});
