import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

// import CryptoJS from "crypto-js";

import styles from "../styles/Form.module.css";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  function submit(e) {
    e.preventDefault();
    //DO STUFF
    // const data = {};
    var obj = {};

    // var key = CryptoJS.enc.Hex.parse("000102030405060708090a0b0c0d0e0f");
    // var iv = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");

    // data.last_name = CryptoJS.AES.encrypt(lastName, key, { iv: iv }).toString();
    // data.first_name = CryptoJS.AES.encrypt(firstName, key, {
    //   iv: iv
    // }).toString();
    // data.email = CryptoJS.AES.encrypt(email, key, { iv: iv }).toString();

    // obj.data = data;

    obj = {};
    obj.first_name = firstName;
    obj.last_name = lastName;
    obj.email = email;
    obj.message = message;

    if (
      firstName.length > 2 &&
      lastName.length > 2 &&
      email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    ) {
      fetch("https://formspree.io/f/xdopdonp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      });

      //CLEAR FORM
      setEmail("");
      setFirstName("");
      setLastName("");
      setMessage("");
      setError("");
    } else {
      setError("Please fill out the form correctly");
      console.log("form error");
    }
  }

  return (
    <div>
      <p className={styles.error}>
        <strong>{error}</strong>
      </p>
      <div className={styles.Contact}>
        <form className={styles.Contact}>
          <div className={styles.form_row1}>
            <TextField
              variant="outlined"
              label="First Name"
              className="Input1"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              type="text"
              name="firstName"
              required
            />
            <TextField
              className="Input1"
              variant="outlined"
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              type="text"
              name="lastName"
              required
            />
          </div>
          <div className={styles.form_row2}>
            <TextField
              className="Input"
              variant="outlined"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              type="email"
              name="email"
              required
            />
            <TextField
              className="Input3"
              variant="outlined"
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              type="textbox"
              multiline
              rowsMax={4}
              name="message"
              required
            />
            <Button
              variant="contained"
              className={styles.Submit}
              onClick={(e) => {
                submit(e);
              }}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Form;
