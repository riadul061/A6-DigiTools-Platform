import {use} from 'react';

const Models = ({modelPromise}) => {
    const models = use(modelPromise)
    console.log(models);
    
    return (
        <div className="py-20">
            <div className="text-center"> 
                <h2  className="text-5xl font-bold">Premium Digital Tools</h2>
                <p>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                    {models.map(model=> <div className="shadow-lg rounded-lg ">
                        <div className='h-32 w-32'>
                            <img className="h-32 w-32 rounded-full object-contain" src={model.icon} alt="" />
                        </div>
                        <div className="p-4 space-y-3">
                            <h2 className="text-2xl font-bold">{model.name}</h2>
                            <p>{model.description}</p>
                            <div className='text-2xl font-bold'>${model.price}/Mo</div>
                            <button className="btn w-full bg-blue-700 text-white rounded-full mt-4">Buy Now</button>
                        </div>

                        
                    </div>
                    )}
                </div>
      
           
        </div>
    );
};

export default Models;