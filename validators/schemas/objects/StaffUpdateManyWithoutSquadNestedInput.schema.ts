// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StaffCreateWithoutSquadInputObjectSchema } from '../internals';;
import { StaffUncheckedCreateWithoutSquadInputObjectSchema } from '../internals';;
import { StaffCreateOrConnectWithoutSquadInputObjectSchema } from '../internals';;
import { StaffUpsertWithWhereUniqueWithoutSquadInputObjectSchema } from '../internals';;
import { StaffWhereUniqueInputObjectSchema } from '../internals';;
import { StaffUpdateWithWhereUniqueWithoutSquadInputObjectSchema } from '../internals';;
import { StaffUpdateManyWithWhereWithoutSquadInputObjectSchema } from '../internals';;
import { StaffScalarWhereInputObjectSchema } from '../internals';

export const StaffUpdateManyWithoutSquadNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([StaffCreateWithoutSquadInputObjectSchema,
Yup.array().of(StaffCreateWithoutSquadInputObjectSchema),
StaffUncheckedCreateWithoutSquadInputObjectSchema,
Yup.array().of(StaffUncheckedCreateWithoutSquadInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([StaffCreateOrConnectWithoutSquadInputObjectSchema,
Yup.array().of(StaffCreateOrConnectWithoutSquadInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([StaffUpsertWithWhereUniqueWithoutSquadInputObjectSchema,
Yup.array().of(StaffUpsertWithWhereUniqueWithoutSquadInputObjectSchema)]),  set: Yup.mixed().oneOfSchemas([StaffWhereUniqueInputObjectSchema,
Yup.array().of(StaffWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([StaffWhereUniqueInputObjectSchema,
Yup.array().of(StaffWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([StaffWhereUniqueInputObjectSchema,
Yup.array().of(StaffWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([StaffWhereUniqueInputObjectSchema,
Yup.array().of(StaffWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([StaffUpdateWithWhereUniqueWithoutSquadInputObjectSchema,
Yup.array().of(StaffUpdateWithWhereUniqueWithoutSquadInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([StaffUpdateManyWithWhereWithoutSquadInputObjectSchema,
Yup.array().of(StaffUpdateManyWithWhereWithoutSquadInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([StaffScalarWhereInputObjectSchema,
Yup.array().of(StaffScalarWhereInputObjectSchema)])
});
