import React from 'react'
import { ButtonAddCart } from './components/ButtonAddCar'

export default function CarsManagerPage() {
  return (
    <div>
        <div className='flex justify-between'>
            <h2 className='text-2xl font-bold'>Manage your cars</h2>
            <ButtonAddCart/>

        </div>
    </div>
  )
}
