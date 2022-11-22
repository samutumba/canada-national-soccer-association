// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { RecruitmentWhereUniqueInputObjectSchema } from '../internals';;
import { RecruitmentUpdateWithoutPlayerInputObjectSchema } from '../internals';;
import { RecruitmentUncheckedUpdateWithoutPlayerInputObjectSchema } from '../internals';;
import { RecruitmentCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { RecruitmentUncheckedCreateWithoutPlayerInputObjectSchema } from '../internals';

export const RecruitmentUpsertWithWhereUniqueWithoutPlayerInputObjectSchema = Yup.object({
    where: RecruitmentWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([RecruitmentUpdateWithoutPlayerInputObjectSchema,
RecruitmentUncheckedUpdateWithoutPlayerInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([RecruitmentCreateWithoutPlayerInputObjectSchema,
RecruitmentUncheckedCreateWithoutPlayerInputObjectSchema])
});
