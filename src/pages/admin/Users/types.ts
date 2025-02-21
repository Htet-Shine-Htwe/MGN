
export interface SubscribedUser {
    id:                      number;
    name:                    string;
    email:                   string;
    email_verified_at:       null;
    current_subscription_id: number;
    subscription_end_date:   string;
    user_code:               string;
    created_at:              null;
    updated_at:              null;
    subscription_name:       string;
    last_login_at :          string;
    active:                  boolean;
    background_color:        string;
    avatar_url:              string;
    avatar_id?:              number;
}
