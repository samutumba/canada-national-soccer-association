// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { RecruitmentWhereUniqueInputObjectSchema } from '../internals';;
import { RecruitmentCreateWithoutRecruiterInputObjectSchema } from '../internals';;
import { RecruitmentUncheckedCreateWithoutRecruiterInputObjectSchema } from '../internals';

export const RecruitmentCreateOrConnectWithoutRecruiterInputObjectSchema = Yup.object({
    where: RecruitmentWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([RecruitmentCreateWithoutRecruiterInputObjectSchema,
RecruitmentUncheckedCreateWithoutRecruiterInputObjectSchema])
});
