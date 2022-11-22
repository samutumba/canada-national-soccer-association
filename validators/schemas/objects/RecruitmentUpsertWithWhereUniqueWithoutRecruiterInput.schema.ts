// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { RecruitmentWhereUniqueInputObjectSchema } from '../internals';;
import { RecruitmentUpdateWithoutRecruiterInputObjectSchema } from '../internals';;
import { RecruitmentUncheckedUpdateWithoutRecruiterInputObjectSchema } from '../internals';;
import { RecruitmentCreateWithoutRecruiterInputObjectSchema } from '../internals';;
import { RecruitmentUncheckedCreateWithoutRecruiterInputObjectSchema } from '../internals';

export const RecruitmentUpsertWithWhereUniqueWithoutRecruiterInputObjectSchema = Yup.object({
    where: RecruitmentWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([RecruitmentUpdateWithoutRecruiterInputObjectSchema,
RecruitmentUncheckedUpdateWithoutRecruiterInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([RecruitmentCreateWithoutRecruiterInputObjectSchema,
RecruitmentUncheckedCreateWithoutRecruiterInputObjectSchema])
});
