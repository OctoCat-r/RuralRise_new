import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { InfinitySpin } from 'react-loader-spinner';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';









export default function ApplicationsDetail() {
    
    const router = useRouter();




    


    return (
        <>
            {
                false ? (
                    <div className='bg-gray w-full h-screen flex items-center flex-col justify-center'>
                        <InfinitySpin width='200' color="#7A9D54" />
                        <p className='text-xs uppercase'>Loading Resources Hold Tight...</p>
                    </div>
                ) : (
                    <>
                        <NavBar />
                      
                        <div className="max-w-screen-lg mx-auto py-24">
      

                            <main className="mt-10">

                            <div className="mb-4 md:mb-0 w-full mx-auto relative">
                                <div className="px-4 lg:px-0">
                                <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                                Weed Management in Garlic Farming: How to Control With Organic, Cultural, and Mechanical Methods
                                </h2>
                                <a 
                                    href="#"
                                    className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
                                >
                                   
                                </a>
                                </div>

                                <img src="https://www.agrifarming.in/wp-content/uploads/Weed-Management-in-Garlic-Farming1.jpg" style={{height: "28em"}}/>
                            </div>

                            <div className="flex flex-col lg:flex-row lg:space-x-12">

                                <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Organic Weed Control Methods for Garlic Farming</h2>
                                <p className="pb-6">The National Beekeeping and Honey Mission (NBHM) was launched in 2020 as an Atma Nirbhar Bharat package by the Union Government. 
                                This visionary scheme is administered by the National Bee Board (NBB) and is slated for implementation over three years from 2020 to
                                 2023.Organic weed control methods for maintaining soil health and producing high-quality garlic crops without relying on
                                 synthetic chemicals. Techniques include mulching, hand weeding, cover cropping, crop rotation, flame weeding, vinegar-based
                                  herbicides, and corn gluten meal. Mulching blocks sunlight and reduces weed germination, while hand weeding is simple and effective. </p>

                                <p className="pb-6">Cover cropping prevents soil erosion and improves fertility. Crop rotation with weed-suppressive 
                                crops disrupts weed life cycles and reduces populations. Flame weeding uses propane torches or flame weeders to heat
                                 weeds, while vinegar-based herbicides contain acetic acid for spot treatments. 
                                Corn gluten meal, a natural pre-emergent herbicide, prevents weed seeds from germinating..</p>


                                <div className='py-5'>  </div>
                                <img src="https://www.agrifarming.in/wp-content/uploads/Weed-Management-in-Garlic-Farming2.jpg" style={{height: "28em"}}/>

                               
                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Chemical-free Weed Management in Garlic Cultivation</h2>

                                <p className="pb-6">Chemical-free weed management in garlic cultivation is essential for sustainable and eco-friendly 
                                farming practices. Garlic plants face strong competition from weeds, 
                                especially during early growth stages, leading to reduced yields and lower clove quality.</p>


                                <ul className="list-decimal ">
                                    <li><strong>Mulching:  </strong>Garlic farmers can cover the soil between plant rows with black mats or apply organic mulch (5-7.5 cm or 2-3 inches). Mulching suppresses weed growth while retaining soil moisture and temperature.</li>
                                    <li><strong>Pre-planting Tillage: </strong> Before planting, perform one pre-planting plowing or tillage to prepare the seedbed and eliminate perennial weeds, reducing weed pressure.</li>
                                    <li><strong>Stale Seedbed Technique:  </strong> Control annual weeds using the stale seedbed technique, which involves preparing the seedbed and allowing weeds to germinate 2-4 weeks before planting. Then, remove the emerging weeds before planting garlic.</li>
                                    <li><strong>Fumigation: </strong> Fumigation can reduce weed seed viability in fields with severe weed issues.</li>
                                    <li><strong>Shallow Cultivation and Hand Hoeing: </strong> After garlic emergence, shallow cultivation can control weeds between rows, and hand hoeing can manage weeds between garlic plants without damaging the bulbs and shallow root system.</li>
                                    <li><strong>Crop Rotation: </strong>  Incorporating competitive, fast-growing crops in rotation with garlic can help reduce weed pressure and weed populations in the field.</li>
                                    
                                </ul>

                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Integrated Weed Management Practices for Garlic Farms</h2>

                                <p className="pb-6">Integrated weed management is for successful garlic production due to their unique challenges
                                 in planting densities and vulnerability to weed competition. These slow-growing, shallow-rooted crops are 
                                 planted at high densities and can suffer significant yield losses from weed competition. Their narrow leaves 
                                 make them poor competitors against weeds, and their long growing season allows for multiple weed flushes.</p>

                                 <p className="pb-6">Limited registered herbicides and high labor costs for hand weeding make weed control challenging. 
                                 Effective integrated weed management involves reducing weed pressure before planting, using techniques like the 
                                 stale seedbed method, weed-free seed, or soil solarization. Controlling existing weeds before they produce seeds is
                                  also essential. Monitoring fields and recording weed species throughout the growing season helps choose suitable fields
                                   and track hard-to-control weeds.</p>

                                <div className='py-5'>  </div>
                                <img src="https://www.agrifarming.in/wp-content/uploads/Weed-Management-in-Garlic-Farming3.jpg" style={{height: "28em"}}/>

                                <p className="pb-6">Planting in weed-free fields and avoiding areas with persistent perennial weeds is advised. 
                                If weedy fields must be used, control weeds during fallow periods using techniques like stale seedbeds, herbicide application, 
                                or shallow tillage. Nonchemical options primarily apply during pre-plant, where 
                                early timing is crucial for effective weed control.</p>

                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Mulching Techniques for Weed Suppression in Garlic Fields</h2>

                                <p className="pb-6">Mulching techniques are highly effective for weed suppression in garlic fields, promoting efficient 
                                and eco-friendly weed management. Garlic plants are vulnerable to weed competition, especially during early growth stages.
                                 Mulching helps to create a weed-free environment by blocking weed germination and growth, conserving soil moisture, 
                                 and regulating soil temperature.</p>

                                 <p className="pb-6">Various mulching materials, such as organic mulch (5-7.5 cm or 2-3 inches) or unique black mats 
                                 placed between plant rows and around young plants, can be used. The black mat prevents weed development while 
                                 increasing soil temperature, promoting garlic growth. Mulching reduces the labor and cost of manual weeding and 
                                 enhances garlic yields and clove quality.</p>


                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Pre-emergence Herbicides for Weed Control in Garlic Farming</h2>

                                
                                <ul className="list-decimal ">
                                    <li>Pre-emergence herbicides are an essential tool for weed control in garlic farming, especially during the pre-plant period. They effectively suppress weed growth and ensure garlic crops have a weed-free environment. </li>
                                    <li>Garlic plants are slow-growing and vulnerable to weed competition, making early weed control crucial for successful crop establishment.</li>
                                    <li>Several pre-emergence herbicides are available for use in garlic fields. Glyphosate and paraquat effectively control emerging weeds before planting, particularly perennial weeds. </li>
                                    <li>Metam sodium is an excellent choice for fields with persistent perennial weed issues, as it can destroy most weeds.</li>
                                    <li>Timing is critical for pre-emergence herbicide application, as small weed seedlings are easier to control than larger weeds. Proper timing ensures maximum efficacy and minimizes the need for post-emergence weed management, reducing labor and costs.</li>
                                    <li>While herbicides are an effective weed control option, growers must be cautious about restrictions and consider their impacts on rotational crops. </li>
                                    <li>In organically certified crops, nonherbicidal methods such as the stale seedbed technique and cultivation are essential for weed management in garlic fields.</li>
                                    <li>Pre-emergence herbicides and good cultural practices provide comprehensive weed control for garlic production.</li>
                                    
                                    
                                </ul>

                                

                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Post-emergence Herbicides for Effective Weed Management in Garlic</h2>


                                <ul className="list-decimal ">
                                    <li><strong>Flaming:  </strong>Flaming can kill weed flushes between seeding and crop emergence. It is effective on crops with slow seed germination but may be limited in onions with quick germination.</li>
                                    <li><strong>Foliar-applied Herbicides: </strong> Herbicides may be used to control established weeds after crop emergence. Layby herbicides are applied to clean-cultivated soil to keep the crop weed-free until harvest.</li>
                                    <li><strong>Pre-emergence Herbicides:   </strong> Pre-emergence herbicides require irrigation for activation. DCPA, bensulide, ethofumesate, and pendimethalin can be used for pre-emergence weed control in garlic.</li>
                                    <li><strong>Post-emergence Herbicides: </strong> Several herbicides, including grass-selective herbicides, can be used for post-emergence weed control in both onion and garlic.</li>
                                    
                                </ul>

                                <div className='py-5'>  </div>
                                <img src="https://www.agrifarming.in/wp-content/uploads/Weed-Management-in-Garlic-Farming4.jpg" style={{height: "28em"}}/>

                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Cover Cropping for Weed Suppression in Garlic Fields</h2>


                                <p className="pb-6">Cover cropping is an effective weed management strategy in garlic fields, particularly in the fall before 
                                planting. It provides weed suppression benefits, such as rapid ground cover and weed seed reduction. Selecting competitive 
                                cover crop species like cereal rye, white mustard, or Indian mustard can provide complete ground cover within the first 30 
                                days of growth, inhibiting weed growth and limiting sunlight and nutrient access. </p>

                                <p className="pb-6">Cover crops also reduce weed seed pressure by decreasing the amount of weed seed in the soil, 
                                outcompeting weeds, and preventing seed setting. Timing is crucial when using cover crops for weed suppression, 
                                ensuring they are established quickly to effectively suppress weeds before planting. By incorporating cover crops in 
                                garlic fields, growers can effectively suppress weed growth, enhance soil health, and improve garlic yield and quality.</p>

                                <div className='py-5'>  </div>
                                <img src="https://www.agrifarming.in/wp-content/uploads/Weed-Management-in-Garlic-Farming5.jpg" style={{height: "28em"}}/>

                                {/* <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                                    Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor
                                    expression
                                    unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence.
                                    Steepest speaking up attended it as. Made neat an on be gave show snug tore.
                                </div> */}

                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Conclusion</h2>

                                <p className="pb-6">Effective weed management in garlic farming involves a combination of preplant, pre-emergent, 
                                post-emergent, and row middle strategies using appropriate herbicides. This approach minimizes weed competition, 
                                enhances garlic yields, and promotes sustainable farming practices.</p>

    

                                

                                </div>

                                <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
                                <div className="p-4 border-t border-b md:border md:rounded">
                                    <div className="flex py-2">
                                    <img src="https://randomuser.me/api/portraits/men/97.jpg"
                                        className="h-10 w-10 rounded-full mr-2 object-cover" />
                                    <div>
                                        <p className="font-semibold text-gray-700 text-sm"> Mike Sullivan </p>
                                        <p className="font-semibold text-gray-600 text-xs"> Editor </p>
                                    </div>
                                    </div>
                                    <p className="text-gray-700 py-3">
                                    Mike writes about Agriculture
                                    Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it.
                                    </p>
                                    
                                </div>
                                </div>

                            </div>
                            </main>

                
                        </div>

                        <Footer/>
                       

                    </>
                )
            }
        </>
    )
}
