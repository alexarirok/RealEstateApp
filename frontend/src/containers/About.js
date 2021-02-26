import React, { useState, useEffect, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import evhouse from '../assets/images/evhouse.jpg';

const About = () => {
    const [topSeller, setTopSeller] = useState([]);
    const [realtors, setRealtors] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const getTopSeller = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/realtors/topseller`, config);
                setTopSeller(res.data);
            }
            catch (err) {

            }
        };
        getTopSeller();
    }, []);

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const getRealtors = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/realtors/`, config);
                setRealtors(res.data);
            }
            catch (err) {

            }
        };
        getRealtors();
    }, []);

    const getAllRealtors = () => {
        let allRealtors = [];
        let results = [];

        realtors.map(realtor => {
            return allRealtors.push(
                <Fragment key={realtor.id}>
                    <div className='about__display'>
                        <img className='about__display__image' src={realtor.photo} alt='' />
                    </div>
                    <h3 className='about__realtor'>{realtor.name}</h3>
                    <p className='about__contact'>{realtor.phone}</p>
                    <p className='about__contact'>{realtor.email}</p>
                    <p className='about__about'>{realtor.description}</p>
                </Fragment>
            );
        });
        for (let i = 0; i < realtors.length; i += 3) {
            results.push(
                <div key={i} className='row'>
                    <div className='col-1-of-3'>
                        {allRealtors[i]}
                    </div>
                    <div className='col-1-of-3'>
                        {allRealtors[i+1] ? allRealtors[i+1] : null}
                    </div>
                    <div className='col-1-of-3'>
                        {allRealtors[i+2] ? allRealtors[i+2] : null}
                    </div>
                </div>
            );
        }
        return results;
    };

    const getTopSeller = () => {
        let result = [];
        
        topSeller.map(seller => {
            return result.push(
                <Fragment key={seller.id}>
                    <div className='about__display'>
                        <img className='about__display__image' src={seller.photo} alt='' />
                    </div>
                    <h3 className='about__topseller'>Top Seller:</h3>
                    <p className='about__realtor'>{seller.name}</p>
                    <p className='about__contact'>{seller.phone}</p>
                    <p className='about__contact'>{seller.email}</p>
                    <p className='about__about'>{seller.description}</p>
                </Fragment>
            );
        });
        return result;
    };

    return (
        <main className='about'>
            <Helmet>
                <title>Winlex Estate - About</title>
                <meta 
                    name='description'
                    content='About Us'
                />
            </Helmet>
            <header className='about__header'>
                <h1 className='about__heading'>About Winlex Estate</h1>
            </header>
            <section className='about__info'>
                <div className='row'>
                    <div className='col-3-of-4'>
                        <h2 className='about__subheading'>We find you a perfect home</h2>
                        <p className='about__paragraph'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada interdum mollis. Donec ac eros venenatis, 
                        pellentesque orci et, blandit augue. Vestibulum nec posuere dui, sed malesuada neque. In tincidunt lectus velit, auctor efficitur nunc cursus non. 
                        Cras nibh risus, ultrices id aliquet nec, imperdiet vel lacus. 
                        Nullam fringilla lacus eget nisi faucibus aliquam. Nulla sollicitudin, erat in volutpat dapibus, magna metus scelerisque ipsum, sit amet pulvinar quam elit eget sem. Duis ac aliquam est. Donec non est nulla. Cras commodo, urna id tempor varius, nisl nunc commodo nisi, a ultrices sapien ex sed turpis. 
                        </p>
                        <div className='about__display'>
                            <img className='about__display__image' src={evhouse} alt='' />
                        </div>
                        <p className='about__paragraph'>
                        Nam at odio vulputate, suscipit mi vitae, tristique lorem. Duis cursus dui vulputate ipsum auctor porta. Cras rutrum rutrum nibh a vestibulum. 
                        Fusce id tempus massa, sit amet pulvinar nisl. Pellentesque ullamcorper consequat scelerisque. Pellentesque maximus, ex a iaculis rutrum, quam massa gravida ipsum, ut scelerisque diam ipsum a lacus. 
                        Mauris vel nisi sit amet lorem dictum volutpat ut vel elit. Etiam vitae vulputate lectus. Maecenas eget leo pulvinar, pulvinar massa efficitur, feugiat velit. Nullam nunc felis, consectetur non convallis id, sollicitudin sed ipsum. 
                        Maecenas dictum, orci id euismod blandit, enim tortor fermentum leo, non facilisis ipsum eros vitae purus. Sed eu vestibulum mi. Suspendisse placerat, 
                        ipsum nec sollicitudin faucibus, ante massa pharetra ipsum, eget venenatis diam lectus ac ligula. Mauris vel ipsum in velit rutrum efficitur sed non ligula
                        </p>
                    </div>
                    <div className='col-1-of-4'>
                        {getTopSeller()}
                    </div>
                </div>
            </section>
            <section className='about__team'>
                <div className='row'>
                    <h2 className='about__subheading'>Meet our awesome team</h2>
                </div>
                {getAllRealtors()}
            </section>
        </main>
    );
};

export default About;