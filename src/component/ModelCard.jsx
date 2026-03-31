import { useState } from "react";


const ModelCard = ({model, carts, setcarts}) => {
    const [isSubcribed, setIsSubscribed] = useState(false)

    const handleSubsScription = () => {
        setIsSubscribed(true)
        setcarts([...carts, model])
    }
    return (
        <div className="shadow-lg rounded-lg ">         
                        <div className='h-32 w-32'>
                            <img className="h-32 w-32 rounded-full object-contain" src={model.icon} alt="" />
                        </div>
                        <div className="p-4 space-y-3">
                            <h2 className="text-2xl font-bold">{model.name}</h2>
                            <p>{model.description}</p>
                            <div className='text-2xl font-bold'>${model.price}/Mo</div>
                            <ul className="text-sm text-gray-600 mb-5 space-y-1">
                                {model.features.map((f, i) => (
                                    <li key={i}>✔ {f}</li>))}
                                    </ul>
                            <button onClick={handleSubsScription} className="btn w-full bg-blue-700 text-white rounded-full mt-4">
                                {isSubcribed ? "✔ Added to cart !" : "Buy Now"}
                            </button>
                        </div>
                        </div>
    );
};

export default ModelCard;