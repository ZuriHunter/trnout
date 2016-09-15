//generic method call
function fetchData(url, successResponse) {
    var data;
      $.ajax({
          method: 'GET',
          async: false,
          url: url,
          dataType: 'jsonp',
          success: successResponse,
          error: function (error){
            console.error(error);
          }
      });
}


//parse through Events Data
function parseEventsData(response) {
  console.log(response);


  //loop through data
  for(var i = 0; i < 99; i++){
    data = response.data;

    var eventData = {
      eventId: data[i].id,
      eventName: data[i].name ,
      eventTime: data[i].time,
      eventLocationName: data[i].venue.name ,
      eventAddress: data[i].venue.address_1,
      eventCity: data[i].venue.city,
      eventState: data[i].venue.state,
      eventDescription: data[i].description ,
      eventRsvpCount: data[i].yes_rsvp_count
    }

    //post data to html

  }


}

$(document).ready(function(){

  $eventLink = $(".events-link"); //events link

  //Events Link
  $eventLink.on('click',function(e){
    e.preventDefault();
    console.log("Active Link");
    (function () {
        var eventsUrl = "https://api.meetup.com/Women-Who-Code-DC/events?&sign=true&photo-host=public&scroll=next_upcoming";
        fetchData(eventsUrl, parseEventsData)
      }());

  });
});





//
//




// $(document).ready(function () {

  // var fetchData = function(url) {
  // var urlEvent="https://api.meetup.com/Women-Who-Code-DC/events/228457104";
  //
  //   $.ajax({
  //     method: 'GET',
  //     url: urlEvent,
  //     dataType: 'jsonp',
  //     success: function (response) {
  //       addEventInfo(response);
  //     },
  //     error: function (error) {
  //       console.error(error);
  //     }
  //   });
  // };


// });


// function addEventInfo(response) {

  // fetchData(urlEvent);

  // console.log(fetchData);
//   eventInfo = {
//     name: response.data.name,
//     location: response.data.venue.address_1,
//     time: response.data.time,
//     rsvps: response.data.yes_rsvp_count,
//     info: response.data.description
//   }
//   console.log("THE RESPONSE", response);
//
//   console.log("EVENT INFO", eventInfo);
//
//   $eventName = $('.event-name-label')
//   $eventName.append('<p>' + eventInfo.name + '</p>');
//
//
// }
// addEventInfo();
//
// function addRsvps(response) {
//
// }
