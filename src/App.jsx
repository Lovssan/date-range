import { useState } from 'react'

import Layout from './components/Layout/Layout'
import styles from './components/Layout/Layout.module.scss'
import SliderDate from './components/slider-date/Slider-date'

import { formatDate, getDate } from './utils/date.utils'

const App = () => {
	const [dateRange, setDateRange] = useState([
		getDate('2020-05'),
		getDate('2022-01')
	])
	const [selectedRange, setSelectedRange] = useState([
		getDate('2020-06'),
		getDate('2021-01')
	])

	return (
		<Layout heading='Slider date range component'>
			<form className={styles.wrapper}>
				<label>
					Min and max range
					<input
						type='month'
						value={formatDate(dateRange[0])}
						onChange={e =>
							setDateRange([getDate(e.target.value), dateRange[1]])
						}
					/>
					-
					<input
						type='month'
						value={formatDate(dateRange[1])}
						onChange={e =>
							setDateRange([dateRange[0], getDate(e.target.value)])
						}
					/>
				</label>

				<label>
					Current range
					<input
						type='month'
						value={formatDate(selectedRange[0])}
						onChange={e =>
							setSelectedRange([getDate(e.target.value), selectedRange[1]])
						}
					/>
					-
					<input
						type='month'
						value={formatDate(selectedRange[1])}
						onChange={e =>
							setSelectedRange([selectedRange[0], getDate(e.target.value)])
						}
					/>
				</label>
			</form>

			<SliderDate
				dateRange={dateRange}
				selectedRange={selectedRange}
				setSelectedRange={setSelectedRange}
			/>
		</Layout>
	)
}

export default App
