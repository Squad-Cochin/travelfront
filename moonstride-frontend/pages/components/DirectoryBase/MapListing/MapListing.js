import React from 'react'

export default function MapListing() {
const timeline ='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424143.2714089991!2d150.6517757041629!3d-33.847927007344154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sin!4v1665056385520!5m2!1sen!2sin" width="100%" height="450" title= "" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  return (
    <div className="mt-4 w-100" dangerouslySetInnerHTML={{ __html: timeline }}></div>
  )
}
