export interface IQuery {
  readById: (id: string) => any;
  list: (id: string) => any;
  create: (resource: any) => any;
  putById: (resource: any) => any;
  deleteById: (id: string) => any;
}
