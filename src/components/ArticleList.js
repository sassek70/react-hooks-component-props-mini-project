import Article from "./Article"


const ArticleList = ({ posts }) => {

    
    
    // const  { id, title, date, preview, posts} = props
    // console.log({posts})

    const articleArray = posts.map((post) => {
        const { id, title, date, preview } = post
        return <Article key={ id } title={ title } date={ date } preview={ preview }/>
    })

    return (
        <main>
            {articleArray}
        </main>
    )
}


export default ArticleList