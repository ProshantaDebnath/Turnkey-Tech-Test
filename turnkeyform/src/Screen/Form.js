
import React, { Component } from 'react'
import styles from './Form.module.css'

class Form extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name:'',
			contact: '',
			email: '',
            work:'startup',
            stack : '',
            document : 'yes',
            budget :'less 1k USD',
            projects : ''

		}
	}

	handleNameChange = event => {
		this.setState({
			name: event.target.value
		})
	}

    handleContactChange = event =>{
        this.setState({
			contact: event.target.value
		})
    }

    handleEmailChange = event =>{
        this.setState({
			email: event.target.value
		})
    }

    handleWorkChange = event =>{
        this.setState({
			work: event.target.value
		})
    }

    handleStackChange = event =>{
        this.setState({
			stack: event.target.value
		})
    }

    handleDocumentChange = event =>{
        this.setState({
			document: event.target.value
		})
    }

    handleBudgetChange = event => {
		this.setState({
			budget: event.target.value
		})
	}

	handleProjectChange = event => {
		this.setState({
			projects: event.target.value
		})
	}

	

	handleSubmit = event => {
		event.preventDefault()
        localStorage.setItem('document',JSON.stringify(this.state));
        console.log(this.state)
	}

	render() {
		const { name, contact, email, work, stack, document, budget, projects } = this.state
		return (
            <div className='row justify-content-center' style={{marginTop:'4%',textAlign:'left'}}>
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>Your Name </label>
					<input
						type="text"
						value={name}
                        className="form-control"
						onChange={this.handleNameChange}
					/>
				</div>
                <div>
					<label className={styles.textmargin}>Contact Number </label>
					<input
						type="text"
						value={contact}
                        className="form-control"
						onChange={this.handleContactChange}
					/>
				</div>
                <div>
					<label className={styles.textmargin}>Your Email </label>
					<input
						type="text"
						value={email}
                        className="form-control"
						onChange={this.handleEmailChange}
					/>
				</div>

                <div>
					<label className={styles.textmargin}>How Would you categories yourself?</label>
					<select value={work} 
                    className="form-control"
                    onChange={this.handleWorkChange}>
						<option value="stratup">Stratup</option>
						<option value="individual">Individual</option>
						<option value="large enterprise">Large enterprise</option>
					</select>
				</div>

                <div>
					<label className={styles.textmargin}>Do you have a preferred tech stack? If yes, which one?</label>
					<input
						type="text"
						value={stack}
                        className="form-control"
						onChange={this.handleStackChange}
					/>
				</div>

                <div>
					<label className={styles.textmargin}>Do you have product specs or wireframes documented?</label>
					<select value={document} 
                    className="form-control"
                    onChange={this.handleDocumentChange}>
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
				</div>
	
				<div>
					<label className={styles.textmargin}>What is your estimated budget?</label>
					<select value={budget} 
                    className="form-control"
                    onChange={this.handleBudgetChange}>
						<option value="less 1k USD">less 1k USD </option>
						<option value="1k USD - 5k USD">1k USD - 5k USD</option>
						<option value="5k USD - 10k USD">5k USD - 10k USD</option>
                        <option value="10k USD - 20k USD">10k USD - 20k USD</option>
                        <option value="20k + USD">20k + USD</option>
					</select>
				</div>

                <div>
					<label className={styles.textmargin}>Describe the project in few lines</label>
					<textarea
						value={projects}
                        className="form-control"
						onChange={this.handleProjectChange}
					/>
				</div>
				<button type="submit" className={styles.button}>REQUEST QUOTE</button>
			</form>
            </div>
		)
	}
}

export default Form
