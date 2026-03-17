import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";
import ProcessSlider from "./ProcessSlider";
import styles from "./styles.module.css";



const ProcessComponent = ({ ProcessData }: any) => {
    const { heading, description, Process} = ProcessData
    return (
        <div className="mt-10">


            <section className="bg-white lg:py-8 py-10 lg:px-4 xl:px-0">
                <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
                    <div className="text-center">

                        <HeadingTwo color={"black"} text= {heading} />
                          <ParagraphText color={"black"} text={description} />
                    </div>
                    <div className={styles.processContent}>
                        <div className={styles.processAnimation}>
                            <div className={styles.imageAnimate} id="svg-section">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 195 610">
                                    <g id="shape_1" transform="translate(-0.5 -0.5)">
                                        <g id="line">
                                            <path
                                                id="line8"
                                                d="M148.5,545.5h-27c-27.7,0-24.9,25-24.9,25l-.1,43A22.5,22.5,0,1,1,74,636h0a22.534,22.534,0,0,1,22.5-22.5"
                                                transform="translate(0 -54)"
                                                fill="none"
                                                stroke="#5556D1"
                                                strokeMiterlimit="10"
                                                strokeWidth="2"
                                            />
                                            <path
                                                id="line7"
                                                d="M46.9,479.5H73.5c25,0,23.1,23,23.1,23v39c0,27.3,24.9,25,24.9,25H148l.5,3.5A22.5,22.5,0,1,1,171,592.5,22.534,22.534,0,0,1,148.5,570"
                                                transform="translate(0 -81)"
                                                fill="none"
                                                stroke="#5556D1"
                                                strokeMiterlimit="10"
                                                strokeWidth="2"
                                            />
                                            <path
                                                id="line6"
                                                d="M102.5,462.3a1.284,1.284,0,0,0,1,.4,1.656,1.656,0,0,0,1.2-.5,1.557,1.557,0,1,0-2.2.1l-.9.9s-10.7,6.7-10.7,10.7,9,9.7,9,9.7l.9,1a2.723,2.723,0,0,1,2.1-.9,3.1,3.1,0,0,1,2.2.9h0a3.041,3.041,0,1,1-4.3,0"
                                                transform="translate(0 -80)"
                                                fill="none"
                                                stroke="#212121"
                                                strokeMiterlimit="10"
                                                strokeWidth="2"
                                            />
                                            <path
                                                id="line5"
                                                d="M148.5,346.5h-28c-24.6,0-23.9,25-23.9,25v39c0,24.4-24.1,23-24.1,23h-26V437A22.5,22.5,0,1,1,24,414.5,22.534,22.534,0,0,1,46.5,437h0"
                                                transform="translate(0 -41)"
                                                fill="none"
                                                stroke="#5556D1"
                                                strokeMiterlimit="10"
                                                strokeWidth="2"
                                            />
                                            <path
                                                id="line4"
                                                d="M46.9,253.5H73.5c25.5,0,23.1,23,23.1,23v39s-2.7,25,24.9,25H148l.5,3.5A22.5,22.5,0,1,1,171,366.5,22.534,22.534,0,0,1,148.5,344"
                                                transform="translate(0 -41)"
                                                fill="none"
                                                stroke="#5556D1"
                                                strokeMiterlimit="10"
                                                strokeWidth="2"
                                            />
                                            <path
                                                id="line3"
                                                d="M149.5,120.5h-29c-26,0-23.9,25-23.9,25v38c0,24.4-24.1,23-24.1,23h-26V210A22.5,22.5,0,1,1,24,187.5h0A22.534,22.534,0,0,1,46.5,210"
                                                fill="none"
                                                stroke="#5556D1"
                                                strokeMiterlimit="10"
                                                strokeWidth="2"
                                            />
                                            <path
                                                id="line2"
                                                d="M90.7,106.7a3.041,3.041,0,1,0-4.3,0h0a3.1,3.1,0,0,0,2.2.9,2.723,2.723,0,0,0,2.1-.9l.9,1s9,5.7,9,9.7-10.7,10.7-10.7,10.7l-.9.9a1.557,1.557,0,1,1-2.2.1,1.656,1.656,0,0,1,1.2-.5,1.284,1.284,0,0,1,1,.4"
                                                fill="none"
                                                stroke="#212121"
                                                strokeMiterlimit="10"
                                                strokeWidth="2"
                                            />
                                            <path
                                                id="line1"
                                                d="M46.5,24A22.5,22.5,0,1,0,24,46.5,22.534,22.534,0,0,0,46.5,24l.5-.5H73.5c25.1,0,23.1,23.6,23.1,23.6V89.7c0,26.8,25.3,24.8,25.3,24.8H149l.5,2.5A22.5,22.5,0,1,1,172,139.5,22.534,22.534,0,0,1,149.5,117"
                                                fill="none"
                                                stroke="#5556D1"
                                                strokeMiterlimit="10"
                                                strokeWidth="2"
                                            />
                                        </g>
                                        <g id="number" fill="#5556D1">
                                            <path
                                                id="_7"
                                                d="M102.3,640.9l-5.4,15.2H93.4l5.4-14.3H92V639h10.3Z"
                                                transform="translate(0 -64)"
                                            />
                                            <path
                                                id="_6"
                                                d="M174,533.3v2.8h-.2a4.061,4.061,0,0,0-4.3,3.9v.3a3.571,3.571,0,0,1,2.7-1.2,3.657,3.657,0,0,1,3,1.6,6.814,6.814,0,0,1,1.1,4.2,7.653,7.653,0,0,1-.6,3,4.544,4.544,0,0,1-4.4,2.8,4.416,4.416,0,0,1-3.7-1.9,8.1,8.1,0,0,1-1.4-5v-1.2a13.718,13.718,0,0,1,.9-4.9,7.007,7.007,0,0,1,2.6-3.3,6.894,6.894,0,0,1,3.9-1.2h.4Zm-2.9,8.6a1.5,1.5,0,0,0-1.1.4,2.075,2.075,0,0,0-.6,1v1.2a6.462,6.462,0,0,0,.5,2.7,1.389,1.389,0,0,0,2.6,0,5.45,5.45,0,0,0,.5-2.2,4.193,4.193,0,0,0-.5-2.2,1.693,1.693,0,0,0-1.4-.9Z"
                                                transform="translate(0 -53)"
                                            />
                                            <path
                                                id="_5"
                                                d="M19.1,476.3l.8-8.7h8.3v2.8H22.7l-.3,3.7a3.606,3.606,0,0,1,2-.6,3.851,3.851,0,0,1,3.3,1.5,6.814,6.814,0,0,1,1.1,4.2,5.566,5.566,0,0,1-1.4,4.1,4.841,4.841,0,0,1-3.6,1.6,5.421,5.421,0,0,1-2.5-.6,3.924,3.924,0,0,1-1.8-1.8,5.94,5.94,0,0,1-.7-2.6H22a3.371,3.371,0,0,0,.5,1.7,1.255,1.255,0,0,0,1.1.6,1.561,1.561,0,0,0,1.3-.8,5.073,5.073,0,0,0,.4-2.4,4.193,4.193,0,0,0-.5-2.2,1.6,1.6,0,0,0-1.4-.8,2.035,2.035,0,0,0-1.5.6l-.2.3Z"
                                                transform="translate(0 -79)"
                                            />
                                            <path
                                                id="_4"
                                                d="M173.8,345.7h1.5v2.8h-1.5v3.7h-3.3v-3.7h-5.6l-.2-2.1,5.8-11.2h3.3Zm-5.9,0h2.6V340l-.1.1Z"
                                                transform="translate(0 -40)"
                                            />
                                            <path
                                                id="_3"
                                                d="M22.1,278.9h1.6a1.371,1.371,0,0,0,1.3-.6,3.287,3.287,0,0,0,.4-1.7A2.934,2.934,0,0,0,25,275a1.461,1.461,0,0,0-2.1-.3c-.1.1-.2.1-.2.2a1.792,1.792,0,0,0-.4,1.4H19a5.025,5.025,0,0,1,.6-2.4,4.621,4.621,0,0,1,1.7-1.7,5.421,5.421,0,0,1,2.5-.6,4.966,4.966,0,0,1,3.7,1.3,4.879,4.879,0,0,1,1.3,3.6,4.282,4.282,0,0,1-.6,2.2,2.942,2.942,0,0,1-1.6,1.5,3.758,3.758,0,0,1,1.8,1.5,5.025,5.025,0,0,1,.6,2.4,5.426,5.426,0,0,1-1.4,3.6,4.89,4.89,0,0,1-3.8,1.4,5.426,5.426,0,0,1-3.6-1.4,4.469,4.469,0,0,1-1.4-3.6h3.3a2.7,2.7,0,0,0,.5,1.5,1.426,1.426,0,0,0,1.2.6,1.974,1.974,0,0,0,1.4-.6,2.155,2.155,0,0,0,.5-1.7c0-1.7-.7-2.5-2-2.5H22.1Z"
                                                transform="translate(0 -70)"
                                            />
                                            <path
                                                id="_2"
                                                d="M177.4,125H167.3v-2.3l4.6-5.9a23.926,23.926,0,0,0,1.3-2.1,3.922,3.922,0,0,0,.4-1.8,2.827,2.827,0,0,0-.4-1.8,1.255,1.255,0,0,0-1.1-.6,1.561,1.561,0,0,0-1.3.8,3.845,3.845,0,0,0-.5,2.1H167a5.918,5.918,0,0,1,.7-2.9,4.939,4.939,0,0,1,1.8-2,5.189,5.189,0,0,1,2.7-.7,4.517,4.517,0,0,1,3.5,1.3,4.879,4.879,0,0,1,1.3,3.6,5.918,5.918,0,0,1-.7,2.9,18.5,18.5,0,0,1-2.5,3.7l-2.2,3.1h5.8V125Z"
                                            />
                                            <path
                                                id="_1"
                                                d="M25.6,32.4H22.3v-13l-3.2,1.3V17.9l6.2-2.5h.4l-.1,17Z"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>

                        {Process && Process.length > 0 ? Process?.map((slide:any, index:any) => (
                            <div key={index} className={`${styles.processStep} hidden md:block space-y-2`}>
                                <h3 className={styles.processStepTitle}>{slide.title}</h3>
                                <p className={styles.processStepText} dangerouslySetInnerHTML={{ __html: slide.description }} />
                            </div>
                        )) : null}
                    </div>
                    <div className="md:hidden block">
                        <ProcessSlider slides={Process} />
                    </div>
                </div>
            </section>



        </div>
    );
};

export default ProcessComponent;

