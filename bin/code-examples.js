module.exports = {
  events: {
    findAll: {
      javascript: () => {
        return `        
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
        `
      },
      shell: () => {
        return `
curl "https://api.confetti.events/events?filter[signupType]=rsvp"
  -H "Authorization: apikey your-key"
        `
      },
    },
    find: {
      javascript: () => {
        return `
const Confetti = require('confetti')

const confetti = new Confetti({ apiKey: 'your-key' })
const event = await confetti.events.find(2)
        `
      },
      shell: () => {
        return `
curl "https://api.confetti.events/events/2"
  -H "Authorization: apikey your-key"
        `
      },
    },
  },

  payments: {
    findAll: {
      javascript: () => {
        return `        
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
        `
      },
      shell: () => {
        return `
curl "https://api.confetti.events/payments?filter[eventId]=16969"
  -H "Authorization: apikey your-key"
        `
      },
    },
    find: {
      javascript: () => {
        return `
const Confetti = require('confetti')

const confetti = new Confetti({ apiKey: 'your-key' })
const payment = await confetti.payments.find(2)
        `
      },
      shell: () => {
        return `
curl "https://api.confetti.events/payments/2"
  -H "Authorization: apikey your-key"
        `
      },
    },
  },

  tickets: {
    findAll: {
      javascript: () => {
        return `        
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
        `
      },
      shell: () => {
        return `
curl "https://api.confetti.events/tickets?filter[eventId]=16969"
  -H "Authorization: apikey your-key"
        `
      },
    },
    find: {
      javascript: () => {
        return `
const Confetti = require('confetti')

const confetti = new Confetti({ apiKey: 'your-key' })
const ticket = await confetti.tickets.find(2)
        `
      },
      shell: () => {
        return `
curl "https://api.confetti.events/tickets/2"
  -H "Authorization: apikey your-key"
        `
      },
    },
  },

  webhooks: {
    findAll: {
      javascript: () => {
        return `        
const Confetti = require('confetti')

const confetti = new Confetti({ apiKey: 'your-key' })
const webhooks = await confetti.webhooks.findAll()
        `
      },
      shell: () => {
        return `
curl "https://api.confetti.events/webhooks"
  -H "Authorization: apikey your-key"
        `
      },
    },
    find: {
      javascript: () => {
        return `
const Confetti = require('confetti')

const confetti = new Confetti({ apiKey: 'your-key' })
const webhook = await confetti.webhooks.find(2)
        `
      },
      shell: () => {
        return `
curl "https://api.confetti.events/webhooks/2"
  -H "Authorization: apikey your-key"
        `
      },
    },
  },

  workspaces: {
    find: {
      javascript: () => {},
      shell: () => {},
    },
  },
}
