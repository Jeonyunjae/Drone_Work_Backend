
export type Resolver = (
  root: any,
  args: any,
  info: any
) => any;

export type Resolvers = {
    [key:string]: {
        [key:string]: Resolver
    }
}