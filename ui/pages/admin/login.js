import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

// import './login.scss'

import styles from '../../styles/pages/Login.module.scss'

const Login = () => {

	const router = useRouter();
	const [error, setError] = useState('')
	const { register, handleSubmit, formState: { errors } } = useForm();

	console.log(errors)

	const onSubmit = async (data) => {
		try {
			setError('')
			const { username, password } = data;
			const res = await axios.post('http://localhost:3000/api/login', {
				username,
				password,
			})

			debugger;
			router.push('/admin')
		} catch (err) {
			debugger;
			setError(err.response.data)
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.login}>

				<div className={styles.wrapper}>
					<div className={styles.control}>
						<label htmlFor="">Username</label>
						<input className={errors.username ? 'error' : ''} type="text" {...register('username', { required: true, })} />
					</div>
					<div className={styles.control}>
						<label htmlFor="">Username</label>
						<input className={errors.password ? 'error' : ''} type="text" {...register('password', { required: true, })} />
					</div>

					<button>Login</button>

					{error && <p className='error-label'>{error}</p>}

				</div>

			</div>
		</form>
	)
}

export default Login