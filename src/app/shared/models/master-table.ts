export interface MasterTable{
    id?: number;
    name?: string;
}

export interface Gener{
    genres?:[MasterTable]
}

export interface PageEvent {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
}