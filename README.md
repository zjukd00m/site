# Personal site
It was written with astro.js and react through the use of astro islands which consists of partially hydrating the javascript content in a page with static content.

A react component can be rendered inside an astro component and it can optionally be loaded dynamically if it needs user interaction.

I _deployed_ it using cloudflare pages (a serverless solution), it can be easely done with an npm package and you have the advantage of not paying for the hosting unless you want to enhance the protection, analytics and more specific features offered by cloudflare.

I bought a domain at namecheap and to asign it to the deployed website I just had to add the cloudflare name server records and at the cloudflare site page I added CNAME records pointing to the existing and default https url.

What I liked about using cloudflare is to have basic DDoS protection and traffic filtering, also the analytics to view which countries has seen the page and how many times.

## Features
### Image avatar
The image avatar was generated using the AI dalle2 and I minted it as an nft in the polygon blockchain just for fun and to consume the http open sea rest api.
- [ ] Add an image modal to be displayed when the avatar is clicked. It will request data from the OpenSea API
