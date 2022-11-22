// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AccountCreateWithoutRecruitmentInputObjectSchema } from '../internals';;
import { AccountUncheckedCreateWithoutRecruitmentInputObjectSchema } from '../internals';;
import { AccountCreateOrConnectWithoutRecruitmentInputObjectSchema } from '../internals';;
import { AccountUpsertWithoutRecruitmentInputObjectSchema } from '../internals';;
import { AccountWhereUniqueInputObjectSchema } from '../internals';;
import { AccountUpdateWithoutRecruitmentInputObjectSchema } from '../internals';;
import { AccountUncheckedUpdateWithoutRecruitmentInputObjectSchema } from '../internals';

export const AccountUpdateOneRequiredWithoutRecruitmentNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([AccountCreateWithoutRecruitmentInputObjectSchema,
AccountUncheckedCreateWithoutRecruitmentInputObjectSchema]),  connectOrCreate: AccountCreateOrConnectWithoutRecruitmentInputObjectSchema,  upsert: AccountUpsertWithoutRecruitmentInputObjectSchema,  connect: AccountWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([AccountUpdateWithoutRecruitmentInputObjectSchema,
AccountUncheckedUpdateWithoutRecruitmentInputObjectSchema])
});
