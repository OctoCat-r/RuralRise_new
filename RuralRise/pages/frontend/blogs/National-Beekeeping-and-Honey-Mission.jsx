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
                                National Beekeeping and Honey Mission (NBHM): Features, Schemes, and Benefits
                                </h2>
                                <a 
                                    href="#"
                                    className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
                                >
                                   
                                </a>
                                </div>

                                <img src="https://www.agrifarming.in/wp-content/uploads/National-Beekeeping-and-Honey-Mission1.jpg" style={{height: "28em"}}/>
                            </div>

                            <div className="flex flex-col lg:flex-row lg:space-x-12">

                                <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Introduction to the National Beekeeping and Honey Mission (NBHM)</h2>
                                <p className="pb-6">The National Beekeeping and Honey Mission (NBHM) was launched in 2020 as an Atma Nirbhar Bharat package by the Union Government. 
                                This visionary scheme is administered by the National Bee Board (NBB) and is slated for implementation over three years from 2020 to 2023.</p>

                                <p className="pb-6">At its core, NBHM aims to propel the scientific practice of beekeeping across India, thereby contributing to what is aptly termed the “Sweet Revolution.”
                                 Operating under the purview of the Ministry of Agriculture and Farmers' Welfare, Government of India, this initiative is funded entirely by the central government (100% central sector scheme).</p>

                                <p className="pb-6">NBHM's synergy with various other beekeeping-related schemes makes it even more powerful. 
                                It collaborates with entities like KVIC's Honey Mission, MSME, the Mission for Integrated Development of Horticulture, and the ministries of rural development, AYUSH, commerce and industry, tribal affairs, and more.</p>


                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">The Objective of National Beekeeping and Honey Mission (NBHM)</h2>

                                <p className="pb-6">The Indian government has approved the National Beekeeping and Honey Mission (NBHM), a Central Sector Scheme, for two years. 
                                This mission aims to promote scientific beekeeping aggressively, focusing on capacity building, women's 
                                participation, and infrastructure development, including Integrated Beekeeping Development Centres (IBDCs), digitization, value addition, market support, and research and development 
                                through three Mini Missions (MM-1, MM-2 & MM-3), all geared towards achieving the “Sweet Revolution” in the country.</p>


                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Importance of Beekeeping for Biodiversity Conservation</h2>
                                <ul className="list-decimal ">
                                    <li><strong>Pollination Power: </strong> Bees are prolific pollinators, aiding the reproduction of countless plants, including many food crops. This ensures biodiversity in flora.</li>
                                    <li><strong>Ecosystem Stability: </strong> A thriving bee population contributes to ecosystem stability by maintaining plant diversity, which, in turn, supports various animal species.</li>
                                    <li><strong>Genetic Diversity: </strong> Bees facilitate cross-pollination, enhancing genetic diversity in plant populations and making them more resilient to environmental changes.</li>
                                    <li><strong>Habitat Preservation: </strong> Beekeepers often protect natural habitats, promoting the well-being of wild bees and other wildlife that rely on these areas.</li>
                                    <li><strong>Conserving Native Bees: </strong> Beekeeping practices can raise awareness about the importance of conserving native bee species, which are vital to local ecosystems.</li>
                                    <li><strong>Food Chain Links: </strong> Bees are part of complex food chains. Their decline can disrupt these chains and affect the populations of other species.</li>
                                    <li><strong>Pest Control:  </strong> Some bee species feed on crop pests, reducing the need for chemical pesticides that can harm biodiversity.</li>
                                    <li><strong>Seed Production: </strong> Bees assist in seed production for many plants, ensuring a continuous cycle of growth and regeneration.</li>

                                    
                                </ul>
                                <div className='py-5'>  </div>
                                <img src="https://www.agrifarming.in/wp-content/uploads/National-Beekeeping-and-Honey-Mission2.jpg" style={{height: "28em"}}/>

                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Enhancing Honey Production and Quality</h2>

                                <p className="pb-6">Enhancing honey production and quality involves implementing practices that optimize bee health, hive management, and honey extraction techniques. 
                                This includes ensuring bees access diverse forage, controlling diseases and pests, and using modern beehive technology. 
                                Additionally, it requires careful harvesting and processing to maintain honey’s natural flavors and qualities. </p>


                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Physical Training for Farmers/Beekeepers:</h2>

                                
                                <ul className="list-decimal ">
                                    <li><strong>Within-State Training: </strong> Seven-day training within the state for batches of 25 participants, with maximum assistance of Rs. 1.75 lakhs per training.</li>
                                    <li><strong>Out-of-State Training and Exposure Visits: </strong> Seven-day training or exposure visits outside the state for batches of 25 participants with assistance of up to Rs. 2.00 lakhs per training.</li>
                                    <li><strong>Outside the Country Training/Exposure Visits: </strong> Training or exposure visits abroad with maximum assistance of Rs. 4.00 lakhs per candidate.</li>
                                    
                                    
                                </ul>

                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Financial Support Schemes for Beekeepers</h2>

                                <p className="pb-6">These schemes typically provide subsidies and credit facilities to beekeepers to purchase modern beehives, bee colonies, and equipment. 
                                Scientific data reveals that such support leads to increased honey production. For instance, in India, where the National Beekeeping and Honey Mission (NBHM) provides financial assistance, there has been a substantial rise in honey production, from 76,150 metric tons in 2017-18 to 111,000 metric tons in 2020-21. This demonstrates the positive 
                                impact of financial support schemes in bolstering beekeeping activities and honey yields, contributing to food security and biodiversity conservation.</p>

                                <div className='py-5'>  </div>
                                <img src="https://www.agrifarming.in/wp-content/uploads/National-Beekeeping-and-Honey-Mission6.jpg" style={{height: "28em"}}/>

                                {/* <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                                    Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor
                                    expression
                                    unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence.
                                    Steepest speaking up attended it as. Made neat an on be gave show snug tore.
                                </div> */}

                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Conclusion</h2>

                                <p className="pb-6">The National Beekeeping and Honey Mission (NBHM) is a transformative initiative fostering sustainable 
                                beekeeping in India. With diverse schemes and substantial subsidies, it empowers farmers, beekeepers, and institutions, 
                                enhancing pollination, honey production, and livelihoods.
                                 NBHM stands as a symbol of environmental conservation and economic prosperity for the nation.</p>

    

                                

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
