
import styles from './CheckoutForm.module.css'

const CheckoutForm = (props) => {

    return (
        <form className={styles.formContainer}>
            <h4 className={styles.formTitle}>Order details</h4>
            <div>
                <label htmlFor='name'>Name</label>
                <input id='name' type="text"></input>
            </div>
            <div>
                <label htmlFor='mobile'>Mobile</label>
                <input id='mobile' type="number"></input>
            </div>
            <div>
                <label htmlFor='address'>Address</label>
                <input id='address' type="text"></input>
            </div>
            <div className={styles.actions}>

                <button onClick={props.cancel} type='button'>Cancel</button>
                <button onClick={props.submit} >Confirm</button>
            </div>

        </form>
    )

}

export default CheckoutForm;