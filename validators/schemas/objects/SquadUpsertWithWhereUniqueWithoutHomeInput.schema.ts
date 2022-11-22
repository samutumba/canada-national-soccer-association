// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadWhereUniqueInputObjectSchema } from '../internals';;
import { SquadUpdateWithoutHomeInputObjectSchema } from '../internals';;
import { SquadUncheckedUpdateWithoutHomeInputObjectSchema } from '../internals';;
import { SquadCreateWithoutHomeInputObjectSchema } from '../internals';;
import { SquadUncheckedCreateWithoutHomeInputObjectSchema } from '../internals';

export const SquadUpsertWithWhereUniqueWithoutHomeInputObjectSchema = Yup.object({
    where: SquadWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([SquadUpdateWithoutHomeInputObjectSchema,
SquadUncheckedUpdateWithoutHomeInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([SquadCreateWithoutHomeInputObjectSchema,
SquadUncheckedCreateWithoutHomeInputObjectSchema])
});
