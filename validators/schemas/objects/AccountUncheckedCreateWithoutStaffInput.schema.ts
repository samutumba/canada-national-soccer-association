// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { RecruitmentUncheckedCreateNestedManyWithoutRecruiterInputObjectSchema } from '../internals';

export const AccountUncheckedCreateWithoutStaffInputObjectSchema = Yup.object({
    id: Yup.string(),  username: Yup.string().required(),  password: Yup.string().required(),  updatedAt: Yup.date(),  createdAt: Yup.date(),  recruitment: RecruitmentUncheckedCreateNestedManyWithoutRecruiterInputObjectSchema
});
