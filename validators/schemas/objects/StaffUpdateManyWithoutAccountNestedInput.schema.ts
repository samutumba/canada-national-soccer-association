// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StaffCreateWithoutAccountInputObjectSchema } from '../internals';;
import { StaffUncheckedCreateWithoutAccountInputObjectSchema } from '../internals';;
import { StaffCreateOrConnectWithoutAccountInputObjectSchema } from '../internals';;
import { StaffUpsertWithWhereUniqueWithoutAccountInputObjectSchema } from '../internals';;
import { StaffCreateManyAccountInputEnvelopeObjectSchema } from '../internals';;
import { StaffWhereUniqueInputObjectSchema } from '../internals';;
import { StaffUpdateWithWhereUniqueWithoutAccountInputObjectSchema } from '../internals';;
import { StaffUpdateManyWithWhereWithoutAccountInputObjectSchema } from '../internals';;
import { StaffScalarWhereInputObjectSchema } from '../internals';

export const StaffUpdateManyWithoutAccountNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([StaffCreateWithoutAccountInputObjectSchema,
Yup.array().of(StaffCreateWithoutAccountInputObjectSchema),
StaffUncheckedCreateWithoutAccountInputObjectSchema,
Yup.array().of(StaffUncheckedCreateWithoutAccountInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([StaffCreateOrConnectWithoutAccountInputObjectSchema,
Yup.array().of(StaffCreateOrConnectWithoutAccountInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([StaffUpsertWithWhereUniqueWithoutAccountInputObjectSchema,
Yup.array().of(StaffUpsertWithWhereUniqueWithoutAccountInputObjectSchema)]),  createMany: StaffCreateManyAccountInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([StaffWhereUniqueInputObjectSchema,
Yup.array().of(StaffWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([StaffWhereUniqueInputObjectSchema,
Yup.array().of(StaffWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([StaffWhereUniqueInputObjectSchema,
Yup.array().of(StaffWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([StaffWhereUniqueInputObjectSchema,
Yup.array().of(StaffWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([StaffUpdateWithWhereUniqueWithoutAccountInputObjectSchema,
Yup.array().of(StaffUpdateWithWhereUniqueWithoutAccountInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([StaffUpdateManyWithWhereWithoutAccountInputObjectSchema,
Yup.array().of(StaffUpdateManyWithWhereWithoutAccountInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([StaffScalarWhereInputObjectSchema,
Yup.array().of(StaffScalarWhereInputObjectSchema)])
});
