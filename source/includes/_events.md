# Events
## Get all events

  ```javascript
        
const Confetti = require('confetti')

const confetti = new Confetti({ apiKey: 'your-key' })
const events = await confetti.events.findAll({
  filter: {
    signupType: 'rsvp'
  },
  page: {
    limit: 10,
    offset: 3
  }
})
        
```
```json
[
 {
  "name": "My first event",
  "startDate": "2020-09-19T16:00:00.000Z",
  "endDate": "2020-09-19T19:00:00.000Z",
  "timeZone": "Europe/Berlin",
  "slug": "green-summer-18717b",
  "status": "open",
  "featureLevel": "business",
  "signupType": "rsvp",
  "website": "http://jonny-action.confetti.test/my-first-event",
  "email": "jonny.stromberg@gmail.com",
  "rsvpLimit": 100,
  "rsvpLeft": 85,
  "waitlisted": 0,
  "hasPassed": false,
  "createdAt": "2018-10-11T13:06:16.432Z",
  "updatedAt": "2020-03-09T20:19:40.956Z",
  "summary": "Write a three sentence pitch for your event here.",
  "timeFormat": "24",
  "locale": "en",
  "primaryColor": "#00DB7D",
  "colors": {},
  "waitlist": true,
  "location": {
   "url": "http://www.google.com/maps?q=undefined"
  },
  "id": "16500",
  "type": "event",
  "images": null
 },
 {
  "name": "My first event",
  "startDate": "2020-09-19T16:00:00.000Z",
  "endDate": "2020-09-19T19:00:00.000Z",
  "timeZone": "Europe/Berlin",
  "slug": "green-summer-18717b",
  "status": "open",
  "featureLevel": "business",
  "signupType": "rsvp",
  "website": "http://jonny-action.confetti.test/my-first-event",
  "email": "jonny.stromberg@gmail.com",
  "rsvpLimit": 100,
  "rsvpLeft": 85,
  "waitlisted": 0,
  "hasPassed": false,
  "createdAt": "2018-10-11T13:06:16.432Z",
  "updatedAt": "2020-03-09T20:19:40.956Z",
  "summary": "Write a three sentence pitch for your event here.",
  "timeFormat": "24",
  "locale": "en",
  "primaryColor": "#00DB7D",
  "colors": {},
  "waitlist": true,
  "location": {
   "url": "http://www.google.com/maps?q=undefined"
  },
  "id": "16500",
  "type": "event",
  "images": null
 }
]
```


```shell

curl "https://api.confetti.events/events?filter[signupType]=rsvp"
  -H "Authorization: apikey your-key"
        
```
```json
{
 "data": [
  {
   "id": "16500",
   "type": "event",
   "attributes": {
    "name": "My first event",
    "startDate": "2020-09-19T16:00:00.000Z",
    "endDate": "2020-09-19T19:00:00.000Z",
    "timeZone": "Europe/Berlin",
    "slug": "green-summer-18717b",
    "status": "open",
    "featureLevel": "business",
    "signupType": "rsvp",
    "website": "http://jonny-action.confetti.test/my-first-event",
    "email": "jonny.stromberg@gmail.com",
    "rsvpLimit": 100,
    "rsvpLeft": 85,
    "waitlisted": 0,
    "hasPassed": false,
    "createdAt": "2018-10-11T13:06:16.432Z",
    "updatedAt": "2020-03-09T20:19:40.956Z",
    "summary": "Write a three sentence pitch for your event here.",
    "timeFormat": "24",
    "locale": "en",
    "primaryColor": "#00DB7D",
    "colors": {},
    "waitlist": true,
    "location": {
     "url": "http://www.google.com/maps?q=undefined"
    }
   },
   "relationships": {
    "images": {
     "data": null
    }
   }
  },
  {
   "id": "16500",
   "type": "event",
   "attributes": {
    "name": "My first event",
    "startDate": "2020-09-19T16:00:00.000Z",
    "endDate": "2020-09-19T19:00:00.000Z",
    "timeZone": "Europe/Berlin",
    "slug": "green-summer-18717b",
    "status": "open",
    "featureLevel": "business",
    "signupType": "rsvp",
    "website": "http://jonny-action.confetti.test/my-first-event",
    "email": "jonny.stromberg@gmail.com",
    "rsvpLimit": 100,
    "rsvpLeft": 85,
    "waitlisted": 0,
    "hasPassed": false,
    "createdAt": "2018-10-11T13:06:16.432Z",
    "updatedAt": "2020-03-09T20:19:40.956Z",
    "summary": "Write a three sentence pitch for your event here.",
    "timeFormat": "24",
    "locale": "en",
    "primaryColor": "#00DB7D",
    "colors": {},
    "waitlist": true,
    "location": {
     "url": "http://www.google.com/maps?q=undefined"
    }
   },
   "relationships": {
    "images": {
     "data": null
    }
   }
  }
 ]
}
```
This endoint retreives all events.

URL Parameter | Default | Values/Description
- | - | - | -filter[signupType] |  | `rsvp`, `tickets` 
filter[type] |  | `future`, `past` 
page[limit] | 1000 | Maximum number of results
page[offset] | 0 | Skip X results
include |  | `categories`, `pages`, `pages.blocks`, `pages.blocks.images`

## Get a specific event
```javascript

const Confetti = require('confetti')

const confetti = new Confetti({ apiKey: 'your-key' })
const event = await confetti.events.find(2)
        
```
```json
{
 "name": "My first event",
 "startDate": "2020-09-19T16:00:00.000Z",
 "endDate": "2020-09-19T19:00:00.000Z",
 "timeZone": "Europe/Berlin",
 "slug": "green-summer-18717b",
 "status": "open",
 "featureLevel": "business",
 "signupType": "rsvp",
 "website": "http://jonny-action.confetti.test/my-first-event",
 "email": "jonny.stromberg@gmail.com",
 "rsvpLimit": 100,
 "rsvpLeft": 85,
 "waitlisted": 0,
 "hasPassed": false,
 "createdAt": "2018-10-11T13:06:16.432Z",
 "updatedAt": "2020-03-09T20:19:40.956Z",
 "summary": "Write a three sentence pitch for your event here.",
 "timeFormat": "24",
 "locale": "en",
 "primaryColor": "#00DB7D",
 "colors": {},
 "waitlist": true,
 "location": {
  "url": "http://www.google.com/maps?q=undefined"
 },
 "id": "16500",
 "type": "event",
 "images": null,
 "meta": {
  "webhookType": "event.updated"
 }
}
```

```shell

curl "https://api.confetti.events/events/2"
  -H "Authorization: apikey your-key"
        
```
```json
{
 "data": {
  "id": "16500",
  "type": "event",
  "attributes": {
   "name": "My first event",
   "startDate": "2020-09-19T16:00:00.000Z",
   "endDate": "2020-09-19T19:00:00.000Z",
   "timeZone": "Europe/Berlin",
   "slug": "green-summer-18717b",
   "status": "open",
   "featureLevel": "business",
   "signupType": "rsvp",
   "website": "http://jonny-action.confetti.test/my-first-event",
   "email": "jonny.stromberg@gmail.com",
   "rsvpLimit": 100,
   "rsvpLeft": 85,
   "waitlisted": 0,
   "hasPassed": false,
   "createdAt": "2018-10-11T13:06:16.432Z",
   "updatedAt": "2020-03-09T20:19:40.956Z",
   "summary": "Write a three sentence pitch for your event here.",
   "timeFormat": "24",
   "locale": "en",
   "primaryColor": "#00DB7D",
   "colors": {},
   "waitlist": true,
   "location": {
    "url": "http://www.google.com/maps?q=undefined"
   }
  },
  "relationships": {
   "images": {
    "data": null
   }
  }
 },
 "meta": {
  "webhookType": "event.updated"
 }
}
```

This endpoint retrieves a specific event.


URL Parameter | Default | Values/Description
- | - | - | - 
include |  | `categories`, `pages`, `pages.blocks`, `pages.blocks.images`
