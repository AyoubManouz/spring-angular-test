import { Article } from "./article";

export class Order {
    id: string;
    reference: string;
    date: Date;
    articles: Article[];
}
