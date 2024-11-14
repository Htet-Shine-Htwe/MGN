// Generated by https://quicktype.io

export interface Mogous {
    mogous: MogousElement[];
}

export interface MogousElement {
    id:                 number;
    title:              string;
    slug:               string;
    cover:              string;
    rotation_key:       string;
    description:        string;
    finish_status:      number;
    mogou_type:         number;
    status:             number;
    rating?:            number;
    status_name:        string;
    legal_age?:          boolean;
    mogou_type_name:    string;
    finish_status_name: string;
    categories:         Category[];
    sub_mogous: SubMogousType[];
}


export interface Category {
    title: string;
}

export interface SubMogousType {
    id:number,
    title:string,
    chapter_number:number,
    created_at:string,
    subscription_only: boolean,
    third_party_redirect: boolean,
    third_party_url?: string,
}

export type MostViewMogou = Pick<MogousElement, "id" | "title" |"slug" | "cover" | "status_name" | "mogou_type_name" | "finish_status_name" | "categories" | "sub_mogous" | "legal_age">;

export type RecentlyUploadedMogou = MostViewMogou;


export interface MostViewed {
    // mogous: {
    //     data : MostViewMogou[];
    // }
    mogous : MostViewMogou[]
}



export interface RecentlyUploadedResponse {
    mogous: {
        last_page: any;
        data : MostViewMogou[];
    }
}