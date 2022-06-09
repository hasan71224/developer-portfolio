import React from 'react';
import ProjectBanner from '../ProjectBanner/ProjectBanner';
import OS1 from '../../../Assets/projects/OS1.png'
import OS2 from '../../../Assets/projects/OS2.png'
import OS3 from '../../../Assets/projects/OS3.png'
import OS4 from '../../../Assets/projects/OS4.png'

const OneStudio = () => {
    return (
        <div>
            <ProjectBanner></ProjectBanner>

            <div className='mx-4'>
                <div className="card lg:card-side bg-slate-200 shadow-xl mt-8">
                    <figure><img className='w-72' src={OS1} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-orange-500">Project Description</h2>
                        <p>
                            This is a small photography , senemetografy, event management service system. this system customer can booking event use this website. this system have multiple service of photography and videography. <br />
                            This site have some service packages: Wedding Package, Family Package, Student Package, Corporate Event, Product Photography, Modeling Photography and more.
                            In Home page have a header/ navigation var. image slider . A service section. use bootstrap and react bootstrap design this page.
                        </p>
                    </div>
                </div>

                <div className="card lg:card-side bg-slate-200 shadow-xl mt-8">
                    <div className="card-body">
                        <h2 className="card-title font-bold text-orange-500">Service Option</h2>
                        <p>
                            In service section i show one studio services. have 6 services of photography. this services show a card and have this card image, name, description, package price. user choose service and use checkout form user can confirm event time. <br />
                            Wedding Package, Family Package, Student Package, Corporate Event, Product Photography, Modeling Photography and more services have in this Website.
                        </p>
                    </div>
                    <figure><img className='w-72' src={OS2} alt="Album" /></figure>
                </div>


                <div className="card lg:card-side bg-slate-200 shadow-xl mt-8">
                    <figure><img className='w-72' src={OS3} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-orange-500">CheckOut and Blog</h2>
                        <p>
                            User choose a service and click process checkout button for confirm service order. after click open a form and user filup checkout form. use bootstrap framework make this form. <br />
                            In blog page have 3 question ans solve:

                            1. What is difference between authentication and Authorisation give two examples each?
                            2. Why we use firebase? what other options do you have to implement authentication?
                            3. what other services does firebase provide other than authentication?
                        </p>
                    </div>
                </div>

                <div className="card lg:card-side bg-slate-200 shadow-xl mt-8">
                    <div className="card-body">
                        <h2 className="card-title font-bold text-orange-500">Login And Technology</h2>
                        <p>
                            In login page have form use firebase hook for login and use bootstrap form. and use email password login, and have 2 social login option github login, google login, use toast, alert for password update. <br />
                            In Register page use firebase and have a form for sign up and have some alert . use navigation for navigate another page. and create form use bootstrap form. <br />
                            and use technology in this website React, Router, bootstrap, react, Bootstrap, firebase, firebase hook and firebase hosting.
                        </p>
                    </div>
                    <figure><img className='w-72' src={OS4} alt="Album" /></figure>
                </div>



                <div className="btn-group items-center justify-center my-10 gap-5">
                    <a className="btn bg-orange-500 text-black hover:bg-white text-black font-bold" href='https://one-studio-e6f0f.web.app/' target='_blank'>Live Website</a>
                    <a className="btn bg-orange-500 text-black hover:bg-white text-black font-bold" href='https://github.com/hasan71224/one-stdio' target='_blank'>Client Site Code</a>
                </div>

            </div>
        </div>
    );
};

export default OneStudio;