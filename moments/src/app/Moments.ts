export interface Moment {
    id?: number;
    title: string;
    description: string;
    image: string;
    created_at?: string;
    update_at?: string;
    date: string;
    comments?: { id: number; text: string; username: string; }[];
}