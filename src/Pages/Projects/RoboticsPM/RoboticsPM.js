import React from 'react';
import ProjectBanner from '../ProjectBanner/ProjectBanner';
import RPM1 from '../../../Assets/projects/RMP2.png'
import RPM2 from '../../../Assets/projects/RPM3.png'
import RPM3 from '../../../Assets/projects/RPM4.png'
import RPM4 from '../../../Assets/projects/RPM5.png'
import RPM5 from '../../../Assets/projects/RPM6.png'
const RoboticsPM = () => {
    return (
        <div>
            <ProjectBanner></ProjectBanner>
            <div className='mx-4'>
                <div className="card lg:card-side bg-slate-200 shadow-xl mt-8">
                    <figure><img className='w-96' src={RPM1} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-orange-500">Project Description</h2>
                        <p>
                            This Project have a home page, blog page, My portfolio page, parts, dashboard and login option. and navbar and footer option is common part of this project. In home page have multiple option , first banner section, shipping information option, available parts/product part section, Challenges section, business summery and customer review section. My Portfolio page have my information, name, email, mobile number , linkdin profile, github profile and my image. and next section have educational background and 3rd section have My list of technology and last section have my three (3) project link. Blog page have a banner section and five question and answer. Parts page have my all parts. in this page user added product show and customer can order product. and every product have name, image, product description, minimum order number, available quantity, price and a order button option. Dashboard page have multiple option. this page customer and admin see multiple change. user and admin have common my profile page. admin have manage orders, make admin, add product, manage product page. and customer have add review and my order page in dashboard option. login page have a login form and one social login and registration page option.
                        </p>
                    </div>
                </div>

                <div className="card lg:card-side bg-slate-200 shadow-xl mt-8">
                    <div className="card-body">
                        <h2 className="card-title font-bold text-orange-500">Admin Option</h2>
                        <p>
                            This site have two type of user, 1. Admin and 2. Customer. Admin have some option , In My profile admin can see admin name and admin email and change address and phone number. Manage Order Page have all users order information, user can delete unpaid order and can shift. Make Admin Page have all user information Admin Can make new Admin use this page. Add product page have a product add form user can new Add product use this page. manage product Page have all product Information admin can delete product ues this page.
                        </p>
                    </div>
                    <figure><img className='w-96' src={RPM2} alt="Album" /></figure>
                </div>


                <div className="card lg:card-side bg-slate-200 shadow-xl mt-8">
                    <figure><img className='w-96' src={RPM3} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-orange-500">Customer Option</h2>
                        <p>
                            In Dashboard have another option part. This part only for customer. Customer have my Profile page, in this page have customer name and email and customer can change address and phone number. In Order page have customer all order products and customer can delete order item and confirm order use pay bill option. and have Add Review page. customer use this page create review for this website and show this review in home page.
                        </p>
                    </div>
                </div>

                <div className="card lg:card-side bg-slate-200 shadow-xl mt-8">
                    <div className="card-body">
                        <h2 className="card-title font-bold text-orange-500">Payment Option</h2>
                        <p>
                            In this website have a payment option when user create order customer see a pay option after click this option user go payment page. user complete payment use debit card, muster card, visa card, american express and use all of card customer can pay bill. after complete payment process complete customer order.Stripe technology use this payment option creating.
                        </p>
                    </div>
                    <figure><img className='w-96' src={RPM4} alt="Album" /></figure>
                </div>

                <div className="card lg:card-side bg-slate-200 shadow-xl mt-8">
                    <figure><img className='w-72' src={RPM5} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-orange-500">Technology Use</h2>
                        <p>
                            In this Website Use some technology. first install nodeJs, mongoDb server, express, dotenv and more. use this site React Js framework and use Route option. in MongoDb use MongoDb-Atlas and MongoDb-CRUD for CRUD Operation. and use Firebase for User login system and Host Live Website. and For Server Hosting Use Heroku. <br />
                            In this site use modal for completing customer order. After click purchase order option show confirm order modal . this modal have a form and have product information and some input fill.user complete all information confirm order.
                        </p>
                    </div>
                </div>

                <div className="btn-group items-center justify-center my-10 gap-5">
                    <a className="btn bg-orange-500 text-black hover:bg-white text-black font-bold" href='https://robotics-parts-manufacturer.web.app/' target='_blank'>Live Website</a>
                    <a className="btn bg-orange-500 text-black hover:bg-white text-black font-bold" href='https://github.com/hasan71224/robotics-parts-manufacturer-client' target='_blank'>Client Site Code</a>
                    <a className="btn bg-orange-500 text-black hover:bg-white text-black font-bold" href='https://github.com/hasan71224/robotics-parts-manufacturer-server' target='_blank'>Server Site Code</a>
                </div>

            </div>
        </div>
    );
};

export default RoboticsPM;