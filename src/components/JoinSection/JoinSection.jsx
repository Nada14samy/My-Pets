import React from "react";
import { Link } from "react-router-dom";
import image_21 from "../../images/JoinSection/image21.png";

const JoinSection = () => {
    return (
        <>
            <section className="w-full my-12 join h-fit d-flex">
                <div className="container w-10/12 m-auto flex">
                    <div className="w-1/2">
                        <div className="title">
                            <h3 className="text-4xl font-medium mb-10">join our community</h3>
                            <div className="mt-10">
                                <div className="flex items-center my-5">
                                    <span className="rounded-full span bg-primary"></span>
                                    <h4 className="text-2xl mx-5 font-medium">share your pet stories</h4>
                                </div>
                                <p className="w-4/5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio nihil, voluptas doloribus quaerat veniam enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti deserunt voluptas sit temporibus modi dicta repudiandae ut mollitia recusandae? Minima?</p>
                            </div>
                            <div className="mt-10">
                                <div className="flex items-center my-5">
                                    <span className="rounded-full span bg-primary"></span>
                                    <h4 className="text-2xl mx-5 font-medium">get advise from experienced owners</h4>
                                </div>
                                <p className="w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsum adipisci magni nulla nihil nemo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti deserunt voluptas sit temporibus modi dicta repudiandae ut mollitia recusandae? Minima?</p>
                            </div>
                            <div className="mt-10">
                                <div className="flex items-center my-5">
                                    <span className="rounded-full span bg-primary"></span>
                                    <h4 className="text-2xl mx-5 font-medium">connect with fellow pet enthusiasts</h4>
                                </div>
                                <p className="w-4/5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti deserunt voluptas sit temporibus modi dicta repudiandae ut mollitia recusandae? Minima?</p>
                            </div>
                        </div>
                        <button className="btn rounded-full py-3 px-10 my-10 bg-primary">
                            <Link to="/">join our community</Link>
                        </button>
                    </div>
                    <div className="img-sec w-1/2">
                        <img src={image_21} alt="" className="mt-12 py-10" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default JoinSection;