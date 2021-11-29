export interface IQuery {
  readById: (id: string) => any;
  list: (id: string) => any;
  create: (resource: any) => any;
  putById: (id: string, resource: any) => any;
  deleteById: (id: string) => any;
}
