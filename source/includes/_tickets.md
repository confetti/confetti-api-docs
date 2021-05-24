# Tickets
## Get all tickets


> Example

```javascript
        
const Confetti = require('confetti')

const confetti = new Confetti({ apiKey: 'your-key' })
const tickets = await confetti.tickets.findAll({
  filter: {
    eventId: 16969
  },
  page: {
    limit: 10,
    offset: 3
  }
})
        
```

```shell

curl "https://api.confetti.events/tickets?filter[eventId]=16969"
  -H "Authorization: apikey your-key"
        
```

> JSON Response

```javascript
[
 {
  "persons": 1,
  "hashid": "g265xg",
  "description": "My cool batch",
  "price": 10,
  "currency": "SEK",
  "name": "Foo Bar",
  "email": "foo@bar.com",
  "phone": "+46701111111",
  "token": "d92614282978451b7942fffda421df47740c",
  "status": "attending",
  "emailStatus": "subscribed",
  "checkinAt": null,
  "waitlistAt": null,
  "startDate": "2021-06-18T16:00:00.000Z",
  "endDate": null,
  "values": {
   "field-one-field": "Veg",
   "field-what-do-you-think": [
    "Yes"
   ]
  },
  "comment": null,
  "guests": 0,
  "termsAcceptedAt": "2020-03-09T19:53:30.304Z",
  "deletionRequestedAt": null,
  "createdAt": "2020-03-09T19:51:32.274Z",
  "updatedAt": "2020-03-09T19:53:30.354Z",
  "ticketBatchId": 16090,
  "paymentId": 288297,
  "eventId": 16969,
  "contactId": 112395,
  "id": "3344691",
  "type": "ticket"
 },
 {
  "persons": 1,
  "hashid": "g265xg",
  "description": "My cool batch",
  "price": 10,
  "currency": "SEK",
  "name": "Foo Bar",
  "email": "foo@bar.com",
  "phone": "+46701111111",
  "token": "d92614282978451b7942fffda421df47740c",
  "status": "attending",
  "emailStatus": "subscribed",
  "checkinAt": null,
  "waitlistAt": null,
  "startDate": "2021-06-18T16:00:00.000Z",
  "endDate": null,
  "values": {
   "field-one-field": "Veg",
   "field-what-do-you-think": [
    "Yes"
   ]
  },
  "comment": null,
  "guests": 0,
  "termsAcceptedAt": "2020-03-09T19:53:30.304Z",
  "deletionRequestedAt": null,
  "createdAt": "2020-03-09T19:51:32.274Z",
  "updatedAt": "2020-03-09T19:53:30.354Z",
  "ticketBatchId": 16090,
  "paymentId": 288297,
  "eventId": 16969,
  "contactId": 112395,
  "id": "3344691",
  "type": "ticket"
 }
]
```

```shell
{
 "data": [
  {
   "id": "3344691",
   "type": "ticket",
   "attributes": {
    "persons": 1,
    "hashid": "g265xg",
    "description": "My cool batch",
    "price": 10,
    "currency": "SEK",
    "name": "Foo Bar",
    "email": "foo@bar.com",
    "phone": "+46701111111",
    "token": "d92614282978451b7942fffda421df47740c",
    "status": "attending",
    "emailStatus": "subscribed",
    "checkinAt": null,
    "waitlistAt": null,
    "startDate": "2021-06-18T16:00:00.000Z",
    "endDate": null,
    "values": {
     "field-one-field": "Veg",
     "field-what-do-you-think": [
      "Yes"
     ]
    },
    "comment": null,
    "guests": 0,
    "termsAcceptedAt": "2020-03-09T19:53:30.304Z",
    "deletionRequestedAt": null,
    "createdAt": "2020-03-09T19:51:32.274Z",
    "updatedAt": "2020-03-09T19:53:30.354Z",
    "ticketBatchId": 16090,
    "paymentId": 288297,
    "eventId": 16969,
    "contactId": 112395
   }
  },
  {
   "id": "3344691",
   "type": "ticket",
   "attributes": {
    "persons": 1,
    "hashid": "g265xg",
    "description": "My cool batch",
    "price": 10,
    "currency": "SEK",
    "name": "Foo Bar",
    "email": "foo@bar.com",
    "phone": "+46701111111",
    "token": "d92614282978451b7942fffda421df47740c",
    "status": "attending",
    "emailStatus": "subscribed",
    "checkinAt": null,
    "waitlistAt": null,
    "startDate": "2021-06-18T16:00:00.000Z",
    "endDate": null,
    "values": {
     "field-one-field": "Veg",
     "field-what-do-you-think": [
      "Yes"
     ]
    },
    "comment": null,
    "guests": 0,
    "termsAcceptedAt": "2020-03-09T19:53:30.304Z",
    "deletionRequestedAt": null,
    "createdAt": "2020-03-09T19:51:32.274Z",
    "updatedAt": "2020-03-09T19:53:30.354Z",
    "ticketBatchId": 16090,
    "paymentId": 288297,
    "eventId": 16969,
    "contactId": 112395
   }
  }
 ]
}
```
This endoint retreives all tickets.

URL Parameter | Default | Values/Description
- | - | - | -filter[eventId]* |  | number 
filter[search] |  | string 
filter[description] |  | string 
filter[checkedIn] |  | boolean 
filter[status] | attending, waitlist, declined, invited, consumed, deletion-requested | `attending`, `waitlist`, `declined`, `invited`, `consumed`, `deletion-requested` 
page[limit] | 1000 | Maximum number of results
page[offset] | 0 | Skip X results


## Get a specific ticket

> Example

```javascript

const Confetti = require('confetti')

const confetti = new Confetti({ apiKey: 'your-key' })
const ticket = await confetti.tickets.find(2)
        
```

```shell

curl "https://api.confetti.events/tickets/2"
  -H "Authorization: apikey your-key"
        
```

> JSON Response

```javascript
{
 "persons": 1,
 "hashid": "g265xg",
 "description": "My cool batch",
 "price": 10,
 "currency": "SEK",
 "name": "Foo Bar",
 "email": "foo@bar.com",
 "phone": "+46701111111",
 "token": "d92614282978451b7942fffda421df47740c",
 "status": "attending",
 "emailStatus": "subscribed",
 "checkinAt": null,
 "waitlistAt": null,
 "startDate": "2021-06-18T16:00:00.000Z",
 "endDate": null,
 "values": {
  "field-one-field": "Veg",
  "field-what-do-you-think": [
   "Yes"
  ]
 },
 "comment": null,
 "guests": 0,
 "termsAcceptedAt": "2020-03-09T19:53:30.304Z",
 "deletionRequestedAt": null,
 "createdAt": "2020-03-09T19:51:32.274Z",
 "updatedAt": "2020-03-09T19:53:30.354Z",
 "ticketBatchId": 16090,
 "paymentId": 288297,
 "eventId": 16969,
 "contactId": 112395,
 "id": "3344691",
 "type": "ticket",
 "meta": {
  "webhookType": "ticket.attending"
 }
}
```

```shell
{
 "data": {
  "id": "3344691",
  "type": "ticket",
  "attributes": {
   "persons": 1,
   "hashid": "g265xg",
   "description": "My cool batch",
   "price": 10,
   "currency": "SEK",
   "name": "Foo Bar",
   "email": "foo@bar.com",
   "phone": "+46701111111",
   "token": "d92614282978451b7942fffda421df47740c",
   "status": "attending",
   "emailStatus": "subscribed",
   "checkinAt": null,
   "waitlistAt": null,
   "startDate": "2021-06-18T16:00:00.000Z",
   "endDate": null,
   "values": {
    "field-one-field": "Veg",
    "field-what-do-you-think": [
     "Yes"
    ]
   },
   "comment": null,
   "guests": 0,
   "termsAcceptedAt": "2020-03-09T19:53:30.304Z",
   "deletionRequestedAt": null,
   "createdAt": "2020-03-09T19:51:32.274Z",
   "updatedAt": "2020-03-09T19:53:30.354Z",
   "ticketBatchId": 16090,
   "paymentId": 288297,
   "eventId": 16969,
   "contactId": 112395
  }
 },
 "meta": {
  "webhookType": "ticket.attending"
 }
}
```

This endpoint retrieves a specific ticket.


