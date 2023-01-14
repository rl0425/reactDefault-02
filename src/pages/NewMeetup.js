import { useHistory } from 'react-router-dom'

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const history = useHistory()

    function addMeetupHandler(meetupData) {
        console.log("hi")
        fetch(
            'https://react-getting-started-1c7e6-default-rtdb.firebaseio.com//meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type' : 'application/json'
                }
            }
        ).then(() =>{
            history.replace('/')
        })
    }


    return <section>
        <h1>add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
}

export default NewMeetupPage