export declare const FirebaseModel: any;
export declare const findById: (Model: typeof FirebaseModel, id: string) => Promise<any>;
export declare const findAllWhere: (Model: typeof FirebaseModel, prop: string, operator: string, value: any) => Promise<Array<any>>;
