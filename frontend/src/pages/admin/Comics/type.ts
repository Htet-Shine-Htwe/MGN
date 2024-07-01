export interface MogousType {
    id:              number;
    rotation_key:    RotationKey;
    title:           string;
    slug:            string;
    description:     string;
    author:          string;
    cover:           string;
    status:          number;
    finish_status:   number;
    legal_age:       boolean;
    rating:          number;
    mogou_type:      number;
    released_year:   string;
    released_at:     string;
    created_at:      null;
    updated_at:      null;
    status_name:     StatusName;
    mogou_type_name: MogouTypeName;
    categories:      Category[];
    sub_mogous:      SubMogous[];
}

export interface Category {
    id:    number;
    title: string;
}

export enum MogouTypeName {
    Manga = "Manga",
}

export enum RotationKey {
    Alpha = "alpha",
    Beta = "beta",
}

export enum StatusName {
    Archived = "Archived",
    Draft = "Draft",
    Published = "Published",
}

export interface SubMogous {
    title: string;
}

export interface Link {
    url:    null | string;
    label:  string;
    active: boolean;
}
