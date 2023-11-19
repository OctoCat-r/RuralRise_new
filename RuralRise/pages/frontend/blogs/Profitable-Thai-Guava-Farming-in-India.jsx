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
                                Profitable Thai Guava Farming in India: Yield, Profit Per Acre, Plant Price, 1 Acre Cost of Cultivation
                                </h2>
                                <a 
                                    href="#"
                                    className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
                                >
                                   
                                </a>
                                </div>

                                <img src="https://www.agrifarming.in/wp-content/uploads/Profitable-Thai-Guava-Farming-in-India1.jpg" style={{height: "28em"}}/>
                            </div>

                            <div className="flex flex-col lg:flex-row lg:space-x-12">

                                <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">What is Thai Guava Farming?</h2>
                                <p className="pb-6">Guava (Psidium guajava), a significant commercial fruit in India, ranks as the fourth 
                                most crucial fruit, trailing behind mango, banana, and citrus varieties. Guava cultivation acreage in 
                                India expanded by 64% from 94 thousand ha. in 1991-92 to 155 thousand ha. in 2001-02. Production surged 
                                by 55% during the same period, from 11 lakh metric tons to 17 lakh tonnes. Leading guava-producing states 
                                encompass Uttar Pradesh, Bihar, West Bengal, Maharashtra, 
                                Chhattisgarh, Tamil Nadu, Karnataka, Madhya Pradesh, Gujarat, and Andhra Pradesh.</p>

                                <p className="pb-6">Guava is a rich vitamin C, pectin, calcium, and phosphorus source. Processed guava 
                                products like jams, jellies, and nectar are prevalent, with guava jelly puree particularly renowned 
                                for its captivating hue and delightful taste. The puree is versatile in juices, cakes, puddings, sauces, 
                                ice cream, jams, and jellies. Moreover, guava leaves are valuable in treating diarrhea, dyeing, and 
                                tanning processes. The demand for guava revolves around 
                                fresh consumption and processing, with a mere 0.05% of the yield being exported internationally.</p>

                                

                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Thai Guavas: A Flavorful Tropical Delight</h2>

                                <p className="pb-6">Thai guavas come in various sizes, typically small to medium, exhibiting a round to oval shape. 
                                Their delicate skin can be smooth or textured, adorned with bumps, warts, and nodes. Beneath the skin, the dense, 
                                coarse, and thick white flesh offers a crunchy, aqueous, and firm mouthfeel. Encasing this flesh is a group of 
                                cream-colored to pale yellow seeds, though notably hard and edible. 
                                Thai guavas are mildly sweet and tart, enriched with floral and fruity undertones.</p>

                                <p className="pb-6"><strong>Seasons:</strong> Thai guavas remain available year-round, ensuring a consistent supply 
                                of this tropical gem. Hailing from the Psidium genus within the Myrtaceae family, Thai guavas 
                                encompass diverse varieties often associated with the “Thai guava” label. Most belong to the category of 
                                white guavas, lauded for their crisp consistency. These fruits thrive in the wild and local markets and are 
                                prevalent in Thailand’s landscape. Frequently consumed when semi-ripe, they lend a delightful 
                                crunch to various dishes. Renowned for their subtle tanginess and sweetness. </p>

                                <div className='py-5'>  </div>
                                <img src="https://www.agrifarming.in/wp-content/uploads/Profitable-Thai-Guava-Farming-in-India3.jpg" style={{height: "28em"}}/>

                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Market Potential and Farmer Preference for Thai Guava in India</h2>
                                <ul className="list-decimal ">
                                    <li><strong>Planting Advantage: </strong> Thai guava, renowned for its exceptional attributes, holds significant market potential in India. Farmers favor this variety due to its strategic planting advantages.</li>
                                    <li><strong>Optimal Plant Count: </strong> With 600 plants per acre, Thai guava maximizes planting efficiency, resulting in ample yield.</li>
                                    <li><strong>Biannual Harvests: </strong> Capitalizing on two harvest seasons annually enhances productivity and profit potential.</li>
                                    <li><strong>Progressive Yield: </strong> The yield progression is noteworthy. Starting from the second year, farmers can expect 20 KG per tree, escalating to 30 KG in the third year and an impressive 40 KG per tree from the fourth year onward.</li>
                                    <li><strong>Quality and Demand: </strong> Thai guavas boast superior quality, making them desirable for local markets and export purposes.</li>
                                    <li><strong>Low Maintenance:  </strong> This variety demands moderate maintenance and displays resistance to pests, further appealing to farmers.</li>
                                    <li><strong>Comparative Yield:  </strong> Unlike traditional guava plantations yielding 200-350 KG per tree annually, Thai guava delivers exceptional results. The second year’s yield alone amounts to 20 KG per tree, equivalent to 12000 Kilos.</li>
                                    <li><strong>Profit Projection: </strong> The returns remain lucrative despite a selling price as low as 20 Rs per KG (compared to the average of 40 Rs per KG for guavas). </li>

                                    
                                </ul>


                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Climate and Soil Requirements for Profitable Thai Guava Farming</h2>

                                <p className="pb-6">Thai Guava, a tropical fruit from South America, thrives in warm and humid climates in India. 
                                It thrives in areas with temperatures between 25°C and 30°C and can grow up to 1,500 meters above sea level. However, 
                                frost-prone areas are essential for the plant’s growth. Soil selection is crucial for Thai Guava’s success, 
                                with well-draining, fertility-rich sandy loam soil being the preferred choice.</p>


                                <p className="pb-6">Fertile sandy loam soil with a pH level of 5.5 to 7.0. A soil test is recommended before planting to identify 
                                potential amendments. 
                                The fruit can be cultivated at altitudes up to 1,500 meters, but vigilance against frost-prone areas is essential.</p>

                                <div className='py-5'>  </div>
                                <img src="https://www.agrifarming.in/wp-content/uploads/Profitable-Thai-Guava-Farming-in-India4.jpg" style={{height: "28em"}}/>

                              
                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Selecting the Right Variety of Thai Guava for Indian Conditions</h2>

                                <p className="pb-6">Thai Guava boasts enticing varieties, each flaunting distinct flavors, sizes, and attributes. 
                                Among the favored options cultivated in India are Thai White, Thai Maroon, Thai Apple, and Thai Pink. Opting for 
                                the ideal variety necessitates 
                                aligning it with your specific climate conditions and catering to prevailing market preferences.</p>

                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Thai Guava Plant Price in India</h2>

                                <p className="pb-6">The cost of Thai Guava plants in India can vary based on factors like variety, size, and supplier. 
                                On average, a young Thai Guava plant can be purchased for around Rs. 40 to Rs. 100. Investing in healthy 
                                plants from reputable sources is crucial for successful cultivation and optimal yield.</p>


                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Propagation Techniques for Thai Guava Farming</h2>

                                <p className="pb-6">Thai Guava can be propagated using various methods, including collecting seeds from ripe fruits, 
                                stem cuttings from mature plants, and air layering. To plant the saplings, dig holes twice the size of the root ball,
                                 maintain a distance of 8-10 feet between each sapling, and plant them at the same depth as they were in their containers. 
                                This ensures ample space for growth and promotes healthy root development.</p>

                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Site Selection and Preparation for Thai Guava Plantation</h2>

                                <p className="pb-6">To ensure a successful Thai Guava plantation, selecting a location with optimal 
                                sunlight exposure for at least 8 hours daily is essential. This will promote robust growth and yield. 
                                Additionally, it’s crucial to shield your plants from strong winds, preventing damage to young plants. 
                                Before planting, ensure the area is clean and free from weeds, rocks, and 
                                debris to create an ideal environment for your Thai Guava plants to thrive.</p>


                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Planting and Spacing Guidelines for Thai Guava Trees</h2>

                                <p className="pb-6">Optimal land preparation coincides with dry days involving plowing, leveling, 
                                and meticulous weeding. Before the monsoon’s onset, create pits measuring 1 m by 1 m by 1 m. Assemble 
                                a potent blend by infusing each hole with 25 Kg of farmyard manure, 500 grams of SSP, 15 Kg of Neem Cake, 
                                50 grams of Lindane powder, 
                                and soil to thwart termite invasions and enrich fertility.</p>

                                

                                

                                <div className='py-5'>  </div>
                                <img src="https://www.agrifarming.in/wp-content/uploads/Profitable-Thai-Guava-Farming-in-India5.jpg" style={{height: "28em"}}/>

                                {/* <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                                    Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor
                                    expression
                                    unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence.
                                    Steepest speaking up attended it as. Made neat an on be gave show snug tore.
                                </div> */}

                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Conclusion</h2>

                                <p className="pb-6">Thai Guava farming in India presents a profitable venture with impressive yields
                                 and profits per acre. With its substantial benefits, including consistent yields, export potential, 
                                 and moderate maintenance, Thai Guava emerges as a financially viable and rewarding choice for 
                                farmers seeking sustainable and lucrative agricultural endeavors.</p>

    

                                

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
