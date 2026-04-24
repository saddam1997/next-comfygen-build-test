
import React from 'react'
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Header = dynamic(() => import('../../components/Newcomponet/layout/Header'), {
  loading: () => <p>Loading...</p>,
})

const HeroSectiondesign2 = dynamic(() => import('../../components/Newcomponet/SectionCompoent/HeroSectiondesign2'), {
  loading: () => <p>Loading...</p>,
})

const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);

export default function Disclaimer(props: any) {
  let { initialData } = props;
  return (
    <>
      <div className="overflow-hidden">
        <Head>
          <title> Disclaimer - Comfygen.com </title>
          <link rel="canonical" href="https://www.comfygen.com/disclaimer" />
          <meta
            name="description"
            content="Our disclaimer page outlines the terms and conditions for using ComfyGen. Please read this page carefully before using our website or services."
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content=" Disclaimer - Comfygen.com " />
          <meta property="og:description" content=" Our disclaimer page outlines the terms and conditions for using ComfyGen. Please read this page carefully before using our website or services." />
          <meta property="og:url" content="https://www.comfygen.com/disclaimer" />
          <meta property="og:site_name" content="Comfygen" />
          <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
          <meta property="article:modified_time" content="2022-09-10T07:43:51+00:00" />
          <meta property="og:image" content="https://www.comfygen.com/images/illuslator/Aboutus.svg?size=1024" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@comfygentech" />
          <meta name="twitter:label1" content="Est. reading time" />
          <meta name="twitter:data1" content="8 minutes" />
        </Head>



        {/* hero section */}

        <div className="bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("https://www.comfygen.com/img/hero-section-bg.webp")` }}>
          <div className=" bg-[#1B1C30CC]">
           {/* <Header /> */}
            <div className="py-20">
              <HeroSectiondesign2
                heading='Comfygen company Disclaimer'
                ptag="The information provided by our company is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk."
              />
            </div>
          </div>
        </div>

        {/* Term and conditions */}
        <div className="bg-white  py-10">
          <section className="2xl:w-4/6 xl:w-5/6 w-11/12  mx-auto">
            {/* text-section */}
            <div className="flex lg:space-x-10 ">

              <div className="bg-white text-left   space-y-4 p-4 flex-1">
                <h2 className="md:text-5xl text-3xl text-[#0E1F51] font-semibold"> Disclaimer</h2>
                <p>Last updated: April 26, 2022</p>

                <h3 className="md:text-3xl text-2xl text-[#0E1F51] font-semibold">Interpretation and Definitions</h3>
                <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </p>

                <h3 className="md:text-5xl text-3xl text-[#0E1F51] font-semibold">Definitions</h3>
                <p>For the purposes of this Disclaimer:</p>


                <p>Company (referred to as either "the Company", "We", "Us" or "Our" in this Disclaimer) refers to Comfygen Private Limited, A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar, Jaipur, Rajasthan 302006
                </p>
                <p>Service refers to the Website.</p>
                <p>You means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                </p>
                <p>Website refers to comfygen, accessible from https://www.comfygen.com/</p>

                <h3 className="md:text-5xl text-3xl text-[#0E1F51] font-semibold">
                  Disclaimer
                </h3>
                <p>The information contained on the Service is for general information purposes only.</p>

                <p>The Company assumes no responsibility for errors or omissions in the contents of the Service.</p>

                <p>In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice. This Disclaimer has been created with the help of the Disclaimer Template.
                </p>
                <p>The Company does not warrant that the Service is free of viruses or other harmful components.
                </p>

                <h3 className="md:text-3xl text-2xl text-[#0E1F51] font-semibold">External Links Disclaimer</h3>
                <p>The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company.
                </p>
                <p>Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                </p>
                <h3>Errors and Omissions Disclaimer</h3>
                <p>The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to insure that the content of the Service is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the Service.
                </p>
                <p>The Company is not responsible for any errors or omissions, or for the results obtained from the use of this information.
                </p>

                <h3 className="md:text-3xl text-2xl text-[#0E1F51] font-semibold">Fair Use Disclaimer</h3>
                <p>The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research.
                </p>
                <p>The Company believes this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the United States Copyright law.
                </p>
                <p>If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner.
                </p>
                <h3 className="md:text-3xl text-2xl text-[#0E1F51] font-semibold"> Views Expressed Disclaimer</h3>
                <p>The Service may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer or company, including the Company.
                </p>
                <p>Comments published by users are their sole responsibility and the users will take full responsibility, liability and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment. The Company is not liable for any comment published by users and reserves the right to delete any comment for any reason whatsoever.
                </p>

                <h3 className="md:text-3xl text-2xl text-[#0E1F51] font-semibold">No Responsibility Disclaimer</h3>
                <p>The information on the Service is provided with the understanding that the Company is not herein engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal or other competent advisers.
                </p>
                <p>In no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Service.
                </p>
                <h3 className="md:text-3xl text-2xl text-[#0E1F51] font-semibold">"Use at Your Own Risk" Disclaimer</h3>
                <p>All information in the Service is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.
                </p>
                <p>The Company will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Service or for any consequential, special or similar damages, even if advised of the possibility of such damages.
                </p>

                <h3 className="text-4xl text-[#0E1F51] font-semibold">Contact Us</h3>
                <p>If you have any questions about these Terms and Conditions, You can contact us:</p>

                <p>By email:<span className="font-bold text-blue-600"><a href="mailto:sales@comfygen.com"> sales@comfygen.com</a></span>  </p>
                <p>
                  By visiting this page on our website:<span className="font-bold text-blue-600"><a href="https://www.comfygen.com/contact-us"> https://www.comfygen.com/contact</a></span> </p>

                <p>By phone number: <span className="font-bold text-blue-600"><a href="tel:9587867258"> +91 9587867258</a></span></p>
              </div>
            </div>

          </section>

        </div>

  <BlogSection initialData={initialData} />

      </div>
    </>
  );
}
export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.URL}/api/v1/posts?per_page=3`
    );

    if (!res.ok) throw new Error("API failed");

    const data = await res.json();

    return {
      props: { initialData: data },
      revalidate: 3600, // 24 hours
    };
  } catch (error) {
    console.error("getStaticProps error:", error);

    return {
      props: { initialData: [] },
      revalidate: 3600, // retry in 1 hour
    };
  }
}