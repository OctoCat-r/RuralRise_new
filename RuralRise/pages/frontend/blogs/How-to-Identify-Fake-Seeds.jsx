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
                                How to Identify Fake Seeds: Key Differences Between Real and Counterfeit Seeds
                                </h2>
                                <a 
                                    href="#"
                                    className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
                                >
                                   
                                </a>
                                </div>

                                <img src="https://www.agrifarming.in/wp-content/uploads/How-to-Identify-Fake-Seeds1.jpg" style={{height: "28em"}}/>
                            </div>

                            <div className="flex flex-col lg:flex-row lg:space-x-12">

                                <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">What is Identifying Fake Seeds?</h2>
                                <p className="pb-6">Identifying fake seeds involves distinguishing genuine, high-quality seeds from counterfeit or 
                                inferior ones. It is a critical skill for gardeners and farmers, as fake seeds can lead to poor crop yields, wasted 
                                resources, and financial losses. The key to this identification lies in examining various aspects of the seeds, such 
                                as their appearance, packaging, and source. Genuine seeds exhibit uniformity, 
                                proper labeling, and certification, while counterfeit seeds often lack these attributes.</p>

                               
                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">What are Counterfeit Seeds?</h2>

                                <p className="pb-6">Counterfeit products pose a significant risk to farmers, consumers, and the environment 
                                due to their unknown compositions and lack of testing and approval. Their biological efficacy is unpredictable, 
                                causing complete damage to treated crops. Counterfeit seeds can 
                                significantly reduce crop yield and deteriorate produce quality, leading to harvest loss.</p>

                                <p className="pb-6">Counterfeit crop protection products and seeds mimic original products, 
                                often featuring adulterated labeling and packaging. These sophisticated counterfeits are difficult 
                                to distinguish from originals, leading to unintentional purchases by distributors and farmers. 
                                The content of these products, including crop protection and seeds, 
                                is always unknown, and their biological efficacy and performance are unpredictable.</p>


                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Understanding the Importance of Authentic Seeds</h2>
                                <ul className="list-decimal ">
                                    <li><strong>Yield: </strong> Authentic seeds are bred to produce high yields, which means more crops can be harvested per acre of land.</li>
                                    <li><strong>Quality: </strong> Authentic seeds produce highly quality crops, which means they are more appealing to consumers and can command higher prices.</li>
                                    <li><strong>Disease resistance: </strong> Authentic seeds are bred to resist diseases that can damage crops so farmers can avoid losses due to crop damage.</li>
                                    <li><strong>Pest resistance:  </strong> Authentic seeds are bred to resist pests that can damage crops so that farmers can avoid losses due to pest damage.</li>
                                    <li><strong>Adaptability: </strong> Authentic seeds are bred to be adaptable to different growing conditions, which means they can be grown in different environments.</li>
                                    <li><strong>Sustainability: </strong>  Authentic seeds are bred to be sustainable, which means they can be grown without degrading the soil or harming the environment.</li>
                                    <li><strong>Food security:  </strong> Authentic seeds are important for food security, as they ensure that crops can be grown reliably and sustainably to feed the growing population.</li>
                                    <li><strong>Research:  </strong> Authentic seeds are important for research, as they provide a consistent and reliable basis for scientific studies.</li>
                                    <li><strong>Education:   </strong> Authentic seeds are important for education, as they provide a tangible example of the principles of biology and agriculture.</li>


                                    
                                </ul>
                                <div className='py-5'>  </div>
                                <img src="https://www.agrifarming.in/wp-content/uploads/How-to-Identify-Fake-Seeds2.jpg" style={{height: "28em"}}/>

                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Physical Appearance of Real and Fake Seeds</h2>

                                <ul className="list-decimal ">
                                    <li> Real seeds typically exhibit uniform size, shape, and color, while fake seeds may vary.</li>
                                    <li>Real maize seeds, for example, have consistent yellowish kernels of uniform size, whereas counterfeit maize seeds may have irregular shapes, sizes, and colors.</li>
                                    <li>Genuine rice seeds are uniform and often have a characteristic hull, whereas fake rice seeds may lack these traits.</li>
                                    <li>Real seeds are healthy and plump, whereas counterfeit seeds may appear withered, discolored, or damaged.</li>
                                    <li>The physical appearance of real seeds reflects their quality and potential for germination, while fake seeds often lack these desirable characteristics.</li>

                                    
                                </ul>
                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Packaging and Labeling Discrepancies</h2>

                                
                                <p className="pb-6">Packaging and labeling discrepancies refer to inconsistencies or errors in 
                                the packaging and labeling of products compared to their stated contents or quality. These discrepancies 
                                can have significant implications for consumer safety and trust. One notable case involves the food 
                                industry, particularly the mislabeling of seafood products</p>

                               
                                <div className='py-5'>  </div>
                                <img src="https://www.agrifarming.in/wp-content/uploads/How-to-Identify-Fake-Seeds6.jpg" style={{height: "28em"}}/>

                                {/* <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                                    Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor
                                    expression
                                    unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence.
                                    Steepest speaking up attended it as. Made neat an on be gave show snug tore.
                                </div> */}

                                <p className="pb-6">For instance, a package labeled as “wild-caught salmon” may, in reality, contain 
                                farm-raised salmon. This mislabeling not only deceives consumers but also poses potential health risks,
                                 as farm-raised and 
                                wild-caught salmon may differ in terms of environmental impact and nutritional value.</p>

                                <p className="pb-6">Another example is pharmaceuticals, where packaging and labeling discrepancies 
                                can lead to serious health consequences. In 2012, a case emerged where counterfeit versions of a
                                 cancer medication called Avastin entered the supply chain. These counterfeit drugs had incorrect 
                                 packaging and labeling, potentially 
                                putting patients at risk due to the lack of proper treatment.</p>


                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Germination Rate and Seed Viability</h2>

                                <p className="pb-6">Seed viability and germination rate are crucial for plant growth, but counterfeit seeds 
                                can significantly impact crop yields and food security. In sub-Saharan Africa, counterfeit seeds are estimated to 
                                account for as much as half of all seeds sold in some African countries. These seeds have lower germination rates than 
                                genuine ones, potentially resulting in crop production below potential. For most species, a germination rate of 90% or 
                                more is considered good, while a 50% or lower rate is considered too low, 
                                causing the seed to be discarded and replaced with newer seeds.</p>


                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Conclusion</h2>

                                <p className="pb-6">Counterfeit seeds can cost farmers more than two-thirds of expected crop yields, putting 
                                global food security at risk. Illegal seed practices are a growing worldwide issue that poses a significant 
                                threat to farmers’ livelihoods, global food security, and efforts towards sustainable agriculture. To prevent 
                                counterfeiting, farmers should purchase seeds from reputable sources, look for seeds certified by state seed certification 
                                agencies, and be aware of new technologies, such as biodegradable tags, 
                                that are being developed to prevent counterfeiting.</p>

    

                                

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
