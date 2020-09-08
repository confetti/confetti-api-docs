# Tickets



## Get all ticket from an event


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
```javascript
[
  {
    persons: 1,
    hashid: 'g265xg',
    description: 'My cool batch',
    price: 10,
    currency: 'SEK',
    name: 'Foo Bar',
    email: 'foo@bar.com',
    token: 'd92614282978451b7942fffda421df47740c',
    status: 'attending',
    emailStatus: 'subscribed',
    checkinAt: null,
    waitlistAt: null,
    startDate: '2021-06-18T16:00:00.000Z',
    endDate: null,
    values: { 'field-one-field': 'Veg', 'field-what-do-you-think': ['Yes'] },
    comment: null,
    guests: 0,
    termsAcceptedAt: '2020-03-09T19:53:30.304Z',
    deletionRequestedAt: null,
    createdAt: '2020-03-09T19:51:32.274Z',
    updatedAt: '2020-03-09T19:53:30.354Z',
    ticketBatchId: 16090,
    paymentId: 288297,
    eventId: 16969,
    contactId: 112395,
    id: '3344691',
    type: 'ticket',
    meta: { webhookType: 'ticket.attending' },
  }
]
```


```shell
curl "https://api.confetti.events/tickets?filter[eventId]=16969"
  -H "Authorization: apikey your-key"
```
```shell
{
  data: [
    {
      id: '3344691',
      type: 'ticket',
      attributes: {
        persons: 1,
        hashid: 'g265xg',
        description: 'My cool batch',
        price: 10,
        currency: 'SEK',
        name: 'Foo Bar',
        email: 'foo@bar.com',
        token: 'd92614282978451b7942fffda421df47740c',
        status: 'attending',
        emailStatus: 'subscribed',
        checkinAt: null,
        waitlistAt: null,
        startDate: '2021-06-18T16:00:00.000Z',
        endDate: null,
        values: {
          'field-one-field': 'Veg',
          'field-what-do-you-think': ['Yes'],
        },
        comment: null,
        guests: 0,
        termsAcceptedAt: '2020-03-09T19:53:30.304Z',
        deletionRequestedAt: null,
        createdAt: '2020-03-09T19:51:32.274Z',
        updatedAt: '2020-03-09T19:53:30.354Z',
        ticketBatchId: 16090,
        paymentId: 288297,
        eventId: 16969,
        contactId: 112395,
      },
    }
  ]
}
```

This endpoint retrieves all tickets for an event.

### HTTP Request

`GET https://api.confetti.events/tickets?filter[eventId]=<ID>`

### Query Parameters

Filter | Default | Description
--------- | ------- | -----------
eventId | - | `rsvp` or `tickets`
search | - | Do you only want to show events that have taken place or will take place? The option are: `future` or `past`
description | - | -
checkedIn | | 
status | |


Page | Default | Description
--------- | ------- | -----------
limit | 1000 | Set if you don't want to find all events at the same time
offset | 0 | Skip the first events 




## Get a specific ticket

```javascript
const Confetti = require('confetti')

const confetti = new Confetti({ apiKey: 'your-key' })
const event = await confetti.tickets.find(2)
```
```javascript
{
  persons: 1,
  hashid: 'g265xg',
  description: 'My cool batch',
  price: 10,
  currency: 'SEK',
  name: 'Foo Bar',
  email: 'foo@bar.com',
  token: 'd92614282978451b7942fffda421df47740c',
  status: 'attending',
  emailStatus: 'subscribed',
  checkinAt: null,
  waitlistAt: null,
  startDate: '2021-06-18T16:00:00.000Z',
  endDate: null,
  values: { 'field-one-field': 'Veg', 'field-what-do-you-think': ['Yes'] },
  comment: null,
  guests: 0,
  termsAcceptedAt: '2020-03-09T19:53:30.304Z',
  deletionRequestedAt: null,
  createdAt: '2020-03-09T19:51:32.274Z',
  updatedAt: '2020-03-09T19:53:30.354Z',
  ticketBatchId: 16090,
  paymentId: 288297,
  eventId: 16969,
  contactId: 112395,
  id: '3344691',
  type: 'ticket'
}
```


```shell
curl "https://api.confetti.events/tickets/2"
  -H "Authorization: apikey your-key"
```
```shell
{
  data: {
    id: '3344691',
    type: 'ticket',
    attributes: {
      persons: 1,
      hashid: 'g265xg',
      description: 'My cool batch',
      price: 10,
      currency: 'SEK',
      name: 'Foo Bar',
      email: 'foo@bar.com',
      token: 'd92614282978451b7942fffda421df47740c',
      status: 'attending',
      emailStatus: 'subscribed',
      checkinAt: null,
      waitlistAt: null,
      startDate: '2021-06-18T16:00:00.000Z',
      endDate: null,
      values: {
        'field-one-field': 'Veg',
        'field-what-do-you-think': ['Yes'],
      },
      comment: null,
      guests: 0,
      termsAcceptedAt: '2020-03-09T19:53:30.304Z',
      deletionRequestedAt: null,
      createdAt: '2020-03-09T19:51:32.274Z',
      updatedAt: '2020-03-09T19:53:30.354Z',
      ticketBatchId: 16090,
      paymentId: 288297,
      eventId: 16969,
      contactId: 112395,
    },
  },
}
```


This endpoint retrieves a specific ticket.


### HTTP Request

`GET https://api.confetti.events/tickets/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the ticket to retrieve