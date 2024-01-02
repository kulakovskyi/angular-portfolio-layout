@Injectable()

export class EditArticleService{
    constructor(private http: HttpClient) {
    }

    updateArticle(articleInput: ArticleInputInterface, slug: string): Observable<ArticleInterface>{
        const fullUrl = `${environment.apiUrl}/articles/${slug}`
        return this.http.put<SaveArticleResponseInterface>(fullUrl, articleInput).pipe(
            map((res: SaveArticleResponseInterface) => {
                return res.article
            })
        )
    }
}