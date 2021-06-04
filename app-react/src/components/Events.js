const eventbrite = require('eventbrite')

const sdk = eventbrite({token: `process.env.API_KEY`})

sdk.request('/post/').then(res => {
    // handle response data
});