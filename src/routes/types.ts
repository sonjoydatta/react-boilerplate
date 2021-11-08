type Route = {
  readonly path: string;
  children?: readonly Route[];
};

type R<T> = Assume<T, Route>;
type R2<T> = Assume<T, readonly Route[]>;

type Assume<T, U> = T extends U ? T : never;
type MemberOf<T> = T extends (infer U)[] ? MemberOf<U> : T;

export type ConvertRoute<T extends readonly Route[], S extends string = ''> = MemberOf<{
  -readonly [key in keyof T]: `${S}${S extends '' ? '' : `${R<T[key]>['path']}` extends '' ? '' : '/'}${R<
    T[key]
  >['path']}` extends infer X
    ? 'children' extends keyof T[key]
      ? ConvertRoute<R2<T[key]['children']>, Assume<X, string>>
      : X | (S extends '' ? never : S)
    : never;
}>;

export type ParamsCount<
  S extends string,
  C extends string,
  N extends string[] = [],
> = S extends `${string}${C}${infer Name}/${infer R}`
  ? ParamsCount<R, C, [...N, Name]>
  : S extends `${string}${C}${infer Name}`
  ? ParamsCount<'', C, [...N, Name]>
  : N;

export type ParamsObject<T extends string[]> = {
  [key in keyof T as Assume<T[key], string>]: string;
};

export type ParamsString<T extends string[]> = Assume<
  {
    [key in keyof T]: string;
  },
  string[]
>;
