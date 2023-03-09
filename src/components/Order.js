import React from 'react'

function Order({id, amount, amountShipping, items, timestamp, images}) {
  return (
    <div>
        <div>
            <div>
            <p className='text-xs font-bold'>Total</p>
            <p>
                {amount} EUR - Next Day Delivery {" "}  
                {amountShipping} EUR    </p>
            </div>

            <p className='text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500'>
                {items.length} items
            </p>

            <p className='absolute top-2 right-2 w-10 lg:w-72 truncate text-xs whitespace-nowrap'>
                ORDER # {id}
            </p>
        </div>

        <div className='p-5 sm:p-10'>
            <div className='flex space-x-6 overflow-auto'>
                {images.map(image => (
                    <img src={image} alt="" className='h-20 object-contain sm::h-32'/>
                ))}
            </div>
    
        </div>
    </div>


    
  )
}

export default Order
