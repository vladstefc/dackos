import { useState } from "react";

import Policies from "../Policies/Policies";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import styles from "./PrivacyPolicy.module.css";

const privacyText = (
  <div>
    <h2>Privacy Policy</h2>
    <p>
      This Privacy Policy explains how <b>Dackos Construction LTD</b> collects,
      uses, stores, and protects the personal information we collect through our
      contact form. By submitting your information through our contact form, you
      consent to the practices described in this policy.
    </p>
    <h2>Information Collection</h2>
    <p>
      We collect personal information, including your email address, when you
      submit our contact form. The information you provide is voluntary, and you
      have the choice to refrain from submitting any information that makes you
      uncomfortable.
    </p>
    <h2>Use of Information</h2>
    <p>
      We use the information collected through our contact form to respond to
      your inquiries, provide the requested information, and offer customer
      support. If you have provided consent, we may also use your email address
      to send newsletters or marketing communications related to our products
      and services. You have the right to opt out of receiving such
      communications at any time by following the unsubscribe instructions
      included in each communication or by contacting us directly.
    </p>
    <h3>Data Sharing</h3>
    <p>
      We do not sell, trade, or transfer your personal information to third
      parties without your explicit consent, except as necessary to provide the
      requested services or as required by law. We may share your email address
      with trusted third-party service providers who assist us in operating our
      website or conducting our business, subject to their agreement to keep the
      information confidential and use it solely for the purposes specified by
      us.
    </p>
    <h3>Data Retention</h3>
    <p>
      We retain the personal information collected through our contact form for
      as long as necessary to fulfill the purposes outlined in this Privacy
      Policy, unless a longer retention period is required or permitted by law.
    </p>
    <h3>Security</h3>
    <p>
      We implement reasonable security measures to protect the personal
      information we collect from unauthorized access, use, or disclosure.
      However, please note that no method of transmission over the internet or
      electronic storage is 100% secure, and we cannot guarantee absolute
      security.
    </p>
    <h3>User Rights</h3>
    <p>
      You have the right to access, update, or delete the personal information
      we hold about you. If you wish to exercise any of these rights or have any
      questions regarding your personal information, please contact us using the
      information provided at the end of this Privacy Policy.
    </p>
    <h3>Changes to this Privacy Policy</h3>
    <p>
      We may update this Privacy Policy from time to time to reflect changes in
      our practices or legal obligations. We encourage you to review this policy
      periodically for any updates.
    </p>
    <h3>Contact Us</h3>
    <p>
      If you have any questions or concerns about this Privacy Policy or our
      data practices, please contact us at: [Your Company Name] [Address] [City,
      State, Zip Code] [Email] [Phone]
    </p>
  </div>
);

const PrivacyPolicy = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.main}>
      <div>
        <Button
          variant="text"
          onClick={handleClickOpen}
          sx={{ color: "#8c9597" }}
        >
          Privacy Policy
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {privacyText}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} sx={{ color: "#8c9597" }}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
