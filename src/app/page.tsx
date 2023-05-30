"use client"
import TodoPage from './ToDoPage/todoPage'
import styles from './page.module.css'

export default function Home() {
	return (
		<main className={styles.main}>
			<h2>
				<TodoPage/>
			</h2>
		</main>
	)
}
