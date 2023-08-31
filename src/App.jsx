import { useState } from 'react'

import Layout from './components/Layout/Layout'
import styles from './components/Layout/Layout.module.scss'
import SliderDate from './components/slider-date/Slider-date'

const App = () => {
	const [value1, setValue1] = useState('2020-05')
	const [value2, setValue2] = useState('2022-01')
	const [value3, setValue3] = useState('2020-05')
	const [value4, setValue4] = useState('2020-11')

	const dateRange = [new Date(value1), new Date(value2)]
	const currentDateRange = [new Date(value3), new Date(value4)]

	return (
		<>
			<form className={styles.wrapper}>
				<label className='wrapper-inner-page'>
					Min and max range
					<input
						type='month'
						max={value2}
						name='minRange'
						value={value1}
						onChange={e => setValue1(e.target.value)}
					/>
					-
					<input
						type='month'
						name='maxRange'
						min={value1}
						value={value2}
						onChange={e => setValue2(e.target.value)}
					/>
				</label>

				<label className='wrapper-inner-page'>
					Current range
					<input
						type='month'
						name='minCurrentRange'
						min={value1}
						max={value4}
						value={value3}
						onChange={e => setValue3(e.target.value)}
					/>
					-
					<input
						type='month'
						name='maxCurrentRange'
						min={value3}
						max={value2}
						value={value4}
						onChange={e => setValue4(e.target.value)}
					/>
				</label>
			</form>

			<Layout heading='Slider date range component'>
				<SliderDate dateRange={dateRange} currentDateRange={currentDateRange} />
			</Layout>
		</>
	)
}

export default App
