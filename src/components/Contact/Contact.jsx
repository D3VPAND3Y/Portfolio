import { useState } from "react";
import "./Contact.scss";
import { useEffect } from "react";
import { gsap } from "gsap";


const Contact = () => {

  // animation for contact
  useEffect(() => {
    gsap.from(".services__inner", {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 1.2,
      ease: "easeInOut",
    });
  }, []);

    const initialForm ={
        name:"",
        email:"",
        message:""

    }

    const [formState, setFormState] = useState(initialForm);
    const [buttonMessage, setButtonMessage] = useState("Send Message.");
    const [loading, setLoading] = useState(false);

    const { name, email, message } = formState;

    const onChange = (e) => {
        const { name, value } = e.target;

        setFormState({ ...formState, [name]: value });
      };

        const onSubmit = async (e) => {
            e.preventDefault();
            setLoading(true);
            setButtonMessage("Sending...");
            try {
                const res = await fetch(
                    "https://formspree.io/f/mayzgqkb",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(formState),
                    }
                );
                const data = await res.json();
                console.log(data);
                setLoading(false);
                setButtonMessage("Message Sent!");
                setFormState(initialForm);
                setTimeout(() => {
                    setButtonMessage("Send Message.");
                }, 2000);

            } catch (err) {
                console.log(err);
                setLoading(false);
                setButtonMessage("Error Sending!");
            }
        };




  return (
<div className="services__inner">
          <div className="services__top">
            <div className="title">Get In Touch!</div>
            <div className="sub">
            Got a question, proposal, or an exciting project in mind?<br />{" "}
            Don't hesitate to drop me a line, and let's explore the endless possibilities that await us.
            </div>
            <form onSubmit={onSubmit}>
              <div className="input-row">
                <div className="side">
                  <label htmlFor="name">Your Name</label>
                  <input
                    placeholder="What's Your Name?"
                    name="name"
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={onChange}
                  />
                </div>

                <div className="side">
                  <label htmlFor="email">Your Email</label>
                  <input
                    placeholder="What's Your Email?"
                    name="email"
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="textarea">
                <label htmlFor="message">Your Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write Your Message Here. "
                  required
                  value={message}
                  onChange={onChange}
                ></textarea>
              </div>
              <button className="btn" type="submit">
                {buttonMessage}
              </button>
            </form>
          </div>
          </div>
  )
}

export default Contact
