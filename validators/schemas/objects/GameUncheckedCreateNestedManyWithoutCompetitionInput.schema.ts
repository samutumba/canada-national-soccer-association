// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameCreateWithoutCompetitionInputObjectSchema } from '../internals';;
import { GameUncheckedCreateWithoutCompetitionInputObjectSchema } from '../internals';;
import { GameCreateOrConnectWithoutCompetitionInputObjectSchema } from '../internals';;
import { GameCreateManyCompetitionInputEnvelopeObjectSchema } from '../internals';;
import { GameWhereUniqueInputObjectSchema } from '../internals';

export const GameUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([GameCreateWithoutCompetitionInputObjectSchema,
Yup.array().of(GameCreateWithoutCompetitionInputObjectSchema),
GameUncheckedCreateWithoutCompetitionInputObjectSchema,
Yup.array().of(GameUncheckedCreateWithoutCompetitionInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([GameCreateOrConnectWithoutCompetitionInputObjectSchema,
Yup.array().of(GameCreateOrConnectWithoutCompetitionInputObjectSchema)]),  createMany: GameCreateManyCompetitionInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([GameWhereUniqueInputObjectSchema,
Yup.array().of(GameWhereUniqueInputObjectSchema)])
});
