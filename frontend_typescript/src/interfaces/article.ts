import author from "./author"
import articleType from "./articleType"

export default interface article {
    id: number,
    articleType: articleType,
    author: author,
    headline: string,
    lead: string | null
    conclusion: string | null
    body: string
    picture: string,
    pointOfCreation: string
}