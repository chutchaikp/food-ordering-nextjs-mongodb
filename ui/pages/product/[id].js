import { addProduct } from '@/redux/cartSlice';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import styles from '../../styles/components/Product.module.scss'

const Product = ({ pizza }) => {

	const dispatch = useDispatch()
	const { register, handleSubmit, formState: { errors } } = useForm();

	const [totalPrice, setTotalPrice] = useState(0);
	const [size, setSize] = useState(0) // 0 1 2
	const [quantity, setQuantity] = useState(1)
	const [extras, setExtras] = useState([])

	useEffect(() => {
		try {
			const _quantity = parseInt(quantity);
			const normalPrice = pizza.prices[size] * _quantity;

			const exPrice = extras.map(ex => {
				return ex.price * _quantity;
			}
			);

			setTotalPrice(normalPrice + (exPrice.length === 0 ? 0 : exPrice.reduce((a, b) => a + b) * 1))

		} catch (error) {

		}
	}, [size, quantity, extras])

	useEffect(() => {
		console.log('useEffect')


	}, [size,])


	const onChangeSize = (s) => {
		console.log('xx')
		setSize(prev => s);
	}

	const handleExtraOptions = (ex, onOff) => {

		if (onOff) {
			// extras.includes(ex)
			setExtras([...extras, ex])
		} else {
			setExtras(prev => {
				return prev.filter(x => x._id !== ex._id)
			})
		}

		console.log('on off')
	}

	const onSubmit = (data) => {

		console.log(data);

		dispatch(addProduct({ ...pizza, extras, price: pizza.prices[size], quantity, }))

	}

	return (

		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.product}>

				{/* <div className={styles.left}>

			</div> */}
				<div className={styles.img}>
					<Image src={pizza.img} width={2000} height={2000} alt="" />
				</div>



				<div className={styles.right}>

					<h1>{pizza.title} - size {size}</h1>

					<span>
						${pizza.prices[size]} - 					${totalPrice}
					</span>

					<p>{pizza.desc}</p>

					{/* <div className={styles.items}>
						<div className={styles.item}>
							<input type="radio" name="item" id="item1" ></input>
							<label htmlFor="item1">Small</label>
						</div>
						<div className={styles.item}>
							<input type="radio" name="item" id="item2" ></input>
							<label htmlFor="item2">Medium</label>
						</div>
						<div className={styles.item}>
							<input type="radio" name="item" id="item3" ></input>
							<label htmlFor="item3">Large</label>
						</div>
					</div> */}

					<h3> Choose the size </h3>

					<div className={styles.sizes}>

						<div className={styles.size} onClick={(e) => {
							e.preventDefault();
							onChangeSize(0);
						}
						}>
							<Image src="/img/size.png" width="1000" height="1000" alt="" />
							<span>small</span>
						</div>
						<div className={styles.size} onClick={(e) => {
							e.preventDefault();
							onChangeSize(1)
						}
						}>
							<Image src="/img/size.png" width="1000" height="1000" alt="" />
							<span>medium</span>
						</div>
						<div className={styles.size} onClick={() => onChangeSize(2)}>
							<Image src="/img/size.png" width="1000" height="1000" alt="" />
							<span>large</span>
						</div>

					</div>

					<h3>Choose additional ingredients</h3>
					<div className={styles.ingredients}>

						{pizza.extraOptions.map(ex => {
							return <div key={ex._id}>
								<div className={styles.cb}>
									<input
										// {...register(ex.title, {})}
										onChange={e => {
											handleExtraOptions(ex, e.target.checked)
										}}
										type="checkbox" id={ex._id} />
								</div>
								<label htmlFor={ex._id}>{ex.title}({ex.price})</label>
							</div>

						}
						)}

					</div>

					<div className={styles.add}>
						<input type="number"
							{...register('quantity', { default: 0, valueAsNumber: true, })}
							onChange={(e) => {
								setQuantity(e.target.value);
							}
							}
							defaultValue="1"
							min={0}
							max={100}
						/>

						{/* <button>Add to Cart</button> */}
						<input type="submit" value="Add to Cart" />
					</div>

				</div>


			</div>
		</form>
	);
}

export async function getServerSideProps({ params }) {
	let data;
	try {
		const url = 'http://localhost:3000/api/products/' + params.id
		data = await axios.get(url)
	} catch (error) {
		data = error
	}

	return {
		props: {
			pizza: data.data
		}
	}
}


export default Product;