// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AccountCreateWithoutStaffInputObjectSchema } from '../internals';;
import { AccountUncheckedCreateWithoutStaffInputObjectSchema } from '../internals';;
import { AccountCreateOrConnectWithoutStaffInputObjectSchema } from '../internals';;
import { AccountUpsertWithoutStaffInputObjectSchema } from '../internals';;
import { AccountWhereUniqueInputObjectSchema } from '../internals';;
import { AccountUpdateWithoutStaffInputObjectSchema } from '../internals';;
import { AccountUncheckedUpdateWithoutStaffInputObjectSchema } from '../internals';

export const AccountUpdateOneWithoutStaffNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([AccountCreateWithoutStaffInputObjectSchema,
AccountUncheckedCreateWithoutStaffInputObjectSchema]),  connectOrCreate: AccountCreateOrConnectWithoutStaffInputObjectSchema,  upsert: AccountUpsertWithoutStaffInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: AccountWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([AccountUpdateWithoutStaffInputObjectSchema,
AccountUncheckedUpdateWithoutStaffInputObjectSchema])
});
