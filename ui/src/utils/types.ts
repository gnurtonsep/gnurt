export type Range<
    N extends number,
    Result extends Array<unknown> = []
> = Result["length"] extends N
    ? Result[number] | N
    : Range<N, [...Result, Result["length"]]>;
