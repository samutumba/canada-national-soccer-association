// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StaffCreateWithoutAccountInputObjectSchema } from '../internals';;
import { StaffUncheckedCreateWithoutAccountInputObjectSchema } from '../internals';;
import { StaffCreateOrConnectWithoutAccountInputObjectSchema } from '../internals';;
import { StaffCreateManyAccountInputEnvelopeObjectSchema } from '../internals';;
import { StaffWhereUniqueInputObjectSchema } from '../internals';

export const StaffCreateNestedManyWithoutAccountInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([StaffCreateWithoutAccountInputObjectSchema,
Yup.array().of(StaffCreateWithoutAccountInputObjectSchema),
StaffUncheckedCreateWithoutAccountInputObjectSchema,
Yup.array().of(StaffUncheckedCreateWithoutAccountInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([StaffCreateOrConnectWithoutAccountInputObjectSchema,
Yup.array().of(StaffCreateOrConnectWithoutAccountInputObjectSchema)]),  createMany: StaffCreateManyAccountInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([StaffWhereUniqueInputObjectSchema,
Yup.array().of(StaffWhereUniqueInputObjectSchema)])
});
