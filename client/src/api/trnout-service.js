import request from "../util/request";

const retrieveEvents = async () => {
    const options = {
        method: 'GET'
    };
    const data = await request('/events', options);
    if (!data ) {
        throw new Error('Something went wrong with retrieving all events');
    }
    return data;
};

const retrieveEvent = async (eventId) => {
    const options = {
        method: 'GET'
    };
    const data = await request(`/events/${eventId}`, options);
    if (!data ) {
        throw new Error(`Something went wrong with retrieving event ${eventId}`);
    }
    return data;
};

const retrieveAttendees = async (eventId) => {
    const options = {
        method: 'GET'
    };
    const data = await request(`/events/${eventId}/attendees`, options);
    if(data.status === false){
        if(data.code === 400){
            return {
                code: 400,
                message: 'Event must start for attendees list to be presented.'
            }
        }
    }
    if (!data ) {
        throw new Error(`Something with wrong with retrieving all attendees for ${eventId}`);
    }
    return data;
};

const updateAttendance = async (attendance) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(attendance),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    };

    const data = await request(`/attendance`, options);
    if (!data ) {
        throw new Error(`Something with wrong with updating attendee list`);
    }
    return data;
}

export {
    retrieveEvent,
    retrieveEvents,
    retrieveAttendees,
    updateAttendance
}
