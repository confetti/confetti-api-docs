# Webhooks
## Get all webhooks

  ```javascript
        
const Confetti = require('confetti')

const confetti = new Confetti({ apiKey: 'your-key' })
const webhooks = await confetti.webhooks.findAll()
        
```
```javascript
[
 {
  "type": "ticket.attending",
  "url": "http://foo.com/bar",
  "provider": "zapier",
  "status": "active",
  "createdAt": "2020-02-29T15:12:12.435Z",
  "updatedAt": "2020-02-29T15:12:12.435Z",
  "id": "1"
 },
 {
  "type": "ticket.attending",
  "url": "http://foo.com/bar",
  "provider": "zapier",
  "status": "active",
  "createdAt": "2020-02-29T15:12:12.435Z",
  "updatedAt": "2020-02-29T15:12:12.435Z",
  "id": "1"
 }
]
```


```shell

curl "https://api.confetti.events/webhooks"
  -H "Authorization: apikey your-key"
        
```
```shell
{
 "data": [
  {
   "id": "1",
   "type": "webhook",
   "attributes": {
    "type": "ticket.attending",
    "url": "http://foo.com/bar",
    "provider": "zapier",
    "status": "active",
    "createdAt": "2020-02-29T15:12:12.435Z",
    "updatedAt": "2020-02-29T15:12:12.435Z"
   }
  },
  {
   "id": "1",
   "type": "webhook",
   "attributes": {
    "type": "ticket.attending",
    "url": "http://foo.com/bar",
    "provider": "zapier",
    "status": "active",
    "createdAt": "2020-02-29T15:12:12.435Z",
    "updatedAt": "2020-02-29T15:12:12.435Z"
   }
  }
 ]
}
```
This endoint retreives all webhooks.
### HTTP Request
`GET https://api.confetti.events/webhooks`

Page | Default | Description
- | - | -
limit | 1000 | Maximum number of results
offset | 0 | Skip X results


## Get a specific webhook
```javascript

const Confetti = require('confetti')

const confetti = new Confetti({ apiKey: 'your-key' })
const webhook = await confetti.webhooks.find(2)
        
```
```javascript
{
 "type": "ticket.attending",
 "url": "http://foo.com/bar",
 "provider": "zapier",
 "status": "active",
 "createdAt": "2020-02-29T15:12:12.435Z",
 "updatedAt": "2020-02-29T15:12:12.435Z",
 "id": "1"
}
```

```shell

curl "https://api.confetti.events/webhooks/2"
  -H "Authorization: apikey your-key"
        
```
```shell
{
 "data": {
  "id": "1",
  "type": "webhook",
  "attributes": {
   "type": "ticket.attending",
   "url": "http://foo.com/bar",
   "provider": "zapier",
   "status": "active",
   "createdAt": "2020-02-29T15:12:12.435Z",
   "updatedAt": "2020-02-29T15:12:12.435Z"
  }
 }
}
```

This endpoint retrieves a specific webhook.

### HTTP Request
`GET https://api.confetti.events/webhooks/<ID>`

### URL Parameters
Parameter | Description
--------- | -----------
ID | The ID of the record to retrieve
  
