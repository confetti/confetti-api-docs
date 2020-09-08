# Payments
## Get all payments

  ```javascript
        
const Confetti = require('confetti')

const confetti = new Confetti({ apiKey: 'your-key' })
const payments = await confetti.payments.findAll({
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
  "name": "Foo Bar",
  "email": "foo@bar.com",
  "company": "The Company",
  "amount": 13,
  "vat": 3,
  "vatPercentage": 30,
  "token": "2447b4acef764836169b53c4",
  "currency": "SEK",
  "status": "paid",
  "paidAt": "2020-03-09T20:05:10.000Z",
  "commission": "5.65",
  "commissionVat": "1.13",
  "customer": {
   "other": "Extra information"
  },
  "id": "288298",
  "type": "payment"
 },
 {
  "name": "Foo Bar",
  "email": "foo@bar.com",
  "company": "The Company",
  "amount": 13,
  "vat": 3,
  "vatPercentage": 30,
  "token": "2447b4acef764836169b53c4",
  "currency": "SEK",
  "status": "paid",
  "paidAt": "2020-03-09T20:05:10.000Z",
  "commission": "5.65",
  "commissionVat": "1.13",
  "customer": {
   "other": "Extra information"
  },
  "id": "288298",
  "type": "payment"
 }
]
```


```shell

curl "https://api.confetti.events/payments?filter[eventId]=16969"
  -H "Authorization: apikey your-key"
        
```
```shell
{
 "data": [
  {
   "id": "288298",
   "type": "payment",
   "attributes": {
    "name": "Foo Bar",
    "email": "foo@bar.com",
    "company": "The Company",
    "amount": 13,
    "vat": 3,
    "vatPercentage": 30,
    "token": "2447b4acef764836169b53c4",
    "currency": "SEK",
    "status": "paid",
    "paidAt": "2020-03-09T20:05:10.000Z",
    "commission": "5.65",
    "commissionVat": "1.13",
    "customer": {
     "other": "Extra information"
    }
   }
  },
  {
   "id": "288298",
   "type": "payment",
   "attributes": {
    "name": "Foo Bar",
    "email": "foo@bar.com",
    "company": "The Company",
    "amount": 13,
    "vat": 3,
    "vatPercentage": 30,
    "token": "2447b4acef764836169b53c4",
    "currency": "SEK",
    "status": "paid",
    "paidAt": "2020-03-09T20:05:10.000Z",
    "commission": "5.65",
    "commissionVat": "1.13",
    "customer": {
     "other": "Extra information"
    }
   }
  }
 ]
}
```
This endoint retreives all payments.
### HTTP Request
`GET https://api.confetti.events/payments`

### URL Parameters

Parameter | Default | Values
- | - | - | -
eventId* |  | number 
status | paid, refunded, pending-invoice, sent-invoice, paid-invoice, cancelled-invoice | paid, refunded, pending-invoice, sent-invoice, paid-invoice, cancelled-invoice 


Page | Default | Description
- | - | -
limit | 1000 | Maximum number of results
offset | 0 | Skip X results


## Get a specific payment
```javascript

const Confetti = require('confetti')

const confetti = new Confetti({ apiKey: 'your-key' })
const payment = await confetti.payments.find(2)
        
```
```javascript
{
 "name": "Foo Bar",
 "email": "foo@bar.com",
 "company": "The Company",
 "amount": 13,
 "vat": 3,
 "vatPercentage": 30,
 "token": "2447b4acef764836169b53c4",
 "currency": "SEK",
 "status": "paid",
 "paidAt": "2020-03-09T20:05:10.000Z",
 "commission": "5.65",
 "commissionVat": "1.13",
 "customer": {
  "other": "Extra information"
 },
 "id": "288298",
 "type": "payment",
 "meta": {
  "webhookType": "payment.paid"
 }
}
```

```shell

curl "https://api.confetti.events/payments/2"
  -H "Authorization: apikey your-key"
        
```
```shell
{
 "data": {
  "id": "288298",
  "type": "payment",
  "attributes": {
   "name": "Foo Bar",
   "email": "foo@bar.com",
   "company": "The Company",
   "amount": 13,
   "vat": 3,
   "vatPercentage": 30,
   "token": "2447b4acef764836169b53c4",
   "currency": "SEK",
   "status": "paid",
   "paidAt": "2020-03-09T20:05:10.000Z",
   "commission": "5.65",
   "commissionVat": "1.13",
   "customer": {
    "other": "Extra information"
   }
  }
 },
 "meta": {
  "webhookType": "payment.paid"
 }
}
```

This endpoint retrieves a specific payment.

### HTTP Request
`GET https://api.confetti.events/payments/<ID>`

### URL Parameters
Parameter | Description
--------- | -----------
ID | The ID of the record to retrieve
  
