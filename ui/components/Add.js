// es6 spread operator in google console
// https://stackoverflow.com/questions/42061415/how-to-use-object-spread-syntax-in-chrome-dev-tools


import axios from 'axios';
import { useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import styles from '../styles/components/Add.module.scss'

const Add = ({ setOpen, }) => {
	const [file, setFile] = useState(null)

	const { register, control, handleSubmit, } = useForm({
		defaultValues: {
			extraOptions: [{ title: "Spicy", price: 5 }],
		}
	});
	const { fields, append, remove, } = useFieldArray({
		control, name: "extraOptions"
	});

	const onSubmit = async (data) => {

		console.log("data", data);
		const coundName = 'dexoyyxyg'; //  process.env?.REACT_APP_CLOUD_NAME || 'dexoyyxyg';
		const preset = 'uyokwwn8'; // process.env?.REACT_APP_UPLOAD_PRESET || 'uyokwwn8';
		const fileName = file.name;

		try {
			const fd = new FormData();
			fd.append('file', file);
			fd.append(
				'upload_preset',
				'uyokwwn8'
			);

			const cloudinary_url = `https://api.cloudinary.com/v1_1/${coundName}/upload`;
			const uploadRes = await axios.post(cloudinary_url, fd);

			const { url } = uploadRes.data;

			debugger;

			const res = await axios.post('http://localhost:3000/api/products', {
				...data,
				img: url,
			})

			debugger;
		} catch (error) {
			debugger;

		}



	}

	return (

		<div className={styles.add}>
			<form onSubmit={handleSubmit(onSubmit)}>

				<h1>
					Add a new Pizza
					<button onClick={() => setOpen(false)}>
						X
					</button>
				</h1>

				<fieldset className="fc">
					<section>
						<label htmlFor="">choose and image</label>
						<input type="file" onChange={(e) => setFile(e.target.files[0])} />
					</section>
				</fieldset>

				<fieldset className="fc">
					<label htmlFor="">title</label>
					<input type="text" {...register('title')} />
				</fieldset>

				<fieldset className="fc">
					<label htmlFor="">desc</label>
					<input type="text" {...register('desc')} />
				</fieldset>

				<fieldset className="fc">
					<label htmlFor="">price</label>
					<section>
						<input type="number" defaultValue={10} {...register('prices.0')} />
						<input type="number" defaultValue={20} {...register('prices.1')} />
						<input type="number" defaultValue={30} {...register('prices.2')} />
					</section>
				</fieldset>

				<fieldset className="fc">
					<label htmlFor="">Extra</label>
					<ul>
						{fields.map((item, index) => {
							return (
								<li key={item.id}>
									<input type="text"
										{...register(`extraOptions.${index}.title`, { required: true })}
									/>
									<Controller
										render={({ field }) => <input {...field} type="number" />}
										name={`extraOptions.${index}.price`}
										control={control}
									/>
									<span>
										<button type="button" onClick={() => remove(index)}>
											Delete
										</button>
									</span>
								</li>
							);
						})}
					</ul>
					<section>
						<button type="button" onClick={() => {
							append({ title: "", price: 13 });
						}}>append</button>
					</section>

				</fieldset>

				<section>
					<button>save</button>
				</section>

			</form>
		</div>

	);
}

export default Add;


// section
// fieldset