import { useContext } from "react";
import CategoryPreview from "../category-preview/category-preview.component";
import { CategoriesContext} from "../../context/categories.context";


const CategoriesPreview = () => {

    const { categoriesMap} = useContext(CategoriesContext)

    return (
       <div className="category-preview-container">
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title]
                    return <CategoryPreview key={title} title={title} products={products} />
                })
            }
        </div>
    )
}

export default CategoriesPreview;