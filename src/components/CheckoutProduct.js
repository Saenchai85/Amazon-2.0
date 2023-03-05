import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'

function CheckoutProduct({id, 
    title, 
    price, 
    description, 
    category, 
    image,
    rating,
    hasPrime 
        }) {
            const dispatch = useDispatch()

            const addItemToBasket = () => {
                const product = {
                    id,
                    title,
                    price,
                    rating,
                    description,
                    category,
                    image,
                    hasPrime,
                }
                dispatch(addToBasket(product))
            }

            const removeItemFromBasket = () => {
                // Remove item from redux
                dispatch(removeFromBasket({ id }))
            }

    return (
        <div className='grid grid-cols-5'>
            <Image src={image} height={200} width={200} objectFit='contain'/>
        
            {/** Middle */}
            <div className='col-span-3 mx-5'>
                <p>{title}</p>
                <div className='flex'>
                    {Array(rating)
                        .fill()
                        .map((i) => (
                            <StarIcon key={i} className='h-5 text-yellow-500'/>
                    ))}
                </div>

                <p className='text-xs my-2 line-clamp-3'>{description}</p>
                <p className='text-red-500'>{price} EUR</p>

                {hasPrime &&  (
                    <div className='flex items-center space-x-2'>
                        <img 
                            className='w-12' 
                            loading='lazy' 
                            src="https://links.papareact.com/fdw" 
                            alt="" />
                        <p className='text-xs text-gray-500'>Free Next-day Delivery</p>
                    </div>
                )}
                </div>
            {/** Right add/remove buttons */}
                <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                    <button className='button' onClick={addItemToBasket}>Add to Basket</button>
                    <button className='button' onClick={removeItemFromBasket}>Remove to Basket</button>
            </div>

            
        </div>
        
    )
        
        
      
      

}
import { useDispatch } from 'react-redux'
  

export default CheckoutProduct
