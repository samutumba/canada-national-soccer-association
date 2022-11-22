// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadCreateWithoutInstitutionInputObjectSchema } from '../internals';;
import { SquadUncheckedCreateWithoutInstitutionInputObjectSchema } from '../internals';;
import { SquadCreateOrConnectWithoutInstitutionInputObjectSchema } from '../internals';;
import { SquadCreateManyInstitutionInputEnvelopeObjectSchema } from '../internals';;
import { SquadWhereUniqueInputObjectSchema } from '../internals';

export const SquadCreateNestedManyWithoutInstitutionInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([SquadCreateWithoutInstitutionInputObjectSchema,
Yup.array().of(SquadCreateWithoutInstitutionInputObjectSchema),
SquadUncheckedCreateWithoutInstitutionInputObjectSchema,
Yup.array().of(SquadUncheckedCreateWithoutInstitutionInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([SquadCreateOrConnectWithoutInstitutionInputObjectSchema,
Yup.array().of(SquadCreateOrConnectWithoutInstitutionInputObjectSchema)]),  createMany: SquadCreateManyInstitutionInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([SquadWhereUniqueInputObjectSchema,
Yup.array().of(SquadWhereUniqueInputObjectSchema)])
});
