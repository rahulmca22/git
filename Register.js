import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import Nav from './Nav';

function Register() {
    const [data, setData] = useState({});
    const [prevdata, setPrevdata] = useState(JSON.parse(localStorage.getItem('userdata')) || []);
    const navigate = useNavigate();

    const myref = useRef(null);

    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm();

    const onSubmit = (data) => {
        setData(data);
        alert(data.username);
    };

    const getData = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
        console.log(data);
    };

    const register = () => {
        prevdata.push(data);
        console.log('prevdata', prevdata);
        localStorage.setItem('userdata', JSON.stringify(prevdata));
        toast.success('registratiion successful!');
         navigate('/sign');
    };

//    catche   

    useEffect(() => {
        console.log(prevdata);
        myref.current.focus();
    }, []);

    return (
        <Fragment>
        <div>
<Nav />

       
            <div className='container'>
                <div className='row mydiv3'>
                    <div className='col-lg-4 mt-3 text-center'>
                        <h2>REGISTER HERE</h2>
                            <input ref={myref} type='text' className='form-control mb-2' placeholder='enter name' name='name' onInput={getData} />
                            <input type='email' className='form-control mb-2' placeholder='enter email' name='email' onInput={getData} />
                            <input type='number' className='form-control mb-2' placeholder='enter mobile' name='mobile' onInput={getData} />
                            <input type='text' className='form-control mb-2' placeholder='enter address' name='address' onInput={getData} />
                            <input type='password' className='form-control mb-2' placeholder='enter password' name='password' onInput={getData} />
                            <button onClick={register} type="button" className="btn btn-warning w-100 mt-3">Warning</button>
                        
{/*                         
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input type='text' className='form-control mb-2' placeholder='enter name' {...register ('username', {required:true})} />
                            {errors.username && <span>this field is required</span>}

                            <input type='email' className='form-control mb-2' placeholder='enter email' {...register ('email', {required:true})} />
                            {errors.email && <span>email is required!</span>}
                            <input type='number' className='form-control mb-2' placeholder='enter mobile' name='mobile'  />
                            <input type='text' className='form-control mb-2' placeholder='enter address' name='address'  />
                            <input type='password' className='form-control mb-2' placeholder='enter password' name='password'/>
                            <input type='submit'/>
                        </form> */}
                    </div>
                </div>
            </div></div>
            <ToastContainer />
        </Fragment>
    )
}

export default Register