// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameCreateWithoutCompetitionInputObjectSchema } from '../internals';;
import { GameUncheckedCreateWithoutCompetitionInputObjectSchema } from '../internals';;
import { GameCreateOrConnectWithoutCompetitionInputObjectSchema } from '../internals';;
import { GameUpsertWithWhereUniqueWithoutCompetitionInputObjectSchema } from '../internals';;
import { GameCreateManyCompetitionInputEnvelopeObjectSchema } from '../internals';;
import { GameWhereUniqueInputObjectSchema } from '../internals';;
import { GameUpdateWithWhereUniqueWithoutCompetitionInputObjectSchema } from '../internals';;
import { GameUpdateManyWithWhereWithoutCompetitionInputObjectSchema } from '../internals';;
import { GameScalarWhereInputObjectSchema } from '../internals';

export const GameUpdateManyWithoutCompetitionNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([GameCreateWithoutCompetitionInputObjectSchema,
Yup.array().of(GameCreateWithoutCompetitionInputObjectSchema),
GameUncheckedCreateWithoutCompetitionInputObjectSchema,
Yup.array().of(GameUncheckedCreateWithoutCompetitionInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([GameCreateOrConnectWithoutCompetitionInputObjectSchema,
Yup.array().of(GameCreateOrConnectWithoutCompetitionInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([GameUpsertWithWhereUniqueWithoutCompetitionInputObjectSchema,
Yup.array().of(GameUpsertWithWhereUniqueWithoutCompetitionInputObjectSchema)]),  createMany: GameCreateManyCompetitionInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([GameWhereUniqueInputObjectSchema,
Yup.array().of(GameWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([GameWhereUniqueInputObjectSchema,
Yup.array().of(GameWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([GameWhereUniqueInputObjectSchema,
Yup.array().of(GameWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([GameWhereUniqueInputObjectSchema,
Yup.array().of(GameWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([GameUpdateWithWhereUniqueWithoutCompetitionInputObjectSchema,
Yup.array().of(GameUpdateWithWhereUniqueWithoutCompetitionInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([GameUpdateManyWithWhereWithoutCompetitionInputObjectSchema,
Yup.array().of(GameUpdateManyWithWhereWithoutCompetitionInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([GameScalarWhereInputObjectSchema,
Yup.array().of(GameScalarWhereInputObjectSchema)])
});
