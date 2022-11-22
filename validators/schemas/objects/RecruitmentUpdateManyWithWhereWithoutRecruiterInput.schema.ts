// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { RecruitmentScalarWhereInputObjectSchema } from '../internals';;
import { RecruitmentUpdateManyMutationInputObjectSchema } from '../internals';;
import { RecruitmentUncheckedUpdateManyWithoutRecruitmentInputObjectSchema } from '../internals';

export const RecruitmentUpdateManyWithWhereWithoutRecruiterInputObjectSchema = Yup.object({
    where: RecruitmentScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([RecruitmentUpdateManyMutationInputObjectSchema,
RecruitmentUncheckedUpdateManyWithoutRecruitmentInputObjectSchema])
});
