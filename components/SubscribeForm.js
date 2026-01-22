import React from 'react'
import {useMailchimp, Status} from 'hooks'

const SubscribeForm = () => {
  const [form, setForm] = React.useState({firstName: '', email: ''})
  const {subscribe, status, error, value} = useMailchimp("https://jellyfishbbhs.us6.list-manage.com/subscribe/post?u=10a9db05c9189892653f2aad0&amp;id=a7f291a03b&amp;f_id=00e357e5f0" )

  const handleInputChange = event => {
    const target = event.target
    const name = target.name
    const value = target.value

    setForm(form => ({
      ...form,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    // We are performing some simple validation here.
    // I highly recommend checking a fully-fledged solution
    // for forms like https://react-hook-form.com/
    if (form.firstName === '' || form.email === '') return

    subscribe({
      FNAME: form.firstName,
      EMAIL: form.email,
    })
  }

  if (status === Status.loading) {
    return <Loading />
  }

  if (status === Status.error) {
    return <Error error={error}/>
  }

  if (value.includes('Already subscribed')) {
    return <Success subscribed />
  }

  if (value) {
    return <Success />
  }

  return (
    <form>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        value={form.firstName}
        onChange={handleInputChange}
      />

      <label htmlFor="email">Email</label>
      <input id="email" value={form.email} onChange={handleInputChange} />

      <button onClick={handleSubmit}>Subscribe 📨</button>
    </form>
  )
}