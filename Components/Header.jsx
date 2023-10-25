import React, {useState,useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from '../Services';



const Header = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
      getCategories()
      .then((newCategories) => {
        setCategories(newCategories);
      });
    }, []);

  return (
    <div className="caro">
        <div className='p-4 mx-auto flex flex-row w-11/12 items-center justify-between max-lg:w-full max-lg:ml-0 max-lg:flex-col max-lg:p-2'>
            <div className= "w-32 h-24 max-lg:w-fit">
                <Link href="/">
                <img src="ebn.png" alt="ebn tv logo" className='h-full' />
                </Link>
            </div>
            <div className='uppercase w-fit flex justify-evenly items-center max-lg:grid gap-4 max-lg:grid-cols-6 max-lg:w-fit'>
                {categories.map((category)=>(
                  <>
                    <Link key={category.slug}href={`/category/${category.slug}`}>
                        <span className='max-lg:w-fit text-sm'>
                            {category.name}
                        </span>
                    </Link>
                    
                  </>
                  
                ))}
                <Link href="/Live" to="/Live" className='border border-red-600 animate-pulse py-2 rounded-md text-red-600 w-24 text-center ml-2 text-sm' >
                      <h6>Live</h6>
                    </Link> 
                <Link href="/Videos" to="/videos" className='border-2 bg-blue-800 py-2 text-white w-24 rounded-md text-center ml-2' >
                      <h6>Videos</h6>
                    </Link>
                    
                    <Link href="/Partner" to="/Partner" className='border-2 border-blue-800 py-2 text-blue-800 w-44 rounded-md text-center ml-2' >
                      <h6 className='text-sm'>Become A Partner</h6>
                    </Link>
            </div>
        </div>
    </div>
  )
}

export default Header