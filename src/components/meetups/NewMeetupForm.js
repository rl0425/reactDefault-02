import Card from '../ui/Card'
import classes from './NewMeetupForm.module.css'
import { useRef } from 'react'

function NewMeetupForm(props) {
    const titleInputReef = useRef();
    const imageInputReef = useRef();
    const addressInputReef = useRef();
    const descriptionInputReef = useRef();

    function submitHandler(event){
        event.preventDefault()

        const enteredTitle = titleInputReef.current.value
        const enteredImage = imageInputReef.current.value
        const enteredAddress = addressInputReef.current.value
        const enteredDescription = descriptionInputReef.current.value

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address : enteredAddress,
            description : enteredDescription
        }

        props.onAddmeetup(meetupData)

    }

    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type="text" required id='title' ref={titleInputReef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input type="url" required id='image' ref={imageInputReef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input type="text" required id='address' ref={addressInputReef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea id='description' required rows='5' ref={descriptionInputReef}></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
}

export default NewMeetupForm