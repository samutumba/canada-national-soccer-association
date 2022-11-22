import * as Yup from 'yup';

export const SquadScalarFieldEnumSchema = Yup.mixed().oneOf(["id","name","institutionId","homeColor","awayColor","locationId"])