// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadCreateWithoutInstitutionInputObjectSchema } from '../internals';;
import { SquadUncheckedCreateWithoutInstitutionInputObjectSchema } from '../internals';;
import { SquadCreateOrConnectWithoutInstitutionInputObjectSchema } from '../internals';;
import { SquadUpsertWithWhereUniqueWithoutInstitutionInputObjectSchema } from '../internals';;
import { SquadCreateManyInstitutionInputEnvelopeObjectSchema } from '../internals';;
import { SquadWhereUniqueInputObjectSchema } from '../internals';;
import { SquadUpdateWithWhereUniqueWithoutInstitutionInputObjectSchema } from '../internals';;
import { SquadUpdateManyWithWhereWithoutInstitutionInputObjectSchema } from '../internals';;
import { SquadScalarWhereInputObjectSchema } from '../internals';

export const SquadUpdateManyWithoutInstitutionNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([SquadCreateWithoutInstitutionInputObjectSchema,
Yup.array().of(SquadCreateWithoutInstitutionInputObjectSchema),
SquadUncheckedCreateWithoutInstitutionInputObjectSchema,
Yup.array().of(SquadUncheckedCreateWithoutInstitutionInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([SquadCreateOrConnectWithoutInstitutionInputObjectSchema,
Yup.array().of(SquadCreateOrConnectWithoutInstitutionInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([SquadUpsertWithWhereUniqueWithoutInstitutionInputObjectSchema,
Yup.array().of(SquadUpsertWithWhereUniqueWithoutInstitutionInputObjectSchema)]),  createMany: SquadCreateManyInstitutionInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([SquadWhereUniqueInputObjectSchema,
Yup.array().of(SquadWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([SquadWhereUniqueInputObjectSchema,
Yup.array().of(SquadWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([SquadWhereUniqueInputObjectSchema,
Yup.array().of(SquadWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([SquadWhereUniqueInputObjectSchema,
Yup.array().of(SquadWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([SquadUpdateWithWhereUniqueWithoutInstitutionInputObjectSchema,
Yup.array().of(SquadUpdateWithWhereUniqueWithoutInstitutionInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([SquadUpdateManyWithWhereWithoutInstitutionInputObjectSchema,
Yup.array().of(SquadUpdateManyWithWhereWithoutInstitutionInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([SquadScalarWhereInputObjectSchema,
Yup.array().of(SquadScalarWhereInputObjectSchema)])
});
