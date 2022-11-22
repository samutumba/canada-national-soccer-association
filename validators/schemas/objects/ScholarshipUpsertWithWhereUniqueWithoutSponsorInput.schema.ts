// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ScholarshipWhereUniqueInputObjectSchema } from '../internals';;
import { ScholarshipUpdateWithoutSponsorInputObjectSchema } from '../internals';;
import { ScholarshipUncheckedUpdateWithoutSponsorInputObjectSchema } from '../internals';;
import { ScholarshipCreateWithoutSponsorInputObjectSchema } from '../internals';;
import { ScholarshipUncheckedCreateWithoutSponsorInputObjectSchema } from '../internals';

export const ScholarshipUpsertWithWhereUniqueWithoutSponsorInputObjectSchema = Yup.object({
    where: ScholarshipWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([ScholarshipUpdateWithoutSponsorInputObjectSchema,
ScholarshipUncheckedUpdateWithoutSponsorInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([ScholarshipCreateWithoutSponsorInputObjectSchema,
ScholarshipUncheckedCreateWithoutSponsorInputObjectSchema])
});
