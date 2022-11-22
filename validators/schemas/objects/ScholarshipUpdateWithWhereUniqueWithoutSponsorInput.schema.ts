// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ScholarshipWhereUniqueInputObjectSchema } from '../internals';;
import { ScholarshipUpdateWithoutSponsorInputObjectSchema } from '../internals';;
import { ScholarshipUncheckedUpdateWithoutSponsorInputObjectSchema } from '../internals';

export const ScholarshipUpdateWithWhereUniqueWithoutSponsorInputObjectSchema = Yup.object({
    where: ScholarshipWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([ScholarshipUpdateWithoutSponsorInputObjectSchema,
ScholarshipUncheckedUpdateWithoutSponsorInputObjectSchema])
});
