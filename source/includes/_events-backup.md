# Events



## Get all events


```shell
curl "https://api.confetti.events/events?filter[signupType]=rsvp&page[limit]=1&page[offset]=10"
  -H "Authorization: apikey your-key"
```
```shell
{
  data: [
    {
      id: '16500',
      type: 'event',
      attributes: {
        name: 'My first event',
        startDate: '2020-09-19T16:00:00.000Z',
        endDate: '2020-09-19T19:00:00.000Z',
        timeZone: 'Europe/Berlin',
        slug: 'green-summer-18717b',
        status: 'open',
        featureLevel: 'business',
        signupType: 'rsvp',
        website: 'http://jonny-action.confetti.test/my-first-event',
        email: 'jonny.stromberg@gmail.com',
        rsvpLimit: 100,
        rsvpLeft: 85,
        waitlisted: 0,
        hasPassed: false,
        createdAt: '2018-10-11T13:06:16.432Z',
        updatedAt: '2020-03-09T20:19:40.956Z',
        summary: 'Write a three sentence pitch for your event here.',
        timeFormat: '24',
        locale: 'en',
        primaryColor: '#00DB7D',
        colors: {},
        waitlist: true,
        location: {
          url: 'http://www.google.com/maps?q=undefined',
        },
      },
      relationships: {
        images: {
          data: null,
        },
      },
    },
    meta: {
      webhookType: 'event.updated',
    }
  ],
}
```

```javascript
const Confetti = require('confetti')

const confetti = new Confetti({ apiKey: 'your-key' })
const events = await confetti.events.findAll({
  filter: {
    signupType: 'rsvp'
  },
  page: {
    limit: 1,
    offset: 10
  }
})
```

```javascript
[
  {
    name: 'My first event',
    startDate: '2020-09-19T16:00:00.000Z',
    endDate: '2020-09-19T19:00:00.000Z',
    timeZone: 'Europe/Berlin',
    slug: 'green-summer-18717b',
    status: 'open',
    featureLevel: 'business',
    signupType: 'rsvp',
    website: 'http://jonny-action.confetti.test/my-first-event',
    email: 'jonny.stromberg@gmail.com',
    rsvpLimit: 100,
    rsvpLeft: 85,
    waitlisted: 0,
    hasPassed: false,
    createdAt: '2018-10-11T13:06:16.432Z',
    updatedAt: '2020-03-09T20:19:40.956Z',
    summary: 'Write a three sentence pitch for your event here.',
    timeFormat: '24',
    locale: 'en',
    primaryColor: '#00DB7D',
    colors: {},
    waitlist: true,
    location: { url: 'http://www.google.com/maps?q=undefined' },
    id: '16500',
    type: 'event',
    images: null,
    meta: { webhookType: 'event.updated' },
  }
]
```

This endpoint retrieves all events in your workspace.

### HTTP Request

`GET https://api.confetti.events/events`

### Query Parameters

Filter | Default | Description
--------- | ------- | -----------
signupType | - | `rsvp` or `tickets`
type | - | Do you only want to show events that have taken place or will take place? The option are: `future` or `past`

Page | Default | Description
--------- | ------- | -----------
limit | 1000 | Set if you don't want to find all events at the same time
offset | 0 | Skip the first events 




## Get a specific event

```shell
curl "https://api.confetti.events/events/2"
  -H "Authorization: apikey your-key"
```
```shell
{
  data: {
    id: '16500',
    type: 'event',
    attributes: {
      name: 'My first event',
      startDate: '2020-09-19T16:00:00.000Z',
      endDate: '2020-09-19T19:00:00.000Z',
      timeZone: 'Europe/Berlin',
      slug: 'green-summer-18717b',
      status: 'open',
      featureLevel: 'business',
      signupType: 'rsvp',
      website: 'http://jonny-action.confetti.test/my-first-event',
      email: 'jonny.stromberg@gmail.com',
      rsvpLimit: 100,
      rsvpLeft: 85,
      waitlisted: 0,
      hasPassed: false,
      createdAt: '2018-10-11T13:06:16.432Z',
      updatedAt: '2020-03-09T20:19:40.956Z',
      summary: 'Write a three sentence pitch for your event here.',
      timeFormat: '24',
      locale: 'en',
      primaryColor: '#00DB7D',
      colors: {},
      waitlist: true,
      location: {
        url: 'http://www.google.com/maps?q=undefined',
      },
    },
    relationships: {
      images: {
        data: null,
      },
    },
  },
  meta: {
    webhookType: 'event.updated',
  }
}
```

```javascript
const Confetti = require('confetti')

const confetti = new Confetti({ apiKey: 'your-key' })
const event = await confetti.events.find(2)
```
```javascript
{
  name: 'My first event',
  startDate: '2020-09-19T16:00:00.000Z',
  endDate: '2020-09-19T19:00:00.000Z',
  timeZone: 'Europe/Berlin',
  slug: 'green-summer-18717b',
  status: 'open',
  featureLevel: 'business',
  signupType: 'rsvp',
  website: 'http://jonny-action.confetti.test/my-first-event',
  email: 'jonny.stromberg@gmail.com',
  rsvpLimit: 100,
  rsvpLeft: 85,
  waitlisted: 0,
  hasPassed: false,
  createdAt: '2018-10-11T13:06:16.432Z',
  updatedAt: '2020-03-09T20:19:40.956Z',
  summary: 'Write a three sentence pitch for your event here.',
  timeFormat: '24',
  locale: 'en',
  primaryColor: '#00DB7D',
  colors: {},
  waitlist: true,
  location: { url: 'http://www.google.com/maps?q=undefined' },
  id: '16500',
  type: 'event',
  images: null,
  meta: { webhookType: 'event.updated' },
}
```

This endpoint retrieves a specific event.


### HTTP Request

`GET https://api.confetti.events/events/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the event to retrieve