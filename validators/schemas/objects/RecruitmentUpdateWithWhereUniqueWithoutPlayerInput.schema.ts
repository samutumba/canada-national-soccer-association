// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { RecruitmentWhereUniqueInputObjectSchema } from '../internals';;
import { RecruitmentUpdateWithoutPlayerInputObjectSchema } from '../internals';;
import { RecruitmentUncheckedUpdateWithoutPlayerInputObjectSchema } from '../internals';

export const RecruitmentUpdateWithWhereUniqueWithoutPlayerInputObjectSchema = Yup.object({
    where: RecruitmentWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([RecruitmentUpdateWithoutPlayerInputObjectSchema,
RecruitmentUncheckedUpdateWithoutPlayerInputObjectSchema])
});
