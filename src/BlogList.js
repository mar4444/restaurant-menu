const BlogList = ({special}) => {
    // const special = props.blog;

   return (
       <div className="bloglist">
          { special.map((category) => (
                  <div className="every-category" key={category.id}>
                   <img src={ category.image1 } />
                   <div className="tittle-category">
                     <h3>{ category.tittle}</h3>
                     <p>{ category.price}</p>
                   </div>
                   <p className="category-body">{ category.body }</p>
                  </div> 
               ))} 
       </div>
   );
}

export default BlogList;