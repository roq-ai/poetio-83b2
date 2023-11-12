/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model content_creator
 *
 */
export type content_creator = $Result.DefaultSelection<Prisma.$content_creatorPayload>;
/**
 * Model organization
 *
 */
export type organization = $Result.DefaultSelection<Prisma.$organizationPayload>;
/**
 * Model poetry
 *
 */
export type poetry = $Result.DefaultSelection<Prisma.$poetryPayload>;
/**
 * Model show
 *
 */
export type show = $Result.DefaultSelection<Prisma.$showPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;
/**
 * Model video
 *
 */
export type video = $Result.DefaultSelection<Prisma.$videoPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Content_creators
 * const content_creators = await prisma.content_creator.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Content_creators
   * const content_creators = await prisma.content_creator.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.content_creator`: Exposes CRUD operations for the **content_creator** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Content_creators
   * const content_creators = await prisma.content_creator.findMany()
   * ```
   */
  get content_creator(): Prisma.content_creatorDelegate<ExtArgs>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **organization** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   */
  get organization(): Prisma.organizationDelegate<ExtArgs>;

  /**
   * `prisma.poetry`: Exposes CRUD operations for the **poetry** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Poetries
   * const poetries = await prisma.poetry.findMany()
   * ```
   */
  get poetry(): Prisma.poetryDelegate<ExtArgs>;

  /**
   * `prisma.show`: Exposes CRUD operations for the **show** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Shows
   * const shows = await prisma.show.findMany()
   * ```
   */
  get show(): Prisma.showDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **video** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Videos
   * const videos = await prisma.video.findMany()
   * ```
   */
  get video(): Prisma.videoDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    content_creator: 'content_creator';
    organization: 'organization';
    poetry: 'poetry';
    show: 'show';
    user: 'user';
    video: 'video';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'content_creator' | 'organization' | 'poetry' | 'show' | 'user' | 'video';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      content_creator: {
        payload: Prisma.$content_creatorPayload<ExtArgs>;
        fields: Prisma.content_creatorFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.content_creatorFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$content_creatorPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.content_creatorFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$content_creatorPayload>;
          };
          findFirst: {
            args: Prisma.content_creatorFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$content_creatorPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.content_creatorFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$content_creatorPayload>;
          };
          findMany: {
            args: Prisma.content_creatorFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$content_creatorPayload>[];
          };
          create: {
            args: Prisma.content_creatorCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$content_creatorPayload>;
          };
          createMany: {
            args: Prisma.content_creatorCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.content_creatorDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$content_creatorPayload>;
          };
          update: {
            args: Prisma.content_creatorUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$content_creatorPayload>;
          };
          deleteMany: {
            args: Prisma.content_creatorDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.content_creatorUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.content_creatorUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$content_creatorPayload>;
          };
          aggregate: {
            args: Prisma.Content_creatorAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateContent_creator>;
          };
          groupBy: {
            args: Prisma.content_creatorGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Content_creatorGroupByOutputType>[];
          };
          count: {
            args: Prisma.content_creatorCountArgs<ExtArgs>;
            result: $Utils.Optional<Content_creatorCountAggregateOutputType> | number;
          };
        };
      };
      organization: {
        payload: Prisma.$organizationPayload<ExtArgs>;
        fields: Prisma.organizationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.organizationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.organizationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findFirst: {
            args: Prisma.organizationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.organizationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findMany: {
            args: Prisma.organizationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[];
          };
          create: {
            args: Prisma.organizationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          createMany: {
            args: Prisma.organizationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.organizationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          update: {
            args: Prisma.organizationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          deleteMany: {
            args: Prisma.organizationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.organizationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.organizationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrganization>;
          };
          groupBy: {
            args: Prisma.organizationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationGroupByOutputType>[];
          };
          count: {
            args: Prisma.organizationCountArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number;
          };
        };
      };
      poetry: {
        payload: Prisma.$poetryPayload<ExtArgs>;
        fields: Prisma.poetryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.poetryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$poetryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.poetryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$poetryPayload>;
          };
          findFirst: {
            args: Prisma.poetryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$poetryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.poetryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$poetryPayload>;
          };
          findMany: {
            args: Prisma.poetryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$poetryPayload>[];
          };
          create: {
            args: Prisma.poetryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$poetryPayload>;
          };
          createMany: {
            args: Prisma.poetryCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.poetryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$poetryPayload>;
          };
          update: {
            args: Prisma.poetryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$poetryPayload>;
          };
          deleteMany: {
            args: Prisma.poetryDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.poetryUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.poetryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$poetryPayload>;
          };
          aggregate: {
            args: Prisma.PoetryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePoetry>;
          };
          groupBy: {
            args: Prisma.poetryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PoetryGroupByOutputType>[];
          };
          count: {
            args: Prisma.poetryCountArgs<ExtArgs>;
            result: $Utils.Optional<PoetryCountAggregateOutputType> | number;
          };
        };
      };
      show: {
        payload: Prisma.$showPayload<ExtArgs>;
        fields: Prisma.showFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.showFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$showPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.showFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$showPayload>;
          };
          findFirst: {
            args: Prisma.showFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$showPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.showFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$showPayload>;
          };
          findMany: {
            args: Prisma.showFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$showPayload>[];
          };
          create: {
            args: Prisma.showCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$showPayload>;
          };
          createMany: {
            args: Prisma.showCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.showDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$showPayload>;
          };
          update: {
            args: Prisma.showUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$showPayload>;
          };
          deleteMany: {
            args: Prisma.showDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.showUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.showUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$showPayload>;
          };
          aggregate: {
            args: Prisma.ShowAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateShow>;
          };
          groupBy: {
            args: Prisma.showGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ShowGroupByOutputType>[];
          };
          count: {
            args: Prisma.showCountArgs<ExtArgs>;
            result: $Utils.Optional<ShowCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      video: {
        payload: Prisma.$videoPayload<ExtArgs>;
        fields: Prisma.videoFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.videoFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$videoPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.videoFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$videoPayload>;
          };
          findFirst: {
            args: Prisma.videoFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$videoPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.videoFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$videoPayload>;
          };
          findMany: {
            args: Prisma.videoFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$videoPayload>[];
          };
          create: {
            args: Prisma.videoCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$videoPayload>;
          };
          createMany: {
            args: Prisma.videoCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.videoDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$videoPayload>;
          };
          update: {
            args: Prisma.videoUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$videoPayload>;
          };
          deleteMany: {
            args: Prisma.videoDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.videoUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.videoUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$videoPayload>;
          };
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateVideo>;
          };
          groupBy: {
            args: Prisma.videoGroupByArgs<ExtArgs>;
            result: $Utils.Optional<VideoGroupByOutputType>[];
          };
          count: {
            args: Prisma.videoCountArgs<ExtArgs>;
            result: $Utils.Optional<VideoCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
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
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    user: number;
  };

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | OrganizationCountOutputTypeCountUserArgs;
  };

  // Custom InputTypes

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: userWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    content_creator: number;
    poetry: number;
    show: number;
    video: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content_creator?: boolean | UserCountOutputTypeCountContent_creatorArgs;
    poetry?: boolean | UserCountOutputTypeCountPoetryArgs;
    show?: boolean | UserCountOutputTypeCountShowArgs;
    video?: boolean | UserCountOutputTypeCountVideoArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContent_creatorArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: content_creatorWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPoetryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: poetryWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: showWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: videoWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model content_creator
   */

  export type AggregateContent_creator = {
    _count: Content_creatorCountAggregateOutputType | null;
    _min: Content_creatorMinAggregateOutputType | null;
    _max: Content_creatorMaxAggregateOutputType | null;
  };

  export type Content_creatorMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    bio: string | null;
    website: string | null;
    social_media_handle: string | null;
    specialty: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Content_creatorMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    bio: string | null;
    website: string | null;
    social_media_handle: string | null;
    specialty: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Content_creatorCountAggregateOutputType = {
    id: number;
    user_id: number;
    bio: number;
    website: number;
    social_media_handle: number;
    specialty: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Content_creatorMinAggregateInputType = {
    id?: true;
    user_id?: true;
    bio?: true;
    website?: true;
    social_media_handle?: true;
    specialty?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Content_creatorMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    bio?: true;
    website?: true;
    social_media_handle?: true;
    specialty?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Content_creatorCountAggregateInputType = {
    id?: true;
    user_id?: true;
    bio?: true;
    website?: true;
    social_media_handle?: true;
    specialty?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Content_creatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which content_creator to aggregate.
     */
    where?: content_creatorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of content_creators to fetch.
     */
    orderBy?: content_creatorOrderByWithRelationInput | content_creatorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: content_creatorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` content_creators from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` content_creators.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned content_creators
     **/
    _count?: true | Content_creatorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Content_creatorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Content_creatorMaxAggregateInputType;
  };

  export type GetContent_creatorAggregateType<T extends Content_creatorAggregateArgs> = {
    [P in keyof T & keyof AggregateContent_creator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContent_creator[P]>
      : GetScalarType<T[P], AggregateContent_creator[P]>;
  };

  export type content_creatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: content_creatorWhereInput;
    orderBy?: content_creatorOrderByWithAggregationInput | content_creatorOrderByWithAggregationInput[];
    by: Content_creatorScalarFieldEnum[] | Content_creatorScalarFieldEnum;
    having?: content_creatorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Content_creatorCountAggregateInputType | true;
    _min?: Content_creatorMinAggregateInputType;
    _max?: Content_creatorMaxAggregateInputType;
  };

  export type Content_creatorGroupByOutputType = {
    id: string;
    user_id: string;
    bio: string | null;
    website: string | null;
    social_media_handle: string | null;
    specialty: string | null;
    created_at: Date;
    updated_at: Date;
    _count: Content_creatorCountAggregateOutputType | null;
    _min: Content_creatorMinAggregateOutputType | null;
    _max: Content_creatorMaxAggregateOutputType | null;
  };

  type GetContent_creatorGroupByPayload<T extends content_creatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Content_creatorGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Content_creatorGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Content_creatorGroupByOutputType[P]>
          : GetScalarType<T[P], Content_creatorGroupByOutputType[P]>;
      }
    >
  >;

  export type content_creatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        bio?: boolean;
        website?: boolean;
        social_media_handle?: boolean;
        specialty?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['content_creator']
    >;

  export type content_creatorSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    bio?: boolean;
    website?: boolean;
    social_media_handle?: boolean;
    specialty?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type content_creatorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $content_creatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'content_creator';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        bio: string | null;
        website: string | null;
        social_media_handle: string | null;
        specialty: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['content_creator']
    >;
    composites: {};
  };

  type content_creatorGetPayload<S extends boolean | null | undefined | content_creatorDefaultArgs> = $Result.GetResult<
    Prisma.$content_creatorPayload,
    S
  >;

  type content_creatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    content_creatorFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Content_creatorCountAggregateInputType | true;
  };

  export interface content_creatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['content_creator']; meta: { name: 'content_creator' } };
    /**
     * Find zero or one Content_creator that matches the filter.
     * @param {content_creatorFindUniqueArgs} args - Arguments to find a Content_creator
     * @example
     * // Get one Content_creator
     * const content_creator = await prisma.content_creator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends content_creatorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, content_creatorFindUniqueArgs<ExtArgs>>,
    ): Prisma__content_creatorClient<
      $Result.GetResult<Prisma.$content_creatorPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Content_creator that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {content_creatorFindUniqueOrThrowArgs} args - Arguments to find a Content_creator
     * @example
     * // Get one Content_creator
     * const content_creator = await prisma.content_creator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends content_creatorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, content_creatorFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__content_creatorClient<
      $Result.GetResult<Prisma.$content_creatorPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Content_creator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {content_creatorFindFirstArgs} args - Arguments to find a Content_creator
     * @example
     * // Get one Content_creator
     * const content_creator = await prisma.content_creator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends content_creatorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, content_creatorFindFirstArgs<ExtArgs>>,
    ): Prisma__content_creatorClient<
      $Result.GetResult<Prisma.$content_creatorPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Content_creator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {content_creatorFindFirstOrThrowArgs} args - Arguments to find a Content_creator
     * @example
     * // Get one Content_creator
     * const content_creator = await prisma.content_creator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends content_creatorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, content_creatorFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__content_creatorClient<
      $Result.GetResult<Prisma.$content_creatorPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Content_creators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {content_creatorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Content_creators
     * const content_creators = await prisma.content_creator.findMany()
     *
     * // Get first 10 Content_creators
     * const content_creators = await prisma.content_creator.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const content_creatorWithIdOnly = await prisma.content_creator.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends content_creatorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, content_creatorFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$content_creatorPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Content_creator.
     * @param {content_creatorCreateArgs} args - Arguments to create a Content_creator.
     * @example
     * // Create one Content_creator
     * const Content_creator = await prisma.content_creator.create({
     *   data: {
     *     // ... data to create a Content_creator
     *   }
     * })
     *
     **/
    create<T extends content_creatorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, content_creatorCreateArgs<ExtArgs>>,
    ): Prisma__content_creatorClient<
      $Result.GetResult<Prisma.$content_creatorPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Content_creators.
     *     @param {content_creatorCreateManyArgs} args - Arguments to create many Content_creators.
     *     @example
     *     // Create many Content_creators
     *     const content_creator = await prisma.content_creator.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends content_creatorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, content_creatorCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Content_creator.
     * @param {content_creatorDeleteArgs} args - Arguments to delete one Content_creator.
     * @example
     * // Delete one Content_creator
     * const Content_creator = await prisma.content_creator.delete({
     *   where: {
     *     // ... filter to delete one Content_creator
     *   }
     * })
     *
     **/
    delete<T extends content_creatorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, content_creatorDeleteArgs<ExtArgs>>,
    ): Prisma__content_creatorClient<
      $Result.GetResult<Prisma.$content_creatorPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Content_creator.
     * @param {content_creatorUpdateArgs} args - Arguments to update one Content_creator.
     * @example
     * // Update one Content_creator
     * const content_creator = await prisma.content_creator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends content_creatorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, content_creatorUpdateArgs<ExtArgs>>,
    ): Prisma__content_creatorClient<
      $Result.GetResult<Prisma.$content_creatorPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Content_creators.
     * @param {content_creatorDeleteManyArgs} args - Arguments to filter Content_creators to delete.
     * @example
     * // Delete a few Content_creators
     * const { count } = await prisma.content_creator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends content_creatorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, content_creatorDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Content_creators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {content_creatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Content_creators
     * const content_creator = await prisma.content_creator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends content_creatorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, content_creatorUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Content_creator.
     * @param {content_creatorUpsertArgs} args - Arguments to update or create a Content_creator.
     * @example
     * // Update or create a Content_creator
     * const content_creator = await prisma.content_creator.upsert({
     *   create: {
     *     // ... data to create a Content_creator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Content_creator we want to update
     *   }
     * })
     **/
    upsert<T extends content_creatorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, content_creatorUpsertArgs<ExtArgs>>,
    ): Prisma__content_creatorClient<
      $Result.GetResult<Prisma.$content_creatorPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Content_creators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {content_creatorCountArgs} args - Arguments to filter Content_creators to count.
     * @example
     * // Count the number of Content_creators
     * const count = await prisma.content_creator.count({
     *   where: {
     *     // ... the filter for the Content_creators we want to count
     *   }
     * })
     **/
    count<T extends content_creatorCountArgs>(
      args?: Subset<T, content_creatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Content_creatorCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Content_creator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Content_creatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Content_creatorAggregateArgs>(
      args: Subset<T, Content_creatorAggregateArgs>,
    ): Prisma.PrismaPromise<GetContent_creatorAggregateType<T>>;

    /**
     * Group by Content_creator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {content_creatorGroupByArgs} args - Group by arguments.
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
      T extends content_creatorGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: content_creatorGroupByArgs['orderBy'] }
        : { orderBy?: content_creatorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, content_creatorGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetContent_creatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the content_creator model
     */
    readonly fields: content_creatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for content_creator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__content_creatorClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the content_creator model
   */
  interface content_creatorFieldRefs {
    readonly id: FieldRef<'content_creator', 'String'>;
    readonly user_id: FieldRef<'content_creator', 'String'>;
    readonly bio: FieldRef<'content_creator', 'String'>;
    readonly website: FieldRef<'content_creator', 'String'>;
    readonly social_media_handle: FieldRef<'content_creator', 'String'>;
    readonly specialty: FieldRef<'content_creator', 'String'>;
    readonly created_at: FieldRef<'content_creator', 'DateTime'>;
    readonly updated_at: FieldRef<'content_creator', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * content_creator findUnique
   */
  export type content_creatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content_creator
     */
    select?: content_creatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: content_creatorInclude<ExtArgs> | null;
    /**
     * Filter, which content_creator to fetch.
     */
    where: content_creatorWhereUniqueInput;
  };

  /**
   * content_creator findUniqueOrThrow
   */
  export type content_creatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the content_creator
       */
      select?: content_creatorSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: content_creatorInclude<ExtArgs> | null;
      /**
       * Filter, which content_creator to fetch.
       */
      where: content_creatorWhereUniqueInput;
    };

  /**
   * content_creator findFirst
   */
  export type content_creatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content_creator
     */
    select?: content_creatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: content_creatorInclude<ExtArgs> | null;
    /**
     * Filter, which content_creator to fetch.
     */
    where?: content_creatorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of content_creators to fetch.
     */
    orderBy?: content_creatorOrderByWithRelationInput | content_creatorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for content_creators.
     */
    cursor?: content_creatorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` content_creators from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` content_creators.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of content_creators.
     */
    distinct?: Content_creatorScalarFieldEnum | Content_creatorScalarFieldEnum[];
  };

  /**
   * content_creator findFirstOrThrow
   */
  export type content_creatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the content_creator
       */
      select?: content_creatorSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: content_creatorInclude<ExtArgs> | null;
      /**
       * Filter, which content_creator to fetch.
       */
      where?: content_creatorWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of content_creators to fetch.
       */
      orderBy?: content_creatorOrderByWithRelationInput | content_creatorOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for content_creators.
       */
      cursor?: content_creatorWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` content_creators from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` content_creators.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of content_creators.
       */
      distinct?: Content_creatorScalarFieldEnum | Content_creatorScalarFieldEnum[];
    };

  /**
   * content_creator findMany
   */
  export type content_creatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content_creator
     */
    select?: content_creatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: content_creatorInclude<ExtArgs> | null;
    /**
     * Filter, which content_creators to fetch.
     */
    where?: content_creatorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of content_creators to fetch.
     */
    orderBy?: content_creatorOrderByWithRelationInput | content_creatorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing content_creators.
     */
    cursor?: content_creatorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` content_creators from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` content_creators.
     */
    skip?: number;
    distinct?: Content_creatorScalarFieldEnum | Content_creatorScalarFieldEnum[];
  };

  /**
   * content_creator create
   */
  export type content_creatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content_creator
     */
    select?: content_creatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: content_creatorInclude<ExtArgs> | null;
    /**
     * The data needed to create a content_creator.
     */
    data: XOR<content_creatorCreateInput, content_creatorUncheckedCreateInput>;
  };

  /**
   * content_creator createMany
   */
  export type content_creatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many content_creators.
     */
    data: content_creatorCreateManyInput | content_creatorCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * content_creator update
   */
  export type content_creatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content_creator
     */
    select?: content_creatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: content_creatorInclude<ExtArgs> | null;
    /**
     * The data needed to update a content_creator.
     */
    data: XOR<content_creatorUpdateInput, content_creatorUncheckedUpdateInput>;
    /**
     * Choose, which content_creator to update.
     */
    where: content_creatorWhereUniqueInput;
  };

  /**
   * content_creator updateMany
   */
  export type content_creatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update content_creators.
     */
    data: XOR<content_creatorUpdateManyMutationInput, content_creatorUncheckedUpdateManyInput>;
    /**
     * Filter which content_creators to update
     */
    where?: content_creatorWhereInput;
  };

  /**
   * content_creator upsert
   */
  export type content_creatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content_creator
     */
    select?: content_creatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: content_creatorInclude<ExtArgs> | null;
    /**
     * The filter to search for the content_creator to update in case it exists.
     */
    where: content_creatorWhereUniqueInput;
    /**
     * In case the content_creator found by the `where` argument doesn't exist, create a new content_creator with this data.
     */
    create: XOR<content_creatorCreateInput, content_creatorUncheckedCreateInput>;
    /**
     * In case the content_creator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<content_creatorUpdateInput, content_creatorUncheckedUpdateInput>;
  };

  /**
   * content_creator delete
   */
  export type content_creatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content_creator
     */
    select?: content_creatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: content_creatorInclude<ExtArgs> | null;
    /**
     * Filter which content_creator to delete.
     */
    where: content_creatorWhereUniqueInput;
  };

  /**
   * content_creator deleteMany
   */
  export type content_creatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which content_creators to delete
     */
    where?: content_creatorWhereInput;
  };

  /**
   * content_creator without action
   */
  export type content_creatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content_creator
     */
    select?: content_creatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: content_creatorInclude<ExtArgs> | null;
  };

  /**
   * Model organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  export type OrganizationMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OrganizationCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type OrganizationMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OrganizationMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OrganizationCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organization to aggregate.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned organizations
     **/
    _count?: true | OrganizationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrganizationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrganizationMaxAggregateInputType;
  };

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>;
  };

  export type organizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithAggregationInput | organizationOrderByWithAggregationInput[];
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum;
    having?: organizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
  };

  export type OrganizationGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  type GetOrganizationGroupByPayload<T extends organizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OrganizationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
          : GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
      }
    >
  >;

  export type organizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | organization$userArgs<ExtArgs>;
        _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['organization']
    >;

  export type organizationSelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type organizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | organization$userArgs<ExtArgs>;
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $organizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'organization';
    objects: {
      user: Prisma.$userPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['organization']
    >;
    composites: {};
  };

  type organizationGetPayload<S extends boolean | null | undefined | organizationDefaultArgs> = $Result.GetResult<
    Prisma.$organizationPayload,
    S
  >;

  type organizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    organizationFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: OrganizationCountAggregateInputType | true;
  };

  export interface organizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organization']; meta: { name: 'organization' } };
    /**
     * Find zero or one Organization that matches the filter.
     * @param {organizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends organizationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, organizationFindUniqueArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Organization that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {organizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends organizationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends organizationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends organizationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     *
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends organizationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Organization.
     * @param {organizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     *
     **/
    create<T extends organizationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationCreateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Organizations.
     *     @param {organizationCreateManyArgs} args - Arguments to create many Organizations.
     *     @example
     *     // Create many Organizations
     *     const organization = await prisma.organization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends organizationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Organization.
     * @param {organizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     *
     **/
    delete<T extends organizationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, organizationDeleteArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Organization.
     * @param {organizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends organizationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Organizations.
     * @param {organizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends organizationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends organizationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Organization.
     * @param {organizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     **/
    upsert<T extends organizationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpsertArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
     **/
    count<T extends organizationCountArgs>(
      args?: Subset<T, organizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(
      args: Subset<T, OrganizationAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationGroupByArgs} args - Group by arguments.
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
      T extends organizationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizationGroupByArgs['orderBy'] }
        : { orderBy?: organizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, organizationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the organization model
     */
    readonly fields: organizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends organization$userArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$userArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the organization model
   */
  interface organizationFieldRefs {
    readonly id: FieldRef<'organization', 'String'>;
    readonly description: FieldRef<'organization', 'String'>;
    readonly name: FieldRef<'organization', 'String'>;
    readonly created_at: FieldRef<'organization', 'DateTime'>;
    readonly updated_at: FieldRef<'organization', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * organization findUnique
   */
  export type organizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findUniqueOrThrow
   */
  export type organizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findFirst
   */
  export type organizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findFirstOrThrow
   */
  export type organizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findMany
   */
  export type organizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization create
   */
  export type organizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to create a organization.
     */
    data: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
  };

  /**
   * organization createMany
   */
  export type organizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizations.
     */
    data: organizationCreateManyInput | organizationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * organization update
   */
  export type organizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to update a organization.
     */
    data: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
    /**
     * Choose, which organization to update.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization updateMany
   */
  export type organizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyInput>;
    /**
     * Filter which organizations to update
     */
    where?: organizationWhereInput;
  };

  /**
   * organization upsert
   */
  export type organizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The filter to search for the organization to update in case it exists.
     */
    where: organizationWhereUniqueInput;
    /**
     * In case the organization found by the `where` argument doesn't exist, create a new organization with this data.
     */
    create: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
    /**
     * In case the organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
  };

  /**
   * organization delete
   */
  export type organizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter which organization to delete.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization deleteMany
   */
  export type organizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationWhereInput;
  };

  /**
   * organization.user
   */
  export type organization$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    where?: userWhereInput;
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    cursor?: userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * organization without action
   */
  export type organizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
  };

  /**
   * Model poetry
   */

  export type AggregatePoetry = {
    _count: PoetryCountAggregateOutputType | null;
    _min: PoetryMinAggregateOutputType | null;
    _max: PoetryMaxAggregateOutputType | null;
  };

  export type PoetryMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    content: string | null;
    creation_date: Date | null;
    last_update_date: Date | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PoetryMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    content: string | null;
    creation_date: Date | null;
    last_update_date: Date | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PoetryCountAggregateOutputType = {
    id: number;
    title: number;
    content: number;
    creation_date: number;
    last_update_date: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type PoetryMinAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    creation_date?: true;
    last_update_date?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PoetryMaxAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    creation_date?: true;
    last_update_date?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PoetryCountAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    creation_date?: true;
    last_update_date?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type PoetryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which poetry to aggregate.
     */
    where?: poetryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of poetries to fetch.
     */
    orderBy?: poetryOrderByWithRelationInput | poetryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: poetryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` poetries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` poetries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned poetries
     **/
    _count?: true | PoetryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PoetryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PoetryMaxAggregateInputType;
  };

  export type GetPoetryAggregateType<T extends PoetryAggregateArgs> = {
    [P in keyof T & keyof AggregatePoetry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoetry[P]>
      : GetScalarType<T[P], AggregatePoetry[P]>;
  };

  export type poetryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: poetryWhereInput;
    orderBy?: poetryOrderByWithAggregationInput | poetryOrderByWithAggregationInput[];
    by: PoetryScalarFieldEnum[] | PoetryScalarFieldEnum;
    having?: poetryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PoetryCountAggregateInputType | true;
    _min?: PoetryMinAggregateInputType;
    _max?: PoetryMaxAggregateInputType;
  };

  export type PoetryGroupByOutputType = {
    id: string;
    title: string;
    content: string;
    creation_date: Date;
    last_update_date: Date | null;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: PoetryCountAggregateOutputType | null;
    _min: PoetryMinAggregateOutputType | null;
    _max: PoetryMaxAggregateOutputType | null;
  };

  type GetPoetryGroupByPayload<T extends poetryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PoetryGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PoetryGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PoetryGroupByOutputType[P]>
          : GetScalarType<T[P], PoetryGroupByOutputType[P]>;
      }
    >
  >;

  export type poetrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      content?: boolean;
      creation_date?: boolean;
      last_update_date?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['poetry']
  >;

  export type poetrySelectScalar = {
    id?: boolean;
    title?: boolean;
    content?: boolean;
    creation_date?: boolean;
    last_update_date?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type poetryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $poetryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'poetry';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        content: string;
        creation_date: Date;
        last_update_date: Date | null;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['poetry']
    >;
    composites: {};
  };

  type poetryGetPayload<S extends boolean | null | undefined | poetryDefaultArgs> = $Result.GetResult<
    Prisma.$poetryPayload,
    S
  >;

  type poetryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    poetryFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: PoetryCountAggregateInputType | true;
  };

  export interface poetryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['poetry']; meta: { name: 'poetry' } };
    /**
     * Find zero or one Poetry that matches the filter.
     * @param {poetryFindUniqueArgs} args - Arguments to find a Poetry
     * @example
     * // Get one Poetry
     * const poetry = await prisma.poetry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends poetryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, poetryFindUniqueArgs<ExtArgs>>,
    ): Prisma__poetryClient<$Result.GetResult<Prisma.$poetryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Poetry that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {poetryFindUniqueOrThrowArgs} args - Arguments to find a Poetry
     * @example
     * // Get one Poetry
     * const poetry = await prisma.poetry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends poetryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, poetryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__poetryClient<$Result.GetResult<Prisma.$poetryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Poetry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {poetryFindFirstArgs} args - Arguments to find a Poetry
     * @example
     * // Get one Poetry
     * const poetry = await prisma.poetry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends poetryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, poetryFindFirstArgs<ExtArgs>>,
    ): Prisma__poetryClient<$Result.GetResult<Prisma.$poetryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Poetry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {poetryFindFirstOrThrowArgs} args - Arguments to find a Poetry
     * @example
     * // Get one Poetry
     * const poetry = await prisma.poetry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends poetryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, poetryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__poetryClient<$Result.GetResult<Prisma.$poetryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Poetries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {poetryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Poetries
     * const poetries = await prisma.poetry.findMany()
     *
     * // Get first 10 Poetries
     * const poetries = await prisma.poetry.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const poetryWithIdOnly = await prisma.poetry.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends poetryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, poetryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$poetryPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Poetry.
     * @param {poetryCreateArgs} args - Arguments to create a Poetry.
     * @example
     * // Create one Poetry
     * const Poetry = await prisma.poetry.create({
     *   data: {
     *     // ... data to create a Poetry
     *   }
     * })
     *
     **/
    create<T extends poetryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, poetryCreateArgs<ExtArgs>>,
    ): Prisma__poetryClient<$Result.GetResult<Prisma.$poetryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Poetries.
     *     @param {poetryCreateManyArgs} args - Arguments to create many Poetries.
     *     @example
     *     // Create many Poetries
     *     const poetry = await prisma.poetry.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends poetryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, poetryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Poetry.
     * @param {poetryDeleteArgs} args - Arguments to delete one Poetry.
     * @example
     * // Delete one Poetry
     * const Poetry = await prisma.poetry.delete({
     *   where: {
     *     // ... filter to delete one Poetry
     *   }
     * })
     *
     **/
    delete<T extends poetryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, poetryDeleteArgs<ExtArgs>>,
    ): Prisma__poetryClient<$Result.GetResult<Prisma.$poetryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Poetry.
     * @param {poetryUpdateArgs} args - Arguments to update one Poetry.
     * @example
     * // Update one Poetry
     * const poetry = await prisma.poetry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends poetryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, poetryUpdateArgs<ExtArgs>>,
    ): Prisma__poetryClient<$Result.GetResult<Prisma.$poetryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Poetries.
     * @param {poetryDeleteManyArgs} args - Arguments to filter Poetries to delete.
     * @example
     * // Delete a few Poetries
     * const { count } = await prisma.poetry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends poetryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, poetryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Poetries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {poetryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Poetries
     * const poetry = await prisma.poetry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends poetryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, poetryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Poetry.
     * @param {poetryUpsertArgs} args - Arguments to update or create a Poetry.
     * @example
     * // Update or create a Poetry
     * const poetry = await prisma.poetry.upsert({
     *   create: {
     *     // ... data to create a Poetry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Poetry we want to update
     *   }
     * })
     **/
    upsert<T extends poetryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, poetryUpsertArgs<ExtArgs>>,
    ): Prisma__poetryClient<$Result.GetResult<Prisma.$poetryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Poetries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {poetryCountArgs} args - Arguments to filter Poetries to count.
     * @example
     * // Count the number of Poetries
     * const count = await prisma.poetry.count({
     *   where: {
     *     // ... the filter for the Poetries we want to count
     *   }
     * })
     **/
    count<T extends poetryCountArgs>(
      args?: Subset<T, poetryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PoetryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Poetry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoetryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PoetryAggregateArgs>(
      args: Subset<T, PoetryAggregateArgs>,
    ): Prisma.PrismaPromise<GetPoetryAggregateType<T>>;

    /**
     * Group by Poetry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {poetryGroupByArgs} args - Group by arguments.
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
      T extends poetryGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: poetryGroupByArgs['orderBy'] }
        : { orderBy?: poetryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, poetryGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPoetryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the poetry model
     */
    readonly fields: poetryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for poetry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__poetryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the poetry model
   */
  interface poetryFieldRefs {
    readonly id: FieldRef<'poetry', 'String'>;
    readonly title: FieldRef<'poetry', 'String'>;
    readonly content: FieldRef<'poetry', 'String'>;
    readonly creation_date: FieldRef<'poetry', 'DateTime'>;
    readonly last_update_date: FieldRef<'poetry', 'DateTime'>;
    readonly user_id: FieldRef<'poetry', 'String'>;
    readonly created_at: FieldRef<'poetry', 'DateTime'>;
    readonly updated_at: FieldRef<'poetry', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * poetry findUnique
   */
  export type poetryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poetry
     */
    select?: poetrySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: poetryInclude<ExtArgs> | null;
    /**
     * Filter, which poetry to fetch.
     */
    where: poetryWhereUniqueInput;
  };

  /**
   * poetry findUniqueOrThrow
   */
  export type poetryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poetry
     */
    select?: poetrySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: poetryInclude<ExtArgs> | null;
    /**
     * Filter, which poetry to fetch.
     */
    where: poetryWhereUniqueInput;
  };

  /**
   * poetry findFirst
   */
  export type poetryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poetry
     */
    select?: poetrySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: poetryInclude<ExtArgs> | null;
    /**
     * Filter, which poetry to fetch.
     */
    where?: poetryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of poetries to fetch.
     */
    orderBy?: poetryOrderByWithRelationInput | poetryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for poetries.
     */
    cursor?: poetryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` poetries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` poetries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of poetries.
     */
    distinct?: PoetryScalarFieldEnum | PoetryScalarFieldEnum[];
  };

  /**
   * poetry findFirstOrThrow
   */
  export type poetryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poetry
     */
    select?: poetrySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: poetryInclude<ExtArgs> | null;
    /**
     * Filter, which poetry to fetch.
     */
    where?: poetryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of poetries to fetch.
     */
    orderBy?: poetryOrderByWithRelationInput | poetryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for poetries.
     */
    cursor?: poetryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` poetries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` poetries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of poetries.
     */
    distinct?: PoetryScalarFieldEnum | PoetryScalarFieldEnum[];
  };

  /**
   * poetry findMany
   */
  export type poetryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poetry
     */
    select?: poetrySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: poetryInclude<ExtArgs> | null;
    /**
     * Filter, which poetries to fetch.
     */
    where?: poetryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of poetries to fetch.
     */
    orderBy?: poetryOrderByWithRelationInput | poetryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing poetries.
     */
    cursor?: poetryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` poetries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` poetries.
     */
    skip?: number;
    distinct?: PoetryScalarFieldEnum | PoetryScalarFieldEnum[];
  };

  /**
   * poetry create
   */
  export type poetryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poetry
     */
    select?: poetrySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: poetryInclude<ExtArgs> | null;
    /**
     * The data needed to create a poetry.
     */
    data: XOR<poetryCreateInput, poetryUncheckedCreateInput>;
  };

  /**
   * poetry createMany
   */
  export type poetryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many poetries.
     */
    data: poetryCreateManyInput | poetryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * poetry update
   */
  export type poetryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poetry
     */
    select?: poetrySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: poetryInclude<ExtArgs> | null;
    /**
     * The data needed to update a poetry.
     */
    data: XOR<poetryUpdateInput, poetryUncheckedUpdateInput>;
    /**
     * Choose, which poetry to update.
     */
    where: poetryWhereUniqueInput;
  };

  /**
   * poetry updateMany
   */
  export type poetryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update poetries.
     */
    data: XOR<poetryUpdateManyMutationInput, poetryUncheckedUpdateManyInput>;
    /**
     * Filter which poetries to update
     */
    where?: poetryWhereInput;
  };

  /**
   * poetry upsert
   */
  export type poetryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poetry
     */
    select?: poetrySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: poetryInclude<ExtArgs> | null;
    /**
     * The filter to search for the poetry to update in case it exists.
     */
    where: poetryWhereUniqueInput;
    /**
     * In case the poetry found by the `where` argument doesn't exist, create a new poetry with this data.
     */
    create: XOR<poetryCreateInput, poetryUncheckedCreateInput>;
    /**
     * In case the poetry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<poetryUpdateInput, poetryUncheckedUpdateInput>;
  };

  /**
   * poetry delete
   */
  export type poetryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poetry
     */
    select?: poetrySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: poetryInclude<ExtArgs> | null;
    /**
     * Filter which poetry to delete.
     */
    where: poetryWhereUniqueInput;
  };

  /**
   * poetry deleteMany
   */
  export type poetryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which poetries to delete
     */
    where?: poetryWhereInput;
  };

  /**
   * poetry without action
   */
  export type poetryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poetry
     */
    select?: poetrySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: poetryInclude<ExtArgs> | null;
  };

  /**
   * Model show
   */

  export type AggregateShow = {
    _count: ShowCountAggregateOutputType | null;
    _min: ShowMinAggregateOutputType | null;
    _max: ShowMaxAggregateOutputType | null;
  };

  export type ShowMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    date: Date | null;
    location: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ShowMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    date: Date | null;
    location: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ShowCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    date: number;
    location: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ShowMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    date?: true;
    location?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ShowMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    date?: true;
    location?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ShowCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    date?: true;
    location?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ShowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which show to aggregate.
     */
    where?: showWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of shows to fetch.
     */
    orderBy?: showOrderByWithRelationInput | showOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: showWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` shows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` shows.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned shows
     **/
    _count?: true | ShowCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ShowMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ShowMaxAggregateInputType;
  };

  export type GetShowAggregateType<T extends ShowAggregateArgs> = {
    [P in keyof T & keyof AggregateShow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShow[P]>
      : GetScalarType<T[P], AggregateShow[P]>;
  };

  export type showGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: showWhereInput;
    orderBy?: showOrderByWithAggregationInput | showOrderByWithAggregationInput[];
    by: ShowScalarFieldEnum[] | ShowScalarFieldEnum;
    having?: showScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShowCountAggregateInputType | true;
    _min?: ShowMinAggregateInputType;
    _max?: ShowMaxAggregateInputType;
  };

  export type ShowGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    date: Date;
    location: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ShowCountAggregateOutputType | null;
    _min: ShowMinAggregateOutputType | null;
    _max: ShowMaxAggregateOutputType | null;
  };

  type GetShowGroupByPayload<T extends showGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShowGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ShowGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ShowGroupByOutputType[P]>
          : GetScalarType<T[P], ShowGroupByOutputType[P]>;
      }
    >
  >;

  export type showSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      date?: boolean;
      location?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['show']
  >;

  export type showSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    date?: boolean;
    location?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type showInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $showPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'show';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string | null;
        date: Date;
        location: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['show']
    >;
    composites: {};
  };

  type showGetPayload<S extends boolean | null | undefined | showDefaultArgs> = $Result.GetResult<
    Prisma.$showPayload,
    S
  >;

  type showCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    showFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ShowCountAggregateInputType | true;
  };

  export interface showDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['show']; meta: { name: 'show' } };
    /**
     * Find zero or one Show that matches the filter.
     * @param {showFindUniqueArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends showFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, showFindUniqueArgs<ExtArgs>>,
    ): Prisma__showClient<$Result.GetResult<Prisma.$showPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Show that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {showFindUniqueOrThrowArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends showFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, showFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__showClient<$Result.GetResult<Prisma.$showPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Show that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {showFindFirstArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends showFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, showFindFirstArgs<ExtArgs>>,
    ): Prisma__showClient<$Result.GetResult<Prisma.$showPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Show that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {showFindFirstOrThrowArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends showFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, showFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__showClient<$Result.GetResult<Prisma.$showPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Shows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {showFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shows
     * const shows = await prisma.show.findMany()
     *
     * // Get first 10 Shows
     * const shows = await prisma.show.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const showWithIdOnly = await prisma.show.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends showFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, showFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$showPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Show.
     * @param {showCreateArgs} args - Arguments to create a Show.
     * @example
     * // Create one Show
     * const Show = await prisma.show.create({
     *   data: {
     *     // ... data to create a Show
     *   }
     * })
     *
     **/
    create<T extends showCreateArgs<ExtArgs>>(
      args: SelectSubset<T, showCreateArgs<ExtArgs>>,
    ): Prisma__showClient<$Result.GetResult<Prisma.$showPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Shows.
     *     @param {showCreateManyArgs} args - Arguments to create many Shows.
     *     @example
     *     // Create many Shows
     *     const show = await prisma.show.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends showCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, showCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Show.
     * @param {showDeleteArgs} args - Arguments to delete one Show.
     * @example
     * // Delete one Show
     * const Show = await prisma.show.delete({
     *   where: {
     *     // ... filter to delete one Show
     *   }
     * })
     *
     **/
    delete<T extends showDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, showDeleteArgs<ExtArgs>>,
    ): Prisma__showClient<$Result.GetResult<Prisma.$showPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Show.
     * @param {showUpdateArgs} args - Arguments to update one Show.
     * @example
     * // Update one Show
     * const show = await prisma.show.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends showUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, showUpdateArgs<ExtArgs>>,
    ): Prisma__showClient<$Result.GetResult<Prisma.$showPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Shows.
     * @param {showDeleteManyArgs} args - Arguments to filter Shows to delete.
     * @example
     * // Delete a few Shows
     * const { count } = await prisma.show.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends showDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, showDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Shows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {showUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shows
     * const show = await prisma.show.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends showUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, showUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Show.
     * @param {showUpsertArgs} args - Arguments to update or create a Show.
     * @example
     * // Update or create a Show
     * const show = await prisma.show.upsert({
     *   create: {
     *     // ... data to create a Show
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Show we want to update
     *   }
     * })
     **/
    upsert<T extends showUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, showUpsertArgs<ExtArgs>>,
    ): Prisma__showClient<$Result.GetResult<Prisma.$showPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Shows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {showCountArgs} args - Arguments to filter Shows to count.
     * @example
     * // Count the number of Shows
     * const count = await prisma.show.count({
     *   where: {
     *     // ... the filter for the Shows we want to count
     *   }
     * })
     **/
    count<T extends showCountArgs>(
      args?: Subset<T, showCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShowCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Show.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShowAggregateArgs>(
      args: Subset<T, ShowAggregateArgs>,
    ): Prisma.PrismaPromise<GetShowAggregateType<T>>;

    /**
     * Group by Show.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {showGroupByArgs} args - Group by arguments.
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
      T extends showGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: showGroupByArgs['orderBy'] }
        : { orderBy?: showGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, showGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetShowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the show model
     */
    readonly fields: showFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for show.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__showClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the show model
   */
  interface showFieldRefs {
    readonly id: FieldRef<'show', 'String'>;
    readonly title: FieldRef<'show', 'String'>;
    readonly description: FieldRef<'show', 'String'>;
    readonly date: FieldRef<'show', 'DateTime'>;
    readonly location: FieldRef<'show', 'String'>;
    readonly user_id: FieldRef<'show', 'String'>;
    readonly created_at: FieldRef<'show', 'DateTime'>;
    readonly updated_at: FieldRef<'show', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * show findUnique
   */
  export type showFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show
     */
    select?: showSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: showInclude<ExtArgs> | null;
    /**
     * Filter, which show to fetch.
     */
    where: showWhereUniqueInput;
  };

  /**
   * show findUniqueOrThrow
   */
  export type showFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show
     */
    select?: showSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: showInclude<ExtArgs> | null;
    /**
     * Filter, which show to fetch.
     */
    where: showWhereUniqueInput;
  };

  /**
   * show findFirst
   */
  export type showFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show
     */
    select?: showSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: showInclude<ExtArgs> | null;
    /**
     * Filter, which show to fetch.
     */
    where?: showWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of shows to fetch.
     */
    orderBy?: showOrderByWithRelationInput | showOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for shows.
     */
    cursor?: showWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` shows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` shows.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of shows.
     */
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[];
  };

  /**
   * show findFirstOrThrow
   */
  export type showFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show
     */
    select?: showSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: showInclude<ExtArgs> | null;
    /**
     * Filter, which show to fetch.
     */
    where?: showWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of shows to fetch.
     */
    orderBy?: showOrderByWithRelationInput | showOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for shows.
     */
    cursor?: showWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` shows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` shows.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of shows.
     */
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[];
  };

  /**
   * show findMany
   */
  export type showFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show
     */
    select?: showSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: showInclude<ExtArgs> | null;
    /**
     * Filter, which shows to fetch.
     */
    where?: showWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of shows to fetch.
     */
    orderBy?: showOrderByWithRelationInput | showOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing shows.
     */
    cursor?: showWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` shows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` shows.
     */
    skip?: number;
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[];
  };

  /**
   * show create
   */
  export type showCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show
     */
    select?: showSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: showInclude<ExtArgs> | null;
    /**
     * The data needed to create a show.
     */
    data: XOR<showCreateInput, showUncheckedCreateInput>;
  };

  /**
   * show createMany
   */
  export type showCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many shows.
     */
    data: showCreateManyInput | showCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * show update
   */
  export type showUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show
     */
    select?: showSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: showInclude<ExtArgs> | null;
    /**
     * The data needed to update a show.
     */
    data: XOR<showUpdateInput, showUncheckedUpdateInput>;
    /**
     * Choose, which show to update.
     */
    where: showWhereUniqueInput;
  };

  /**
   * show updateMany
   */
  export type showUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update shows.
     */
    data: XOR<showUpdateManyMutationInput, showUncheckedUpdateManyInput>;
    /**
     * Filter which shows to update
     */
    where?: showWhereInput;
  };

  /**
   * show upsert
   */
  export type showUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show
     */
    select?: showSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: showInclude<ExtArgs> | null;
    /**
     * The filter to search for the show to update in case it exists.
     */
    where: showWhereUniqueInput;
    /**
     * In case the show found by the `where` argument doesn't exist, create a new show with this data.
     */
    create: XOR<showCreateInput, showUncheckedCreateInput>;
    /**
     * In case the show was found with the provided `where` argument, update it with this data.
     */
    update: XOR<showUpdateInput, showUncheckedUpdateInput>;
  };

  /**
   * show delete
   */
  export type showDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show
     */
    select?: showSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: showInclude<ExtArgs> | null;
    /**
     * Filter which show to delete.
     */
    where: showWhereUniqueInput;
  };

  /**
   * show deleteMany
   */
  export type showDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shows to delete
     */
    where?: showWhereInput;
  };

  /**
   * show without action
   */
  export type showDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show
     */
    select?: showSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: showInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    organization_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    organization_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    organization_id: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    organization_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    organization_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    organization_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    organization_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      organization_id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      content_creator?: boolean | user$content_creatorArgs<ExtArgs>;
      poetry?: boolean | user$poetryArgs<ExtArgs>;
      show?: boolean | user$showArgs<ExtArgs>;
      organization?: boolean | user$organizationArgs<ExtArgs>;
      video?: boolean | user$videoArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    organization_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content_creator?: boolean | user$content_creatorArgs<ExtArgs>;
    poetry?: boolean | user$poetryArgs<ExtArgs>;
    show?: boolean | user$showArgs<ExtArgs>;
    organization?: boolean | user$organizationArgs<ExtArgs>;
    video?: boolean | user$videoArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      content_creator: Prisma.$content_creatorPayload<ExtArgs>[];
      poetry: Prisma.$poetryPayload<ExtArgs>[];
      show: Prisma.$showPayload<ExtArgs>[];
      organization: Prisma.$organizationPayload<ExtArgs> | null;
      video: Prisma.$videoPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        organization_id: string | null;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    content_creator<T extends user$content_creatorArgs<ExtArgs> = {}>(
      args?: Subset<T, user$content_creatorArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$content_creatorPayload<ExtArgs>, T, 'findMany'> | Null>;

    poetry<T extends user$poetryArgs<ExtArgs> = {}>(
      args?: Subset<T, user$poetryArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$poetryPayload<ExtArgs>, T, 'findMany'> | Null>;

    show<T extends user$showArgs<ExtArgs> = {}>(
      args?: Subset<T, user$showArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$showPayload<ExtArgs>, T, 'findMany'> | Null>;

    organization<T extends user$organizationArgs<ExtArgs> = {}>(
      args?: Subset<T, user$organizationArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;

    video<T extends user$videoArgs<ExtArgs> = {}>(
      args?: Subset<T, user$videoArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly organization_id: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.content_creator
   */
  export type user$content_creatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content_creator
     */
    select?: content_creatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: content_creatorInclude<ExtArgs> | null;
    where?: content_creatorWhereInput;
    orderBy?: content_creatorOrderByWithRelationInput | content_creatorOrderByWithRelationInput[];
    cursor?: content_creatorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Content_creatorScalarFieldEnum | Content_creatorScalarFieldEnum[];
  };

  /**
   * user.poetry
   */
  export type user$poetryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poetry
     */
    select?: poetrySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: poetryInclude<ExtArgs> | null;
    where?: poetryWhereInput;
    orderBy?: poetryOrderByWithRelationInput | poetryOrderByWithRelationInput[];
    cursor?: poetryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PoetryScalarFieldEnum | PoetryScalarFieldEnum[];
  };

  /**
   * user.show
   */
  export type user$showArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show
     */
    select?: showSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: showInclude<ExtArgs> | null;
    where?: showWhereInput;
    orderBy?: showOrderByWithRelationInput | showOrderByWithRelationInput[];
    cursor?: showWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[];
  };

  /**
   * user.organization
   */
  export type user$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    where?: organizationWhereInput;
  };

  /**
   * user.video
   */
  export type user$videoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null;
    where?: videoWhereInput;
    orderBy?: videoOrderByWithRelationInput | videoOrderByWithRelationInput[];
    cursor?: videoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Model video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null;
    _min: VideoMinAggregateOutputType | null;
    _max: VideoMaxAggregateOutputType | null;
  };

  export type VideoMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    url: string | null;
    creation_date: Date | null;
    last_update_date: Date | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type VideoMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    url: string | null;
    creation_date: Date | null;
    last_update_date: Date | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type VideoCountAggregateOutputType = {
    id: number;
    title: number;
    url: number;
    creation_date: number;
    last_update_date: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type VideoMinAggregateInputType = {
    id?: true;
    title?: true;
    url?: true;
    creation_date?: true;
    last_update_date?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type VideoMaxAggregateInputType = {
    id?: true;
    title?: true;
    url?: true;
    creation_date?: true;
    last_update_date?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type VideoCountAggregateInputType = {
    id?: true;
    title?: true;
    url?: true;
    creation_date?: true;
    last_update_date?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which video to aggregate.
     */
    where?: videoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of videos to fetch.
     */
    orderBy?: videoOrderByWithRelationInput | videoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: videoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` videos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` videos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned videos
     **/
    _count?: true | VideoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: VideoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: VideoMaxAggregateInputType;
  };

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
    [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>;
  };

  export type videoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: videoWhereInput;
    orderBy?: videoOrderByWithAggregationInput | videoOrderByWithAggregationInput[];
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum;
    having?: videoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VideoCountAggregateInputType | true;
    _min?: VideoMinAggregateInputType;
    _max?: VideoMaxAggregateInputType;
  };

  export type VideoGroupByOutputType = {
    id: string;
    title: string;
    url: string;
    creation_date: Date;
    last_update_date: Date | null;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: VideoCountAggregateOutputType | null;
    _min: VideoMinAggregateOutputType | null;
    _max: VideoMaxAggregateOutputType | null;
  };

  type GetVideoGroupByPayload<T extends videoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> & {
        [P in keyof T & keyof VideoGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
          : GetScalarType<T[P], VideoGroupByOutputType[P]>;
      }
    >
  >;

  export type videoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      url?: boolean;
      creation_date?: boolean;
      last_update_date?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['video']
  >;

  export type videoSelectScalar = {
    id?: boolean;
    title?: boolean;
    url?: boolean;
    creation_date?: boolean;
    last_update_date?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type videoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $videoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'video';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        url: string;
        creation_date: Date;
        last_update_date: Date | null;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['video']
    >;
    composites: {};
  };

  type videoGetPayload<S extends boolean | null | undefined | videoDefaultArgs> = $Result.GetResult<
    Prisma.$videoPayload,
    S
  >;

  type videoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    videoFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: VideoCountAggregateInputType | true;
  };

  export interface videoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['video']; meta: { name: 'video' } };
    /**
     * Find zero or one Video that matches the filter.
     * @param {videoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends videoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, videoFindUniqueArgs<ExtArgs>>,
    ): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Video that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {videoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends videoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, videoFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends videoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, videoFindFirstArgs<ExtArgs>>,
    ): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends videoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, videoFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     *
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends videoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, videoFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Video.
     * @param {videoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     *
     **/
    create<T extends videoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, videoCreateArgs<ExtArgs>>,
    ): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Videos.
     *     @param {videoCreateManyArgs} args - Arguments to create many Videos.
     *     @example
     *     // Create many Videos
     *     const video = await prisma.video.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends videoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, videoCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Video.
     * @param {videoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     *
     **/
    delete<T extends videoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, videoDeleteArgs<ExtArgs>>,
    ): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Video.
     * @param {videoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends videoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, videoUpdateArgs<ExtArgs>>,
    ): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Videos.
     * @param {videoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends videoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, videoDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends videoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, videoUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Video.
     * @param {videoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     **/
    upsert<T extends videoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, videoUpsertArgs<ExtArgs>>,
    ): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
     **/
    count<T extends videoCountArgs>(
      args?: Subset<T, videoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoAggregateArgs>(
      args: Subset<T, VideoAggregateArgs>,
    ): Prisma.PrismaPromise<GetVideoAggregateType<T>>;

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoGroupByArgs} args - Group by arguments.
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
      T extends videoGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: videoGroupByArgs['orderBy'] }
        : { orderBy?: videoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, videoGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the video model
     */
    readonly fields: videoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__videoClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the video model
   */
  interface videoFieldRefs {
    readonly id: FieldRef<'video', 'String'>;
    readonly title: FieldRef<'video', 'String'>;
    readonly url: FieldRef<'video', 'String'>;
    readonly creation_date: FieldRef<'video', 'DateTime'>;
    readonly last_update_date: FieldRef<'video', 'DateTime'>;
    readonly user_id: FieldRef<'video', 'String'>;
    readonly created_at: FieldRef<'video', 'DateTime'>;
    readonly updated_at: FieldRef<'video', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * video findUnique
   */
  export type videoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null;
    /**
     * Filter, which video to fetch.
     */
    where: videoWhereUniqueInput;
  };

  /**
   * video findUniqueOrThrow
   */
  export type videoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null;
    /**
     * Filter, which video to fetch.
     */
    where: videoWhereUniqueInput;
  };

  /**
   * video findFirst
   */
  export type videoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null;
    /**
     * Filter, which video to fetch.
     */
    where?: videoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of videos to fetch.
     */
    orderBy?: videoOrderByWithRelationInput | videoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for videos.
     */
    cursor?: videoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` videos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` videos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[];
  };

  /**
   * video findFirstOrThrow
   */
  export type videoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null;
    /**
     * Filter, which video to fetch.
     */
    where?: videoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of videos to fetch.
     */
    orderBy?: videoOrderByWithRelationInput | videoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for videos.
     */
    cursor?: videoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` videos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` videos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[];
  };

  /**
   * video findMany
   */
  export type videoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null;
    /**
     * Filter, which videos to fetch.
     */
    where?: videoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of videos to fetch.
     */
    orderBy?: videoOrderByWithRelationInput | videoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing videos.
     */
    cursor?: videoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` videos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` videos.
     */
    skip?: number;
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[];
  };

  /**
   * video create
   */
  export type videoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null;
    /**
     * The data needed to create a video.
     */
    data: XOR<videoCreateInput, videoUncheckedCreateInput>;
  };

  /**
   * video createMany
   */
  export type videoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many videos.
     */
    data: videoCreateManyInput | videoCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * video update
   */
  export type videoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null;
    /**
     * The data needed to update a video.
     */
    data: XOR<videoUpdateInput, videoUncheckedUpdateInput>;
    /**
     * Choose, which video to update.
     */
    where: videoWhereUniqueInput;
  };

  /**
   * video updateMany
   */
  export type videoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update videos.
     */
    data: XOR<videoUpdateManyMutationInput, videoUncheckedUpdateManyInput>;
    /**
     * Filter which videos to update
     */
    where?: videoWhereInput;
  };

  /**
   * video upsert
   */
  export type videoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null;
    /**
     * The filter to search for the video to update in case it exists.
     */
    where: videoWhereUniqueInput;
    /**
     * In case the video found by the `where` argument doesn't exist, create a new video with this data.
     */
    create: XOR<videoCreateInput, videoUncheckedCreateInput>;
    /**
     * In case the video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<videoUpdateInput, videoUncheckedUpdateInput>;
  };

  /**
   * video delete
   */
  export type videoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null;
    /**
     * Filter which video to delete.
     */
    where: videoWhereUniqueInput;
  };

  /**
   * video deleteMany
   */
  export type videoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which videos to delete
     */
    where?: videoWhereInput;
  };

  /**
   * video without action
   */
  export type videoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const Content_creatorScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    bio: 'bio';
    website: 'website';
    social_media_handle: 'social_media_handle';
    specialty: 'specialty';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Content_creatorScalarFieldEnum =
    (typeof Content_creatorScalarFieldEnum)[keyof typeof Content_creatorScalarFieldEnum];

  export const OrganizationScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type OrganizationScalarFieldEnum =
    (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];

  export const PoetryScalarFieldEnum: {
    id: 'id';
    title: 'title';
    content: 'content';
    creation_date: 'creation_date';
    last_update_date: 'last_update_date';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type PoetryScalarFieldEnum = (typeof PoetryScalarFieldEnum)[keyof typeof PoetryScalarFieldEnum];

  export const ShowScalarFieldEnum: {
    id: 'id';
    title: 'title';
    description: 'description';
    date: 'date';
    location: 'location';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ShowScalarFieldEnum = (typeof ShowScalarFieldEnum)[keyof typeof ShowScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    organization_id: 'organization_id';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const VideoScalarFieldEnum: {
    id: 'id';
    title: 'title';
    url: 'url';
    creation_date: 'creation_date';
    last_update_date: 'last_update_date';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Deep Input Types
   */

  export type content_creatorWhereInput = {
    AND?: content_creatorWhereInput | content_creatorWhereInput[];
    OR?: content_creatorWhereInput[];
    NOT?: content_creatorWhereInput | content_creatorWhereInput[];
    id?: UuidFilter<'content_creator'> | string;
    user_id?: UuidFilter<'content_creator'> | string;
    bio?: StringNullableFilter<'content_creator'> | string | null;
    website?: StringNullableFilter<'content_creator'> | string | null;
    social_media_handle?: StringNullableFilter<'content_creator'> | string | null;
    specialty?: StringNullableFilter<'content_creator'> | string | null;
    created_at?: DateTimeFilter<'content_creator'> | Date | string;
    updated_at?: DateTimeFilter<'content_creator'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type content_creatorOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    bio?: SortOrderInput | SortOrder;
    website?: SortOrderInput | SortOrder;
    social_media_handle?: SortOrderInput | SortOrder;
    specialty?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type content_creatorWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: content_creatorWhereInput | content_creatorWhereInput[];
      OR?: content_creatorWhereInput[];
      NOT?: content_creatorWhereInput | content_creatorWhereInput[];
      user_id?: UuidFilter<'content_creator'> | string;
      bio?: StringNullableFilter<'content_creator'> | string | null;
      website?: StringNullableFilter<'content_creator'> | string | null;
      social_media_handle?: StringNullableFilter<'content_creator'> | string | null;
      specialty?: StringNullableFilter<'content_creator'> | string | null;
      created_at?: DateTimeFilter<'content_creator'> | Date | string;
      updated_at?: DateTimeFilter<'content_creator'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type content_creatorOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    bio?: SortOrderInput | SortOrder;
    website?: SortOrderInput | SortOrder;
    social_media_handle?: SortOrderInput | SortOrder;
    specialty?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: content_creatorCountOrderByAggregateInput;
    _max?: content_creatorMaxOrderByAggregateInput;
    _min?: content_creatorMinOrderByAggregateInput;
  };

  export type content_creatorScalarWhereWithAggregatesInput = {
    AND?: content_creatorScalarWhereWithAggregatesInput | content_creatorScalarWhereWithAggregatesInput[];
    OR?: content_creatorScalarWhereWithAggregatesInput[];
    NOT?: content_creatorScalarWhereWithAggregatesInput | content_creatorScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'content_creator'> | string;
    user_id?: UuidWithAggregatesFilter<'content_creator'> | string;
    bio?: StringNullableWithAggregatesFilter<'content_creator'> | string | null;
    website?: StringNullableWithAggregatesFilter<'content_creator'> | string | null;
    social_media_handle?: StringNullableWithAggregatesFilter<'content_creator'> | string | null;
    specialty?: StringNullableWithAggregatesFilter<'content_creator'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'content_creator'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'content_creator'> | Date | string;
  };

  export type organizationWhereInput = {
    AND?: organizationWhereInput | organizationWhereInput[];
    OR?: organizationWhereInput[];
    NOT?: organizationWhereInput | organizationWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    user?: UserListRelationFilter;
  };

  export type organizationOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByRelationAggregateInput;
  };

  export type organizationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: organizationWhereInput | organizationWhereInput[];
      OR?: organizationWhereInput[];
      NOT?: organizationWhereInput | organizationWhereInput[];
      description?: StringNullableFilter<'organization'> | string | null;
      name?: StringFilter<'organization'> | string;
      created_at?: DateTimeFilter<'organization'> | Date | string;
      updated_at?: DateTimeFilter<'organization'> | Date | string;
      user?: UserListRelationFilter;
    },
    'id'
  >;

  export type organizationOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: organizationCountOrderByAggregateInput;
    _max?: organizationMaxOrderByAggregateInput;
    _min?: organizationMinOrderByAggregateInput;
  };

  export type organizationScalarWhereWithAggregatesInput = {
    AND?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    OR?: organizationScalarWhereWithAggregatesInput[];
    NOT?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'organization'> | string;
    description?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    name?: StringWithAggregatesFilter<'organization'> | string;
    created_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
  };

  export type poetryWhereInput = {
    AND?: poetryWhereInput | poetryWhereInput[];
    OR?: poetryWhereInput[];
    NOT?: poetryWhereInput | poetryWhereInput[];
    id?: UuidFilter<'poetry'> | string;
    title?: StringFilter<'poetry'> | string;
    content?: StringFilter<'poetry'> | string;
    creation_date?: DateTimeFilter<'poetry'> | Date | string;
    last_update_date?: DateTimeNullableFilter<'poetry'> | Date | string | null;
    user_id?: UuidFilter<'poetry'> | string;
    created_at?: DateTimeFilter<'poetry'> | Date | string;
    updated_at?: DateTimeFilter<'poetry'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type poetryOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    creation_date?: SortOrder;
    last_update_date?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type poetryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: poetryWhereInput | poetryWhereInput[];
      OR?: poetryWhereInput[];
      NOT?: poetryWhereInput | poetryWhereInput[];
      title?: StringFilter<'poetry'> | string;
      content?: StringFilter<'poetry'> | string;
      creation_date?: DateTimeFilter<'poetry'> | Date | string;
      last_update_date?: DateTimeNullableFilter<'poetry'> | Date | string | null;
      user_id?: UuidFilter<'poetry'> | string;
      created_at?: DateTimeFilter<'poetry'> | Date | string;
      updated_at?: DateTimeFilter<'poetry'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type poetryOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    creation_date?: SortOrder;
    last_update_date?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: poetryCountOrderByAggregateInput;
    _max?: poetryMaxOrderByAggregateInput;
    _min?: poetryMinOrderByAggregateInput;
  };

  export type poetryScalarWhereWithAggregatesInput = {
    AND?: poetryScalarWhereWithAggregatesInput | poetryScalarWhereWithAggregatesInput[];
    OR?: poetryScalarWhereWithAggregatesInput[];
    NOT?: poetryScalarWhereWithAggregatesInput | poetryScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'poetry'> | string;
    title?: StringWithAggregatesFilter<'poetry'> | string;
    content?: StringWithAggregatesFilter<'poetry'> | string;
    creation_date?: DateTimeWithAggregatesFilter<'poetry'> | Date | string;
    last_update_date?: DateTimeNullableWithAggregatesFilter<'poetry'> | Date | string | null;
    user_id?: UuidWithAggregatesFilter<'poetry'> | string;
    created_at?: DateTimeWithAggregatesFilter<'poetry'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'poetry'> | Date | string;
  };

  export type showWhereInput = {
    AND?: showWhereInput | showWhereInput[];
    OR?: showWhereInput[];
    NOT?: showWhereInput | showWhereInput[];
    id?: UuidFilter<'show'> | string;
    title?: StringFilter<'show'> | string;
    description?: StringNullableFilter<'show'> | string | null;
    date?: DateTimeFilter<'show'> | Date | string;
    location?: StringFilter<'show'> | string;
    user_id?: UuidFilter<'show'> | string;
    created_at?: DateTimeFilter<'show'> | Date | string;
    updated_at?: DateTimeFilter<'show'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type showOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    date?: SortOrder;
    location?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type showWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: showWhereInput | showWhereInput[];
      OR?: showWhereInput[];
      NOT?: showWhereInput | showWhereInput[];
      title?: StringFilter<'show'> | string;
      description?: StringNullableFilter<'show'> | string | null;
      date?: DateTimeFilter<'show'> | Date | string;
      location?: StringFilter<'show'> | string;
      user_id?: UuidFilter<'show'> | string;
      created_at?: DateTimeFilter<'show'> | Date | string;
      updated_at?: DateTimeFilter<'show'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type showOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    date?: SortOrder;
    location?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: showCountOrderByAggregateInput;
    _max?: showMaxOrderByAggregateInput;
    _min?: showMinOrderByAggregateInput;
  };

  export type showScalarWhereWithAggregatesInput = {
    AND?: showScalarWhereWithAggregatesInput | showScalarWhereWithAggregatesInput[];
    OR?: showScalarWhereWithAggregatesInput[];
    NOT?: showScalarWhereWithAggregatesInput | showScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'show'> | string;
    title?: StringWithAggregatesFilter<'show'> | string;
    description?: StringNullableWithAggregatesFilter<'show'> | string | null;
    date?: DateTimeWithAggregatesFilter<'show'> | Date | string;
    location?: StringWithAggregatesFilter<'show'> | string;
    user_id?: UuidWithAggregatesFilter<'show'> | string;
    created_at?: DateTimeWithAggregatesFilter<'show'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'show'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    organization_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    content_creator?: Content_creatorListRelationFilter;
    poetry?: PoetryListRelationFilter;
    show?: ShowListRelationFilter;
    organization?: XOR<OrganizationNullableRelationFilter, organizationWhereInput> | null;
    video?: VideoListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    organization_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    content_creator?: content_creatorOrderByRelationAggregateInput;
    poetry?: poetryOrderByRelationAggregateInput;
    show?: showOrderByRelationAggregateInput;
    organization?: organizationOrderByWithRelationInput;
    video?: videoOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      organization_id?: UuidNullableFilter<'user'> | string | null;
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      content_creator?: Content_creatorListRelationFilter;
      poetry?: PoetryListRelationFilter;
      show?: ShowListRelationFilter;
      organization?: XOR<OrganizationNullableRelationFilter, organizationWhereInput> | null;
      video?: VideoListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    organization_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    organization_id?: UuidNullableWithAggregatesFilter<'user'> | string | null;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type videoWhereInput = {
    AND?: videoWhereInput | videoWhereInput[];
    OR?: videoWhereInput[];
    NOT?: videoWhereInput | videoWhereInput[];
    id?: UuidFilter<'video'> | string;
    title?: StringFilter<'video'> | string;
    url?: StringFilter<'video'> | string;
    creation_date?: DateTimeFilter<'video'> | Date | string;
    last_update_date?: DateTimeNullableFilter<'video'> | Date | string | null;
    user_id?: UuidFilter<'video'> | string;
    created_at?: DateTimeFilter<'video'> | Date | string;
    updated_at?: DateTimeFilter<'video'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type videoOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    url?: SortOrder;
    creation_date?: SortOrder;
    last_update_date?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type videoWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: videoWhereInput | videoWhereInput[];
      OR?: videoWhereInput[];
      NOT?: videoWhereInput | videoWhereInput[];
      title?: StringFilter<'video'> | string;
      url?: StringFilter<'video'> | string;
      creation_date?: DateTimeFilter<'video'> | Date | string;
      last_update_date?: DateTimeNullableFilter<'video'> | Date | string | null;
      user_id?: UuidFilter<'video'> | string;
      created_at?: DateTimeFilter<'video'> | Date | string;
      updated_at?: DateTimeFilter<'video'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type videoOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    url?: SortOrder;
    creation_date?: SortOrder;
    last_update_date?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: videoCountOrderByAggregateInput;
    _max?: videoMaxOrderByAggregateInput;
    _min?: videoMinOrderByAggregateInput;
  };

  export type videoScalarWhereWithAggregatesInput = {
    AND?: videoScalarWhereWithAggregatesInput | videoScalarWhereWithAggregatesInput[];
    OR?: videoScalarWhereWithAggregatesInput[];
    NOT?: videoScalarWhereWithAggregatesInput | videoScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'video'> | string;
    title?: StringWithAggregatesFilter<'video'> | string;
    url?: StringWithAggregatesFilter<'video'> | string;
    creation_date?: DateTimeWithAggregatesFilter<'video'> | Date | string;
    last_update_date?: DateTimeNullableWithAggregatesFilter<'video'> | Date | string | null;
    user_id?: UuidWithAggregatesFilter<'video'> | string;
    created_at?: DateTimeWithAggregatesFilter<'video'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'video'> | Date | string;
  };

  export type content_creatorCreateInput = {
    id?: string;
    bio?: string | null;
    website?: string | null;
    social_media_handle?: string | null;
    specialty?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutContent_creatorInput;
  };

  export type content_creatorUncheckedCreateInput = {
    id?: string;
    user_id: string;
    bio?: string | null;
    website?: string | null;
    social_media_handle?: string | null;
    specialty?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type content_creatorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    social_media_handle?: NullableStringFieldUpdateOperationsInput | string | null;
    specialty?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutContent_creatorNestedInput;
  };

  export type content_creatorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    social_media_handle?: NullableStringFieldUpdateOperationsInput | string | null;
    specialty?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type content_creatorCreateManyInput = {
    id?: string;
    user_id: string;
    bio?: string | null;
    website?: string | null;
    social_media_handle?: string | null;
    specialty?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type content_creatorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    social_media_handle?: NullableStringFieldUpdateOperationsInput | string | null;
    specialty?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type content_creatorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    social_media_handle?: NullableStringFieldUpdateOperationsInput | string | null;
    specialty?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type organizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type poetryCreateInput = {
    id?: string;
    title: string;
    content: string;
    creation_date: Date | string;
    last_update_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutPoetryInput;
  };

  export type poetryUncheckedCreateInput = {
    id?: string;
    title: string;
    content: string;
    creation_date: Date | string;
    last_update_date?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type poetryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    last_update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutPoetryNestedInput;
  };

  export type poetryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    last_update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type poetryCreateManyInput = {
    id?: string;
    title: string;
    content: string;
    creation_date: Date | string;
    last_update_date?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type poetryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    last_update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type poetryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    last_update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type showCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    date: Date | string;
    location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutShowInput;
  };

  export type showUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    date: Date | string;
    location: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type showUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutShowNestedInput;
  };

  export type showUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type showCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    date: Date | string;
    location: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type showUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type showUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content_creator?: content_creatorCreateNestedManyWithoutUserInput;
    poetry?: poetryCreateNestedManyWithoutUserInput;
    show?: showCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedOneWithoutUserInput;
    video?: videoCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    organization_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content_creator?: content_creatorUncheckedCreateNestedManyWithoutUserInput;
    poetry?: poetryUncheckedCreateNestedManyWithoutUserInput;
    show?: showUncheckedCreateNestedManyWithoutUserInput;
    video?: videoUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content_creator?: content_creatorUpdateManyWithoutUserNestedInput;
    poetry?: poetryUpdateManyWithoutUserNestedInput;
    show?: showUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateOneWithoutUserNestedInput;
    video?: videoUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    organization_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content_creator?: content_creatorUncheckedUpdateManyWithoutUserNestedInput;
    poetry?: poetryUncheckedUpdateManyWithoutUserNestedInput;
    show?: showUncheckedUpdateManyWithoutUserNestedInput;
    video?: videoUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    organization_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    organization_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type videoCreateInput = {
    id?: string;
    title: string;
    url: string;
    creation_date: Date | string;
    last_update_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutVideoInput;
  };

  export type videoUncheckedCreateInput = {
    id?: string;
    title: string;
    url: string;
    creation_date: Date | string;
    last_update_date?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type videoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    last_update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutVideoNestedInput;
  };

  export type videoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    last_update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type videoCreateManyInput = {
    id?: string;
    title: string;
    url: string;
    creation_date: Date | string;
    last_update_date?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type videoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    last_update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type videoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    last_update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type content_creatorCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    bio?: SortOrder;
    website?: SortOrder;
    social_media_handle?: SortOrder;
    specialty?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type content_creatorMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    bio?: SortOrder;
    website?: SortOrder;
    social_media_handle?: SortOrder;
    specialty?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type content_creatorMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    bio?: SortOrder;
    website?: SortOrder;
    social_media_handle?: SortOrder;
    specialty?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type UserListRelationFilter = {
    every?: userWhereInput;
    some?: userWhereInput;
    none?: userWhereInput;
  };

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type organizationCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type organizationMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type organizationMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type poetryCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    creation_date?: SortOrder;
    last_update_date?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type poetryMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    creation_date?: SortOrder;
    last_update_date?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type poetryMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    creation_date?: SortOrder;
    last_update_date?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type showCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    date?: SortOrder;
    location?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type showMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    date?: SortOrder;
    location?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type showMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    date?: SortOrder;
    location?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type Content_creatorListRelationFilter = {
    every?: content_creatorWhereInput;
    some?: content_creatorWhereInput;
    none?: content_creatorWhereInput;
  };

  export type PoetryListRelationFilter = {
    every?: poetryWhereInput;
    some?: poetryWhereInput;
    none?: poetryWhereInput;
  };

  export type ShowListRelationFilter = {
    every?: showWhereInput;
    some?: showWhereInput;
    none?: showWhereInput;
  };

  export type OrganizationNullableRelationFilter = {
    is?: organizationWhereInput | null;
    isNot?: organizationWhereInput | null;
  };

  export type VideoListRelationFilter = {
    every?: videoWhereInput;
    some?: videoWhereInput;
    none?: videoWhereInput;
  };

  export type content_creatorOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type poetryOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type showOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type videoOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    organization_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    organization_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    organization_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type videoCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    url?: SortOrder;
    creation_date?: SortOrder;
    last_update_date?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type videoMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    url?: SortOrder;
    creation_date?: SortOrder;
    last_update_date?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type videoMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    url?: SortOrder;
    creation_date?: SortOrder;
    last_update_date?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCreateNestedOneWithoutContent_creatorInput = {
    create?: XOR<userCreateWithoutContent_creatorInput, userUncheckedCreateWithoutContent_creatorInput>;
    connectOrCreate?: userCreateOrConnectWithoutContent_creatorInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutContent_creatorNestedInput = {
    create?: XOR<userCreateWithoutContent_creatorInput, userUncheckedCreateWithoutContent_creatorInput>;
    connectOrCreate?: userCreateOrConnectWithoutContent_creatorInput;
    upsert?: userUpsertWithoutContent_creatorInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutContent_creatorInput, userUpdateWithoutContent_creatorInput>,
      userUncheckedUpdateWithoutContent_creatorInput
    >;
  };

  export type userCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>
      | userCreateWithoutOrganizationInput[]
      | userUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput | userCreateOrConnectWithoutOrganizationInput[];
    createMany?: userCreateManyOrganizationInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type userUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>
      | userCreateWithoutOrganizationInput[]
      | userUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput | userCreateOrConnectWithoutOrganizationInput[];
    createMany?: userCreateManyOrganizationInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type userUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>
      | userCreateWithoutOrganizationInput[]
      | userUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput | userCreateOrConnectWithoutOrganizationInput[];
    upsert?: userUpsertWithWhereUniqueWithoutOrganizationInput | userUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: userCreateManyOrganizationInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutOrganizationInput | userUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: userUpdateManyWithWhereWithoutOrganizationInput | userUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type userUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>
      | userCreateWithoutOrganizationInput[]
      | userUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput | userCreateOrConnectWithoutOrganizationInput[];
    upsert?: userUpsertWithWhereUniqueWithoutOrganizationInput | userUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: userCreateManyOrganizationInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutOrganizationInput | userUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: userUpdateManyWithWhereWithoutOrganizationInput | userUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type userCreateNestedOneWithoutPoetryInput = {
    create?: XOR<userCreateWithoutPoetryInput, userUncheckedCreateWithoutPoetryInput>;
    connectOrCreate?: userCreateOrConnectWithoutPoetryInput;
    connect?: userWhereUniqueInput;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type userUpdateOneRequiredWithoutPoetryNestedInput = {
    create?: XOR<userCreateWithoutPoetryInput, userUncheckedCreateWithoutPoetryInput>;
    connectOrCreate?: userCreateOrConnectWithoutPoetryInput;
    upsert?: userUpsertWithoutPoetryInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutPoetryInput, userUpdateWithoutPoetryInput>,
      userUncheckedUpdateWithoutPoetryInput
    >;
  };

  export type userCreateNestedOneWithoutShowInput = {
    create?: XOR<userCreateWithoutShowInput, userUncheckedCreateWithoutShowInput>;
    connectOrCreate?: userCreateOrConnectWithoutShowInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutShowNestedInput = {
    create?: XOR<userCreateWithoutShowInput, userUncheckedCreateWithoutShowInput>;
    connectOrCreate?: userCreateOrConnectWithoutShowInput;
    upsert?: userUpsertWithoutShowInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutShowInput, userUpdateWithoutShowInput>,
      userUncheckedUpdateWithoutShowInput
    >;
  };

  export type content_creatorCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<content_creatorCreateWithoutUserInput, content_creatorUncheckedCreateWithoutUserInput>
      | content_creatorCreateWithoutUserInput[]
      | content_creatorUncheckedCreateWithoutUserInput[];
    connectOrCreate?: content_creatorCreateOrConnectWithoutUserInput | content_creatorCreateOrConnectWithoutUserInput[];
    createMany?: content_creatorCreateManyUserInputEnvelope;
    connect?: content_creatorWhereUniqueInput | content_creatorWhereUniqueInput[];
  };

  export type poetryCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<poetryCreateWithoutUserInput, poetryUncheckedCreateWithoutUserInput>
      | poetryCreateWithoutUserInput[]
      | poetryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: poetryCreateOrConnectWithoutUserInput | poetryCreateOrConnectWithoutUserInput[];
    createMany?: poetryCreateManyUserInputEnvelope;
    connect?: poetryWhereUniqueInput | poetryWhereUniqueInput[];
  };

  export type showCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<showCreateWithoutUserInput, showUncheckedCreateWithoutUserInput>
      | showCreateWithoutUserInput[]
      | showUncheckedCreateWithoutUserInput[];
    connectOrCreate?: showCreateOrConnectWithoutUserInput | showCreateOrConnectWithoutUserInput[];
    createMany?: showCreateManyUserInputEnvelope;
    connect?: showWhereUniqueInput | showWhereUniqueInput[];
  };

  export type organizationCreateNestedOneWithoutUserInput = {
    create?: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput;
    connect?: organizationWhereUniqueInput;
  };

  export type videoCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<videoCreateWithoutUserInput, videoUncheckedCreateWithoutUserInput>
      | videoCreateWithoutUserInput[]
      | videoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: videoCreateOrConnectWithoutUserInput | videoCreateOrConnectWithoutUserInput[];
    createMany?: videoCreateManyUserInputEnvelope;
    connect?: videoWhereUniqueInput | videoWhereUniqueInput[];
  };

  export type content_creatorUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<content_creatorCreateWithoutUserInput, content_creatorUncheckedCreateWithoutUserInput>
      | content_creatorCreateWithoutUserInput[]
      | content_creatorUncheckedCreateWithoutUserInput[];
    connectOrCreate?: content_creatorCreateOrConnectWithoutUserInput | content_creatorCreateOrConnectWithoutUserInput[];
    createMany?: content_creatorCreateManyUserInputEnvelope;
    connect?: content_creatorWhereUniqueInput | content_creatorWhereUniqueInput[];
  };

  export type poetryUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<poetryCreateWithoutUserInput, poetryUncheckedCreateWithoutUserInput>
      | poetryCreateWithoutUserInput[]
      | poetryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: poetryCreateOrConnectWithoutUserInput | poetryCreateOrConnectWithoutUserInput[];
    createMany?: poetryCreateManyUserInputEnvelope;
    connect?: poetryWhereUniqueInput | poetryWhereUniqueInput[];
  };

  export type showUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<showCreateWithoutUserInput, showUncheckedCreateWithoutUserInput>
      | showCreateWithoutUserInput[]
      | showUncheckedCreateWithoutUserInput[];
    connectOrCreate?: showCreateOrConnectWithoutUserInput | showCreateOrConnectWithoutUserInput[];
    createMany?: showCreateManyUserInputEnvelope;
    connect?: showWhereUniqueInput | showWhereUniqueInput[];
  };

  export type videoUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<videoCreateWithoutUserInput, videoUncheckedCreateWithoutUserInput>
      | videoCreateWithoutUserInput[]
      | videoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: videoCreateOrConnectWithoutUserInput | videoCreateOrConnectWithoutUserInput[];
    createMany?: videoCreateManyUserInputEnvelope;
    connect?: videoWhereUniqueInput | videoWhereUniqueInput[];
  };

  export type content_creatorUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<content_creatorCreateWithoutUserInput, content_creatorUncheckedCreateWithoutUserInput>
      | content_creatorCreateWithoutUserInput[]
      | content_creatorUncheckedCreateWithoutUserInput[];
    connectOrCreate?: content_creatorCreateOrConnectWithoutUserInput | content_creatorCreateOrConnectWithoutUserInput[];
    upsert?:
      | content_creatorUpsertWithWhereUniqueWithoutUserInput
      | content_creatorUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: content_creatorCreateManyUserInputEnvelope;
    set?: content_creatorWhereUniqueInput | content_creatorWhereUniqueInput[];
    disconnect?: content_creatorWhereUniqueInput | content_creatorWhereUniqueInput[];
    delete?: content_creatorWhereUniqueInput | content_creatorWhereUniqueInput[];
    connect?: content_creatorWhereUniqueInput | content_creatorWhereUniqueInput[];
    update?:
      | content_creatorUpdateWithWhereUniqueWithoutUserInput
      | content_creatorUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | content_creatorUpdateManyWithWhereWithoutUserInput
      | content_creatorUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: content_creatorScalarWhereInput | content_creatorScalarWhereInput[];
  };

  export type poetryUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<poetryCreateWithoutUserInput, poetryUncheckedCreateWithoutUserInput>
      | poetryCreateWithoutUserInput[]
      | poetryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: poetryCreateOrConnectWithoutUserInput | poetryCreateOrConnectWithoutUserInput[];
    upsert?: poetryUpsertWithWhereUniqueWithoutUserInput | poetryUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: poetryCreateManyUserInputEnvelope;
    set?: poetryWhereUniqueInput | poetryWhereUniqueInput[];
    disconnect?: poetryWhereUniqueInput | poetryWhereUniqueInput[];
    delete?: poetryWhereUniqueInput | poetryWhereUniqueInput[];
    connect?: poetryWhereUniqueInput | poetryWhereUniqueInput[];
    update?: poetryUpdateWithWhereUniqueWithoutUserInput | poetryUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: poetryUpdateManyWithWhereWithoutUserInput | poetryUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: poetryScalarWhereInput | poetryScalarWhereInput[];
  };

  export type showUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<showCreateWithoutUserInput, showUncheckedCreateWithoutUserInput>
      | showCreateWithoutUserInput[]
      | showUncheckedCreateWithoutUserInput[];
    connectOrCreate?: showCreateOrConnectWithoutUserInput | showCreateOrConnectWithoutUserInput[];
    upsert?: showUpsertWithWhereUniqueWithoutUserInput | showUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: showCreateManyUserInputEnvelope;
    set?: showWhereUniqueInput | showWhereUniqueInput[];
    disconnect?: showWhereUniqueInput | showWhereUniqueInput[];
    delete?: showWhereUniqueInput | showWhereUniqueInput[];
    connect?: showWhereUniqueInput | showWhereUniqueInput[];
    update?: showUpdateWithWhereUniqueWithoutUserInput | showUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: showUpdateManyWithWhereWithoutUserInput | showUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: showScalarWhereInput | showScalarWhereInput[];
  };

  export type organizationUpdateOneWithoutUserNestedInput = {
    create?: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput;
    upsert?: organizationUpsertWithoutUserInput;
    disconnect?: organizationWhereInput | boolean;
    delete?: organizationWhereInput | boolean;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutUserInput, organizationUpdateWithoutUserInput>,
      organizationUncheckedUpdateWithoutUserInput
    >;
  };

  export type videoUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<videoCreateWithoutUserInput, videoUncheckedCreateWithoutUserInput>
      | videoCreateWithoutUserInput[]
      | videoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: videoCreateOrConnectWithoutUserInput | videoCreateOrConnectWithoutUserInput[];
    upsert?: videoUpsertWithWhereUniqueWithoutUserInput | videoUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: videoCreateManyUserInputEnvelope;
    set?: videoWhereUniqueInput | videoWhereUniqueInput[];
    disconnect?: videoWhereUniqueInput | videoWhereUniqueInput[];
    delete?: videoWhereUniqueInput | videoWhereUniqueInput[];
    connect?: videoWhereUniqueInput | videoWhereUniqueInput[];
    update?: videoUpdateWithWhereUniqueWithoutUserInput | videoUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: videoUpdateManyWithWhereWithoutUserInput | videoUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: videoScalarWhereInput | videoScalarWhereInput[];
  };

  export type content_creatorUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<content_creatorCreateWithoutUserInput, content_creatorUncheckedCreateWithoutUserInput>
      | content_creatorCreateWithoutUserInput[]
      | content_creatorUncheckedCreateWithoutUserInput[];
    connectOrCreate?: content_creatorCreateOrConnectWithoutUserInput | content_creatorCreateOrConnectWithoutUserInput[];
    upsert?:
      | content_creatorUpsertWithWhereUniqueWithoutUserInput
      | content_creatorUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: content_creatorCreateManyUserInputEnvelope;
    set?: content_creatorWhereUniqueInput | content_creatorWhereUniqueInput[];
    disconnect?: content_creatorWhereUniqueInput | content_creatorWhereUniqueInput[];
    delete?: content_creatorWhereUniqueInput | content_creatorWhereUniqueInput[];
    connect?: content_creatorWhereUniqueInput | content_creatorWhereUniqueInput[];
    update?:
      | content_creatorUpdateWithWhereUniqueWithoutUserInput
      | content_creatorUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | content_creatorUpdateManyWithWhereWithoutUserInput
      | content_creatorUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: content_creatorScalarWhereInput | content_creatorScalarWhereInput[];
  };

  export type poetryUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<poetryCreateWithoutUserInput, poetryUncheckedCreateWithoutUserInput>
      | poetryCreateWithoutUserInput[]
      | poetryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: poetryCreateOrConnectWithoutUserInput | poetryCreateOrConnectWithoutUserInput[];
    upsert?: poetryUpsertWithWhereUniqueWithoutUserInput | poetryUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: poetryCreateManyUserInputEnvelope;
    set?: poetryWhereUniqueInput | poetryWhereUniqueInput[];
    disconnect?: poetryWhereUniqueInput | poetryWhereUniqueInput[];
    delete?: poetryWhereUniqueInput | poetryWhereUniqueInput[];
    connect?: poetryWhereUniqueInput | poetryWhereUniqueInput[];
    update?: poetryUpdateWithWhereUniqueWithoutUserInput | poetryUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: poetryUpdateManyWithWhereWithoutUserInput | poetryUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: poetryScalarWhereInput | poetryScalarWhereInput[];
  };

  export type showUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<showCreateWithoutUserInput, showUncheckedCreateWithoutUserInput>
      | showCreateWithoutUserInput[]
      | showUncheckedCreateWithoutUserInput[];
    connectOrCreate?: showCreateOrConnectWithoutUserInput | showCreateOrConnectWithoutUserInput[];
    upsert?: showUpsertWithWhereUniqueWithoutUserInput | showUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: showCreateManyUserInputEnvelope;
    set?: showWhereUniqueInput | showWhereUniqueInput[];
    disconnect?: showWhereUniqueInput | showWhereUniqueInput[];
    delete?: showWhereUniqueInput | showWhereUniqueInput[];
    connect?: showWhereUniqueInput | showWhereUniqueInput[];
    update?: showUpdateWithWhereUniqueWithoutUserInput | showUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: showUpdateManyWithWhereWithoutUserInput | showUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: showScalarWhereInput | showScalarWhereInput[];
  };

  export type videoUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<videoCreateWithoutUserInput, videoUncheckedCreateWithoutUserInput>
      | videoCreateWithoutUserInput[]
      | videoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: videoCreateOrConnectWithoutUserInput | videoCreateOrConnectWithoutUserInput[];
    upsert?: videoUpsertWithWhereUniqueWithoutUserInput | videoUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: videoCreateManyUserInputEnvelope;
    set?: videoWhereUniqueInput | videoWhereUniqueInput[];
    disconnect?: videoWhereUniqueInput | videoWhereUniqueInput[];
    delete?: videoWhereUniqueInput | videoWhereUniqueInput[];
    connect?: videoWhereUniqueInput | videoWhereUniqueInput[];
    update?: videoUpdateWithWhereUniqueWithoutUserInput | videoUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: videoUpdateManyWithWhereWithoutUserInput | videoUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: videoScalarWhereInput | videoScalarWhereInput[];
  };

  export type userCreateNestedOneWithoutVideoInput = {
    create?: XOR<userCreateWithoutVideoInput, userUncheckedCreateWithoutVideoInput>;
    connectOrCreate?: userCreateOrConnectWithoutVideoInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutVideoNestedInput = {
    create?: XOR<userCreateWithoutVideoInput, userUncheckedCreateWithoutVideoInput>;
    connectOrCreate?: userCreateOrConnectWithoutVideoInput;
    upsert?: userUpsertWithoutVideoInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutVideoInput, userUpdateWithoutVideoInput>,
      userUncheckedUpdateWithoutVideoInput
    >;
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type userCreateWithoutContent_creatorInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    poetry?: poetryCreateNestedManyWithoutUserInput;
    show?: showCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedOneWithoutUserInput;
    video?: videoCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutContent_creatorInput = {
    id?: string;
    email: string;
    organization_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    poetry?: poetryUncheckedCreateNestedManyWithoutUserInput;
    show?: showUncheckedCreateNestedManyWithoutUserInput;
    video?: videoUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutContent_creatorInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutContent_creatorInput, userUncheckedCreateWithoutContent_creatorInput>;
  };

  export type userUpsertWithoutContent_creatorInput = {
    update: XOR<userUpdateWithoutContent_creatorInput, userUncheckedUpdateWithoutContent_creatorInput>;
    create: XOR<userCreateWithoutContent_creatorInput, userUncheckedCreateWithoutContent_creatorInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutContent_creatorInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutContent_creatorInput, userUncheckedUpdateWithoutContent_creatorInput>;
  };

  export type userUpdateWithoutContent_creatorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    poetry?: poetryUpdateManyWithoutUserNestedInput;
    show?: showUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateOneWithoutUserNestedInput;
    video?: videoUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutContent_creatorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    organization_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    poetry?: poetryUncheckedUpdateManyWithoutUserNestedInput;
    show?: showUncheckedUpdateManyWithoutUserNestedInput;
    video?: videoUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content_creator?: content_creatorCreateNestedManyWithoutUserInput;
    poetry?: poetryCreateNestedManyWithoutUserInput;
    show?: showCreateNestedManyWithoutUserInput;
    video?: videoCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content_creator?: content_creatorUncheckedCreateNestedManyWithoutUserInput;
    poetry?: poetryUncheckedCreateNestedManyWithoutUserInput;
    show?: showUncheckedCreateNestedManyWithoutUserInput;
    video?: videoUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutOrganizationInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
  };

  export type userCreateManyOrganizationInputEnvelope = {
    data: userCreateManyOrganizationInput | userCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: userWhereUniqueInput;
    update: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
  };

  export type userUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: userWhereUniqueInput;
    data: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
  };

  export type userUpdateManyWithWhereWithoutOrganizationInput = {
    where: userScalarWhereInput;
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[];
    OR?: userScalarWhereInput[];
    NOT?: userScalarWhereInput | userScalarWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    organization_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
  };

  export type userCreateWithoutPoetryInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content_creator?: content_creatorCreateNestedManyWithoutUserInput;
    show?: showCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedOneWithoutUserInput;
    video?: videoCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutPoetryInput = {
    id?: string;
    email: string;
    organization_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content_creator?: content_creatorUncheckedCreateNestedManyWithoutUserInput;
    show?: showUncheckedCreateNestedManyWithoutUserInput;
    video?: videoUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutPoetryInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutPoetryInput, userUncheckedCreateWithoutPoetryInput>;
  };

  export type userUpsertWithoutPoetryInput = {
    update: XOR<userUpdateWithoutPoetryInput, userUncheckedUpdateWithoutPoetryInput>;
    create: XOR<userCreateWithoutPoetryInput, userUncheckedCreateWithoutPoetryInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutPoetryInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutPoetryInput, userUncheckedUpdateWithoutPoetryInput>;
  };

  export type userUpdateWithoutPoetryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content_creator?: content_creatorUpdateManyWithoutUserNestedInput;
    show?: showUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateOneWithoutUserNestedInput;
    video?: videoUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutPoetryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    organization_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content_creator?: content_creatorUncheckedUpdateManyWithoutUserNestedInput;
    show?: showUncheckedUpdateManyWithoutUserNestedInput;
    video?: videoUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutShowInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content_creator?: content_creatorCreateNestedManyWithoutUserInput;
    poetry?: poetryCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedOneWithoutUserInput;
    video?: videoCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutShowInput = {
    id?: string;
    email: string;
    organization_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content_creator?: content_creatorUncheckedCreateNestedManyWithoutUserInput;
    poetry?: poetryUncheckedCreateNestedManyWithoutUserInput;
    video?: videoUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutShowInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutShowInput, userUncheckedCreateWithoutShowInput>;
  };

  export type userUpsertWithoutShowInput = {
    update: XOR<userUpdateWithoutShowInput, userUncheckedUpdateWithoutShowInput>;
    create: XOR<userCreateWithoutShowInput, userUncheckedCreateWithoutShowInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutShowInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutShowInput, userUncheckedUpdateWithoutShowInput>;
  };

  export type userUpdateWithoutShowInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content_creator?: content_creatorUpdateManyWithoutUserNestedInput;
    poetry?: poetryUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateOneWithoutUserNestedInput;
    video?: videoUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutShowInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    organization_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content_creator?: content_creatorUncheckedUpdateManyWithoutUserNestedInput;
    poetry?: poetryUncheckedUpdateManyWithoutUserNestedInput;
    video?: videoUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type content_creatorCreateWithoutUserInput = {
    id?: string;
    bio?: string | null;
    website?: string | null;
    social_media_handle?: string | null;
    specialty?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type content_creatorUncheckedCreateWithoutUserInput = {
    id?: string;
    bio?: string | null;
    website?: string | null;
    social_media_handle?: string | null;
    specialty?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type content_creatorCreateOrConnectWithoutUserInput = {
    where: content_creatorWhereUniqueInput;
    create: XOR<content_creatorCreateWithoutUserInput, content_creatorUncheckedCreateWithoutUserInput>;
  };

  export type content_creatorCreateManyUserInputEnvelope = {
    data: content_creatorCreateManyUserInput | content_creatorCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type poetryCreateWithoutUserInput = {
    id?: string;
    title: string;
    content: string;
    creation_date: Date | string;
    last_update_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type poetryUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    content: string;
    creation_date: Date | string;
    last_update_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type poetryCreateOrConnectWithoutUserInput = {
    where: poetryWhereUniqueInput;
    create: XOR<poetryCreateWithoutUserInput, poetryUncheckedCreateWithoutUserInput>;
  };

  export type poetryCreateManyUserInputEnvelope = {
    data: poetryCreateManyUserInput | poetryCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type showCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    date: Date | string;
    location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type showUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    date: Date | string;
    location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type showCreateOrConnectWithoutUserInput = {
    where: showWhereUniqueInput;
    create: XOR<showCreateWithoutUserInput, showUncheckedCreateWithoutUserInput>;
  };

  export type showCreateManyUserInputEnvelope = {
    data: showCreateManyUserInput | showCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type organizationCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type organizationUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type organizationCreateOrConnectWithoutUserInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
  };

  export type videoCreateWithoutUserInput = {
    id?: string;
    title: string;
    url: string;
    creation_date: Date | string;
    last_update_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type videoUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    url: string;
    creation_date: Date | string;
    last_update_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type videoCreateOrConnectWithoutUserInput = {
    where: videoWhereUniqueInput;
    create: XOR<videoCreateWithoutUserInput, videoUncheckedCreateWithoutUserInput>;
  };

  export type videoCreateManyUserInputEnvelope = {
    data: videoCreateManyUserInput | videoCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type content_creatorUpsertWithWhereUniqueWithoutUserInput = {
    where: content_creatorWhereUniqueInput;
    update: XOR<content_creatorUpdateWithoutUserInput, content_creatorUncheckedUpdateWithoutUserInput>;
    create: XOR<content_creatorCreateWithoutUserInput, content_creatorUncheckedCreateWithoutUserInput>;
  };

  export type content_creatorUpdateWithWhereUniqueWithoutUserInput = {
    where: content_creatorWhereUniqueInput;
    data: XOR<content_creatorUpdateWithoutUserInput, content_creatorUncheckedUpdateWithoutUserInput>;
  };

  export type content_creatorUpdateManyWithWhereWithoutUserInput = {
    where: content_creatorScalarWhereInput;
    data: XOR<content_creatorUpdateManyMutationInput, content_creatorUncheckedUpdateManyWithoutUserInput>;
  };

  export type content_creatorScalarWhereInput = {
    AND?: content_creatorScalarWhereInput | content_creatorScalarWhereInput[];
    OR?: content_creatorScalarWhereInput[];
    NOT?: content_creatorScalarWhereInput | content_creatorScalarWhereInput[];
    id?: UuidFilter<'content_creator'> | string;
    user_id?: UuidFilter<'content_creator'> | string;
    bio?: StringNullableFilter<'content_creator'> | string | null;
    website?: StringNullableFilter<'content_creator'> | string | null;
    social_media_handle?: StringNullableFilter<'content_creator'> | string | null;
    specialty?: StringNullableFilter<'content_creator'> | string | null;
    created_at?: DateTimeFilter<'content_creator'> | Date | string;
    updated_at?: DateTimeFilter<'content_creator'> | Date | string;
  };

  export type poetryUpsertWithWhereUniqueWithoutUserInput = {
    where: poetryWhereUniqueInput;
    update: XOR<poetryUpdateWithoutUserInput, poetryUncheckedUpdateWithoutUserInput>;
    create: XOR<poetryCreateWithoutUserInput, poetryUncheckedCreateWithoutUserInput>;
  };

  export type poetryUpdateWithWhereUniqueWithoutUserInput = {
    where: poetryWhereUniqueInput;
    data: XOR<poetryUpdateWithoutUserInput, poetryUncheckedUpdateWithoutUserInput>;
  };

  export type poetryUpdateManyWithWhereWithoutUserInput = {
    where: poetryScalarWhereInput;
    data: XOR<poetryUpdateManyMutationInput, poetryUncheckedUpdateManyWithoutUserInput>;
  };

  export type poetryScalarWhereInput = {
    AND?: poetryScalarWhereInput | poetryScalarWhereInput[];
    OR?: poetryScalarWhereInput[];
    NOT?: poetryScalarWhereInput | poetryScalarWhereInput[];
    id?: UuidFilter<'poetry'> | string;
    title?: StringFilter<'poetry'> | string;
    content?: StringFilter<'poetry'> | string;
    creation_date?: DateTimeFilter<'poetry'> | Date | string;
    last_update_date?: DateTimeNullableFilter<'poetry'> | Date | string | null;
    user_id?: UuidFilter<'poetry'> | string;
    created_at?: DateTimeFilter<'poetry'> | Date | string;
    updated_at?: DateTimeFilter<'poetry'> | Date | string;
  };

  export type showUpsertWithWhereUniqueWithoutUserInput = {
    where: showWhereUniqueInput;
    update: XOR<showUpdateWithoutUserInput, showUncheckedUpdateWithoutUserInput>;
    create: XOR<showCreateWithoutUserInput, showUncheckedCreateWithoutUserInput>;
  };

  export type showUpdateWithWhereUniqueWithoutUserInput = {
    where: showWhereUniqueInput;
    data: XOR<showUpdateWithoutUserInput, showUncheckedUpdateWithoutUserInput>;
  };

  export type showUpdateManyWithWhereWithoutUserInput = {
    where: showScalarWhereInput;
    data: XOR<showUpdateManyMutationInput, showUncheckedUpdateManyWithoutUserInput>;
  };

  export type showScalarWhereInput = {
    AND?: showScalarWhereInput | showScalarWhereInput[];
    OR?: showScalarWhereInput[];
    NOT?: showScalarWhereInput | showScalarWhereInput[];
    id?: UuidFilter<'show'> | string;
    title?: StringFilter<'show'> | string;
    description?: StringNullableFilter<'show'> | string | null;
    date?: DateTimeFilter<'show'> | Date | string;
    location?: StringFilter<'show'> | string;
    user_id?: UuidFilter<'show'> | string;
    created_at?: DateTimeFilter<'show'> | Date | string;
    updated_at?: DateTimeFilter<'show'> | Date | string;
  };

  export type organizationUpsertWithoutUserInput = {
    update: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutUserInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
  };

  export type organizationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type videoUpsertWithWhereUniqueWithoutUserInput = {
    where: videoWhereUniqueInput;
    update: XOR<videoUpdateWithoutUserInput, videoUncheckedUpdateWithoutUserInput>;
    create: XOR<videoCreateWithoutUserInput, videoUncheckedCreateWithoutUserInput>;
  };

  export type videoUpdateWithWhereUniqueWithoutUserInput = {
    where: videoWhereUniqueInput;
    data: XOR<videoUpdateWithoutUserInput, videoUncheckedUpdateWithoutUserInput>;
  };

  export type videoUpdateManyWithWhereWithoutUserInput = {
    where: videoScalarWhereInput;
    data: XOR<videoUpdateManyMutationInput, videoUncheckedUpdateManyWithoutUserInput>;
  };

  export type videoScalarWhereInput = {
    AND?: videoScalarWhereInput | videoScalarWhereInput[];
    OR?: videoScalarWhereInput[];
    NOT?: videoScalarWhereInput | videoScalarWhereInput[];
    id?: UuidFilter<'video'> | string;
    title?: StringFilter<'video'> | string;
    url?: StringFilter<'video'> | string;
    creation_date?: DateTimeFilter<'video'> | Date | string;
    last_update_date?: DateTimeNullableFilter<'video'> | Date | string | null;
    user_id?: UuidFilter<'video'> | string;
    created_at?: DateTimeFilter<'video'> | Date | string;
    updated_at?: DateTimeFilter<'video'> | Date | string;
  };

  export type userCreateWithoutVideoInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content_creator?: content_creatorCreateNestedManyWithoutUserInput;
    poetry?: poetryCreateNestedManyWithoutUserInput;
    show?: showCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutVideoInput = {
    id?: string;
    email: string;
    organization_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content_creator?: content_creatorUncheckedCreateNestedManyWithoutUserInput;
    poetry?: poetryUncheckedCreateNestedManyWithoutUserInput;
    show?: showUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutVideoInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutVideoInput, userUncheckedCreateWithoutVideoInput>;
  };

  export type userUpsertWithoutVideoInput = {
    update: XOR<userUpdateWithoutVideoInput, userUncheckedUpdateWithoutVideoInput>;
    create: XOR<userCreateWithoutVideoInput, userUncheckedCreateWithoutVideoInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutVideoInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutVideoInput, userUncheckedUpdateWithoutVideoInput>;
  };

  export type userUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content_creator?: content_creatorUpdateManyWithoutUserNestedInput;
    poetry?: poetryUpdateManyWithoutUserNestedInput;
    show?: showUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    organization_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content_creator?: content_creatorUncheckedUpdateManyWithoutUserNestedInput;
    poetry?: poetryUncheckedUpdateManyWithoutUserNestedInput;
    show?: showUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyOrganizationInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content_creator?: content_creatorUpdateManyWithoutUserNestedInput;
    poetry?: poetryUpdateManyWithoutUserNestedInput;
    show?: showUpdateManyWithoutUserNestedInput;
    video?: videoUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content_creator?: content_creatorUncheckedUpdateManyWithoutUserNestedInput;
    poetry?: poetryUncheckedUpdateManyWithoutUserNestedInput;
    show?: showUncheckedUpdateManyWithoutUserNestedInput;
    video?: videoUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type content_creatorCreateManyUserInput = {
    id?: string;
    bio?: string | null;
    website?: string | null;
    social_media_handle?: string | null;
    specialty?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type poetryCreateManyUserInput = {
    id?: string;
    title: string;
    content: string;
    creation_date: Date | string;
    last_update_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type showCreateManyUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    date: Date | string;
    location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type videoCreateManyUserInput = {
    id?: string;
    title: string;
    url: string;
    creation_date: Date | string;
    last_update_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type content_creatorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    social_media_handle?: NullableStringFieldUpdateOperationsInput | string | null;
    specialty?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type content_creatorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    social_media_handle?: NullableStringFieldUpdateOperationsInput | string | null;
    specialty?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type content_creatorUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    social_media_handle?: NullableStringFieldUpdateOperationsInput | string | null;
    specialty?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type poetryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    last_update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type poetryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    last_update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type poetryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    last_update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type showUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type showUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type showUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type videoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    last_update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type videoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    last_update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type videoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    last_update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use OrganizationCountOutputTypeDefaultArgs instead
   */
  export type OrganizationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use content_creatorDefaultArgs instead
   */
  export type content_creatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    content_creatorDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use organizationDefaultArgs instead
   */
  export type organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    organizationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use poetryDefaultArgs instead
   */
  export type poetryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    poetryDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use showDefaultArgs instead
   */
  export type showArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = showDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use videoDefaultArgs instead
   */
  export type videoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = videoDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
