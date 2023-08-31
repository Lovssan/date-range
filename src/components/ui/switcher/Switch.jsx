import styles from './Switch.module.scss'

const Switch = ({ clickHander, isBooleanValue, firstText, secondText }) => {
	return (
		<div className={styles.row}>
			<div className='button-cover'>
				<input
					type='checkbox'
					className='checkbox'
					onChange={() => clickHander(!isBooleanValue)}
				></input>
				<div className='years'>{firstText}</div>
				<div className='years'>{secondText}</div>
			</div>
		</div>
	)
}
export default Switch
