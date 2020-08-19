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
    console.log('EventId Passed', eventId);
    const options = {
        method: 'GET'
    };
    const data = await request(`/events/${eventId}/attendees`, options);
    console.log('DATA', data);
    if (!data ) {
        throw new Error(`Something with wrong with retrieving all attendees for ${eventId}`);
    }
    return data;
};

export {
    retrieveEvent,
    retrieveEvents,
    retrieveAttendees
}