// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { RecruitmentWhereUniqueInputObjectSchema } from '../internals';;
import { RecruitmentCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { RecruitmentUncheckedCreateWithoutPlayerInputObjectSchema } from '../internals';

export const RecruitmentCreateOrConnectWithoutPlayerInputObjectSchema = Yup.object({
    where: RecruitmentWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([RecruitmentCreateWithoutPlayerInputObjectSchema,
RecruitmentUncheckedCreateWithoutPlayerInputObjectSchema])
});
