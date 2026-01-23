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
        
        <div className="container" style = {{backgroundColor: "white"}}>
          <div className="page-title-content" >
            <h2 style = {{color: "black"}}>Subscribe to our newsletter!</h2>
            <SimpleForm onSubmitted={formData => subscribe(formData)} />
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
          </div>
        </div>
      
    )}
  />
    )

}

export default CustomForm;
//hoi