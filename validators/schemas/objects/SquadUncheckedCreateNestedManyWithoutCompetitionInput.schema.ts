// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadCreateWithoutCompetitionInputObjectSchema } from '../internals';;
import { SquadUncheckedCreateWithoutCompetitionInputObjectSchema } from '../internals';;
import { SquadCreateOrConnectWithoutCompetitionInputObjectSchema } from '../internals';;
import { SquadWhereUniqueInputObjectSchema } from '../internals';

export const SquadUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([SquadCreateWithoutCompetitionInputObjectSchema,
Yup.array().of(SquadCreateWithoutCompetitionInputObjectSchema),
SquadUncheckedCreateWithoutCompetitionInputObjectSchema,
Yup.array().of(SquadUncheckedCreateWithoutCompetitionInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([SquadCreateOrConnectWithoutCompetitionInputObjectSchema,
Yup.array().of(SquadCreateOrConnectWithoutCompetitionInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([SquadWhereUniqueInputObjectSchema,
Yup.array().of(SquadWhereUniqueInputObjectSchema)])
});
