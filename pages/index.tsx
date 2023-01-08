import MainContainer from "../components/MainContainer";
import Link from "next/link";

export default function Index() {

  const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '/products/1',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 2,
      name: 'Basic Tee',
      href: '/products/2',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 3,
      name: 'Basic Tee',
      href: '/products/3',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 4,
      name: 'Basic Tee',
      href: '/products/4',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 5,
      name: 'Basic Tee',
      href: '/products/5',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 6,
      name: 'Basic Tee',
      href: '/products/6',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 7,
      name: 'Basic Tee',
      href: '/products/7',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 8,
      name: 'Basic Tee',
      href: '/products/8',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    // More products...
  ]

  return (
    <MainContainer title={'Home Page'}>
       <>
         {/*Category*/}
         <div className=" mx-auto max-w-7xl flex justify-center items-center w-full lg:px-8 md:py-12  py-9 px-4">
           <div className="w-80 md:w-auto grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-6">
             <Link href={'/women'} className="relative group">
               <img className="lg:block hidden w-full" src="https://i.ibb.co/SnL9NZV/pexels-two-dreamers-2345236-1.png" alt="Women" />
               <img className="lg:hidden md:block hidden w-full" src="https://i.ibb.co/PwMpH9g/pexels-two-dreamers-2345236-1-1.png" alt="Women" />
               <img className="w-full md:hidden" src="https://i.ibb.co/Ks91wpt/pexels-two-dreamers-2345236-1.png" alt="Women" />
               <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
               <div className=" absolute top-0 left-0 w-full h-full flex justify-start items-end opacity-0 hover:opacity-100 p-8">
                 <p className=" font-semibold text-2xl leading-6 text-white">Women</p>
               </div>
             </Link>
             <div className=" lg:px-6 lg:py-0 md:py-16 md:px-24 py-16 px-6 flex flex-col justify-center items-center text-center bg-gray-100">
               <h2 className=" font-semibold lg:text-4xl text-3xl lg:leading-10 leading-9 text-gray-800 lg:w-full md:w-7/12 w-full">Shop your Favourite Designers</h2>
               <p className=" font-medium text-base leading-6 text-gray-600 mt-4 lg:w-full md:w-7/12 w-full">We offer a huge colletion of premium clothing that are crafted with excellence for our adored customers</p>
               <button className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700 mt-16">Discover More</button>
             </div>
             <Link href={'/men'} className="relative group">
               <img className="lg:block hidden w-full" src="https://i.ibb.co/gVMrdyp/pexels-mpumelelo-buthelezi-4503712-1-1.png" alt="Man" />
               <img className="lg:hidden md:block hidden w-full" src="https://i.ibb.co/hYmYWgT/pexels-two-dreamers-2345236-2.png" alt="Man" />
               <img className="w-full md:hidden" src="https://i.ibb.co/99kYP9T/pexels-two-dreamers-2345236-2.png" alt="Man" />
               <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
               <div className=" absolute top-0 left-0 w-full h-full flex justify-start items-end opacity-0 hover:opacity-100 p-8">
                 <p className=" font-semibold text-2xl leading-6 text-white">Men</p>
               </div>
             </Link>
           </div>
         </div>

       {/* New Collection */}
         <div className="relative overflow-hidden bg-white">
           <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
             <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
               <div className="sm:max-w-lg">
                 <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                   Summer styles are finally here
                 </h1>
                 <p className="mt-4 text-xl text-gray-500">
                   This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                   if you live or die.
                 </p>
               </div>
               <div>
                 <div className="mt-10">
                   {/* Decorative image grid */}
                   <div
                       aria-hidden="true"
                       className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                   >
                     <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                       <div className="flex items-center space-x-6 lg:space-x-8">
                         <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                           <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                             <img
                                 src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                                 alt=""
                                 className="h-full w-full object-cover object-center"
                             />
                           </div>
                           <div className="h-64 w-44 overflow-hidden rounded-lg">
                             <img
                                 src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                                 alt=""
                                 className="h-full w-full object-cover object-center"
                             />
                           </div>
                         </div>
                         <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                           <div className="h-64 w-44 overflow-hidden rounded-lg">
                             <img
                                 src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                                 alt=""
                                 className="h-full w-full object-cover object-center"
                             />
                           </div>
                           <div className="h-64 w-44 overflow-hidden rounded-lg">
                             <img
                                 src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                                 alt=""
                                 className="h-full w-full object-cover object-center"
                             />
                           </div>
                           <div className="h-64 w-44 overflow-hidden rounded-lg">
                             <img
                                 src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                                 alt=""
                                 className="h-full w-full object-cover object-center"
                             />
                           </div>
                         </div>
                         <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                           <div className="h-64 w-44 overflow-hidden rounded-lg">
                             <img
                                 src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                                 alt=""
                                 className="h-full w-full object-cover object-center"
                             />
                           </div>
                           <div className="h-64 w-44 overflow-hidden rounded-lg">
                             <img
                                 src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                                 alt=""
                                 className="h-full w-full object-cover object-center"
                             />
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>

                   <a
                       href="#"
                       className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
                   >
                     Shop Collection
                   </a>
                 </div>
               </div>
             </div>
           </div>
         </div>


       {/* New Arrivals*/}
         <div className="bg-white">
           <div className="mx-auto max-w-2xl py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
             <h2 className="text-2xl font-bold tracking-tight text-gray-900">New Arrivals</h2>

             <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
               {products.map((product) => (
                   <div key={product.id} className="group relative">
                     <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                       <img
                           src={product.imageSrc}
                           alt={product.imageAlt}
                           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                       />
                     </div>
                     <div className="mt-4 flex justify-between">
                       <div>
                         <h3 className="text-sm text-gray-700">
                           <Link href={product.href}>
                             <span aria-hidden="true" className="absolute inset-0" />
                             {product.name}
                           </Link>
                         </h3>
                         <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                       </div>
                       <p className="text-sm font-medium text-gray-900">{product.price}</p>
                     </div>
                   </div>
               ))}
             </div>
           </div>
         </div>
       </>

    </MainContainer>
  )
}
