    import React from 'react'
    import { Link, Outlet } from 'react-router-dom'

    const Products = () => {
    return (
        <div>
            <div className='text-xl text-green-500 flex justify-center gap-5 items-center'>
                <Link to='men'>Men</Link>
                <Link to='women'>women</Link>
                <Link to='kids'>kids</Link>
            </div>
            <h3>Products page</h3>

            <div className='mt-6'>
                <Outlet />
            </div>
        </div>
    )
    }

    export default Products