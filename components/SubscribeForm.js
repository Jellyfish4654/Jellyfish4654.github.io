import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://jellyfishbbhs.us6.list-manage.com/subscribe/post?u=10a9db05c9189892653f2aad0&amp;id=a7f291a03b&amp;f_id=00e357e5f0";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url}/>

// use the render prop and your custom form
const CustomForm = () => {
  return (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (

        <div className="subscribe-form"
             data-aos="fade-in"
             data-aos-duration="1200"
             data-aos-delay="250"
        >
            <h3>Subscribe to our newsletter!</h3>
            <SimpleForm onSubmitted={formData => subscribe(formData)} />
            {status === "sending" && <p style={{ color: "white" }}>Submitting...</p>}
            {status === "error" && <p style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
            {status === "success" && <p style={{ color: "white" }}>Subscribed!</p>}
        </div>
    )}
  />
  )
}

export default CustomForm;
//hoi