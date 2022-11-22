import * as Yup from 'yup';

export const TeamScalarFieldEnumSchema = Yup.mixed().oneOf(["id","formation","shirtColor","squadId","gameId"])