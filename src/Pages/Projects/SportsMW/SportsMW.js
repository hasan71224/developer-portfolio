import React from 'react';
import ProjectBanner from '../ProjectBanner/ProjectBanner';
import SMW0 from '../../../Assets/projects/SMW0.png'
import SMW2 from '../../../Assets/projects/SMW2.png'
import SMW3 from '../../../Assets/projects/RPM3.png'
import SMW4 from '../../../Assets/projects/SMW4.png'

const SportsMW = () => {
    return (
        <div>
            <ProjectBanner></ProjectBanner>

            <div className='mx-4'>
                <div className="card lg:card-side bg-slate-200 shadow-xl mt-8">
                    <figure><img className='w-72' src={SMW0} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-orange-500">Project Description</h2>
                        <p>
                        This is a small warehouse business website, this site have a header section and some manue option. home, blog, manage inventory inventory, add item, My item and login option. some option are hide with out login. in home page have some section ,at first have a slider section use react carosal and 2nd have a inventory section, in inventory section have 6 type of sports item . then have process section, this section have three step of product process system. and then have software working system and show this section Software that gives you the visibility you need. and last have a footer section.
                        </p>
                    </div>
                </div>

                <div className="card lg:card-side bg-slate-200 shadow-xl mt-8">
                    <div className="card-body">
                        <h2 className="card-title font-bold text-orange-500">Inventory Item</h2>
                        <p>
                        In inventory have lot of product and have product details : name, user email, description, quantity, price and image. and have a button for product details use this button user can change go product details and change quantity for delevered and update.
                        </p>
                    </div>
                    <figure><img className='w-96' src={SMW2} alt="Album" /></figure>
                </div>


                
                <div className="card lg:card-side bg-slate-200 shadow-xl mt-8">
                    <figure><img className='w-72' src={SMW3} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-orange-500">Items Add and delete</h2>
                        <p>
                        In Add Item page have a form and have in input form name, email, description, quantity, price and image url field. use this form user add product for this warehouse. <br />
                        This page use form submit option admin add items. user filup use valid data with items photo admin can add sports items. use in this form bootstrap form option. and this site have another option delete items, this page have all items and have a delete button admin can delete item use delete button.
                        </p>
                    </div>
                </div>

                <div className="card lg:card-side bg-slate-200 shadow-xl mt-8">
                    <div className="card-body">
                        <h2 className="card-title font-bold text-orange-500">Login and Technology</h2>
                        <p>
                        In login section use react bootstrap form and use firebase for login . use email password login option and use social login use google and use this form firebase authentication. try this page spinner, toast, alart, email verification after register, and reset password. <br />
                        In Sports Mans Warehouse Website use react, bootstrap, react bootstrap, node ja, express, MongoDB, heroko, axios, MongoDB CRUD, Firebase And more of tools.
                        </p>
                    </div>
                    <figure><img className='w-96' src={SMW4} alt="Album" /></figure>
                </div>


                

                <div className="btn-group items-center justify-center my-10 gap-5">
                    <a className="btn bg-orange-500 text-black hover:bg-white text-black font-bold" href='https://sports-mans-warehouse.web.app/' target='_blank'>Live Website</a>
                    <a className="btn bg-orange-500 text-black hover:bg-white text-black font-bold" href='https://github.com/hasan71224/sports-mans-warehouse-client' target='_blank'>Client Site Code</a>
                    <a className="btn bg-orange-500 text-black hover:bg-white text-black font-bold" href='https://github.com/hasan71224/sports-mans-warehouse-server' target='_blank'>Server Site Code</a>
                </div>

            </div>
        </div>
    );
};

export default SportsMW;