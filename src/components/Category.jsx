import { categories } from "../data/data"

const Category = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
        <h1 className="text-4xl text-center text-orange-600 font-bold">        
            Top Rated Menu Items
        </h1>
        <div className="grid gird-cols-2 lg:grid-cols-4 gap-6 py-6">
            {
                categories.map((category, index) => (
                    <div key ={index} className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
                        <h2 className="font-bold sm:text-xl">{category.name}</h2>
                        <img className="w-20" src={category.image} alt={category.name} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Category