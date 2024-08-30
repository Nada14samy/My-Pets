import React from "react";
import "./SectionsHome.scss";
import { Link } from "react-router-dom";
import image_about_1 from "../../images/homepage/image11.png";
import image_about_2 from "../../images/homepage/image12.png";
import image_about_3 from "../../images/homepage/image13.png";
import image_14 from "../../images/homepage/image14.png";
import image_16 from "../../images/homepage/image16.png";
import image_8 from "../../images/homepage/image8.png";
import Group7 from "../../images/homepage/Group7.png";
import image18 from "../../images/homepage/image18.png";
const SectionsHome = () => {
    return (
        <>
            <section className="about h-fit">
                <div className="container w-10/12 m-auto">
                    <div className="w-full h-screen d-flex">
                        <div className="title mx-1 w-1/2 flex flex-col justify-center ">
                            <h3 className="text-3xl my-5">find your new friend</h3>
                            <p className="w-4/5 mb-7">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Mollitia sunt delectus illum explicabo? Dolore
                                laboriosam inventore suscipit obcaecati quam
                                sapiente.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat suscipit eum aut. Ab tempora aperiam qui harum consequuntur impedit dicta.
                            </p>
                            <button className="p-3 bg-cyan-500 text-white rounded-sm w-fit bg-primary">
                                <Link to="/">view pets</Link>
                            </button>
                        </div>
                        <div className="image w-1/2">
                            <ul className="w-full d-flex">
                                <li className="w-1/3 mx-3 h-28 mb-20">
                                <img src={image_about_1} alt="" className="w-full" />
                                </li>
                                <li className="w-1/3 mx-3 mt-12 pt-12">
                                <img src={image_about_2} alt="" className="w-full" />
                                </li>
                                <li className="w-1/3 mx-3">
                                <img src={image_about_3} alt="" className="w-full" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- end sec1 --> */}
                </div>
                <div className="container sec-bg px-12 mt-12">
                    <div className="w-11/12 flex flex-col justify-center items-center m-auto">
                        <div className="text-center my-5">
                            <span className="text-teal-500 text-2xl">about us</span>
                            <h3 className="text-3xl">who are you?</h3>
                        </div>
                        <div className="text-title flex mt-10">
                            <div className="image w-1/2">
                                <img className="w-full" src={image_14} alt="" />
                                <img src={image_16} alt="" className="img" />
                            </div>
                            <div className="w-1/2 my-5 px-5 mx-3">
                                <h3 className="text-3xl font-bold">we save <span className="text-teal-500">the pets</span></h3>
                                <p className="my-5 font-medium">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta hic doloremque quod saepe incidunt, culpa fuga veniam fugiat asperiores delectus.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique exercitationem saepe asperiores reiciendis? Reiciendis praesentium, sint nobis eos ad adipisci odio quisquam animi officiis ipsam. Voluptas asperiores suscipit similique, vitae nulla tenetur quidem doloremque dicta tempora, maiores quibusdam, eveniet nesciunt!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full flex justify-end">
                <img src={image_16} alt="" className="img-2" />
                <div className="bg-container w-10/12 h-fit d-flex">
                    <div className="1/5 flex">
                        <img className="w-full pb-7" src={image_8} alt="" />
                    </div>
                    <ul className="flex w-4/5">
                        <li className="mx-8 text-center">
                            <span className="text-3xl font-bold">1500+</span>
                            <p className="text-xl">customers</p>
                        </li>
                        <li className="mx-8 text-center">
                            <span className="text-3xl font-bold">10</span>
                            <p className="text-xl">years</p>
                        </li>
                        <li className="mx-8 text-center">
                            <span className="text-3xl font-bold">120+</span>
                            <p className="text-xl">waiting for Home</p>
                        </li>
                        <li className="mx-8 text-center">
                            <span className="text-3xl font-bold">40+</span>
                            <p className="text-xl">adept last year</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="w-full bg">
                <div className="container w-10/12 m-auto flex flex-col justify-center ">
                    <div className="w-full text-center">
                        <h3 className="text-4xl my-5 font-medium">adaption process</h3>
                    </div>
                    <div className="d-flex my-14">
                        <div className="w-1/2 h-fit">
                            <img className="w-96" src={Group7} alt="" />
                        </div>
                        <div className="w-1/2 my-5">
                            <ul className="flex mb-20 w-full">
                                <li className="w-1/2">
                                    <span className="p-3 px-6 bg-cyan-500 text-white rounded-full my-5 text-2xl bg-primary">1</span>
                                    <p className="my-7 text-xl font-bold">create account</p>
                                </li>
                                <li className="w-1/2">
                                    <span className="p-3 px-6 bg-cyan-500 text-white rounded-full my-5 text-2xl bg-primary">2</span>
                                    <p className="my-7 text-xl font-bold">find your pet</p>
                                </li>
                            </ul>
                            <ul className="flex w-full">
                                <li className="w-1/2">
                                    <span className="p-3 px-6 bg-cyan-500 text-white rounded-full my-5 text-2xl bg-primary">3</span>
                                    <p className="my-7 text-xl font-bold">complete adaption form</p>
                                </li>
                                <li className="w-1/2">
                                    <span className="p-3 px-6 bg-cyan-500 text-white rounded-full my-5 text-2xl bg-primary">4</span>
                                    <p className="my-7 text-xl font-bold">take your pet home</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full learn my-5 py-5">
                <div className="learn-bg w-full">
                    <div className="container w-10/12 m-auto flex flex-col justify-center items-center">
                        <div className="title text-center">
                            <h3 className="text-4xl">Pet care tips</h3>
                            <p className="text-lg font-medium">learn how to care for your funny friends</p>
                        </div>
                        <div>
                            <div className="sec-3 flex rounded-full my-12">
                                <img className="rounded-full" src={image18} alt="" />
                                <div className="text flex flex-col justify-center  mx-10">
                                    <h4 className="text-2xl mb-4">Lorem ipsum dolor sit amet.</h4>
                                    <p className="pe-12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad pariatur magnam totam excepturi. Similique magnam magni necessitatibus mollitia dignissimos ipsum amet repudiandae ex debitis. Consequuntur expedita excepturi in facilis tenetur.</p>
                                </div>
                            </div>
                            <div className="sec-3 flex rounded-full my-12">
                                <img className="rounded-full" src={image18} alt="" />
                                <div className="text flex flex-col justify-center  mx-10">
                                    <h4 className="text-2xl mb-4">Lorem ipsum dolor sit amet.</h4>
                                    <p className="pe-12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad pariatur magnam totam excepturi. Similique magnam magni necessitatibus mollitia dignissimos ipsum amet repudiandae ex debitis. Consequuntur expedita excepturi in facilis tenetur.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default SectionsHome;