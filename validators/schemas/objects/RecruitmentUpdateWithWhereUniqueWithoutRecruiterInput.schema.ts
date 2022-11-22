// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { RecruitmentWhereUniqueInputObjectSchema } from '../internals';;
import { RecruitmentUpdateWithoutRecruiterInputObjectSchema } from '../internals';;
import { RecruitmentUncheckedUpdateWithoutRecruiterInputObjectSchema } from '../internals';

export const RecruitmentUpdateWithWhereUniqueWithoutRecruiterInputObjectSchema = Yup.object({
    where: RecruitmentWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([RecruitmentUpdateWithoutRecruiterInputObjectSchema,
RecruitmentUncheckedUpdateWithoutRecruiterInputObjectSchema])
});
