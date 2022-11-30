
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Player
 * 
 */
export type Player = {
  id: string
  name: string
  dob: Date
  isDomestic: boolean
  photo: string | null
  gender: string
  position: Postion
  heathRecordId: string | null
  phone: string
  streetAddress: string
  city: string
  province: string
  country: string
  postalCode: string
}

/**
 * Model Team
 * 
 */
export type Team = {
  id: string
  formation: Formation
  shirtColor: string
  squadId: string
  gameId: string | null
}

/**
 * Model Staff
 * 
 */
export type Staff = {
  id: string
  name: string
  dob: Date
  phone: string
  role: Role
  streetAddress: string
  city: string
  country: string
  postalCode: string
  accountId: string | null
}

/**
 * Model Institution
 * 
 */
export type Institution = {
  id: string
  name: string
  address: string
  city: string
  province: string
  postal_code: string
  category: InstitutionCategory
}

/**
 * Model Location
 * 
 */
export type Location = {
  id: string
  name: string
  category: LocationCategory
  streetAddress: string
  city: string
  province: string
  country: string
  postalCode: string
}

/**
 * Model Squad
 * 
 */
export type Squad = {
  id: string
  name: string
  institutionId: string
  homeColor: string | null
  awayColor: string | null
  locationId: string | null
}

/**
 * Model Competition
 * 
 */
export type Competition = {
  id: string
  name: string
  sponsor: string
  type: CompetitionType
  seasonId: string
}

/**
 * Model Season
 * 
 */
export type Season = {
  id: string
  startDate: Date
  endDate: Date
}

/**
 * Model HeathRecord
 * 
 */
export type HeathRecord = {
  id: string
  cardNumber: string
  issueDate: Date
  expiryDate: Date
}

/**
 * Model Game
 * 
 */
export type Game = {
  id: string
  updatedAt: Date
  attendance: number
  locationId: string
  competitionId: string
}

/**
 * Model GameEvent
 * 
 */
export type GameEvent = {
  id: string
  minute: number
  gameId: string | null
  playerId: string
  type: Event
}

/**
 * Model Scholarship
 * 
 */
export type Scholarship = {
  id: string
  name: string
  description: string
  institutionId: string
  playerId: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Account
 * 
 */
export type Account = {
  id: string
  username: string
  password: string
  updatedAt: Date
  createdAt: Date
}

/**
 * Model Recruitment
 * 
 */
export type Recruitment = {
  id: string
  createdAt: Date
  updatedAt: Date
  passed: boolean
  resume: string | null
  playerId: string
  accountId: string
}

/**
 * Model Interview
 * 
 */
export type Interview = {
  id: string
  stage: Stage
  passed: boolean
  at: Date
  comment: string
  recruitmentId: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Injury
 * 
 */
export type Injury = {
  id: string
  playerId: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Operation
 * 
 */
export type Operation = {
  id: string
  type: string
  date: Date
  injuryId: string
  createdAt: Date
  updatedAt: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const CompetitionType: {
  TOURNAMENT: 'TOURNAMENT',
  LEAGUE: 'LEAGUE',
  FRIENDLY: 'FRIENDLY'
};

export type CompetitionType = (typeof CompetitionType)[keyof typeof CompetitionType]


export const Event: {
  goal: 'goal',
  assist: 'assist',
  yellow_card: 'yellow_card',
  red_card: 'red_card',
  substitution_off: 'substitution_off',
  substitution_on: 'substitution_on'
};

export type Event = (typeof Event)[keyof typeof Event]


export const Formation: {
  F4_4_2: 'F4_4_2',
  F4_2_3_1: 'F4_2_3_1',
  F3_5_2: 'F3_5_2',
  F5_3_2: 'F5_3_2',
  F3_4_3: 'F3_4_3',
  F4_3_3: 'F4_3_3'
};

export type Formation = (typeof Formation)[keyof typeof Formation]


export const InstitutionCategory: {
  high_school: 'high_school',
  middle_school: 'middle_school',
  college: 'college',
  university: 'university',
  semi_pro: 'semi_pro',
  amateur: 'amateur',
  pro: 'pro'
};

export type InstitutionCategory = (typeof InstitutionCategory)[keyof typeof InstitutionCategory]


export const LocationCategory: {
  field: 'field',
  stadium: 'stadium',
  park: 'park',
  other: 'other'
};

export type LocationCategory = (typeof LocationCategory)[keyof typeof LocationCategory]


export const Postion: {
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
};

export type Postion = (typeof Postion)[keyof typeof Postion]


export const Role: {
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
};

export type Role = (typeof Role)[keyof typeof Role]


export const Stage: {
  First: 'First',
  Second: 'Second',
  Third: 'Third'
};

export type Stage = (typeof Stage)[keyof typeof Stage]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Players
 * const players = await prisma.player.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Players
   * const players = await prisma.player.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.PlayerDelegate<GlobalReject>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<GlobalReject>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **Staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.StaffDelegate<GlobalReject>;

  /**
   * `prisma.institution`: Exposes CRUD operations for the **Institution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Institutions
    * const institutions = await prisma.institution.findMany()
    * ```
    */
  get institution(): Prisma.InstitutionDelegate<GlobalReject>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<GlobalReject>;

  /**
   * `prisma.squad`: Exposes CRUD operations for the **Squad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Squads
    * const squads = await prisma.squad.findMany()
    * ```
    */
  get squad(): Prisma.SquadDelegate<GlobalReject>;

  /**
   * `prisma.competition`: Exposes CRUD operations for the **Competition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Competitions
    * const competitions = await prisma.competition.findMany()
    * ```
    */
  get competition(): Prisma.CompetitionDelegate<GlobalReject>;

  /**
   * `prisma.season`: Exposes CRUD operations for the **Season** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seasons
    * const seasons = await prisma.season.findMany()
    * ```
    */
  get season(): Prisma.SeasonDelegate<GlobalReject>;

  /**
   * `prisma.heathRecord`: Exposes CRUD operations for the **HeathRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HeathRecords
    * const heathRecords = await prisma.heathRecord.findMany()
    * ```
    */
  get heathRecord(): Prisma.HeathRecordDelegate<GlobalReject>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<GlobalReject>;

  /**
   * `prisma.gameEvent`: Exposes CRUD operations for the **GameEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameEvents
    * const gameEvents = await prisma.gameEvent.findMany()
    * ```
    */
  get gameEvent(): Prisma.GameEventDelegate<GlobalReject>;

  /**
   * `prisma.scholarship`: Exposes CRUD operations for the **Scholarship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scholarships
    * const scholarships = await prisma.scholarship.findMany()
    * ```
    */
  get scholarship(): Prisma.ScholarshipDelegate<GlobalReject>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<GlobalReject>;

  /**
   * `prisma.recruitment`: Exposes CRUD operations for the **Recruitment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recruitments
    * const recruitments = await prisma.recruitment.findMany()
    * ```
    */
  get recruitment(): Prisma.RecruitmentDelegate<GlobalReject>;

  /**
   * `prisma.interview`: Exposes CRUD operations for the **Interview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interviews
    * const interviews = await prisma.interview.findMany()
    * ```
    */
  get interview(): Prisma.InterviewDelegate<GlobalReject>;

  /**
   * `prisma.injury`: Exposes CRUD operations for the **Injury** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Injuries
    * const injuries = await prisma.injury.findMany()
    * ```
    */
  get injury(): Prisma.InjuryDelegate<GlobalReject>;

  /**
   * `prisma.operation`: Exposes CRUD operations for the **Operation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Operations
    * const operations = await prisma.operation.findMany()
    * ```
    */
  get operation(): Prisma.OperationDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.7.0
   * Query Engine version: 39190b250ebc338586e25e6da45e5e783bc8a635
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
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
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PlayerCountOutputType
   */


  export type PlayerCountOutputType = {
    scholarship: number
    recruitment: number
    GameEvent: number
    Injury: number
    Squad: number
    Team: number
  }

  export type PlayerCountOutputTypeSelect = {
    scholarship?: boolean
    recruitment?: boolean
    GameEvent?: boolean
    Injury?: boolean
    Squad?: boolean
    Team?: boolean
  }

  export type PlayerCountOutputTypeGetPayload<S extends boolean | null | undefined | PlayerCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PlayerCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PlayerCountOutputTypeArgs)
    ? PlayerCountOutputType 
    : S extends { select: any } & (PlayerCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PlayerCountOutputType ? PlayerCountOutputType[P] : never
  } 
      : PlayerCountOutputType




  // Custom InputTypes

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PlayerCountOutputType
     * 
    **/
    select?: PlayerCountOutputTypeSelect | null
  }



  /**
   * Count Type TeamCountOutputType
   */


  export type TeamCountOutputType = {
    starters: number
  }

  export type TeamCountOutputTypeSelect = {
    starters?: boolean
  }

  export type TeamCountOutputTypeGetPayload<S extends boolean | null | undefined | TeamCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TeamCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TeamCountOutputTypeArgs)
    ? TeamCountOutputType 
    : S extends { select: any } & (TeamCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TeamCountOutputType ? TeamCountOutputType[P] : never
  } 
      : TeamCountOutputType




  // Custom InputTypes

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     * 
    **/
    select?: TeamCountOutputTypeSelect | null
  }



  /**
   * Count Type StaffCountOutputType
   */


  export type StaffCountOutputType = {
    Squad: number
  }

  export type StaffCountOutputTypeSelect = {
    Squad?: boolean
  }

  export type StaffCountOutputTypeGetPayload<S extends boolean | null | undefined | StaffCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? StaffCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (StaffCountOutputTypeArgs)
    ? StaffCountOutputType 
    : S extends { select: any } & (StaffCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof StaffCountOutputType ? StaffCountOutputType[P] : never
  } 
      : StaffCountOutputType




  // Custom InputTypes

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the StaffCountOutputType
     * 
    **/
    select?: StaffCountOutputTypeSelect | null
  }



  /**
   * Count Type InstitutionCountOutputType
   */


  export type InstitutionCountOutputType = {
    scholarship: number
    Squad: number
  }

  export type InstitutionCountOutputTypeSelect = {
    scholarship?: boolean
    Squad?: boolean
  }

  export type InstitutionCountOutputTypeGetPayload<S extends boolean | null | undefined | InstitutionCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? InstitutionCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (InstitutionCountOutputTypeArgs)
    ? InstitutionCountOutputType 
    : S extends { select: any } & (InstitutionCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof InstitutionCountOutputType ? InstitutionCountOutputType[P] : never
  } 
      : InstitutionCountOutputType




  // Custom InputTypes

  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the InstitutionCountOutputType
     * 
    **/
    select?: InstitutionCountOutputTypeSelect | null
  }



  /**
   * Count Type LocationCountOutputType
   */


  export type LocationCountOutputType = {
    game: number
    Squad: number
  }

  export type LocationCountOutputTypeSelect = {
    game?: boolean
    Squad?: boolean
  }

  export type LocationCountOutputTypeGetPayload<S extends boolean | null | undefined | LocationCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? LocationCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (LocationCountOutputTypeArgs)
    ? LocationCountOutputType 
    : S extends { select: any } & (LocationCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof LocationCountOutputType ? LocationCountOutputType[P] : never
  } 
      : LocationCountOutputType




  // Custom InputTypes

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     * 
    **/
    select?: LocationCountOutputTypeSelect | null
  }



  /**
   * Count Type SquadCountOutputType
   */


  export type SquadCountOutputType = {
    players: number
    staff: number
    competition: number
    Team: number
  }

  export type SquadCountOutputTypeSelect = {
    players?: boolean
    staff?: boolean
    competition?: boolean
    Team?: boolean
  }

  export type SquadCountOutputTypeGetPayload<S extends boolean | null | undefined | SquadCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SquadCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (SquadCountOutputTypeArgs)
    ? SquadCountOutputType 
    : S extends { select: any } & (SquadCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof SquadCountOutputType ? SquadCountOutputType[P] : never
  } 
      : SquadCountOutputType




  // Custom InputTypes

  /**
   * SquadCountOutputType without action
   */
  export type SquadCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SquadCountOutputType
     * 
    **/
    select?: SquadCountOutputTypeSelect | null
  }



  /**
   * Count Type CompetitionCountOutputType
   */


  export type CompetitionCountOutputType = {
    Squad: number
    Game: number
  }

  export type CompetitionCountOutputTypeSelect = {
    Squad?: boolean
    Game?: boolean
  }

  export type CompetitionCountOutputTypeGetPayload<S extends boolean | null | undefined | CompetitionCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CompetitionCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CompetitionCountOutputTypeArgs)
    ? CompetitionCountOutputType 
    : S extends { select: any } & (CompetitionCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CompetitionCountOutputType ? CompetitionCountOutputType[P] : never
  } 
      : CompetitionCountOutputType




  // Custom InputTypes

  /**
   * CompetitionCountOutputType without action
   */
  export type CompetitionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CompetitionCountOutputType
     * 
    **/
    select?: CompetitionCountOutputTypeSelect | null
  }



  /**
   * Count Type SeasonCountOutputType
   */


  export type SeasonCountOutputType = {
    Competition: number
  }

  export type SeasonCountOutputTypeSelect = {
    Competition?: boolean
  }

  export type SeasonCountOutputTypeGetPayload<S extends boolean | null | undefined | SeasonCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SeasonCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (SeasonCountOutputTypeArgs)
    ? SeasonCountOutputType 
    : S extends { select: any } & (SeasonCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof SeasonCountOutputType ? SeasonCountOutputType[P] : never
  } 
      : SeasonCountOutputType




  // Custom InputTypes

  /**
   * SeasonCountOutputType without action
   */
  export type SeasonCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SeasonCountOutputType
     * 
    **/
    select?: SeasonCountOutputTypeSelect | null
  }



  /**
   * Count Type GameCountOutputType
   */


  export type GameCountOutputType = {
    team: number
    events: number
  }

  export type GameCountOutputTypeSelect = {
    team?: boolean
    events?: boolean
  }

  export type GameCountOutputTypeGetPayload<S extends boolean | null | undefined | GameCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? GameCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (GameCountOutputTypeArgs)
    ? GameCountOutputType 
    : S extends { select: any } & (GameCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof GameCountOutputType ? GameCountOutputType[P] : never
  } 
      : GameCountOutputType




  // Custom InputTypes

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     * 
    **/
    select?: GameCountOutputTypeSelect | null
  }



  /**
   * Count Type AccountCountOutputType
   */


  export type AccountCountOutputType = {
    recruitment: number
    Staff: number
  }

  export type AccountCountOutputTypeSelect = {
    recruitment?: boolean
    Staff?: boolean
  }

  export type AccountCountOutputTypeGetPayload<S extends boolean | null | undefined | AccountCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AccountCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (AccountCountOutputTypeArgs)
    ? AccountCountOutputType 
    : S extends { select: any } & (AccountCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof AccountCountOutputType ? AccountCountOutputType[P] : never
  } 
      : AccountCountOutputType




  // Custom InputTypes

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     * 
    **/
    select?: AccountCountOutputTypeSelect | null
  }



  /**
   * Count Type RecruitmentCountOutputType
   */


  export type RecruitmentCountOutputType = {
    interviews: number
  }

  export type RecruitmentCountOutputTypeSelect = {
    interviews?: boolean
  }

  export type RecruitmentCountOutputTypeGetPayload<S extends boolean | null | undefined | RecruitmentCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RecruitmentCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RecruitmentCountOutputTypeArgs)
    ? RecruitmentCountOutputType 
    : S extends { select: any } & (RecruitmentCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RecruitmentCountOutputType ? RecruitmentCountOutputType[P] : never
  } 
      : RecruitmentCountOutputType




  // Custom InputTypes

  /**
   * RecruitmentCountOutputType without action
   */
  export type RecruitmentCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RecruitmentCountOutputType
     * 
    **/
    select?: RecruitmentCountOutputTypeSelect | null
  }



  /**
   * Count Type InjuryCountOutputType
   */


  export type InjuryCountOutputType = {
    Operation: number
  }

  export type InjuryCountOutputTypeSelect = {
    Operation?: boolean
  }

  export type InjuryCountOutputTypeGetPayload<S extends boolean | null | undefined | InjuryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? InjuryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (InjuryCountOutputTypeArgs)
    ? InjuryCountOutputType 
    : S extends { select: any } & (InjuryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof InjuryCountOutputType ? InjuryCountOutputType[P] : never
  } 
      : InjuryCountOutputType




  // Custom InputTypes

  /**
   * InjuryCountOutputType without action
   */
  export type InjuryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the InjuryCountOutputType
     * 
    **/
    select?: InjuryCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Player
   */


  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerMinAggregateOutputType = {
    id: string | null
    name: string | null
    dob: Date | null
    isDomestic: boolean | null
    photo: string | null
    gender: string | null
    position: Postion | null
    heathRecordId: string | null
    phone: string | null
    streetAddress: string | null
    city: string | null
    province: string | null
    country: string | null
    postalCode: string | null
  }

  export type PlayerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    dob: Date | null
    isDomestic: boolean | null
    photo: string | null
    gender: string | null
    position: Postion | null
    heathRecordId: string | null
    phone: string | null
    streetAddress: string | null
    city: string | null
    province: string | null
    country: string | null
    postalCode: string | null
  }

  export type PlayerCountAggregateOutputType = {
    id: number
    name: number
    dob: number
    isDomestic: number
    photo: number
    gender: number
    position: number
    heathRecordId: number
    phone: number
    streetAddress: number
    city: number
    province: number
    country: number
    postalCode: number
    _all: number
  }


  export type PlayerMinAggregateInputType = {
    id?: true
    name?: true
    dob?: true
    isDomestic?: true
    photo?: true
    gender?: true
    position?: true
    heathRecordId?: true
    phone?: true
    streetAddress?: true
    city?: true
    province?: true
    country?: true
    postalCode?: true
  }

  export type PlayerMaxAggregateInputType = {
    id?: true
    name?: true
    dob?: true
    isDomestic?: true
    photo?: true
    gender?: true
    position?: true
    heathRecordId?: true
    phone?: true
    streetAddress?: true
    city?: true
    province?: true
    country?: true
    postalCode?: true
  }

  export type PlayerCountAggregateInputType = {
    id?: true
    name?: true
    dob?: true
    isDomestic?: true
    photo?: true
    gender?: true
    position?: true
    heathRecordId?: true
    phone?: true
    streetAddress?: true
    city?: true
    province?: true
    country?: true
    postalCode?: true
    _all?: true
  }

  export type PlayerAggregateArgs = {
    /**
     * Filter which Player to aggregate.
     * 
    **/
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     * 
    **/
    orderBy?: Enumerable<PlayerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type PlayerGroupByArgs = {
    where?: PlayerWhereInput
    orderBy?: Enumerable<PlayerOrderByWithAggregationInput>
    by: Array<PlayerScalarFieldEnum>
    having?: PlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }


  export type PlayerGroupByOutputType = {
    id: string
    name: string
    dob: Date
    isDomestic: boolean
    photo: string | null
    gender: string
    position: Postion
    heathRecordId: string | null
    phone: string
    streetAddress: string
    city: string
    province: string
    country: string
    postalCode: string
    _count: PlayerCountAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSelect = {
    id?: boolean
    name?: boolean
    dob?: boolean
    isDomestic?: boolean
    photo?: boolean
    gender?: boolean
    position?: boolean
    healthRecord?: boolean | HeathRecordArgs
    heathRecordId?: boolean
    phone?: boolean
    streetAddress?: boolean
    city?: boolean
    province?: boolean
    country?: boolean
    postalCode?: boolean
    scholarship?: boolean | ScholarshipFindManyArgs
    recruitment?: boolean | RecruitmentFindManyArgs
    GameEvent?: boolean | GameEventFindManyArgs
    Injury?: boolean | InjuryFindManyArgs
    Squad?: boolean | SquadFindManyArgs
    Team?: boolean | TeamFindManyArgs
    _count?: boolean | PlayerCountOutputTypeArgs
  }


  export type PlayerInclude = {
    healthRecord?: boolean | HeathRecordArgs
    scholarship?: boolean | ScholarshipFindManyArgs
    recruitment?: boolean | RecruitmentFindManyArgs
    GameEvent?: boolean | GameEventFindManyArgs
    Injury?: boolean | InjuryFindManyArgs
    Squad?: boolean | SquadFindManyArgs
    Team?: boolean | TeamFindManyArgs
    _count?: boolean | PlayerCountOutputTypeArgs
  } 

  export type PlayerGetPayload<S extends boolean | null | undefined | PlayerArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Player :
    S extends undefined ? never :
    S extends { include: any } & (PlayerArgs | PlayerFindManyArgs)
    ? Player  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'healthRecord' ? HeathRecordGetPayload<S['include'][P]> | null :
        P extends 'scholarship' ? Array < ScholarshipGetPayload<S['include'][P]>>  :
        P extends 'recruitment' ? Array < RecruitmentGetPayload<S['include'][P]>>  :
        P extends 'GameEvent' ? Array < GameEventGetPayload<S['include'][P]>>  :
        P extends 'Injury' ? Array < InjuryGetPayload<S['include'][P]>>  :
        P extends 'Squad' ? Array < SquadGetPayload<S['include'][P]>>  :
        P extends 'Team' ? Array < TeamGetPayload<S['include'][P]>>  :
        P extends '_count' ? PlayerCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PlayerArgs | PlayerFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'healthRecord' ? HeathRecordGetPayload<S['select'][P]> | null :
        P extends 'scholarship' ? Array < ScholarshipGetPayload<S['select'][P]>>  :
        P extends 'recruitment' ? Array < RecruitmentGetPayload<S['select'][P]>>  :
        P extends 'GameEvent' ? Array < GameEventGetPayload<S['select'][P]>>  :
        P extends 'Injury' ? Array < InjuryGetPayload<S['select'][P]>>  :
        P extends 'Squad' ? Array < SquadGetPayload<S['select'][P]>>  :
        P extends 'Team' ? Array < TeamGetPayload<S['select'][P]>>  :
        P extends '_count' ? PlayerCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Player ? Player[P] : never
  } 
      : Player


  type PlayerCountArgs = Merge<
    Omit<PlayerFindManyArgs, 'select' | 'include'> & {
      select?: PlayerCountAggregateInputType | true
    }
  >

  export interface PlayerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlayerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PlayerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Player'> extends True ? Prisma__PlayerClient<PlayerGetPayload<T>> : Prisma__PlayerClient<PlayerGetPayload<T> | null, null>

    /**
     * Find one Player that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlayerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlayerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PlayerFindUniqueOrThrowArgs>
    ): Prisma__PlayerClient<PlayerGetPayload<T>>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlayerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PlayerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Player'> extends True ? Prisma__PlayerClient<PlayerGetPayload<T>> : Prisma__PlayerClient<PlayerGetPayload<T> | null, null>

    /**
     * Find the first Player that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlayerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PlayerFindFirstOrThrowArgs>
    ): Prisma__PlayerClient<PlayerGetPayload<T>>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlayerFindManyArgs>(
      args?: SelectSubset<T, PlayerFindManyArgs>
    ): PrismaPromise<Array<PlayerGetPayload<T>>>

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
    **/
    create<T extends PlayerCreateArgs>(
      args: SelectSubset<T, PlayerCreateArgs>
    ): Prisma__PlayerClient<PlayerGetPayload<T>>

    /**
     * Create many Players.
     *     @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     *     @example
     *     // Create many Players
     *     const player = await prisma.player.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlayerCreateManyArgs>(
      args?: SelectSubset<T, PlayerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
    **/
    delete<T extends PlayerDeleteArgs>(
      args: SelectSubset<T, PlayerDeleteArgs>
    ): Prisma__PlayerClient<PlayerGetPayload<T>>

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlayerUpdateArgs>(
      args: SelectSubset<T, PlayerUpdateArgs>
    ): Prisma__PlayerClient<PlayerGetPayload<T>>

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlayerDeleteManyArgs>(
      args?: SelectSubset<T, PlayerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlayerUpdateManyArgs>(
      args: SelectSubset<T, PlayerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
    **/
    upsert<T extends PlayerUpsertArgs>(
      args: SelectSubset<T, PlayerUpsertArgs>
    ): Prisma__PlayerClient<PlayerGetPayload<T>>

    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PlayerClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    healthRecord<T extends HeathRecordArgs= {}>(args?: Subset<T, HeathRecordArgs>): Prisma__HeathRecordClient<HeathRecordGetPayload<T> | Null>;

    scholarship<T extends ScholarshipFindManyArgs= {}>(args?: Subset<T, ScholarshipFindManyArgs>): PrismaPromise<Array<ScholarshipGetPayload<T>>| Null>;

    recruitment<T extends RecruitmentFindManyArgs= {}>(args?: Subset<T, RecruitmentFindManyArgs>): PrismaPromise<Array<RecruitmentGetPayload<T>>| Null>;

    GameEvent<T extends GameEventFindManyArgs= {}>(args?: Subset<T, GameEventFindManyArgs>): PrismaPromise<Array<GameEventGetPayload<T>>| Null>;

    Injury<T extends InjuryFindManyArgs= {}>(args?: Subset<T, InjuryFindManyArgs>): PrismaPromise<Array<InjuryGetPayload<T>>| Null>;

    Squad<T extends SquadFindManyArgs= {}>(args?: Subset<T, SquadFindManyArgs>): PrismaPromise<Array<SquadGetPayload<T>>| Null>;

    Team<T extends TeamFindManyArgs= {}>(args?: Subset<T, TeamFindManyArgs>): PrismaPromise<Array<TeamGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Player base type for findUnique actions
   */
  export type PlayerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Player
     * 
    **/
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlayerInclude | null
    /**
     * Filter, which Player to fetch.
     * 
    **/
    where: PlayerWhereUniqueInput
  }

  /**
   * Player: findUnique
   */
  export interface PlayerFindUniqueArgs extends PlayerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Player findUniqueOrThrow
   */
  export type PlayerFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Player
     * 
    **/
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlayerInclude | null
    /**
     * Filter, which Player to fetch.
     * 
    **/
    where: PlayerWhereUniqueInput
  }


  /**
   * Player base type for findFirst actions
   */
  export type PlayerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Player
     * 
    **/
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlayerInclude | null
    /**
     * Filter, which Player to fetch.
     * 
    **/
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     * 
    **/
    orderBy?: Enumerable<PlayerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     * 
    **/
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     * 
    **/
    distinct?: Enumerable<PlayerScalarFieldEnum>
  }

  /**
   * Player: findFirst
   */
  export interface PlayerFindFirstArgs extends PlayerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Player findFirstOrThrow
   */
  export type PlayerFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Player
     * 
    **/
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlayerInclude | null
    /**
     * Filter, which Player to fetch.
     * 
    **/
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     * 
    **/
    orderBy?: Enumerable<PlayerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     * 
    **/
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     * 
    **/
    distinct?: Enumerable<PlayerScalarFieldEnum>
  }


  /**
   * Player findMany
   */
  export type PlayerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Player
     * 
    **/
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlayerInclude | null
    /**
     * Filter, which Players to fetch.
     * 
    **/
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     * 
    **/
    orderBy?: Enumerable<PlayerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     * 
    **/
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PlayerScalarFieldEnum>
  }


  /**
   * Player create
   */
  export type PlayerCreateArgs = {
    /**
     * Select specific fields to fetch from the Player
     * 
    **/
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlayerInclude | null
    /**
     * The data needed to create a Player.
     * 
    **/
    data: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
  }


  /**
   * Player createMany
   */
  export type PlayerCreateManyArgs = {
    /**
     * The data used to create many Players.
     * 
    **/
    data: Enumerable<PlayerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Player update
   */
  export type PlayerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Player
     * 
    **/
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlayerInclude | null
    /**
     * The data needed to update a Player.
     * 
    **/
    data: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
    /**
     * Choose, which Player to update.
     * 
    **/
    where: PlayerWhereUniqueInput
  }


  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs = {
    /**
     * The data used to update Players.
     * 
    **/
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     * 
    **/
    where?: PlayerWhereInput
  }


  /**
   * Player upsert
   */
  export type PlayerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Player
     * 
    **/
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlayerInclude | null
    /**
     * The filter to search for the Player to update in case it exists.
     * 
    **/
    where: PlayerWhereUniqueInput
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
     * 
    **/
    create: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
  }


  /**
   * Player delete
   */
  export type PlayerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Player
     * 
    **/
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlayerInclude | null
    /**
     * Filter which Player to delete.
     * 
    **/
    where: PlayerWhereUniqueInput
  }


  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs = {
    /**
     * Filter which Players to delete
     * 
    **/
    where?: PlayerWhereInput
  }


  /**
   * Player without action
   */
  export type PlayerArgs = {
    /**
     * Select specific fields to fetch from the Player
     * 
    **/
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlayerInclude | null
  }



  /**
   * Model Team
   */


  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    formation: Formation | null
    shirtColor: string | null
    squadId: string | null
    gameId: string | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    formation: Formation | null
    shirtColor: string | null
    squadId: string | null
    gameId: string | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    formation: number
    shirtColor: number
    squadId: number
    gameId: number
    _all: number
  }


  export type TeamMinAggregateInputType = {
    id?: true
    formation?: true
    shirtColor?: true
    squadId?: true
    gameId?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    formation?: true
    shirtColor?: true
    squadId?: true
    gameId?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    formation?: true
    shirtColor?: true
    squadId?: true
    gameId?: true
    _all?: true
  }

  export type TeamAggregateArgs = {
    /**
     * Filter which Team to aggregate.
     * 
    **/
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     * 
    **/
    orderBy?: Enumerable<TeamOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs = {
    where?: TeamWhereInput
    orderBy?: Enumerable<TeamOrderByWithAggregationInput>
    by: Array<TeamScalarFieldEnum>
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }


  export type TeamGroupByOutputType = {
    id: string
    formation: Formation
    shirtColor: string
    squadId: string
    gameId: string | null
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect = {
    id?: boolean
    starters?: boolean | PlayerFindManyArgs
    formation?: boolean
    shirtColor?: boolean
    squad?: boolean | SquadArgs
    squadId?: boolean
    Game?: boolean | GameArgs
    gameId?: boolean
    _count?: boolean | TeamCountOutputTypeArgs
  }


  export type TeamInclude = {
    starters?: boolean | PlayerFindManyArgs
    squad?: boolean | SquadArgs
    Game?: boolean | GameArgs
    _count?: boolean | TeamCountOutputTypeArgs
  } 

  export type TeamGetPayload<S extends boolean | null | undefined | TeamArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Team :
    S extends undefined ? never :
    S extends { include: any } & (TeamArgs | TeamFindManyArgs)
    ? Team  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'starters' ? Array < PlayerGetPayload<S['include'][P]>>  :
        P extends 'squad' ? SquadGetPayload<S['include'][P]> :
        P extends 'Game' ? GameGetPayload<S['include'][P]> | null :
        P extends '_count' ? TeamCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TeamArgs | TeamFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'starters' ? Array < PlayerGetPayload<S['select'][P]>>  :
        P extends 'squad' ? SquadGetPayload<S['select'][P]> :
        P extends 'Game' ? GameGetPayload<S['select'][P]> | null :
        P extends '_count' ? TeamCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Team ? Team[P] : never
  } 
      : Team


  type TeamCountArgs = Merge<
    Omit<TeamFindManyArgs, 'select' | 'include'> & {
      select?: TeamCountAggregateInputType | true
    }
  >

  export interface TeamDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TeamFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TeamFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Team'> extends True ? Prisma__TeamClient<TeamGetPayload<T>> : Prisma__TeamClient<TeamGetPayload<T> | null, null>

    /**
     * Find one Team that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TeamFindUniqueOrThrowArgs>
    ): Prisma__TeamClient<TeamGetPayload<T>>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TeamFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TeamFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Team'> extends True ? Prisma__TeamClient<TeamGetPayload<T>> : Prisma__TeamClient<TeamGetPayload<T> | null, null>

    /**
     * Find the first Team that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TeamFindFirstOrThrowArgs>
    ): Prisma__TeamClient<TeamGetPayload<T>>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TeamFindManyArgs>(
      args?: SelectSubset<T, TeamFindManyArgs>
    ): PrismaPromise<Array<TeamGetPayload<T>>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
    **/
    create<T extends TeamCreateArgs>(
      args: SelectSubset<T, TeamCreateArgs>
    ): Prisma__TeamClient<TeamGetPayload<T>>

    /**
     * Create many Teams.
     *     @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     *     @example
     *     // Create many Teams
     *     const team = await prisma.team.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TeamCreateManyArgs>(
      args?: SelectSubset<T, TeamCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
    **/
    delete<T extends TeamDeleteArgs>(
      args: SelectSubset<T, TeamDeleteArgs>
    ): Prisma__TeamClient<TeamGetPayload<T>>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TeamUpdateArgs>(
      args: SelectSubset<T, TeamUpdateArgs>
    ): Prisma__TeamClient<TeamGetPayload<T>>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TeamDeleteManyArgs>(
      args?: SelectSubset<T, TeamDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TeamUpdateManyArgs>(
      args: SelectSubset<T, TeamUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
    **/
    upsert<T extends TeamUpsertArgs>(
      args: SelectSubset<T, TeamUpsertArgs>
    ): Prisma__TeamClient<TeamGetPayload<T>>

    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TeamClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    starters<T extends PlayerFindManyArgs= {}>(args?: Subset<T, PlayerFindManyArgs>): PrismaPromise<Array<PlayerGetPayload<T>>| Null>;

    squad<T extends SquadArgs= {}>(args?: Subset<T, SquadArgs>): Prisma__SquadClient<SquadGetPayload<T> | Null>;

    Game<T extends GameArgs= {}>(args?: Subset<T, GameArgs>): Prisma__GameClient<GameGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Team base type for findUnique actions
   */
  export type TeamFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Team
     * 
    **/
    select?: TeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeamInclude | null
    /**
     * Filter, which Team to fetch.
     * 
    **/
    where: TeamWhereUniqueInput
  }

  /**
   * Team: findUnique
   */
  export interface TeamFindUniqueArgs extends TeamFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Team
     * 
    **/
    select?: TeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeamInclude | null
    /**
     * Filter, which Team to fetch.
     * 
    **/
    where: TeamWhereUniqueInput
  }


  /**
   * Team base type for findFirst actions
   */
  export type TeamFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Team
     * 
    **/
    select?: TeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeamInclude | null
    /**
     * Filter, which Team to fetch.
     * 
    **/
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     * 
    **/
    orderBy?: Enumerable<TeamOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     * 
    **/
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     * 
    **/
    distinct?: Enumerable<TeamScalarFieldEnum>
  }

  /**
   * Team: findFirst
   */
  export interface TeamFindFirstArgs extends TeamFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Team
     * 
    **/
    select?: TeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeamInclude | null
    /**
     * Filter, which Team to fetch.
     * 
    **/
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     * 
    **/
    orderBy?: Enumerable<TeamOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     * 
    **/
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     * 
    **/
    distinct?: Enumerable<TeamScalarFieldEnum>
  }


  /**
   * Team findMany
   */
  export type TeamFindManyArgs = {
    /**
     * Select specific fields to fetch from the Team
     * 
    **/
    select?: TeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeamInclude | null
    /**
     * Filter, which Teams to fetch.
     * 
    **/
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     * 
    **/
    orderBy?: Enumerable<TeamOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     * 
    **/
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TeamScalarFieldEnum>
  }


  /**
   * Team create
   */
  export type TeamCreateArgs = {
    /**
     * Select specific fields to fetch from the Team
     * 
    **/
    select?: TeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeamInclude | null
    /**
     * The data needed to create a Team.
     * 
    **/
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }


  /**
   * Team createMany
   */
  export type TeamCreateManyArgs = {
    /**
     * The data used to create many Teams.
     * 
    **/
    data: Enumerable<TeamCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Team update
   */
  export type TeamUpdateArgs = {
    /**
     * Select specific fields to fetch from the Team
     * 
    **/
    select?: TeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeamInclude | null
    /**
     * The data needed to update a Team.
     * 
    **/
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     * 
    **/
    where: TeamWhereUniqueInput
  }


  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs = {
    /**
     * The data used to update Teams.
     * 
    **/
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     * 
    **/
    where?: TeamWhereInput
  }


  /**
   * Team upsert
   */
  export type TeamUpsertArgs = {
    /**
     * Select specific fields to fetch from the Team
     * 
    **/
    select?: TeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeamInclude | null
    /**
     * The filter to search for the Team to update in case it exists.
     * 
    **/
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     * 
    **/
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }


  /**
   * Team delete
   */
  export type TeamDeleteArgs = {
    /**
     * Select specific fields to fetch from the Team
     * 
    **/
    select?: TeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeamInclude | null
    /**
     * Filter which Team to delete.
     * 
    **/
    where: TeamWhereUniqueInput
  }


  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs = {
    /**
     * Filter which Teams to delete
     * 
    **/
    where?: TeamWhereInput
  }


  /**
   * Team without action
   */
  export type TeamArgs = {
    /**
     * Select specific fields to fetch from the Team
     * 
    **/
    select?: TeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeamInclude | null
  }



  /**
   * Model Staff
   */


  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffMinAggregateOutputType = {
    id: string | null
    name: string | null
    dob: Date | null
    phone: string | null
    role: Role | null
    streetAddress: string | null
    city: string | null
    country: string | null
    postalCode: string | null
    accountId: string | null
  }

  export type StaffMaxAggregateOutputType = {
    id: string | null
    name: string | null
    dob: Date | null
    phone: string | null
    role: Role | null
    streetAddress: string | null
    city: string | null
    country: string | null
    postalCode: string | null
    accountId: string | null
  }

  export type StaffCountAggregateOutputType = {
    id: number
    name: number
    dob: number
    phone: number
    role: number
    streetAddress: number
    city: number
    country: number
    postalCode: number
    accountId: number
    _all: number
  }


  export type StaffMinAggregateInputType = {
    id?: true
    name?: true
    dob?: true
    phone?: true
    role?: true
    streetAddress?: true
    city?: true
    country?: true
    postalCode?: true
    accountId?: true
  }

  export type StaffMaxAggregateInputType = {
    id?: true
    name?: true
    dob?: true
    phone?: true
    role?: true
    streetAddress?: true
    city?: true
    country?: true
    postalCode?: true
    accountId?: true
  }

  export type StaffCountAggregateInputType = {
    id?: true
    name?: true
    dob?: true
    phone?: true
    role?: true
    streetAddress?: true
    city?: true
    country?: true
    postalCode?: true
    accountId?: true
    _all?: true
  }

  export type StaffAggregateArgs = {
    /**
     * Filter which Staff to aggregate.
     * 
    **/
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     * 
    **/
    orderBy?: Enumerable<StaffOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type StaffGroupByArgs = {
    where?: StaffWhereInput
    orderBy?: Enumerable<StaffOrderByWithAggregationInput>
    by: Array<StaffScalarFieldEnum>
    having?: StaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }


  export type StaffGroupByOutputType = {
    id: string
    name: string
    dob: Date
    phone: string
    role: Role
    streetAddress: string
    city: string
    country: string
    postalCode: string
    accountId: string | null
    _count: StaffCountAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends StaffGroupByArgs> = PrismaPromise<
    Array<
      PickArray<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type StaffSelect = {
    id?: boolean
    name?: boolean
    dob?: boolean
    phone?: boolean
    role?: boolean
    streetAddress?: boolean
    city?: boolean
    country?: boolean
    postalCode?: boolean
    account?: boolean | AccountArgs
    accountId?: boolean
    Squad?: boolean | SquadFindManyArgs
    _count?: boolean | StaffCountOutputTypeArgs
  }


  export type StaffInclude = {
    account?: boolean | AccountArgs
    Squad?: boolean | SquadFindManyArgs
    _count?: boolean | StaffCountOutputTypeArgs
  } 

  export type StaffGetPayload<S extends boolean | null | undefined | StaffArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Staff :
    S extends undefined ? never :
    S extends { include: any } & (StaffArgs | StaffFindManyArgs)
    ? Staff  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'account' ? AccountGetPayload<S['include'][P]> | null :
        P extends 'Squad' ? Array < SquadGetPayload<S['include'][P]>>  :
        P extends '_count' ? StaffCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (StaffArgs | StaffFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'account' ? AccountGetPayload<S['select'][P]> | null :
        P extends 'Squad' ? Array < SquadGetPayload<S['select'][P]>>  :
        P extends '_count' ? StaffCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Staff ? Staff[P] : never
  } 
      : Staff


  type StaffCountArgs = Merge<
    Omit<StaffFindManyArgs, 'select' | 'include'> & {
      select?: StaffCountAggregateInputType | true
    }
  >

  export interface StaffDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Staff that matches the filter.
     * @param {StaffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StaffFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StaffFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Staff'> extends True ? Prisma__StaffClient<StaffGetPayload<T>> : Prisma__StaffClient<StaffGetPayload<T> | null, null>

    /**
     * Find one Staff that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StaffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StaffFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, StaffFindUniqueOrThrowArgs>
    ): Prisma__StaffClient<StaffGetPayload<T>>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StaffFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StaffFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Staff'> extends True ? Prisma__StaffClient<StaffGetPayload<T>> : Prisma__StaffClient<StaffGetPayload<T> | null, null>

    /**
     * Find the first Staff that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StaffFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StaffFindFirstOrThrowArgs>
    ): Prisma__StaffClient<StaffGetPayload<T>>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffWithIdOnly = await prisma.staff.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StaffFindManyArgs>(
      args?: SelectSubset<T, StaffFindManyArgs>
    ): PrismaPromise<Array<StaffGetPayload<T>>>

    /**
     * Create a Staff.
     * @param {StaffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
    **/
    create<T extends StaffCreateArgs>(
      args: SelectSubset<T, StaffCreateArgs>
    ): Prisma__StaffClient<StaffGetPayload<T>>

    /**
     * Create many Staff.
     *     @param {StaffCreateManyArgs} args - Arguments to create many Staff.
     *     @example
     *     // Create many Staff
     *     const staff = await prisma.staff.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StaffCreateManyArgs>(
      args?: SelectSubset<T, StaffCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Staff.
     * @param {StaffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
    **/
    delete<T extends StaffDeleteArgs>(
      args: SelectSubset<T, StaffDeleteArgs>
    ): Prisma__StaffClient<StaffGetPayload<T>>

    /**
     * Update one Staff.
     * @param {StaffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StaffUpdateArgs>(
      args: SelectSubset<T, StaffUpdateArgs>
    ): Prisma__StaffClient<StaffGetPayload<T>>

    /**
     * Delete zero or more Staff.
     * @param {StaffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StaffDeleteManyArgs>(
      args?: SelectSubset<T, StaffDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StaffUpdateManyArgs>(
      args: SelectSubset<T, StaffUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Staff.
     * @param {StaffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
    **/
    upsert<T extends StaffUpsertArgs>(
      args: SelectSubset<T, StaffUpsertArgs>
    ): Prisma__StaffClient<StaffGetPayload<T>>

    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends StaffCountArgs>(
      args?: Subset<T, StaffCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffGroupByArgs['orderBy'] }
        : { orderBy?: StaffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StaffClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    account<T extends AccountArgs= {}>(args?: Subset<T, AccountArgs>): Prisma__AccountClient<AccountGetPayload<T> | Null>;

    Squad<T extends SquadFindManyArgs= {}>(args?: Subset<T, SquadFindManyArgs>): PrismaPromise<Array<SquadGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Staff base type for findUnique actions
   */
  export type StaffFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Staff
     * 
    **/
    select?: StaffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StaffInclude | null
    /**
     * Filter, which Staff to fetch.
     * 
    **/
    where: StaffWhereUniqueInput
  }

  /**
   * Staff: findUnique
   */
  export interface StaffFindUniqueArgs extends StaffFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Staff findUniqueOrThrow
   */
  export type StaffFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Staff
     * 
    **/
    select?: StaffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StaffInclude | null
    /**
     * Filter, which Staff to fetch.
     * 
    **/
    where: StaffWhereUniqueInput
  }


  /**
   * Staff base type for findFirst actions
   */
  export type StaffFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Staff
     * 
    **/
    select?: StaffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StaffInclude | null
    /**
     * Filter, which Staff to fetch.
     * 
    **/
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     * 
    **/
    orderBy?: Enumerable<StaffOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     * 
    **/
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     * 
    **/
    distinct?: Enumerable<StaffScalarFieldEnum>
  }

  /**
   * Staff: findFirst
   */
  export interface StaffFindFirstArgs extends StaffFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Staff findFirstOrThrow
   */
  export type StaffFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Staff
     * 
    **/
    select?: StaffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StaffInclude | null
    /**
     * Filter, which Staff to fetch.
     * 
    **/
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     * 
    **/
    orderBy?: Enumerable<StaffOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     * 
    **/
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     * 
    **/
    distinct?: Enumerable<StaffScalarFieldEnum>
  }


  /**
   * Staff findMany
   */
  export type StaffFindManyArgs = {
    /**
     * Select specific fields to fetch from the Staff
     * 
    **/
    select?: StaffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StaffInclude | null
    /**
     * Filter, which Staff to fetch.
     * 
    **/
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     * 
    **/
    orderBy?: Enumerable<StaffOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Staff.
     * 
    **/
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     * 
    **/
    skip?: number
    distinct?: Enumerable<StaffScalarFieldEnum>
  }


  /**
   * Staff create
   */
  export type StaffCreateArgs = {
    /**
     * Select specific fields to fetch from the Staff
     * 
    **/
    select?: StaffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StaffInclude | null
    /**
     * The data needed to create a Staff.
     * 
    **/
    data: XOR<StaffCreateInput, StaffUncheckedCreateInput>
  }


  /**
   * Staff createMany
   */
  export type StaffCreateManyArgs = {
    /**
     * The data used to create many Staff.
     * 
    **/
    data: Enumerable<StaffCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Staff update
   */
  export type StaffUpdateArgs = {
    /**
     * Select specific fields to fetch from the Staff
     * 
    **/
    select?: StaffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StaffInclude | null
    /**
     * The data needed to update a Staff.
     * 
    **/
    data: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
    /**
     * Choose, which Staff to update.
     * 
    **/
    where: StaffWhereUniqueInput
  }


  /**
   * Staff updateMany
   */
  export type StaffUpdateManyArgs = {
    /**
     * The data used to update Staff.
     * 
    **/
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     * 
    **/
    where?: StaffWhereInput
  }


  /**
   * Staff upsert
   */
  export type StaffUpsertArgs = {
    /**
     * Select specific fields to fetch from the Staff
     * 
    **/
    select?: StaffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StaffInclude | null
    /**
     * The filter to search for the Staff to update in case it exists.
     * 
    **/
    where: StaffWhereUniqueInput
    /**
     * In case the Staff found by the `where` argument doesn't exist, create a new Staff with this data.
     * 
    **/
    create: XOR<StaffCreateInput, StaffUncheckedCreateInput>
    /**
     * In case the Staff was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
  }


  /**
   * Staff delete
   */
  export type StaffDeleteArgs = {
    /**
     * Select specific fields to fetch from the Staff
     * 
    **/
    select?: StaffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StaffInclude | null
    /**
     * Filter which Staff to delete.
     * 
    **/
    where: StaffWhereUniqueInput
  }


  /**
   * Staff deleteMany
   */
  export type StaffDeleteManyArgs = {
    /**
     * Filter which Staff to delete
     * 
    **/
    where?: StaffWhereInput
  }


  /**
   * Staff without action
   */
  export type StaffArgs = {
    /**
     * Select specific fields to fetch from the Staff
     * 
    **/
    select?: StaffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StaffInclude | null
  }



  /**
   * Model Institution
   */


  export type AggregateInstitution = {
    _count: InstitutionCountAggregateOutputType | null
    _min: InstitutionMinAggregateOutputType | null
    _max: InstitutionMaxAggregateOutputType | null
  }

  export type InstitutionMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    city: string | null
    province: string | null
    postal_code: string | null
    category: InstitutionCategory | null
  }

  export type InstitutionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    city: string | null
    province: string | null
    postal_code: string | null
    category: InstitutionCategory | null
  }

  export type InstitutionCountAggregateOutputType = {
    id: number
    name: number
    address: number
    city: number
    province: number
    postal_code: number
    category: number
    _all: number
  }


  export type InstitutionMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    province?: true
    postal_code?: true
    category?: true
  }

  export type InstitutionMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    province?: true
    postal_code?: true
    category?: true
  }

  export type InstitutionCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    province?: true
    postal_code?: true
    category?: true
    _all?: true
  }

  export type InstitutionAggregateArgs = {
    /**
     * Filter which Institution to aggregate.
     * 
    **/
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     * 
    **/
    orderBy?: Enumerable<InstitutionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Institutions
    **/
    _count?: true | InstitutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstitutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstitutionMaxAggregateInputType
  }

  export type GetInstitutionAggregateType<T extends InstitutionAggregateArgs> = {
        [P in keyof T & keyof AggregateInstitution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstitution[P]>
      : GetScalarType<T[P], AggregateInstitution[P]>
  }




  export type InstitutionGroupByArgs = {
    where?: InstitutionWhereInput
    orderBy?: Enumerable<InstitutionOrderByWithAggregationInput>
    by: Array<InstitutionScalarFieldEnum>
    having?: InstitutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstitutionCountAggregateInputType | true
    _min?: InstitutionMinAggregateInputType
    _max?: InstitutionMaxAggregateInputType
  }


  export type InstitutionGroupByOutputType = {
    id: string
    name: string
    address: string
    city: string
    province: string
    postal_code: string
    category: InstitutionCategory
    _count: InstitutionCountAggregateOutputType | null
    _min: InstitutionMinAggregateOutputType | null
    _max: InstitutionMaxAggregateOutputType | null
  }

  type GetInstitutionGroupByPayload<T extends InstitutionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<InstitutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstitutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstitutionGroupByOutputType[P]>
            : GetScalarType<T[P], InstitutionGroupByOutputType[P]>
        }
      >
    >


  export type InstitutionSelect = {
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    province?: boolean
    postal_code?: boolean
    category?: boolean
    scholarship?: boolean | ScholarshipFindManyArgs
    Squad?: boolean | SquadFindManyArgs
    _count?: boolean | InstitutionCountOutputTypeArgs
  }


  export type InstitutionInclude = {
    scholarship?: boolean | ScholarshipFindManyArgs
    Squad?: boolean | SquadFindManyArgs
    _count?: boolean | InstitutionCountOutputTypeArgs
  } 

  export type InstitutionGetPayload<S extends boolean | null | undefined | InstitutionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Institution :
    S extends undefined ? never :
    S extends { include: any } & (InstitutionArgs | InstitutionFindManyArgs)
    ? Institution  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'scholarship' ? Array < ScholarshipGetPayload<S['include'][P]>>  :
        P extends 'Squad' ? Array < SquadGetPayload<S['include'][P]>>  :
        P extends '_count' ? InstitutionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (InstitutionArgs | InstitutionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'scholarship' ? Array < ScholarshipGetPayload<S['select'][P]>>  :
        P extends 'Squad' ? Array < SquadGetPayload<S['select'][P]>>  :
        P extends '_count' ? InstitutionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Institution ? Institution[P] : never
  } 
      : Institution


  type InstitutionCountArgs = Merge<
    Omit<InstitutionFindManyArgs, 'select' | 'include'> & {
      select?: InstitutionCountAggregateInputType | true
    }
  >

  export interface InstitutionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Institution that matches the filter.
     * @param {InstitutionFindUniqueArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InstitutionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, InstitutionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Institution'> extends True ? Prisma__InstitutionClient<InstitutionGetPayload<T>> : Prisma__InstitutionClient<InstitutionGetPayload<T> | null, null>

    /**
     * Find one Institution that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InstitutionFindUniqueOrThrowArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InstitutionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, InstitutionFindUniqueOrThrowArgs>
    ): Prisma__InstitutionClient<InstitutionGetPayload<T>>

    /**
     * Find the first Institution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionFindFirstArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InstitutionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, InstitutionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Institution'> extends True ? Prisma__InstitutionClient<InstitutionGetPayload<T>> : Prisma__InstitutionClient<InstitutionGetPayload<T> | null, null>

    /**
     * Find the first Institution that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionFindFirstOrThrowArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InstitutionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, InstitutionFindFirstOrThrowArgs>
    ): Prisma__InstitutionClient<InstitutionGetPayload<T>>

    /**
     * Find zero or more Institutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Institutions
     * const institutions = await prisma.institution.findMany()
     * 
     * // Get first 10 Institutions
     * const institutions = await prisma.institution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const institutionWithIdOnly = await prisma.institution.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InstitutionFindManyArgs>(
      args?: SelectSubset<T, InstitutionFindManyArgs>
    ): PrismaPromise<Array<InstitutionGetPayload<T>>>

    /**
     * Create a Institution.
     * @param {InstitutionCreateArgs} args - Arguments to create a Institution.
     * @example
     * // Create one Institution
     * const Institution = await prisma.institution.create({
     *   data: {
     *     // ... data to create a Institution
     *   }
     * })
     * 
    **/
    create<T extends InstitutionCreateArgs>(
      args: SelectSubset<T, InstitutionCreateArgs>
    ): Prisma__InstitutionClient<InstitutionGetPayload<T>>

    /**
     * Create many Institutions.
     *     @param {InstitutionCreateManyArgs} args - Arguments to create many Institutions.
     *     @example
     *     // Create many Institutions
     *     const institution = await prisma.institution.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InstitutionCreateManyArgs>(
      args?: SelectSubset<T, InstitutionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Institution.
     * @param {InstitutionDeleteArgs} args - Arguments to delete one Institution.
     * @example
     * // Delete one Institution
     * const Institution = await prisma.institution.delete({
     *   where: {
     *     // ... filter to delete one Institution
     *   }
     * })
     * 
    **/
    delete<T extends InstitutionDeleteArgs>(
      args: SelectSubset<T, InstitutionDeleteArgs>
    ): Prisma__InstitutionClient<InstitutionGetPayload<T>>

    /**
     * Update one Institution.
     * @param {InstitutionUpdateArgs} args - Arguments to update one Institution.
     * @example
     * // Update one Institution
     * const institution = await prisma.institution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InstitutionUpdateArgs>(
      args: SelectSubset<T, InstitutionUpdateArgs>
    ): Prisma__InstitutionClient<InstitutionGetPayload<T>>

    /**
     * Delete zero or more Institutions.
     * @param {InstitutionDeleteManyArgs} args - Arguments to filter Institutions to delete.
     * @example
     * // Delete a few Institutions
     * const { count } = await prisma.institution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InstitutionDeleteManyArgs>(
      args?: SelectSubset<T, InstitutionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Institutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Institutions
     * const institution = await prisma.institution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InstitutionUpdateManyArgs>(
      args: SelectSubset<T, InstitutionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Institution.
     * @param {InstitutionUpsertArgs} args - Arguments to update or create a Institution.
     * @example
     * // Update or create a Institution
     * const institution = await prisma.institution.upsert({
     *   create: {
     *     // ... data to create a Institution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Institution we want to update
     *   }
     * })
    **/
    upsert<T extends InstitutionUpsertArgs>(
      args: SelectSubset<T, InstitutionUpsertArgs>
    ): Prisma__InstitutionClient<InstitutionGetPayload<T>>

    /**
     * Count the number of Institutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionCountArgs} args - Arguments to filter Institutions to count.
     * @example
     * // Count the number of Institutions
     * const count = await prisma.institution.count({
     *   where: {
     *     // ... the filter for the Institutions we want to count
     *   }
     * })
    **/
    count<T extends InstitutionCountArgs>(
      args?: Subset<T, InstitutionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstitutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Institution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstitutionAggregateArgs>(args: Subset<T, InstitutionAggregateArgs>): PrismaPromise<GetInstitutionAggregateType<T>>

    /**
     * Group by Institution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InstitutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstitutionGroupByArgs['orderBy'] }
        : { orderBy?: InstitutionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InstitutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstitutionGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Institution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__InstitutionClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    scholarship<T extends ScholarshipFindManyArgs= {}>(args?: Subset<T, ScholarshipFindManyArgs>): PrismaPromise<Array<ScholarshipGetPayload<T>>| Null>;

    Squad<T extends SquadFindManyArgs= {}>(args?: Subset<T, SquadFindManyArgs>): PrismaPromise<Array<SquadGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Institution base type for findUnique actions
   */
  export type InstitutionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Institution
     * 
    **/
    select?: InstitutionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstitutionInclude | null
    /**
     * Filter, which Institution to fetch.
     * 
    **/
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution: findUnique
   */
  export interface InstitutionFindUniqueArgs extends InstitutionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Institution findUniqueOrThrow
   */
  export type InstitutionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Institution
     * 
    **/
    select?: InstitutionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstitutionInclude | null
    /**
     * Filter, which Institution to fetch.
     * 
    **/
    where: InstitutionWhereUniqueInput
  }


  /**
   * Institution base type for findFirst actions
   */
  export type InstitutionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Institution
     * 
    **/
    select?: InstitutionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstitutionInclude | null
    /**
     * Filter, which Institution to fetch.
     * 
    **/
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     * 
    **/
    orderBy?: Enumerable<InstitutionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Institutions.
     * 
    **/
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Institutions.
     * 
    **/
    distinct?: Enumerable<InstitutionScalarFieldEnum>
  }

  /**
   * Institution: findFirst
   */
  export interface InstitutionFindFirstArgs extends InstitutionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Institution findFirstOrThrow
   */
  export type InstitutionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Institution
     * 
    **/
    select?: InstitutionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstitutionInclude | null
    /**
     * Filter, which Institution to fetch.
     * 
    **/
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     * 
    **/
    orderBy?: Enumerable<InstitutionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Institutions.
     * 
    **/
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Institutions.
     * 
    **/
    distinct?: Enumerable<InstitutionScalarFieldEnum>
  }


  /**
   * Institution findMany
   */
  export type InstitutionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Institution
     * 
    **/
    select?: InstitutionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstitutionInclude | null
    /**
     * Filter, which Institutions to fetch.
     * 
    **/
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     * 
    **/
    orderBy?: Enumerable<InstitutionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Institutions.
     * 
    **/
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<InstitutionScalarFieldEnum>
  }


  /**
   * Institution create
   */
  export type InstitutionCreateArgs = {
    /**
     * Select specific fields to fetch from the Institution
     * 
    **/
    select?: InstitutionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstitutionInclude | null
    /**
     * The data needed to create a Institution.
     * 
    **/
    data: XOR<InstitutionCreateInput, InstitutionUncheckedCreateInput>
  }


  /**
   * Institution createMany
   */
  export type InstitutionCreateManyArgs = {
    /**
     * The data used to create many Institutions.
     * 
    **/
    data: Enumerable<InstitutionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Institution update
   */
  export type InstitutionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Institution
     * 
    **/
    select?: InstitutionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstitutionInclude | null
    /**
     * The data needed to update a Institution.
     * 
    **/
    data: XOR<InstitutionUpdateInput, InstitutionUncheckedUpdateInput>
    /**
     * Choose, which Institution to update.
     * 
    **/
    where: InstitutionWhereUniqueInput
  }


  /**
   * Institution updateMany
   */
  export type InstitutionUpdateManyArgs = {
    /**
     * The data used to update Institutions.
     * 
    **/
    data: XOR<InstitutionUpdateManyMutationInput, InstitutionUncheckedUpdateManyInput>
    /**
     * Filter which Institutions to update
     * 
    **/
    where?: InstitutionWhereInput
  }


  /**
   * Institution upsert
   */
  export type InstitutionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Institution
     * 
    **/
    select?: InstitutionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstitutionInclude | null
    /**
     * The filter to search for the Institution to update in case it exists.
     * 
    **/
    where: InstitutionWhereUniqueInput
    /**
     * In case the Institution found by the `where` argument doesn't exist, create a new Institution with this data.
     * 
    **/
    create: XOR<InstitutionCreateInput, InstitutionUncheckedCreateInput>
    /**
     * In case the Institution was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<InstitutionUpdateInput, InstitutionUncheckedUpdateInput>
  }


  /**
   * Institution delete
   */
  export type InstitutionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Institution
     * 
    **/
    select?: InstitutionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstitutionInclude | null
    /**
     * Filter which Institution to delete.
     * 
    **/
    where: InstitutionWhereUniqueInput
  }


  /**
   * Institution deleteMany
   */
  export type InstitutionDeleteManyArgs = {
    /**
     * Filter which Institutions to delete
     * 
    **/
    where?: InstitutionWhereInput
  }


  /**
   * Institution without action
   */
  export type InstitutionArgs = {
    /**
     * Select specific fields to fetch from the Institution
     * 
    **/
    select?: InstitutionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstitutionInclude | null
  }



  /**
   * Model Location
   */


  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: LocationCategory | null
    streetAddress: string | null
    city: string | null
    province: string | null
    country: string | null
    postalCode: string | null
  }

  export type LocationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: LocationCategory | null
    streetAddress: string | null
    city: string | null
    province: string | null
    country: string | null
    postalCode: string | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    name: number
    category: number
    streetAddress: number
    city: number
    province: number
    country: number
    postalCode: number
    _all: number
  }


  export type LocationMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    streetAddress?: true
    city?: true
    province?: true
    country?: true
    postalCode?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    streetAddress?: true
    city?: true
    province?: true
    country?: true
    postalCode?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    streetAddress?: true
    city?: true
    province?: true
    country?: true
    postalCode?: true
    _all?: true
  }

  export type LocationAggregateArgs = {
    /**
     * Filter which Location to aggregate.
     * 
    **/
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     * 
    **/
    orderBy?: Enumerable<LocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs = {
    where?: LocationWhereInput
    orderBy?: Enumerable<LocationOrderByWithAggregationInput>
    by: Array<LocationScalarFieldEnum>
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }


  export type LocationGroupByOutputType = {
    id: string
    name: string
    category: LocationCategory
    streetAddress: string
    city: string
    province: string
    country: string
    postalCode: string
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect = {
    id?: boolean
    name?: boolean
    category?: boolean
    streetAddress?: boolean
    city?: boolean
    province?: boolean
    country?: boolean
    postalCode?: boolean
    game?: boolean | GameFindManyArgs
    Squad?: boolean | SquadFindManyArgs
    _count?: boolean | LocationCountOutputTypeArgs
  }


  export type LocationInclude = {
    game?: boolean | GameFindManyArgs
    Squad?: boolean | SquadFindManyArgs
    _count?: boolean | LocationCountOutputTypeArgs
  } 

  export type LocationGetPayload<S extends boolean | null | undefined | LocationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Location :
    S extends undefined ? never :
    S extends { include: any } & (LocationArgs | LocationFindManyArgs)
    ? Location  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'game' ? Array < GameGetPayload<S['include'][P]>>  :
        P extends 'Squad' ? Array < SquadGetPayload<S['include'][P]>>  :
        P extends '_count' ? LocationCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (LocationArgs | LocationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'game' ? Array < GameGetPayload<S['select'][P]>>  :
        P extends 'Squad' ? Array < SquadGetPayload<S['select'][P]>>  :
        P extends '_count' ? LocationCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Location ? Location[P] : never
  } 
      : Location


  type LocationCountArgs = Merge<
    Omit<LocationFindManyArgs, 'select' | 'include'> & {
      select?: LocationCountAggregateInputType | true
    }
  >

  export interface LocationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LocationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LocationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Location'> extends True ? Prisma__LocationClient<LocationGetPayload<T>> : Prisma__LocationClient<LocationGetPayload<T> | null, null>

    /**
     * Find one Location that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, LocationFindUniqueOrThrowArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LocationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LocationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Location'> extends True ? Prisma__LocationClient<LocationGetPayload<T>> : Prisma__LocationClient<LocationGetPayload<T> | null, null>

    /**
     * Find the first Location that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LocationFindFirstOrThrowArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LocationFindManyArgs>(
      args?: SelectSubset<T, LocationFindManyArgs>
    ): PrismaPromise<Array<LocationGetPayload<T>>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
    **/
    create<T extends LocationCreateArgs>(
      args: SelectSubset<T, LocationCreateArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Create many Locations.
     *     @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     *     @example
     *     // Create many Locations
     *     const location = await prisma.location.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LocationCreateManyArgs>(
      args?: SelectSubset<T, LocationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
    **/
    delete<T extends LocationDeleteArgs>(
      args: SelectSubset<T, LocationDeleteArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LocationUpdateArgs>(
      args: SelectSubset<T, LocationUpdateArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LocationDeleteManyArgs>(
      args?: SelectSubset<T, LocationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LocationUpdateManyArgs>(
      args: SelectSubset<T, LocationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
    **/
    upsert<T extends LocationUpsertArgs>(
      args: SelectSubset<T, LocationUpsertArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LocationClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    game<T extends GameFindManyArgs= {}>(args?: Subset<T, GameFindManyArgs>): PrismaPromise<Array<GameGetPayload<T>>| Null>;

    Squad<T extends SquadFindManyArgs= {}>(args?: Subset<T, SquadFindManyArgs>): PrismaPromise<Array<SquadGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Location base type for findUnique actions
   */
  export type LocationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Location
     * 
    **/
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LocationInclude | null
    /**
     * Filter, which Location to fetch.
     * 
    **/
    where: LocationWhereUniqueInput
  }

  /**
   * Location: findUnique
   */
  export interface LocationFindUniqueArgs extends LocationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Location
     * 
    **/
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LocationInclude | null
    /**
     * Filter, which Location to fetch.
     * 
    **/
    where: LocationWhereUniqueInput
  }


  /**
   * Location base type for findFirst actions
   */
  export type LocationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Location
     * 
    **/
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LocationInclude | null
    /**
     * Filter, which Location to fetch.
     * 
    **/
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     * 
    **/
    orderBy?: Enumerable<LocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     * 
    **/
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     * 
    **/
    distinct?: Enumerable<LocationScalarFieldEnum>
  }

  /**
   * Location: findFirst
   */
  export interface LocationFindFirstArgs extends LocationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Location
     * 
    **/
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LocationInclude | null
    /**
     * Filter, which Location to fetch.
     * 
    **/
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     * 
    **/
    orderBy?: Enumerable<LocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     * 
    **/
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     * 
    **/
    distinct?: Enumerable<LocationScalarFieldEnum>
  }


  /**
   * Location findMany
   */
  export type LocationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Location
     * 
    **/
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LocationInclude | null
    /**
     * Filter, which Locations to fetch.
     * 
    **/
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     * 
    **/
    orderBy?: Enumerable<LocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     * 
    **/
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     * 
    **/
    skip?: number
    distinct?: Enumerable<LocationScalarFieldEnum>
  }


  /**
   * Location create
   */
  export type LocationCreateArgs = {
    /**
     * Select specific fields to fetch from the Location
     * 
    **/
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LocationInclude | null
    /**
     * The data needed to create a Location.
     * 
    **/
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }


  /**
   * Location createMany
   */
  export type LocationCreateManyArgs = {
    /**
     * The data used to create many Locations.
     * 
    **/
    data: Enumerable<LocationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Location update
   */
  export type LocationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Location
     * 
    **/
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LocationInclude | null
    /**
     * The data needed to update a Location.
     * 
    **/
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     * 
    **/
    where: LocationWhereUniqueInput
  }


  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs = {
    /**
     * The data used to update Locations.
     * 
    **/
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     * 
    **/
    where?: LocationWhereInput
  }


  /**
   * Location upsert
   */
  export type LocationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Location
     * 
    **/
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LocationInclude | null
    /**
     * The filter to search for the Location to update in case it exists.
     * 
    **/
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     * 
    **/
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }


  /**
   * Location delete
   */
  export type LocationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Location
     * 
    **/
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LocationInclude | null
    /**
     * Filter which Location to delete.
     * 
    **/
    where: LocationWhereUniqueInput
  }


  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs = {
    /**
     * Filter which Locations to delete
     * 
    **/
    where?: LocationWhereInput
  }


  /**
   * Location without action
   */
  export type LocationArgs = {
    /**
     * Select specific fields to fetch from the Location
     * 
    **/
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LocationInclude | null
  }



  /**
   * Model Squad
   */


  export type AggregateSquad = {
    _count: SquadCountAggregateOutputType | null
    _min: SquadMinAggregateOutputType | null
    _max: SquadMaxAggregateOutputType | null
  }

  export type SquadMinAggregateOutputType = {
    id: string | null
    name: string | null
    institutionId: string | null
    homeColor: string | null
    awayColor: string | null
    locationId: string | null
  }

  export type SquadMaxAggregateOutputType = {
    id: string | null
    name: string | null
    institutionId: string | null
    homeColor: string | null
    awayColor: string | null
    locationId: string | null
  }

  export type SquadCountAggregateOutputType = {
    id: number
    name: number
    institutionId: number
    homeColor: number
    awayColor: number
    locationId: number
    _all: number
  }


  export type SquadMinAggregateInputType = {
    id?: true
    name?: true
    institutionId?: true
    homeColor?: true
    awayColor?: true
    locationId?: true
  }

  export type SquadMaxAggregateInputType = {
    id?: true
    name?: true
    institutionId?: true
    homeColor?: true
    awayColor?: true
    locationId?: true
  }

  export type SquadCountAggregateInputType = {
    id?: true
    name?: true
    institutionId?: true
    homeColor?: true
    awayColor?: true
    locationId?: true
    _all?: true
  }

  export type SquadAggregateArgs = {
    /**
     * Filter which Squad to aggregate.
     * 
    **/
    where?: SquadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Squads to fetch.
     * 
    **/
    orderBy?: Enumerable<SquadOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SquadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Squads from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Squads.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Squads
    **/
    _count?: true | SquadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SquadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SquadMaxAggregateInputType
  }

  export type GetSquadAggregateType<T extends SquadAggregateArgs> = {
        [P in keyof T & keyof AggregateSquad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSquad[P]>
      : GetScalarType<T[P], AggregateSquad[P]>
  }




  export type SquadGroupByArgs = {
    where?: SquadWhereInput
    orderBy?: Enumerable<SquadOrderByWithAggregationInput>
    by: Array<SquadScalarFieldEnum>
    having?: SquadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SquadCountAggregateInputType | true
    _min?: SquadMinAggregateInputType
    _max?: SquadMaxAggregateInputType
  }


  export type SquadGroupByOutputType = {
    id: string
    name: string
    institutionId: string
    homeColor: string | null
    awayColor: string | null
    locationId: string | null
    _count: SquadCountAggregateOutputType | null
    _min: SquadMinAggregateOutputType | null
    _max: SquadMaxAggregateOutputType | null
  }

  type GetSquadGroupByPayload<T extends SquadGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SquadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SquadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SquadGroupByOutputType[P]>
            : GetScalarType<T[P], SquadGroupByOutputType[P]>
        }
      >
    >


  export type SquadSelect = {
    id?: boolean
    name?: boolean
    players?: boolean | PlayerFindManyArgs
    institution?: boolean | InstitutionArgs
    staff?: boolean | StaffFindManyArgs
    competition?: boolean | CompetitionFindManyArgs
    institutionId?: boolean
    home?: boolean | LocationArgs
    homeColor?: boolean
    awayColor?: boolean
    Team?: boolean | TeamFindManyArgs
    locationId?: boolean
    _count?: boolean | SquadCountOutputTypeArgs
  }


  export type SquadInclude = {
    players?: boolean | PlayerFindManyArgs
    institution?: boolean | InstitutionArgs
    staff?: boolean | StaffFindManyArgs
    competition?: boolean | CompetitionFindManyArgs
    home?: boolean | LocationArgs
    Team?: boolean | TeamFindManyArgs
    _count?: boolean | SquadCountOutputTypeArgs
  } 

  export type SquadGetPayload<S extends boolean | null | undefined | SquadArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Squad :
    S extends undefined ? never :
    S extends { include: any } & (SquadArgs | SquadFindManyArgs)
    ? Squad  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'players' ? Array < PlayerGetPayload<S['include'][P]>>  :
        P extends 'institution' ? InstitutionGetPayload<S['include'][P]> :
        P extends 'staff' ? Array < StaffGetPayload<S['include'][P]>>  :
        P extends 'competition' ? Array < CompetitionGetPayload<S['include'][P]>>  :
        P extends 'home' ? LocationGetPayload<S['include'][P]> | null :
        P extends 'Team' ? Array < TeamGetPayload<S['include'][P]>>  :
        P extends '_count' ? SquadCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (SquadArgs | SquadFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'players' ? Array < PlayerGetPayload<S['select'][P]>>  :
        P extends 'institution' ? InstitutionGetPayload<S['select'][P]> :
        P extends 'staff' ? Array < StaffGetPayload<S['select'][P]>>  :
        P extends 'competition' ? Array < CompetitionGetPayload<S['select'][P]>>  :
        P extends 'home' ? LocationGetPayload<S['select'][P]> | null :
        P extends 'Team' ? Array < TeamGetPayload<S['select'][P]>>  :
        P extends '_count' ? SquadCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Squad ? Squad[P] : never
  } 
      : Squad


  type SquadCountArgs = Merge<
    Omit<SquadFindManyArgs, 'select' | 'include'> & {
      select?: SquadCountAggregateInputType | true
    }
  >

  export interface SquadDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Squad that matches the filter.
     * @param {SquadFindUniqueArgs} args - Arguments to find a Squad
     * @example
     * // Get one Squad
     * const squad = await prisma.squad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SquadFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SquadFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Squad'> extends True ? Prisma__SquadClient<SquadGetPayload<T>> : Prisma__SquadClient<SquadGetPayload<T> | null, null>

    /**
     * Find one Squad that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SquadFindUniqueOrThrowArgs} args - Arguments to find a Squad
     * @example
     * // Get one Squad
     * const squad = await prisma.squad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SquadFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SquadFindUniqueOrThrowArgs>
    ): Prisma__SquadClient<SquadGetPayload<T>>

    /**
     * Find the first Squad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SquadFindFirstArgs} args - Arguments to find a Squad
     * @example
     * // Get one Squad
     * const squad = await prisma.squad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SquadFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SquadFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Squad'> extends True ? Prisma__SquadClient<SquadGetPayload<T>> : Prisma__SquadClient<SquadGetPayload<T> | null, null>

    /**
     * Find the first Squad that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SquadFindFirstOrThrowArgs} args - Arguments to find a Squad
     * @example
     * // Get one Squad
     * const squad = await prisma.squad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SquadFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SquadFindFirstOrThrowArgs>
    ): Prisma__SquadClient<SquadGetPayload<T>>

    /**
     * Find zero or more Squads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SquadFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Squads
     * const squads = await prisma.squad.findMany()
     * 
     * // Get first 10 Squads
     * const squads = await prisma.squad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const squadWithIdOnly = await prisma.squad.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SquadFindManyArgs>(
      args?: SelectSubset<T, SquadFindManyArgs>
    ): PrismaPromise<Array<SquadGetPayload<T>>>

    /**
     * Create a Squad.
     * @param {SquadCreateArgs} args - Arguments to create a Squad.
     * @example
     * // Create one Squad
     * const Squad = await prisma.squad.create({
     *   data: {
     *     // ... data to create a Squad
     *   }
     * })
     * 
    **/
    create<T extends SquadCreateArgs>(
      args: SelectSubset<T, SquadCreateArgs>
    ): Prisma__SquadClient<SquadGetPayload<T>>

    /**
     * Create many Squads.
     *     @param {SquadCreateManyArgs} args - Arguments to create many Squads.
     *     @example
     *     // Create many Squads
     *     const squad = await prisma.squad.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SquadCreateManyArgs>(
      args?: SelectSubset<T, SquadCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Squad.
     * @param {SquadDeleteArgs} args - Arguments to delete one Squad.
     * @example
     * // Delete one Squad
     * const Squad = await prisma.squad.delete({
     *   where: {
     *     // ... filter to delete one Squad
     *   }
     * })
     * 
    **/
    delete<T extends SquadDeleteArgs>(
      args: SelectSubset<T, SquadDeleteArgs>
    ): Prisma__SquadClient<SquadGetPayload<T>>

    /**
     * Update one Squad.
     * @param {SquadUpdateArgs} args - Arguments to update one Squad.
     * @example
     * // Update one Squad
     * const squad = await prisma.squad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SquadUpdateArgs>(
      args: SelectSubset<T, SquadUpdateArgs>
    ): Prisma__SquadClient<SquadGetPayload<T>>

    /**
     * Delete zero or more Squads.
     * @param {SquadDeleteManyArgs} args - Arguments to filter Squads to delete.
     * @example
     * // Delete a few Squads
     * const { count } = await prisma.squad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SquadDeleteManyArgs>(
      args?: SelectSubset<T, SquadDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Squads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SquadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Squads
     * const squad = await prisma.squad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SquadUpdateManyArgs>(
      args: SelectSubset<T, SquadUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Squad.
     * @param {SquadUpsertArgs} args - Arguments to update or create a Squad.
     * @example
     * // Update or create a Squad
     * const squad = await prisma.squad.upsert({
     *   create: {
     *     // ... data to create a Squad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Squad we want to update
     *   }
     * })
    **/
    upsert<T extends SquadUpsertArgs>(
      args: SelectSubset<T, SquadUpsertArgs>
    ): Prisma__SquadClient<SquadGetPayload<T>>

    /**
     * Count the number of Squads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SquadCountArgs} args - Arguments to filter Squads to count.
     * @example
     * // Count the number of Squads
     * const count = await prisma.squad.count({
     *   where: {
     *     // ... the filter for the Squads we want to count
     *   }
     * })
    **/
    count<T extends SquadCountArgs>(
      args?: Subset<T, SquadCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SquadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Squad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SquadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SquadAggregateArgs>(args: Subset<T, SquadAggregateArgs>): PrismaPromise<GetSquadAggregateType<T>>

    /**
     * Group by Squad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SquadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SquadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SquadGroupByArgs['orderBy'] }
        : { orderBy?: SquadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SquadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSquadGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Squad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SquadClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    players<T extends PlayerFindManyArgs= {}>(args?: Subset<T, PlayerFindManyArgs>): PrismaPromise<Array<PlayerGetPayload<T>>| Null>;

    institution<T extends InstitutionArgs= {}>(args?: Subset<T, InstitutionArgs>): Prisma__InstitutionClient<InstitutionGetPayload<T> | Null>;

    staff<T extends StaffFindManyArgs= {}>(args?: Subset<T, StaffFindManyArgs>): PrismaPromise<Array<StaffGetPayload<T>>| Null>;

    competition<T extends CompetitionFindManyArgs= {}>(args?: Subset<T, CompetitionFindManyArgs>): PrismaPromise<Array<CompetitionGetPayload<T>>| Null>;

    home<T extends LocationArgs= {}>(args?: Subset<T, LocationArgs>): Prisma__LocationClient<LocationGetPayload<T> | Null>;

    Team<T extends TeamFindManyArgs= {}>(args?: Subset<T, TeamFindManyArgs>): PrismaPromise<Array<TeamGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Squad base type for findUnique actions
   */
  export type SquadFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Squad
     * 
    **/
    select?: SquadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SquadInclude | null
    /**
     * Filter, which Squad to fetch.
     * 
    **/
    where: SquadWhereUniqueInput
  }

  /**
   * Squad: findUnique
   */
  export interface SquadFindUniqueArgs extends SquadFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Squad findUniqueOrThrow
   */
  export type SquadFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Squad
     * 
    **/
    select?: SquadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SquadInclude | null
    /**
     * Filter, which Squad to fetch.
     * 
    **/
    where: SquadWhereUniqueInput
  }


  /**
   * Squad base type for findFirst actions
   */
  export type SquadFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Squad
     * 
    **/
    select?: SquadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SquadInclude | null
    /**
     * Filter, which Squad to fetch.
     * 
    **/
    where?: SquadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Squads to fetch.
     * 
    **/
    orderBy?: Enumerable<SquadOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Squads.
     * 
    **/
    cursor?: SquadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Squads from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Squads.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Squads.
     * 
    **/
    distinct?: Enumerable<SquadScalarFieldEnum>
  }

  /**
   * Squad: findFirst
   */
  export interface SquadFindFirstArgs extends SquadFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Squad findFirstOrThrow
   */
  export type SquadFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Squad
     * 
    **/
    select?: SquadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SquadInclude | null
    /**
     * Filter, which Squad to fetch.
     * 
    **/
    where?: SquadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Squads to fetch.
     * 
    **/
    orderBy?: Enumerable<SquadOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Squads.
     * 
    **/
    cursor?: SquadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Squads from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Squads.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Squads.
     * 
    **/
    distinct?: Enumerable<SquadScalarFieldEnum>
  }


  /**
   * Squad findMany
   */
  export type SquadFindManyArgs = {
    /**
     * Select specific fields to fetch from the Squad
     * 
    **/
    select?: SquadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SquadInclude | null
    /**
     * Filter, which Squads to fetch.
     * 
    **/
    where?: SquadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Squads to fetch.
     * 
    **/
    orderBy?: Enumerable<SquadOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Squads.
     * 
    **/
    cursor?: SquadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Squads from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Squads.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SquadScalarFieldEnum>
  }


  /**
   * Squad create
   */
  export type SquadCreateArgs = {
    /**
     * Select specific fields to fetch from the Squad
     * 
    **/
    select?: SquadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SquadInclude | null
    /**
     * The data needed to create a Squad.
     * 
    **/
    data: XOR<SquadCreateInput, SquadUncheckedCreateInput>
  }


  /**
   * Squad createMany
   */
  export type SquadCreateManyArgs = {
    /**
     * The data used to create many Squads.
     * 
    **/
    data: Enumerable<SquadCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Squad update
   */
  export type SquadUpdateArgs = {
    /**
     * Select specific fields to fetch from the Squad
     * 
    **/
    select?: SquadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SquadInclude | null
    /**
     * The data needed to update a Squad.
     * 
    **/
    data: XOR<SquadUpdateInput, SquadUncheckedUpdateInput>
    /**
     * Choose, which Squad to update.
     * 
    **/
    where: SquadWhereUniqueInput
  }


  /**
   * Squad updateMany
   */
  export type SquadUpdateManyArgs = {
    /**
     * The data used to update Squads.
     * 
    **/
    data: XOR<SquadUpdateManyMutationInput, SquadUncheckedUpdateManyInput>
    /**
     * Filter which Squads to update
     * 
    **/
    where?: SquadWhereInput
  }


  /**
   * Squad upsert
   */
  export type SquadUpsertArgs = {
    /**
     * Select specific fields to fetch from the Squad
     * 
    **/
    select?: SquadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SquadInclude | null
    /**
     * The filter to search for the Squad to update in case it exists.
     * 
    **/
    where: SquadWhereUniqueInput
    /**
     * In case the Squad found by the `where` argument doesn't exist, create a new Squad with this data.
     * 
    **/
    create: XOR<SquadCreateInput, SquadUncheckedCreateInput>
    /**
     * In case the Squad was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SquadUpdateInput, SquadUncheckedUpdateInput>
  }


  /**
   * Squad delete
   */
  export type SquadDeleteArgs = {
    /**
     * Select specific fields to fetch from the Squad
     * 
    **/
    select?: SquadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SquadInclude | null
    /**
     * Filter which Squad to delete.
     * 
    **/
    where: SquadWhereUniqueInput
  }


  /**
   * Squad deleteMany
   */
  export type SquadDeleteManyArgs = {
    /**
     * Filter which Squads to delete
     * 
    **/
    where?: SquadWhereInput
  }


  /**
   * Squad without action
   */
  export type SquadArgs = {
    /**
     * Select specific fields to fetch from the Squad
     * 
    **/
    select?: SquadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SquadInclude | null
  }



  /**
   * Model Competition
   */


  export type AggregateCompetition = {
    _count: CompetitionCountAggregateOutputType | null
    _min: CompetitionMinAggregateOutputType | null
    _max: CompetitionMaxAggregateOutputType | null
  }

  export type CompetitionMinAggregateOutputType = {
    id: string | null
    name: string | null
    sponsor: string | null
    type: CompetitionType | null
    seasonId: string | null
  }

  export type CompetitionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    sponsor: string | null
    type: CompetitionType | null
    seasonId: string | null
  }

  export type CompetitionCountAggregateOutputType = {
    id: number
    name: number
    sponsor: number
    type: number
    seasonId: number
    _all: number
  }


  export type CompetitionMinAggregateInputType = {
    id?: true
    name?: true
    sponsor?: true
    type?: true
    seasonId?: true
  }

  export type CompetitionMaxAggregateInputType = {
    id?: true
    name?: true
    sponsor?: true
    type?: true
    seasonId?: true
  }

  export type CompetitionCountAggregateInputType = {
    id?: true
    name?: true
    sponsor?: true
    type?: true
    seasonId?: true
    _all?: true
  }

  export type CompetitionAggregateArgs = {
    /**
     * Filter which Competition to aggregate.
     * 
    **/
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     * 
    **/
    orderBy?: Enumerable<CompetitionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Competitions
    **/
    _count?: true | CompetitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetitionMaxAggregateInputType
  }

  export type GetCompetitionAggregateType<T extends CompetitionAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetition[P]>
      : GetScalarType<T[P], AggregateCompetition[P]>
  }




  export type CompetitionGroupByArgs = {
    where?: CompetitionWhereInput
    orderBy?: Enumerable<CompetitionOrderByWithAggregationInput>
    by: Array<CompetitionScalarFieldEnum>
    having?: CompetitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetitionCountAggregateInputType | true
    _min?: CompetitionMinAggregateInputType
    _max?: CompetitionMaxAggregateInputType
  }


  export type CompetitionGroupByOutputType = {
    id: string
    name: string
    sponsor: string
    type: CompetitionType
    seasonId: string
    _count: CompetitionCountAggregateOutputType | null
    _min: CompetitionMinAggregateOutputType | null
    _max: CompetitionMaxAggregateOutputType | null
  }

  type GetCompetitionGroupByPayload<T extends CompetitionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CompetitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompetitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetitionGroupByOutputType[P]>
            : GetScalarType<T[P], CompetitionGroupByOutputType[P]>
        }
      >
    >


  export type CompetitionSelect = {
    id?: boolean
    name?: boolean
    sponsor?: boolean
    type?: boolean
    season?: boolean | SeasonArgs
    seasonId?: boolean
    Squad?: boolean | SquadFindManyArgs
    Game?: boolean | GameFindManyArgs
    _count?: boolean | CompetitionCountOutputTypeArgs
  }


  export type CompetitionInclude = {
    season?: boolean | SeasonArgs
    Squad?: boolean | SquadFindManyArgs
    Game?: boolean | GameFindManyArgs
    _count?: boolean | CompetitionCountOutputTypeArgs
  } 

  export type CompetitionGetPayload<S extends boolean | null | undefined | CompetitionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Competition :
    S extends undefined ? never :
    S extends { include: any } & (CompetitionArgs | CompetitionFindManyArgs)
    ? Competition  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'season' ? SeasonGetPayload<S['include'][P]> :
        P extends 'Squad' ? Array < SquadGetPayload<S['include'][P]>>  :
        P extends 'Game' ? Array < GameGetPayload<S['include'][P]>>  :
        P extends '_count' ? CompetitionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CompetitionArgs | CompetitionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'season' ? SeasonGetPayload<S['select'][P]> :
        P extends 'Squad' ? Array < SquadGetPayload<S['select'][P]>>  :
        P extends 'Game' ? Array < GameGetPayload<S['select'][P]>>  :
        P extends '_count' ? CompetitionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Competition ? Competition[P] : never
  } 
      : Competition


  type CompetitionCountArgs = Merge<
    Omit<CompetitionFindManyArgs, 'select' | 'include'> & {
      select?: CompetitionCountAggregateInputType | true
    }
  >

  export interface CompetitionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Competition that matches the filter.
     * @param {CompetitionFindUniqueArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CompetitionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CompetitionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Competition'> extends True ? Prisma__CompetitionClient<CompetitionGetPayload<T>> : Prisma__CompetitionClient<CompetitionGetPayload<T> | null, null>

    /**
     * Find one Competition that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CompetitionFindUniqueOrThrowArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CompetitionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CompetitionFindUniqueOrThrowArgs>
    ): Prisma__CompetitionClient<CompetitionGetPayload<T>>

    /**
     * Find the first Competition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFindFirstArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CompetitionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CompetitionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Competition'> extends True ? Prisma__CompetitionClient<CompetitionGetPayload<T>> : Prisma__CompetitionClient<CompetitionGetPayload<T> | null, null>

    /**
     * Find the first Competition that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFindFirstOrThrowArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CompetitionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CompetitionFindFirstOrThrowArgs>
    ): Prisma__CompetitionClient<CompetitionGetPayload<T>>

    /**
     * Find zero or more Competitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Competitions
     * const competitions = await prisma.competition.findMany()
     * 
     * // Get first 10 Competitions
     * const competitions = await prisma.competition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competitionWithIdOnly = await prisma.competition.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CompetitionFindManyArgs>(
      args?: SelectSubset<T, CompetitionFindManyArgs>
    ): PrismaPromise<Array<CompetitionGetPayload<T>>>

    /**
     * Create a Competition.
     * @param {CompetitionCreateArgs} args - Arguments to create a Competition.
     * @example
     * // Create one Competition
     * const Competition = await prisma.competition.create({
     *   data: {
     *     // ... data to create a Competition
     *   }
     * })
     * 
    **/
    create<T extends CompetitionCreateArgs>(
      args: SelectSubset<T, CompetitionCreateArgs>
    ): Prisma__CompetitionClient<CompetitionGetPayload<T>>

    /**
     * Create many Competitions.
     *     @param {CompetitionCreateManyArgs} args - Arguments to create many Competitions.
     *     @example
     *     // Create many Competitions
     *     const competition = await prisma.competition.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CompetitionCreateManyArgs>(
      args?: SelectSubset<T, CompetitionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Competition.
     * @param {CompetitionDeleteArgs} args - Arguments to delete one Competition.
     * @example
     * // Delete one Competition
     * const Competition = await prisma.competition.delete({
     *   where: {
     *     // ... filter to delete one Competition
     *   }
     * })
     * 
    **/
    delete<T extends CompetitionDeleteArgs>(
      args: SelectSubset<T, CompetitionDeleteArgs>
    ): Prisma__CompetitionClient<CompetitionGetPayload<T>>

    /**
     * Update one Competition.
     * @param {CompetitionUpdateArgs} args - Arguments to update one Competition.
     * @example
     * // Update one Competition
     * const competition = await prisma.competition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CompetitionUpdateArgs>(
      args: SelectSubset<T, CompetitionUpdateArgs>
    ): Prisma__CompetitionClient<CompetitionGetPayload<T>>

    /**
     * Delete zero or more Competitions.
     * @param {CompetitionDeleteManyArgs} args - Arguments to filter Competitions to delete.
     * @example
     * // Delete a few Competitions
     * const { count } = await prisma.competition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CompetitionDeleteManyArgs>(
      args?: SelectSubset<T, CompetitionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Competitions
     * const competition = await prisma.competition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CompetitionUpdateManyArgs>(
      args: SelectSubset<T, CompetitionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Competition.
     * @param {CompetitionUpsertArgs} args - Arguments to update or create a Competition.
     * @example
     * // Update or create a Competition
     * const competition = await prisma.competition.upsert({
     *   create: {
     *     // ... data to create a Competition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Competition we want to update
     *   }
     * })
    **/
    upsert<T extends CompetitionUpsertArgs>(
      args: SelectSubset<T, CompetitionUpsertArgs>
    ): Prisma__CompetitionClient<CompetitionGetPayload<T>>

    /**
     * Count the number of Competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionCountArgs} args - Arguments to filter Competitions to count.
     * @example
     * // Count the number of Competitions
     * const count = await prisma.competition.count({
     *   where: {
     *     // ... the filter for the Competitions we want to count
     *   }
     * })
    **/
    count<T extends CompetitionCountArgs>(
      args?: Subset<T, CompetitionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Competition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompetitionAggregateArgs>(args: Subset<T, CompetitionAggregateArgs>): PrismaPromise<GetCompetitionAggregateType<T>>

    /**
     * Group by Competition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompetitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompetitionGroupByArgs['orderBy'] }
        : { orderBy?: CompetitionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompetitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetitionGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Competition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CompetitionClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    season<T extends SeasonArgs= {}>(args?: Subset<T, SeasonArgs>): Prisma__SeasonClient<SeasonGetPayload<T> | Null>;

    Squad<T extends SquadFindManyArgs= {}>(args?: Subset<T, SquadFindManyArgs>): PrismaPromise<Array<SquadGetPayload<T>>| Null>;

    Game<T extends GameFindManyArgs= {}>(args?: Subset<T, GameFindManyArgs>): PrismaPromise<Array<GameGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Competition base type for findUnique actions
   */
  export type CompetitionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Competition
     * 
    **/
    select?: CompetitionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompetitionInclude | null
    /**
     * Filter, which Competition to fetch.
     * 
    **/
    where: CompetitionWhereUniqueInput
  }

  /**
   * Competition: findUnique
   */
  export interface CompetitionFindUniqueArgs extends CompetitionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Competition findUniqueOrThrow
   */
  export type CompetitionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Competition
     * 
    **/
    select?: CompetitionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompetitionInclude | null
    /**
     * Filter, which Competition to fetch.
     * 
    **/
    where: CompetitionWhereUniqueInput
  }


  /**
   * Competition base type for findFirst actions
   */
  export type CompetitionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Competition
     * 
    **/
    select?: CompetitionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompetitionInclude | null
    /**
     * Filter, which Competition to fetch.
     * 
    **/
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     * 
    **/
    orderBy?: Enumerable<CompetitionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competitions.
     * 
    **/
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitions.
     * 
    **/
    distinct?: Enumerable<CompetitionScalarFieldEnum>
  }

  /**
   * Competition: findFirst
   */
  export interface CompetitionFindFirstArgs extends CompetitionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Competition findFirstOrThrow
   */
  export type CompetitionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Competition
     * 
    **/
    select?: CompetitionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompetitionInclude | null
    /**
     * Filter, which Competition to fetch.
     * 
    **/
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     * 
    **/
    orderBy?: Enumerable<CompetitionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competitions.
     * 
    **/
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitions.
     * 
    **/
    distinct?: Enumerable<CompetitionScalarFieldEnum>
  }


  /**
   * Competition findMany
   */
  export type CompetitionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Competition
     * 
    **/
    select?: CompetitionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompetitionInclude | null
    /**
     * Filter, which Competitions to fetch.
     * 
    **/
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     * 
    **/
    orderBy?: Enumerable<CompetitionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Competitions.
     * 
    **/
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CompetitionScalarFieldEnum>
  }


  /**
   * Competition create
   */
  export type CompetitionCreateArgs = {
    /**
     * Select specific fields to fetch from the Competition
     * 
    **/
    select?: CompetitionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompetitionInclude | null
    /**
     * The data needed to create a Competition.
     * 
    **/
    data: XOR<CompetitionCreateInput, CompetitionUncheckedCreateInput>
  }


  /**
   * Competition createMany
   */
  export type CompetitionCreateManyArgs = {
    /**
     * The data used to create many Competitions.
     * 
    **/
    data: Enumerable<CompetitionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Competition update
   */
  export type CompetitionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Competition
     * 
    **/
    select?: CompetitionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompetitionInclude | null
    /**
     * The data needed to update a Competition.
     * 
    **/
    data: XOR<CompetitionUpdateInput, CompetitionUncheckedUpdateInput>
    /**
     * Choose, which Competition to update.
     * 
    **/
    where: CompetitionWhereUniqueInput
  }


  /**
   * Competition updateMany
   */
  export type CompetitionUpdateManyArgs = {
    /**
     * The data used to update Competitions.
     * 
    **/
    data: XOR<CompetitionUpdateManyMutationInput, CompetitionUncheckedUpdateManyInput>
    /**
     * Filter which Competitions to update
     * 
    **/
    where?: CompetitionWhereInput
  }


  /**
   * Competition upsert
   */
  export type CompetitionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Competition
     * 
    **/
    select?: CompetitionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompetitionInclude | null
    /**
     * The filter to search for the Competition to update in case it exists.
     * 
    **/
    where: CompetitionWhereUniqueInput
    /**
     * In case the Competition found by the `where` argument doesn't exist, create a new Competition with this data.
     * 
    **/
    create: XOR<CompetitionCreateInput, CompetitionUncheckedCreateInput>
    /**
     * In case the Competition was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CompetitionUpdateInput, CompetitionUncheckedUpdateInput>
  }


  /**
   * Competition delete
   */
  export type CompetitionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Competition
     * 
    **/
    select?: CompetitionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompetitionInclude | null
    /**
     * Filter which Competition to delete.
     * 
    **/
    where: CompetitionWhereUniqueInput
  }


  /**
   * Competition deleteMany
   */
  export type CompetitionDeleteManyArgs = {
    /**
     * Filter which Competitions to delete
     * 
    **/
    where?: CompetitionWhereInput
  }


  /**
   * Competition without action
   */
  export type CompetitionArgs = {
    /**
     * Select specific fields to fetch from the Competition
     * 
    **/
    select?: CompetitionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompetitionInclude | null
  }



  /**
   * Model Season
   */


  export type AggregateSeason = {
    _count: SeasonCountAggregateOutputType | null
    _min: SeasonMinAggregateOutputType | null
    _max: SeasonMaxAggregateOutputType | null
  }

  export type SeasonMinAggregateOutputType = {
    id: string | null
    startDate: Date | null
    endDate: Date | null
  }

  export type SeasonMaxAggregateOutputType = {
    id: string | null
    startDate: Date | null
    endDate: Date | null
  }

  export type SeasonCountAggregateOutputType = {
    id: number
    startDate: number
    endDate: number
    _all: number
  }


  export type SeasonMinAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
  }

  export type SeasonMaxAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
  }

  export type SeasonCountAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    _all?: true
  }

  export type SeasonAggregateArgs = {
    /**
     * Filter which Season to aggregate.
     * 
    **/
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     * 
    **/
    orderBy?: Enumerable<SeasonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seasons
    **/
    _count?: true | SeasonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeasonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeasonMaxAggregateInputType
  }

  export type GetSeasonAggregateType<T extends SeasonAggregateArgs> = {
        [P in keyof T & keyof AggregateSeason]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeason[P]>
      : GetScalarType<T[P], AggregateSeason[P]>
  }




  export type SeasonGroupByArgs = {
    where?: SeasonWhereInput
    orderBy?: Enumerable<SeasonOrderByWithAggregationInput>
    by: Array<SeasonScalarFieldEnum>
    having?: SeasonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeasonCountAggregateInputType | true
    _min?: SeasonMinAggregateInputType
    _max?: SeasonMaxAggregateInputType
  }


  export type SeasonGroupByOutputType = {
    id: string
    startDate: Date
    endDate: Date
    _count: SeasonCountAggregateOutputType | null
    _min: SeasonMinAggregateOutputType | null
    _max: SeasonMaxAggregateOutputType | null
  }

  type GetSeasonGroupByPayload<T extends SeasonGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SeasonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeasonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeasonGroupByOutputType[P]>
            : GetScalarType<T[P], SeasonGroupByOutputType[P]>
        }
      >
    >


  export type SeasonSelect = {
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    Competition?: boolean | CompetitionFindManyArgs
    _count?: boolean | SeasonCountOutputTypeArgs
  }


  export type SeasonInclude = {
    Competition?: boolean | CompetitionFindManyArgs
    _count?: boolean | SeasonCountOutputTypeArgs
  } 

  export type SeasonGetPayload<S extends boolean | null | undefined | SeasonArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Season :
    S extends undefined ? never :
    S extends { include: any } & (SeasonArgs | SeasonFindManyArgs)
    ? Season  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Competition' ? Array < CompetitionGetPayload<S['include'][P]>>  :
        P extends '_count' ? SeasonCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (SeasonArgs | SeasonFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Competition' ? Array < CompetitionGetPayload<S['select'][P]>>  :
        P extends '_count' ? SeasonCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Season ? Season[P] : never
  } 
      : Season


  type SeasonCountArgs = Merge<
    Omit<SeasonFindManyArgs, 'select' | 'include'> & {
      select?: SeasonCountAggregateInputType | true
    }
  >

  export interface SeasonDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Season that matches the filter.
     * @param {SeasonFindUniqueArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SeasonFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SeasonFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Season'> extends True ? Prisma__SeasonClient<SeasonGetPayload<T>> : Prisma__SeasonClient<SeasonGetPayload<T> | null, null>

    /**
     * Find one Season that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SeasonFindUniqueOrThrowArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SeasonFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SeasonFindUniqueOrThrowArgs>
    ): Prisma__SeasonClient<SeasonGetPayload<T>>

    /**
     * Find the first Season that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonFindFirstArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SeasonFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SeasonFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Season'> extends True ? Prisma__SeasonClient<SeasonGetPayload<T>> : Prisma__SeasonClient<SeasonGetPayload<T> | null, null>

    /**
     * Find the first Season that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonFindFirstOrThrowArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SeasonFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SeasonFindFirstOrThrowArgs>
    ): Prisma__SeasonClient<SeasonGetPayload<T>>

    /**
     * Find zero or more Seasons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seasons
     * const seasons = await prisma.season.findMany()
     * 
     * // Get first 10 Seasons
     * const seasons = await prisma.season.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seasonWithIdOnly = await prisma.season.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SeasonFindManyArgs>(
      args?: SelectSubset<T, SeasonFindManyArgs>
    ): PrismaPromise<Array<SeasonGetPayload<T>>>

    /**
     * Create a Season.
     * @param {SeasonCreateArgs} args - Arguments to create a Season.
     * @example
     * // Create one Season
     * const Season = await prisma.season.create({
     *   data: {
     *     // ... data to create a Season
     *   }
     * })
     * 
    **/
    create<T extends SeasonCreateArgs>(
      args: SelectSubset<T, SeasonCreateArgs>
    ): Prisma__SeasonClient<SeasonGetPayload<T>>

    /**
     * Create many Seasons.
     *     @param {SeasonCreateManyArgs} args - Arguments to create many Seasons.
     *     @example
     *     // Create many Seasons
     *     const season = await prisma.season.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SeasonCreateManyArgs>(
      args?: SelectSubset<T, SeasonCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Season.
     * @param {SeasonDeleteArgs} args - Arguments to delete one Season.
     * @example
     * // Delete one Season
     * const Season = await prisma.season.delete({
     *   where: {
     *     // ... filter to delete one Season
     *   }
     * })
     * 
    **/
    delete<T extends SeasonDeleteArgs>(
      args: SelectSubset<T, SeasonDeleteArgs>
    ): Prisma__SeasonClient<SeasonGetPayload<T>>

    /**
     * Update one Season.
     * @param {SeasonUpdateArgs} args - Arguments to update one Season.
     * @example
     * // Update one Season
     * const season = await prisma.season.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SeasonUpdateArgs>(
      args: SelectSubset<T, SeasonUpdateArgs>
    ): Prisma__SeasonClient<SeasonGetPayload<T>>

    /**
     * Delete zero or more Seasons.
     * @param {SeasonDeleteManyArgs} args - Arguments to filter Seasons to delete.
     * @example
     * // Delete a few Seasons
     * const { count } = await prisma.season.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SeasonDeleteManyArgs>(
      args?: SelectSubset<T, SeasonDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seasons
     * const season = await prisma.season.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SeasonUpdateManyArgs>(
      args: SelectSubset<T, SeasonUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Season.
     * @param {SeasonUpsertArgs} args - Arguments to update or create a Season.
     * @example
     * // Update or create a Season
     * const season = await prisma.season.upsert({
     *   create: {
     *     // ... data to create a Season
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Season we want to update
     *   }
     * })
    **/
    upsert<T extends SeasonUpsertArgs>(
      args: SelectSubset<T, SeasonUpsertArgs>
    ): Prisma__SeasonClient<SeasonGetPayload<T>>

    /**
     * Count the number of Seasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonCountArgs} args - Arguments to filter Seasons to count.
     * @example
     * // Count the number of Seasons
     * const count = await prisma.season.count({
     *   where: {
     *     // ... the filter for the Seasons we want to count
     *   }
     * })
    **/
    count<T extends SeasonCountArgs>(
      args?: Subset<T, SeasonCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeasonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Season.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeasonAggregateArgs>(args: Subset<T, SeasonAggregateArgs>): PrismaPromise<GetSeasonAggregateType<T>>

    /**
     * Group by Season.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeasonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeasonGroupByArgs['orderBy'] }
        : { orderBy?: SeasonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeasonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeasonGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Season.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SeasonClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Competition<T extends CompetitionFindManyArgs= {}>(args?: Subset<T, CompetitionFindManyArgs>): PrismaPromise<Array<CompetitionGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Season base type for findUnique actions
   */
  export type SeasonFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Season
     * 
    **/
    select?: SeasonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeasonInclude | null
    /**
     * Filter, which Season to fetch.
     * 
    **/
    where: SeasonWhereUniqueInput
  }

  /**
   * Season: findUnique
   */
  export interface SeasonFindUniqueArgs extends SeasonFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Season findUniqueOrThrow
   */
  export type SeasonFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Season
     * 
    **/
    select?: SeasonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeasonInclude | null
    /**
     * Filter, which Season to fetch.
     * 
    **/
    where: SeasonWhereUniqueInput
  }


  /**
   * Season base type for findFirst actions
   */
  export type SeasonFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Season
     * 
    **/
    select?: SeasonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeasonInclude | null
    /**
     * Filter, which Season to fetch.
     * 
    **/
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     * 
    **/
    orderBy?: Enumerable<SeasonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seasons.
     * 
    **/
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seasons.
     * 
    **/
    distinct?: Enumerable<SeasonScalarFieldEnum>
  }

  /**
   * Season: findFirst
   */
  export interface SeasonFindFirstArgs extends SeasonFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Season findFirstOrThrow
   */
  export type SeasonFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Season
     * 
    **/
    select?: SeasonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeasonInclude | null
    /**
     * Filter, which Season to fetch.
     * 
    **/
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     * 
    **/
    orderBy?: Enumerable<SeasonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seasons.
     * 
    **/
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seasons.
     * 
    **/
    distinct?: Enumerable<SeasonScalarFieldEnum>
  }


  /**
   * Season findMany
   */
  export type SeasonFindManyArgs = {
    /**
     * Select specific fields to fetch from the Season
     * 
    **/
    select?: SeasonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeasonInclude | null
    /**
     * Filter, which Seasons to fetch.
     * 
    **/
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     * 
    **/
    orderBy?: Enumerable<SeasonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seasons.
     * 
    **/
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SeasonScalarFieldEnum>
  }


  /**
   * Season create
   */
  export type SeasonCreateArgs = {
    /**
     * Select specific fields to fetch from the Season
     * 
    **/
    select?: SeasonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeasonInclude | null
    /**
     * The data needed to create a Season.
     * 
    **/
    data: XOR<SeasonCreateInput, SeasonUncheckedCreateInput>
  }


  /**
   * Season createMany
   */
  export type SeasonCreateManyArgs = {
    /**
     * The data used to create many Seasons.
     * 
    **/
    data: Enumerable<SeasonCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Season update
   */
  export type SeasonUpdateArgs = {
    /**
     * Select specific fields to fetch from the Season
     * 
    **/
    select?: SeasonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeasonInclude | null
    /**
     * The data needed to update a Season.
     * 
    **/
    data: XOR<SeasonUpdateInput, SeasonUncheckedUpdateInput>
    /**
     * Choose, which Season to update.
     * 
    **/
    where: SeasonWhereUniqueInput
  }


  /**
   * Season updateMany
   */
  export type SeasonUpdateManyArgs = {
    /**
     * The data used to update Seasons.
     * 
    **/
    data: XOR<SeasonUpdateManyMutationInput, SeasonUncheckedUpdateManyInput>
    /**
     * Filter which Seasons to update
     * 
    **/
    where?: SeasonWhereInput
  }


  /**
   * Season upsert
   */
  export type SeasonUpsertArgs = {
    /**
     * Select specific fields to fetch from the Season
     * 
    **/
    select?: SeasonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeasonInclude | null
    /**
     * The filter to search for the Season to update in case it exists.
     * 
    **/
    where: SeasonWhereUniqueInput
    /**
     * In case the Season found by the `where` argument doesn't exist, create a new Season with this data.
     * 
    **/
    create: XOR<SeasonCreateInput, SeasonUncheckedCreateInput>
    /**
     * In case the Season was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SeasonUpdateInput, SeasonUncheckedUpdateInput>
  }


  /**
   * Season delete
   */
  export type SeasonDeleteArgs = {
    /**
     * Select specific fields to fetch from the Season
     * 
    **/
    select?: SeasonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeasonInclude | null
    /**
     * Filter which Season to delete.
     * 
    **/
    where: SeasonWhereUniqueInput
  }


  /**
   * Season deleteMany
   */
  export type SeasonDeleteManyArgs = {
    /**
     * Filter which Seasons to delete
     * 
    **/
    where?: SeasonWhereInput
  }


  /**
   * Season without action
   */
  export type SeasonArgs = {
    /**
     * Select specific fields to fetch from the Season
     * 
    **/
    select?: SeasonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeasonInclude | null
  }



  /**
   * Model HeathRecord
   */


  export type AggregateHeathRecord = {
    _count: HeathRecordCountAggregateOutputType | null
    _min: HeathRecordMinAggregateOutputType | null
    _max: HeathRecordMaxAggregateOutputType | null
  }

  export type HeathRecordMinAggregateOutputType = {
    id: string | null
    cardNumber: string | null
    issueDate: Date | null
    expiryDate: Date | null
  }

  export type HeathRecordMaxAggregateOutputType = {
    id: string | null
    cardNumber: string | null
    issueDate: Date | null
    expiryDate: Date | null
  }

  export type HeathRecordCountAggregateOutputType = {
    id: number
    cardNumber: number
    issueDate: number
    expiryDate: number
    _all: number
  }


  export type HeathRecordMinAggregateInputType = {
    id?: true
    cardNumber?: true
    issueDate?: true
    expiryDate?: true
  }

  export type HeathRecordMaxAggregateInputType = {
    id?: true
    cardNumber?: true
    issueDate?: true
    expiryDate?: true
  }

  export type HeathRecordCountAggregateInputType = {
    id?: true
    cardNumber?: true
    issueDate?: true
    expiryDate?: true
    _all?: true
  }

  export type HeathRecordAggregateArgs = {
    /**
     * Filter which HeathRecord to aggregate.
     * 
    **/
    where?: HeathRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeathRecords to fetch.
     * 
    **/
    orderBy?: Enumerable<HeathRecordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: HeathRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeathRecords from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeathRecords.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HeathRecords
    **/
    _count?: true | HeathRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeathRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeathRecordMaxAggregateInputType
  }

  export type GetHeathRecordAggregateType<T extends HeathRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateHeathRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHeathRecord[P]>
      : GetScalarType<T[P], AggregateHeathRecord[P]>
  }




  export type HeathRecordGroupByArgs = {
    where?: HeathRecordWhereInput
    orderBy?: Enumerable<HeathRecordOrderByWithAggregationInput>
    by: Array<HeathRecordScalarFieldEnum>
    having?: HeathRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeathRecordCountAggregateInputType | true
    _min?: HeathRecordMinAggregateInputType
    _max?: HeathRecordMaxAggregateInputType
  }


  export type HeathRecordGroupByOutputType = {
    id: string
    cardNumber: string
    issueDate: Date
    expiryDate: Date
    _count: HeathRecordCountAggregateOutputType | null
    _min: HeathRecordMinAggregateOutputType | null
    _max: HeathRecordMaxAggregateOutputType | null
  }

  type GetHeathRecordGroupByPayload<T extends HeathRecordGroupByArgs> = PrismaPromise<
    Array<
      PickArray<HeathRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeathRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeathRecordGroupByOutputType[P]>
            : GetScalarType<T[P], HeathRecordGroupByOutputType[P]>
        }
      >
    >


  export type HeathRecordSelect = {
    id?: boolean
    cardNumber?: boolean
    issueDate?: boolean
    expiryDate?: boolean
    Player?: boolean | PlayerArgs
  }


  export type HeathRecordInclude = {
    Player?: boolean | PlayerArgs
  } 

  export type HeathRecordGetPayload<S extends boolean | null | undefined | HeathRecordArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HeathRecord :
    S extends undefined ? never :
    S extends { include: any } & (HeathRecordArgs | HeathRecordFindManyArgs)
    ? HeathRecord  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Player' ? PlayerGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (HeathRecordArgs | HeathRecordFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Player' ? PlayerGetPayload<S['select'][P]> | null :  P extends keyof HeathRecord ? HeathRecord[P] : never
  } 
      : HeathRecord


  type HeathRecordCountArgs = Merge<
    Omit<HeathRecordFindManyArgs, 'select' | 'include'> & {
      select?: HeathRecordCountAggregateInputType | true
    }
  >

  export interface HeathRecordDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one HeathRecord that matches the filter.
     * @param {HeathRecordFindUniqueArgs} args - Arguments to find a HeathRecord
     * @example
     * // Get one HeathRecord
     * const heathRecord = await prisma.heathRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HeathRecordFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HeathRecordFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'HeathRecord'> extends True ? Prisma__HeathRecordClient<HeathRecordGetPayload<T>> : Prisma__HeathRecordClient<HeathRecordGetPayload<T> | null, null>

    /**
     * Find one HeathRecord that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HeathRecordFindUniqueOrThrowArgs} args - Arguments to find a HeathRecord
     * @example
     * // Get one HeathRecord
     * const heathRecord = await prisma.heathRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HeathRecordFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, HeathRecordFindUniqueOrThrowArgs>
    ): Prisma__HeathRecordClient<HeathRecordGetPayload<T>>

    /**
     * Find the first HeathRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeathRecordFindFirstArgs} args - Arguments to find a HeathRecord
     * @example
     * // Get one HeathRecord
     * const heathRecord = await prisma.heathRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HeathRecordFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HeathRecordFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'HeathRecord'> extends True ? Prisma__HeathRecordClient<HeathRecordGetPayload<T>> : Prisma__HeathRecordClient<HeathRecordGetPayload<T> | null, null>

    /**
     * Find the first HeathRecord that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeathRecordFindFirstOrThrowArgs} args - Arguments to find a HeathRecord
     * @example
     * // Get one HeathRecord
     * const heathRecord = await prisma.heathRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HeathRecordFindFirstOrThrowArgs>(
      args?: SelectSubset<T, HeathRecordFindFirstOrThrowArgs>
    ): Prisma__HeathRecordClient<HeathRecordGetPayload<T>>

    /**
     * Find zero or more HeathRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeathRecordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HeathRecords
     * const heathRecords = await prisma.heathRecord.findMany()
     * 
     * // Get first 10 HeathRecords
     * const heathRecords = await prisma.heathRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const heathRecordWithIdOnly = await prisma.heathRecord.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HeathRecordFindManyArgs>(
      args?: SelectSubset<T, HeathRecordFindManyArgs>
    ): PrismaPromise<Array<HeathRecordGetPayload<T>>>

    /**
     * Create a HeathRecord.
     * @param {HeathRecordCreateArgs} args - Arguments to create a HeathRecord.
     * @example
     * // Create one HeathRecord
     * const HeathRecord = await prisma.heathRecord.create({
     *   data: {
     *     // ... data to create a HeathRecord
     *   }
     * })
     * 
    **/
    create<T extends HeathRecordCreateArgs>(
      args: SelectSubset<T, HeathRecordCreateArgs>
    ): Prisma__HeathRecordClient<HeathRecordGetPayload<T>>

    /**
     * Create many HeathRecords.
     *     @param {HeathRecordCreateManyArgs} args - Arguments to create many HeathRecords.
     *     @example
     *     // Create many HeathRecords
     *     const heathRecord = await prisma.heathRecord.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HeathRecordCreateManyArgs>(
      args?: SelectSubset<T, HeathRecordCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a HeathRecord.
     * @param {HeathRecordDeleteArgs} args - Arguments to delete one HeathRecord.
     * @example
     * // Delete one HeathRecord
     * const HeathRecord = await prisma.heathRecord.delete({
     *   where: {
     *     // ... filter to delete one HeathRecord
     *   }
     * })
     * 
    **/
    delete<T extends HeathRecordDeleteArgs>(
      args: SelectSubset<T, HeathRecordDeleteArgs>
    ): Prisma__HeathRecordClient<HeathRecordGetPayload<T>>

    /**
     * Update one HeathRecord.
     * @param {HeathRecordUpdateArgs} args - Arguments to update one HeathRecord.
     * @example
     * // Update one HeathRecord
     * const heathRecord = await prisma.heathRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HeathRecordUpdateArgs>(
      args: SelectSubset<T, HeathRecordUpdateArgs>
    ): Prisma__HeathRecordClient<HeathRecordGetPayload<T>>

    /**
     * Delete zero or more HeathRecords.
     * @param {HeathRecordDeleteManyArgs} args - Arguments to filter HeathRecords to delete.
     * @example
     * // Delete a few HeathRecords
     * const { count } = await prisma.heathRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HeathRecordDeleteManyArgs>(
      args?: SelectSubset<T, HeathRecordDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more HeathRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeathRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HeathRecords
     * const heathRecord = await prisma.heathRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HeathRecordUpdateManyArgs>(
      args: SelectSubset<T, HeathRecordUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one HeathRecord.
     * @param {HeathRecordUpsertArgs} args - Arguments to update or create a HeathRecord.
     * @example
     * // Update or create a HeathRecord
     * const heathRecord = await prisma.heathRecord.upsert({
     *   create: {
     *     // ... data to create a HeathRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HeathRecord we want to update
     *   }
     * })
    **/
    upsert<T extends HeathRecordUpsertArgs>(
      args: SelectSubset<T, HeathRecordUpsertArgs>
    ): Prisma__HeathRecordClient<HeathRecordGetPayload<T>>

    /**
     * Count the number of HeathRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeathRecordCountArgs} args - Arguments to filter HeathRecords to count.
     * @example
     * // Count the number of HeathRecords
     * const count = await prisma.heathRecord.count({
     *   where: {
     *     // ... the filter for the HeathRecords we want to count
     *   }
     * })
    **/
    count<T extends HeathRecordCountArgs>(
      args?: Subset<T, HeathRecordCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeathRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HeathRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeathRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HeathRecordAggregateArgs>(args: Subset<T, HeathRecordAggregateArgs>): PrismaPromise<GetHeathRecordAggregateType<T>>

    /**
     * Group by HeathRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeathRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HeathRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeathRecordGroupByArgs['orderBy'] }
        : { orderBy?: HeathRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HeathRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeathRecordGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for HeathRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HeathRecordClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Player<T extends PlayerArgs= {}>(args?: Subset<T, PlayerArgs>): Prisma__PlayerClient<PlayerGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * HeathRecord base type for findUnique actions
   */
  export type HeathRecordFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the HeathRecord
     * 
    **/
    select?: HeathRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HeathRecordInclude | null
    /**
     * Filter, which HeathRecord to fetch.
     * 
    **/
    where: HeathRecordWhereUniqueInput
  }

  /**
   * HeathRecord: findUnique
   */
  export interface HeathRecordFindUniqueArgs extends HeathRecordFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HeathRecord findUniqueOrThrow
   */
  export type HeathRecordFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HeathRecord
     * 
    **/
    select?: HeathRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HeathRecordInclude | null
    /**
     * Filter, which HeathRecord to fetch.
     * 
    **/
    where: HeathRecordWhereUniqueInput
  }


  /**
   * HeathRecord base type for findFirst actions
   */
  export type HeathRecordFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the HeathRecord
     * 
    **/
    select?: HeathRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HeathRecordInclude | null
    /**
     * Filter, which HeathRecord to fetch.
     * 
    **/
    where?: HeathRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeathRecords to fetch.
     * 
    **/
    orderBy?: Enumerable<HeathRecordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeathRecords.
     * 
    **/
    cursor?: HeathRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeathRecords from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeathRecords.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeathRecords.
     * 
    **/
    distinct?: Enumerable<HeathRecordScalarFieldEnum>
  }

  /**
   * HeathRecord: findFirst
   */
  export interface HeathRecordFindFirstArgs extends HeathRecordFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HeathRecord findFirstOrThrow
   */
  export type HeathRecordFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HeathRecord
     * 
    **/
    select?: HeathRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HeathRecordInclude | null
    /**
     * Filter, which HeathRecord to fetch.
     * 
    **/
    where?: HeathRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeathRecords to fetch.
     * 
    **/
    orderBy?: Enumerable<HeathRecordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeathRecords.
     * 
    **/
    cursor?: HeathRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeathRecords from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeathRecords.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeathRecords.
     * 
    **/
    distinct?: Enumerable<HeathRecordScalarFieldEnum>
  }


  /**
   * HeathRecord findMany
   */
  export type HeathRecordFindManyArgs = {
    /**
     * Select specific fields to fetch from the HeathRecord
     * 
    **/
    select?: HeathRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HeathRecordInclude | null
    /**
     * Filter, which HeathRecords to fetch.
     * 
    **/
    where?: HeathRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeathRecords to fetch.
     * 
    **/
    orderBy?: Enumerable<HeathRecordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HeathRecords.
     * 
    **/
    cursor?: HeathRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeathRecords from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeathRecords.
     * 
    **/
    skip?: number
    distinct?: Enumerable<HeathRecordScalarFieldEnum>
  }


  /**
   * HeathRecord create
   */
  export type HeathRecordCreateArgs = {
    /**
     * Select specific fields to fetch from the HeathRecord
     * 
    **/
    select?: HeathRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HeathRecordInclude | null
    /**
     * The data needed to create a HeathRecord.
     * 
    **/
    data: XOR<HeathRecordCreateInput, HeathRecordUncheckedCreateInput>
  }


  /**
   * HeathRecord createMany
   */
  export type HeathRecordCreateManyArgs = {
    /**
     * The data used to create many HeathRecords.
     * 
    **/
    data: Enumerable<HeathRecordCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * HeathRecord update
   */
  export type HeathRecordUpdateArgs = {
    /**
     * Select specific fields to fetch from the HeathRecord
     * 
    **/
    select?: HeathRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HeathRecordInclude | null
    /**
     * The data needed to update a HeathRecord.
     * 
    **/
    data: XOR<HeathRecordUpdateInput, HeathRecordUncheckedUpdateInput>
    /**
     * Choose, which HeathRecord to update.
     * 
    **/
    where: HeathRecordWhereUniqueInput
  }


  /**
   * HeathRecord updateMany
   */
  export type HeathRecordUpdateManyArgs = {
    /**
     * The data used to update HeathRecords.
     * 
    **/
    data: XOR<HeathRecordUpdateManyMutationInput, HeathRecordUncheckedUpdateManyInput>
    /**
     * Filter which HeathRecords to update
     * 
    **/
    where?: HeathRecordWhereInput
  }


  /**
   * HeathRecord upsert
   */
  export type HeathRecordUpsertArgs = {
    /**
     * Select specific fields to fetch from the HeathRecord
     * 
    **/
    select?: HeathRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HeathRecordInclude | null
    /**
     * The filter to search for the HeathRecord to update in case it exists.
     * 
    **/
    where: HeathRecordWhereUniqueInput
    /**
     * In case the HeathRecord found by the `where` argument doesn't exist, create a new HeathRecord with this data.
     * 
    **/
    create: XOR<HeathRecordCreateInput, HeathRecordUncheckedCreateInput>
    /**
     * In case the HeathRecord was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<HeathRecordUpdateInput, HeathRecordUncheckedUpdateInput>
  }


  /**
   * HeathRecord delete
   */
  export type HeathRecordDeleteArgs = {
    /**
     * Select specific fields to fetch from the HeathRecord
     * 
    **/
    select?: HeathRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HeathRecordInclude | null
    /**
     * Filter which HeathRecord to delete.
     * 
    **/
    where: HeathRecordWhereUniqueInput
  }


  /**
   * HeathRecord deleteMany
   */
  export type HeathRecordDeleteManyArgs = {
    /**
     * Filter which HeathRecords to delete
     * 
    **/
    where?: HeathRecordWhereInput
  }


  /**
   * HeathRecord without action
   */
  export type HeathRecordArgs = {
    /**
     * Select specific fields to fetch from the HeathRecord
     * 
    **/
    select?: HeathRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HeathRecordInclude | null
  }



  /**
   * Model Game
   */


  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    attendance: number | null
  }

  export type GameSumAggregateOutputType = {
    attendance: number | null
  }

  export type GameMinAggregateOutputType = {
    id: string | null
    updatedAt: Date | null
    attendance: number | null
    locationId: string | null
    competitionId: string | null
  }

  export type GameMaxAggregateOutputType = {
    id: string | null
    updatedAt: Date | null
    attendance: number | null
    locationId: string | null
    competitionId: string | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    updatedAt: number
    attendance: number
    locationId: number
    competitionId: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    attendance?: true
  }

  export type GameSumAggregateInputType = {
    attendance?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    updatedAt?: true
    attendance?: true
    locationId?: true
    competitionId?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    updatedAt?: true
    attendance?: true
    locationId?: true
    competitionId?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    updatedAt?: true
    attendance?: true
    locationId?: true
    competitionId?: true
    _all?: true
  }

  export type GameAggregateArgs = {
    /**
     * Filter which Game to aggregate.
     * 
    **/
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     * 
    **/
    orderBy?: Enumerable<GameOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs = {
    where?: GameWhereInput
    orderBy?: Enumerable<GameOrderByWithAggregationInput>
    by: Array<GameScalarFieldEnum>
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }


  export type GameGroupByOutputType = {
    id: string
    updatedAt: Date
    attendance: number
    locationId: string
    competitionId: string
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = PrismaPromise<
    Array<
      PickArray<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect = {
    id?: boolean
    team?: boolean | TeamFindManyArgs
    events?: boolean | GameEventFindManyArgs
    competition?: boolean | CompetitionArgs
    updatedAt?: boolean
    location?: boolean | LocationArgs
    attendance?: boolean
    locationId?: boolean
    competitionId?: boolean
    _count?: boolean | GameCountOutputTypeArgs
  }


  export type GameInclude = {
    team?: boolean | TeamFindManyArgs
    events?: boolean | GameEventFindManyArgs
    competition?: boolean | CompetitionArgs
    location?: boolean | LocationArgs
    _count?: boolean | GameCountOutputTypeArgs
  } 

  export type GameGetPayload<S extends boolean | null | undefined | GameArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Game :
    S extends undefined ? never :
    S extends { include: any } & (GameArgs | GameFindManyArgs)
    ? Game  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'team' ? Array < TeamGetPayload<S['include'][P]>>  :
        P extends 'events' ? Array < GameEventGetPayload<S['include'][P]>>  :
        P extends 'competition' ? CompetitionGetPayload<S['include'][P]> :
        P extends 'location' ? LocationGetPayload<S['include'][P]> :
        P extends '_count' ? GameCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (GameArgs | GameFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'team' ? Array < TeamGetPayload<S['select'][P]>>  :
        P extends 'events' ? Array < GameEventGetPayload<S['select'][P]>>  :
        P extends 'competition' ? CompetitionGetPayload<S['select'][P]> :
        P extends 'location' ? LocationGetPayload<S['select'][P]> :
        P extends '_count' ? GameCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Game ? Game[P] : never
  } 
      : Game


  type GameCountArgs = Merge<
    Omit<GameFindManyArgs, 'select' | 'include'> & {
      select?: GameCountAggregateInputType | true
    }
  >

  export interface GameDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GameFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GameFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Game'> extends True ? Prisma__GameClient<GameGetPayload<T>> : Prisma__GameClient<GameGetPayload<T> | null, null>

    /**
     * Find one Game that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, GameFindUniqueOrThrowArgs>
    ): Prisma__GameClient<GameGetPayload<T>>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GameFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GameFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Game'> extends True ? Prisma__GameClient<GameGetPayload<T>> : Prisma__GameClient<GameGetPayload<T> | null, null>

    /**
     * Find the first Game that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GameFindFirstOrThrowArgs>
    ): Prisma__GameClient<GameGetPayload<T>>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GameFindManyArgs>(
      args?: SelectSubset<T, GameFindManyArgs>
    ): PrismaPromise<Array<GameGetPayload<T>>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
    **/
    create<T extends GameCreateArgs>(
      args: SelectSubset<T, GameCreateArgs>
    ): Prisma__GameClient<GameGetPayload<T>>

    /**
     * Create many Games.
     *     @param {GameCreateManyArgs} args - Arguments to create many Games.
     *     @example
     *     // Create many Games
     *     const game = await prisma.game.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GameCreateManyArgs>(
      args?: SelectSubset<T, GameCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
    **/
    delete<T extends GameDeleteArgs>(
      args: SelectSubset<T, GameDeleteArgs>
    ): Prisma__GameClient<GameGetPayload<T>>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GameUpdateArgs>(
      args: SelectSubset<T, GameUpdateArgs>
    ): Prisma__GameClient<GameGetPayload<T>>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GameDeleteManyArgs>(
      args?: SelectSubset<T, GameDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GameUpdateManyArgs>(
      args: SelectSubset<T, GameUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
    **/
    upsert<T extends GameUpsertArgs>(
      args: SelectSubset<T, GameUpsertArgs>
    ): Prisma__GameClient<GameGetPayload<T>>

    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GameClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    team<T extends TeamFindManyArgs= {}>(args?: Subset<T, TeamFindManyArgs>): PrismaPromise<Array<TeamGetPayload<T>>| Null>;

    events<T extends GameEventFindManyArgs= {}>(args?: Subset<T, GameEventFindManyArgs>): PrismaPromise<Array<GameEventGetPayload<T>>| Null>;

    competition<T extends CompetitionArgs= {}>(args?: Subset<T, CompetitionArgs>): Prisma__CompetitionClient<CompetitionGetPayload<T> | Null>;

    location<T extends LocationArgs= {}>(args?: Subset<T, LocationArgs>): Prisma__LocationClient<LocationGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Game base type for findUnique actions
   */
  export type GameFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * Filter, which Game to fetch.
     * 
    **/
    where: GameWhereUniqueInput
  }

  /**
   * Game: findUnique
   */
  export interface GameFindUniqueArgs extends GameFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * Filter, which Game to fetch.
     * 
    **/
    where: GameWhereUniqueInput
  }


  /**
   * Game base type for findFirst actions
   */
  export type GameFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * Filter, which Game to fetch.
     * 
    **/
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     * 
    **/
    orderBy?: Enumerable<GameOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     * 
    **/
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     * 
    **/
    distinct?: Enumerable<GameScalarFieldEnum>
  }

  /**
   * Game: findFirst
   */
  export interface GameFindFirstArgs extends GameFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * Filter, which Game to fetch.
     * 
    **/
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     * 
    **/
    orderBy?: Enumerable<GameOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     * 
    **/
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     * 
    **/
    distinct?: Enumerable<GameScalarFieldEnum>
  }


  /**
   * Game findMany
   */
  export type GameFindManyArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * Filter, which Games to fetch.
     * 
    **/
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     * 
    **/
    orderBy?: Enumerable<GameOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     * 
    **/
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GameScalarFieldEnum>
  }


  /**
   * Game create
   */
  export type GameCreateArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * The data needed to create a Game.
     * 
    **/
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }


  /**
   * Game createMany
   */
  export type GameCreateManyArgs = {
    /**
     * The data used to create many Games.
     * 
    **/
    data: Enumerable<GameCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Game update
   */
  export type GameUpdateArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * The data needed to update a Game.
     * 
    **/
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     * 
    **/
    where: GameWhereUniqueInput
  }


  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs = {
    /**
     * The data used to update Games.
     * 
    **/
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     * 
    **/
    where?: GameWhereInput
  }


  /**
   * Game upsert
   */
  export type GameUpsertArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * The filter to search for the Game to update in case it exists.
     * 
    **/
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     * 
    **/
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }


  /**
   * Game delete
   */
  export type GameDeleteArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * Filter which Game to delete.
     * 
    **/
    where: GameWhereUniqueInput
  }


  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs = {
    /**
     * Filter which Games to delete
     * 
    **/
    where?: GameWhereInput
  }


  /**
   * Game without action
   */
  export type GameArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
  }



  /**
   * Model GameEvent
   */


  export type AggregateGameEvent = {
    _count: GameEventCountAggregateOutputType | null
    _avg: GameEventAvgAggregateOutputType | null
    _sum: GameEventSumAggregateOutputType | null
    _min: GameEventMinAggregateOutputType | null
    _max: GameEventMaxAggregateOutputType | null
  }

  export type GameEventAvgAggregateOutputType = {
    minute: number | null
  }

  export type GameEventSumAggregateOutputType = {
    minute: number | null
  }

  export type GameEventMinAggregateOutputType = {
    id: string | null
    minute: number | null
    gameId: string | null
    playerId: string | null
    type: Event | null
  }

  export type GameEventMaxAggregateOutputType = {
    id: string | null
    minute: number | null
    gameId: string | null
    playerId: string | null
    type: Event | null
  }

  export type GameEventCountAggregateOutputType = {
    id: number
    minute: number
    gameId: number
    playerId: number
    type: number
    _all: number
  }


  export type GameEventAvgAggregateInputType = {
    minute?: true
  }

  export type GameEventSumAggregateInputType = {
    minute?: true
  }

  export type GameEventMinAggregateInputType = {
    id?: true
    minute?: true
    gameId?: true
    playerId?: true
    type?: true
  }

  export type GameEventMaxAggregateInputType = {
    id?: true
    minute?: true
    gameId?: true
    playerId?: true
    type?: true
  }

  export type GameEventCountAggregateInputType = {
    id?: true
    minute?: true
    gameId?: true
    playerId?: true
    type?: true
    _all?: true
  }

  export type GameEventAggregateArgs = {
    /**
     * Filter which GameEvent to aggregate.
     * 
    **/
    where?: GameEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameEvents to fetch.
     * 
    **/
    orderBy?: Enumerable<GameEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GameEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameEvents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameEvents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameEvents
    **/
    _count?: true | GameEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameEventMaxAggregateInputType
  }

  export type GetGameEventAggregateType<T extends GameEventAggregateArgs> = {
        [P in keyof T & keyof AggregateGameEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameEvent[P]>
      : GetScalarType<T[P], AggregateGameEvent[P]>
  }




  export type GameEventGroupByArgs = {
    where?: GameEventWhereInput
    orderBy?: Enumerable<GameEventOrderByWithAggregationInput>
    by: Array<GameEventScalarFieldEnum>
    having?: GameEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameEventCountAggregateInputType | true
    _avg?: GameEventAvgAggregateInputType
    _sum?: GameEventSumAggregateInputType
    _min?: GameEventMinAggregateInputType
    _max?: GameEventMaxAggregateInputType
  }


  export type GameEventGroupByOutputType = {
    id: string
    minute: number
    gameId: string | null
    playerId: string
    type: Event
    _count: GameEventCountAggregateOutputType | null
    _avg: GameEventAvgAggregateOutputType | null
    _sum: GameEventSumAggregateOutputType | null
    _min: GameEventMinAggregateOutputType | null
    _max: GameEventMaxAggregateOutputType | null
  }

  type GetGameEventGroupByPayload<T extends GameEventGroupByArgs> = PrismaPromise<
    Array<
      PickArray<GameEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameEventGroupByOutputType[P]>
            : GetScalarType<T[P], GameEventGroupByOutputType[P]>
        }
      >
    >


  export type GameEventSelect = {
    id?: boolean
    player?: boolean | PlayerArgs
    minute?: boolean
    game?: boolean | GameArgs
    gameId?: boolean
    playerId?: boolean
    type?: boolean
  }


  export type GameEventInclude = {
    player?: boolean | PlayerArgs
    game?: boolean | GameArgs
  } 

  export type GameEventGetPayload<S extends boolean | null | undefined | GameEventArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? GameEvent :
    S extends undefined ? never :
    S extends { include: any } & (GameEventArgs | GameEventFindManyArgs)
    ? GameEvent  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'player' ? PlayerGetPayload<S['include'][P]> :
        P extends 'game' ? GameGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (GameEventArgs | GameEventFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'player' ? PlayerGetPayload<S['select'][P]> :
        P extends 'game' ? GameGetPayload<S['select'][P]> | null :  P extends keyof GameEvent ? GameEvent[P] : never
  } 
      : GameEvent


  type GameEventCountArgs = Merge<
    Omit<GameEventFindManyArgs, 'select' | 'include'> & {
      select?: GameEventCountAggregateInputType | true
    }
  >

  export interface GameEventDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one GameEvent that matches the filter.
     * @param {GameEventFindUniqueArgs} args - Arguments to find a GameEvent
     * @example
     * // Get one GameEvent
     * const gameEvent = await prisma.gameEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GameEventFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GameEventFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'GameEvent'> extends True ? Prisma__GameEventClient<GameEventGetPayload<T>> : Prisma__GameEventClient<GameEventGetPayload<T> | null, null>

    /**
     * Find one GameEvent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GameEventFindUniqueOrThrowArgs} args - Arguments to find a GameEvent
     * @example
     * // Get one GameEvent
     * const gameEvent = await prisma.gameEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GameEventFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, GameEventFindUniqueOrThrowArgs>
    ): Prisma__GameEventClient<GameEventGetPayload<T>>

    /**
     * Find the first GameEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameEventFindFirstArgs} args - Arguments to find a GameEvent
     * @example
     * // Get one GameEvent
     * const gameEvent = await prisma.gameEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GameEventFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GameEventFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'GameEvent'> extends True ? Prisma__GameEventClient<GameEventGetPayload<T>> : Prisma__GameEventClient<GameEventGetPayload<T> | null, null>

    /**
     * Find the first GameEvent that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameEventFindFirstOrThrowArgs} args - Arguments to find a GameEvent
     * @example
     * // Get one GameEvent
     * const gameEvent = await prisma.gameEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GameEventFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GameEventFindFirstOrThrowArgs>
    ): Prisma__GameEventClient<GameEventGetPayload<T>>

    /**
     * Find zero or more GameEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameEventFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameEvents
     * const gameEvents = await prisma.gameEvent.findMany()
     * 
     * // Get first 10 GameEvents
     * const gameEvents = await prisma.gameEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameEventWithIdOnly = await prisma.gameEvent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GameEventFindManyArgs>(
      args?: SelectSubset<T, GameEventFindManyArgs>
    ): PrismaPromise<Array<GameEventGetPayload<T>>>

    /**
     * Create a GameEvent.
     * @param {GameEventCreateArgs} args - Arguments to create a GameEvent.
     * @example
     * // Create one GameEvent
     * const GameEvent = await prisma.gameEvent.create({
     *   data: {
     *     // ... data to create a GameEvent
     *   }
     * })
     * 
    **/
    create<T extends GameEventCreateArgs>(
      args: SelectSubset<T, GameEventCreateArgs>
    ): Prisma__GameEventClient<GameEventGetPayload<T>>

    /**
     * Create many GameEvents.
     *     @param {GameEventCreateManyArgs} args - Arguments to create many GameEvents.
     *     @example
     *     // Create many GameEvents
     *     const gameEvent = await prisma.gameEvent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GameEventCreateManyArgs>(
      args?: SelectSubset<T, GameEventCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a GameEvent.
     * @param {GameEventDeleteArgs} args - Arguments to delete one GameEvent.
     * @example
     * // Delete one GameEvent
     * const GameEvent = await prisma.gameEvent.delete({
     *   where: {
     *     // ... filter to delete one GameEvent
     *   }
     * })
     * 
    **/
    delete<T extends GameEventDeleteArgs>(
      args: SelectSubset<T, GameEventDeleteArgs>
    ): Prisma__GameEventClient<GameEventGetPayload<T>>

    /**
     * Update one GameEvent.
     * @param {GameEventUpdateArgs} args - Arguments to update one GameEvent.
     * @example
     * // Update one GameEvent
     * const gameEvent = await prisma.gameEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GameEventUpdateArgs>(
      args: SelectSubset<T, GameEventUpdateArgs>
    ): Prisma__GameEventClient<GameEventGetPayload<T>>

    /**
     * Delete zero or more GameEvents.
     * @param {GameEventDeleteManyArgs} args - Arguments to filter GameEvents to delete.
     * @example
     * // Delete a few GameEvents
     * const { count } = await prisma.gameEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GameEventDeleteManyArgs>(
      args?: SelectSubset<T, GameEventDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameEvents
     * const gameEvent = await prisma.gameEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GameEventUpdateManyArgs>(
      args: SelectSubset<T, GameEventUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one GameEvent.
     * @param {GameEventUpsertArgs} args - Arguments to update or create a GameEvent.
     * @example
     * // Update or create a GameEvent
     * const gameEvent = await prisma.gameEvent.upsert({
     *   create: {
     *     // ... data to create a GameEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameEvent we want to update
     *   }
     * })
    **/
    upsert<T extends GameEventUpsertArgs>(
      args: SelectSubset<T, GameEventUpsertArgs>
    ): Prisma__GameEventClient<GameEventGetPayload<T>>

    /**
     * Count the number of GameEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameEventCountArgs} args - Arguments to filter GameEvents to count.
     * @example
     * // Count the number of GameEvents
     * const count = await prisma.gameEvent.count({
     *   where: {
     *     // ... the filter for the GameEvents we want to count
     *   }
     * })
    **/
    count<T extends GameEventCountArgs>(
      args?: Subset<T, GameEventCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameEventAggregateArgs>(args: Subset<T, GameEventAggregateArgs>): PrismaPromise<GetGameEventAggregateType<T>>

    /**
     * Group by GameEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameEventGroupByArgs['orderBy'] }
        : { orderBy?: GameEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameEventGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for GameEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GameEventClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    player<T extends PlayerArgs= {}>(args?: Subset<T, PlayerArgs>): Prisma__PlayerClient<PlayerGetPayload<T> | Null>;

    game<T extends GameArgs= {}>(args?: Subset<T, GameArgs>): Prisma__GameClient<GameGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * GameEvent base type for findUnique actions
   */
  export type GameEventFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the GameEvent
     * 
    **/
    select?: GameEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameEventInclude | null
    /**
     * Filter, which GameEvent to fetch.
     * 
    **/
    where: GameEventWhereUniqueInput
  }

  /**
   * GameEvent: findUnique
   */
  export interface GameEventFindUniqueArgs extends GameEventFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * GameEvent findUniqueOrThrow
   */
  export type GameEventFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the GameEvent
     * 
    **/
    select?: GameEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameEventInclude | null
    /**
     * Filter, which GameEvent to fetch.
     * 
    **/
    where: GameEventWhereUniqueInput
  }


  /**
   * GameEvent base type for findFirst actions
   */
  export type GameEventFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the GameEvent
     * 
    **/
    select?: GameEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameEventInclude | null
    /**
     * Filter, which GameEvent to fetch.
     * 
    **/
    where?: GameEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameEvents to fetch.
     * 
    **/
    orderBy?: Enumerable<GameEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameEvents.
     * 
    **/
    cursor?: GameEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameEvents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameEvents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameEvents.
     * 
    **/
    distinct?: Enumerable<GameEventScalarFieldEnum>
  }

  /**
   * GameEvent: findFirst
   */
  export interface GameEventFindFirstArgs extends GameEventFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * GameEvent findFirstOrThrow
   */
  export type GameEventFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the GameEvent
     * 
    **/
    select?: GameEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameEventInclude | null
    /**
     * Filter, which GameEvent to fetch.
     * 
    **/
    where?: GameEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameEvents to fetch.
     * 
    **/
    orderBy?: Enumerable<GameEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameEvents.
     * 
    **/
    cursor?: GameEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameEvents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameEvents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameEvents.
     * 
    **/
    distinct?: Enumerable<GameEventScalarFieldEnum>
  }


  /**
   * GameEvent findMany
   */
  export type GameEventFindManyArgs = {
    /**
     * Select specific fields to fetch from the GameEvent
     * 
    **/
    select?: GameEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameEventInclude | null
    /**
     * Filter, which GameEvents to fetch.
     * 
    **/
    where?: GameEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameEvents to fetch.
     * 
    **/
    orderBy?: Enumerable<GameEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameEvents.
     * 
    **/
    cursor?: GameEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameEvents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameEvents.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GameEventScalarFieldEnum>
  }


  /**
   * GameEvent create
   */
  export type GameEventCreateArgs = {
    /**
     * Select specific fields to fetch from the GameEvent
     * 
    **/
    select?: GameEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameEventInclude | null
    /**
     * The data needed to create a GameEvent.
     * 
    **/
    data: XOR<GameEventCreateInput, GameEventUncheckedCreateInput>
  }


  /**
   * GameEvent createMany
   */
  export type GameEventCreateManyArgs = {
    /**
     * The data used to create many GameEvents.
     * 
    **/
    data: Enumerable<GameEventCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * GameEvent update
   */
  export type GameEventUpdateArgs = {
    /**
     * Select specific fields to fetch from the GameEvent
     * 
    **/
    select?: GameEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameEventInclude | null
    /**
     * The data needed to update a GameEvent.
     * 
    **/
    data: XOR<GameEventUpdateInput, GameEventUncheckedUpdateInput>
    /**
     * Choose, which GameEvent to update.
     * 
    **/
    where: GameEventWhereUniqueInput
  }


  /**
   * GameEvent updateMany
   */
  export type GameEventUpdateManyArgs = {
    /**
     * The data used to update GameEvents.
     * 
    **/
    data: XOR<GameEventUpdateManyMutationInput, GameEventUncheckedUpdateManyInput>
    /**
     * Filter which GameEvents to update
     * 
    **/
    where?: GameEventWhereInput
  }


  /**
   * GameEvent upsert
   */
  export type GameEventUpsertArgs = {
    /**
     * Select specific fields to fetch from the GameEvent
     * 
    **/
    select?: GameEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameEventInclude | null
    /**
     * The filter to search for the GameEvent to update in case it exists.
     * 
    **/
    where: GameEventWhereUniqueInput
    /**
     * In case the GameEvent found by the `where` argument doesn't exist, create a new GameEvent with this data.
     * 
    **/
    create: XOR<GameEventCreateInput, GameEventUncheckedCreateInput>
    /**
     * In case the GameEvent was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GameEventUpdateInput, GameEventUncheckedUpdateInput>
  }


  /**
   * GameEvent delete
   */
  export type GameEventDeleteArgs = {
    /**
     * Select specific fields to fetch from the GameEvent
     * 
    **/
    select?: GameEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameEventInclude | null
    /**
     * Filter which GameEvent to delete.
     * 
    **/
    where: GameEventWhereUniqueInput
  }


  /**
   * GameEvent deleteMany
   */
  export type GameEventDeleteManyArgs = {
    /**
     * Filter which GameEvents to delete
     * 
    **/
    where?: GameEventWhereInput
  }


  /**
   * GameEvent without action
   */
  export type GameEventArgs = {
    /**
     * Select specific fields to fetch from the GameEvent
     * 
    **/
    select?: GameEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameEventInclude | null
  }



  /**
   * Model Scholarship
   */


  export type AggregateScholarship = {
    _count: ScholarshipCountAggregateOutputType | null
    _min: ScholarshipMinAggregateOutputType | null
    _max: ScholarshipMaxAggregateOutputType | null
  }

  export type ScholarshipMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    institutionId: string | null
    playerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScholarshipMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    institutionId: string | null
    playerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScholarshipCountAggregateOutputType = {
    id: number
    name: number
    description: number
    institutionId: number
    playerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScholarshipMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    institutionId?: true
    playerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScholarshipMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    institutionId?: true
    playerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScholarshipCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    institutionId?: true
    playerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScholarshipAggregateArgs = {
    /**
     * Filter which Scholarship to aggregate.
     * 
    **/
    where?: ScholarshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scholarships to fetch.
     * 
    **/
    orderBy?: Enumerable<ScholarshipOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ScholarshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scholarships from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scholarships.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scholarships
    **/
    _count?: true | ScholarshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScholarshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScholarshipMaxAggregateInputType
  }

  export type GetScholarshipAggregateType<T extends ScholarshipAggregateArgs> = {
        [P in keyof T & keyof AggregateScholarship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScholarship[P]>
      : GetScalarType<T[P], AggregateScholarship[P]>
  }




  export type ScholarshipGroupByArgs = {
    where?: ScholarshipWhereInput
    orderBy?: Enumerable<ScholarshipOrderByWithAggregationInput>
    by: Array<ScholarshipScalarFieldEnum>
    having?: ScholarshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScholarshipCountAggregateInputType | true
    _min?: ScholarshipMinAggregateInputType
    _max?: ScholarshipMaxAggregateInputType
  }


  export type ScholarshipGroupByOutputType = {
    id: string
    name: string
    description: string
    institutionId: string
    playerId: string
    createdAt: Date
    updatedAt: Date
    _count: ScholarshipCountAggregateOutputType | null
    _min: ScholarshipMinAggregateOutputType | null
    _max: ScholarshipMaxAggregateOutputType | null
  }

  type GetScholarshipGroupByPayload<T extends ScholarshipGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ScholarshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScholarshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScholarshipGroupByOutputType[P]>
            : GetScalarType<T[P], ScholarshipGroupByOutputType[P]>
        }
      >
    >


  export type ScholarshipSelect = {
    id?: boolean
    name?: boolean
    description?: boolean
    sponsor?: boolean | InstitutionArgs
    player?: boolean | PlayerArgs
    institutionId?: boolean
    playerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type ScholarshipInclude = {
    sponsor?: boolean | InstitutionArgs
    player?: boolean | PlayerArgs
  } 

  export type ScholarshipGetPayload<S extends boolean | null | undefined | ScholarshipArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Scholarship :
    S extends undefined ? never :
    S extends { include: any } & (ScholarshipArgs | ScholarshipFindManyArgs)
    ? Scholarship  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'sponsor' ? InstitutionGetPayload<S['include'][P]> :
        P extends 'player' ? PlayerGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ScholarshipArgs | ScholarshipFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'sponsor' ? InstitutionGetPayload<S['select'][P]> :
        P extends 'player' ? PlayerGetPayload<S['select'][P]> :  P extends keyof Scholarship ? Scholarship[P] : never
  } 
      : Scholarship


  type ScholarshipCountArgs = Merge<
    Omit<ScholarshipFindManyArgs, 'select' | 'include'> & {
      select?: ScholarshipCountAggregateInputType | true
    }
  >

  export interface ScholarshipDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Scholarship that matches the filter.
     * @param {ScholarshipFindUniqueArgs} args - Arguments to find a Scholarship
     * @example
     * // Get one Scholarship
     * const scholarship = await prisma.scholarship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ScholarshipFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ScholarshipFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Scholarship'> extends True ? Prisma__ScholarshipClient<ScholarshipGetPayload<T>> : Prisma__ScholarshipClient<ScholarshipGetPayload<T> | null, null>

    /**
     * Find one Scholarship that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ScholarshipFindUniqueOrThrowArgs} args - Arguments to find a Scholarship
     * @example
     * // Get one Scholarship
     * const scholarship = await prisma.scholarship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ScholarshipFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ScholarshipFindUniqueOrThrowArgs>
    ): Prisma__ScholarshipClient<ScholarshipGetPayload<T>>

    /**
     * Find the first Scholarship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipFindFirstArgs} args - Arguments to find a Scholarship
     * @example
     * // Get one Scholarship
     * const scholarship = await prisma.scholarship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ScholarshipFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ScholarshipFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Scholarship'> extends True ? Prisma__ScholarshipClient<ScholarshipGetPayload<T>> : Prisma__ScholarshipClient<ScholarshipGetPayload<T> | null, null>

    /**
     * Find the first Scholarship that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipFindFirstOrThrowArgs} args - Arguments to find a Scholarship
     * @example
     * // Get one Scholarship
     * const scholarship = await prisma.scholarship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ScholarshipFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ScholarshipFindFirstOrThrowArgs>
    ): Prisma__ScholarshipClient<ScholarshipGetPayload<T>>

    /**
     * Find zero or more Scholarships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scholarships
     * const scholarships = await prisma.scholarship.findMany()
     * 
     * // Get first 10 Scholarships
     * const scholarships = await prisma.scholarship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scholarshipWithIdOnly = await prisma.scholarship.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ScholarshipFindManyArgs>(
      args?: SelectSubset<T, ScholarshipFindManyArgs>
    ): PrismaPromise<Array<ScholarshipGetPayload<T>>>

    /**
     * Create a Scholarship.
     * @param {ScholarshipCreateArgs} args - Arguments to create a Scholarship.
     * @example
     * // Create one Scholarship
     * const Scholarship = await prisma.scholarship.create({
     *   data: {
     *     // ... data to create a Scholarship
     *   }
     * })
     * 
    **/
    create<T extends ScholarshipCreateArgs>(
      args: SelectSubset<T, ScholarshipCreateArgs>
    ): Prisma__ScholarshipClient<ScholarshipGetPayload<T>>

    /**
     * Create many Scholarships.
     *     @param {ScholarshipCreateManyArgs} args - Arguments to create many Scholarships.
     *     @example
     *     // Create many Scholarships
     *     const scholarship = await prisma.scholarship.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ScholarshipCreateManyArgs>(
      args?: SelectSubset<T, ScholarshipCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Scholarship.
     * @param {ScholarshipDeleteArgs} args - Arguments to delete one Scholarship.
     * @example
     * // Delete one Scholarship
     * const Scholarship = await prisma.scholarship.delete({
     *   where: {
     *     // ... filter to delete one Scholarship
     *   }
     * })
     * 
    **/
    delete<T extends ScholarshipDeleteArgs>(
      args: SelectSubset<T, ScholarshipDeleteArgs>
    ): Prisma__ScholarshipClient<ScholarshipGetPayload<T>>

    /**
     * Update one Scholarship.
     * @param {ScholarshipUpdateArgs} args - Arguments to update one Scholarship.
     * @example
     * // Update one Scholarship
     * const scholarship = await prisma.scholarship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ScholarshipUpdateArgs>(
      args: SelectSubset<T, ScholarshipUpdateArgs>
    ): Prisma__ScholarshipClient<ScholarshipGetPayload<T>>

    /**
     * Delete zero or more Scholarships.
     * @param {ScholarshipDeleteManyArgs} args - Arguments to filter Scholarships to delete.
     * @example
     * // Delete a few Scholarships
     * const { count } = await prisma.scholarship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ScholarshipDeleteManyArgs>(
      args?: SelectSubset<T, ScholarshipDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scholarships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scholarships
     * const scholarship = await prisma.scholarship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ScholarshipUpdateManyArgs>(
      args: SelectSubset<T, ScholarshipUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Scholarship.
     * @param {ScholarshipUpsertArgs} args - Arguments to update or create a Scholarship.
     * @example
     * // Update or create a Scholarship
     * const scholarship = await prisma.scholarship.upsert({
     *   create: {
     *     // ... data to create a Scholarship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scholarship we want to update
     *   }
     * })
    **/
    upsert<T extends ScholarshipUpsertArgs>(
      args: SelectSubset<T, ScholarshipUpsertArgs>
    ): Prisma__ScholarshipClient<ScholarshipGetPayload<T>>

    /**
     * Count the number of Scholarships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipCountArgs} args - Arguments to filter Scholarships to count.
     * @example
     * // Count the number of Scholarships
     * const count = await prisma.scholarship.count({
     *   where: {
     *     // ... the filter for the Scholarships we want to count
     *   }
     * })
    **/
    count<T extends ScholarshipCountArgs>(
      args?: Subset<T, ScholarshipCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScholarshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scholarship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScholarshipAggregateArgs>(args: Subset<T, ScholarshipAggregateArgs>): PrismaPromise<GetScholarshipAggregateType<T>>

    /**
     * Group by Scholarship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScholarshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScholarshipGroupByArgs['orderBy'] }
        : { orderBy?: ScholarshipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScholarshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScholarshipGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Scholarship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ScholarshipClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    sponsor<T extends InstitutionArgs= {}>(args?: Subset<T, InstitutionArgs>): Prisma__InstitutionClient<InstitutionGetPayload<T> | Null>;

    player<T extends PlayerArgs= {}>(args?: Subset<T, PlayerArgs>): Prisma__PlayerClient<PlayerGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Scholarship base type for findUnique actions
   */
  export type ScholarshipFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Scholarship
     * 
    **/
    select?: ScholarshipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ScholarshipInclude | null
    /**
     * Filter, which Scholarship to fetch.
     * 
    **/
    where: ScholarshipWhereUniqueInput
  }

  /**
   * Scholarship: findUnique
   */
  export interface ScholarshipFindUniqueArgs extends ScholarshipFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Scholarship findUniqueOrThrow
   */
  export type ScholarshipFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Scholarship
     * 
    **/
    select?: ScholarshipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ScholarshipInclude | null
    /**
     * Filter, which Scholarship to fetch.
     * 
    **/
    where: ScholarshipWhereUniqueInput
  }


  /**
   * Scholarship base type for findFirst actions
   */
  export type ScholarshipFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Scholarship
     * 
    **/
    select?: ScholarshipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ScholarshipInclude | null
    /**
     * Filter, which Scholarship to fetch.
     * 
    **/
    where?: ScholarshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scholarships to fetch.
     * 
    **/
    orderBy?: Enumerable<ScholarshipOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scholarships.
     * 
    **/
    cursor?: ScholarshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scholarships from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scholarships.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scholarships.
     * 
    **/
    distinct?: Enumerable<ScholarshipScalarFieldEnum>
  }

  /**
   * Scholarship: findFirst
   */
  export interface ScholarshipFindFirstArgs extends ScholarshipFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Scholarship findFirstOrThrow
   */
  export type ScholarshipFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Scholarship
     * 
    **/
    select?: ScholarshipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ScholarshipInclude | null
    /**
     * Filter, which Scholarship to fetch.
     * 
    **/
    where?: ScholarshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scholarships to fetch.
     * 
    **/
    orderBy?: Enumerable<ScholarshipOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scholarships.
     * 
    **/
    cursor?: ScholarshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scholarships from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scholarships.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scholarships.
     * 
    **/
    distinct?: Enumerable<ScholarshipScalarFieldEnum>
  }


  /**
   * Scholarship findMany
   */
  export type ScholarshipFindManyArgs = {
    /**
     * Select specific fields to fetch from the Scholarship
     * 
    **/
    select?: ScholarshipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ScholarshipInclude | null
    /**
     * Filter, which Scholarships to fetch.
     * 
    **/
    where?: ScholarshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scholarships to fetch.
     * 
    **/
    orderBy?: Enumerable<ScholarshipOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scholarships.
     * 
    **/
    cursor?: ScholarshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scholarships from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scholarships.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ScholarshipScalarFieldEnum>
  }


  /**
   * Scholarship create
   */
  export type ScholarshipCreateArgs = {
    /**
     * Select specific fields to fetch from the Scholarship
     * 
    **/
    select?: ScholarshipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ScholarshipInclude | null
    /**
     * The data needed to create a Scholarship.
     * 
    **/
    data: XOR<ScholarshipCreateInput, ScholarshipUncheckedCreateInput>
  }


  /**
   * Scholarship createMany
   */
  export type ScholarshipCreateManyArgs = {
    /**
     * The data used to create many Scholarships.
     * 
    **/
    data: Enumerable<ScholarshipCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Scholarship update
   */
  export type ScholarshipUpdateArgs = {
    /**
     * Select specific fields to fetch from the Scholarship
     * 
    **/
    select?: ScholarshipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ScholarshipInclude | null
    /**
     * The data needed to update a Scholarship.
     * 
    **/
    data: XOR<ScholarshipUpdateInput, ScholarshipUncheckedUpdateInput>
    /**
     * Choose, which Scholarship to update.
     * 
    **/
    where: ScholarshipWhereUniqueInput
  }


  /**
   * Scholarship updateMany
   */
  export type ScholarshipUpdateManyArgs = {
    /**
     * The data used to update Scholarships.
     * 
    **/
    data: XOR<ScholarshipUpdateManyMutationInput, ScholarshipUncheckedUpdateManyInput>
    /**
     * Filter which Scholarships to update
     * 
    **/
    where?: ScholarshipWhereInput
  }


  /**
   * Scholarship upsert
   */
  export type ScholarshipUpsertArgs = {
    /**
     * Select specific fields to fetch from the Scholarship
     * 
    **/
    select?: ScholarshipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ScholarshipInclude | null
    /**
     * The filter to search for the Scholarship to update in case it exists.
     * 
    **/
    where: ScholarshipWhereUniqueInput
    /**
     * In case the Scholarship found by the `where` argument doesn't exist, create a new Scholarship with this data.
     * 
    **/
    create: XOR<ScholarshipCreateInput, ScholarshipUncheckedCreateInput>
    /**
     * In case the Scholarship was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ScholarshipUpdateInput, ScholarshipUncheckedUpdateInput>
  }


  /**
   * Scholarship delete
   */
  export type ScholarshipDeleteArgs = {
    /**
     * Select specific fields to fetch from the Scholarship
     * 
    **/
    select?: ScholarshipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ScholarshipInclude | null
    /**
     * Filter which Scholarship to delete.
     * 
    **/
    where: ScholarshipWhereUniqueInput
  }


  /**
   * Scholarship deleteMany
   */
  export type ScholarshipDeleteManyArgs = {
    /**
     * Filter which Scholarships to delete
     * 
    **/
    where?: ScholarshipWhereInput
  }


  /**
   * Scholarship without action
   */
  export type ScholarshipArgs = {
    /**
     * Select specific fields to fetch from the Scholarship
     * 
    **/
    select?: ScholarshipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ScholarshipInclude | null
  }



  /**
   * Model Account
   */


  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    username: number
    password: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    updatedAt?: true
    createdAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    updatedAt?: true
    createdAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type AccountAggregateArgs = {
    /**
     * Filter which Account to aggregate.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs = {
    where?: AccountWhereInput
    orderBy?: Enumerable<AccountOrderByWithAggregationInput>
    by: Array<AccountScalarFieldEnum>
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }


  export type AccountGroupByOutputType = {
    id: string
    username: string
    password: string
    updatedAt: Date
    createdAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect = {
    id?: boolean
    username?: boolean
    password?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    recruitment?: boolean | RecruitmentFindManyArgs
    Staff?: boolean | StaffFindManyArgs
    _count?: boolean | AccountCountOutputTypeArgs
  }


  export type AccountInclude = {
    recruitment?: boolean | RecruitmentFindManyArgs
    Staff?: boolean | StaffFindManyArgs
    _count?: boolean | AccountCountOutputTypeArgs
  } 

  export type AccountGetPayload<S extends boolean | null | undefined | AccountArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Account :
    S extends undefined ? never :
    S extends { include: any } & (AccountArgs | AccountFindManyArgs)
    ? Account  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'recruitment' ? Array < RecruitmentGetPayload<S['include'][P]>>  :
        P extends 'Staff' ? Array < StaffGetPayload<S['include'][P]>>  :
        P extends '_count' ? AccountCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AccountArgs | AccountFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'recruitment' ? Array < RecruitmentGetPayload<S['select'][P]>>  :
        P extends 'Staff' ? Array < StaffGetPayload<S['select'][P]>>  :
        P extends '_count' ? AccountCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Account ? Account[P] : never
  } 
      : Account


  type AccountCountArgs = Merge<
    Omit<AccountFindManyArgs, 'select' | 'include'> & {
      select?: AccountCountAggregateInputType | true
    }
  >

  export interface AccountDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AccountFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Account'> extends True ? Prisma__AccountClient<AccountGetPayload<T>> : Prisma__AccountClient<AccountGetPayload<T> | null, null>

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AccountFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Account'> extends True ? Prisma__AccountClient<AccountGetPayload<T>> : Prisma__AccountClient<AccountGetPayload<T> | null, null>

    /**
     * Find the first Account that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs>(
      args?: SelectSubset<T, AccountFindManyArgs>
    ): PrismaPromise<Array<AccountGetPayload<T>>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs>(
      args: SelectSubset<T, AccountCreateArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs>(
      args?: SelectSubset<T, AccountCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs>(
      args: SelectSubset<T, AccountDeleteArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs>(
      args: SelectSubset<T, AccountUpdateArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs>(
      args?: SelectSubset<T, AccountDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs>(
      args: SelectSubset<T, AccountUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs>(
      args: SelectSubset<T, AccountUpsertArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AccountClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    recruitment<T extends RecruitmentFindManyArgs= {}>(args?: Subset<T, RecruitmentFindManyArgs>): PrismaPromise<Array<RecruitmentGetPayload<T>>| Null>;

    Staff<T extends StaffFindManyArgs= {}>(args?: Subset<T, StaffFindManyArgs>): PrismaPromise<Array<StaffGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Account base type for findUnique actions
   */
  export type AccountFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     * 
    **/
    where: AccountWhereUniqueInput
  }

  /**
   * Account: findUnique
   */
  export interface AccountFindUniqueArgs extends AccountFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     * 
    **/
    where: AccountWhereUniqueInput
  }


  /**
   * Account base type for findFirst actions
   */
  export type AccountFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     * 
    **/
    distinct?: Enumerable<AccountScalarFieldEnum>
  }

  /**
   * Account: findFirst
   */
  export interface AccountFindFirstArgs extends AccountFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     * 
    **/
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Accounts to fetch.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account create
   */
  export type AccountCreateArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The data needed to create a Account.
     * 
    **/
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs = {
    /**
     * The data used to create many Accounts.
     * 
    **/
    data: Enumerable<AccountCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The data needed to update a Account.
     * 
    **/
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     * 
    **/
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs = {
    /**
     * The data used to update Accounts.
     * 
    **/
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     * 
    **/
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The filter to search for the Account to update in case it exists.
     * 
    **/
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     * 
    **/
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter which Account to delete.
     * 
    **/
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs = {
    /**
     * Filter which Accounts to delete
     * 
    **/
    where?: AccountWhereInput
  }


  /**
   * Account without action
   */
  export type AccountArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
  }



  /**
   * Model Recruitment
   */


  export type AggregateRecruitment = {
    _count: RecruitmentCountAggregateOutputType | null
    _min: RecruitmentMinAggregateOutputType | null
    _max: RecruitmentMaxAggregateOutputType | null
  }

  export type RecruitmentMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    passed: boolean | null
    resume: string | null
    playerId: string | null
    accountId: string | null
  }

  export type RecruitmentMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    passed: boolean | null
    resume: string | null
    playerId: string | null
    accountId: string | null
  }

  export type RecruitmentCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    passed: number
    resume: number
    playerId: number
    accountId: number
    _all: number
  }


  export type RecruitmentMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    passed?: true
    resume?: true
    playerId?: true
    accountId?: true
  }

  export type RecruitmentMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    passed?: true
    resume?: true
    playerId?: true
    accountId?: true
  }

  export type RecruitmentCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    passed?: true
    resume?: true
    playerId?: true
    accountId?: true
    _all?: true
  }

  export type RecruitmentAggregateArgs = {
    /**
     * Filter which Recruitment to aggregate.
     * 
    **/
    where?: RecruitmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recruitments to fetch.
     * 
    **/
    orderBy?: Enumerable<RecruitmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RecruitmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recruitments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recruitments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recruitments
    **/
    _count?: true | RecruitmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecruitmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecruitmentMaxAggregateInputType
  }

  export type GetRecruitmentAggregateType<T extends RecruitmentAggregateArgs> = {
        [P in keyof T & keyof AggregateRecruitment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecruitment[P]>
      : GetScalarType<T[P], AggregateRecruitment[P]>
  }




  export type RecruitmentGroupByArgs = {
    where?: RecruitmentWhereInput
    orderBy?: Enumerable<RecruitmentOrderByWithAggregationInput>
    by: Array<RecruitmentScalarFieldEnum>
    having?: RecruitmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecruitmentCountAggregateInputType | true
    _min?: RecruitmentMinAggregateInputType
    _max?: RecruitmentMaxAggregateInputType
  }


  export type RecruitmentGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    passed: boolean
    resume: string | null
    playerId: string
    accountId: string
    _count: RecruitmentCountAggregateOutputType | null
    _min: RecruitmentMinAggregateOutputType | null
    _max: RecruitmentMaxAggregateOutputType | null
  }

  type GetRecruitmentGroupByPayload<T extends RecruitmentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RecruitmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecruitmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecruitmentGroupByOutputType[P]>
            : GetScalarType<T[P], RecruitmentGroupByOutputType[P]>
        }
      >
    >


  export type RecruitmentSelect = {
    id?: boolean
    player?: boolean | PlayerArgs
    recruiter?: boolean | AccountArgs
    createdAt?: boolean
    updatedAt?: boolean
    passed?: boolean
    interviews?: boolean | InterviewFindManyArgs
    resume?: boolean
    playerId?: boolean
    accountId?: boolean
    _count?: boolean | RecruitmentCountOutputTypeArgs
  }


  export type RecruitmentInclude = {
    player?: boolean | PlayerArgs
    recruiter?: boolean | AccountArgs
    interviews?: boolean | InterviewFindManyArgs
    _count?: boolean | RecruitmentCountOutputTypeArgs
  } 

  export type RecruitmentGetPayload<S extends boolean | null | undefined | RecruitmentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Recruitment :
    S extends undefined ? never :
    S extends { include: any } & (RecruitmentArgs | RecruitmentFindManyArgs)
    ? Recruitment  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'player' ? PlayerGetPayload<S['include'][P]> :
        P extends 'recruiter' ? AccountGetPayload<S['include'][P]> :
        P extends 'interviews' ? Array < InterviewGetPayload<S['include'][P]>>  :
        P extends '_count' ? RecruitmentCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RecruitmentArgs | RecruitmentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'player' ? PlayerGetPayload<S['select'][P]> :
        P extends 'recruiter' ? AccountGetPayload<S['select'][P]> :
        P extends 'interviews' ? Array < InterviewGetPayload<S['select'][P]>>  :
        P extends '_count' ? RecruitmentCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Recruitment ? Recruitment[P] : never
  } 
      : Recruitment


  type RecruitmentCountArgs = Merge<
    Omit<RecruitmentFindManyArgs, 'select' | 'include'> & {
      select?: RecruitmentCountAggregateInputType | true
    }
  >

  export interface RecruitmentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Recruitment that matches the filter.
     * @param {RecruitmentFindUniqueArgs} args - Arguments to find a Recruitment
     * @example
     * // Get one Recruitment
     * const recruitment = await prisma.recruitment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RecruitmentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RecruitmentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Recruitment'> extends True ? Prisma__RecruitmentClient<RecruitmentGetPayload<T>> : Prisma__RecruitmentClient<RecruitmentGetPayload<T> | null, null>

    /**
     * Find one Recruitment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RecruitmentFindUniqueOrThrowArgs} args - Arguments to find a Recruitment
     * @example
     * // Get one Recruitment
     * const recruitment = await prisma.recruitment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RecruitmentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RecruitmentFindUniqueOrThrowArgs>
    ): Prisma__RecruitmentClient<RecruitmentGetPayload<T>>

    /**
     * Find the first Recruitment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitmentFindFirstArgs} args - Arguments to find a Recruitment
     * @example
     * // Get one Recruitment
     * const recruitment = await prisma.recruitment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RecruitmentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RecruitmentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Recruitment'> extends True ? Prisma__RecruitmentClient<RecruitmentGetPayload<T>> : Prisma__RecruitmentClient<RecruitmentGetPayload<T> | null, null>

    /**
     * Find the first Recruitment that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitmentFindFirstOrThrowArgs} args - Arguments to find a Recruitment
     * @example
     * // Get one Recruitment
     * const recruitment = await prisma.recruitment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RecruitmentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RecruitmentFindFirstOrThrowArgs>
    ): Prisma__RecruitmentClient<RecruitmentGetPayload<T>>

    /**
     * Find zero or more Recruitments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recruitments
     * const recruitments = await prisma.recruitment.findMany()
     * 
     * // Get first 10 Recruitments
     * const recruitments = await prisma.recruitment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recruitmentWithIdOnly = await prisma.recruitment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RecruitmentFindManyArgs>(
      args?: SelectSubset<T, RecruitmentFindManyArgs>
    ): PrismaPromise<Array<RecruitmentGetPayload<T>>>

    /**
     * Create a Recruitment.
     * @param {RecruitmentCreateArgs} args - Arguments to create a Recruitment.
     * @example
     * // Create one Recruitment
     * const Recruitment = await prisma.recruitment.create({
     *   data: {
     *     // ... data to create a Recruitment
     *   }
     * })
     * 
    **/
    create<T extends RecruitmentCreateArgs>(
      args: SelectSubset<T, RecruitmentCreateArgs>
    ): Prisma__RecruitmentClient<RecruitmentGetPayload<T>>

    /**
     * Create many Recruitments.
     *     @param {RecruitmentCreateManyArgs} args - Arguments to create many Recruitments.
     *     @example
     *     // Create many Recruitments
     *     const recruitment = await prisma.recruitment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RecruitmentCreateManyArgs>(
      args?: SelectSubset<T, RecruitmentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Recruitment.
     * @param {RecruitmentDeleteArgs} args - Arguments to delete one Recruitment.
     * @example
     * // Delete one Recruitment
     * const Recruitment = await prisma.recruitment.delete({
     *   where: {
     *     // ... filter to delete one Recruitment
     *   }
     * })
     * 
    **/
    delete<T extends RecruitmentDeleteArgs>(
      args: SelectSubset<T, RecruitmentDeleteArgs>
    ): Prisma__RecruitmentClient<RecruitmentGetPayload<T>>

    /**
     * Update one Recruitment.
     * @param {RecruitmentUpdateArgs} args - Arguments to update one Recruitment.
     * @example
     * // Update one Recruitment
     * const recruitment = await prisma.recruitment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RecruitmentUpdateArgs>(
      args: SelectSubset<T, RecruitmentUpdateArgs>
    ): Prisma__RecruitmentClient<RecruitmentGetPayload<T>>

    /**
     * Delete zero or more Recruitments.
     * @param {RecruitmentDeleteManyArgs} args - Arguments to filter Recruitments to delete.
     * @example
     * // Delete a few Recruitments
     * const { count } = await prisma.recruitment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RecruitmentDeleteManyArgs>(
      args?: SelectSubset<T, RecruitmentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recruitments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recruitments
     * const recruitment = await prisma.recruitment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RecruitmentUpdateManyArgs>(
      args: SelectSubset<T, RecruitmentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Recruitment.
     * @param {RecruitmentUpsertArgs} args - Arguments to update or create a Recruitment.
     * @example
     * // Update or create a Recruitment
     * const recruitment = await prisma.recruitment.upsert({
     *   create: {
     *     // ... data to create a Recruitment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recruitment we want to update
     *   }
     * })
    **/
    upsert<T extends RecruitmentUpsertArgs>(
      args: SelectSubset<T, RecruitmentUpsertArgs>
    ): Prisma__RecruitmentClient<RecruitmentGetPayload<T>>

    /**
     * Count the number of Recruitments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitmentCountArgs} args - Arguments to filter Recruitments to count.
     * @example
     * // Count the number of Recruitments
     * const count = await prisma.recruitment.count({
     *   where: {
     *     // ... the filter for the Recruitments we want to count
     *   }
     * })
    **/
    count<T extends RecruitmentCountArgs>(
      args?: Subset<T, RecruitmentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecruitmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recruitment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecruitmentAggregateArgs>(args: Subset<T, RecruitmentAggregateArgs>): PrismaPromise<GetRecruitmentAggregateType<T>>

    /**
     * Group by Recruitment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecruitmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecruitmentGroupByArgs['orderBy'] }
        : { orderBy?: RecruitmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecruitmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecruitmentGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Recruitment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RecruitmentClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    player<T extends PlayerArgs= {}>(args?: Subset<T, PlayerArgs>): Prisma__PlayerClient<PlayerGetPayload<T> | Null>;

    recruiter<T extends AccountArgs= {}>(args?: Subset<T, AccountArgs>): Prisma__AccountClient<AccountGetPayload<T> | Null>;

    interviews<T extends InterviewFindManyArgs= {}>(args?: Subset<T, InterviewFindManyArgs>): PrismaPromise<Array<InterviewGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Recruitment base type for findUnique actions
   */
  export type RecruitmentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Recruitment
     * 
    **/
    select?: RecruitmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecruitmentInclude | null
    /**
     * Filter, which Recruitment to fetch.
     * 
    **/
    where: RecruitmentWhereUniqueInput
  }

  /**
   * Recruitment: findUnique
   */
  export interface RecruitmentFindUniqueArgs extends RecruitmentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Recruitment findUniqueOrThrow
   */
  export type RecruitmentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Recruitment
     * 
    **/
    select?: RecruitmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecruitmentInclude | null
    /**
     * Filter, which Recruitment to fetch.
     * 
    **/
    where: RecruitmentWhereUniqueInput
  }


  /**
   * Recruitment base type for findFirst actions
   */
  export type RecruitmentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Recruitment
     * 
    **/
    select?: RecruitmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecruitmentInclude | null
    /**
     * Filter, which Recruitment to fetch.
     * 
    **/
    where?: RecruitmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recruitments to fetch.
     * 
    **/
    orderBy?: Enumerable<RecruitmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recruitments.
     * 
    **/
    cursor?: RecruitmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recruitments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recruitments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recruitments.
     * 
    **/
    distinct?: Enumerable<RecruitmentScalarFieldEnum>
  }

  /**
   * Recruitment: findFirst
   */
  export interface RecruitmentFindFirstArgs extends RecruitmentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Recruitment findFirstOrThrow
   */
  export type RecruitmentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Recruitment
     * 
    **/
    select?: RecruitmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecruitmentInclude | null
    /**
     * Filter, which Recruitment to fetch.
     * 
    **/
    where?: RecruitmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recruitments to fetch.
     * 
    **/
    orderBy?: Enumerable<RecruitmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recruitments.
     * 
    **/
    cursor?: RecruitmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recruitments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recruitments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recruitments.
     * 
    **/
    distinct?: Enumerable<RecruitmentScalarFieldEnum>
  }


  /**
   * Recruitment findMany
   */
  export type RecruitmentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Recruitment
     * 
    **/
    select?: RecruitmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecruitmentInclude | null
    /**
     * Filter, which Recruitments to fetch.
     * 
    **/
    where?: RecruitmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recruitments to fetch.
     * 
    **/
    orderBy?: Enumerable<RecruitmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recruitments.
     * 
    **/
    cursor?: RecruitmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recruitments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recruitments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RecruitmentScalarFieldEnum>
  }


  /**
   * Recruitment create
   */
  export type RecruitmentCreateArgs = {
    /**
     * Select specific fields to fetch from the Recruitment
     * 
    **/
    select?: RecruitmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecruitmentInclude | null
    /**
     * The data needed to create a Recruitment.
     * 
    **/
    data: XOR<RecruitmentCreateInput, RecruitmentUncheckedCreateInput>
  }


  /**
   * Recruitment createMany
   */
  export type RecruitmentCreateManyArgs = {
    /**
     * The data used to create many Recruitments.
     * 
    **/
    data: Enumerable<RecruitmentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Recruitment update
   */
  export type RecruitmentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Recruitment
     * 
    **/
    select?: RecruitmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecruitmentInclude | null
    /**
     * The data needed to update a Recruitment.
     * 
    **/
    data: XOR<RecruitmentUpdateInput, RecruitmentUncheckedUpdateInput>
    /**
     * Choose, which Recruitment to update.
     * 
    **/
    where: RecruitmentWhereUniqueInput
  }


  /**
   * Recruitment updateMany
   */
  export type RecruitmentUpdateManyArgs = {
    /**
     * The data used to update Recruitments.
     * 
    **/
    data: XOR<RecruitmentUpdateManyMutationInput, RecruitmentUncheckedUpdateManyInput>
    /**
     * Filter which Recruitments to update
     * 
    **/
    where?: RecruitmentWhereInput
  }


  /**
   * Recruitment upsert
   */
  export type RecruitmentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Recruitment
     * 
    **/
    select?: RecruitmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecruitmentInclude | null
    /**
     * The filter to search for the Recruitment to update in case it exists.
     * 
    **/
    where: RecruitmentWhereUniqueInput
    /**
     * In case the Recruitment found by the `where` argument doesn't exist, create a new Recruitment with this data.
     * 
    **/
    create: XOR<RecruitmentCreateInput, RecruitmentUncheckedCreateInput>
    /**
     * In case the Recruitment was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RecruitmentUpdateInput, RecruitmentUncheckedUpdateInput>
  }


  /**
   * Recruitment delete
   */
  export type RecruitmentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Recruitment
     * 
    **/
    select?: RecruitmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecruitmentInclude | null
    /**
     * Filter which Recruitment to delete.
     * 
    **/
    where: RecruitmentWhereUniqueInput
  }


  /**
   * Recruitment deleteMany
   */
  export type RecruitmentDeleteManyArgs = {
    /**
     * Filter which Recruitments to delete
     * 
    **/
    where?: RecruitmentWhereInput
  }


  /**
   * Recruitment without action
   */
  export type RecruitmentArgs = {
    /**
     * Select specific fields to fetch from the Recruitment
     * 
    **/
    select?: RecruitmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecruitmentInclude | null
  }



  /**
   * Model Interview
   */


  export type AggregateInterview = {
    _count: InterviewCountAggregateOutputType | null
    _min: InterviewMinAggregateOutputType | null
    _max: InterviewMaxAggregateOutputType | null
  }

  export type InterviewMinAggregateOutputType = {
    id: string | null
    stage: Stage | null
    passed: boolean | null
    at: Date | null
    comment: string | null
    recruitmentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InterviewMaxAggregateOutputType = {
    id: string | null
    stage: Stage | null
    passed: boolean | null
    at: Date | null
    comment: string | null
    recruitmentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InterviewCountAggregateOutputType = {
    id: number
    stage: number
    passed: number
    at: number
    comment: number
    recruitmentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InterviewMinAggregateInputType = {
    id?: true
    stage?: true
    passed?: true
    at?: true
    comment?: true
    recruitmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InterviewMaxAggregateInputType = {
    id?: true
    stage?: true
    passed?: true
    at?: true
    comment?: true
    recruitmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InterviewCountAggregateInputType = {
    id?: true
    stage?: true
    passed?: true
    at?: true
    comment?: true
    recruitmentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InterviewAggregateArgs = {
    /**
     * Filter which Interview to aggregate.
     * 
    **/
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     * 
    **/
    orderBy?: Enumerable<InterviewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Interviews
    **/
    _count?: true | InterviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterviewMaxAggregateInputType
  }

  export type GetInterviewAggregateType<T extends InterviewAggregateArgs> = {
        [P in keyof T & keyof AggregateInterview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterview[P]>
      : GetScalarType<T[P], AggregateInterview[P]>
  }




  export type InterviewGroupByArgs = {
    where?: InterviewWhereInput
    orderBy?: Enumerable<InterviewOrderByWithAggregationInput>
    by: Array<InterviewScalarFieldEnum>
    having?: InterviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterviewCountAggregateInputType | true
    _min?: InterviewMinAggregateInputType
    _max?: InterviewMaxAggregateInputType
  }


  export type InterviewGroupByOutputType = {
    id: string
    stage: Stage
    passed: boolean
    at: Date
    comment: string
    recruitmentId: string
    createdAt: Date
    updatedAt: Date
    _count: InterviewCountAggregateOutputType | null
    _min: InterviewMinAggregateOutputType | null
    _max: InterviewMaxAggregateOutputType | null
  }

  type GetInterviewGroupByPayload<T extends InterviewGroupByArgs> = PrismaPromise<
    Array<
      PickArray<InterviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterviewGroupByOutputType[P]>
            : GetScalarType<T[P], InterviewGroupByOutputType[P]>
        }
      >
    >


  export type InterviewSelect = {
    id?: boolean
    stage?: boolean
    passed?: boolean
    at?: boolean
    Recruitment?: boolean | RecruitmentArgs
    comment?: boolean
    recruitmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type InterviewInclude = {
    Recruitment?: boolean | RecruitmentArgs
  } 

  export type InterviewGetPayload<S extends boolean | null | undefined | InterviewArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Interview :
    S extends undefined ? never :
    S extends { include: any } & (InterviewArgs | InterviewFindManyArgs)
    ? Interview  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Recruitment' ? RecruitmentGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (InterviewArgs | InterviewFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Recruitment' ? RecruitmentGetPayload<S['select'][P]> :  P extends keyof Interview ? Interview[P] : never
  } 
      : Interview


  type InterviewCountArgs = Merge<
    Omit<InterviewFindManyArgs, 'select' | 'include'> & {
      select?: InterviewCountAggregateInputType | true
    }
  >

  export interface InterviewDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Interview that matches the filter.
     * @param {InterviewFindUniqueArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InterviewFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, InterviewFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Interview'> extends True ? Prisma__InterviewClient<InterviewGetPayload<T>> : Prisma__InterviewClient<InterviewGetPayload<T> | null, null>

    /**
     * Find one Interview that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InterviewFindUniqueOrThrowArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InterviewFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, InterviewFindUniqueOrThrowArgs>
    ): Prisma__InterviewClient<InterviewGetPayload<T>>

    /**
     * Find the first Interview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewFindFirstArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InterviewFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, InterviewFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Interview'> extends True ? Prisma__InterviewClient<InterviewGetPayload<T>> : Prisma__InterviewClient<InterviewGetPayload<T> | null, null>

    /**
     * Find the first Interview that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewFindFirstOrThrowArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InterviewFindFirstOrThrowArgs>(
      args?: SelectSubset<T, InterviewFindFirstOrThrowArgs>
    ): Prisma__InterviewClient<InterviewGetPayload<T>>

    /**
     * Find zero or more Interviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interviews
     * const interviews = await prisma.interview.findMany()
     * 
     * // Get first 10 Interviews
     * const interviews = await prisma.interview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interviewWithIdOnly = await prisma.interview.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InterviewFindManyArgs>(
      args?: SelectSubset<T, InterviewFindManyArgs>
    ): PrismaPromise<Array<InterviewGetPayload<T>>>

    /**
     * Create a Interview.
     * @param {InterviewCreateArgs} args - Arguments to create a Interview.
     * @example
     * // Create one Interview
     * const Interview = await prisma.interview.create({
     *   data: {
     *     // ... data to create a Interview
     *   }
     * })
     * 
    **/
    create<T extends InterviewCreateArgs>(
      args: SelectSubset<T, InterviewCreateArgs>
    ): Prisma__InterviewClient<InterviewGetPayload<T>>

    /**
     * Create many Interviews.
     *     @param {InterviewCreateManyArgs} args - Arguments to create many Interviews.
     *     @example
     *     // Create many Interviews
     *     const interview = await prisma.interview.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InterviewCreateManyArgs>(
      args?: SelectSubset<T, InterviewCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Interview.
     * @param {InterviewDeleteArgs} args - Arguments to delete one Interview.
     * @example
     * // Delete one Interview
     * const Interview = await prisma.interview.delete({
     *   where: {
     *     // ... filter to delete one Interview
     *   }
     * })
     * 
    **/
    delete<T extends InterviewDeleteArgs>(
      args: SelectSubset<T, InterviewDeleteArgs>
    ): Prisma__InterviewClient<InterviewGetPayload<T>>

    /**
     * Update one Interview.
     * @param {InterviewUpdateArgs} args - Arguments to update one Interview.
     * @example
     * // Update one Interview
     * const interview = await prisma.interview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InterviewUpdateArgs>(
      args: SelectSubset<T, InterviewUpdateArgs>
    ): Prisma__InterviewClient<InterviewGetPayload<T>>

    /**
     * Delete zero or more Interviews.
     * @param {InterviewDeleteManyArgs} args - Arguments to filter Interviews to delete.
     * @example
     * // Delete a few Interviews
     * const { count } = await prisma.interview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InterviewDeleteManyArgs>(
      args?: SelectSubset<T, InterviewDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interviews
     * const interview = await prisma.interview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InterviewUpdateManyArgs>(
      args: SelectSubset<T, InterviewUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Interview.
     * @param {InterviewUpsertArgs} args - Arguments to update or create a Interview.
     * @example
     * // Update or create a Interview
     * const interview = await prisma.interview.upsert({
     *   create: {
     *     // ... data to create a Interview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interview we want to update
     *   }
     * })
    **/
    upsert<T extends InterviewUpsertArgs>(
      args: SelectSubset<T, InterviewUpsertArgs>
    ): Prisma__InterviewClient<InterviewGetPayload<T>>

    /**
     * Count the number of Interviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewCountArgs} args - Arguments to filter Interviews to count.
     * @example
     * // Count the number of Interviews
     * const count = await prisma.interview.count({
     *   where: {
     *     // ... the filter for the Interviews we want to count
     *   }
     * })
    **/
    count<T extends InterviewCountArgs>(
      args?: Subset<T, InterviewCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InterviewAggregateArgs>(args: Subset<T, InterviewAggregateArgs>): PrismaPromise<GetInterviewAggregateType<T>>

    /**
     * Group by Interview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InterviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterviewGroupByArgs['orderBy'] }
        : { orderBy?: InterviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InterviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Interview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__InterviewClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Recruitment<T extends RecruitmentArgs= {}>(args?: Subset<T, RecruitmentArgs>): Prisma__RecruitmentClient<RecruitmentGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Interview base type for findUnique actions
   */
  export type InterviewFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Interview
     * 
    **/
    select?: InterviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InterviewInclude | null
    /**
     * Filter, which Interview to fetch.
     * 
    **/
    where: InterviewWhereUniqueInput
  }

  /**
   * Interview: findUnique
   */
  export interface InterviewFindUniqueArgs extends InterviewFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Interview findUniqueOrThrow
   */
  export type InterviewFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Interview
     * 
    **/
    select?: InterviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InterviewInclude | null
    /**
     * Filter, which Interview to fetch.
     * 
    **/
    where: InterviewWhereUniqueInput
  }


  /**
   * Interview base type for findFirst actions
   */
  export type InterviewFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Interview
     * 
    **/
    select?: InterviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InterviewInclude | null
    /**
     * Filter, which Interview to fetch.
     * 
    **/
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     * 
    **/
    orderBy?: Enumerable<InterviewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interviews.
     * 
    **/
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interviews.
     * 
    **/
    distinct?: Enumerable<InterviewScalarFieldEnum>
  }

  /**
   * Interview: findFirst
   */
  export interface InterviewFindFirstArgs extends InterviewFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Interview findFirstOrThrow
   */
  export type InterviewFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Interview
     * 
    **/
    select?: InterviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InterviewInclude | null
    /**
     * Filter, which Interview to fetch.
     * 
    **/
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     * 
    **/
    orderBy?: Enumerable<InterviewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interviews.
     * 
    **/
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interviews.
     * 
    **/
    distinct?: Enumerable<InterviewScalarFieldEnum>
  }


  /**
   * Interview findMany
   */
  export type InterviewFindManyArgs = {
    /**
     * Select specific fields to fetch from the Interview
     * 
    **/
    select?: InterviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InterviewInclude | null
    /**
     * Filter, which Interviews to fetch.
     * 
    **/
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     * 
    **/
    orderBy?: Enumerable<InterviewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Interviews.
     * 
    **/
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     * 
    **/
    skip?: number
    distinct?: Enumerable<InterviewScalarFieldEnum>
  }


  /**
   * Interview create
   */
  export type InterviewCreateArgs = {
    /**
     * Select specific fields to fetch from the Interview
     * 
    **/
    select?: InterviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InterviewInclude | null
    /**
     * The data needed to create a Interview.
     * 
    **/
    data: XOR<InterviewCreateInput, InterviewUncheckedCreateInput>
  }


  /**
   * Interview createMany
   */
  export type InterviewCreateManyArgs = {
    /**
     * The data used to create many Interviews.
     * 
    **/
    data: Enumerable<InterviewCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Interview update
   */
  export type InterviewUpdateArgs = {
    /**
     * Select specific fields to fetch from the Interview
     * 
    **/
    select?: InterviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InterviewInclude | null
    /**
     * The data needed to update a Interview.
     * 
    **/
    data: XOR<InterviewUpdateInput, InterviewUncheckedUpdateInput>
    /**
     * Choose, which Interview to update.
     * 
    **/
    where: InterviewWhereUniqueInput
  }


  /**
   * Interview updateMany
   */
  export type InterviewUpdateManyArgs = {
    /**
     * The data used to update Interviews.
     * 
    **/
    data: XOR<InterviewUpdateManyMutationInput, InterviewUncheckedUpdateManyInput>
    /**
     * Filter which Interviews to update
     * 
    **/
    where?: InterviewWhereInput
  }


  /**
   * Interview upsert
   */
  export type InterviewUpsertArgs = {
    /**
     * Select specific fields to fetch from the Interview
     * 
    **/
    select?: InterviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InterviewInclude | null
    /**
     * The filter to search for the Interview to update in case it exists.
     * 
    **/
    where: InterviewWhereUniqueInput
    /**
     * In case the Interview found by the `where` argument doesn't exist, create a new Interview with this data.
     * 
    **/
    create: XOR<InterviewCreateInput, InterviewUncheckedCreateInput>
    /**
     * In case the Interview was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<InterviewUpdateInput, InterviewUncheckedUpdateInput>
  }


  /**
   * Interview delete
   */
  export type InterviewDeleteArgs = {
    /**
     * Select specific fields to fetch from the Interview
     * 
    **/
    select?: InterviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InterviewInclude | null
    /**
     * Filter which Interview to delete.
     * 
    **/
    where: InterviewWhereUniqueInput
  }


  /**
   * Interview deleteMany
   */
  export type InterviewDeleteManyArgs = {
    /**
     * Filter which Interviews to delete
     * 
    **/
    where?: InterviewWhereInput
  }


  /**
   * Interview without action
   */
  export type InterviewArgs = {
    /**
     * Select specific fields to fetch from the Interview
     * 
    **/
    select?: InterviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InterviewInclude | null
  }



  /**
   * Model Injury
   */


  export type AggregateInjury = {
    _count: InjuryCountAggregateOutputType | null
    _min: InjuryMinAggregateOutputType | null
    _max: InjuryMaxAggregateOutputType | null
  }

  export type InjuryMinAggregateOutputType = {
    id: string | null
    playerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InjuryMaxAggregateOutputType = {
    id: string | null
    playerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InjuryCountAggregateOutputType = {
    id: number
    playerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InjuryMinAggregateInputType = {
    id?: true
    playerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InjuryMaxAggregateInputType = {
    id?: true
    playerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InjuryCountAggregateInputType = {
    id?: true
    playerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InjuryAggregateArgs = {
    /**
     * Filter which Injury to aggregate.
     * 
    **/
    where?: InjuryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Injuries to fetch.
     * 
    **/
    orderBy?: Enumerable<InjuryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: InjuryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Injuries from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Injuries.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Injuries
    **/
    _count?: true | InjuryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InjuryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InjuryMaxAggregateInputType
  }

  export type GetInjuryAggregateType<T extends InjuryAggregateArgs> = {
        [P in keyof T & keyof AggregateInjury]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInjury[P]>
      : GetScalarType<T[P], AggregateInjury[P]>
  }




  export type InjuryGroupByArgs = {
    where?: InjuryWhereInput
    orderBy?: Enumerable<InjuryOrderByWithAggregationInput>
    by: Array<InjuryScalarFieldEnum>
    having?: InjuryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InjuryCountAggregateInputType | true
    _min?: InjuryMinAggregateInputType
    _max?: InjuryMaxAggregateInputType
  }


  export type InjuryGroupByOutputType = {
    id: string
    playerId: string
    createdAt: Date
    updatedAt: Date
    _count: InjuryCountAggregateOutputType | null
    _min: InjuryMinAggregateOutputType | null
    _max: InjuryMaxAggregateOutputType | null
  }

  type GetInjuryGroupByPayload<T extends InjuryGroupByArgs> = PrismaPromise<
    Array<
      PickArray<InjuryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InjuryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InjuryGroupByOutputType[P]>
            : GetScalarType<T[P], InjuryGroupByOutputType[P]>
        }
      >
    >


  export type InjurySelect = {
    id?: boolean
    player?: boolean | PlayerArgs
    playerId?: boolean
    Operation?: boolean | OperationFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | InjuryCountOutputTypeArgs
  }


  export type InjuryInclude = {
    player?: boolean | PlayerArgs
    Operation?: boolean | OperationFindManyArgs
    _count?: boolean | InjuryCountOutputTypeArgs
  } 

  export type InjuryGetPayload<S extends boolean | null | undefined | InjuryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Injury :
    S extends undefined ? never :
    S extends { include: any } & (InjuryArgs | InjuryFindManyArgs)
    ? Injury  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'player' ? PlayerGetPayload<S['include'][P]> :
        P extends 'Operation' ? Array < OperationGetPayload<S['include'][P]>>  :
        P extends '_count' ? InjuryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (InjuryArgs | InjuryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'player' ? PlayerGetPayload<S['select'][P]> :
        P extends 'Operation' ? Array < OperationGetPayload<S['select'][P]>>  :
        P extends '_count' ? InjuryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Injury ? Injury[P] : never
  } 
      : Injury


  type InjuryCountArgs = Merge<
    Omit<InjuryFindManyArgs, 'select' | 'include'> & {
      select?: InjuryCountAggregateInputType | true
    }
  >

  export interface InjuryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Injury that matches the filter.
     * @param {InjuryFindUniqueArgs} args - Arguments to find a Injury
     * @example
     * // Get one Injury
     * const injury = await prisma.injury.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InjuryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, InjuryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Injury'> extends True ? Prisma__InjuryClient<InjuryGetPayload<T>> : Prisma__InjuryClient<InjuryGetPayload<T> | null, null>

    /**
     * Find one Injury that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InjuryFindUniqueOrThrowArgs} args - Arguments to find a Injury
     * @example
     * // Get one Injury
     * const injury = await prisma.injury.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InjuryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, InjuryFindUniqueOrThrowArgs>
    ): Prisma__InjuryClient<InjuryGetPayload<T>>

    /**
     * Find the first Injury that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InjuryFindFirstArgs} args - Arguments to find a Injury
     * @example
     * // Get one Injury
     * const injury = await prisma.injury.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InjuryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, InjuryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Injury'> extends True ? Prisma__InjuryClient<InjuryGetPayload<T>> : Prisma__InjuryClient<InjuryGetPayload<T> | null, null>

    /**
     * Find the first Injury that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InjuryFindFirstOrThrowArgs} args - Arguments to find a Injury
     * @example
     * // Get one Injury
     * const injury = await prisma.injury.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InjuryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, InjuryFindFirstOrThrowArgs>
    ): Prisma__InjuryClient<InjuryGetPayload<T>>

    /**
     * Find zero or more Injuries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InjuryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Injuries
     * const injuries = await prisma.injury.findMany()
     * 
     * // Get first 10 Injuries
     * const injuries = await prisma.injury.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const injuryWithIdOnly = await prisma.injury.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InjuryFindManyArgs>(
      args?: SelectSubset<T, InjuryFindManyArgs>
    ): PrismaPromise<Array<InjuryGetPayload<T>>>

    /**
     * Create a Injury.
     * @param {InjuryCreateArgs} args - Arguments to create a Injury.
     * @example
     * // Create one Injury
     * const Injury = await prisma.injury.create({
     *   data: {
     *     // ... data to create a Injury
     *   }
     * })
     * 
    **/
    create<T extends InjuryCreateArgs>(
      args: SelectSubset<T, InjuryCreateArgs>
    ): Prisma__InjuryClient<InjuryGetPayload<T>>

    /**
     * Create many Injuries.
     *     @param {InjuryCreateManyArgs} args - Arguments to create many Injuries.
     *     @example
     *     // Create many Injuries
     *     const injury = await prisma.injury.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InjuryCreateManyArgs>(
      args?: SelectSubset<T, InjuryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Injury.
     * @param {InjuryDeleteArgs} args - Arguments to delete one Injury.
     * @example
     * // Delete one Injury
     * const Injury = await prisma.injury.delete({
     *   where: {
     *     // ... filter to delete one Injury
     *   }
     * })
     * 
    **/
    delete<T extends InjuryDeleteArgs>(
      args: SelectSubset<T, InjuryDeleteArgs>
    ): Prisma__InjuryClient<InjuryGetPayload<T>>

    /**
     * Update one Injury.
     * @param {InjuryUpdateArgs} args - Arguments to update one Injury.
     * @example
     * // Update one Injury
     * const injury = await prisma.injury.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InjuryUpdateArgs>(
      args: SelectSubset<T, InjuryUpdateArgs>
    ): Prisma__InjuryClient<InjuryGetPayload<T>>

    /**
     * Delete zero or more Injuries.
     * @param {InjuryDeleteManyArgs} args - Arguments to filter Injuries to delete.
     * @example
     * // Delete a few Injuries
     * const { count } = await prisma.injury.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InjuryDeleteManyArgs>(
      args?: SelectSubset<T, InjuryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Injuries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InjuryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Injuries
     * const injury = await prisma.injury.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InjuryUpdateManyArgs>(
      args: SelectSubset<T, InjuryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Injury.
     * @param {InjuryUpsertArgs} args - Arguments to update or create a Injury.
     * @example
     * // Update or create a Injury
     * const injury = await prisma.injury.upsert({
     *   create: {
     *     // ... data to create a Injury
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Injury we want to update
     *   }
     * })
    **/
    upsert<T extends InjuryUpsertArgs>(
      args: SelectSubset<T, InjuryUpsertArgs>
    ): Prisma__InjuryClient<InjuryGetPayload<T>>

    /**
     * Count the number of Injuries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InjuryCountArgs} args - Arguments to filter Injuries to count.
     * @example
     * // Count the number of Injuries
     * const count = await prisma.injury.count({
     *   where: {
     *     // ... the filter for the Injuries we want to count
     *   }
     * })
    **/
    count<T extends InjuryCountArgs>(
      args?: Subset<T, InjuryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InjuryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Injury.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InjuryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InjuryAggregateArgs>(args: Subset<T, InjuryAggregateArgs>): PrismaPromise<GetInjuryAggregateType<T>>

    /**
     * Group by Injury.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InjuryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InjuryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InjuryGroupByArgs['orderBy'] }
        : { orderBy?: InjuryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InjuryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInjuryGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Injury.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__InjuryClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    player<T extends PlayerArgs= {}>(args?: Subset<T, PlayerArgs>): Prisma__PlayerClient<PlayerGetPayload<T> | Null>;

    Operation<T extends OperationFindManyArgs= {}>(args?: Subset<T, OperationFindManyArgs>): PrismaPromise<Array<OperationGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Injury base type for findUnique actions
   */
  export type InjuryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Injury
     * 
    **/
    select?: InjurySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InjuryInclude | null
    /**
     * Filter, which Injury to fetch.
     * 
    **/
    where: InjuryWhereUniqueInput
  }

  /**
   * Injury: findUnique
   */
  export interface InjuryFindUniqueArgs extends InjuryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Injury findUniqueOrThrow
   */
  export type InjuryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Injury
     * 
    **/
    select?: InjurySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InjuryInclude | null
    /**
     * Filter, which Injury to fetch.
     * 
    **/
    where: InjuryWhereUniqueInput
  }


  /**
   * Injury base type for findFirst actions
   */
  export type InjuryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Injury
     * 
    **/
    select?: InjurySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InjuryInclude | null
    /**
     * Filter, which Injury to fetch.
     * 
    **/
    where?: InjuryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Injuries to fetch.
     * 
    **/
    orderBy?: Enumerable<InjuryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Injuries.
     * 
    **/
    cursor?: InjuryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Injuries from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Injuries.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Injuries.
     * 
    **/
    distinct?: Enumerable<InjuryScalarFieldEnum>
  }

  /**
   * Injury: findFirst
   */
  export interface InjuryFindFirstArgs extends InjuryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Injury findFirstOrThrow
   */
  export type InjuryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Injury
     * 
    **/
    select?: InjurySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InjuryInclude | null
    /**
     * Filter, which Injury to fetch.
     * 
    **/
    where?: InjuryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Injuries to fetch.
     * 
    **/
    orderBy?: Enumerable<InjuryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Injuries.
     * 
    **/
    cursor?: InjuryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Injuries from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Injuries.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Injuries.
     * 
    **/
    distinct?: Enumerable<InjuryScalarFieldEnum>
  }


  /**
   * Injury findMany
   */
  export type InjuryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Injury
     * 
    **/
    select?: InjurySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InjuryInclude | null
    /**
     * Filter, which Injuries to fetch.
     * 
    **/
    where?: InjuryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Injuries to fetch.
     * 
    **/
    orderBy?: Enumerable<InjuryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Injuries.
     * 
    **/
    cursor?: InjuryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Injuries from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Injuries.
     * 
    **/
    skip?: number
    distinct?: Enumerable<InjuryScalarFieldEnum>
  }


  /**
   * Injury create
   */
  export type InjuryCreateArgs = {
    /**
     * Select specific fields to fetch from the Injury
     * 
    **/
    select?: InjurySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InjuryInclude | null
    /**
     * The data needed to create a Injury.
     * 
    **/
    data: XOR<InjuryCreateInput, InjuryUncheckedCreateInput>
  }


  /**
   * Injury createMany
   */
  export type InjuryCreateManyArgs = {
    /**
     * The data used to create many Injuries.
     * 
    **/
    data: Enumerable<InjuryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Injury update
   */
  export type InjuryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Injury
     * 
    **/
    select?: InjurySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InjuryInclude | null
    /**
     * The data needed to update a Injury.
     * 
    **/
    data: XOR<InjuryUpdateInput, InjuryUncheckedUpdateInput>
    /**
     * Choose, which Injury to update.
     * 
    **/
    where: InjuryWhereUniqueInput
  }


  /**
   * Injury updateMany
   */
  export type InjuryUpdateManyArgs = {
    /**
     * The data used to update Injuries.
     * 
    **/
    data: XOR<InjuryUpdateManyMutationInput, InjuryUncheckedUpdateManyInput>
    /**
     * Filter which Injuries to update
     * 
    **/
    where?: InjuryWhereInput
  }


  /**
   * Injury upsert
   */
  export type InjuryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Injury
     * 
    **/
    select?: InjurySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InjuryInclude | null
    /**
     * The filter to search for the Injury to update in case it exists.
     * 
    **/
    where: InjuryWhereUniqueInput
    /**
     * In case the Injury found by the `where` argument doesn't exist, create a new Injury with this data.
     * 
    **/
    create: XOR<InjuryCreateInput, InjuryUncheckedCreateInput>
    /**
     * In case the Injury was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<InjuryUpdateInput, InjuryUncheckedUpdateInput>
  }


  /**
   * Injury delete
   */
  export type InjuryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Injury
     * 
    **/
    select?: InjurySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InjuryInclude | null
    /**
     * Filter which Injury to delete.
     * 
    **/
    where: InjuryWhereUniqueInput
  }


  /**
   * Injury deleteMany
   */
  export type InjuryDeleteManyArgs = {
    /**
     * Filter which Injuries to delete
     * 
    **/
    where?: InjuryWhereInput
  }


  /**
   * Injury without action
   */
  export type InjuryArgs = {
    /**
     * Select specific fields to fetch from the Injury
     * 
    **/
    select?: InjurySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InjuryInclude | null
  }



  /**
   * Model Operation
   */


  export type AggregateOperation = {
    _count: OperationCountAggregateOutputType | null
    _min: OperationMinAggregateOutputType | null
    _max: OperationMaxAggregateOutputType | null
  }

  export type OperationMinAggregateOutputType = {
    id: string | null
    type: string | null
    date: Date | null
    injuryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OperationMaxAggregateOutputType = {
    id: string | null
    type: string | null
    date: Date | null
    injuryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OperationCountAggregateOutputType = {
    id: number
    type: number
    date: number
    injuryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OperationMinAggregateInputType = {
    id?: true
    type?: true
    date?: true
    injuryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OperationMaxAggregateInputType = {
    id?: true
    type?: true
    date?: true
    injuryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OperationCountAggregateInputType = {
    id?: true
    type?: true
    date?: true
    injuryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OperationAggregateArgs = {
    /**
     * Filter which Operation to aggregate.
     * 
    **/
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     * 
    **/
    orderBy?: Enumerable<OperationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Operations
    **/
    _count?: true | OperationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperationMaxAggregateInputType
  }

  export type GetOperationAggregateType<T extends OperationAggregateArgs> = {
        [P in keyof T & keyof AggregateOperation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperation[P]>
      : GetScalarType<T[P], AggregateOperation[P]>
  }




  export type OperationGroupByArgs = {
    where?: OperationWhereInput
    orderBy?: Enumerable<OperationOrderByWithAggregationInput>
    by: Array<OperationScalarFieldEnum>
    having?: OperationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperationCountAggregateInputType | true
    _min?: OperationMinAggregateInputType
    _max?: OperationMaxAggregateInputType
  }


  export type OperationGroupByOutputType = {
    id: string
    type: string
    date: Date
    injuryId: string
    createdAt: Date
    updatedAt: Date
    _count: OperationCountAggregateOutputType | null
    _min: OperationMinAggregateOutputType | null
    _max: OperationMaxAggregateOutputType | null
  }

  type GetOperationGroupByPayload<T extends OperationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<OperationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperationGroupByOutputType[P]>
            : GetScalarType<T[P], OperationGroupByOutputType[P]>
        }
      >
    >


  export type OperationSelect = {
    id?: boolean
    type?: boolean
    injury?: boolean | InjuryArgs
    date?: boolean
    injuryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type OperationInclude = {
    injury?: boolean | InjuryArgs
  } 

  export type OperationGetPayload<S extends boolean | null | undefined | OperationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Operation :
    S extends undefined ? never :
    S extends { include: any } & (OperationArgs | OperationFindManyArgs)
    ? Operation  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'injury' ? InjuryGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (OperationArgs | OperationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'injury' ? InjuryGetPayload<S['select'][P]> :  P extends keyof Operation ? Operation[P] : never
  } 
      : Operation


  type OperationCountArgs = Merge<
    Omit<OperationFindManyArgs, 'select' | 'include'> & {
      select?: OperationCountAggregateInputType | true
    }
  >

  export interface OperationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Operation that matches the filter.
     * @param {OperationFindUniqueArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OperationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OperationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Operation'> extends True ? Prisma__OperationClient<OperationGetPayload<T>> : Prisma__OperationClient<OperationGetPayload<T> | null, null>

    /**
     * Find one Operation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OperationFindUniqueOrThrowArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OperationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, OperationFindUniqueOrThrowArgs>
    ): Prisma__OperationClient<OperationGetPayload<T>>

    /**
     * Find the first Operation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationFindFirstArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OperationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OperationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Operation'> extends True ? Prisma__OperationClient<OperationGetPayload<T>> : Prisma__OperationClient<OperationGetPayload<T> | null, null>

    /**
     * Find the first Operation that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationFindFirstOrThrowArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OperationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OperationFindFirstOrThrowArgs>
    ): Prisma__OperationClient<OperationGetPayload<T>>

    /**
     * Find zero or more Operations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operations
     * const operations = await prisma.operation.findMany()
     * 
     * // Get first 10 Operations
     * const operations = await prisma.operation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const operationWithIdOnly = await prisma.operation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OperationFindManyArgs>(
      args?: SelectSubset<T, OperationFindManyArgs>
    ): PrismaPromise<Array<OperationGetPayload<T>>>

    /**
     * Create a Operation.
     * @param {OperationCreateArgs} args - Arguments to create a Operation.
     * @example
     * // Create one Operation
     * const Operation = await prisma.operation.create({
     *   data: {
     *     // ... data to create a Operation
     *   }
     * })
     * 
    **/
    create<T extends OperationCreateArgs>(
      args: SelectSubset<T, OperationCreateArgs>
    ): Prisma__OperationClient<OperationGetPayload<T>>

    /**
     * Create many Operations.
     *     @param {OperationCreateManyArgs} args - Arguments to create many Operations.
     *     @example
     *     // Create many Operations
     *     const operation = await prisma.operation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OperationCreateManyArgs>(
      args?: SelectSubset<T, OperationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Operation.
     * @param {OperationDeleteArgs} args - Arguments to delete one Operation.
     * @example
     * // Delete one Operation
     * const Operation = await prisma.operation.delete({
     *   where: {
     *     // ... filter to delete one Operation
     *   }
     * })
     * 
    **/
    delete<T extends OperationDeleteArgs>(
      args: SelectSubset<T, OperationDeleteArgs>
    ): Prisma__OperationClient<OperationGetPayload<T>>

    /**
     * Update one Operation.
     * @param {OperationUpdateArgs} args - Arguments to update one Operation.
     * @example
     * // Update one Operation
     * const operation = await prisma.operation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OperationUpdateArgs>(
      args: SelectSubset<T, OperationUpdateArgs>
    ): Prisma__OperationClient<OperationGetPayload<T>>

    /**
     * Delete zero or more Operations.
     * @param {OperationDeleteManyArgs} args - Arguments to filter Operations to delete.
     * @example
     * // Delete a few Operations
     * const { count } = await prisma.operation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OperationDeleteManyArgs>(
      args?: SelectSubset<T, OperationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operations
     * const operation = await prisma.operation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OperationUpdateManyArgs>(
      args: SelectSubset<T, OperationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Operation.
     * @param {OperationUpsertArgs} args - Arguments to update or create a Operation.
     * @example
     * // Update or create a Operation
     * const operation = await prisma.operation.upsert({
     *   create: {
     *     // ... data to create a Operation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operation we want to update
     *   }
     * })
    **/
    upsert<T extends OperationUpsertArgs>(
      args: SelectSubset<T, OperationUpsertArgs>
    ): Prisma__OperationClient<OperationGetPayload<T>>

    /**
     * Count the number of Operations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationCountArgs} args - Arguments to filter Operations to count.
     * @example
     * // Count the number of Operations
     * const count = await prisma.operation.count({
     *   where: {
     *     // ... the filter for the Operations we want to count
     *   }
     * })
    **/
    count<T extends OperationCountArgs>(
      args?: Subset<T, OperationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Operation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OperationAggregateArgs>(args: Subset<T, OperationAggregateArgs>): PrismaPromise<GetOperationAggregateType<T>>

    /**
     * Group by Operation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OperationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OperationGroupByArgs['orderBy'] }
        : { orderBy?: OperationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OperationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperationGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Operation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OperationClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    injury<T extends InjuryArgs= {}>(args?: Subset<T, InjuryArgs>): Prisma__InjuryClient<InjuryGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Operation base type for findUnique actions
   */
  export type OperationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Operation
     * 
    **/
    select?: OperationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OperationInclude | null
    /**
     * Filter, which Operation to fetch.
     * 
    **/
    where: OperationWhereUniqueInput
  }

  /**
   * Operation: findUnique
   */
  export interface OperationFindUniqueArgs extends OperationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Operation findUniqueOrThrow
   */
  export type OperationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Operation
     * 
    **/
    select?: OperationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OperationInclude | null
    /**
     * Filter, which Operation to fetch.
     * 
    **/
    where: OperationWhereUniqueInput
  }


  /**
   * Operation base type for findFirst actions
   */
  export type OperationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Operation
     * 
    **/
    select?: OperationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OperationInclude | null
    /**
     * Filter, which Operation to fetch.
     * 
    **/
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     * 
    **/
    orderBy?: Enumerable<OperationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operations.
     * 
    **/
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operations.
     * 
    **/
    distinct?: Enumerable<OperationScalarFieldEnum>
  }

  /**
   * Operation: findFirst
   */
  export interface OperationFindFirstArgs extends OperationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Operation findFirstOrThrow
   */
  export type OperationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Operation
     * 
    **/
    select?: OperationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OperationInclude | null
    /**
     * Filter, which Operation to fetch.
     * 
    **/
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     * 
    **/
    orderBy?: Enumerable<OperationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operations.
     * 
    **/
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operations.
     * 
    **/
    distinct?: Enumerable<OperationScalarFieldEnum>
  }


  /**
   * Operation findMany
   */
  export type OperationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Operation
     * 
    **/
    select?: OperationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OperationInclude | null
    /**
     * Filter, which Operations to fetch.
     * 
    **/
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     * 
    **/
    orderBy?: Enumerable<OperationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Operations.
     * 
    **/
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     * 
    **/
    skip?: number
    distinct?: Enumerable<OperationScalarFieldEnum>
  }


  /**
   * Operation create
   */
  export type OperationCreateArgs = {
    /**
     * Select specific fields to fetch from the Operation
     * 
    **/
    select?: OperationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OperationInclude | null
    /**
     * The data needed to create a Operation.
     * 
    **/
    data: XOR<OperationCreateInput, OperationUncheckedCreateInput>
  }


  /**
   * Operation createMany
   */
  export type OperationCreateManyArgs = {
    /**
     * The data used to create many Operations.
     * 
    **/
    data: Enumerable<OperationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Operation update
   */
  export type OperationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Operation
     * 
    **/
    select?: OperationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OperationInclude | null
    /**
     * The data needed to update a Operation.
     * 
    **/
    data: XOR<OperationUpdateInput, OperationUncheckedUpdateInput>
    /**
     * Choose, which Operation to update.
     * 
    **/
    where: OperationWhereUniqueInput
  }


  /**
   * Operation updateMany
   */
  export type OperationUpdateManyArgs = {
    /**
     * The data used to update Operations.
     * 
    **/
    data: XOR<OperationUpdateManyMutationInput, OperationUncheckedUpdateManyInput>
    /**
     * Filter which Operations to update
     * 
    **/
    where?: OperationWhereInput
  }


  /**
   * Operation upsert
   */
  export type OperationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Operation
     * 
    **/
    select?: OperationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OperationInclude | null
    /**
     * The filter to search for the Operation to update in case it exists.
     * 
    **/
    where: OperationWhereUniqueInput
    /**
     * In case the Operation found by the `where` argument doesn't exist, create a new Operation with this data.
     * 
    **/
    create: XOR<OperationCreateInput, OperationUncheckedCreateInput>
    /**
     * In case the Operation was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<OperationUpdateInput, OperationUncheckedUpdateInput>
  }


  /**
   * Operation delete
   */
  export type OperationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Operation
     * 
    **/
    select?: OperationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OperationInclude | null
    /**
     * Filter which Operation to delete.
     * 
    **/
    where: OperationWhereUniqueInput
  }


  /**
   * Operation deleteMany
   */
  export type OperationDeleteManyArgs = {
    /**
     * Filter which Operations to delete
     * 
    **/
    where?: OperationWhereInput
  }


  /**
   * Operation without action
   */
  export type OperationArgs = {
    /**
     * Select specific fields to fetch from the Operation
     * 
    **/
    select?: OperationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OperationInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AccountScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const CompetitionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sponsor: 'sponsor',
    type: 'type',
    seasonId: 'seasonId'
  };

  export type CompetitionScalarFieldEnum = (typeof CompetitionScalarFieldEnum)[keyof typeof CompetitionScalarFieldEnum]


  export const GameEventScalarFieldEnum: {
    id: 'id',
    minute: 'minute',
    gameId: 'gameId',
    playerId: 'playerId',
    type: 'type'
  };

  export type GameEventScalarFieldEnum = (typeof GameEventScalarFieldEnum)[keyof typeof GameEventScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    updatedAt: 'updatedAt',
    attendance: 'attendance',
    locationId: 'locationId',
    competitionId: 'competitionId'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const HeathRecordScalarFieldEnum: {
    id: 'id',
    cardNumber: 'cardNumber',
    issueDate: 'issueDate',
    expiryDate: 'expiryDate'
  };

  export type HeathRecordScalarFieldEnum = (typeof HeathRecordScalarFieldEnum)[keyof typeof HeathRecordScalarFieldEnum]


  export const InjuryScalarFieldEnum: {
    id: 'id',
    playerId: 'playerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InjuryScalarFieldEnum = (typeof InjuryScalarFieldEnum)[keyof typeof InjuryScalarFieldEnum]


  export const InstitutionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    city: 'city',
    province: 'province',
    postal_code: 'postal_code',
    category: 'category'
  };

  export type InstitutionScalarFieldEnum = (typeof InstitutionScalarFieldEnum)[keyof typeof InstitutionScalarFieldEnum]


  export const InterviewScalarFieldEnum: {
    id: 'id',
    stage: 'stage',
    passed: 'passed',
    at: 'at',
    comment: 'comment',
    recruitmentId: 'recruitmentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InterviewScalarFieldEnum = (typeof InterviewScalarFieldEnum)[keyof typeof InterviewScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    streetAddress: 'streetAddress',
    city: 'city',
    province: 'province',
    country: 'country',
    postalCode: 'postalCode'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const OperationScalarFieldEnum: {
    id: 'id',
    type: 'type',
    date: 'date',
    injuryId: 'injuryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OperationScalarFieldEnum = (typeof OperationScalarFieldEnum)[keyof typeof OperationScalarFieldEnum]


  export const PlayerScalarFieldEnum: {
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
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const RecruitmentScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    passed: 'passed',
    resume: 'resume',
    playerId: 'playerId',
    accountId: 'accountId'
  };

  export type RecruitmentScalarFieldEnum = (typeof RecruitmentScalarFieldEnum)[keyof typeof RecruitmentScalarFieldEnum]


  export const ScholarshipScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    institutionId: 'institutionId',
    playerId: 'playerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScholarshipScalarFieldEnum = (typeof ScholarshipScalarFieldEnum)[keyof typeof ScholarshipScalarFieldEnum]


  export const SeasonScalarFieldEnum: {
    id: 'id',
    startDate: 'startDate',
    endDate: 'endDate'
  };

  export type SeasonScalarFieldEnum = (typeof SeasonScalarFieldEnum)[keyof typeof SeasonScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const SquadScalarFieldEnum: {
    id: 'id',
    name: 'name',
    institutionId: 'institutionId',
    homeColor: 'homeColor',
    awayColor: 'awayColor',
    locationId: 'locationId'
  };

  export type SquadScalarFieldEnum = (typeof SquadScalarFieldEnum)[keyof typeof SquadScalarFieldEnum]


  export const StaffScalarFieldEnum: {
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
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    formation: 'formation',
    shirtColor: 'shirtColor',
    squadId: 'squadId',
    gameId: 'gameId'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type PlayerWhereInput = {
    AND?: Enumerable<PlayerWhereInput>
    OR?: Enumerable<PlayerWhereInput>
    NOT?: Enumerable<PlayerWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    dob?: DateTimeFilter | Date | string
    isDomestic?: BoolFilter | boolean
    photo?: StringNullableFilter | string | null
    gender?: StringFilter | string
    position?: EnumPostionFilter | Postion
    healthRecord?: XOR<HeathRecordRelationFilter, HeathRecordWhereInput> | null
    heathRecordId?: StringNullableFilter | string | null
    phone?: StringFilter | string
    streetAddress?: StringFilter | string
    city?: StringFilter | string
    province?: StringFilter | string
    country?: StringFilter | string
    postalCode?: StringFilter | string
    scholarship?: ScholarshipListRelationFilter
    recruitment?: RecruitmentListRelationFilter
    GameEvent?: GameEventListRelationFilter
    Injury?: InjuryListRelationFilter
    Squad?: SquadListRelationFilter
    Team?: TeamListRelationFilter
  }

  export type PlayerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    isDomestic?: SortOrder
    photo?: SortOrder
    gender?: SortOrder
    position?: SortOrder
    healthRecord?: HeathRecordOrderByWithRelationInput
    heathRecordId?: SortOrder
    phone?: SortOrder
    streetAddress?: SortOrder
    city?: SortOrder
    province?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    scholarship?: ScholarshipOrderByRelationAggregateInput
    recruitment?: RecruitmentOrderByRelationAggregateInput
    GameEvent?: GameEventOrderByRelationAggregateInput
    Injury?: InjuryOrderByRelationAggregateInput
    Squad?: SquadOrderByRelationAggregateInput
    Team?: TeamOrderByRelationAggregateInput
  }

  export type PlayerWhereUniqueInput = {
    id?: string
    heathRecordId?: string
  }

  export type PlayerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    isDomestic?: SortOrder
    photo?: SortOrder
    gender?: SortOrder
    position?: SortOrder
    heathRecordId?: SortOrder
    phone?: SortOrder
    streetAddress?: SortOrder
    city?: SortOrder
    province?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    _count?: PlayerCountOrderByAggregateInput
    _max?: PlayerMaxOrderByAggregateInput
    _min?: PlayerMinOrderByAggregateInput
  }

  export type PlayerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PlayerScalarWhereWithAggregatesInput>
    OR?: Enumerable<PlayerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PlayerScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    dob?: DateTimeWithAggregatesFilter | Date | string
    isDomestic?: BoolWithAggregatesFilter | boolean
    photo?: StringNullableWithAggregatesFilter | string | null
    gender?: StringWithAggregatesFilter | string
    position?: EnumPostionWithAggregatesFilter | Postion
    heathRecordId?: StringNullableWithAggregatesFilter | string | null
    phone?: StringWithAggregatesFilter | string
    streetAddress?: StringWithAggregatesFilter | string
    city?: StringWithAggregatesFilter | string
    province?: StringWithAggregatesFilter | string
    country?: StringWithAggregatesFilter | string
    postalCode?: StringWithAggregatesFilter | string
  }

  export type TeamWhereInput = {
    AND?: Enumerable<TeamWhereInput>
    OR?: Enumerable<TeamWhereInput>
    NOT?: Enumerable<TeamWhereInput>
    id?: StringFilter | string
    starters?: PlayerListRelationFilter
    formation?: EnumFormationFilter | Formation
    shirtColor?: StringFilter | string
    squad?: XOR<SquadRelationFilter, SquadWhereInput>
    squadId?: StringFilter | string
    Game?: XOR<GameRelationFilter, GameWhereInput> | null
    gameId?: StringNullableFilter | string | null
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    starters?: PlayerOrderByRelationAggregateInput
    formation?: SortOrder
    shirtColor?: SortOrder
    squad?: SquadOrderByWithRelationInput
    squadId?: SortOrder
    Game?: GameOrderByWithRelationInput
    gameId?: SortOrder
  }

  export type TeamWhereUniqueInput = {
    id?: string
  }

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    formation?: SortOrder
    shirtColor?: SortOrder
    squadId?: SortOrder
    gameId?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TeamScalarWhereWithAggregatesInput>
    OR?: Enumerable<TeamScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TeamScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    formation?: EnumFormationWithAggregatesFilter | Formation
    shirtColor?: StringWithAggregatesFilter | string
    squadId?: StringWithAggregatesFilter | string
    gameId?: StringNullableWithAggregatesFilter | string | null
  }

  export type StaffWhereInput = {
    AND?: Enumerable<StaffWhereInput>
    OR?: Enumerable<StaffWhereInput>
    NOT?: Enumerable<StaffWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    dob?: DateTimeFilter | Date | string
    phone?: StringFilter | string
    role?: EnumRoleFilter | Role
    streetAddress?: StringFilter | string
    city?: StringFilter | string
    country?: StringFilter | string
    postalCode?: StringFilter | string
    account?: XOR<AccountRelationFilter, AccountWhereInput> | null
    accountId?: StringNullableFilter | string | null
    Squad?: SquadListRelationFilter
  }

  export type StaffOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    streetAddress?: SortOrder
    city?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    account?: AccountOrderByWithRelationInput
    accountId?: SortOrder
    Squad?: SquadOrderByRelationAggregateInput
  }

  export type StaffWhereUniqueInput = {
    id?: string
  }

  export type StaffOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    streetAddress?: SortOrder
    city?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    accountId?: SortOrder
    _count?: StaffCountOrderByAggregateInput
    _max?: StaffMaxOrderByAggregateInput
    _min?: StaffMinOrderByAggregateInput
  }

  export type StaffScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StaffScalarWhereWithAggregatesInput>
    OR?: Enumerable<StaffScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StaffScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    dob?: DateTimeWithAggregatesFilter | Date | string
    phone?: StringWithAggregatesFilter | string
    role?: EnumRoleWithAggregatesFilter | Role
    streetAddress?: StringWithAggregatesFilter | string
    city?: StringWithAggregatesFilter | string
    country?: StringWithAggregatesFilter | string
    postalCode?: StringWithAggregatesFilter | string
    accountId?: StringNullableWithAggregatesFilter | string | null
  }

  export type InstitutionWhereInput = {
    AND?: Enumerable<InstitutionWhereInput>
    OR?: Enumerable<InstitutionWhereInput>
    NOT?: Enumerable<InstitutionWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    address?: StringFilter | string
    city?: StringFilter | string
    province?: StringFilter | string
    postal_code?: StringFilter | string
    category?: EnumInstitutionCategoryFilter | InstitutionCategory
    scholarship?: ScholarshipListRelationFilter
    Squad?: SquadListRelationFilter
  }

  export type InstitutionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postal_code?: SortOrder
    category?: SortOrder
    scholarship?: ScholarshipOrderByRelationAggregateInput
    Squad?: SquadOrderByRelationAggregateInput
  }

  export type InstitutionWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type InstitutionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postal_code?: SortOrder
    category?: SortOrder
    _count?: InstitutionCountOrderByAggregateInput
    _max?: InstitutionMaxOrderByAggregateInput
    _min?: InstitutionMinOrderByAggregateInput
  }

  export type InstitutionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<InstitutionScalarWhereWithAggregatesInput>
    OR?: Enumerable<InstitutionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<InstitutionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    city?: StringWithAggregatesFilter | string
    province?: StringWithAggregatesFilter | string
    postal_code?: StringWithAggregatesFilter | string
    category?: EnumInstitutionCategoryWithAggregatesFilter | InstitutionCategory
  }

  export type LocationWhereInput = {
    AND?: Enumerable<LocationWhereInput>
    OR?: Enumerable<LocationWhereInput>
    NOT?: Enumerable<LocationWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    category?: EnumLocationCategoryFilter | LocationCategory
    streetAddress?: StringFilter | string
    city?: StringFilter | string
    province?: StringFilter | string
    country?: StringFilter | string
    postalCode?: StringFilter | string
    game?: GameListRelationFilter
    Squad?: SquadListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    streetAddress?: SortOrder
    city?: SortOrder
    province?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    game?: GameOrderByRelationAggregateInput
    Squad?: SquadOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = {
    id?: string
  }

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    streetAddress?: SortOrder
    city?: SortOrder
    province?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LocationScalarWhereWithAggregatesInput>
    OR?: Enumerable<LocationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LocationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    category?: EnumLocationCategoryWithAggregatesFilter | LocationCategory
    streetAddress?: StringWithAggregatesFilter | string
    city?: StringWithAggregatesFilter | string
    province?: StringWithAggregatesFilter | string
    country?: StringWithAggregatesFilter | string
    postalCode?: StringWithAggregatesFilter | string
  }

  export type SquadWhereInput = {
    AND?: Enumerable<SquadWhereInput>
    OR?: Enumerable<SquadWhereInput>
    NOT?: Enumerable<SquadWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    players?: PlayerListRelationFilter
    institution?: XOR<InstitutionRelationFilter, InstitutionWhereInput>
    staff?: StaffListRelationFilter
    competition?: CompetitionListRelationFilter
    institutionId?: StringFilter | string
    home?: XOR<LocationRelationFilter, LocationWhereInput> | null
    homeColor?: StringNullableFilter | string | null
    awayColor?: StringNullableFilter | string | null
    Team?: TeamListRelationFilter
    locationId?: StringNullableFilter | string | null
  }

  export type SquadOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    players?: PlayerOrderByRelationAggregateInput
    institution?: InstitutionOrderByWithRelationInput
    staff?: StaffOrderByRelationAggregateInput
    competition?: CompetitionOrderByRelationAggregateInput
    institutionId?: SortOrder
    home?: LocationOrderByWithRelationInput
    homeColor?: SortOrder
    awayColor?: SortOrder
    Team?: TeamOrderByRelationAggregateInput
    locationId?: SortOrder
  }

  export type SquadWhereUniqueInput = {
    id?: string
  }

  export type SquadOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    institutionId?: SortOrder
    homeColor?: SortOrder
    awayColor?: SortOrder
    locationId?: SortOrder
    _count?: SquadCountOrderByAggregateInput
    _max?: SquadMaxOrderByAggregateInput
    _min?: SquadMinOrderByAggregateInput
  }

  export type SquadScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SquadScalarWhereWithAggregatesInput>
    OR?: Enumerable<SquadScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SquadScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    institutionId?: StringWithAggregatesFilter | string
    homeColor?: StringNullableWithAggregatesFilter | string | null
    awayColor?: StringNullableWithAggregatesFilter | string | null
    locationId?: StringNullableWithAggregatesFilter | string | null
  }

  export type CompetitionWhereInput = {
    AND?: Enumerable<CompetitionWhereInput>
    OR?: Enumerable<CompetitionWhereInput>
    NOT?: Enumerable<CompetitionWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    sponsor?: StringFilter | string
    type?: EnumCompetitionTypeFilter | CompetitionType
    season?: XOR<SeasonRelationFilter, SeasonWhereInput>
    seasonId?: StringFilter | string
    Squad?: SquadListRelationFilter
    Game?: GameListRelationFilter
  }

  export type CompetitionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sponsor?: SortOrder
    type?: SortOrder
    season?: SeasonOrderByWithRelationInput
    seasonId?: SortOrder
    Squad?: SquadOrderByRelationAggregateInput
    Game?: GameOrderByRelationAggregateInput
  }

  export type CompetitionWhereUniqueInput = {
    id?: string
  }

  export type CompetitionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sponsor?: SortOrder
    type?: SortOrder
    seasonId?: SortOrder
    _count?: CompetitionCountOrderByAggregateInput
    _max?: CompetitionMaxOrderByAggregateInput
    _min?: CompetitionMinOrderByAggregateInput
  }

  export type CompetitionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CompetitionScalarWhereWithAggregatesInput>
    OR?: Enumerable<CompetitionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CompetitionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    sponsor?: StringWithAggregatesFilter | string
    type?: EnumCompetitionTypeWithAggregatesFilter | CompetitionType
    seasonId?: StringWithAggregatesFilter | string
  }

  export type SeasonWhereInput = {
    AND?: Enumerable<SeasonWhereInput>
    OR?: Enumerable<SeasonWhereInput>
    NOT?: Enumerable<SeasonWhereInput>
    id?: StringFilter | string
    startDate?: DateTimeFilter | Date | string
    endDate?: DateTimeFilter | Date | string
    Competition?: CompetitionListRelationFilter
  }

  export type SeasonOrderByWithRelationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    Competition?: CompetitionOrderByRelationAggregateInput
  }

  export type SeasonWhereUniqueInput = {
    id?: string
  }

  export type SeasonOrderByWithAggregationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    _count?: SeasonCountOrderByAggregateInput
    _max?: SeasonMaxOrderByAggregateInput
    _min?: SeasonMinOrderByAggregateInput
  }

  export type SeasonScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SeasonScalarWhereWithAggregatesInput>
    OR?: Enumerable<SeasonScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SeasonScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    startDate?: DateTimeWithAggregatesFilter | Date | string
    endDate?: DateTimeWithAggregatesFilter | Date | string
  }

  export type HeathRecordWhereInput = {
    AND?: Enumerable<HeathRecordWhereInput>
    OR?: Enumerable<HeathRecordWhereInput>
    NOT?: Enumerable<HeathRecordWhereInput>
    id?: StringFilter | string
    cardNumber?: StringFilter | string
    issueDate?: DateTimeFilter | Date | string
    expiryDate?: DateTimeFilter | Date | string
    Player?: XOR<PlayerRelationFilter, PlayerWhereInput> | null
  }

  export type HeathRecordOrderByWithRelationInput = {
    id?: SortOrder
    cardNumber?: SortOrder
    issueDate?: SortOrder
    expiryDate?: SortOrder
    Player?: PlayerOrderByWithRelationInput
  }

  export type HeathRecordWhereUniqueInput = {
    id?: string
    cardNumber?: string
  }

  export type HeathRecordOrderByWithAggregationInput = {
    id?: SortOrder
    cardNumber?: SortOrder
    issueDate?: SortOrder
    expiryDate?: SortOrder
    _count?: HeathRecordCountOrderByAggregateInput
    _max?: HeathRecordMaxOrderByAggregateInput
    _min?: HeathRecordMinOrderByAggregateInput
  }

  export type HeathRecordScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HeathRecordScalarWhereWithAggregatesInput>
    OR?: Enumerable<HeathRecordScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HeathRecordScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    cardNumber?: StringWithAggregatesFilter | string
    issueDate?: DateTimeWithAggregatesFilter | Date | string
    expiryDate?: DateTimeWithAggregatesFilter | Date | string
  }

  export type GameWhereInput = {
    AND?: Enumerable<GameWhereInput>
    OR?: Enumerable<GameWhereInput>
    NOT?: Enumerable<GameWhereInput>
    id?: StringFilter | string
    team?: TeamListRelationFilter
    events?: GameEventListRelationFilter
    competition?: XOR<CompetitionRelationFilter, CompetitionWhereInput>
    updatedAt?: DateTimeFilter | Date | string
    location?: XOR<LocationRelationFilter, LocationWhereInput>
    attendance?: IntFilter | number
    locationId?: StringFilter | string
    competitionId?: StringFilter | string
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    team?: TeamOrderByRelationAggregateInput
    events?: GameEventOrderByRelationAggregateInput
    competition?: CompetitionOrderByWithRelationInput
    updatedAt?: SortOrder
    location?: LocationOrderByWithRelationInput
    attendance?: SortOrder
    locationId?: SortOrder
    competitionId?: SortOrder
  }

  export type GameWhereUniqueInput = {
    id?: string
  }

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    attendance?: SortOrder
    locationId?: SortOrder
    competitionId?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _avg?: GameAvgOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
    _sum?: GameSumOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GameScalarWhereWithAggregatesInput>
    OR?: Enumerable<GameScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GameScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    attendance?: IntWithAggregatesFilter | number
    locationId?: StringWithAggregatesFilter | string
    competitionId?: StringWithAggregatesFilter | string
  }

  export type GameEventWhereInput = {
    AND?: Enumerable<GameEventWhereInput>
    OR?: Enumerable<GameEventWhereInput>
    NOT?: Enumerable<GameEventWhereInput>
    id?: StringFilter | string
    player?: XOR<PlayerRelationFilter, PlayerWhereInput>
    minute?: IntFilter | number
    game?: XOR<GameRelationFilter, GameWhereInput> | null
    gameId?: StringNullableFilter | string | null
    playerId?: StringFilter | string
    type?: EnumEventFilter | Event
  }

  export type GameEventOrderByWithRelationInput = {
    id?: SortOrder
    player?: PlayerOrderByWithRelationInput
    minute?: SortOrder
    game?: GameOrderByWithRelationInput
    gameId?: SortOrder
    playerId?: SortOrder
    type?: SortOrder
  }

  export type GameEventWhereUniqueInput = {
    id?: string
  }

  export type GameEventOrderByWithAggregationInput = {
    id?: SortOrder
    minute?: SortOrder
    gameId?: SortOrder
    playerId?: SortOrder
    type?: SortOrder
    _count?: GameEventCountOrderByAggregateInput
    _avg?: GameEventAvgOrderByAggregateInput
    _max?: GameEventMaxOrderByAggregateInput
    _min?: GameEventMinOrderByAggregateInput
    _sum?: GameEventSumOrderByAggregateInput
  }

  export type GameEventScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GameEventScalarWhereWithAggregatesInput>
    OR?: Enumerable<GameEventScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GameEventScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    minute?: IntWithAggregatesFilter | number
    gameId?: StringNullableWithAggregatesFilter | string | null
    playerId?: StringWithAggregatesFilter | string
    type?: EnumEventWithAggregatesFilter | Event
  }

  export type ScholarshipWhereInput = {
    AND?: Enumerable<ScholarshipWhereInput>
    OR?: Enumerable<ScholarshipWhereInput>
    NOT?: Enumerable<ScholarshipWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    description?: StringFilter | string
    sponsor?: XOR<InstitutionRelationFilter, InstitutionWhereInput>
    player?: XOR<PlayerRelationFilter, PlayerWhereInput>
    institutionId?: StringFilter | string
    playerId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ScholarshipOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    sponsor?: InstitutionOrderByWithRelationInput
    player?: PlayerOrderByWithRelationInput
    institutionId?: SortOrder
    playerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScholarshipWhereUniqueInput = {
    id?: string
  }

  export type ScholarshipOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    institutionId?: SortOrder
    playerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScholarshipCountOrderByAggregateInput
    _max?: ScholarshipMaxOrderByAggregateInput
    _min?: ScholarshipMinOrderByAggregateInput
  }

  export type ScholarshipScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ScholarshipScalarWhereWithAggregatesInput>
    OR?: Enumerable<ScholarshipScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ScholarshipScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    institutionId?: StringWithAggregatesFilter | string
    playerId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AccountWhereInput = {
    AND?: Enumerable<AccountWhereInput>
    OR?: Enumerable<AccountWhereInput>
    NOT?: Enumerable<AccountWhereInput>
    id?: StringFilter | string
    username?: StringFilter | string
    password?: StringFilter | string
    updatedAt?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    recruitment?: RecruitmentListRelationFilter
    Staff?: StaffListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    recruitment?: RecruitmentOrderByRelationAggregateInput
    Staff?: StaffOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = {
    id?: string
    username?: string
  }

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AccountScalarWhereWithAggregatesInput>
    OR?: Enumerable<AccountScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AccountScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type RecruitmentWhereInput = {
    AND?: Enumerable<RecruitmentWhereInput>
    OR?: Enumerable<RecruitmentWhereInput>
    NOT?: Enumerable<RecruitmentWhereInput>
    id?: StringFilter | string
    player?: XOR<PlayerRelationFilter, PlayerWhereInput>
    recruiter?: XOR<AccountRelationFilter, AccountWhereInput>
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    passed?: BoolFilter | boolean
    interviews?: InterviewListRelationFilter
    resume?: StringNullableFilter | string | null
    playerId?: StringFilter | string
    accountId?: StringFilter | string
  }

  export type RecruitmentOrderByWithRelationInput = {
    id?: SortOrder
    player?: PlayerOrderByWithRelationInput
    recruiter?: AccountOrderByWithRelationInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    passed?: SortOrder
    interviews?: InterviewOrderByRelationAggregateInput
    resume?: SortOrder
    playerId?: SortOrder
    accountId?: SortOrder
  }

  export type RecruitmentWhereUniqueInput = {
    id?: string
  }

  export type RecruitmentOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    passed?: SortOrder
    resume?: SortOrder
    playerId?: SortOrder
    accountId?: SortOrder
    _count?: RecruitmentCountOrderByAggregateInput
    _max?: RecruitmentMaxOrderByAggregateInput
    _min?: RecruitmentMinOrderByAggregateInput
  }

  export type RecruitmentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RecruitmentScalarWhereWithAggregatesInput>
    OR?: Enumerable<RecruitmentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RecruitmentScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    passed?: BoolWithAggregatesFilter | boolean
    resume?: StringNullableWithAggregatesFilter | string | null
    playerId?: StringWithAggregatesFilter | string
    accountId?: StringWithAggregatesFilter | string
  }

  export type InterviewWhereInput = {
    AND?: Enumerable<InterviewWhereInput>
    OR?: Enumerable<InterviewWhereInput>
    NOT?: Enumerable<InterviewWhereInput>
    id?: StringFilter | string
    stage?: EnumStageFilter | Stage
    passed?: BoolFilter | boolean
    at?: DateTimeFilter | Date | string
    Recruitment?: XOR<RecruitmentRelationFilter, RecruitmentWhereInput>
    comment?: StringFilter | string
    recruitmentId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type InterviewOrderByWithRelationInput = {
    id?: SortOrder
    stage?: SortOrder
    passed?: SortOrder
    at?: SortOrder
    Recruitment?: RecruitmentOrderByWithRelationInput
    comment?: SortOrder
    recruitmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterviewWhereUniqueInput = {
    id?: string
  }

  export type InterviewOrderByWithAggregationInput = {
    id?: SortOrder
    stage?: SortOrder
    passed?: SortOrder
    at?: SortOrder
    comment?: SortOrder
    recruitmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InterviewCountOrderByAggregateInput
    _max?: InterviewMaxOrderByAggregateInput
    _min?: InterviewMinOrderByAggregateInput
  }

  export type InterviewScalarWhereWithAggregatesInput = {
    AND?: Enumerable<InterviewScalarWhereWithAggregatesInput>
    OR?: Enumerable<InterviewScalarWhereWithAggregatesInput>
    NOT?: Enumerable<InterviewScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    stage?: EnumStageWithAggregatesFilter | Stage
    passed?: BoolWithAggregatesFilter | boolean
    at?: DateTimeWithAggregatesFilter | Date | string
    comment?: StringWithAggregatesFilter | string
    recruitmentId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type InjuryWhereInput = {
    AND?: Enumerable<InjuryWhereInput>
    OR?: Enumerable<InjuryWhereInput>
    NOT?: Enumerable<InjuryWhereInput>
    id?: StringFilter | string
    player?: XOR<PlayerRelationFilter, PlayerWhereInput>
    playerId?: StringFilter | string
    Operation?: OperationListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type InjuryOrderByWithRelationInput = {
    id?: SortOrder
    player?: PlayerOrderByWithRelationInput
    playerId?: SortOrder
    Operation?: OperationOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InjuryWhereUniqueInput = {
    id?: string
  }

  export type InjuryOrderByWithAggregationInput = {
    id?: SortOrder
    playerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InjuryCountOrderByAggregateInput
    _max?: InjuryMaxOrderByAggregateInput
    _min?: InjuryMinOrderByAggregateInput
  }

  export type InjuryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<InjuryScalarWhereWithAggregatesInput>
    OR?: Enumerable<InjuryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<InjuryScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    playerId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type OperationWhereInput = {
    AND?: Enumerable<OperationWhereInput>
    OR?: Enumerable<OperationWhereInput>
    NOT?: Enumerable<OperationWhereInput>
    id?: StringFilter | string
    type?: StringFilter | string
    injury?: XOR<InjuryRelationFilter, InjuryWhereInput>
    date?: DateTimeFilter | Date | string
    injuryId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type OperationOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    injury?: InjuryOrderByWithRelationInput
    date?: SortOrder
    injuryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OperationWhereUniqueInput = {
    id?: string
  }

  export type OperationOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    date?: SortOrder
    injuryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OperationCountOrderByAggregateInput
    _max?: OperationMaxOrderByAggregateInput
    _min?: OperationMinOrderByAggregateInput
  }

  export type OperationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OperationScalarWhereWithAggregatesInput>
    OR?: Enumerable<OperationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OperationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    date?: DateTimeWithAggregatesFilter | Date | string
    injuryId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PlayerCreateInput = {
    id?: string
    name: string
    dob: Date | string
    isDomestic?: boolean
    photo?: string | null
    gender: string
    position: Postion
    healthRecord?: HeathRecordCreateNestedOneWithoutPlayerInput
    phone: string
    streetAddress: string
    city: string
    province?: string
    country?: string
    postalCode: string
    scholarship?: ScholarshipCreateNestedManyWithoutPlayerInput
    recruitment?: RecruitmentCreateNestedManyWithoutPlayerInput
    GameEvent?: GameEventCreateNestedManyWithoutPlayerInput
    Injury?: InjuryCreateNestedManyWithoutPlayerInput
    Squad?: SquadCreateNestedManyWithoutPlayersInput
    Team?: TeamCreateNestedManyWithoutStartersInput
  }

  export type PlayerUncheckedCreateInput = {
    id?: string
    name: string
    dob: Date | string
    isDomestic?: boolean
    photo?: string | null
    gender: string
    position: Postion
    heathRecordId?: string | null
    phone: string
    streetAddress: string
    city: string
    province?: string
    country?: string
    postalCode: string
    scholarship?: ScholarshipUncheckedCreateNestedManyWithoutPlayerInput
    recruitment?: RecruitmentUncheckedCreateNestedManyWithoutPlayerInput
    GameEvent?: GameEventUncheckedCreateNestedManyWithoutPlayerInput
    Injury?: InjuryUncheckedCreateNestedManyWithoutPlayerInput
    Squad?: SquadUncheckedCreateNestedManyWithoutPlayersInput
    Team?: TeamUncheckedCreateNestedManyWithoutStartersInput
  }

  export type PlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    isDomestic?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    position?: EnumPostionFieldUpdateOperationsInput | Postion
    healthRecord?: HeathRecordUpdateOneWithoutPlayerNestedInput
    phone?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    scholarship?: ScholarshipUpdateManyWithoutPlayerNestedInput
    recruitment?: RecruitmentUpdateManyWithoutPlayerNestedInput
    GameEvent?: GameEventUpdateManyWithoutPlayerNestedInput
    Injury?: InjuryUpdateManyWithoutPlayerNestedInput
    Squad?: SquadUpdateManyWithoutPlayersNestedInput
    Team?: TeamUpdateManyWithoutStartersNestedInput
  }

  export type PlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    isDomestic?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    position?: EnumPostionFieldUpdateOperationsInput | Postion
    heathRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    scholarship?: ScholarshipUncheckedUpdateManyWithoutPlayerNestedInput
    recruitment?: RecruitmentUncheckedUpdateManyWithoutPlayerNestedInput
    GameEvent?: GameEventUncheckedUpdateManyWithoutPlayerNestedInput
    Injury?: InjuryUncheckedUpdateManyWithoutPlayerNestedInput
    Squad?: SquadUncheckedUpdateManyWithoutPlayersNestedInput
    Team?: TeamUncheckedUpdateManyWithoutStartersNestedInput
  }

  export type PlayerCreateManyInput = {
    id?: string
    name: string
    dob: Date | string
    isDomestic?: boolean
    photo?: string | null
    gender: string
    position: Postion
    heathRecordId?: string | null
    phone: string
    streetAddress: string
    city: string
    province?: string
    country?: string
    postalCode: string
  }

  export type PlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    isDomestic?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    position?: EnumPostionFieldUpdateOperationsInput | Postion
    phone?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    isDomestic?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    position?: EnumPostionFieldUpdateOperationsInput | Postion
    heathRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type TeamCreateInput = {
    id?: string
    starters?: PlayerCreateNestedManyWithoutTeamInput
    formation: Formation
    shirtColor: string
    squad: SquadCreateNestedOneWithoutTeamInput
    Game?: GameCreateNestedOneWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    starters?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    formation: Formation
    shirtColor: string
    squadId: string
    gameId?: string | null
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    starters?: PlayerUpdateManyWithoutTeamNestedInput
    formation?: EnumFormationFieldUpdateOperationsInput | Formation
    shirtColor?: StringFieldUpdateOperationsInput | string
    squad?: SquadUpdateOneRequiredWithoutTeamNestedInput
    Game?: GameUpdateOneWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    starters?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    formation?: EnumFormationFieldUpdateOperationsInput | Formation
    shirtColor?: StringFieldUpdateOperationsInput | string
    squadId?: StringFieldUpdateOperationsInput | string
    gameId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamCreateManyInput = {
    id?: string
    formation: Formation
    shirtColor: string
    squadId: string
    gameId?: string | null
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    formation?: EnumFormationFieldUpdateOperationsInput | Formation
    shirtColor?: StringFieldUpdateOperationsInput | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    formation?: EnumFormationFieldUpdateOperationsInput | Formation
    shirtColor?: StringFieldUpdateOperationsInput | string
    squadId?: StringFieldUpdateOperationsInput | string
    gameId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StaffCreateInput = {
    id?: string
    name: string
    dob: Date | string
    phone: string
    role: Role
    streetAddress: string
    city: string
    country?: string
    postalCode: string
    account?: AccountCreateNestedOneWithoutStaffInput
    Squad?: SquadCreateNestedManyWithoutStaffInput
  }

  export type StaffUncheckedCreateInput = {
    id?: string
    name: string
    dob: Date | string
    phone: string
    role: Role
    streetAddress: string
    city: string
    country?: string
    postalCode: string
    accountId?: string | null
    Squad?: SquadUncheckedCreateNestedManyWithoutStaffInput
  }

  export type StaffUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    account?: AccountUpdateOneWithoutStaffNestedInput
    Squad?: SquadUpdateManyWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    Squad?: SquadUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type StaffCreateManyInput = {
    id?: string
    name: string
    dob: Date | string
    phone: string
    role: Role
    streetAddress: string
    city: string
    country?: string
    postalCode: string
    accountId?: string | null
  }

  export type StaffUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type StaffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InstitutionCreateInput = {
    id?: string
    name: string
    address: string
    city: string
    province?: string
    postal_code: string
    category: InstitutionCategory
    scholarship?: ScholarshipCreateNestedManyWithoutSponsorInput
    Squad?: SquadCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    city: string
    province?: string
    postal_code: string
    category: InstitutionCategory
    scholarship?: ScholarshipUncheckedCreateNestedManyWithoutSponsorInput
    Squad?: SquadUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    category?: EnumInstitutionCategoryFieldUpdateOperationsInput | InstitutionCategory
    scholarship?: ScholarshipUpdateManyWithoutSponsorNestedInput
    Squad?: SquadUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    category?: EnumInstitutionCategoryFieldUpdateOperationsInput | InstitutionCategory
    scholarship?: ScholarshipUncheckedUpdateManyWithoutSponsorNestedInput
    Squad?: SquadUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionCreateManyInput = {
    id?: string
    name: string
    address: string
    city: string
    province?: string
    postal_code: string
    category: InstitutionCategory
  }

  export type InstitutionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    category?: EnumInstitutionCategoryFieldUpdateOperationsInput | InstitutionCategory
  }

  export type InstitutionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    category?: EnumInstitutionCategoryFieldUpdateOperationsInput | InstitutionCategory
  }

  export type LocationCreateInput = {
    id?: string
    name: string
    category: LocationCategory
    streetAddress: string
    city: string
    province?: string
    country?: string
    postalCode: string
    game?: GameCreateNestedManyWithoutLocationInput
    Squad?: SquadCreateNestedManyWithoutHomeInput
  }

  export type LocationUncheckedCreateInput = {
    id?: string
    name: string
    category: LocationCategory
    streetAddress: string
    city: string
    province?: string
    country?: string
    postalCode: string
    game?: GameUncheckedCreateNestedManyWithoutLocationInput
    Squad?: SquadUncheckedCreateNestedManyWithoutHomeInput
  }

  export type LocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumLocationCategoryFieldUpdateOperationsInput | LocationCategory
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    game?: GameUpdateManyWithoutLocationNestedInput
    Squad?: SquadUpdateManyWithoutHomeNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumLocationCategoryFieldUpdateOperationsInput | LocationCategory
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    game?: GameUncheckedUpdateManyWithoutLocationNestedInput
    Squad?: SquadUncheckedUpdateManyWithoutHomeNestedInput
  }

  export type LocationCreateManyInput = {
    id?: string
    name: string
    category: LocationCategory
    streetAddress: string
    city: string
    province?: string
    country?: string
    postalCode: string
  }

  export type LocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumLocationCategoryFieldUpdateOperationsInput | LocationCategory
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumLocationCategoryFieldUpdateOperationsInput | LocationCategory
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type SquadCreateInput = {
    id?: string
    name: string
    players?: PlayerCreateNestedManyWithoutSquadInput
    institution: InstitutionCreateNestedOneWithoutSquadInput
    staff?: StaffCreateNestedManyWithoutSquadInput
    competition?: CompetitionCreateNestedManyWithoutSquadInput
    home?: LocationCreateNestedOneWithoutSquadInput
    homeColor?: string | null
    awayColor?: string | null
    Team?: TeamCreateNestedManyWithoutSquadInput
  }

  export type SquadUncheckedCreateInput = {
    id?: string
    name: string
    players?: PlayerUncheckedCreateNestedManyWithoutSquadInput
    staff?: StaffUncheckedCreateNestedManyWithoutSquadInput
    competition?: CompetitionUncheckedCreateNestedManyWithoutSquadInput
    institutionId: string
    homeColor?: string | null
    awayColor?: string | null
    Team?: TeamUncheckedCreateNestedManyWithoutSquadInput
    locationId?: string | null
  }

  export type SquadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    players?: PlayerUpdateManyWithoutSquadNestedInput
    institution?: InstitutionUpdateOneRequiredWithoutSquadNestedInput
    staff?: StaffUpdateManyWithoutSquadNestedInput
    competition?: CompetitionUpdateManyWithoutSquadNestedInput
    home?: LocationUpdateOneWithoutSquadNestedInput
    homeColor?: NullableStringFieldUpdateOperationsInput | string | null
    awayColor?: NullableStringFieldUpdateOperationsInput | string | null
    Team?: TeamUpdateManyWithoutSquadNestedInput
  }

  export type SquadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    players?: PlayerUncheckedUpdateManyWithoutSquadNestedInput
    staff?: StaffUncheckedUpdateManyWithoutSquadNestedInput
    competition?: CompetitionUncheckedUpdateManyWithoutSquadNestedInput
    institutionId?: StringFieldUpdateOperationsInput | string
    homeColor?: NullableStringFieldUpdateOperationsInput | string | null
    awayColor?: NullableStringFieldUpdateOperationsInput | string | null
    Team?: TeamUncheckedUpdateManyWithoutSquadNestedInput
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SquadCreateManyInput = {
    id?: string
    name: string
    institutionId: string
    homeColor?: string | null
    awayColor?: string | null
    locationId?: string | null
  }

  export type SquadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    homeColor?: NullableStringFieldUpdateOperationsInput | string | null
    awayColor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SquadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    homeColor?: NullableStringFieldUpdateOperationsInput | string | null
    awayColor?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompetitionCreateInput = {
    id?: string
    name: string
    sponsor: string
    type?: CompetitionType
    season: SeasonCreateNestedOneWithoutCompetitionInput
    Squad?: SquadCreateNestedManyWithoutCompetitionInput
    Game?: GameCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUncheckedCreateInput = {
    id?: string
    name: string
    sponsor: string
    type?: CompetitionType
    seasonId: string
    Squad?: SquadUncheckedCreateNestedManyWithoutCompetitionInput
    Game?: GameUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sponsor?: StringFieldUpdateOperationsInput | string
    type?: EnumCompetitionTypeFieldUpdateOperationsInput | CompetitionType
    season?: SeasonUpdateOneRequiredWithoutCompetitionNestedInput
    Squad?: SquadUpdateManyWithoutCompetitionNestedInput
    Game?: GameUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sponsor?: StringFieldUpdateOperationsInput | string
    type?: EnumCompetitionTypeFieldUpdateOperationsInput | CompetitionType
    seasonId?: StringFieldUpdateOperationsInput | string
    Squad?: SquadUncheckedUpdateManyWithoutCompetitionNestedInput
    Game?: GameUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionCreateManyInput = {
    id?: string
    name: string
    sponsor: string
    type?: CompetitionType
    seasonId: string
  }

  export type CompetitionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sponsor?: StringFieldUpdateOperationsInput | string
    type?: EnumCompetitionTypeFieldUpdateOperationsInput | CompetitionType
  }

  export type CompetitionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sponsor?: StringFieldUpdateOperationsInput | string
    type?: EnumCompetitionTypeFieldUpdateOperationsInput | CompetitionType
    seasonId?: StringFieldUpdateOperationsInput | string
  }

  export type SeasonCreateInput = {
    id?: string
    startDate?: Date | string
    endDate: Date | string
    Competition?: CompetitionCreateNestedManyWithoutSeasonInput
  }

  export type SeasonUncheckedCreateInput = {
    id?: string
    startDate?: Date | string
    endDate: Date | string
    Competition?: CompetitionUncheckedCreateNestedManyWithoutSeasonInput
  }

  export type SeasonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Competition?: CompetitionUpdateManyWithoutSeasonNestedInput
  }

  export type SeasonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Competition?: CompetitionUncheckedUpdateManyWithoutSeasonNestedInput
  }

  export type SeasonCreateManyInput = {
    id?: string
    startDate?: Date | string
    endDate: Date | string
  }

  export type SeasonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeasonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeathRecordCreateInput = {
    id?: string
    cardNumber: string
    issueDate: Date | string
    expiryDate: Date | string
    Player?: PlayerCreateNestedOneWithoutHealthRecordInput
  }

  export type HeathRecordUncheckedCreateInput = {
    id?: string
    cardNumber: string
    issueDate: Date | string
    expiryDate: Date | string
    Player?: PlayerUncheckedCreateNestedOneWithoutHealthRecordInput
  }

  export type HeathRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Player?: PlayerUpdateOneWithoutHealthRecordNestedInput
  }

  export type HeathRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Player?: PlayerUncheckedUpdateOneWithoutHealthRecordNestedInput
  }

  export type HeathRecordCreateManyInput = {
    id?: string
    cardNumber: string
    issueDate: Date | string
    expiryDate: Date | string
  }

  export type HeathRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeathRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameCreateInput = {
    id?: string
    team?: TeamCreateNestedManyWithoutGameInput
    events?: GameEventCreateNestedManyWithoutGameInput
    competition: CompetitionCreateNestedOneWithoutGameInput
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutGameInput
    attendance: number
  }

  export type GameUncheckedCreateInput = {
    id?: string
    team?: TeamUncheckedCreateNestedManyWithoutGameInput
    events?: GameEventUncheckedCreateNestedManyWithoutGameInput
    updatedAt?: Date | string
    attendance: number
    locationId: string
    competitionId: string
  }

  export type GameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    team?: TeamUpdateManyWithoutGameNestedInput
    events?: GameEventUpdateManyWithoutGameNestedInput
    competition?: CompetitionUpdateOneRequiredWithoutGameNestedInput
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutGameNestedInput
    attendance?: IntFieldUpdateOperationsInput | number
  }

  export type GameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    team?: TeamUncheckedUpdateManyWithoutGameNestedInput
    events?: GameEventUncheckedUpdateManyWithoutGameNestedInput
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: IntFieldUpdateOperationsInput | number
    locationId?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
  }

  export type GameCreateManyInput = {
    id?: string
    updatedAt?: Date | string
    attendance: number
    locationId: string
    competitionId: string
  }

  export type GameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: IntFieldUpdateOperationsInput | number
  }

  export type GameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: IntFieldUpdateOperationsInput | number
    locationId?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
  }

  export type GameEventCreateInput = {
    id?: string
    player: PlayerCreateNestedOneWithoutGameEventInput
    minute: number
    game?: GameCreateNestedOneWithoutEventsInput
    type: Event
  }

  export type GameEventUncheckedCreateInput = {
    id?: string
    minute: number
    gameId?: string | null
    playerId: string
    type: Event
  }

  export type GameEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    player?: PlayerUpdateOneRequiredWithoutGameEventNestedInput
    minute?: IntFieldUpdateOperationsInput | number
    game?: GameUpdateOneWithoutEventsNestedInput
    type?: EnumEventFieldUpdateOperationsInput | Event
  }

  export type GameEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    minute?: IntFieldUpdateOperationsInput | number
    gameId?: NullableStringFieldUpdateOperationsInput | string | null
    playerId?: StringFieldUpdateOperationsInput | string
    type?: EnumEventFieldUpdateOperationsInput | Event
  }

  export type GameEventCreateManyInput = {
    id?: string
    minute: number
    gameId?: string | null
    playerId: string
    type: Event
  }

  export type GameEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    minute?: IntFieldUpdateOperationsInput | number
    type?: EnumEventFieldUpdateOperationsInput | Event
  }

  export type GameEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    minute?: IntFieldUpdateOperationsInput | number
    gameId?: NullableStringFieldUpdateOperationsInput | string | null
    playerId?: StringFieldUpdateOperationsInput | string
    type?: EnumEventFieldUpdateOperationsInput | Event
  }

  export type ScholarshipCreateInput = {
    id?: string
    name: string
    description: string
    sponsor: InstitutionCreateNestedOneWithoutScholarshipInput
    player: PlayerCreateNestedOneWithoutScholarshipInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScholarshipUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    institutionId: string
    playerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScholarshipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sponsor?: InstitutionUpdateOneRequiredWithoutScholarshipNestedInput
    player?: PlayerUpdateOneRequiredWithoutScholarshipNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScholarshipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScholarshipCreateManyInput = {
    id?: string
    name: string
    description: string
    institutionId: string
    playerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScholarshipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScholarshipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    username: string
    password: string
    updatedAt?: Date | string
    createdAt?: Date | string
    recruitment?: RecruitmentCreateNestedManyWithoutRecruiterInput
    Staff?: StaffCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    updatedAt?: Date | string
    createdAt?: Date | string
    recruitment?: RecruitmentUncheckedCreateNestedManyWithoutRecruiterInput
    Staff?: StaffUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recruitment?: RecruitmentUpdateManyWithoutRecruiterNestedInput
    Staff?: StaffUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recruitment?: RecruitmentUncheckedUpdateManyWithoutRecruiterNestedInput
    Staff?: StaffUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: string
    username: string
    password: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecruitmentCreateInput = {
    id?: string
    player: PlayerCreateNestedOneWithoutRecruitmentInput
    recruiter: AccountCreateNestedOneWithoutRecruitmentInput
    createdAt?: Date | string
    updatedAt?: Date | string
    passed?: boolean
    interviews?: InterviewCreateNestedManyWithoutRecruitmentInput
    resume?: string | null
  }

  export type RecruitmentUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passed?: boolean
    interviews?: InterviewUncheckedCreateNestedManyWithoutRecruitmentInput
    resume?: string | null
    playerId: string
    accountId: string
  }

  export type RecruitmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    player?: PlayerUpdateOneRequiredWithoutRecruitmentNestedInput
    recruiter?: AccountUpdateOneRequiredWithoutRecruitmentNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passed?: BoolFieldUpdateOperationsInput | boolean
    interviews?: InterviewUpdateManyWithoutRecruitmentNestedInput
    resume?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecruitmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passed?: BoolFieldUpdateOperationsInput | boolean
    interviews?: InterviewUncheckedUpdateManyWithoutRecruitmentNestedInput
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    playerId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type RecruitmentCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passed?: boolean
    resume?: string | null
    playerId: string
    accountId: string
  }

  export type RecruitmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passed?: BoolFieldUpdateOperationsInput | boolean
    resume?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecruitmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passed?: BoolFieldUpdateOperationsInput | boolean
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    playerId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type InterviewCreateInput = {
    id?: string
    stage?: Stage
    passed?: boolean
    at: Date | string
    Recruitment: RecruitmentCreateNestedOneWithoutInterviewsInput
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewUncheckedCreateInput = {
    id?: string
    stage?: Stage
    passed?: boolean
    at: Date | string
    comment: string
    recruitmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stage?: EnumStageFieldUpdateOperationsInput | Stage
    passed?: BoolFieldUpdateOperationsInput | boolean
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    Recruitment?: RecruitmentUpdateOneRequiredWithoutInterviewsNestedInput
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stage?: EnumStageFieldUpdateOperationsInput | Stage
    passed?: BoolFieldUpdateOperationsInput | boolean
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    recruitmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewCreateManyInput = {
    id?: string
    stage?: Stage
    passed?: boolean
    at: Date | string
    comment: string
    recruitmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stage?: EnumStageFieldUpdateOperationsInput | Stage
    passed?: BoolFieldUpdateOperationsInput | boolean
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stage?: EnumStageFieldUpdateOperationsInput | Stage
    passed?: BoolFieldUpdateOperationsInput | boolean
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    recruitmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InjuryCreateInput = {
    id?: string
    player: PlayerCreateNestedOneWithoutInjuryInput
    Operation?: OperationCreateNestedManyWithoutInjuryInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InjuryUncheckedCreateInput = {
    id?: string
    playerId: string
    Operation?: OperationUncheckedCreateNestedManyWithoutInjuryInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InjuryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    player?: PlayerUpdateOneRequiredWithoutInjuryNestedInput
    Operation?: OperationUpdateManyWithoutInjuryNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InjuryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    Operation?: OperationUncheckedUpdateManyWithoutInjuryNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InjuryCreateManyInput = {
    id?: string
    playerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InjuryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InjuryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationCreateInput = {
    id?: string
    type: string
    injury: InjuryCreateNestedOneWithoutOperationInput
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperationUncheckedCreateInput = {
    id?: string
    type: string
    date?: Date | string
    injuryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    injury?: InjuryUpdateOneRequiredWithoutOperationNestedInput
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    injuryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationCreateManyInput = {
    id?: string
    type: string
    date?: Date | string
    injuryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    injuryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type EnumPostionFilter = {
    equals?: Postion
    in?: Enumerable<Postion>
    notIn?: Enumerable<Postion>
    not?: NestedEnumPostionFilter | Postion
  }

  export type HeathRecordRelationFilter = {
    is?: HeathRecordWhereInput | null
    isNot?: HeathRecordWhereInput | null
  }

  export type ScholarshipListRelationFilter = {
    every?: ScholarshipWhereInput
    some?: ScholarshipWhereInput
    none?: ScholarshipWhereInput
  }

  export type RecruitmentListRelationFilter = {
    every?: RecruitmentWhereInput
    some?: RecruitmentWhereInput
    none?: RecruitmentWhereInput
  }

  export type GameEventListRelationFilter = {
    every?: GameEventWhereInput
    some?: GameEventWhereInput
    none?: GameEventWhereInput
  }

  export type InjuryListRelationFilter = {
    every?: InjuryWhereInput
    some?: InjuryWhereInput
    none?: InjuryWhereInput
  }

  export type SquadListRelationFilter = {
    every?: SquadWhereInput
    some?: SquadWhereInput
    none?: SquadWhereInput
  }

  export type TeamListRelationFilter = {
    every?: TeamWhereInput
    some?: TeamWhereInput
    none?: TeamWhereInput
  }

  export type ScholarshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecruitmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InjuryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SquadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    isDomestic?: SortOrder
    photo?: SortOrder
    gender?: SortOrder
    position?: SortOrder
    heathRecordId?: SortOrder
    phone?: SortOrder
    streetAddress?: SortOrder
    city?: SortOrder
    province?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
  }

  export type PlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    isDomestic?: SortOrder
    photo?: SortOrder
    gender?: SortOrder
    position?: SortOrder
    heathRecordId?: SortOrder
    phone?: SortOrder
    streetAddress?: SortOrder
    city?: SortOrder
    province?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
  }

  export type PlayerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    isDomestic?: SortOrder
    photo?: SortOrder
    gender?: SortOrder
    position?: SortOrder
    heathRecordId?: SortOrder
    phone?: SortOrder
    streetAddress?: SortOrder
    city?: SortOrder
    province?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type EnumPostionWithAggregatesFilter = {
    equals?: Postion
    in?: Enumerable<Postion>
    notIn?: Enumerable<Postion>
    not?: NestedEnumPostionWithAggregatesFilter | Postion
    _count?: NestedIntFilter
    _min?: NestedEnumPostionFilter
    _max?: NestedEnumPostionFilter
  }

  export type PlayerListRelationFilter = {
    every?: PlayerWhereInput
    some?: PlayerWhereInput
    none?: PlayerWhereInput
  }

  export type EnumFormationFilter = {
    equals?: Formation
    in?: Enumerable<Formation>
    notIn?: Enumerable<Formation>
    not?: NestedEnumFormationFilter | Formation
  }

  export type SquadRelationFilter = {
    is?: SquadWhereInput
    isNot?: SquadWhereInput
  }

  export type GameRelationFilter = {
    is?: GameWhereInput | null
    isNot?: GameWhereInput | null
  }

  export type PlayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    formation?: SortOrder
    shirtColor?: SortOrder
    squadId?: SortOrder
    gameId?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    formation?: SortOrder
    shirtColor?: SortOrder
    squadId?: SortOrder
    gameId?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    formation?: SortOrder
    shirtColor?: SortOrder
    squadId?: SortOrder
    gameId?: SortOrder
  }

  export type EnumFormationWithAggregatesFilter = {
    equals?: Formation
    in?: Enumerable<Formation>
    notIn?: Enumerable<Formation>
    not?: NestedEnumFormationWithAggregatesFilter | Formation
    _count?: NestedIntFilter
    _min?: NestedEnumFormationFilter
    _max?: NestedEnumFormationFilter
  }

  export type EnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type AccountRelationFilter = {
    is?: AccountWhereInput | null
    isNot?: AccountWhereInput | null
  }

  export type StaffCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    streetAddress?: SortOrder
    city?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    accountId?: SortOrder
  }

  export type StaffMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    streetAddress?: SortOrder
    city?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    accountId?: SortOrder
  }

  export type StaffMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    streetAddress?: SortOrder
    city?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    accountId?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type EnumInstitutionCategoryFilter = {
    equals?: InstitutionCategory
    in?: Enumerable<InstitutionCategory>
    notIn?: Enumerable<InstitutionCategory>
    not?: NestedEnumInstitutionCategoryFilter | InstitutionCategory
  }

  export type InstitutionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postal_code?: SortOrder
    category?: SortOrder
  }

  export type InstitutionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postal_code?: SortOrder
    category?: SortOrder
  }

  export type InstitutionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postal_code?: SortOrder
    category?: SortOrder
  }

  export type EnumInstitutionCategoryWithAggregatesFilter = {
    equals?: InstitutionCategory
    in?: Enumerable<InstitutionCategory>
    notIn?: Enumerable<InstitutionCategory>
    not?: NestedEnumInstitutionCategoryWithAggregatesFilter | InstitutionCategory
    _count?: NestedIntFilter
    _min?: NestedEnumInstitutionCategoryFilter
    _max?: NestedEnumInstitutionCategoryFilter
  }

  export type EnumLocationCategoryFilter = {
    equals?: LocationCategory
    in?: Enumerable<LocationCategory>
    notIn?: Enumerable<LocationCategory>
    not?: NestedEnumLocationCategoryFilter | LocationCategory
  }

  export type GameListRelationFilter = {
    every?: GameWhereInput
    some?: GameWhereInput
    none?: GameWhereInput
  }

  export type GameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    streetAddress?: SortOrder
    city?: SortOrder
    province?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    streetAddress?: SortOrder
    city?: SortOrder
    province?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    streetAddress?: SortOrder
    city?: SortOrder
    province?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
  }

  export type EnumLocationCategoryWithAggregatesFilter = {
    equals?: LocationCategory
    in?: Enumerable<LocationCategory>
    notIn?: Enumerable<LocationCategory>
    not?: NestedEnumLocationCategoryWithAggregatesFilter | LocationCategory
    _count?: NestedIntFilter
    _min?: NestedEnumLocationCategoryFilter
    _max?: NestedEnumLocationCategoryFilter
  }

  export type InstitutionRelationFilter = {
    is?: InstitutionWhereInput
    isNot?: InstitutionWhereInput
  }

  export type StaffListRelationFilter = {
    every?: StaffWhereInput
    some?: StaffWhereInput
    none?: StaffWhereInput
  }

  export type CompetitionListRelationFilter = {
    every?: CompetitionWhereInput
    some?: CompetitionWhereInput
    none?: CompetitionWhereInput
  }

  export type LocationRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type StaffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompetitionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SquadCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    institutionId?: SortOrder
    homeColor?: SortOrder
    awayColor?: SortOrder
    locationId?: SortOrder
  }

  export type SquadMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    institutionId?: SortOrder
    homeColor?: SortOrder
    awayColor?: SortOrder
    locationId?: SortOrder
  }

  export type SquadMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    institutionId?: SortOrder
    homeColor?: SortOrder
    awayColor?: SortOrder
    locationId?: SortOrder
  }

  export type EnumCompetitionTypeFilter = {
    equals?: CompetitionType
    in?: Enumerable<CompetitionType>
    notIn?: Enumerable<CompetitionType>
    not?: NestedEnumCompetitionTypeFilter | CompetitionType
  }

  export type SeasonRelationFilter = {
    is?: SeasonWhereInput
    isNot?: SeasonWhereInput
  }

  export type CompetitionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sponsor?: SortOrder
    type?: SortOrder
    seasonId?: SortOrder
  }

  export type CompetitionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sponsor?: SortOrder
    type?: SortOrder
    seasonId?: SortOrder
  }

  export type CompetitionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sponsor?: SortOrder
    type?: SortOrder
    seasonId?: SortOrder
  }

  export type EnumCompetitionTypeWithAggregatesFilter = {
    equals?: CompetitionType
    in?: Enumerable<CompetitionType>
    notIn?: Enumerable<CompetitionType>
    not?: NestedEnumCompetitionTypeWithAggregatesFilter | CompetitionType
    _count?: NestedIntFilter
    _min?: NestedEnumCompetitionTypeFilter
    _max?: NestedEnumCompetitionTypeFilter
  }

  export type SeasonCountOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type SeasonMaxOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type SeasonMinOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type PlayerRelationFilter = {
    is?: PlayerWhereInput | null
    isNot?: PlayerWhereInput | null
  }

  export type HeathRecordCountOrderByAggregateInput = {
    id?: SortOrder
    cardNumber?: SortOrder
    issueDate?: SortOrder
    expiryDate?: SortOrder
  }

  export type HeathRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    cardNumber?: SortOrder
    issueDate?: SortOrder
    expiryDate?: SortOrder
  }

  export type HeathRecordMinOrderByAggregateInput = {
    id?: SortOrder
    cardNumber?: SortOrder
    issueDate?: SortOrder
    expiryDate?: SortOrder
  }

  export type CompetitionRelationFilter = {
    is?: CompetitionWhereInput
    isNot?: CompetitionWhereInput
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    attendance?: SortOrder
    locationId?: SortOrder
    competitionId?: SortOrder
  }

  export type GameAvgOrderByAggregateInput = {
    attendance?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    attendance?: SortOrder
    locationId?: SortOrder
    competitionId?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    attendance?: SortOrder
    locationId?: SortOrder
    competitionId?: SortOrder
  }

  export type GameSumOrderByAggregateInput = {
    attendance?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type EnumEventFilter = {
    equals?: Event
    in?: Enumerable<Event>
    notIn?: Enumerable<Event>
    not?: NestedEnumEventFilter | Event
  }

  export type GameEventCountOrderByAggregateInput = {
    id?: SortOrder
    minute?: SortOrder
    gameId?: SortOrder
    playerId?: SortOrder
    type?: SortOrder
  }

  export type GameEventAvgOrderByAggregateInput = {
    minute?: SortOrder
  }

  export type GameEventMaxOrderByAggregateInput = {
    id?: SortOrder
    minute?: SortOrder
    gameId?: SortOrder
    playerId?: SortOrder
    type?: SortOrder
  }

  export type GameEventMinOrderByAggregateInput = {
    id?: SortOrder
    minute?: SortOrder
    gameId?: SortOrder
    playerId?: SortOrder
    type?: SortOrder
  }

  export type GameEventSumOrderByAggregateInput = {
    minute?: SortOrder
  }

  export type EnumEventWithAggregatesFilter = {
    equals?: Event
    in?: Enumerable<Event>
    notIn?: Enumerable<Event>
    not?: NestedEnumEventWithAggregatesFilter | Event
    _count?: NestedIntFilter
    _min?: NestedEnumEventFilter
    _max?: NestedEnumEventFilter
  }

  export type ScholarshipCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    institutionId?: SortOrder
    playerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScholarshipMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    institutionId?: SortOrder
    playerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScholarshipMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    institutionId?: SortOrder
    playerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type InterviewListRelationFilter = {
    every?: InterviewWhereInput
    some?: InterviewWhereInput
    none?: InterviewWhereInput
  }

  export type InterviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecruitmentCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    passed?: SortOrder
    resume?: SortOrder
    playerId?: SortOrder
    accountId?: SortOrder
  }

  export type RecruitmentMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    passed?: SortOrder
    resume?: SortOrder
    playerId?: SortOrder
    accountId?: SortOrder
  }

  export type RecruitmentMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    passed?: SortOrder
    resume?: SortOrder
    playerId?: SortOrder
    accountId?: SortOrder
  }

  export type EnumStageFilter = {
    equals?: Stage
    in?: Enumerable<Stage>
    notIn?: Enumerable<Stage>
    not?: NestedEnumStageFilter | Stage
  }

  export type RecruitmentRelationFilter = {
    is?: RecruitmentWhereInput
    isNot?: RecruitmentWhereInput
  }

  export type InterviewCountOrderByAggregateInput = {
    id?: SortOrder
    stage?: SortOrder
    passed?: SortOrder
    at?: SortOrder
    comment?: SortOrder
    recruitmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterviewMaxOrderByAggregateInput = {
    id?: SortOrder
    stage?: SortOrder
    passed?: SortOrder
    at?: SortOrder
    comment?: SortOrder
    recruitmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterviewMinOrderByAggregateInput = {
    id?: SortOrder
    stage?: SortOrder
    passed?: SortOrder
    at?: SortOrder
    comment?: SortOrder
    recruitmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStageWithAggregatesFilter = {
    equals?: Stage
    in?: Enumerable<Stage>
    notIn?: Enumerable<Stage>
    not?: NestedEnumStageWithAggregatesFilter | Stage
    _count?: NestedIntFilter
    _min?: NestedEnumStageFilter
    _max?: NestedEnumStageFilter
  }

  export type OperationListRelationFilter = {
    every?: OperationWhereInput
    some?: OperationWhereInput
    none?: OperationWhereInput
  }

  export type OperationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InjuryCountOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InjuryMaxOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InjuryMinOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InjuryRelationFilter = {
    is?: InjuryWhereInput
    isNot?: InjuryWhereInput
  }

  export type OperationCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    date?: SortOrder
    injuryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OperationMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    date?: SortOrder
    injuryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OperationMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    date?: SortOrder
    injuryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeathRecordCreateNestedOneWithoutPlayerInput = {
    create?: XOR<HeathRecordCreateWithoutPlayerInput, HeathRecordUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: HeathRecordCreateOrConnectWithoutPlayerInput
    connect?: HeathRecordWhereUniqueInput
  }

  export type ScholarshipCreateNestedManyWithoutPlayerInput = {
    create?: XOR<Enumerable<ScholarshipCreateWithoutPlayerInput>, Enumerable<ScholarshipUncheckedCreateWithoutPlayerInput>>
    connectOrCreate?: Enumerable<ScholarshipCreateOrConnectWithoutPlayerInput>
    createMany?: ScholarshipCreateManyPlayerInputEnvelope
    connect?: Enumerable<ScholarshipWhereUniqueInput>
  }

  export type RecruitmentCreateNestedManyWithoutPlayerInput = {
    create?: XOR<Enumerable<RecruitmentCreateWithoutPlayerInput>, Enumerable<RecruitmentUncheckedCreateWithoutPlayerInput>>
    connectOrCreate?: Enumerable<RecruitmentCreateOrConnectWithoutPlayerInput>
    createMany?: RecruitmentCreateManyPlayerInputEnvelope
    connect?: Enumerable<RecruitmentWhereUniqueInput>
  }

  export type GameEventCreateNestedManyWithoutPlayerInput = {
    create?: XOR<Enumerable<GameEventCreateWithoutPlayerInput>, Enumerable<GameEventUncheckedCreateWithoutPlayerInput>>
    connectOrCreate?: Enumerable<GameEventCreateOrConnectWithoutPlayerInput>
    createMany?: GameEventCreateManyPlayerInputEnvelope
    connect?: Enumerable<GameEventWhereUniqueInput>
  }

  export type InjuryCreateNestedManyWithoutPlayerInput = {
    create?: XOR<Enumerable<InjuryCreateWithoutPlayerInput>, Enumerable<InjuryUncheckedCreateWithoutPlayerInput>>
    connectOrCreate?: Enumerable<InjuryCreateOrConnectWithoutPlayerInput>
    createMany?: InjuryCreateManyPlayerInputEnvelope
    connect?: Enumerable<InjuryWhereUniqueInput>
  }

  export type SquadCreateNestedManyWithoutPlayersInput = {
    create?: XOR<Enumerable<SquadCreateWithoutPlayersInput>, Enumerable<SquadUncheckedCreateWithoutPlayersInput>>
    connectOrCreate?: Enumerable<SquadCreateOrConnectWithoutPlayersInput>
    connect?: Enumerable<SquadWhereUniqueInput>
  }

  export type TeamCreateNestedManyWithoutStartersInput = {
    create?: XOR<Enumerable<TeamCreateWithoutStartersInput>, Enumerable<TeamUncheckedCreateWithoutStartersInput>>
    connectOrCreate?: Enumerable<TeamCreateOrConnectWithoutStartersInput>
    connect?: Enumerable<TeamWhereUniqueInput>
  }

  export type ScholarshipUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<Enumerable<ScholarshipCreateWithoutPlayerInput>, Enumerable<ScholarshipUncheckedCreateWithoutPlayerInput>>
    connectOrCreate?: Enumerable<ScholarshipCreateOrConnectWithoutPlayerInput>
    createMany?: ScholarshipCreateManyPlayerInputEnvelope
    connect?: Enumerable<ScholarshipWhereUniqueInput>
  }

  export type RecruitmentUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<Enumerable<RecruitmentCreateWithoutPlayerInput>, Enumerable<RecruitmentUncheckedCreateWithoutPlayerInput>>
    connectOrCreate?: Enumerable<RecruitmentCreateOrConnectWithoutPlayerInput>
    createMany?: RecruitmentCreateManyPlayerInputEnvelope
    connect?: Enumerable<RecruitmentWhereUniqueInput>
  }

  export type GameEventUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<Enumerable<GameEventCreateWithoutPlayerInput>, Enumerable<GameEventUncheckedCreateWithoutPlayerInput>>
    connectOrCreate?: Enumerable<GameEventCreateOrConnectWithoutPlayerInput>
    createMany?: GameEventCreateManyPlayerInputEnvelope
    connect?: Enumerable<GameEventWhereUniqueInput>
  }

  export type InjuryUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<Enumerable<InjuryCreateWithoutPlayerInput>, Enumerable<InjuryUncheckedCreateWithoutPlayerInput>>
    connectOrCreate?: Enumerable<InjuryCreateOrConnectWithoutPlayerInput>
    createMany?: InjuryCreateManyPlayerInputEnvelope
    connect?: Enumerable<InjuryWhereUniqueInput>
  }

  export type SquadUncheckedCreateNestedManyWithoutPlayersInput = {
    create?: XOR<Enumerable<SquadCreateWithoutPlayersInput>, Enumerable<SquadUncheckedCreateWithoutPlayersInput>>
    connectOrCreate?: Enumerable<SquadCreateOrConnectWithoutPlayersInput>
    connect?: Enumerable<SquadWhereUniqueInput>
  }

  export type TeamUncheckedCreateNestedManyWithoutStartersInput = {
    create?: XOR<Enumerable<TeamCreateWithoutStartersInput>, Enumerable<TeamUncheckedCreateWithoutStartersInput>>
    connectOrCreate?: Enumerable<TeamCreateOrConnectWithoutStartersInput>
    connect?: Enumerable<TeamWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumPostionFieldUpdateOperationsInput = {
    set?: Postion
  }

  export type HeathRecordUpdateOneWithoutPlayerNestedInput = {
    create?: XOR<HeathRecordCreateWithoutPlayerInput, HeathRecordUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: HeathRecordCreateOrConnectWithoutPlayerInput
    upsert?: HeathRecordUpsertWithoutPlayerInput
    disconnect?: boolean
    delete?: boolean
    connect?: HeathRecordWhereUniqueInput
    update?: XOR<HeathRecordUpdateWithoutPlayerInput, HeathRecordUncheckedUpdateWithoutPlayerInput>
  }

  export type ScholarshipUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<Enumerable<ScholarshipCreateWithoutPlayerInput>, Enumerable<ScholarshipUncheckedCreateWithoutPlayerInput>>
    connectOrCreate?: Enumerable<ScholarshipCreateOrConnectWithoutPlayerInput>
    upsert?: Enumerable<ScholarshipUpsertWithWhereUniqueWithoutPlayerInput>
    createMany?: ScholarshipCreateManyPlayerInputEnvelope
    set?: Enumerable<ScholarshipWhereUniqueInput>
    disconnect?: Enumerable<ScholarshipWhereUniqueInput>
    delete?: Enumerable<ScholarshipWhereUniqueInput>
    connect?: Enumerable<ScholarshipWhereUniqueInput>
    update?: Enumerable<ScholarshipUpdateWithWhereUniqueWithoutPlayerInput>
    updateMany?: Enumerable<ScholarshipUpdateManyWithWhereWithoutPlayerInput>
    deleteMany?: Enumerable<ScholarshipScalarWhereInput>
  }

  export type RecruitmentUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<Enumerable<RecruitmentCreateWithoutPlayerInput>, Enumerable<RecruitmentUncheckedCreateWithoutPlayerInput>>
    connectOrCreate?: Enumerable<RecruitmentCreateOrConnectWithoutPlayerInput>
    upsert?: Enumerable<RecruitmentUpsertWithWhereUniqueWithoutPlayerInput>
    createMany?: RecruitmentCreateManyPlayerInputEnvelope
    set?: Enumerable<RecruitmentWhereUniqueInput>
    disconnect?: Enumerable<RecruitmentWhereUniqueInput>
    delete?: Enumerable<RecruitmentWhereUniqueInput>
    connect?: Enumerable<RecruitmentWhereUniqueInput>
    update?: Enumerable<RecruitmentUpdateWithWhereUniqueWithoutPlayerInput>
    updateMany?: Enumerable<RecruitmentUpdateManyWithWhereWithoutPlayerInput>
    deleteMany?: Enumerable<RecruitmentScalarWhereInput>
  }

  export type GameEventUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<Enumerable<GameEventCreateWithoutPlayerInput>, Enumerable<GameEventUncheckedCreateWithoutPlayerInput>>
    connectOrCreate?: Enumerable<GameEventCreateOrConnectWithoutPlayerInput>
    upsert?: Enumerable<GameEventUpsertWithWhereUniqueWithoutPlayerInput>
    createMany?: GameEventCreateManyPlayerInputEnvelope
    set?: Enumerable<GameEventWhereUniqueInput>
    disconnect?: Enumerable<GameEventWhereUniqueInput>
    delete?: Enumerable<GameEventWhereUniqueInput>
    connect?: Enumerable<GameEventWhereUniqueInput>
    update?: Enumerable<GameEventUpdateWithWhereUniqueWithoutPlayerInput>
    updateMany?: Enumerable<GameEventUpdateManyWithWhereWithoutPlayerInput>
    deleteMany?: Enumerable<GameEventScalarWhereInput>
  }

  export type InjuryUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<Enumerable<InjuryCreateWithoutPlayerInput>, Enumerable<InjuryUncheckedCreateWithoutPlayerInput>>
    connectOrCreate?: Enumerable<InjuryCreateOrConnectWithoutPlayerInput>
    upsert?: Enumerable<InjuryUpsertWithWhereUniqueWithoutPlayerInput>
    createMany?: InjuryCreateManyPlayerInputEnvelope
    set?: Enumerable<InjuryWhereUniqueInput>
    disconnect?: Enumerable<InjuryWhereUniqueInput>
    delete?: Enumerable<InjuryWhereUniqueInput>
    connect?: Enumerable<InjuryWhereUniqueInput>
    update?: Enumerable<InjuryUpdateWithWhereUniqueWithoutPlayerInput>
    updateMany?: Enumerable<InjuryUpdateManyWithWhereWithoutPlayerInput>
    deleteMany?: Enumerable<InjuryScalarWhereInput>
  }

  export type SquadUpdateManyWithoutPlayersNestedInput = {
    create?: XOR<Enumerable<SquadCreateWithoutPlayersInput>, Enumerable<SquadUncheckedCreateWithoutPlayersInput>>
    connectOrCreate?: Enumerable<SquadCreateOrConnectWithoutPlayersInput>
    upsert?: Enumerable<SquadUpsertWithWhereUniqueWithoutPlayersInput>
    set?: Enumerable<SquadWhereUniqueInput>
    disconnect?: Enumerable<SquadWhereUniqueInput>
    delete?: Enumerable<SquadWhereUniqueInput>
    connect?: Enumerable<SquadWhereUniqueInput>
    update?: Enumerable<SquadUpdateWithWhereUniqueWithoutPlayersInput>
    updateMany?: Enumerable<SquadUpdateManyWithWhereWithoutPlayersInput>
    deleteMany?: Enumerable<SquadScalarWhereInput>
  }

  export type TeamUpdateManyWithoutStartersNestedInput = {
    create?: XOR<Enumerable<TeamCreateWithoutStartersInput>, Enumerable<TeamUncheckedCreateWithoutStartersInput>>
    connectOrCreate?: Enumerable<TeamCreateOrConnectWithoutStartersInput>
    upsert?: Enumerable<TeamUpsertWithWhereUniqueWithoutStartersInput>
    set?: Enumerable<TeamWhereUniqueInput>
    disconnect?: Enumerable<TeamWhereUniqueInput>
    delete?: Enumerable<TeamWhereUniqueInput>
    connect?: Enumerable<TeamWhereUniqueInput>
    update?: Enumerable<TeamUpdateWithWhereUniqueWithoutStartersInput>
    updateMany?: Enumerable<TeamUpdateManyWithWhereWithoutStartersInput>
    deleteMany?: Enumerable<TeamScalarWhereInput>
  }

  export type ScholarshipUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<Enumerable<ScholarshipCreateWithoutPlayerInput>, Enumerable<ScholarshipUncheckedCreateWithoutPlayerInput>>
    connectOrCreate?: Enumerable<ScholarshipCreateOrConnectWithoutPlayerInput>
    upsert?: Enumerable<ScholarshipUpsertWithWhereUniqueWithoutPlayerInput>
    createMany?: ScholarshipCreateManyPlayerInputEnvelope
    set?: Enumerable<ScholarshipWhereUniqueInput>
    disconnect?: Enumerable<ScholarshipWhereUniqueInput>
    delete?: Enumerable<ScholarshipWhereUniqueInput>
    connect?: Enumerable<ScholarshipWhereUniqueInput>
    update?: Enumerable<ScholarshipUpdateWithWhereUniqueWithoutPlayerInput>
    updateMany?: Enumerable<ScholarshipUpdateManyWithWhereWithoutPlayerInput>
    deleteMany?: Enumerable<ScholarshipScalarWhereInput>
  }

  export type RecruitmentUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<Enumerable<RecruitmentCreateWithoutPlayerInput>, Enumerable<RecruitmentUncheckedCreateWithoutPlayerInput>>
    connectOrCreate?: Enumerable<RecruitmentCreateOrConnectWithoutPlayerInput>
    upsert?: Enumerable<RecruitmentUpsertWithWhereUniqueWithoutPlayerInput>
    createMany?: RecruitmentCreateManyPlayerInputEnvelope
    set?: Enumerable<RecruitmentWhereUniqueInput>
    disconnect?: Enumerable<RecruitmentWhereUniqueInput>
    delete?: Enumerable<RecruitmentWhereUniqueInput>
    connect?: Enumerable<RecruitmentWhereUniqueInput>
    update?: Enumerable<RecruitmentUpdateWithWhereUniqueWithoutPlayerInput>
    updateMany?: Enumerable<RecruitmentUpdateManyWithWhereWithoutPlayerInput>
    deleteMany?: Enumerable<RecruitmentScalarWhereInput>
  }

  export type GameEventUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<Enumerable<GameEventCreateWithoutPlayerInput>, Enumerable<GameEventUncheckedCreateWithoutPlayerInput>>
    connectOrCreate?: Enumerable<GameEventCreateOrConnectWithoutPlayerInput>
    upsert?: Enumerable<GameEventUpsertWithWhereUniqueWithoutPlayerInput>
    createMany?: GameEventCreateManyPlayerInputEnvelope
    set?: Enumerable<GameEventWhereUniqueInput>
    disconnect?: Enumerable<GameEventWhereUniqueInput>
    delete?: Enumerable<GameEventWhereUniqueInput>
    connect?: Enumerable<GameEventWhereUniqueInput>
    update?: Enumerable<GameEventUpdateWithWhereUniqueWithoutPlayerInput>
    updateMany?: Enumerable<GameEventUpdateManyWithWhereWithoutPlayerInput>
    deleteMany?: Enumerable<GameEventScalarWhereInput>
  }

  export type InjuryUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<Enumerable<InjuryCreateWithoutPlayerInput>, Enumerable<InjuryUncheckedCreateWithoutPlayerInput>>
    connectOrCreate?: Enumerable<InjuryCreateOrConnectWithoutPlayerInput>
    upsert?: Enumerable<InjuryUpsertWithWhereUniqueWithoutPlayerInput>
    createMany?: InjuryCreateManyPlayerInputEnvelope
    set?: Enumerable<InjuryWhereUniqueInput>
    disconnect?: Enumerable<InjuryWhereUniqueInput>
    delete?: Enumerable<InjuryWhereUniqueInput>
    connect?: Enumerable<InjuryWhereUniqueInput>
    update?: Enumerable<InjuryUpdateWithWhereUniqueWithoutPlayerInput>
    updateMany?: Enumerable<InjuryUpdateManyWithWhereWithoutPlayerInput>
    deleteMany?: Enumerable<InjuryScalarWhereInput>
  }

  export type SquadUncheckedUpdateManyWithoutPlayersNestedInput = {
    create?: XOR<Enumerable<SquadCreateWithoutPlayersInput>, Enumerable<SquadUncheckedCreateWithoutPlayersInput>>
    connectOrCreate?: Enumerable<SquadCreateOrConnectWithoutPlayersInput>
    upsert?: Enumerable<SquadUpsertWithWhereUniqueWithoutPlayersInput>
    set?: Enumerable<SquadWhereUniqueInput>
    disconnect?: Enumerable<SquadWhereUniqueInput>
    delete?: Enumerable<SquadWhereUniqueInput>
    connect?: Enumerable<SquadWhereUniqueInput>
    update?: Enumerable<SquadUpdateWithWhereUniqueWithoutPlayersInput>
    updateMany?: Enumerable<SquadUpdateManyWithWhereWithoutPlayersInput>
    deleteMany?: Enumerable<SquadScalarWhereInput>
  }

  export type TeamUncheckedUpdateManyWithoutStartersNestedInput = {
    create?: XOR<Enumerable<TeamCreateWithoutStartersInput>, Enumerable<TeamUncheckedCreateWithoutStartersInput>>
    connectOrCreate?: Enumerable<TeamCreateOrConnectWithoutStartersInput>
    upsert?: Enumerable<TeamUpsertWithWhereUniqueWithoutStartersInput>
    set?: Enumerable<TeamWhereUniqueInput>
    disconnect?: Enumerable<TeamWhereUniqueInput>
    delete?: Enumerable<TeamWhereUniqueInput>
    connect?: Enumerable<TeamWhereUniqueInput>
    update?: Enumerable<TeamUpdateWithWhereUniqueWithoutStartersInput>
    updateMany?: Enumerable<TeamUpdateManyWithWhereWithoutStartersInput>
    deleteMany?: Enumerable<TeamScalarWhereInput>
  }

  export type PlayerCreateNestedManyWithoutTeamInput = {
    create?: XOR<Enumerable<PlayerCreateWithoutTeamInput>, Enumerable<PlayerUncheckedCreateWithoutTeamInput>>
    connectOrCreate?: Enumerable<PlayerCreateOrConnectWithoutTeamInput>
    connect?: Enumerable<PlayerWhereUniqueInput>
  }

  export type SquadCreateNestedOneWithoutTeamInput = {
    create?: XOR<SquadCreateWithoutTeamInput, SquadUncheckedCreateWithoutTeamInput>
    connectOrCreate?: SquadCreateOrConnectWithoutTeamInput
    connect?: SquadWhereUniqueInput
  }

  export type GameCreateNestedOneWithoutTeamInput = {
    create?: XOR<GameCreateWithoutTeamInput, GameUncheckedCreateWithoutTeamInput>
    connectOrCreate?: GameCreateOrConnectWithoutTeamInput
    connect?: GameWhereUniqueInput
  }

  export type PlayerUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<Enumerable<PlayerCreateWithoutTeamInput>, Enumerable<PlayerUncheckedCreateWithoutTeamInput>>
    connectOrCreate?: Enumerable<PlayerCreateOrConnectWithoutTeamInput>
    connect?: Enumerable<PlayerWhereUniqueInput>
  }

  export type PlayerUpdateManyWithoutTeamNestedInput = {
    create?: XOR<Enumerable<PlayerCreateWithoutTeamInput>, Enumerable<PlayerUncheckedCreateWithoutTeamInput>>
    connectOrCreate?: Enumerable<PlayerCreateOrConnectWithoutTeamInput>
    upsert?: Enumerable<PlayerUpsertWithWhereUniqueWithoutTeamInput>
    set?: Enumerable<PlayerWhereUniqueInput>
    disconnect?: Enumerable<PlayerWhereUniqueInput>
    delete?: Enumerable<PlayerWhereUniqueInput>
    connect?: Enumerable<PlayerWhereUniqueInput>
    update?: Enumerable<PlayerUpdateWithWhereUniqueWithoutTeamInput>
    updateMany?: Enumerable<PlayerUpdateManyWithWhereWithoutTeamInput>
    deleteMany?: Enumerable<PlayerScalarWhereInput>
  }

  export type EnumFormationFieldUpdateOperationsInput = {
    set?: Formation
  }

  export type SquadUpdateOneRequiredWithoutTeamNestedInput = {
    create?: XOR<SquadCreateWithoutTeamInput, SquadUncheckedCreateWithoutTeamInput>
    connectOrCreate?: SquadCreateOrConnectWithoutTeamInput
    upsert?: SquadUpsertWithoutTeamInput
    connect?: SquadWhereUniqueInput
    update?: XOR<SquadUpdateWithoutTeamInput, SquadUncheckedUpdateWithoutTeamInput>
  }

  export type GameUpdateOneWithoutTeamNestedInput = {
    create?: XOR<GameCreateWithoutTeamInput, GameUncheckedCreateWithoutTeamInput>
    connectOrCreate?: GameCreateOrConnectWithoutTeamInput
    upsert?: GameUpsertWithoutTeamInput
    disconnect?: boolean
    delete?: boolean
    connect?: GameWhereUniqueInput
    update?: XOR<GameUpdateWithoutTeamInput, GameUncheckedUpdateWithoutTeamInput>
  }

  export type PlayerUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<Enumerable<PlayerCreateWithoutTeamInput>, Enumerable<PlayerUncheckedCreateWithoutTeamInput>>
    connectOrCreate?: Enumerable<PlayerCreateOrConnectWithoutTeamInput>
    upsert?: Enumerable<PlayerUpsertWithWhereUniqueWithoutTeamInput>
    set?: Enumerable<PlayerWhereUniqueInput>
    disconnect?: Enumerable<PlayerWhereUniqueInput>
    delete?: Enumerable<PlayerWhereUniqueInput>
    connect?: Enumerable<PlayerWhereUniqueInput>
    update?: Enumerable<PlayerUpdateWithWhereUniqueWithoutTeamInput>
    updateMany?: Enumerable<PlayerUpdateManyWithWhereWithoutTeamInput>
    deleteMany?: Enumerable<PlayerScalarWhereInput>
  }

  export type AccountCreateNestedOneWithoutStaffInput = {
    create?: XOR<AccountCreateWithoutStaffInput, AccountUncheckedCreateWithoutStaffInput>
    connectOrCreate?: AccountCreateOrConnectWithoutStaffInput
    connect?: AccountWhereUniqueInput
  }

  export type SquadCreateNestedManyWithoutStaffInput = {
    create?: XOR<Enumerable<SquadCreateWithoutStaffInput>, Enumerable<SquadUncheckedCreateWithoutStaffInput>>
    connectOrCreate?: Enumerable<SquadCreateOrConnectWithoutStaffInput>
    connect?: Enumerable<SquadWhereUniqueInput>
  }

  export type SquadUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<Enumerable<SquadCreateWithoutStaffInput>, Enumerable<SquadUncheckedCreateWithoutStaffInput>>
    connectOrCreate?: Enumerable<SquadCreateOrConnectWithoutStaffInput>
    connect?: Enumerable<SquadWhereUniqueInput>
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: Role
  }

  export type AccountUpdateOneWithoutStaffNestedInput = {
    create?: XOR<AccountCreateWithoutStaffInput, AccountUncheckedCreateWithoutStaffInput>
    connectOrCreate?: AccountCreateOrConnectWithoutStaffInput
    upsert?: AccountUpsertWithoutStaffInput
    disconnect?: boolean
    delete?: boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<AccountUpdateWithoutStaffInput, AccountUncheckedUpdateWithoutStaffInput>
  }

  export type SquadUpdateManyWithoutStaffNestedInput = {
    create?: XOR<Enumerable<SquadCreateWithoutStaffInput>, Enumerable<SquadUncheckedCreateWithoutStaffInput>>
    connectOrCreate?: Enumerable<SquadCreateOrConnectWithoutStaffInput>
    upsert?: Enumerable<SquadUpsertWithWhereUniqueWithoutStaffInput>
    set?: Enumerable<SquadWhereUniqueInput>
    disconnect?: Enumerable<SquadWhereUniqueInput>
    delete?: Enumerable<SquadWhereUniqueInput>
    connect?: Enumerable<SquadWhereUniqueInput>
    update?: Enumerable<SquadUpdateWithWhereUniqueWithoutStaffInput>
    updateMany?: Enumerable<SquadUpdateManyWithWhereWithoutStaffInput>
    deleteMany?: Enumerable<SquadScalarWhereInput>
  }

  export type SquadUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<Enumerable<SquadCreateWithoutStaffInput>, Enumerable<SquadUncheckedCreateWithoutStaffInput>>
    connectOrCreate?: Enumerable<SquadCreateOrConnectWithoutStaffInput>
    upsert?: Enumerable<SquadUpsertWithWhereUniqueWithoutStaffInput>
    set?: Enumerable<SquadWhereUniqueInput>
    disconnect?: Enumerable<SquadWhereUniqueInput>
    delete?: Enumerable<SquadWhereUniqueInput>
    connect?: Enumerable<SquadWhereUniqueInput>
    update?: Enumerable<SquadUpdateWithWhereUniqueWithoutStaffInput>
    updateMany?: Enumerable<SquadUpdateManyWithWhereWithoutStaffInput>
    deleteMany?: Enumerable<SquadScalarWhereInput>
  }

  export type ScholarshipCreateNestedManyWithoutSponsorInput = {
    create?: XOR<Enumerable<ScholarshipCreateWithoutSponsorInput>, Enumerable<ScholarshipUncheckedCreateWithoutSponsorInput>>
    connectOrCreate?: Enumerable<ScholarshipCreateOrConnectWithoutSponsorInput>
    createMany?: ScholarshipCreateManySponsorInputEnvelope
    connect?: Enumerable<ScholarshipWhereUniqueInput>
  }

  export type SquadCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<Enumerable<SquadCreateWithoutInstitutionInput>, Enumerable<SquadUncheckedCreateWithoutInstitutionInput>>
    connectOrCreate?: Enumerable<SquadCreateOrConnectWithoutInstitutionInput>
    createMany?: SquadCreateManyInstitutionInputEnvelope
    connect?: Enumerable<SquadWhereUniqueInput>
  }

  export type ScholarshipUncheckedCreateNestedManyWithoutSponsorInput = {
    create?: XOR<Enumerable<ScholarshipCreateWithoutSponsorInput>, Enumerable<ScholarshipUncheckedCreateWithoutSponsorInput>>
    connectOrCreate?: Enumerable<ScholarshipCreateOrConnectWithoutSponsorInput>
    createMany?: ScholarshipCreateManySponsorInputEnvelope
    connect?: Enumerable<ScholarshipWhereUniqueInput>
  }

  export type SquadUncheckedCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<Enumerable<SquadCreateWithoutInstitutionInput>, Enumerable<SquadUncheckedCreateWithoutInstitutionInput>>
    connectOrCreate?: Enumerable<SquadCreateOrConnectWithoutInstitutionInput>
    createMany?: SquadCreateManyInstitutionInputEnvelope
    connect?: Enumerable<SquadWhereUniqueInput>
  }

  export type EnumInstitutionCategoryFieldUpdateOperationsInput = {
    set?: InstitutionCategory
  }

  export type ScholarshipUpdateManyWithoutSponsorNestedInput = {
    create?: XOR<Enumerable<ScholarshipCreateWithoutSponsorInput>, Enumerable<ScholarshipUncheckedCreateWithoutSponsorInput>>
    connectOrCreate?: Enumerable<ScholarshipCreateOrConnectWithoutSponsorInput>
    upsert?: Enumerable<ScholarshipUpsertWithWhereUniqueWithoutSponsorInput>
    createMany?: ScholarshipCreateManySponsorInputEnvelope
    set?: Enumerable<ScholarshipWhereUniqueInput>
    disconnect?: Enumerable<ScholarshipWhereUniqueInput>
    delete?: Enumerable<ScholarshipWhereUniqueInput>
    connect?: Enumerable<ScholarshipWhereUniqueInput>
    update?: Enumerable<ScholarshipUpdateWithWhereUniqueWithoutSponsorInput>
    updateMany?: Enumerable<ScholarshipUpdateManyWithWhereWithoutSponsorInput>
    deleteMany?: Enumerable<ScholarshipScalarWhereInput>
  }

  export type SquadUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<Enumerable<SquadCreateWithoutInstitutionInput>, Enumerable<SquadUncheckedCreateWithoutInstitutionInput>>
    connectOrCreate?: Enumerable<SquadCreateOrConnectWithoutInstitutionInput>
    upsert?: Enumerable<SquadUpsertWithWhereUniqueWithoutInstitutionInput>
    createMany?: SquadCreateManyInstitutionInputEnvelope
    set?: Enumerable<SquadWhereUniqueInput>
    disconnect?: Enumerable<SquadWhereUniqueInput>
    delete?: Enumerable<SquadWhereUniqueInput>
    connect?: Enumerable<SquadWhereUniqueInput>
    update?: Enumerable<SquadUpdateWithWhereUniqueWithoutInstitutionInput>
    updateMany?: Enumerable<SquadUpdateManyWithWhereWithoutInstitutionInput>
    deleteMany?: Enumerable<SquadScalarWhereInput>
  }

  export type ScholarshipUncheckedUpdateManyWithoutSponsorNestedInput = {
    create?: XOR<Enumerable<ScholarshipCreateWithoutSponsorInput>, Enumerable<ScholarshipUncheckedCreateWithoutSponsorInput>>
    connectOrCreate?: Enumerable<ScholarshipCreateOrConnectWithoutSponsorInput>
    upsert?: Enumerable<ScholarshipUpsertWithWhereUniqueWithoutSponsorInput>
    createMany?: ScholarshipCreateManySponsorInputEnvelope
    set?: Enumerable<ScholarshipWhereUniqueInput>
    disconnect?: Enumerable<ScholarshipWhereUniqueInput>
    delete?: Enumerable<ScholarshipWhereUniqueInput>
    connect?: Enumerable<ScholarshipWhereUniqueInput>
    update?: Enumerable<ScholarshipUpdateWithWhereUniqueWithoutSponsorInput>
    updateMany?: Enumerable<ScholarshipUpdateManyWithWhereWithoutSponsorInput>
    deleteMany?: Enumerable<ScholarshipScalarWhereInput>
  }

  export type SquadUncheckedUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<Enumerable<SquadCreateWithoutInstitutionInput>, Enumerable<SquadUncheckedCreateWithoutInstitutionInput>>
    connectOrCreate?: Enumerable<SquadCreateOrConnectWithoutInstitutionInput>
    upsert?: Enumerable<SquadUpsertWithWhereUniqueWithoutInstitutionInput>
    createMany?: SquadCreateManyInstitutionInputEnvelope
    set?: Enumerable<SquadWhereUniqueInput>
    disconnect?: Enumerable<SquadWhereUniqueInput>
    delete?: Enumerable<SquadWhereUniqueInput>
    connect?: Enumerable<SquadWhereUniqueInput>
    update?: Enumerable<SquadUpdateWithWhereUniqueWithoutInstitutionInput>
    updateMany?: Enumerable<SquadUpdateManyWithWhereWithoutInstitutionInput>
    deleteMany?: Enumerable<SquadScalarWhereInput>
  }

  export type GameCreateNestedManyWithoutLocationInput = {
    create?: XOR<Enumerable<GameCreateWithoutLocationInput>, Enumerable<GameUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<GameCreateOrConnectWithoutLocationInput>
    createMany?: GameCreateManyLocationInputEnvelope
    connect?: Enumerable<GameWhereUniqueInput>
  }

  export type SquadCreateNestedManyWithoutHomeInput = {
    create?: XOR<Enumerable<SquadCreateWithoutHomeInput>, Enumerable<SquadUncheckedCreateWithoutHomeInput>>
    connectOrCreate?: Enumerable<SquadCreateOrConnectWithoutHomeInput>
    createMany?: SquadCreateManyHomeInputEnvelope
    connect?: Enumerable<SquadWhereUniqueInput>
  }

  export type GameUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<Enumerable<GameCreateWithoutLocationInput>, Enumerable<GameUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<GameCreateOrConnectWithoutLocationInput>
    createMany?: GameCreateManyLocationInputEnvelope
    connect?: Enumerable<GameWhereUniqueInput>
  }

  export type SquadUncheckedCreateNestedManyWithoutHomeInput = {
    create?: XOR<Enumerable<SquadCreateWithoutHomeInput>, Enumerable<SquadUncheckedCreateWithoutHomeInput>>
    connectOrCreate?: Enumerable<SquadCreateOrConnectWithoutHomeInput>
    createMany?: SquadCreateManyHomeInputEnvelope
    connect?: Enumerable<SquadWhereUniqueInput>
  }

  export type EnumLocationCategoryFieldUpdateOperationsInput = {
    set?: LocationCategory
  }

  export type GameUpdateManyWithoutLocationNestedInput = {
    create?: XOR<Enumerable<GameCreateWithoutLocationInput>, Enumerable<GameUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<GameCreateOrConnectWithoutLocationInput>
    upsert?: Enumerable<GameUpsertWithWhereUniqueWithoutLocationInput>
    createMany?: GameCreateManyLocationInputEnvelope
    set?: Enumerable<GameWhereUniqueInput>
    disconnect?: Enumerable<GameWhereUniqueInput>
    delete?: Enumerable<GameWhereUniqueInput>
    connect?: Enumerable<GameWhereUniqueInput>
    update?: Enumerable<GameUpdateWithWhereUniqueWithoutLocationInput>
    updateMany?: Enumerable<GameUpdateManyWithWhereWithoutLocationInput>
    deleteMany?: Enumerable<GameScalarWhereInput>
  }

  export type SquadUpdateManyWithoutHomeNestedInput = {
    create?: XOR<Enumerable<SquadCreateWithoutHomeInput>, Enumerable<SquadUncheckedCreateWithoutHomeInput>>
    connectOrCreate?: Enumerable<SquadCreateOrConnectWithoutHomeInput>
    upsert?: Enumerable<SquadUpsertWithWhereUniqueWithoutHomeInput>
    createMany?: SquadCreateManyHomeInputEnvelope
    set?: Enumerable<SquadWhereUniqueInput>
    disconnect?: Enumerable<SquadWhereUniqueInput>
    delete?: Enumerable<SquadWhereUniqueInput>
    connect?: Enumerable<SquadWhereUniqueInput>
    update?: Enumerable<SquadUpdateWithWhereUniqueWithoutHomeInput>
    updateMany?: Enumerable<SquadUpdateManyWithWhereWithoutHomeInput>
    deleteMany?: Enumerable<SquadScalarWhereInput>
  }

  export type GameUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<Enumerable<GameCreateWithoutLocationInput>, Enumerable<GameUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<GameCreateOrConnectWithoutLocationInput>
    upsert?: Enumerable<GameUpsertWithWhereUniqueWithoutLocationInput>
    createMany?: GameCreateManyLocationInputEnvelope
    set?: Enumerable<GameWhereUniqueInput>
    disconnect?: Enumerable<GameWhereUniqueInput>
    delete?: Enumerable<GameWhereUniqueInput>
    connect?: Enumerable<GameWhereUniqueInput>
    update?: Enumerable<GameUpdateWithWhereUniqueWithoutLocationInput>
    updateMany?: Enumerable<GameUpdateManyWithWhereWithoutLocationInput>
    deleteMany?: Enumerable<GameScalarWhereInput>
  }

  export type SquadUncheckedUpdateManyWithoutHomeNestedInput = {
    create?: XOR<Enumerable<SquadCreateWithoutHomeInput>, Enumerable<SquadUncheckedCreateWithoutHomeInput>>
    connectOrCreate?: Enumerable<SquadCreateOrConnectWithoutHomeInput>
    upsert?: Enumerable<SquadUpsertWithWhereUniqueWithoutHomeInput>
    createMany?: SquadCreateManyHomeInputEnvelope
    set?: Enumerable<SquadWhereUniqueInput>
    disconnect?: Enumerable<SquadWhereUniqueInput>
    delete?: Enumerable<SquadWhereUniqueInput>
    connect?: Enumerable<SquadWhereUniqueInput>
    update?: Enumerable<SquadUpdateWithWhereUniqueWithoutHomeInput>
    updateMany?: Enumerable<SquadUpdateManyWithWhereWithoutHomeInput>
    deleteMany?: Enumerable<SquadScalarWhereInput>
  }

  export type PlayerCreateNestedManyWithoutSquadInput = {
    create?: XOR<Enumerable<PlayerCreateWithoutSquadInput>, Enumerable<PlayerUncheckedCreateWithoutSquadInput>>
    connectOrCreate?: Enumerable<PlayerCreateOrConnectWithoutSquadInput>
    connect?: Enumerable<PlayerWhereUniqueInput>
  }

  export type InstitutionCreateNestedOneWithoutSquadInput = {
    create?: XOR<InstitutionCreateWithoutSquadInput, InstitutionUncheckedCreateWithoutSquadInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutSquadInput
    connect?: InstitutionWhereUniqueInput
  }

  export type StaffCreateNestedManyWithoutSquadInput = {
    create?: XOR<Enumerable<StaffCreateWithoutSquadInput>, Enumerable<StaffUncheckedCreateWithoutSquadInput>>
    connectOrCreate?: Enumerable<StaffCreateOrConnectWithoutSquadInput>
    connect?: Enumerable<StaffWhereUniqueInput>
  }

  export type CompetitionCreateNestedManyWithoutSquadInput = {
    create?: XOR<Enumerable<CompetitionCreateWithoutSquadInput>, Enumerable<CompetitionUncheckedCreateWithoutSquadInput>>
    connectOrCreate?: Enumerable<CompetitionCreateOrConnectWithoutSquadInput>
    connect?: Enumerable<CompetitionWhereUniqueInput>
  }

  export type LocationCreateNestedOneWithoutSquadInput = {
    create?: XOR<LocationCreateWithoutSquadInput, LocationUncheckedCreateWithoutSquadInput>
    connectOrCreate?: LocationCreateOrConnectWithoutSquadInput
    connect?: LocationWhereUniqueInput
  }

  export type TeamCreateNestedManyWithoutSquadInput = {
    create?: XOR<Enumerable<TeamCreateWithoutSquadInput>, Enumerable<TeamUncheckedCreateWithoutSquadInput>>
    connectOrCreate?: Enumerable<TeamCreateOrConnectWithoutSquadInput>
    createMany?: TeamCreateManySquadInputEnvelope
    connect?: Enumerable<TeamWhereUniqueInput>
  }

  export type PlayerUncheckedCreateNestedManyWithoutSquadInput = {
    create?: XOR<Enumerable<PlayerCreateWithoutSquadInput>, Enumerable<PlayerUncheckedCreateWithoutSquadInput>>
    connectOrCreate?: Enumerable<PlayerCreateOrConnectWithoutSquadInput>
    connect?: Enumerable<PlayerWhereUniqueInput>
  }

  export type StaffUncheckedCreateNestedManyWithoutSquadInput = {
    create?: XOR<Enumerable<StaffCreateWithoutSquadInput>, Enumerable<StaffUncheckedCreateWithoutSquadInput>>
    connectOrCreate?: Enumerable<StaffCreateOrConnectWithoutSquadInput>
    connect?: Enumerable<StaffWhereUniqueInput>
  }

  export type CompetitionUncheckedCreateNestedManyWithoutSquadInput = {
    create?: XOR<Enumerable<CompetitionCreateWithoutSquadInput>, Enumerable<CompetitionUncheckedCreateWithoutSquadInput>>
    connectOrCreate?: Enumerable<CompetitionCreateOrConnectWithoutSquadInput>
    connect?: Enumerable<CompetitionWhereUniqueInput>
  }

  export type TeamUncheckedCreateNestedManyWithoutSquadInput = {
    create?: XOR<Enumerable<TeamCreateWithoutSquadInput>, Enumerable<TeamUncheckedCreateWithoutSquadInput>>
    connectOrCreate?: Enumerable<TeamCreateOrConnectWithoutSquadInput>
    createMany?: TeamCreateManySquadInputEnvelope
    connect?: Enumerable<TeamWhereUniqueInput>
  }

  export type PlayerUpdateManyWithoutSquadNestedInput = {
    create?: XOR<Enumerable<PlayerCreateWithoutSquadInput>, Enumerable<PlayerUncheckedCreateWithoutSquadInput>>
    connectOrCreate?: Enumerable<PlayerCreateOrConnectWithoutSquadInput>
    upsert?: Enumerable<PlayerUpsertWithWhereUniqueWithoutSquadInput>
    set?: Enumerable<PlayerWhereUniqueInput>
    disconnect?: Enumerable<PlayerWhereUniqueInput>
    delete?: Enumerable<PlayerWhereUniqueInput>
    connect?: Enumerable<PlayerWhereUniqueInput>
    update?: Enumerable<PlayerUpdateWithWhereUniqueWithoutSquadInput>
    updateMany?: Enumerable<PlayerUpdateManyWithWhereWithoutSquadInput>
    deleteMany?: Enumerable<PlayerScalarWhereInput>
  }

  export type InstitutionUpdateOneRequiredWithoutSquadNestedInput = {
    create?: XOR<InstitutionCreateWithoutSquadInput, InstitutionUncheckedCreateWithoutSquadInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutSquadInput
    upsert?: InstitutionUpsertWithoutSquadInput
    connect?: InstitutionWhereUniqueInput
    update?: XOR<InstitutionUpdateWithoutSquadInput, InstitutionUncheckedUpdateWithoutSquadInput>
  }

  export type StaffUpdateManyWithoutSquadNestedInput = {
    create?: XOR<Enumerable<StaffCreateWithoutSquadInput>, Enumerable<StaffUncheckedCreateWithoutSquadInput>>
    connectOrCreate?: Enumerable<StaffCreateOrConnectWithoutSquadInput>
    upsert?: Enumerable<StaffUpsertWithWhereUniqueWithoutSquadInput>
    set?: Enumerable<StaffWhereUniqueInput>
    disconnect?: Enumerable<StaffWhereUniqueInput>
    delete?: Enumerable<StaffWhereUniqueInput>
    connect?: Enumerable<StaffWhereUniqueInput>
    update?: Enumerable<StaffUpdateWithWhereUniqueWithoutSquadInput>
    updateMany?: Enumerable<StaffUpdateManyWithWhereWithoutSquadInput>
    deleteMany?: Enumerable<StaffScalarWhereInput>
  }

  export type CompetitionUpdateManyWithoutSquadNestedInput = {
    create?: XOR<Enumerable<CompetitionCreateWithoutSquadInput>, Enumerable<CompetitionUncheckedCreateWithoutSquadInput>>
    connectOrCreate?: Enumerable<CompetitionCreateOrConnectWithoutSquadInput>
    upsert?: Enumerable<CompetitionUpsertWithWhereUniqueWithoutSquadInput>
    set?: Enumerable<CompetitionWhereUniqueInput>
    disconnect?: Enumerable<CompetitionWhereUniqueInput>
    delete?: Enumerable<CompetitionWhereUniqueInput>
    connect?: Enumerable<CompetitionWhereUniqueInput>
    update?: Enumerable<CompetitionUpdateWithWhereUniqueWithoutSquadInput>
    updateMany?: Enumerable<CompetitionUpdateManyWithWhereWithoutSquadInput>
    deleteMany?: Enumerable<CompetitionScalarWhereInput>
  }

  export type LocationUpdateOneWithoutSquadNestedInput = {
    create?: XOR<LocationCreateWithoutSquadInput, LocationUncheckedCreateWithoutSquadInput>
    connectOrCreate?: LocationCreateOrConnectWithoutSquadInput
    upsert?: LocationUpsertWithoutSquadInput
    disconnect?: boolean
    delete?: boolean
    connect?: LocationWhereUniqueInput
    update?: XOR<LocationUpdateWithoutSquadInput, LocationUncheckedUpdateWithoutSquadInput>
  }

  export type TeamUpdateManyWithoutSquadNestedInput = {
    create?: XOR<Enumerable<TeamCreateWithoutSquadInput>, Enumerable<TeamUncheckedCreateWithoutSquadInput>>
    connectOrCreate?: Enumerable<TeamCreateOrConnectWithoutSquadInput>
    upsert?: Enumerable<TeamUpsertWithWhereUniqueWithoutSquadInput>
    createMany?: TeamCreateManySquadInputEnvelope
    set?: Enumerable<TeamWhereUniqueInput>
    disconnect?: Enumerable<TeamWhereUniqueInput>
    delete?: Enumerable<TeamWhereUniqueInput>
    connect?: Enumerable<TeamWhereUniqueInput>
    update?: Enumerable<TeamUpdateWithWhereUniqueWithoutSquadInput>
    updateMany?: Enumerable<TeamUpdateManyWithWhereWithoutSquadInput>
    deleteMany?: Enumerable<TeamScalarWhereInput>
  }

  export type PlayerUncheckedUpdateManyWithoutSquadNestedInput = {
    create?: XOR<Enumerable<PlayerCreateWithoutSquadInput>, Enumerable<PlayerUncheckedCreateWithoutSquadInput>>
    connectOrCreate?: Enumerable<PlayerCreateOrConnectWithoutSquadInput>
    upsert?: Enumerable<PlayerUpsertWithWhereUniqueWithoutSquadInput>
    set?: Enumerable<PlayerWhereUniqueInput>
    disconnect?: Enumerable<PlayerWhereUniqueInput>
    delete?: Enumerable<PlayerWhereUniqueInput>
    connect?: Enumerable<PlayerWhereUniqueInput>
    update?: Enumerable<PlayerUpdateWithWhereUniqueWithoutSquadInput>
    updateMany?: Enumerable<PlayerUpdateManyWithWhereWithoutSquadInput>
    deleteMany?: Enumerable<PlayerScalarWhereInput>
  }

  export type StaffUncheckedUpdateManyWithoutSquadNestedInput = {
    create?: XOR<Enumerable<StaffCreateWithoutSquadInput>, Enumerable<StaffUncheckedCreateWithoutSquadInput>>
    connectOrCreate?: Enumerable<StaffCreateOrConnectWithoutSquadInput>
    upsert?: Enumerable<StaffUpsertWithWhereUniqueWithoutSquadInput>
    set?: Enumerable<StaffWhereUniqueInput>
    disconnect?: Enumerable<StaffWhereUniqueInput>
    delete?: Enumerable<StaffWhereUniqueInput>
    connect?: Enumerable<StaffWhereUniqueInput>
    update?: Enumerable<StaffUpdateWithWhereUniqueWithoutSquadInput>
    updateMany?: Enumerable<StaffUpdateManyWithWhereWithoutSquadInput>
    deleteMany?: Enumerable<StaffScalarWhereInput>
  }

  export type CompetitionUncheckedUpdateManyWithoutSquadNestedInput = {
    create?: XOR<Enumerable<CompetitionCreateWithoutSquadInput>, Enumerable<CompetitionUncheckedCreateWithoutSquadInput>>
    connectOrCreate?: Enumerable<CompetitionCreateOrConnectWithoutSquadInput>
    upsert?: Enumerable<CompetitionUpsertWithWhereUniqueWithoutSquadInput>
    set?: Enumerable<CompetitionWhereUniqueInput>
    disconnect?: Enumerable<CompetitionWhereUniqueInput>
    delete?: Enumerable<CompetitionWhereUniqueInput>
    connect?: Enumerable<CompetitionWhereUniqueInput>
    update?: Enumerable<CompetitionUpdateWithWhereUniqueWithoutSquadInput>
    updateMany?: Enumerable<CompetitionUpdateManyWithWhereWithoutSquadInput>
    deleteMany?: Enumerable<CompetitionScalarWhereInput>
  }

  export type TeamUncheckedUpdateManyWithoutSquadNestedInput = {
    create?: XOR<Enumerable<TeamCreateWithoutSquadInput>, Enumerable<TeamUncheckedCreateWithoutSquadInput>>
    connectOrCreate?: Enumerable<TeamCreateOrConnectWithoutSquadInput>
    upsert?: Enumerable<TeamUpsertWithWhereUniqueWithoutSquadInput>
    createMany?: TeamCreateManySquadInputEnvelope
    set?: Enumerable<TeamWhereUniqueInput>
    disconnect?: Enumerable<TeamWhereUniqueInput>
    delete?: Enumerable<TeamWhereUniqueInput>
    connect?: Enumerable<TeamWhereUniqueInput>
    update?: Enumerable<TeamUpdateWithWhereUniqueWithoutSquadInput>
    updateMany?: Enumerable<TeamUpdateManyWithWhereWithoutSquadInput>
    deleteMany?: Enumerable<TeamScalarWhereInput>
  }

  export type SeasonCreateNestedOneWithoutCompetitionInput = {
    create?: XOR<SeasonCreateWithoutCompetitionInput, SeasonUncheckedCreateWithoutCompetitionInput>
    connectOrCreate?: SeasonCreateOrConnectWithoutCompetitionInput
    connect?: SeasonWhereUniqueInput
  }

  export type SquadCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<Enumerable<SquadCreateWithoutCompetitionInput>, Enumerable<SquadUncheckedCreateWithoutCompetitionInput>>
    connectOrCreate?: Enumerable<SquadCreateOrConnectWithoutCompetitionInput>
    connect?: Enumerable<SquadWhereUniqueInput>
  }

  export type GameCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<Enumerable<GameCreateWithoutCompetitionInput>, Enumerable<GameUncheckedCreateWithoutCompetitionInput>>
    connectOrCreate?: Enumerable<GameCreateOrConnectWithoutCompetitionInput>
    createMany?: GameCreateManyCompetitionInputEnvelope
    connect?: Enumerable<GameWhereUniqueInput>
  }

  export type SquadUncheckedCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<Enumerable<SquadCreateWithoutCompetitionInput>, Enumerable<SquadUncheckedCreateWithoutCompetitionInput>>
    connectOrCreate?: Enumerable<SquadCreateOrConnectWithoutCompetitionInput>
    connect?: Enumerable<SquadWhereUniqueInput>
  }

  export type GameUncheckedCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<Enumerable<GameCreateWithoutCompetitionInput>, Enumerable<GameUncheckedCreateWithoutCompetitionInput>>
    connectOrCreate?: Enumerable<GameCreateOrConnectWithoutCompetitionInput>
    createMany?: GameCreateManyCompetitionInputEnvelope
    connect?: Enumerable<GameWhereUniqueInput>
  }

  export type EnumCompetitionTypeFieldUpdateOperationsInput = {
    set?: CompetitionType
  }

  export type SeasonUpdateOneRequiredWithoutCompetitionNestedInput = {
    create?: XOR<SeasonCreateWithoutCompetitionInput, SeasonUncheckedCreateWithoutCompetitionInput>
    connectOrCreate?: SeasonCreateOrConnectWithoutCompetitionInput
    upsert?: SeasonUpsertWithoutCompetitionInput
    connect?: SeasonWhereUniqueInput
    update?: XOR<SeasonUpdateWithoutCompetitionInput, SeasonUncheckedUpdateWithoutCompetitionInput>
  }

  export type SquadUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<Enumerable<SquadCreateWithoutCompetitionInput>, Enumerable<SquadUncheckedCreateWithoutCompetitionInput>>
    connectOrCreate?: Enumerable<SquadCreateOrConnectWithoutCompetitionInput>
    upsert?: Enumerable<SquadUpsertWithWhereUniqueWithoutCompetitionInput>
    set?: Enumerable<SquadWhereUniqueInput>
    disconnect?: Enumerable<SquadWhereUniqueInput>
    delete?: Enumerable<SquadWhereUniqueInput>
    connect?: Enumerable<SquadWhereUniqueInput>
    update?: Enumerable<SquadUpdateWithWhereUniqueWithoutCompetitionInput>
    updateMany?: Enumerable<SquadUpdateManyWithWhereWithoutCompetitionInput>
    deleteMany?: Enumerable<SquadScalarWhereInput>
  }

  export type GameUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<Enumerable<GameCreateWithoutCompetitionInput>, Enumerable<GameUncheckedCreateWithoutCompetitionInput>>
    connectOrCreate?: Enumerable<GameCreateOrConnectWithoutCompetitionInput>
    upsert?: Enumerable<GameUpsertWithWhereUniqueWithoutCompetitionInput>
    createMany?: GameCreateManyCompetitionInputEnvelope
    set?: Enumerable<GameWhereUniqueInput>
    disconnect?: Enumerable<GameWhereUniqueInput>
    delete?: Enumerable<GameWhereUniqueInput>
    connect?: Enumerable<GameWhereUniqueInput>
    update?: Enumerable<GameUpdateWithWhereUniqueWithoutCompetitionInput>
    updateMany?: Enumerable<GameUpdateManyWithWhereWithoutCompetitionInput>
    deleteMany?: Enumerable<GameScalarWhereInput>
  }

  export type SquadUncheckedUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<Enumerable<SquadCreateWithoutCompetitionInput>, Enumerable<SquadUncheckedCreateWithoutCompetitionInput>>
    connectOrCreate?: Enumerable<SquadCreateOrConnectWithoutCompetitionInput>
    upsert?: Enumerable<SquadUpsertWithWhereUniqueWithoutCompetitionInput>
    set?: Enumerable<SquadWhereUniqueInput>
    disconnect?: Enumerable<SquadWhereUniqueInput>
    delete?: Enumerable<SquadWhereUniqueInput>
    connect?: Enumerable<SquadWhereUniqueInput>
    update?: Enumerable<SquadUpdateWithWhereUniqueWithoutCompetitionInput>
    updateMany?: Enumerable<SquadUpdateManyWithWhereWithoutCompetitionInput>
    deleteMany?: Enumerable<SquadScalarWhereInput>
  }

  export type GameUncheckedUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<Enumerable<GameCreateWithoutCompetitionInput>, Enumerable<GameUncheckedCreateWithoutCompetitionInput>>
    connectOrCreate?: Enumerable<GameCreateOrConnectWithoutCompetitionInput>
    upsert?: Enumerable<GameUpsertWithWhereUniqueWithoutCompetitionInput>
    createMany?: GameCreateManyCompetitionInputEnvelope
    set?: Enumerable<GameWhereUniqueInput>
    disconnect?: Enumerable<GameWhereUniqueInput>
    delete?: Enumerable<GameWhereUniqueInput>
    connect?: Enumerable<GameWhereUniqueInput>
    update?: Enumerable<GameUpdateWithWhereUniqueWithoutCompetitionInput>
    updateMany?: Enumerable<GameUpdateManyWithWhereWithoutCompetitionInput>
    deleteMany?: Enumerable<GameScalarWhereInput>
  }

  export type CompetitionCreateNestedManyWithoutSeasonInput = {
    create?: XOR<Enumerable<CompetitionCreateWithoutSeasonInput>, Enumerable<CompetitionUncheckedCreateWithoutSeasonInput>>
    connectOrCreate?: Enumerable<CompetitionCreateOrConnectWithoutSeasonInput>
    createMany?: CompetitionCreateManySeasonInputEnvelope
    connect?: Enumerable<CompetitionWhereUniqueInput>
  }

  export type CompetitionUncheckedCreateNestedManyWithoutSeasonInput = {
    create?: XOR<Enumerable<CompetitionCreateWithoutSeasonInput>, Enumerable<CompetitionUncheckedCreateWithoutSeasonInput>>
    connectOrCreate?: Enumerable<CompetitionCreateOrConnectWithoutSeasonInput>
    createMany?: CompetitionCreateManySeasonInputEnvelope
    connect?: Enumerable<CompetitionWhereUniqueInput>
  }

  export type CompetitionUpdateManyWithoutSeasonNestedInput = {
    create?: XOR<Enumerable<CompetitionCreateWithoutSeasonInput>, Enumerable<CompetitionUncheckedCreateWithoutSeasonInput>>
    connectOrCreate?: Enumerable<CompetitionCreateOrConnectWithoutSeasonInput>
    upsert?: Enumerable<CompetitionUpsertWithWhereUniqueWithoutSeasonInput>
    createMany?: CompetitionCreateManySeasonInputEnvelope
    set?: Enumerable<CompetitionWhereUniqueInput>
    disconnect?: Enumerable<CompetitionWhereUniqueInput>
    delete?: Enumerable<CompetitionWhereUniqueInput>
    connect?: Enumerable<CompetitionWhereUniqueInput>
    update?: Enumerable<CompetitionUpdateWithWhereUniqueWithoutSeasonInput>
    updateMany?: Enumerable<CompetitionUpdateManyWithWhereWithoutSeasonInput>
    deleteMany?: Enumerable<CompetitionScalarWhereInput>
  }

  export type CompetitionUncheckedUpdateManyWithoutSeasonNestedInput = {
    create?: XOR<Enumerable<CompetitionCreateWithoutSeasonInput>, Enumerable<CompetitionUncheckedCreateWithoutSeasonInput>>
    connectOrCreate?: Enumerable<CompetitionCreateOrConnectWithoutSeasonInput>
    upsert?: Enumerable<CompetitionUpsertWithWhereUniqueWithoutSeasonInput>
    createMany?: CompetitionCreateManySeasonInputEnvelope
    set?: Enumerable<CompetitionWhereUniqueInput>
    disconnect?: Enumerable<CompetitionWhereUniqueInput>
    delete?: Enumerable<CompetitionWhereUniqueInput>
    connect?: Enumerable<CompetitionWhereUniqueInput>
    update?: Enumerable<CompetitionUpdateWithWhereUniqueWithoutSeasonInput>
    updateMany?: Enumerable<CompetitionUpdateManyWithWhereWithoutSeasonInput>
    deleteMany?: Enumerable<CompetitionScalarWhereInput>
  }

  export type PlayerCreateNestedOneWithoutHealthRecordInput = {
    create?: XOR<PlayerCreateWithoutHealthRecordInput, PlayerUncheckedCreateWithoutHealthRecordInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutHealthRecordInput
    connect?: PlayerWhereUniqueInput
  }

  export type PlayerUncheckedCreateNestedOneWithoutHealthRecordInput = {
    create?: XOR<PlayerCreateWithoutHealthRecordInput, PlayerUncheckedCreateWithoutHealthRecordInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutHealthRecordInput
    connect?: PlayerWhereUniqueInput
  }

  export type PlayerUpdateOneWithoutHealthRecordNestedInput = {
    create?: XOR<PlayerCreateWithoutHealthRecordInput, PlayerUncheckedCreateWithoutHealthRecordInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutHealthRecordInput
    upsert?: PlayerUpsertWithoutHealthRecordInput
    disconnect?: boolean
    delete?: boolean
    connect?: PlayerWhereUniqueInput
    update?: XOR<PlayerUpdateWithoutHealthRecordInput, PlayerUncheckedUpdateWithoutHealthRecordInput>
  }

  export type PlayerUncheckedUpdateOneWithoutHealthRecordNestedInput = {
    create?: XOR<PlayerCreateWithoutHealthRecordInput, PlayerUncheckedCreateWithoutHealthRecordInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutHealthRecordInput
    upsert?: PlayerUpsertWithoutHealthRecordInput
    disconnect?: boolean
    delete?: boolean
    connect?: PlayerWhereUniqueInput
    update?: XOR<PlayerUpdateWithoutHealthRecordInput, PlayerUncheckedUpdateWithoutHealthRecordInput>
  }

  export type TeamCreateNestedManyWithoutGameInput = {
    create?: XOR<Enumerable<TeamCreateWithoutGameInput>, Enumerable<TeamUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<TeamCreateOrConnectWithoutGameInput>
    createMany?: TeamCreateManyGameInputEnvelope
    connect?: Enumerable<TeamWhereUniqueInput>
  }

  export type GameEventCreateNestedManyWithoutGameInput = {
    create?: XOR<Enumerable<GameEventCreateWithoutGameInput>, Enumerable<GameEventUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<GameEventCreateOrConnectWithoutGameInput>
    createMany?: GameEventCreateManyGameInputEnvelope
    connect?: Enumerable<GameEventWhereUniqueInput>
  }

  export type CompetitionCreateNestedOneWithoutGameInput = {
    create?: XOR<CompetitionCreateWithoutGameInput, CompetitionUncheckedCreateWithoutGameInput>
    connectOrCreate?: CompetitionCreateOrConnectWithoutGameInput
    connect?: CompetitionWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutGameInput = {
    create?: XOR<LocationCreateWithoutGameInput, LocationUncheckedCreateWithoutGameInput>
    connectOrCreate?: LocationCreateOrConnectWithoutGameInput
    connect?: LocationWhereUniqueInput
  }

  export type TeamUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<Enumerable<TeamCreateWithoutGameInput>, Enumerable<TeamUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<TeamCreateOrConnectWithoutGameInput>
    createMany?: TeamCreateManyGameInputEnvelope
    connect?: Enumerable<TeamWhereUniqueInput>
  }

  export type GameEventUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<Enumerable<GameEventCreateWithoutGameInput>, Enumerable<GameEventUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<GameEventCreateOrConnectWithoutGameInput>
    createMany?: GameEventCreateManyGameInputEnvelope
    connect?: Enumerable<GameEventWhereUniqueInput>
  }

  export type TeamUpdateManyWithoutGameNestedInput = {
    create?: XOR<Enumerable<TeamCreateWithoutGameInput>, Enumerable<TeamUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<TeamCreateOrConnectWithoutGameInput>
    upsert?: Enumerable<TeamUpsertWithWhereUniqueWithoutGameInput>
    createMany?: TeamCreateManyGameInputEnvelope
    set?: Enumerable<TeamWhereUniqueInput>
    disconnect?: Enumerable<TeamWhereUniqueInput>
    delete?: Enumerable<TeamWhereUniqueInput>
    connect?: Enumerable<TeamWhereUniqueInput>
    update?: Enumerable<TeamUpdateWithWhereUniqueWithoutGameInput>
    updateMany?: Enumerable<TeamUpdateManyWithWhereWithoutGameInput>
    deleteMany?: Enumerable<TeamScalarWhereInput>
  }

  export type GameEventUpdateManyWithoutGameNestedInput = {
    create?: XOR<Enumerable<GameEventCreateWithoutGameInput>, Enumerable<GameEventUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<GameEventCreateOrConnectWithoutGameInput>
    upsert?: Enumerable<GameEventUpsertWithWhereUniqueWithoutGameInput>
    createMany?: GameEventCreateManyGameInputEnvelope
    set?: Enumerable<GameEventWhereUniqueInput>
    disconnect?: Enumerable<GameEventWhereUniqueInput>
    delete?: Enumerable<GameEventWhereUniqueInput>
    connect?: Enumerable<GameEventWhereUniqueInput>
    update?: Enumerable<GameEventUpdateWithWhereUniqueWithoutGameInput>
    updateMany?: Enumerable<GameEventUpdateManyWithWhereWithoutGameInput>
    deleteMany?: Enumerable<GameEventScalarWhereInput>
  }

  export type CompetitionUpdateOneRequiredWithoutGameNestedInput = {
    create?: XOR<CompetitionCreateWithoutGameInput, CompetitionUncheckedCreateWithoutGameInput>
    connectOrCreate?: CompetitionCreateOrConnectWithoutGameInput
    upsert?: CompetitionUpsertWithoutGameInput
    connect?: CompetitionWhereUniqueInput
    update?: XOR<CompetitionUpdateWithoutGameInput, CompetitionUncheckedUpdateWithoutGameInput>
  }

  export type LocationUpdateOneRequiredWithoutGameNestedInput = {
    create?: XOR<LocationCreateWithoutGameInput, LocationUncheckedCreateWithoutGameInput>
    connectOrCreate?: LocationCreateOrConnectWithoutGameInput
    upsert?: LocationUpsertWithoutGameInput
    connect?: LocationWhereUniqueInput
    update?: XOR<LocationUpdateWithoutGameInput, LocationUncheckedUpdateWithoutGameInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TeamUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<Enumerable<TeamCreateWithoutGameInput>, Enumerable<TeamUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<TeamCreateOrConnectWithoutGameInput>
    upsert?: Enumerable<TeamUpsertWithWhereUniqueWithoutGameInput>
    createMany?: TeamCreateManyGameInputEnvelope
    set?: Enumerable<TeamWhereUniqueInput>
    disconnect?: Enumerable<TeamWhereUniqueInput>
    delete?: Enumerable<TeamWhereUniqueInput>
    connect?: Enumerable<TeamWhereUniqueInput>
    update?: Enumerable<TeamUpdateWithWhereUniqueWithoutGameInput>
    updateMany?: Enumerable<TeamUpdateManyWithWhereWithoutGameInput>
    deleteMany?: Enumerable<TeamScalarWhereInput>
  }

  export type GameEventUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<Enumerable<GameEventCreateWithoutGameInput>, Enumerable<GameEventUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<GameEventCreateOrConnectWithoutGameInput>
    upsert?: Enumerable<GameEventUpsertWithWhereUniqueWithoutGameInput>
    createMany?: GameEventCreateManyGameInputEnvelope
    set?: Enumerable<GameEventWhereUniqueInput>
    disconnect?: Enumerable<GameEventWhereUniqueInput>
    delete?: Enumerable<GameEventWhereUniqueInput>
    connect?: Enumerable<GameEventWhereUniqueInput>
    update?: Enumerable<GameEventUpdateWithWhereUniqueWithoutGameInput>
    updateMany?: Enumerable<GameEventUpdateManyWithWhereWithoutGameInput>
    deleteMany?: Enumerable<GameEventScalarWhereInput>
  }

  export type PlayerCreateNestedOneWithoutGameEventInput = {
    create?: XOR<PlayerCreateWithoutGameEventInput, PlayerUncheckedCreateWithoutGameEventInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutGameEventInput
    connect?: PlayerWhereUniqueInput
  }

  export type GameCreateNestedOneWithoutEventsInput = {
    create?: XOR<GameCreateWithoutEventsInput, GameUncheckedCreateWithoutEventsInput>
    connectOrCreate?: GameCreateOrConnectWithoutEventsInput
    connect?: GameWhereUniqueInput
  }

  export type PlayerUpdateOneRequiredWithoutGameEventNestedInput = {
    create?: XOR<PlayerCreateWithoutGameEventInput, PlayerUncheckedCreateWithoutGameEventInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutGameEventInput
    upsert?: PlayerUpsertWithoutGameEventInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<PlayerUpdateWithoutGameEventInput, PlayerUncheckedUpdateWithoutGameEventInput>
  }

  export type GameUpdateOneWithoutEventsNestedInput = {
    create?: XOR<GameCreateWithoutEventsInput, GameUncheckedCreateWithoutEventsInput>
    connectOrCreate?: GameCreateOrConnectWithoutEventsInput
    upsert?: GameUpsertWithoutEventsInput
    disconnect?: boolean
    delete?: boolean
    connect?: GameWhereUniqueInput
    update?: XOR<GameUpdateWithoutEventsInput, GameUncheckedUpdateWithoutEventsInput>
  }

  export type EnumEventFieldUpdateOperationsInput = {
    set?: Event
  }

  export type InstitutionCreateNestedOneWithoutScholarshipInput = {
    create?: XOR<InstitutionCreateWithoutScholarshipInput, InstitutionUncheckedCreateWithoutScholarshipInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutScholarshipInput
    connect?: InstitutionWhereUniqueInput
  }

  export type PlayerCreateNestedOneWithoutScholarshipInput = {
    create?: XOR<PlayerCreateWithoutScholarshipInput, PlayerUncheckedCreateWithoutScholarshipInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutScholarshipInput
    connect?: PlayerWhereUniqueInput
  }

  export type InstitutionUpdateOneRequiredWithoutScholarshipNestedInput = {
    create?: XOR<InstitutionCreateWithoutScholarshipInput, InstitutionUncheckedCreateWithoutScholarshipInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutScholarshipInput
    upsert?: InstitutionUpsertWithoutScholarshipInput
    connect?: InstitutionWhereUniqueInput
    update?: XOR<InstitutionUpdateWithoutScholarshipInput, InstitutionUncheckedUpdateWithoutScholarshipInput>
  }

  export type PlayerUpdateOneRequiredWithoutScholarshipNestedInput = {
    create?: XOR<PlayerCreateWithoutScholarshipInput, PlayerUncheckedCreateWithoutScholarshipInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutScholarshipInput
    upsert?: PlayerUpsertWithoutScholarshipInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<PlayerUpdateWithoutScholarshipInput, PlayerUncheckedUpdateWithoutScholarshipInput>
  }

  export type RecruitmentCreateNestedManyWithoutRecruiterInput = {
    create?: XOR<Enumerable<RecruitmentCreateWithoutRecruiterInput>, Enumerable<RecruitmentUncheckedCreateWithoutRecruiterInput>>
    connectOrCreate?: Enumerable<RecruitmentCreateOrConnectWithoutRecruiterInput>
    createMany?: RecruitmentCreateManyRecruiterInputEnvelope
    connect?: Enumerable<RecruitmentWhereUniqueInput>
  }

  export type StaffCreateNestedManyWithoutAccountInput = {
    create?: XOR<Enumerable<StaffCreateWithoutAccountInput>, Enumerable<StaffUncheckedCreateWithoutAccountInput>>
    connectOrCreate?: Enumerable<StaffCreateOrConnectWithoutAccountInput>
    createMany?: StaffCreateManyAccountInputEnvelope
    connect?: Enumerable<StaffWhereUniqueInput>
  }

  export type RecruitmentUncheckedCreateNestedManyWithoutRecruiterInput = {
    create?: XOR<Enumerable<RecruitmentCreateWithoutRecruiterInput>, Enumerable<RecruitmentUncheckedCreateWithoutRecruiterInput>>
    connectOrCreate?: Enumerable<RecruitmentCreateOrConnectWithoutRecruiterInput>
    createMany?: RecruitmentCreateManyRecruiterInputEnvelope
    connect?: Enumerable<RecruitmentWhereUniqueInput>
  }

  export type StaffUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<Enumerable<StaffCreateWithoutAccountInput>, Enumerable<StaffUncheckedCreateWithoutAccountInput>>
    connectOrCreate?: Enumerable<StaffCreateOrConnectWithoutAccountInput>
    createMany?: StaffCreateManyAccountInputEnvelope
    connect?: Enumerable<StaffWhereUniqueInput>
  }

  export type RecruitmentUpdateManyWithoutRecruiterNestedInput = {
    create?: XOR<Enumerable<RecruitmentCreateWithoutRecruiterInput>, Enumerable<RecruitmentUncheckedCreateWithoutRecruiterInput>>
    connectOrCreate?: Enumerable<RecruitmentCreateOrConnectWithoutRecruiterInput>
    upsert?: Enumerable<RecruitmentUpsertWithWhereUniqueWithoutRecruiterInput>
    createMany?: RecruitmentCreateManyRecruiterInputEnvelope
    set?: Enumerable<RecruitmentWhereUniqueInput>
    disconnect?: Enumerable<RecruitmentWhereUniqueInput>
    delete?: Enumerable<RecruitmentWhereUniqueInput>
    connect?: Enumerable<RecruitmentWhereUniqueInput>
    update?: Enumerable<RecruitmentUpdateWithWhereUniqueWithoutRecruiterInput>
    updateMany?: Enumerable<RecruitmentUpdateManyWithWhereWithoutRecruiterInput>
    deleteMany?: Enumerable<RecruitmentScalarWhereInput>
  }

  export type StaffUpdateManyWithoutAccountNestedInput = {
    create?: XOR<Enumerable<StaffCreateWithoutAccountInput>, Enumerable<StaffUncheckedCreateWithoutAccountInput>>
    connectOrCreate?: Enumerable<StaffCreateOrConnectWithoutAccountInput>
    upsert?: Enumerable<StaffUpsertWithWhereUniqueWithoutAccountInput>
    createMany?: StaffCreateManyAccountInputEnvelope
    set?: Enumerable<StaffWhereUniqueInput>
    disconnect?: Enumerable<StaffWhereUniqueInput>
    delete?: Enumerable<StaffWhereUniqueInput>
    connect?: Enumerable<StaffWhereUniqueInput>
    update?: Enumerable<StaffUpdateWithWhereUniqueWithoutAccountInput>
    updateMany?: Enumerable<StaffUpdateManyWithWhereWithoutAccountInput>
    deleteMany?: Enumerable<StaffScalarWhereInput>
  }

  export type RecruitmentUncheckedUpdateManyWithoutRecruiterNestedInput = {
    create?: XOR<Enumerable<RecruitmentCreateWithoutRecruiterInput>, Enumerable<RecruitmentUncheckedCreateWithoutRecruiterInput>>
    connectOrCreate?: Enumerable<RecruitmentCreateOrConnectWithoutRecruiterInput>
    upsert?: Enumerable<RecruitmentUpsertWithWhereUniqueWithoutRecruiterInput>
    createMany?: RecruitmentCreateManyRecruiterInputEnvelope
    set?: Enumerable<RecruitmentWhereUniqueInput>
    disconnect?: Enumerable<RecruitmentWhereUniqueInput>
    delete?: Enumerable<RecruitmentWhereUniqueInput>
    connect?: Enumerable<RecruitmentWhereUniqueInput>
    update?: Enumerable<RecruitmentUpdateWithWhereUniqueWithoutRecruiterInput>
    updateMany?: Enumerable<RecruitmentUpdateManyWithWhereWithoutRecruiterInput>
    deleteMany?: Enumerable<RecruitmentScalarWhereInput>
  }

  export type StaffUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<Enumerable<StaffCreateWithoutAccountInput>, Enumerable<StaffUncheckedCreateWithoutAccountInput>>
    connectOrCreate?: Enumerable<StaffCreateOrConnectWithoutAccountInput>
    upsert?: Enumerable<StaffUpsertWithWhereUniqueWithoutAccountInput>
    createMany?: StaffCreateManyAccountInputEnvelope
    set?: Enumerable<StaffWhereUniqueInput>
    disconnect?: Enumerable<StaffWhereUniqueInput>
    delete?: Enumerable<StaffWhereUniqueInput>
    connect?: Enumerable<StaffWhereUniqueInput>
    update?: Enumerable<StaffUpdateWithWhereUniqueWithoutAccountInput>
    updateMany?: Enumerable<StaffUpdateManyWithWhereWithoutAccountInput>
    deleteMany?: Enumerable<StaffScalarWhereInput>
  }

  export type PlayerCreateNestedOneWithoutRecruitmentInput = {
    create?: XOR<PlayerCreateWithoutRecruitmentInput, PlayerUncheckedCreateWithoutRecruitmentInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutRecruitmentInput
    connect?: PlayerWhereUniqueInput
  }

  export type AccountCreateNestedOneWithoutRecruitmentInput = {
    create?: XOR<AccountCreateWithoutRecruitmentInput, AccountUncheckedCreateWithoutRecruitmentInput>
    connectOrCreate?: AccountCreateOrConnectWithoutRecruitmentInput
    connect?: AccountWhereUniqueInput
  }

  export type InterviewCreateNestedManyWithoutRecruitmentInput = {
    create?: XOR<Enumerable<InterviewCreateWithoutRecruitmentInput>, Enumerable<InterviewUncheckedCreateWithoutRecruitmentInput>>
    connectOrCreate?: Enumerable<InterviewCreateOrConnectWithoutRecruitmentInput>
    createMany?: InterviewCreateManyRecruitmentInputEnvelope
    connect?: Enumerable<InterviewWhereUniqueInput>
  }

  export type InterviewUncheckedCreateNestedManyWithoutRecruitmentInput = {
    create?: XOR<Enumerable<InterviewCreateWithoutRecruitmentInput>, Enumerable<InterviewUncheckedCreateWithoutRecruitmentInput>>
    connectOrCreate?: Enumerable<InterviewCreateOrConnectWithoutRecruitmentInput>
    createMany?: InterviewCreateManyRecruitmentInputEnvelope
    connect?: Enumerable<InterviewWhereUniqueInput>
  }

  export type PlayerUpdateOneRequiredWithoutRecruitmentNestedInput = {
    create?: XOR<PlayerCreateWithoutRecruitmentInput, PlayerUncheckedCreateWithoutRecruitmentInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutRecruitmentInput
    upsert?: PlayerUpsertWithoutRecruitmentInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<PlayerUpdateWithoutRecruitmentInput, PlayerUncheckedUpdateWithoutRecruitmentInput>
  }

  export type AccountUpdateOneRequiredWithoutRecruitmentNestedInput = {
    create?: XOR<AccountCreateWithoutRecruitmentInput, AccountUncheckedCreateWithoutRecruitmentInput>
    connectOrCreate?: AccountCreateOrConnectWithoutRecruitmentInput
    upsert?: AccountUpsertWithoutRecruitmentInput
    connect?: AccountWhereUniqueInput
    update?: XOR<AccountUpdateWithoutRecruitmentInput, AccountUncheckedUpdateWithoutRecruitmentInput>
  }

  export type InterviewUpdateManyWithoutRecruitmentNestedInput = {
    create?: XOR<Enumerable<InterviewCreateWithoutRecruitmentInput>, Enumerable<InterviewUncheckedCreateWithoutRecruitmentInput>>
    connectOrCreate?: Enumerable<InterviewCreateOrConnectWithoutRecruitmentInput>
    upsert?: Enumerable<InterviewUpsertWithWhereUniqueWithoutRecruitmentInput>
    createMany?: InterviewCreateManyRecruitmentInputEnvelope
    set?: Enumerable<InterviewWhereUniqueInput>
    disconnect?: Enumerable<InterviewWhereUniqueInput>
    delete?: Enumerable<InterviewWhereUniqueInput>
    connect?: Enumerable<InterviewWhereUniqueInput>
    update?: Enumerable<InterviewUpdateWithWhereUniqueWithoutRecruitmentInput>
    updateMany?: Enumerable<InterviewUpdateManyWithWhereWithoutRecruitmentInput>
    deleteMany?: Enumerable<InterviewScalarWhereInput>
  }

  export type InterviewUncheckedUpdateManyWithoutRecruitmentNestedInput = {
    create?: XOR<Enumerable<InterviewCreateWithoutRecruitmentInput>, Enumerable<InterviewUncheckedCreateWithoutRecruitmentInput>>
    connectOrCreate?: Enumerable<InterviewCreateOrConnectWithoutRecruitmentInput>
    upsert?: Enumerable<InterviewUpsertWithWhereUniqueWithoutRecruitmentInput>
    createMany?: InterviewCreateManyRecruitmentInputEnvelope
    set?: Enumerable<InterviewWhereUniqueInput>
    disconnect?: Enumerable<InterviewWhereUniqueInput>
    delete?: Enumerable<InterviewWhereUniqueInput>
    connect?: Enumerable<InterviewWhereUniqueInput>
    update?: Enumerable<InterviewUpdateWithWhereUniqueWithoutRecruitmentInput>
    updateMany?: Enumerable<InterviewUpdateManyWithWhereWithoutRecruitmentInput>
    deleteMany?: Enumerable<InterviewScalarWhereInput>
  }

  export type RecruitmentCreateNestedOneWithoutInterviewsInput = {
    create?: XOR<RecruitmentCreateWithoutInterviewsInput, RecruitmentUncheckedCreateWithoutInterviewsInput>
    connectOrCreate?: RecruitmentCreateOrConnectWithoutInterviewsInput
    connect?: RecruitmentWhereUniqueInput
  }

  export type EnumStageFieldUpdateOperationsInput = {
    set?: Stage
  }

  export type RecruitmentUpdateOneRequiredWithoutInterviewsNestedInput = {
    create?: XOR<RecruitmentCreateWithoutInterviewsInput, RecruitmentUncheckedCreateWithoutInterviewsInput>
    connectOrCreate?: RecruitmentCreateOrConnectWithoutInterviewsInput
    upsert?: RecruitmentUpsertWithoutInterviewsInput
    connect?: RecruitmentWhereUniqueInput
    update?: XOR<RecruitmentUpdateWithoutInterviewsInput, RecruitmentUncheckedUpdateWithoutInterviewsInput>
  }

  export type PlayerCreateNestedOneWithoutInjuryInput = {
    create?: XOR<PlayerCreateWithoutInjuryInput, PlayerUncheckedCreateWithoutInjuryInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutInjuryInput
    connect?: PlayerWhereUniqueInput
  }

  export type OperationCreateNestedManyWithoutInjuryInput = {
    create?: XOR<Enumerable<OperationCreateWithoutInjuryInput>, Enumerable<OperationUncheckedCreateWithoutInjuryInput>>
    connectOrCreate?: Enumerable<OperationCreateOrConnectWithoutInjuryInput>
    createMany?: OperationCreateManyInjuryInputEnvelope
    connect?: Enumerable<OperationWhereUniqueInput>
  }

  export type OperationUncheckedCreateNestedManyWithoutInjuryInput = {
    create?: XOR<Enumerable<OperationCreateWithoutInjuryInput>, Enumerable<OperationUncheckedCreateWithoutInjuryInput>>
    connectOrCreate?: Enumerable<OperationCreateOrConnectWithoutInjuryInput>
    createMany?: OperationCreateManyInjuryInputEnvelope
    connect?: Enumerable<OperationWhereUniqueInput>
  }

  export type PlayerUpdateOneRequiredWithoutInjuryNestedInput = {
    create?: XOR<PlayerCreateWithoutInjuryInput, PlayerUncheckedCreateWithoutInjuryInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutInjuryInput
    upsert?: PlayerUpsertWithoutInjuryInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<PlayerUpdateWithoutInjuryInput, PlayerUncheckedUpdateWithoutInjuryInput>
  }

  export type OperationUpdateManyWithoutInjuryNestedInput = {
    create?: XOR<Enumerable<OperationCreateWithoutInjuryInput>, Enumerable<OperationUncheckedCreateWithoutInjuryInput>>
    connectOrCreate?: Enumerable<OperationCreateOrConnectWithoutInjuryInput>
    upsert?: Enumerable<OperationUpsertWithWhereUniqueWithoutInjuryInput>
    createMany?: OperationCreateManyInjuryInputEnvelope
    set?: Enumerable<OperationWhereUniqueInput>
    disconnect?: Enumerable<OperationWhereUniqueInput>
    delete?: Enumerable<OperationWhereUniqueInput>
    connect?: Enumerable<OperationWhereUniqueInput>
    update?: Enumerable<OperationUpdateWithWhereUniqueWithoutInjuryInput>
    updateMany?: Enumerable<OperationUpdateManyWithWhereWithoutInjuryInput>
    deleteMany?: Enumerable<OperationScalarWhereInput>
  }

  export type OperationUncheckedUpdateManyWithoutInjuryNestedInput = {
    create?: XOR<Enumerable<OperationCreateWithoutInjuryInput>, Enumerable<OperationUncheckedCreateWithoutInjuryInput>>
    connectOrCreate?: Enumerable<OperationCreateOrConnectWithoutInjuryInput>
    upsert?: Enumerable<OperationUpsertWithWhereUniqueWithoutInjuryInput>
    createMany?: OperationCreateManyInjuryInputEnvelope
    set?: Enumerable<OperationWhereUniqueInput>
    disconnect?: Enumerable<OperationWhereUniqueInput>
    delete?: Enumerable<OperationWhereUniqueInput>
    connect?: Enumerable<OperationWhereUniqueInput>
    update?: Enumerable<OperationUpdateWithWhereUniqueWithoutInjuryInput>
    updateMany?: Enumerable<OperationUpdateManyWithWhereWithoutInjuryInput>
    deleteMany?: Enumerable<OperationScalarWhereInput>
  }

  export type InjuryCreateNestedOneWithoutOperationInput = {
    create?: XOR<InjuryCreateWithoutOperationInput, InjuryUncheckedCreateWithoutOperationInput>
    connectOrCreate?: InjuryCreateOrConnectWithoutOperationInput
    connect?: InjuryWhereUniqueInput
  }

  export type InjuryUpdateOneRequiredWithoutOperationNestedInput = {
    create?: XOR<InjuryCreateWithoutOperationInput, InjuryUncheckedCreateWithoutOperationInput>
    connectOrCreate?: InjuryCreateOrConnectWithoutOperationInput
    upsert?: InjuryUpsertWithoutOperationInput
    connect?: InjuryWhereUniqueInput
    update?: XOR<InjuryUpdateWithoutOperationInput, InjuryUncheckedUpdateWithoutOperationInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedEnumPostionFilter = {
    equals?: Postion
    in?: Enumerable<Postion>
    notIn?: Enumerable<Postion>
    not?: NestedEnumPostionFilter | Postion
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedEnumPostionWithAggregatesFilter = {
    equals?: Postion
    in?: Enumerable<Postion>
    notIn?: Enumerable<Postion>
    not?: NestedEnumPostionWithAggregatesFilter | Postion
    _count?: NestedIntFilter
    _min?: NestedEnumPostionFilter
    _max?: NestedEnumPostionFilter
  }

  export type NestedEnumFormationFilter = {
    equals?: Formation
    in?: Enumerable<Formation>
    notIn?: Enumerable<Formation>
    not?: NestedEnumFormationFilter | Formation
  }

  export type NestedEnumFormationWithAggregatesFilter = {
    equals?: Formation
    in?: Enumerable<Formation>
    notIn?: Enumerable<Formation>
    not?: NestedEnumFormationWithAggregatesFilter | Formation
    _count?: NestedIntFilter
    _min?: NestedEnumFormationFilter
    _max?: NestedEnumFormationFilter
  }

  export type NestedEnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type NestedEnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type NestedEnumInstitutionCategoryFilter = {
    equals?: InstitutionCategory
    in?: Enumerable<InstitutionCategory>
    notIn?: Enumerable<InstitutionCategory>
    not?: NestedEnumInstitutionCategoryFilter | InstitutionCategory
  }

  export type NestedEnumInstitutionCategoryWithAggregatesFilter = {
    equals?: InstitutionCategory
    in?: Enumerable<InstitutionCategory>
    notIn?: Enumerable<InstitutionCategory>
    not?: NestedEnumInstitutionCategoryWithAggregatesFilter | InstitutionCategory
    _count?: NestedIntFilter
    _min?: NestedEnumInstitutionCategoryFilter
    _max?: NestedEnumInstitutionCategoryFilter
  }

  export type NestedEnumLocationCategoryFilter = {
    equals?: LocationCategory
    in?: Enumerable<LocationCategory>
    notIn?: Enumerable<LocationCategory>
    not?: NestedEnumLocationCategoryFilter | LocationCategory
  }

  export type NestedEnumLocationCategoryWithAggregatesFilter = {
    equals?: LocationCategory
    in?: Enumerable<LocationCategory>
    notIn?: Enumerable<LocationCategory>
    not?: NestedEnumLocationCategoryWithAggregatesFilter | LocationCategory
    _count?: NestedIntFilter
    _min?: NestedEnumLocationCategoryFilter
    _max?: NestedEnumLocationCategoryFilter
  }

  export type NestedEnumCompetitionTypeFilter = {
    equals?: CompetitionType
    in?: Enumerable<CompetitionType>
    notIn?: Enumerable<CompetitionType>
    not?: NestedEnumCompetitionTypeFilter | CompetitionType
  }

  export type NestedEnumCompetitionTypeWithAggregatesFilter = {
    equals?: CompetitionType
    in?: Enumerable<CompetitionType>
    notIn?: Enumerable<CompetitionType>
    not?: NestedEnumCompetitionTypeWithAggregatesFilter | CompetitionType
    _count?: NestedIntFilter
    _min?: NestedEnumCompetitionTypeFilter
    _max?: NestedEnumCompetitionTypeFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedEnumEventFilter = {
    equals?: Event
    in?: Enumerable<Event>
    notIn?: Enumerable<Event>
    not?: NestedEnumEventFilter | Event
  }

  export type NestedEnumEventWithAggregatesFilter = {
    equals?: Event
    in?: Enumerable<Event>
    notIn?: Enumerable<Event>
    not?: NestedEnumEventWithAggregatesFilter | Event
    _count?: NestedIntFilter
    _min?: NestedEnumEventFilter
    _max?: NestedEnumEventFilter
  }

  export type NestedEnumStageFilter = {
    equals?: Stage
    in?: Enumerable<Stage>
    notIn?: Enumerable<Stage>
    not?: NestedEnumStageFilter | Stage
  }

  export type NestedEnumStageWithAggregatesFilter = {
    equals?: Stage
    in?: Enumerable<Stage>
    notIn?: Enumerable<Stage>
    not?: NestedEnumStageWithAggregatesFilter | Stage
    _count?: NestedIntFilter
    _min?: NestedEnumStageFilter
    _max?: NestedEnumStageFilter
  }

  export type HeathRecordCreateWithoutPlayerInput = {
    id?: string
    cardNumber: string
    issueDate: Date | string
    expiryDate: Date | string
  }

  export type HeathRecordUncheckedCreateWithoutPlayerInput = {
    id?: string
    cardNumber: string
    issueDate: Date | string
    expiryDate: Date | string
  }

  export type HeathRecordCreateOrConnectWithoutPlayerInput = {
    where: HeathRecordWhereUniqueInput
    create: XOR<HeathRecordCreateWithoutPlayerInput, HeathRecordUncheckedCreateWithoutPlayerInput>
  }

  export type ScholarshipCreateWithoutPlayerInput = {
    id?: string
    name: string
    description: string
    sponsor: InstitutionCreateNestedOneWithoutScholarshipInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScholarshipUncheckedCreateWithoutPlayerInput = {
    id?: string
    name: string
    description: string
    institutionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScholarshipCreateOrConnectWithoutPlayerInput = {
    where: ScholarshipWhereUniqueInput
    create: XOR<ScholarshipCreateWithoutPlayerInput, ScholarshipUncheckedCreateWithoutPlayerInput>
  }

  export type ScholarshipCreateManyPlayerInputEnvelope = {
    data: Enumerable<ScholarshipCreateManyPlayerInput>
    skipDuplicates?: boolean
  }

  export type RecruitmentCreateWithoutPlayerInput = {
    id?: string
    recruiter: AccountCreateNestedOneWithoutRecruitmentInput
    createdAt?: Date | string
    updatedAt?: Date | string
    passed?: boolean
    interviews?: InterviewCreateNestedManyWithoutRecruitmentInput
    resume?: string | null
  }

  export type RecruitmentUncheckedCreateWithoutPlayerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passed?: boolean
    interviews?: InterviewUncheckedCreateNestedManyWithoutRecruitmentInput
    resume?: string | null
    accountId: string
  }

  export type RecruitmentCreateOrConnectWithoutPlayerInput = {
    where: RecruitmentWhereUniqueInput
    create: XOR<RecruitmentCreateWithoutPlayerInput, RecruitmentUncheckedCreateWithoutPlayerInput>
  }

  export type RecruitmentCreateManyPlayerInputEnvelope = {
    data: Enumerable<RecruitmentCreateManyPlayerInput>
    skipDuplicates?: boolean
  }

  export type GameEventCreateWithoutPlayerInput = {
    id?: string
    minute: number
    game?: GameCreateNestedOneWithoutEventsInput
    type: Event
  }

  export type GameEventUncheckedCreateWithoutPlayerInput = {
    id?: string
    minute: number
    gameId?: string | null
    type: Event
  }

  export type GameEventCreateOrConnectWithoutPlayerInput = {
    where: GameEventWhereUniqueInput
    create: XOR<GameEventCreateWithoutPlayerInput, GameEventUncheckedCreateWithoutPlayerInput>
  }

  export type GameEventCreateManyPlayerInputEnvelope = {
    data: Enumerable<GameEventCreateManyPlayerInput>
    skipDuplicates?: boolean
  }

  export type InjuryCreateWithoutPlayerInput = {
    id?: string
    Operation?: OperationCreateNestedManyWithoutInjuryInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InjuryUncheckedCreateWithoutPlayerInput = {
    id?: string
    Operation?: OperationUncheckedCreateNestedManyWithoutInjuryInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InjuryCreateOrConnectWithoutPlayerInput = {
    where: InjuryWhereUniqueInput
    create: XOR<InjuryCreateWithoutPlayerInput, InjuryUncheckedCreateWithoutPlayerInput>
  }

  export type InjuryCreateManyPlayerInputEnvelope = {
    data: Enumerable<InjuryCreateManyPlayerInput>
    skipDuplicates?: boolean
  }

  export type SquadCreateWithoutPlayersInput = {
    id?: string
    name: string
    institution: InstitutionCreateNestedOneWithoutSquadInput
    staff?: StaffCreateNestedManyWithoutSquadInput
    competition?: CompetitionCreateNestedManyWithoutSquadInput
    home?: LocationCreateNestedOneWithoutSquadInput
    homeColor?: string | null
    awayColor?: string | null
    Team?: TeamCreateNestedManyWithoutSquadInput
  }

  export type SquadUncheckedCreateWithoutPlayersInput = {
    id?: string
    name: string
    staff?: StaffUncheckedCreateNestedManyWithoutSquadInput
    competition?: CompetitionUncheckedCreateNestedManyWithoutSquadInput
    institutionId: string
    homeColor?: string | null
    awayColor?: string | null
    Team?: TeamUncheckedCreateNestedManyWithoutSquadInput
    locationId?: string | null
  }

  export type SquadCreateOrConnectWithoutPlayersInput = {
    where: SquadWhereUniqueInput
    create: XOR<SquadCreateWithoutPlayersInput, SquadUncheckedCreateWithoutPlayersInput>
  }

  export type TeamCreateWithoutStartersInput = {
    id?: string
    formation: Formation
    shirtColor: string
    squad: SquadCreateNestedOneWithoutTeamInput
    Game?: GameCreateNestedOneWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutStartersInput = {
    id?: string
    formation: Formation
    shirtColor: string
    squadId: string
    gameId?: string | null
  }

  export type TeamCreateOrConnectWithoutStartersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutStartersInput, TeamUncheckedCreateWithoutStartersInput>
  }

  export type HeathRecordUpsertWithoutPlayerInput = {
    update: XOR<HeathRecordUpdateWithoutPlayerInput, HeathRecordUncheckedUpdateWithoutPlayerInput>
    create: XOR<HeathRecordCreateWithoutPlayerInput, HeathRecordUncheckedCreateWithoutPlayerInput>
  }

  export type HeathRecordUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeathRecordUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScholarshipUpsertWithWhereUniqueWithoutPlayerInput = {
    where: ScholarshipWhereUniqueInput
    update: XOR<ScholarshipUpdateWithoutPlayerInput, ScholarshipUncheckedUpdateWithoutPlayerInput>
    create: XOR<ScholarshipCreateWithoutPlayerInput, ScholarshipUncheckedCreateWithoutPlayerInput>
  }

  export type ScholarshipUpdateWithWhereUniqueWithoutPlayerInput = {
    where: ScholarshipWhereUniqueInput
    data: XOR<ScholarshipUpdateWithoutPlayerInput, ScholarshipUncheckedUpdateWithoutPlayerInput>
  }

  export type ScholarshipUpdateManyWithWhereWithoutPlayerInput = {
    where: ScholarshipScalarWhereInput
    data: XOR<ScholarshipUpdateManyMutationInput, ScholarshipUncheckedUpdateManyWithoutScholarshipInput>
  }

  export type ScholarshipScalarWhereInput = {
    AND?: Enumerable<ScholarshipScalarWhereInput>
    OR?: Enumerable<ScholarshipScalarWhereInput>
    NOT?: Enumerable<ScholarshipScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    description?: StringFilter | string
    institutionId?: StringFilter | string
    playerId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type RecruitmentUpsertWithWhereUniqueWithoutPlayerInput = {
    where: RecruitmentWhereUniqueInput
    update: XOR<RecruitmentUpdateWithoutPlayerInput, RecruitmentUncheckedUpdateWithoutPlayerInput>
    create: XOR<RecruitmentCreateWithoutPlayerInput, RecruitmentUncheckedCreateWithoutPlayerInput>
  }

  export type RecruitmentUpdateWithWhereUniqueWithoutPlayerInput = {
    where: RecruitmentWhereUniqueInput
    data: XOR<RecruitmentUpdateWithoutPlayerInput, RecruitmentUncheckedUpdateWithoutPlayerInput>
  }

  export type RecruitmentUpdateManyWithWhereWithoutPlayerInput = {
    where: RecruitmentScalarWhereInput
    data: XOR<RecruitmentUpdateManyMutationInput, RecruitmentUncheckedUpdateManyWithoutRecruitmentInput>
  }

  export type RecruitmentScalarWhereInput = {
    AND?: Enumerable<RecruitmentScalarWhereInput>
    OR?: Enumerable<RecruitmentScalarWhereInput>
    NOT?: Enumerable<RecruitmentScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    passed?: BoolFilter | boolean
    resume?: StringNullableFilter | string | null
    playerId?: StringFilter | string
    accountId?: StringFilter | string
  }

  export type GameEventUpsertWithWhereUniqueWithoutPlayerInput = {
    where: GameEventWhereUniqueInput
    update: XOR<GameEventUpdateWithoutPlayerInput, GameEventUncheckedUpdateWithoutPlayerInput>
    create: XOR<GameEventCreateWithoutPlayerInput, GameEventUncheckedCreateWithoutPlayerInput>
  }

  export type GameEventUpdateWithWhereUniqueWithoutPlayerInput = {
    where: GameEventWhereUniqueInput
    data: XOR<GameEventUpdateWithoutPlayerInput, GameEventUncheckedUpdateWithoutPlayerInput>
  }

  export type GameEventUpdateManyWithWhereWithoutPlayerInput = {
    where: GameEventScalarWhereInput
    data: XOR<GameEventUpdateManyMutationInput, GameEventUncheckedUpdateManyWithoutGameEventInput>
  }

  export type GameEventScalarWhereInput = {
    AND?: Enumerable<GameEventScalarWhereInput>
    OR?: Enumerable<GameEventScalarWhereInput>
    NOT?: Enumerable<GameEventScalarWhereInput>
    id?: StringFilter | string
    minute?: IntFilter | number
    gameId?: StringNullableFilter | string | null
    playerId?: StringFilter | string
    type?: EnumEventFilter | Event
  }

  export type InjuryUpsertWithWhereUniqueWithoutPlayerInput = {
    where: InjuryWhereUniqueInput
    update: XOR<InjuryUpdateWithoutPlayerInput, InjuryUncheckedUpdateWithoutPlayerInput>
    create: XOR<InjuryCreateWithoutPlayerInput, InjuryUncheckedCreateWithoutPlayerInput>
  }

  export type InjuryUpdateWithWhereUniqueWithoutPlayerInput = {
    where: InjuryWhereUniqueInput
    data: XOR<InjuryUpdateWithoutPlayerInput, InjuryUncheckedUpdateWithoutPlayerInput>
  }

  export type InjuryUpdateManyWithWhereWithoutPlayerInput = {
    where: InjuryScalarWhereInput
    data: XOR<InjuryUpdateManyMutationInput, InjuryUncheckedUpdateManyWithoutInjuryInput>
  }

  export type InjuryScalarWhereInput = {
    AND?: Enumerable<InjuryScalarWhereInput>
    OR?: Enumerable<InjuryScalarWhereInput>
    NOT?: Enumerable<InjuryScalarWhereInput>
    id?: StringFilter | string
    playerId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type SquadUpsertWithWhereUniqueWithoutPlayersInput = {
    where: SquadWhereUniqueInput
    update: XOR<SquadUpdateWithoutPlayersInput, SquadUncheckedUpdateWithoutPlayersInput>
    create: XOR<SquadCreateWithoutPlayersInput, SquadUncheckedCreateWithoutPlayersInput>
  }

  export type SquadUpdateWithWhereUniqueWithoutPlayersInput = {
    where: SquadWhereUniqueInput
    data: XOR<SquadUpdateWithoutPlayersInput, SquadUncheckedUpdateWithoutPlayersInput>
  }

  export type SquadUpdateManyWithWhereWithoutPlayersInput = {
    where: SquadScalarWhereInput
    data: XOR<SquadUpdateManyMutationInput, SquadUncheckedUpdateManyWithoutSquadInput>
  }

  export type SquadScalarWhereInput = {
    AND?: Enumerable<SquadScalarWhereInput>
    OR?: Enumerable<SquadScalarWhereInput>
    NOT?: Enumerable<SquadScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    institutionId?: StringFilter | string
    homeColor?: StringNullableFilter | string | null
    awayColor?: StringNullableFilter | string | null
    locationId?: StringNullableFilter | string | null
  }

  export type TeamUpsertWithWhereUniqueWithoutStartersInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutStartersInput, TeamUncheckedUpdateWithoutStartersInput>
    create: XOR<TeamCreateWithoutStartersInput, TeamUncheckedCreateWithoutStartersInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutStartersInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutStartersInput, TeamUncheckedUpdateWithoutStartersInput>
  }

  export type TeamUpdateManyWithWhereWithoutStartersInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutTeamInput>
  }

  export type TeamScalarWhereInput = {
    AND?: Enumerable<TeamScalarWhereInput>
    OR?: Enumerable<TeamScalarWhereInput>
    NOT?: Enumerable<TeamScalarWhereInput>
    id?: StringFilter | string
    formation?: EnumFormationFilter | Formation
    shirtColor?: StringFilter | string
    squadId?: StringFilter | string
    gameId?: StringNullableFilter | string | null
  }

  export type PlayerCreateWithoutTeamInput = {
    id?: string
    name: string
    dob: Date | string
    isDomestic?: boolean
    photo?: string | null
    gender: string
    position: Postion
    healthRecord?: HeathRecordCreateNestedOneWithoutPlayerInput
    phone: string
    streetAddress: string
    city: string
    province?: string
    country?: string
    postalCode: string
    scholarship?: ScholarshipCreateNestedManyWithoutPlayerInput
    recruitment?: RecruitmentCreateNestedManyWithoutPlayerInput
    GameEvent?: GameEventCreateNestedManyWithoutPlayerInput
    Injury?: InjuryCreateNestedManyWithoutPlayerInput
    Squad?: SquadCreateNestedManyWithoutPlayersInput
  }

  export type PlayerUncheckedCreateWithoutTeamInput = {
    id?: string
    name: string
    dob: Date | string
    isDomestic?: boolean
    photo?: string | null
    gender: string
    position: Postion
    heathRecordId?: string | null
    phone: string
    streetAddress: string
    city: string
    province?: string
    country?: string
    postalCode: string
    scholarship?: ScholarshipUncheckedCreateNestedManyWithoutPlayerInput
    recruitment?: RecruitmentUncheckedCreateNestedManyWithoutPlayerInput
    GameEvent?: GameEventUncheckedCreateNestedManyWithoutPlayerInput
    Injury?: InjuryUncheckedCreateNestedManyWithoutPlayerInput
    Squad?: SquadUncheckedCreateNestedManyWithoutPlayersInput
  }

  export type PlayerCreateOrConnectWithoutTeamInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput>
  }

  export type SquadCreateWithoutTeamInput = {
    id?: string
    name: string
    players?: PlayerCreateNestedManyWithoutSquadInput
    institution: InstitutionCreateNestedOneWithoutSquadInput
    staff?: StaffCreateNestedManyWithoutSquadInput
    competition?: CompetitionCreateNestedManyWithoutSquadInput
    home?: LocationCreateNestedOneWithoutSquadInput
    homeColor?: string | null
    awayColor?: string | null
  }

  export type SquadUncheckedCreateWithoutTeamInput = {
    id?: string
    name: string
    players?: PlayerUncheckedCreateNestedManyWithoutSquadInput
    staff?: StaffUncheckedCreateNestedManyWithoutSquadInput
    competition?: CompetitionUncheckedCreateNestedManyWithoutSquadInput
    institutionId: string
    homeColor?: string | null
    awayColor?: string | null
    locationId?: string | null
  }

  export type SquadCreateOrConnectWithoutTeamInput = {
    where: SquadWhereUniqueInput
    create: XOR<SquadCreateWithoutTeamInput, SquadUncheckedCreateWithoutTeamInput>
  }

  export type GameCreateWithoutTeamInput = {
    id?: string
    events?: GameEventCreateNestedManyWithoutGameInput
    competition: CompetitionCreateNestedOneWithoutGameInput
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutGameInput
    attendance: number
  }

  export type GameUncheckedCreateWithoutTeamInput = {
    id?: string
    events?: GameEventUncheckedCreateNestedManyWithoutGameInput
    updatedAt?: Date | string
    attendance: number
    locationId: string
    competitionId: string
  }

  export type GameCreateOrConnectWithoutTeamInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutTeamInput, GameUncheckedCreateWithoutTeamInput>
  }

  export type PlayerUpsertWithWhereUniqueWithoutTeamInput = {
    where: PlayerWhereUniqueInput
    update: XOR<PlayerUpdateWithoutTeamInput, PlayerUncheckedUpdateWithoutTeamInput>
    create: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput>
  }

  export type PlayerUpdateWithWhereUniqueWithoutTeamInput = {
    where: PlayerWhereUniqueInput
    data: XOR<PlayerUpdateWithoutTeamInput, PlayerUncheckedUpdateWithoutTeamInput>
  }

  export type PlayerUpdateManyWithWhereWithoutTeamInput = {
    where: PlayerScalarWhereInput
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyWithoutStartersInput>
  }

  export type PlayerScalarWhereInput = {
    AND?: Enumerable<PlayerScalarWhereInput>
    OR?: Enumerable<PlayerScalarWhereInput>
    NOT?: Enumerable<PlayerScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    dob?: DateTimeFilter | Date | string
    isDomestic?: BoolFilter | boolean
    photo?: StringNullableFilter | string | null
    gender?: StringFilter | string
    position?: EnumPostionFilter | Postion
    heathRecordId?: StringNullableFilter | string | null
    phone?: StringFilter | string
    streetAddress?: StringFilter | string
    city?: StringFilter | string
    province?: StringFilter | string
    country?: StringFilter | string
    postalCode?: StringFilter | string
  }

  export type SquadUpsertWithoutTeamInput = {
    update: XOR<SquadUpdateWithoutTeamInput, SquadUncheckedUpdateWithoutTeamInput>
    create: XOR<SquadCreateWithoutTeamInput, SquadUncheckedCreateWithoutTeamInput>
  }

  export type SquadUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    players?: PlayerUpdateManyWithoutSquadNestedInput
    institution?: InstitutionUpdateOneRequiredWithoutSquadNestedInput
    staff?: StaffUpdateManyWithoutSquadNestedInput
    competition?: CompetitionUpdateManyWithoutSquadNestedInput
    home?: LocationUpdateOneWithoutSquadNestedInput
    homeColor?: NullableStringFieldUpdateOperationsInput | string | null
    awayColor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SquadUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    players?: PlayerUncheckedUpdateManyWithoutSquadNestedInput
    staff?: StaffUncheckedUpdateManyWithoutSquadNestedInput
    competition?: CompetitionUncheckedUpdateManyWithoutSquadNestedInput
    institutionId?: StringFieldUpdateOperationsInput | string
    homeColor?: NullableStringFieldUpdateOperationsInput | string | null
    awayColor?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameUpsertWithoutTeamInput = {
    update: XOR<GameUpdateWithoutTeamInput, GameUncheckedUpdateWithoutTeamInput>
    create: XOR<GameCreateWithoutTeamInput, GameUncheckedCreateWithoutTeamInput>
  }

  export type GameUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    events?: GameEventUpdateManyWithoutGameNestedInput
    competition?: CompetitionUpdateOneRequiredWithoutGameNestedInput
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutGameNestedInput
    attendance?: IntFieldUpdateOperationsInput | number
  }

  export type GameUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    events?: GameEventUncheckedUpdateManyWithoutGameNestedInput
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: IntFieldUpdateOperationsInput | number
    locationId?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateWithoutStaffInput = {
    id?: string
    username: string
    password: string
    updatedAt?: Date | string
    createdAt?: Date | string
    recruitment?: RecruitmentCreateNestedManyWithoutRecruiterInput
  }

  export type AccountUncheckedCreateWithoutStaffInput = {
    id?: string
    username: string
    password: string
    updatedAt?: Date | string
    createdAt?: Date | string
    recruitment?: RecruitmentUncheckedCreateNestedManyWithoutRecruiterInput
  }

  export type AccountCreateOrConnectWithoutStaffInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutStaffInput, AccountUncheckedCreateWithoutStaffInput>
  }

  export type SquadCreateWithoutStaffInput = {
    id?: string
    name: string
    players?: PlayerCreateNestedManyWithoutSquadInput
    institution: InstitutionCreateNestedOneWithoutSquadInput
    competition?: CompetitionCreateNestedManyWithoutSquadInput
    home?: LocationCreateNestedOneWithoutSquadInput
    homeColor?: string | null
    awayColor?: string | null
    Team?: TeamCreateNestedManyWithoutSquadInput
  }

  export type SquadUncheckedCreateWithoutStaffInput = {
    id?: string
    name: string
    players?: PlayerUncheckedCreateNestedManyWithoutSquadInput
    competition?: CompetitionUncheckedCreateNestedManyWithoutSquadInput
    institutionId: string
    homeColor?: string | null
    awayColor?: string | null
    Team?: TeamUncheckedCreateNestedManyWithoutSquadInput
    locationId?: string | null
  }

  export type SquadCreateOrConnectWithoutStaffInput = {
    where: SquadWhereUniqueInput
    create: XOR<SquadCreateWithoutStaffInput, SquadUncheckedCreateWithoutStaffInput>
  }

  export type AccountUpsertWithoutStaffInput = {
    update: XOR<AccountUpdateWithoutStaffInput, AccountUncheckedUpdateWithoutStaffInput>
    create: XOR<AccountCreateWithoutStaffInput, AccountUncheckedCreateWithoutStaffInput>
  }

  export type AccountUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recruitment?: RecruitmentUpdateManyWithoutRecruiterNestedInput
  }

  export type AccountUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recruitment?: RecruitmentUncheckedUpdateManyWithoutRecruiterNestedInput
  }

  export type SquadUpsertWithWhereUniqueWithoutStaffInput = {
    where: SquadWhereUniqueInput
    update: XOR<SquadUpdateWithoutStaffInput, SquadUncheckedUpdateWithoutStaffInput>
    create: XOR<SquadCreateWithoutStaffInput, SquadUncheckedCreateWithoutStaffInput>
  }

  export type SquadUpdateWithWhereUniqueWithoutStaffInput = {
    where: SquadWhereUniqueInput
    data: XOR<SquadUpdateWithoutStaffInput, SquadUncheckedUpdateWithoutStaffInput>
  }

  export type SquadUpdateManyWithWhereWithoutStaffInput = {
    where: SquadScalarWhereInput
    data: XOR<SquadUpdateManyMutationInput, SquadUncheckedUpdateManyWithoutSquadInput>
  }

  export type ScholarshipCreateWithoutSponsorInput = {
    id?: string
    name: string
    description: string
    player: PlayerCreateNestedOneWithoutScholarshipInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScholarshipUncheckedCreateWithoutSponsorInput = {
    id?: string
    name: string
    description: string
    playerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScholarshipCreateOrConnectWithoutSponsorInput = {
    where: ScholarshipWhereUniqueInput
    create: XOR<ScholarshipCreateWithoutSponsorInput, ScholarshipUncheckedCreateWithoutSponsorInput>
  }

  export type ScholarshipCreateManySponsorInputEnvelope = {
    data: Enumerable<ScholarshipCreateManySponsorInput>
    skipDuplicates?: boolean
  }

  export type SquadCreateWithoutInstitutionInput = {
    id?: string
    name: string
    players?: PlayerCreateNestedManyWithoutSquadInput
    staff?: StaffCreateNestedManyWithoutSquadInput
    competition?: CompetitionCreateNestedManyWithoutSquadInput
    home?: LocationCreateNestedOneWithoutSquadInput
    homeColor?: string | null
    awayColor?: string | null
    Team?: TeamCreateNestedManyWithoutSquadInput
  }

  export type SquadUncheckedCreateWithoutInstitutionInput = {
    id?: string
    name: string
    players?: PlayerUncheckedCreateNestedManyWithoutSquadInput
    staff?: StaffUncheckedCreateNestedManyWithoutSquadInput
    competition?: CompetitionUncheckedCreateNestedManyWithoutSquadInput
    homeColor?: string | null
    awayColor?: string | null
    Team?: TeamUncheckedCreateNestedManyWithoutSquadInput
    locationId?: string | null
  }

  export type SquadCreateOrConnectWithoutInstitutionInput = {
    where: SquadWhereUniqueInput
    create: XOR<SquadCreateWithoutInstitutionInput, SquadUncheckedCreateWithoutInstitutionInput>
  }

  export type SquadCreateManyInstitutionInputEnvelope = {
    data: Enumerable<SquadCreateManyInstitutionInput>
    skipDuplicates?: boolean
  }

  export type ScholarshipUpsertWithWhereUniqueWithoutSponsorInput = {
    where: ScholarshipWhereUniqueInput
    update: XOR<ScholarshipUpdateWithoutSponsorInput, ScholarshipUncheckedUpdateWithoutSponsorInput>
    create: XOR<ScholarshipCreateWithoutSponsorInput, ScholarshipUncheckedCreateWithoutSponsorInput>
  }

  export type ScholarshipUpdateWithWhereUniqueWithoutSponsorInput = {
    where: ScholarshipWhereUniqueInput
    data: XOR<ScholarshipUpdateWithoutSponsorInput, ScholarshipUncheckedUpdateWithoutSponsorInput>
  }

  export type ScholarshipUpdateManyWithWhereWithoutSponsorInput = {
    where: ScholarshipScalarWhereInput
    data: XOR<ScholarshipUpdateManyMutationInput, ScholarshipUncheckedUpdateManyWithoutScholarshipInput>
  }

  export type SquadUpsertWithWhereUniqueWithoutInstitutionInput = {
    where: SquadWhereUniqueInput
    update: XOR<SquadUpdateWithoutInstitutionInput, SquadUncheckedUpdateWithoutInstitutionInput>
    create: XOR<SquadCreateWithoutInstitutionInput, SquadUncheckedCreateWithoutInstitutionInput>
  }

  export type SquadUpdateWithWhereUniqueWithoutInstitutionInput = {
    where: SquadWhereUniqueInput
    data: XOR<SquadUpdateWithoutInstitutionInput, SquadUncheckedUpdateWithoutInstitutionInput>
  }

  export type SquadUpdateManyWithWhereWithoutInstitutionInput = {
    where: SquadScalarWhereInput
    data: XOR<SquadUpdateManyMutationInput, SquadUncheckedUpdateManyWithoutSquadInput>
  }

  export type GameCreateWithoutLocationInput = {
    id?: string
    team?: TeamCreateNestedManyWithoutGameInput
    events?: GameEventCreateNestedManyWithoutGameInput
    competition: CompetitionCreateNestedOneWithoutGameInput
    updatedAt?: Date | string
    attendance: number
  }

  export type GameUncheckedCreateWithoutLocationInput = {
    id?: string
    team?: TeamUncheckedCreateNestedManyWithoutGameInput
    events?: GameEventUncheckedCreateNestedManyWithoutGameInput
    updatedAt?: Date | string
    attendance: number
    competitionId: string
  }

  export type GameCreateOrConnectWithoutLocationInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutLocationInput, GameUncheckedCreateWithoutLocationInput>
  }

  export type GameCreateManyLocationInputEnvelope = {
    data: Enumerable<GameCreateManyLocationInput>
    skipDuplicates?: boolean
  }

  export type SquadCreateWithoutHomeInput = {
    id?: string
    name: string
    players?: PlayerCreateNestedManyWithoutSquadInput
    institution: InstitutionCreateNestedOneWithoutSquadInput
    staff?: StaffCreateNestedManyWithoutSquadInput
    competition?: CompetitionCreateNestedManyWithoutSquadInput
    homeColor?: string | null
    awayColor?: string | null
    Team?: TeamCreateNestedManyWithoutSquadInput
  }

  export type SquadUncheckedCreateWithoutHomeInput = {
    id?: string
    name: string
    players?: PlayerUncheckedCreateNestedManyWithoutSquadInput
    staff?: StaffUncheckedCreateNestedManyWithoutSquadInput
    competition?: CompetitionUncheckedCreateNestedManyWithoutSquadInput
    institutionId: string
    homeColor?: string | null
    awayColor?: string | null
    Team?: TeamUncheckedCreateNestedManyWithoutSquadInput
  }

  export type SquadCreateOrConnectWithoutHomeInput = {
    where: SquadWhereUniqueInput
    create: XOR<SquadCreateWithoutHomeInput, SquadUncheckedCreateWithoutHomeInput>
  }

  export type SquadCreateManyHomeInputEnvelope = {
    data: Enumerable<SquadCreateManyHomeInput>
    skipDuplicates?: boolean
  }

  export type GameUpsertWithWhereUniqueWithoutLocationInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutLocationInput, GameUncheckedUpdateWithoutLocationInput>
    create: XOR<GameCreateWithoutLocationInput, GameUncheckedCreateWithoutLocationInput>
  }

  export type GameUpdateWithWhereUniqueWithoutLocationInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutLocationInput, GameUncheckedUpdateWithoutLocationInput>
  }

  export type GameUpdateManyWithWhereWithoutLocationInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutGameInput>
  }

  export type GameScalarWhereInput = {
    AND?: Enumerable<GameScalarWhereInput>
    OR?: Enumerable<GameScalarWhereInput>
    NOT?: Enumerable<GameScalarWhereInput>
    id?: StringFilter | string
    updatedAt?: DateTimeFilter | Date | string
    attendance?: IntFilter | number
    locationId?: StringFilter | string
    competitionId?: StringFilter | string
  }

  export type SquadUpsertWithWhereUniqueWithoutHomeInput = {
    where: SquadWhereUniqueInput
    update: XOR<SquadUpdateWithoutHomeInput, SquadUncheckedUpdateWithoutHomeInput>
    create: XOR<SquadCreateWithoutHomeInput, SquadUncheckedCreateWithoutHomeInput>
  }

  export type SquadUpdateWithWhereUniqueWithoutHomeInput = {
    where: SquadWhereUniqueInput
    data: XOR<SquadUpdateWithoutHomeInput, SquadUncheckedUpdateWithoutHomeInput>
  }

  export type SquadUpdateManyWithWhereWithoutHomeInput = {
    where: SquadScalarWhereInput
    data: XOR<SquadUpdateManyMutationInput, SquadUncheckedUpdateManyWithoutSquadInput>
  }

  export type PlayerCreateWithoutSquadInput = {
    id?: string
    name: string
    dob: Date | string
    isDomestic?: boolean
    photo?: string | null
    gender: string
    position: Postion
    healthRecord?: HeathRecordCreateNestedOneWithoutPlayerInput
    phone: string
    streetAddress: string
    city: string
    province?: string
    country?: string
    postalCode: string
    scholarship?: ScholarshipCreateNestedManyWithoutPlayerInput
    recruitment?: RecruitmentCreateNestedManyWithoutPlayerInput
    GameEvent?: GameEventCreateNestedManyWithoutPlayerInput
    Injury?: InjuryCreateNestedManyWithoutPlayerInput
    Team?: TeamCreateNestedManyWithoutStartersInput
  }

  export type PlayerUncheckedCreateWithoutSquadInput = {
    id?: string
    name: string
    dob: Date | string
    isDomestic?: boolean
    photo?: string | null
    gender: string
    position: Postion
    heathRecordId?: string | null
    phone: string
    streetAddress: string
    city: string
    province?: string
    country?: string
    postalCode: string
    scholarship?: ScholarshipUncheckedCreateNestedManyWithoutPlayerInput
    recruitment?: RecruitmentUncheckedCreateNestedManyWithoutPlayerInput
    GameEvent?: GameEventUncheckedCreateNestedManyWithoutPlayerInput
    Injury?: InjuryUncheckedCreateNestedManyWithoutPlayerInput
    Team?: TeamUncheckedCreateNestedManyWithoutStartersInput
  }

  export type PlayerCreateOrConnectWithoutSquadInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutSquadInput, PlayerUncheckedCreateWithoutSquadInput>
  }

  export type InstitutionCreateWithoutSquadInput = {
    id?: string
    name: string
    address: string
    city: string
    province?: string
    postal_code: string
    category: InstitutionCategory
    scholarship?: ScholarshipCreateNestedManyWithoutSponsorInput
  }

  export type InstitutionUncheckedCreateWithoutSquadInput = {
    id?: string
    name: string
    address: string
    city: string
    province?: string
    postal_code: string
    category: InstitutionCategory
    scholarship?: ScholarshipUncheckedCreateNestedManyWithoutSponsorInput
  }

  export type InstitutionCreateOrConnectWithoutSquadInput = {
    where: InstitutionWhereUniqueInput
    create: XOR<InstitutionCreateWithoutSquadInput, InstitutionUncheckedCreateWithoutSquadInput>
  }

  export type StaffCreateWithoutSquadInput = {
    id?: string
    name: string
    dob: Date | string
    phone: string
    role: Role
    streetAddress: string
    city: string
    country?: string
    postalCode: string
    account?: AccountCreateNestedOneWithoutStaffInput
  }

  export type StaffUncheckedCreateWithoutSquadInput = {
    id?: string
    name: string
    dob: Date | string
    phone: string
    role: Role
    streetAddress: string
    city: string
    country?: string
    postalCode: string
    accountId?: string | null
  }

  export type StaffCreateOrConnectWithoutSquadInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutSquadInput, StaffUncheckedCreateWithoutSquadInput>
  }

  export type CompetitionCreateWithoutSquadInput = {
    id?: string
    name: string
    sponsor: string
    type?: CompetitionType
    season: SeasonCreateNestedOneWithoutCompetitionInput
    Game?: GameCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUncheckedCreateWithoutSquadInput = {
    id?: string
    name: string
    sponsor: string
    type?: CompetitionType
    seasonId: string
    Game?: GameUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionCreateOrConnectWithoutSquadInput = {
    where: CompetitionWhereUniqueInput
    create: XOR<CompetitionCreateWithoutSquadInput, CompetitionUncheckedCreateWithoutSquadInput>
  }

  export type LocationCreateWithoutSquadInput = {
    id?: string
    name: string
    category: LocationCategory
    streetAddress: string
    city: string
    province?: string
    country?: string
    postalCode: string
    game?: GameCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutSquadInput = {
    id?: string
    name: string
    category: LocationCategory
    streetAddress: string
    city: string
    province?: string
    country?: string
    postalCode: string
    game?: GameUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutSquadInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutSquadInput, LocationUncheckedCreateWithoutSquadInput>
  }

  export type TeamCreateWithoutSquadInput = {
    id?: string
    starters?: PlayerCreateNestedManyWithoutTeamInput
    formation: Formation
    shirtColor: string
    Game?: GameCreateNestedOneWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutSquadInput = {
    id?: string
    starters?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    formation: Formation
    shirtColor: string
    gameId?: string | null
  }

  export type TeamCreateOrConnectWithoutSquadInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutSquadInput, TeamUncheckedCreateWithoutSquadInput>
  }

  export type TeamCreateManySquadInputEnvelope = {
    data: Enumerable<TeamCreateManySquadInput>
    skipDuplicates?: boolean
  }

  export type PlayerUpsertWithWhereUniqueWithoutSquadInput = {
    where: PlayerWhereUniqueInput
    update: XOR<PlayerUpdateWithoutSquadInput, PlayerUncheckedUpdateWithoutSquadInput>
    create: XOR<PlayerCreateWithoutSquadInput, PlayerUncheckedCreateWithoutSquadInput>
  }

  export type PlayerUpdateWithWhereUniqueWithoutSquadInput = {
    where: PlayerWhereUniqueInput
    data: XOR<PlayerUpdateWithoutSquadInput, PlayerUncheckedUpdateWithoutSquadInput>
  }

  export type PlayerUpdateManyWithWhereWithoutSquadInput = {
    where: PlayerScalarWhereInput
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyWithoutPlayersInput>
  }

  export type InstitutionUpsertWithoutSquadInput = {
    update: XOR<InstitutionUpdateWithoutSquadInput, InstitutionUncheckedUpdateWithoutSquadInput>
    create: XOR<InstitutionCreateWithoutSquadInput, InstitutionUncheckedCreateWithoutSquadInput>
  }

  export type InstitutionUpdateWithoutSquadInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    category?: EnumInstitutionCategoryFieldUpdateOperationsInput | InstitutionCategory
    scholarship?: ScholarshipUpdateManyWithoutSponsorNestedInput
  }

  export type InstitutionUncheckedUpdateWithoutSquadInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    category?: EnumInstitutionCategoryFieldUpdateOperationsInput | InstitutionCategory
    scholarship?: ScholarshipUncheckedUpdateManyWithoutSponsorNestedInput
  }

  export type StaffUpsertWithWhereUniqueWithoutSquadInput = {
    where: StaffWhereUniqueInput
    update: XOR<StaffUpdateWithoutSquadInput, StaffUncheckedUpdateWithoutSquadInput>
    create: XOR<StaffCreateWithoutSquadInput, StaffUncheckedCreateWithoutSquadInput>
  }

  export type StaffUpdateWithWhereUniqueWithoutSquadInput = {
    where: StaffWhereUniqueInput
    data: XOR<StaffUpdateWithoutSquadInput, StaffUncheckedUpdateWithoutSquadInput>
  }

  export type StaffUpdateManyWithWhereWithoutSquadInput = {
    where: StaffScalarWhereInput
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyWithoutStaffInput>
  }

  export type StaffScalarWhereInput = {
    AND?: Enumerable<StaffScalarWhereInput>
    OR?: Enumerable<StaffScalarWhereInput>
    NOT?: Enumerable<StaffScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    dob?: DateTimeFilter | Date | string
    phone?: StringFilter | string
    role?: EnumRoleFilter | Role
    streetAddress?: StringFilter | string
    city?: StringFilter | string
    country?: StringFilter | string
    postalCode?: StringFilter | string
    accountId?: StringNullableFilter | string | null
  }

  export type CompetitionUpsertWithWhereUniqueWithoutSquadInput = {
    where: CompetitionWhereUniqueInput
    update: XOR<CompetitionUpdateWithoutSquadInput, CompetitionUncheckedUpdateWithoutSquadInput>
    create: XOR<CompetitionCreateWithoutSquadInput, CompetitionUncheckedCreateWithoutSquadInput>
  }

  export type CompetitionUpdateWithWhereUniqueWithoutSquadInput = {
    where: CompetitionWhereUniqueInput
    data: XOR<CompetitionUpdateWithoutSquadInput, CompetitionUncheckedUpdateWithoutSquadInput>
  }

  export type CompetitionUpdateManyWithWhereWithoutSquadInput = {
    where: CompetitionScalarWhereInput
    data: XOR<CompetitionUpdateManyMutationInput, CompetitionUncheckedUpdateManyWithoutCompetitionInput>
  }

  export type CompetitionScalarWhereInput = {
    AND?: Enumerable<CompetitionScalarWhereInput>
    OR?: Enumerable<CompetitionScalarWhereInput>
    NOT?: Enumerable<CompetitionScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    sponsor?: StringFilter | string
    type?: EnumCompetitionTypeFilter | CompetitionType
    seasonId?: StringFilter | string
  }

  export type LocationUpsertWithoutSquadInput = {
    update: XOR<LocationUpdateWithoutSquadInput, LocationUncheckedUpdateWithoutSquadInput>
    create: XOR<LocationCreateWithoutSquadInput, LocationUncheckedCreateWithoutSquadInput>
  }

  export type LocationUpdateWithoutSquadInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumLocationCategoryFieldUpdateOperationsInput | LocationCategory
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    game?: GameUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutSquadInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumLocationCategoryFieldUpdateOperationsInput | LocationCategory
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    game?: GameUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type TeamUpsertWithWhereUniqueWithoutSquadInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutSquadInput, TeamUncheckedUpdateWithoutSquadInput>
    create: XOR<TeamCreateWithoutSquadInput, TeamUncheckedCreateWithoutSquadInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutSquadInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutSquadInput, TeamUncheckedUpdateWithoutSquadInput>
  }

  export type TeamUpdateManyWithWhereWithoutSquadInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutTeamInput>
  }

  export type SeasonCreateWithoutCompetitionInput = {
    id?: string
    startDate?: Date | string
    endDate: Date | string
  }

  export type SeasonUncheckedCreateWithoutCompetitionInput = {
    id?: string
    startDate?: Date | string
    endDate: Date | string
  }

  export type SeasonCreateOrConnectWithoutCompetitionInput = {
    where: SeasonWhereUniqueInput
    create: XOR<SeasonCreateWithoutCompetitionInput, SeasonUncheckedCreateWithoutCompetitionInput>
  }

  export type SquadCreateWithoutCompetitionInput = {
    id?: string
    name: string
    players?: PlayerCreateNestedManyWithoutSquadInput
    institution: InstitutionCreateNestedOneWithoutSquadInput
    staff?: StaffCreateNestedManyWithoutSquadInput
    home?: LocationCreateNestedOneWithoutSquadInput
    homeColor?: string | null
    awayColor?: string | null
    Team?: TeamCreateNestedManyWithoutSquadInput
  }

  export type SquadUncheckedCreateWithoutCompetitionInput = {
    id?: string
    name: string
    players?: PlayerUncheckedCreateNestedManyWithoutSquadInput
    staff?: StaffUncheckedCreateNestedManyWithoutSquadInput
    institutionId: string
    homeColor?: string | null
    awayColor?: string | null
    Team?: TeamUncheckedCreateNestedManyWithoutSquadInput
    locationId?: string | null
  }

  export type SquadCreateOrConnectWithoutCompetitionInput = {
    where: SquadWhereUniqueInput
    create: XOR<SquadCreateWithoutCompetitionInput, SquadUncheckedCreateWithoutCompetitionInput>
  }

  export type GameCreateWithoutCompetitionInput = {
    id?: string
    team?: TeamCreateNestedManyWithoutGameInput
    events?: GameEventCreateNestedManyWithoutGameInput
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutGameInput
    attendance: number
  }

  export type GameUncheckedCreateWithoutCompetitionInput = {
    id?: string
    team?: TeamUncheckedCreateNestedManyWithoutGameInput
    events?: GameEventUncheckedCreateNestedManyWithoutGameInput
    updatedAt?: Date | string
    attendance: number
    locationId: string
  }

  export type GameCreateOrConnectWithoutCompetitionInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutCompetitionInput, GameUncheckedCreateWithoutCompetitionInput>
  }

  export type GameCreateManyCompetitionInputEnvelope = {
    data: Enumerable<GameCreateManyCompetitionInput>
    skipDuplicates?: boolean
  }

  export type SeasonUpsertWithoutCompetitionInput = {
    update: XOR<SeasonUpdateWithoutCompetitionInput, SeasonUncheckedUpdateWithoutCompetitionInput>
    create: XOR<SeasonCreateWithoutCompetitionInput, SeasonUncheckedCreateWithoutCompetitionInput>
  }

  export type SeasonUpdateWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeasonUncheckedUpdateWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SquadUpsertWithWhereUniqueWithoutCompetitionInput = {
    where: SquadWhereUniqueInput
    update: XOR<SquadUpdateWithoutCompetitionInput, SquadUncheckedUpdateWithoutCompetitionInput>
    create: XOR<SquadCreateWithoutCompetitionInput, SquadUncheckedCreateWithoutCompetitionInput>
  }

  export type SquadUpdateWithWhereUniqueWithoutCompetitionInput = {
    where: SquadWhereUniqueInput
    data: XOR<SquadUpdateWithoutCompetitionInput, SquadUncheckedUpdateWithoutCompetitionInput>
  }

  export type SquadUpdateManyWithWhereWithoutCompetitionInput = {
    where: SquadScalarWhereInput
    data: XOR<SquadUpdateManyMutationInput, SquadUncheckedUpdateManyWithoutSquadInput>
  }

  export type GameUpsertWithWhereUniqueWithoutCompetitionInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutCompetitionInput, GameUncheckedUpdateWithoutCompetitionInput>
    create: XOR<GameCreateWithoutCompetitionInput, GameUncheckedCreateWithoutCompetitionInput>
  }

  export type GameUpdateWithWhereUniqueWithoutCompetitionInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutCompetitionInput, GameUncheckedUpdateWithoutCompetitionInput>
  }

  export type GameUpdateManyWithWhereWithoutCompetitionInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutGameInput>
  }

  export type CompetitionCreateWithoutSeasonInput = {
    id?: string
    name: string
    sponsor: string
    type?: CompetitionType
    Squad?: SquadCreateNestedManyWithoutCompetitionInput
    Game?: GameCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUncheckedCreateWithoutSeasonInput = {
    id?: string
    name: string
    sponsor: string
    type?: CompetitionType
    Squad?: SquadUncheckedCreateNestedManyWithoutCompetitionInput
    Game?: GameUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionCreateOrConnectWithoutSeasonInput = {
    where: CompetitionWhereUniqueInput
    create: XOR<CompetitionCreateWithoutSeasonInput, CompetitionUncheckedCreateWithoutSeasonInput>
  }

  export type CompetitionCreateManySeasonInputEnvelope = {
    data: Enumerable<CompetitionCreateManySeasonInput>
    skipDuplicates?: boolean
  }

  export type CompetitionUpsertWithWhereUniqueWithoutSeasonInput = {
    where: CompetitionWhereUniqueInput
    update: XOR<CompetitionUpdateWithoutSeasonInput, CompetitionUncheckedUpdateWithoutSeasonInput>
    create: XOR<CompetitionCreateWithoutSeasonInput, CompetitionUncheckedCreateWithoutSeasonInput>
  }

  export type CompetitionUpdateWithWhereUniqueWithoutSeasonInput = {
    where: CompetitionWhereUniqueInput
    data: XOR<CompetitionUpdateWithoutSeasonInput, CompetitionUncheckedUpdateWithoutSeasonInput>
  }

  export type CompetitionUpdateManyWithWhereWithoutSeasonInput = {
    where: CompetitionScalarWhereInput
    data: XOR<CompetitionUpdateManyMutationInput, CompetitionUncheckedUpdateManyWithoutCompetitionInput>
  }

  export type PlayerCreateWithoutHealthRecordInput = {
    id?: string
    name: string
    dob: Date | string
    isDomestic?: boolean
    photo?: string | null
    gender: string
    position: Postion
    phone: string
    streetAddress: string
    city: string
    province?: string
    country?: string
    postalCode: string
    scholarship?: ScholarshipCreateNestedManyWithoutPlayerInput
    recruitment?: RecruitmentCreateNestedManyWithoutPlayerInput
    GameEvent?: GameEventCreateNestedManyWithoutPlayerInput
    Injury?: InjuryCreateNestedManyWithoutPlayerInput
    Squad?: SquadCreateNestedManyWithoutPlayersInput
    Team?: TeamCreateNestedManyWithoutStartersInput
  }

  export type PlayerUncheckedCreateWithoutHealthRecordInput = {
    id?: string
    name: string
    dob: Date | string
    isDomestic?: boolean
    photo?: string | null
    gender: string
    position: Postion
    phone: string
    streetAddress: string
    city: string
    province?: string
    country?: string
    postalCode: string
    scholarship?: ScholarshipUncheckedCreateNestedManyWithoutPlayerInput
    recruitment?: RecruitmentUncheckedCreateNestedManyWithoutPlayerInput
    GameEvent?: GameEventUncheckedCreateNestedManyWithoutPlayerInput
    Injury?: InjuryUncheckedCreateNestedManyWithoutPlayerInput
    Squad?: SquadUncheckedCreateNestedManyWithoutPlayersInput
    Team?: TeamUncheckedCreateNestedManyWithoutStartersInput
  }

  export type PlayerCreateOrConnectWithoutHealthRecordInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutHealthRecordInput, PlayerUncheckedCreateWithoutHealthRecordInput>
  }

  export type PlayerUpsertWithoutHealthRecordInput = {
    update: XOR<PlayerUpdateWithoutHealthRecordInput, PlayerUncheckedUpdateWithoutHealthRecordInput>
    create: XOR<PlayerCreateWithoutHealthRecordInput, PlayerUncheckedCreateWithoutHealthRecordInput>
  }

  export type PlayerUpdateWithoutHealthRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    isDomestic?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    position?: EnumPostionFieldUpdateOperationsInput | Postion
    phone?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    scholarship?: ScholarshipUpdateManyWithoutPlayerNestedInput
    recruitment?: RecruitmentUpdateManyWithoutPlayerNestedInput
    GameEvent?: GameEventUpdateManyWithoutPlayerNestedInput
    Injury?: InjuryUpdateManyWithoutPlayerNestedInput
    Squad?: SquadUpdateManyWithoutPlayersNestedInput
    Team?: TeamUpdateManyWithoutStartersNestedInput
  }

  export type PlayerUncheckedUpdateWithoutHealthRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    isDomestic?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    position?: EnumPostionFieldUpdateOperationsInput | Postion
    phone?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    scholarship?: ScholarshipUncheckedUpdateManyWithoutPlayerNestedInput
    recruitment?: RecruitmentUncheckedUpdateManyWithoutPlayerNestedInput
    GameEvent?: GameEventUncheckedUpdateManyWithoutPlayerNestedInput
    Injury?: InjuryUncheckedUpdateManyWithoutPlayerNestedInput
    Squad?: SquadUncheckedUpdateManyWithoutPlayersNestedInput
    Team?: TeamUncheckedUpdateManyWithoutStartersNestedInput
  }

  export type TeamCreateWithoutGameInput = {
    id?: string
    starters?: PlayerCreateNestedManyWithoutTeamInput
    formation: Formation
    shirtColor: string
    squad: SquadCreateNestedOneWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutGameInput = {
    id?: string
    starters?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    formation: Formation
    shirtColor: string
    squadId: string
  }

  export type TeamCreateOrConnectWithoutGameInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutGameInput, TeamUncheckedCreateWithoutGameInput>
  }

  export type TeamCreateManyGameInputEnvelope = {
    data: Enumerable<TeamCreateManyGameInput>
    skipDuplicates?: boolean
  }

  export type GameEventCreateWithoutGameInput = {
    id?: string
    player: PlayerCreateNestedOneWithoutGameEventInput
    minute: number
    type: Event
  }

  export type GameEventUncheckedCreateWithoutGameInput = {
    id?: string
    minute: number
    playerId: string
    type: Event
  }

  export type GameEventCreateOrConnectWithoutGameInput = {
    where: GameEventWhereUniqueInput
    create: XOR<GameEventCreateWithoutGameInput, GameEventUncheckedCreateWithoutGameInput>
  }

  export type GameEventCreateManyGameInputEnvelope = {
    data: Enumerable<GameEventCreateManyGameInput>
    skipDuplicates?: boolean
  }

  export type CompetitionCreateWithoutGameInput = {
    id?: string
    name: string
    sponsor: string
    type?: CompetitionType
    season: SeasonCreateNestedOneWithoutCompetitionInput
    Squad?: SquadCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUncheckedCreateWithoutGameInput = {
    id?: string
    name: string
    sponsor: string
    type?: CompetitionType
    seasonId: string
    Squad?: SquadUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionCreateOrConnectWithoutGameInput = {
    where: CompetitionWhereUniqueInput
    create: XOR<CompetitionCreateWithoutGameInput, CompetitionUncheckedCreateWithoutGameInput>
  }

  export type LocationCreateWithoutGameInput = {
    id?: string
    name: string
    category: LocationCategory
    streetAddress: string
    city: string
    province?: string
    country?: string
    postalCode: string
    Squad?: SquadCreateNestedManyWithoutHomeInput
  }

  export type LocationUncheckedCreateWithoutGameInput = {
    id?: string
    name: string
    category: LocationCategory
    streetAddress: string
    city: string
    province?: string
    country?: string
    postalCode: string
    Squad?: SquadUncheckedCreateNestedManyWithoutHomeInput
  }

  export type LocationCreateOrConnectWithoutGameInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutGameInput, LocationUncheckedCreateWithoutGameInput>
  }

  export type TeamUpsertWithWhereUniqueWithoutGameInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutGameInput, TeamUncheckedUpdateWithoutGameInput>
    create: XOR<TeamCreateWithoutGameInput, TeamUncheckedCreateWithoutGameInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutGameInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutGameInput, TeamUncheckedUpdateWithoutGameInput>
  }

  export type TeamUpdateManyWithWhereWithoutGameInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutTeamInput>
  }

  export type GameEventUpsertWithWhereUniqueWithoutGameInput = {
    where: GameEventWhereUniqueInput
    update: XOR<GameEventUpdateWithoutGameInput, GameEventUncheckedUpdateWithoutGameInput>
    create: XOR<GameEventCreateWithoutGameInput, GameEventUncheckedCreateWithoutGameInput>
  }

  export type GameEventUpdateWithWhereUniqueWithoutGameInput = {
    where: GameEventWhereUniqueInput
    data: XOR<GameEventUpdateWithoutGameInput, GameEventUncheckedUpdateWithoutGameInput>
  }

  export type GameEventUpdateManyWithWhereWithoutGameInput = {
    where: GameEventScalarWhereInput
    data: XOR<GameEventUpdateManyMutationInput, GameEventUncheckedUpdateManyWithoutEventsInput>
  }

  export type CompetitionUpsertWithoutGameInput = {
    update: XOR<CompetitionUpdateWithoutGameInput, CompetitionUncheckedUpdateWithoutGameInput>
    create: XOR<CompetitionCreateWithoutGameInput, CompetitionUncheckedCreateWithoutGameInput>
  }

  export type CompetitionUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sponsor?: StringFieldUpdateOperationsInput | string
    type?: EnumCompetitionTypeFieldUpdateOperationsInput | CompetitionType
    season?: SeasonUpdateOneRequiredWithoutCompetitionNestedInput
    Squad?: SquadUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sponsor?: StringFieldUpdateOperationsInput | string
    type?: EnumCompetitionTypeFieldUpdateOperationsInput | CompetitionType
    seasonId?: StringFieldUpdateOperationsInput | string
    Squad?: SquadUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type LocationUpsertWithoutGameInput = {
    update: XOR<LocationUpdateWithoutGameInput, LocationUncheckedUpdateWithoutGameInput>
    create: XOR<LocationCreateWithoutGameInput, LocationUncheckedCreateWithoutGameInput>
  }

  export type LocationUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumLocationCategoryFieldUpdateOperationsInput | LocationCategory
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    Squad?: SquadUpdateManyWithoutHomeNestedInput
  }

  export type LocationUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumLocationCategoryFieldUpdateOperationsInput | LocationCategory
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    Squad?: SquadUncheckedUpdateManyWithoutHomeNestedInput
  }

  export type PlayerCreateWithoutGameEventInput = {
    id?: string
    name: string
    dob: Date | string
    isDomestic?: boolean
    photo?: string | null
    gender: string
    position: Postion
    healthRecord?: HeathRecordCreateNestedOneWithoutPlayerInput
    phone: string
    streetAddress: string
    city: string
    province?: string
    country?: string
    postalCode: string
    scholarship?: ScholarshipCreateNestedManyWithoutPlayerInput
    recruitment?: RecruitmentCreateNestedManyWithoutPlayerInput
    Injury?: InjuryCreateNestedManyWithoutPlayerInput
    Squad?: SquadCreateNestedManyWithoutPlayersInput
    Team?: TeamCreateNestedManyWithoutStartersInput
  }

  export type PlayerUncheckedCreateWithoutGameEventInput = {
    id?: string
    name: string
    dob: Date | string
    isDomestic?: boolean
    photo?: string | null
    gender: string
    position: Postion
    heathRecordId?: string | null
    phone: string
    streetAddress: string
    city: string
    province?: string
    country?: string
    postalCode: string
    scholarship?: ScholarshipUncheckedCreateNestedManyWithoutPlayerInput
    recruitment?: RecruitmentUncheckedCreateNestedManyWithoutPlayerInput
    Injury?: InjuryUncheckedCreateNestedManyWithoutPlayerInput
    Squad?: SquadUncheckedCreateNestedManyWithoutPlayersInput
    Team?: TeamUncheckedCreateNestedManyWithoutStartersInput
  }

  export type PlayerCreateOrConnectWithoutGameEventInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutGameEventInput, PlayerUncheckedCreateWithoutGameEventInput>
  }

  export type GameCreateWithoutEventsInput = {
    id?: string
    team?: TeamCreateNestedManyWithoutGameInput
    competition: CompetitionCreateNestedOneWithoutGameInput
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutGameInput
    attendance: number
  }

  export type GameUncheckedCreateWithoutEventsInput = {
    id?: string
    team?: TeamUncheckedCreateNestedManyWithoutGameInput
    updatedAt?: Date | string
    attendance: number
    locationId: string
    competitionId: string
  }

  export type GameCreateOrConnectWithoutEventsInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutEventsInput, GameUncheckedCreateWithoutEventsInput>
  }

  export type PlayerUpsertWithoutGameEventInput = {
    update: XOR<PlayerUpdateWithoutGameEventInput, PlayerUncheckedUpdateWithoutGameEventInput>
    create: XOR<PlayerCreateWithoutGameEventInput, PlayerUncheckedCreateWithoutGameEventInput>
  }

  export type PlayerUpdateWithoutGameEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    isDomestic?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    position?: EnumPostionFieldUpdateOperationsInput | Postion
    healthRecord?: HeathRecordUpdateOneWithoutPlayerNestedInput
    phone?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    scholarship?: ScholarshipUpdateManyWithoutPlayerNestedInput
    recruitment?: RecruitmentUpdateManyWithoutPlayerNestedInput
    Injury?: InjuryUpdateManyWithoutPlayerNestedInput
    Squad?: SquadUpdateManyWithoutPlayersNestedInput
    Team?: TeamUpdateManyWithoutStartersNestedInput
  }

  export type PlayerUncheckedUpdateWithoutGameEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    isDomestic?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    position?: EnumPostionFieldUpdateOperationsInput | Postion
    heathRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    scholarship?: ScholarshipUncheckedUpdateManyWithoutPlayerNestedInput
    recruitment?: RecruitmentUncheckedUpdateManyWithoutPlayerNestedInput
    Injury?: InjuryUncheckedUpdateManyWithoutPlayerNestedInput
    Squad?: SquadUncheckedUpdateManyWithoutPlayersNestedInput
    Team?: TeamUncheckedUpdateManyWithoutStartersNestedInput
  }

  export type GameUpsertWithoutEventsInput = {
    update: XOR<GameUpdateWithoutEventsInput, GameUncheckedUpdateWithoutEventsInput>
    create: XOR<GameCreateWithoutEventsInput, GameUncheckedCreateWithoutEventsInput>
  }

  export type GameUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    team?: TeamUpdateManyWithoutGameNestedInput
    competition?: CompetitionUpdateOneRequiredWithoutGameNestedInput
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutGameNestedInput
    attendance?: IntFieldUpdateOperationsInput | number
  }

  export type GameUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    team?: TeamUncheckedUpdateManyWithoutGameNestedInput
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: IntFieldUpdateOperationsInput | number
    locationId?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
  }

  export type InstitutionCreateWithoutScholarshipInput = {
    id?: string
    name: string
    address: string
    city: string
    province?: string
    postal_code: string
    category: InstitutionCategory
    Squad?: SquadCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUncheckedCreateWithoutScholarshipInput = {
    id?: string
    name: string
    address: string
    city: string
    province?: string
    postal_code: string
    category: InstitutionCategory
    Squad?: SquadUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionCreateOrConnectWithoutScholarshipInput = {
    where: InstitutionWhereUniqueInput
    create: XOR<InstitutionCreateWithoutScholarshipInput, InstitutionUncheckedCreateWithoutScholarshipInput>
  }

  export type PlayerCreateWithoutScholarshipInput = {
    id?: string
    name: string
    dob: Date | string
    isDomestic?: boolean
    photo?: string | null
    gender: string
    position: Postion
    healthRecord?: HeathRecordCreateNestedOneWithoutPlayerInput
    phone: string
    streetAddress: string
    city: string
    province?: string
    country?: string
    postalCode: string
    recruitment?: RecruitmentCreateNestedManyWithoutPlayerInput
    GameEvent?: GameEventCreateNestedManyWithoutPlayerInput
    Injury?: InjuryCreateNestedManyWithoutPlayerInput
    Squad?: SquadCreateNestedManyWithoutPlayersInput
    Team?: TeamCreateNestedManyWithoutStartersInput
  }

  export type PlayerUncheckedCreateWithoutScholarshipInput = {
    id?: string
    name: string
    dob: Date | string
    isDomestic?: boolean
    photo?: string | null
    gender: string
    position: Postion
    heathRecordId?: string | null
    phone: string
    streetAddress: string
    city: string
    province?: string
    country?: string
    postalCode: string
    recruitment?: RecruitmentUncheckedCreateNestedManyWithoutPlayerInput
    GameEvent?: GameEventUncheckedCreateNestedManyWithoutPlayerInput
    Injury?: InjuryUncheckedCreateNestedManyWithoutPlayerInput
    Squad?: SquadUncheckedCreateNestedManyWithoutPlayersInput
    Team?: TeamUncheckedCreateNestedManyWithoutStartersInput
  }

  export type PlayerCreateOrConnectWithoutScholarshipInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutScholarshipInput, PlayerUncheckedCreateWithoutScholarshipInput>
  }

  export type InstitutionUpsertWithoutScholarshipInput = {
    update: XOR<InstitutionUpdateWithoutScholarshipInput, InstitutionUncheckedUpdateWithoutScholarshipInput>
    create: XOR<InstitutionCreateWithoutScholarshipInput, InstitutionUncheckedCreateWithoutScholarshipInput>
  }

  export type InstitutionUpdateWithoutScholarshipInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    category?: EnumInstitutionCategoryFieldUpdateOperationsInput | InstitutionCategory
    Squad?: SquadUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionUncheckedUpdateWithoutScholarshipInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    category?: EnumInstitutionCategoryFieldUpdateOperationsInput | InstitutionCategory
    Squad?: SquadUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type PlayerUpsertWithoutScholarshipInput = {
    update: XOR<PlayerUpdateWithoutScholarshipInput, PlayerUncheckedUpdateWithoutScholarshipInput>
    create: XOR<PlayerCreateWithoutScholarshipInput, PlayerUncheckedCreateWithoutScholarshipInput>
  }

  export type PlayerUpdateWithoutScholarshipInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    isDomestic?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    position?: EnumPostionFieldUpdateOperationsInput | Postion
    healthRecord?: HeathRecordUpdateOneWithoutPlayerNestedInput
    phone?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    recruitment?: RecruitmentUpdateManyWithoutPlayerNestedInput
    GameEvent?: GameEventUpdateManyWithoutPlayerNestedInput
    Injury?: InjuryUpdateManyWithoutPlayerNestedInput
    Squad?: SquadUpdateManyWithoutPlayersNestedInput
    Team?: TeamUpdateManyWithoutStartersNestedInput
  }

  export type PlayerUncheckedUpdateWithoutScholarshipInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    isDomestic?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    position?: EnumPostionFieldUpdateOperationsInput | Postion
    heathRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    recruitment?: RecruitmentUncheckedUpdateManyWithoutPlayerNestedInput
    GameEvent?: GameEventUncheckedUpdateManyWithoutPlayerNestedInput
    Injury?: InjuryUncheckedUpdateManyWithoutPlayerNestedInput
    Squad?: SquadUncheckedUpdateManyWithoutPlayersNestedInput
    Team?: TeamUncheckedUpdateManyWithoutStartersNestedInput
  }

  export type RecruitmentCreateWithoutRecruiterInput = {
    id?: string
    player: PlayerCreateNestedOneWithoutRecruitmentInput
    createdAt?: Date | string
    updatedAt?: Date | string
    passed?: boolean
    interviews?: InterviewCreateNestedManyWithoutRecruitmentInput
    resume?: string | null
  }

  export type RecruitmentUncheckedCreateWithoutRecruiterInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passed?: boolean
    interviews?: InterviewUncheckedCreateNestedManyWithoutRecruitmentInput
    resume?: string | null
    playerId: string
  }

  export type RecruitmentCreateOrConnectWithoutRecruiterInput = {
    where: RecruitmentWhereUniqueInput
    create: XOR<RecruitmentCreateWithoutRecruiterInput, RecruitmentUncheckedCreateWithoutRecruiterInput>
  }

  export type RecruitmentCreateManyRecruiterInputEnvelope = {
    data: Enumerable<RecruitmentCreateManyRecruiterInput>
    skipDuplicates?: boolean
  }

  export type StaffCreateWithoutAccountInput = {
    id?: string
    name: string
    dob: Date | string
    phone: string
    role: Role
    streetAddress: string
    city: string
    country?: string
    postalCode: string
    Squad?: SquadCreateNestedManyWithoutStaffInput
  }

  export type StaffUncheckedCreateWithoutAccountInput = {
    id?: string
    name: string
    dob: Date | string
    phone: string
    role: Role
    streetAddress: string
    city: string
    country?: string
    postalCode: string
    Squad?: SquadUncheckedCreateNestedManyWithoutStaffInput
  }

  export type StaffCreateOrConnectWithoutAccountInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutAccountInput, StaffUncheckedCreateWithoutAccountInput>
  }

  export type StaffCreateManyAccountInputEnvelope = {
    data: Enumerable<StaffCreateManyAccountInput>
    skipDuplicates?: boolean
  }

  export type RecruitmentUpsertWithWhereUniqueWithoutRecruiterInput = {
    where: RecruitmentWhereUniqueInput
    update: XOR<RecruitmentUpdateWithoutRecruiterInput, RecruitmentUncheckedUpdateWithoutRecruiterInput>
    create: XOR<RecruitmentCreateWithoutRecruiterInput, RecruitmentUncheckedCreateWithoutRecruiterInput>
  }

  export type RecruitmentUpdateWithWhereUniqueWithoutRecruiterInput = {
    where: RecruitmentWhereUniqueInput
    data: XOR<RecruitmentUpdateWithoutRecruiterInput, RecruitmentUncheckedUpdateWithoutRecruiterInput>
  }

  export type RecruitmentUpdateManyWithWhereWithoutRecruiterInput = {
    where: RecruitmentScalarWhereInput
    data: XOR<RecruitmentUpdateManyMutationInput, RecruitmentUncheckedUpdateManyWithoutRecruitmentInput>
  }

  export type StaffUpsertWithWhereUniqueWithoutAccountInput = {
    where: StaffWhereUniqueInput
    update: XOR<StaffUpdateWithoutAccountInput, StaffUncheckedUpdateWithoutAccountInput>
    create: XOR<StaffCreateWithoutAccountInput, StaffUncheckedCreateWithoutAccountInput>
  }

  export type StaffUpdateWithWhereUniqueWithoutAccountInput = {
    where: StaffWhereUniqueInput
    data: XOR<StaffUpdateWithoutAccountInput, StaffUncheckedUpdateWithoutAccountInput>
  }

  export type StaffUpdateManyWithWhereWithoutAccountInput = {
    where: StaffScalarWhereInput
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyWithoutStaffInput>
  }

  export type PlayerCreateWithoutRecruitmentInput = {
    id?: string
    name: string
    dob: Date | string
    isDomestic?: boolean
    photo?: string | null
    gender: string
    position: Postion
    healthRecord?: HeathRecordCreateNestedOneWithoutPlayerInput
    phone: string
    streetAddress: string
    city: string
    province?: string
    country?: string
    postalCode: string
    scholarship?: ScholarshipCreateNestedManyWithoutPlayerInput
    GameEvent?: GameEventCreateNestedManyWithoutPlayerInput
    Injury?: InjuryCreateNestedManyWithoutPlayerInput
    Squad?: SquadCreateNestedManyWithoutPlayersInput
    Team?: TeamCreateNestedManyWithoutStartersInput
  }

  export type PlayerUncheckedCreateWithoutRecruitmentInput = {
    id?: string
    name: string
    dob: Date | string
    isDomestic?: boolean
    photo?: string | null
    gender: string
    position: Postion
    heathRecordId?: string | null
    phone: string
    streetAddress: string
    city: string
    province?: string
    country?: string
    postalCode: string
    scholarship?: ScholarshipUncheckedCreateNestedManyWithoutPlayerInput
    GameEvent?: GameEventUncheckedCreateNestedManyWithoutPlayerInput
    Injury?: InjuryUncheckedCreateNestedManyWithoutPlayerInput
    Squad?: SquadUncheckedCreateNestedManyWithoutPlayersInput
    Team?: TeamUncheckedCreateNestedManyWithoutStartersInput
  }

  export type PlayerCreateOrConnectWithoutRecruitmentInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutRecruitmentInput, PlayerUncheckedCreateWithoutRecruitmentInput>
  }

  export type AccountCreateWithoutRecruitmentInput = {
    id?: string
    username: string
    password: string
    updatedAt?: Date | string
    createdAt?: Date | string
    Staff?: StaffCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutRecruitmentInput = {
    id?: string
    username: string
    password: string
    updatedAt?: Date | string
    createdAt?: Date | string
    Staff?: StaffUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutRecruitmentInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutRecruitmentInput, AccountUncheckedCreateWithoutRecruitmentInput>
  }

  export type InterviewCreateWithoutRecruitmentInput = {
    id?: string
    stage?: Stage
    passed?: boolean
    at: Date | string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewUncheckedCreateWithoutRecruitmentInput = {
    id?: string
    stage?: Stage
    passed?: boolean
    at: Date | string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewCreateOrConnectWithoutRecruitmentInput = {
    where: InterviewWhereUniqueInput
    create: XOR<InterviewCreateWithoutRecruitmentInput, InterviewUncheckedCreateWithoutRecruitmentInput>
  }

  export type InterviewCreateManyRecruitmentInputEnvelope = {
    data: Enumerable<InterviewCreateManyRecruitmentInput>
    skipDuplicates?: boolean
  }

  export type PlayerUpsertWithoutRecruitmentInput = {
    update: XOR<PlayerUpdateWithoutRecruitmentInput, PlayerUncheckedUpdateWithoutRecruitmentInput>
    create: XOR<PlayerCreateWithoutRecruitmentInput, PlayerUncheckedCreateWithoutRecruitmentInput>
  }

  export type PlayerUpdateWithoutRecruitmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    isDomestic?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    position?: EnumPostionFieldUpdateOperationsInput | Postion
    healthRecord?: HeathRecordUpdateOneWithoutPlayerNestedInput
    phone?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    scholarship?: ScholarshipUpdateManyWithoutPlayerNestedInput
    GameEvent?: GameEventUpdateManyWithoutPlayerNestedInput
    Injury?: InjuryUpdateManyWithoutPlayerNestedInput
    Squad?: SquadUpdateManyWithoutPlayersNestedInput
    Team?: TeamUpdateManyWithoutStartersNestedInput
  }

  export type PlayerUncheckedUpdateWithoutRecruitmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    isDomestic?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    position?: EnumPostionFieldUpdateOperationsInput | Postion
    heathRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    scholarship?: ScholarshipUncheckedUpdateManyWithoutPlayerNestedInput
    GameEvent?: GameEventUncheckedUpdateManyWithoutPlayerNestedInput
    Injury?: InjuryUncheckedUpdateManyWithoutPlayerNestedInput
    Squad?: SquadUncheckedUpdateManyWithoutPlayersNestedInput
    Team?: TeamUncheckedUpdateManyWithoutStartersNestedInput
  }

  export type AccountUpsertWithoutRecruitmentInput = {
    update: XOR<AccountUpdateWithoutRecruitmentInput, AccountUncheckedUpdateWithoutRecruitmentInput>
    create: XOR<AccountCreateWithoutRecruitmentInput, AccountUncheckedCreateWithoutRecruitmentInput>
  }

  export type AccountUpdateWithoutRecruitmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Staff?: StaffUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutRecruitmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Staff?: StaffUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type InterviewUpsertWithWhereUniqueWithoutRecruitmentInput = {
    where: InterviewWhereUniqueInput
    update: XOR<InterviewUpdateWithoutRecruitmentInput, InterviewUncheckedUpdateWithoutRecruitmentInput>
    create: XOR<InterviewCreateWithoutRecruitmentInput, InterviewUncheckedCreateWithoutRecruitmentInput>
  }

  export type InterviewUpdateWithWhereUniqueWithoutRecruitmentInput = {
    where: InterviewWhereUniqueInput
    data: XOR<InterviewUpdateWithoutRecruitmentInput, InterviewUncheckedUpdateWithoutRecruitmentInput>
  }

  export type InterviewUpdateManyWithWhereWithoutRecruitmentInput = {
    where: InterviewScalarWhereInput
    data: XOR<InterviewUpdateManyMutationInput, InterviewUncheckedUpdateManyWithoutInterviewsInput>
  }

  export type InterviewScalarWhereInput = {
    AND?: Enumerable<InterviewScalarWhereInput>
    OR?: Enumerable<InterviewScalarWhereInput>
    NOT?: Enumerable<InterviewScalarWhereInput>
    id?: StringFilter | string
    stage?: EnumStageFilter | Stage
    passed?: BoolFilter | boolean
    at?: DateTimeFilter | Date | string
    comment?: StringFilter | string
    recruitmentId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type RecruitmentCreateWithoutInterviewsInput = {
    id?: string
    player: PlayerCreateNestedOneWithoutRecruitmentInput
    recruiter: AccountCreateNestedOneWithoutRecruitmentInput
    createdAt?: Date | string
    updatedAt?: Date | string
    passed?: boolean
    resume?: string | null
  }

  export type RecruitmentUncheckedCreateWithoutInterviewsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passed?: boolean
    resume?: string | null
    playerId: string
    accountId: string
  }

  export type RecruitmentCreateOrConnectWithoutInterviewsInput = {
    where: RecruitmentWhereUniqueInput
    create: XOR<RecruitmentCreateWithoutInterviewsInput, RecruitmentUncheckedCreateWithoutInterviewsInput>
  }

  export type RecruitmentUpsertWithoutInterviewsInput = {
    update: XOR<RecruitmentUpdateWithoutInterviewsInput, RecruitmentUncheckedUpdateWithoutInterviewsInput>
    create: XOR<RecruitmentCreateWithoutInterviewsInput, RecruitmentUncheckedCreateWithoutInterviewsInput>
  }

  export type RecruitmentUpdateWithoutInterviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    player?: PlayerUpdateOneRequiredWithoutRecruitmentNestedInput
    recruiter?: AccountUpdateOneRequiredWithoutRecruitmentNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passed?: BoolFieldUpdateOperationsInput | boolean
    resume?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecruitmentUncheckedUpdateWithoutInterviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passed?: BoolFieldUpdateOperationsInput | boolean
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    playerId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerCreateWithoutInjuryInput = {
    id?: string
    name: string
    dob: Date | string
    isDomestic?: boolean
    photo?: string | null
    gender: string
    position: Postion
    healthRecord?: HeathRecordCreateNestedOneWithoutPlayerInput
    phone: string
    streetAddress: string
    city: string
    province?: string
    country?: string
    postalCode: string
    scholarship?: ScholarshipCreateNestedManyWithoutPlayerInput
    recruitment?: RecruitmentCreateNestedManyWithoutPlayerInput
    GameEvent?: GameEventCreateNestedManyWithoutPlayerInput
    Squad?: SquadCreateNestedManyWithoutPlayersInput
    Team?: TeamCreateNestedManyWithoutStartersInput
  }

  export type PlayerUncheckedCreateWithoutInjuryInput = {
    id?: string
    name: string
    dob: Date | string
    isDomestic?: boolean
    photo?: string | null
    gender: string
    position: Postion
    heathRecordId?: string | null
    phone: string
    streetAddress: string
    city: string
    province?: string
    country?: string
    postalCode: string
    scholarship?: ScholarshipUncheckedCreateNestedManyWithoutPlayerInput
    recruitment?: RecruitmentUncheckedCreateNestedManyWithoutPlayerInput
    GameEvent?: GameEventUncheckedCreateNestedManyWithoutPlayerInput
    Squad?: SquadUncheckedCreateNestedManyWithoutPlayersInput
    Team?: TeamUncheckedCreateNestedManyWithoutStartersInput
  }

  export type PlayerCreateOrConnectWithoutInjuryInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutInjuryInput, PlayerUncheckedCreateWithoutInjuryInput>
  }

  export type OperationCreateWithoutInjuryInput = {
    id?: string
    type: string
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperationUncheckedCreateWithoutInjuryInput = {
    id?: string
    type: string
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperationCreateOrConnectWithoutInjuryInput = {
    where: OperationWhereUniqueInput
    create: XOR<OperationCreateWithoutInjuryInput, OperationUncheckedCreateWithoutInjuryInput>
  }

  export type OperationCreateManyInjuryInputEnvelope = {
    data: Enumerable<OperationCreateManyInjuryInput>
    skipDuplicates?: boolean
  }

  export type PlayerUpsertWithoutInjuryInput = {
    update: XOR<PlayerUpdateWithoutInjuryInput, PlayerUncheckedUpdateWithoutInjuryInput>
    create: XOR<PlayerCreateWithoutInjuryInput, PlayerUncheckedCreateWithoutInjuryInput>
  }

  export type PlayerUpdateWithoutInjuryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    isDomestic?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    position?: EnumPostionFieldUpdateOperationsInput | Postion
    healthRecord?: HeathRecordUpdateOneWithoutPlayerNestedInput
    phone?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    scholarship?: ScholarshipUpdateManyWithoutPlayerNestedInput
    recruitment?: RecruitmentUpdateManyWithoutPlayerNestedInput
    GameEvent?: GameEventUpdateManyWithoutPlayerNestedInput
    Squad?: SquadUpdateManyWithoutPlayersNestedInput
    Team?: TeamUpdateManyWithoutStartersNestedInput
  }

  export type PlayerUncheckedUpdateWithoutInjuryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    isDomestic?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    position?: EnumPostionFieldUpdateOperationsInput | Postion
    heathRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    scholarship?: ScholarshipUncheckedUpdateManyWithoutPlayerNestedInput
    recruitment?: RecruitmentUncheckedUpdateManyWithoutPlayerNestedInput
    GameEvent?: GameEventUncheckedUpdateManyWithoutPlayerNestedInput
    Squad?: SquadUncheckedUpdateManyWithoutPlayersNestedInput
    Team?: TeamUncheckedUpdateManyWithoutStartersNestedInput
  }

  export type OperationUpsertWithWhereUniqueWithoutInjuryInput = {
    where: OperationWhereUniqueInput
    update: XOR<OperationUpdateWithoutInjuryInput, OperationUncheckedUpdateWithoutInjuryInput>
    create: XOR<OperationCreateWithoutInjuryInput, OperationUncheckedCreateWithoutInjuryInput>
  }

  export type OperationUpdateWithWhereUniqueWithoutInjuryInput = {
    where: OperationWhereUniqueInput
    data: XOR<OperationUpdateWithoutInjuryInput, OperationUncheckedUpdateWithoutInjuryInput>
  }

  export type OperationUpdateManyWithWhereWithoutInjuryInput = {
    where: OperationScalarWhereInput
    data: XOR<OperationUpdateManyMutationInput, OperationUncheckedUpdateManyWithoutOperationInput>
  }

  export type OperationScalarWhereInput = {
    AND?: Enumerable<OperationScalarWhereInput>
    OR?: Enumerable<OperationScalarWhereInput>
    NOT?: Enumerable<OperationScalarWhereInput>
    id?: StringFilter | string
    type?: StringFilter | string
    date?: DateTimeFilter | Date | string
    injuryId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type InjuryCreateWithoutOperationInput = {
    id?: string
    player: PlayerCreateNestedOneWithoutInjuryInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InjuryUncheckedCreateWithoutOperationInput = {
    id?: string
    playerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InjuryCreateOrConnectWithoutOperationInput = {
    where: InjuryWhereUniqueInput
    create: XOR<InjuryCreateWithoutOperationInput, InjuryUncheckedCreateWithoutOperationInput>
  }

  export type InjuryUpsertWithoutOperationInput = {
    update: XOR<InjuryUpdateWithoutOperationInput, InjuryUncheckedUpdateWithoutOperationInput>
    create: XOR<InjuryCreateWithoutOperationInput, InjuryUncheckedCreateWithoutOperationInput>
  }

  export type InjuryUpdateWithoutOperationInput = {
    id?: StringFieldUpdateOperationsInput | string
    player?: PlayerUpdateOneRequiredWithoutInjuryNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InjuryUncheckedUpdateWithoutOperationInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScholarshipCreateManyPlayerInput = {
    id?: string
    name: string
    description: string
    institutionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecruitmentCreateManyPlayerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passed?: boolean
    resume?: string | null
    accountId: string
  }

  export type GameEventCreateManyPlayerInput = {
    id?: string
    minute: number
    gameId?: string | null
    type: Event
  }

  export type InjuryCreateManyPlayerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScholarshipUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sponsor?: InstitutionUpdateOneRequiredWithoutScholarshipNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScholarshipUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScholarshipUncheckedUpdateManyWithoutScholarshipInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecruitmentUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    recruiter?: AccountUpdateOneRequiredWithoutRecruitmentNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passed?: BoolFieldUpdateOperationsInput | boolean
    interviews?: InterviewUpdateManyWithoutRecruitmentNestedInput
    resume?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecruitmentUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passed?: BoolFieldUpdateOperationsInput | boolean
    interviews?: InterviewUncheckedUpdateManyWithoutRecruitmentNestedInput
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type RecruitmentUncheckedUpdateManyWithoutRecruitmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passed?: BoolFieldUpdateOperationsInput | boolean
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type GameEventUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    minute?: IntFieldUpdateOperationsInput | number
    game?: GameUpdateOneWithoutEventsNestedInput
    type?: EnumEventFieldUpdateOperationsInput | Event
  }

  export type GameEventUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    minute?: IntFieldUpdateOperationsInput | number
    gameId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumEventFieldUpdateOperationsInput | Event
  }

  export type GameEventUncheckedUpdateManyWithoutGameEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    minute?: IntFieldUpdateOperationsInput | number
    gameId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumEventFieldUpdateOperationsInput | Event
  }

  export type InjuryUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    Operation?: OperationUpdateManyWithoutInjuryNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InjuryUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    Operation?: OperationUncheckedUpdateManyWithoutInjuryNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InjuryUncheckedUpdateManyWithoutInjuryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SquadUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    institution?: InstitutionUpdateOneRequiredWithoutSquadNestedInput
    staff?: StaffUpdateManyWithoutSquadNestedInput
    competition?: CompetitionUpdateManyWithoutSquadNestedInput
    home?: LocationUpdateOneWithoutSquadNestedInput
    homeColor?: NullableStringFieldUpdateOperationsInput | string | null
    awayColor?: NullableStringFieldUpdateOperationsInput | string | null
    Team?: TeamUpdateManyWithoutSquadNestedInput
  }

  export type SquadUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    staff?: StaffUncheckedUpdateManyWithoutSquadNestedInput
    competition?: CompetitionUncheckedUpdateManyWithoutSquadNestedInput
    institutionId?: StringFieldUpdateOperationsInput | string
    homeColor?: NullableStringFieldUpdateOperationsInput | string | null
    awayColor?: NullableStringFieldUpdateOperationsInput | string | null
    Team?: TeamUncheckedUpdateManyWithoutSquadNestedInput
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SquadUncheckedUpdateManyWithoutSquadInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    homeColor?: NullableStringFieldUpdateOperationsInput | string | null
    awayColor?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamUpdateWithoutStartersInput = {
    id?: StringFieldUpdateOperationsInput | string
    formation?: EnumFormationFieldUpdateOperationsInput | Formation
    shirtColor?: StringFieldUpdateOperationsInput | string
    squad?: SquadUpdateOneRequiredWithoutTeamNestedInput
    Game?: GameUpdateOneWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutStartersInput = {
    id?: StringFieldUpdateOperationsInput | string
    formation?: EnumFormationFieldUpdateOperationsInput | Formation
    shirtColor?: StringFieldUpdateOperationsInput | string
    squadId?: StringFieldUpdateOperationsInput | string
    gameId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    formation?: EnumFormationFieldUpdateOperationsInput | Formation
    shirtColor?: StringFieldUpdateOperationsInput | string
    squadId?: StringFieldUpdateOperationsInput | string
    gameId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayerUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    isDomestic?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    position?: EnumPostionFieldUpdateOperationsInput | Postion
    healthRecord?: HeathRecordUpdateOneWithoutPlayerNestedInput
    phone?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    scholarship?: ScholarshipUpdateManyWithoutPlayerNestedInput
    recruitment?: RecruitmentUpdateManyWithoutPlayerNestedInput
    GameEvent?: GameEventUpdateManyWithoutPlayerNestedInput
    Injury?: InjuryUpdateManyWithoutPlayerNestedInput
    Squad?: SquadUpdateManyWithoutPlayersNestedInput
  }

  export type PlayerUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    isDomestic?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    position?: EnumPostionFieldUpdateOperationsInput | Postion
    heathRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    scholarship?: ScholarshipUncheckedUpdateManyWithoutPlayerNestedInput
    recruitment?: RecruitmentUncheckedUpdateManyWithoutPlayerNestedInput
    GameEvent?: GameEventUncheckedUpdateManyWithoutPlayerNestedInput
    Injury?: InjuryUncheckedUpdateManyWithoutPlayerNestedInput
    Squad?: SquadUncheckedUpdateManyWithoutPlayersNestedInput
  }

  export type PlayerUncheckedUpdateManyWithoutStartersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    isDomestic?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    position?: EnumPostionFieldUpdateOperationsInput | Postion
    heathRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type SquadUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    players?: PlayerUpdateManyWithoutSquadNestedInput
    institution?: InstitutionUpdateOneRequiredWithoutSquadNestedInput
    competition?: CompetitionUpdateManyWithoutSquadNestedInput
    home?: LocationUpdateOneWithoutSquadNestedInput
    homeColor?: NullableStringFieldUpdateOperationsInput | string | null
    awayColor?: NullableStringFieldUpdateOperationsInput | string | null
    Team?: TeamUpdateManyWithoutSquadNestedInput
  }

  export type SquadUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    players?: PlayerUncheckedUpdateManyWithoutSquadNestedInput
    competition?: CompetitionUncheckedUpdateManyWithoutSquadNestedInput
    institutionId?: StringFieldUpdateOperationsInput | string
    homeColor?: NullableStringFieldUpdateOperationsInput | string | null
    awayColor?: NullableStringFieldUpdateOperationsInput | string | null
    Team?: TeamUncheckedUpdateManyWithoutSquadNestedInput
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScholarshipCreateManySponsorInput = {
    id?: string
    name: string
    description: string
    playerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SquadCreateManyInstitutionInput = {
    id?: string
    name: string
    homeColor?: string | null
    awayColor?: string | null
    locationId?: string | null
  }

  export type ScholarshipUpdateWithoutSponsorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    player?: PlayerUpdateOneRequiredWithoutScholarshipNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScholarshipUncheckedUpdateWithoutSponsorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SquadUpdateWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    players?: PlayerUpdateManyWithoutSquadNestedInput
    staff?: StaffUpdateManyWithoutSquadNestedInput
    competition?: CompetitionUpdateManyWithoutSquadNestedInput
    home?: LocationUpdateOneWithoutSquadNestedInput
    homeColor?: NullableStringFieldUpdateOperationsInput | string | null
    awayColor?: NullableStringFieldUpdateOperationsInput | string | null
    Team?: TeamUpdateManyWithoutSquadNestedInput
  }

  export type SquadUncheckedUpdateWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    players?: PlayerUncheckedUpdateManyWithoutSquadNestedInput
    staff?: StaffUncheckedUpdateManyWithoutSquadNestedInput
    competition?: CompetitionUncheckedUpdateManyWithoutSquadNestedInput
    homeColor?: NullableStringFieldUpdateOperationsInput | string | null
    awayColor?: NullableStringFieldUpdateOperationsInput | string | null
    Team?: TeamUncheckedUpdateManyWithoutSquadNestedInput
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameCreateManyLocationInput = {
    id?: string
    updatedAt?: Date | string
    attendance: number
    competitionId: string
  }

  export type SquadCreateManyHomeInput = {
    id?: string
    name: string
    institutionId: string
    homeColor?: string | null
    awayColor?: string | null
  }

  export type GameUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    team?: TeamUpdateManyWithoutGameNestedInput
    events?: GameEventUpdateManyWithoutGameNestedInput
    competition?: CompetitionUpdateOneRequiredWithoutGameNestedInput
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: IntFieldUpdateOperationsInput | number
  }

  export type GameUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    team?: TeamUncheckedUpdateManyWithoutGameNestedInput
    events?: GameEventUncheckedUpdateManyWithoutGameNestedInput
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: IntFieldUpdateOperationsInput | number
    competitionId?: StringFieldUpdateOperationsInput | string
  }

  export type GameUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: IntFieldUpdateOperationsInput | number
    competitionId?: StringFieldUpdateOperationsInput | string
  }

  export type SquadUpdateWithoutHomeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    players?: PlayerUpdateManyWithoutSquadNestedInput
    institution?: InstitutionUpdateOneRequiredWithoutSquadNestedInput
    staff?: StaffUpdateManyWithoutSquadNestedInput
    competition?: CompetitionUpdateManyWithoutSquadNestedInput
    homeColor?: NullableStringFieldUpdateOperationsInput | string | null
    awayColor?: NullableStringFieldUpdateOperationsInput | string | null
    Team?: TeamUpdateManyWithoutSquadNestedInput
  }

  export type SquadUncheckedUpdateWithoutHomeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    players?: PlayerUncheckedUpdateManyWithoutSquadNestedInput
    staff?: StaffUncheckedUpdateManyWithoutSquadNestedInput
    competition?: CompetitionUncheckedUpdateManyWithoutSquadNestedInput
    institutionId?: StringFieldUpdateOperationsInput | string
    homeColor?: NullableStringFieldUpdateOperationsInput | string | null
    awayColor?: NullableStringFieldUpdateOperationsInput | string | null
    Team?: TeamUncheckedUpdateManyWithoutSquadNestedInput
  }

  export type TeamCreateManySquadInput = {
    id?: string
    formation: Formation
    shirtColor: string
    gameId?: string | null
  }

  export type PlayerUpdateWithoutSquadInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    isDomestic?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    position?: EnumPostionFieldUpdateOperationsInput | Postion
    healthRecord?: HeathRecordUpdateOneWithoutPlayerNestedInput
    phone?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    scholarship?: ScholarshipUpdateManyWithoutPlayerNestedInput
    recruitment?: RecruitmentUpdateManyWithoutPlayerNestedInput
    GameEvent?: GameEventUpdateManyWithoutPlayerNestedInput
    Injury?: InjuryUpdateManyWithoutPlayerNestedInput
    Team?: TeamUpdateManyWithoutStartersNestedInput
  }

  export type PlayerUncheckedUpdateWithoutSquadInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    isDomestic?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    position?: EnumPostionFieldUpdateOperationsInput | Postion
    heathRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    scholarship?: ScholarshipUncheckedUpdateManyWithoutPlayerNestedInput
    recruitment?: RecruitmentUncheckedUpdateManyWithoutPlayerNestedInput
    GameEvent?: GameEventUncheckedUpdateManyWithoutPlayerNestedInput
    Injury?: InjuryUncheckedUpdateManyWithoutPlayerNestedInput
    Team?: TeamUncheckedUpdateManyWithoutStartersNestedInput
  }

  export type PlayerUncheckedUpdateManyWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    isDomestic?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    position?: EnumPostionFieldUpdateOperationsInput | Postion
    heathRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type StaffUpdateWithoutSquadInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    account?: AccountUpdateOneWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateWithoutSquadInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StaffUncheckedUpdateManyWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompetitionUpdateWithoutSquadInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sponsor?: StringFieldUpdateOperationsInput | string
    type?: EnumCompetitionTypeFieldUpdateOperationsInput | CompetitionType
    season?: SeasonUpdateOneRequiredWithoutCompetitionNestedInput
    Game?: GameUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateWithoutSquadInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sponsor?: StringFieldUpdateOperationsInput | string
    type?: EnumCompetitionTypeFieldUpdateOperationsInput | CompetitionType
    seasonId?: StringFieldUpdateOperationsInput | string
    Game?: GameUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateManyWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sponsor?: StringFieldUpdateOperationsInput | string
    type?: EnumCompetitionTypeFieldUpdateOperationsInput | CompetitionType
    seasonId?: StringFieldUpdateOperationsInput | string
  }

  export type TeamUpdateWithoutSquadInput = {
    id?: StringFieldUpdateOperationsInput | string
    starters?: PlayerUpdateManyWithoutTeamNestedInput
    formation?: EnumFormationFieldUpdateOperationsInput | Formation
    shirtColor?: StringFieldUpdateOperationsInput | string
    Game?: GameUpdateOneWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutSquadInput = {
    id?: StringFieldUpdateOperationsInput | string
    starters?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    formation?: EnumFormationFieldUpdateOperationsInput | Formation
    shirtColor?: StringFieldUpdateOperationsInput | string
    gameId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameCreateManyCompetitionInput = {
    id?: string
    updatedAt?: Date | string
    attendance: number
    locationId: string
  }

  export type SquadUpdateWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    players?: PlayerUpdateManyWithoutSquadNestedInput
    institution?: InstitutionUpdateOneRequiredWithoutSquadNestedInput
    staff?: StaffUpdateManyWithoutSquadNestedInput
    home?: LocationUpdateOneWithoutSquadNestedInput
    homeColor?: NullableStringFieldUpdateOperationsInput | string | null
    awayColor?: NullableStringFieldUpdateOperationsInput | string | null
    Team?: TeamUpdateManyWithoutSquadNestedInput
  }

  export type SquadUncheckedUpdateWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    players?: PlayerUncheckedUpdateManyWithoutSquadNestedInput
    staff?: StaffUncheckedUpdateManyWithoutSquadNestedInput
    institutionId?: StringFieldUpdateOperationsInput | string
    homeColor?: NullableStringFieldUpdateOperationsInput | string | null
    awayColor?: NullableStringFieldUpdateOperationsInput | string | null
    Team?: TeamUncheckedUpdateManyWithoutSquadNestedInput
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameUpdateWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    team?: TeamUpdateManyWithoutGameNestedInput
    events?: GameEventUpdateManyWithoutGameNestedInput
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutGameNestedInput
    attendance?: IntFieldUpdateOperationsInput | number
  }

  export type GameUncheckedUpdateWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    team?: TeamUncheckedUpdateManyWithoutGameNestedInput
    events?: GameEventUncheckedUpdateManyWithoutGameNestedInput
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: IntFieldUpdateOperationsInput | number
    locationId?: StringFieldUpdateOperationsInput | string
  }

  export type CompetitionCreateManySeasonInput = {
    id?: string
    name: string
    sponsor: string
    type?: CompetitionType
  }

  export type CompetitionUpdateWithoutSeasonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sponsor?: StringFieldUpdateOperationsInput | string
    type?: EnumCompetitionTypeFieldUpdateOperationsInput | CompetitionType
    Squad?: SquadUpdateManyWithoutCompetitionNestedInput
    Game?: GameUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateWithoutSeasonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sponsor?: StringFieldUpdateOperationsInput | string
    type?: EnumCompetitionTypeFieldUpdateOperationsInput | CompetitionType
    Squad?: SquadUncheckedUpdateManyWithoutCompetitionNestedInput
    Game?: GameUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type TeamCreateManyGameInput = {
    id?: string
    formation: Formation
    shirtColor: string
    squadId: string
  }

  export type GameEventCreateManyGameInput = {
    id?: string
    minute: number
    playerId: string
    type: Event
  }

  export type TeamUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    starters?: PlayerUpdateManyWithoutTeamNestedInput
    formation?: EnumFormationFieldUpdateOperationsInput | Formation
    shirtColor?: StringFieldUpdateOperationsInput | string
    squad?: SquadUpdateOneRequiredWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    starters?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    formation?: EnumFormationFieldUpdateOperationsInput | Formation
    shirtColor?: StringFieldUpdateOperationsInput | string
    squadId?: StringFieldUpdateOperationsInput | string
  }

  export type GameEventUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    player?: PlayerUpdateOneRequiredWithoutGameEventNestedInput
    minute?: IntFieldUpdateOperationsInput | number
    type?: EnumEventFieldUpdateOperationsInput | Event
  }

  export type GameEventUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    minute?: IntFieldUpdateOperationsInput | number
    playerId?: StringFieldUpdateOperationsInput | string
    type?: EnumEventFieldUpdateOperationsInput | Event
  }

  export type GameEventUncheckedUpdateManyWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    minute?: IntFieldUpdateOperationsInput | number
    playerId?: StringFieldUpdateOperationsInput | string
    type?: EnumEventFieldUpdateOperationsInput | Event
  }

  export type RecruitmentCreateManyRecruiterInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passed?: boolean
    resume?: string | null
    playerId: string
  }

  export type StaffCreateManyAccountInput = {
    id?: string
    name: string
    dob: Date | string
    phone: string
    role: Role
    streetAddress: string
    city: string
    country?: string
    postalCode: string
  }

  export type RecruitmentUpdateWithoutRecruiterInput = {
    id?: StringFieldUpdateOperationsInput | string
    player?: PlayerUpdateOneRequiredWithoutRecruitmentNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passed?: BoolFieldUpdateOperationsInput | boolean
    interviews?: InterviewUpdateManyWithoutRecruitmentNestedInput
    resume?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecruitmentUncheckedUpdateWithoutRecruiterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passed?: BoolFieldUpdateOperationsInput | boolean
    interviews?: InterviewUncheckedUpdateManyWithoutRecruitmentNestedInput
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    playerId?: StringFieldUpdateOperationsInput | string
  }

  export type StaffUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    Squad?: SquadUpdateManyWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    streetAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    Squad?: SquadUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type InterviewCreateManyRecruitmentInput = {
    id?: string
    stage?: Stage
    passed?: boolean
    at: Date | string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewUpdateWithoutRecruitmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    stage?: EnumStageFieldUpdateOperationsInput | Stage
    passed?: BoolFieldUpdateOperationsInput | boolean
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewUncheckedUpdateWithoutRecruitmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    stage?: EnumStageFieldUpdateOperationsInput | Stage
    passed?: BoolFieldUpdateOperationsInput | boolean
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewUncheckedUpdateManyWithoutInterviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    stage?: EnumStageFieldUpdateOperationsInput | Stage
    passed?: BoolFieldUpdateOperationsInput | boolean
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationCreateManyInjuryInput = {
    id?: string
    type: string
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperationUpdateWithoutInjuryInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationUncheckedUpdateWithoutInjuryInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationUncheckedUpdateManyWithoutOperationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}