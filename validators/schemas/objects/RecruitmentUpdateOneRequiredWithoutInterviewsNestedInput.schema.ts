// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { RecruitmentCreateWithoutInterviewsInputObjectSchema } from '../internals';;
import { RecruitmentUncheckedCreateWithoutInterviewsInputObjectSchema } from '../internals';;
import { RecruitmentCreateOrConnectWithoutInterviewsInputObjectSchema } from '../internals';;
import { RecruitmentUpsertWithoutInterviewsInputObjectSchema } from '../internals';;
import { RecruitmentWhereUniqueInputObjectSchema } from '../internals';;
import { RecruitmentUpdateWithoutInterviewsInputObjectSchema } from '../internals';;
import { RecruitmentUncheckedUpdateWithoutInterviewsInputObjectSchema } from '../internals';

export const RecruitmentUpdateOneRequiredWithoutInterviewsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([RecruitmentCreateWithoutInterviewsInputObjectSchema,
RecruitmentUncheckedCreateWithoutInterviewsInputObjectSchema]),  connectOrCreate: RecruitmentCreateOrConnectWithoutInterviewsInputObjectSchema,  upsert: RecruitmentUpsertWithoutInterviewsInputObjectSchema,  connect: RecruitmentWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([RecruitmentUpdateWithoutInterviewsInputObjectSchema,
RecruitmentUncheckedUpdateWithoutInterviewsInputObjectSchema])
});
