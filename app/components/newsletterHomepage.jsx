import React from 'react'

export default function newsletterHomepage() {
  return (
    <section class="newsletter-section">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest updates on our furniture collections and exclusive offers.</p>
        <form action="YOUR_NEWSLETTER_SERVICE_ENDPOINT" method="POST">
            <input type="email" name="email" placeholder="Your Email Address" required />
            <button type="submit">Subscribe</button>
        </form>
    </section>
  )
}
