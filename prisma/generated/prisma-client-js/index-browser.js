
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.7.0
 * Query Engine version: 39190b250ebc338586e25e6da45e5e783bc8a635
 */
Prisma.prismaVersion = {
  client: "4.7.0",
  engine: "39190b250ebc338586e25e6da45e5e783bc8a635"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AccountScalarFieldEnum = makeEnum({
  id: 'id',
  username: 'username',
  password: 'password',
  updatedAt: 'updatedAt',
  createdAt: 'createdAt'
});

exports.Prisma.CompetitionScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  sponsor: 'sponsor',
  type: 'type',
  seasonId: 'seasonId'
});

exports.Prisma.GameEventScalarFieldEnum = makeEnum({
  id: 'id',
  minute: 'minute',
  gameId: 'gameId',
  playerId: 'playerId',
  type: 'type'
});

exports.Prisma.GameScalarFieldEnum = makeEnum({
  id: 'id',
  updatedAt: 'updatedAt',
  attendance: 'attendance',
  locationId: 'locationId',
  competitionId: 'competitionId'
});

exports.Prisma.HeathRecordScalarFieldEnum = makeEnum({
  id: 'id',
  cardNumber: 'cardNumber',
  issueDate: 'issueDate',
  expiryDate: 'expiryDate'
});

exports.Prisma.InjuryScalarFieldEnum = makeEnum({
  id: 'id',
  playerId: 'playerId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.InstitutionScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  address: 'address',
  city: 'city',
  province: 'province',
  postal_code: 'postal_code',
  category: 'category'
});

exports.Prisma.InterviewScalarFieldEnum = makeEnum({
  id: 'id',
  stage: 'stage',
  passed: 'passed',
  at: 'at',
  comment: 'comment',
  recruitmentId: 'recruitmentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LocationScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  category: 'category',
  streetAddress: 'streetAddress',
  city: 'city',
  province: 'province',
  country: 'country',
  postalCode: 'postalCode'
});

exports.Prisma.OperationScalarFieldEnum = makeEnum({
  id: 'id',
  type: 'type',
  date: 'date',
  injuryId: 'injuryId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.PlayerScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  dob: 'dob',
  isDomestic: 'isDomestic',
  photo: 'photo',
  gender: 'gender',
  position: 'position',
  heathRecordId: 'heathRecordId',
  phone: 'phone',
  streetAddress: 'streetAddress',
  city: 'city',
  province: 'province',
  country: 'country',
  postalCode: 'postalCode'
});

exports.Prisma.RecruitmentScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  passed: 'passed',
  resume: 'resume',
  playerId: 'playerId',
  accountId: 'accountId'
});

exports.Prisma.ScholarshipScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  institutionId: 'institutionId',
  playerId: 'playerId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SeasonScalarFieldEnum = makeEnum({
  id: 'id',
  startDate: 'startDate',
  endDate: 'endDate'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.SquadScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  institutionId: 'institutionId',
  homeColor: 'homeColor',
  awayColor: 'awayColor',
  locationId: 'locationId'
});

exports.Prisma.StaffScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  dob: 'dob',
  phone: 'phone',
  role: 'role',
  streetAddress: 'streetAddress',
  city: 'city',
  country: 'country',
  postalCode: 'postalCode',
  accountId: 'accountId'
});

exports.Prisma.TeamScalarFieldEnum = makeEnum({
  id: 'id',
  formation: 'formation',
  shirtColor: 'shirtColor',
  squadId: 'squadId',
  gameId: 'gameId'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});
exports.CompetitionType = makeEnum({
  TOURNAMENT: 'TOURNAMENT',
  LEAGUE: 'LEAGUE',
  FRIENDLY: 'FRIENDLY'
});

exports.Event = makeEnum({
  goal: 'goal',
  assist: 'assist',
  yellow_card: 'yellow_card',
  red_card: 'red_card',
  substitution_off: 'substitution_off',
  substitution_on: 'substitution_on'
});

exports.Formation = makeEnum({
  F4_4_2: 'F4_4_2',
  F4_2_3_1: 'F4_2_3_1',
  F3_5_2: 'F3_5_2',
  F5_3_2: 'F5_3_2',
  F3_4_3: 'F3_4_3',
  F4_3_3: 'F4_3_3'
});

exports.InstitutionCategory = makeEnum({
  high_school: 'high_school',
  middle_school: 'middle_school',
  college: 'college',
  university: 'university',
  semi_pro: 'semi_pro',
  amateur: 'amateur',
  pro: 'pro'
});

exports.LocationCategory = makeEnum({
  field: 'field',
  stadium: 'stadium',
  park: 'park',
  other: 'other'
});

exports.Postion = makeEnum({
  goal_keeper: 'goal_keeper',
  right_back: 'right_back',
  center_back: 'center_back',
  left_back: 'left_back',
  defensive_midfielder: 'defensive_midfielder',
  central_midfielder: 'central_midfielder',
  attacking_midfielder: 'attacking_midfielder',
  winger: 'winger',
  striker: 'striker',
  wing_back: 'wing_back'
});

exports.Role = makeEnum({
  head_coach: 'head_coach',
  doctor: 'doctor',
  therapist: 'therapist',
  recruiter: 'recruiter',
  coach: 'coach',
  nurse: 'nurse',
  kitman: 'kitman',
  referee: 'referee',
  lawyer: 'lawyer',
  teacher: 'teacher',
  other: 'other'
});

exports.Stage = makeEnum({
  First: 'First',
  Second: 'Second',
  Third: 'Third'
});

exports.Prisma.ModelName = makeEnum({
  Player: 'Player',
  Team: 'Team',
  Staff: 'Staff',
  Institution: 'Institution',
  Location: 'Location',
  Squad: 'Squad',
  Competition: 'Competition',
  Season: 'Season',
  HeathRecord: 'HeathRecord',
  Game: 'Game',
  GameEvent: 'GameEvent',
  Scholarship: 'Scholarship',
  Account: 'Account',
  Recruitment: 'Recruitment',
  Interview: 'Interview',
  Injury: 'Injury',
  Operation: 'Operation'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
