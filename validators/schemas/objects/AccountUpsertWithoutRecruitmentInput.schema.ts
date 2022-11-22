// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AccountUpdateWithoutRecruitmentInputObjectSchema } from '../internals';;
import { AccountUncheckedUpdateWithoutRecruitmentInputObjectSchema } from '../internals';;
import { AccountCreateWithoutRecruitmentInputObjectSchema } from '../internals';;
import { AccountUncheckedCreateWithoutRecruitmentInputObjectSchema } from '../internals';

export const AccountUpsertWithoutRecruitmentInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([AccountUpdateWithoutRecruitmentInputObjectSchema,
AccountUncheckedUpdateWithoutRecruitmentInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([AccountCreateWithoutRecruitmentInputObjectSchema,
AccountUncheckedCreateWithoutRecruitmentInputObjectSchema])
});
