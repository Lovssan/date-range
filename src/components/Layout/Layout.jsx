import styles from './Layout.module.scss'

const Layout = ({ children, heading = '' }) => {
	return (
		<section className={styles.wrapper}>
			{heading && <h1 className={styles.heading}>{heading}</h1>}
			{children}
		</section>
	)
}
export default Layout
