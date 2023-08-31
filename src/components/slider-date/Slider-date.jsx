import { SladerDate } from '../ui/slider/SliderStyled'
import Switch from '../ui/switcher/Switch'

import { useSlider } from './useSliderDate'

const SliderDate = ({ dateRange, currentDateRange }) => {
	const {
		isMonthMarks,
		setIsMonthMarks,
		handleChange,
		valueLabelFormat,
		currentRange,
		getMarks,
		sliderRange
	} = useSlider(dateRange, currentDateRange)

	const { marksYear, marksMonth } = getMarks()

	return (
		<div className='wrapper-inner-page'>
			<Switch
				clickHander={setIsMonthMarks}
				isBooleanValue={isMonthMarks}
				firstText='Все года'
				secondText='Месяцы'
			/>

			<SladerDate
				getAriaLabel={() => 'Years range'}
				value={currentRange}
				min={sliderRange[0]}
				max={sliderRange[1]}
				onChange={handleChange}
				step={1}
				valueLabelDisplay='on'
				valueLabelFormat={valueLabelFormat}
				marks={marksYear.concat(isMonthMarks ? marksMonth : [])}
				disableSwap
			/>
		</div>
	)
}
export default SliderDate
