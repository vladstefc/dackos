import { useState } from "react";

import Policies from "../Policies/Policies";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import styles from "./PrivacyPolicy.module.css";

const gdprText = (
  <div>
    <h3>Introduction</h3>
    <p>
      Dackos Construction LTD is committed to protecting the privacy and
      personal data of our website visitors and users. This GDPR Policy outlines
      our practices for collecting, processing, storing, and protecting personal
      data in accordance with the General Data Protection Regulation (GDPR).
    </p>
    <h3>Data Collection and Use</h3>
    <uL>
      <li>
        <p>
          Lawful Basis for Processing: We collect and process personal data
          based on one or more lawful bases defined in the GDPR, such as
          consent, contract performance, legal obligation, vital interests,
          public task, or legitimate interests.
        </p>
      </li>

      <li>
        <p>
          Types of Data Collected: We may collect and process various types of
          personal data, including but not limited to names, email addresses,
          contact information, IP addresses, and any other information
          voluntarily provided by users through our website.
        </p>
      </li>
      <li>
        <p>
          Purpose of Data Collection: We collect and process personal data for
          specific purposes, including but not limited to providing requested
          services, improving our website, communicating with users, responding
          to inquiries, complying with legal obligations, and sending marketing
          communications where consent has been obtained.
        </p>
      </li>
      <li>
        <p>
          Data Retention: We retain personal data for as long as necessary to
          fulfill the purposes outlined in this GDPR Policy unless a longer
          retention period is required or permitted by law. We regularly review
          the data we hold and delete or anonymize data that is no longer
          necessary.
        </p>
      </li>
      <li>
        <p>
          Data Sharing: We may share personal data with trusted third-party
          service providers or business partners who assist us in delivering our
          services or as required by law. We ensure that such third parties
          provide sufficient guarantees to protect the personal data in
          compliance with the GDPR.
        </p>
      </li>
    </uL>
    <h3>User Rights</h3>
    <ul>
      <li>
        <p>
          Right to Access: Users have the right to request access to their
          personal data and receive information about how it is processed.
        </p>
      </li>
      <li>
        <p>
          Right to Rectification: Users have the right to request the correction
          or update of inaccurate or incomplete personal data.
        </p>
      </li>
      <li>
        <p>
          Right to Erasure: Users have the right to request the deletion of
          their personal data under certain circumstances, such as when the data
          is no longer necessary for the purposes for which it was collected.
        </p>
      </li>
      <li>
        <p>
          Right to Restrict Processing: Users have the right to request the
          restriction of processing their personal data under certain
          circumstances.
        </p>
      </li>
      <li>
        <p>
          Right to Data Portability: Users have the right to receive a copy of
          their personal data in a structured, commonly used, and
          machine-readable format and to transmit it to another controller.
        </p>
      </li>
      <li>
        <p>
          Right to Object: Users have the right to object to the processing of
          their personal data based on legitimate interests or for direct
          marketing purposes.
        </p>
      </li>
    </ul>
    <h3>Security Measures</h3>
    <p>
      We implement appropriate technical and organizational measures to ensure
      the security, integrity, and confidentiality of personal data, including
      protection against unauthorized access, alteration, disclosure, or
      destruction.
    </p>
    <h3>International Data Transfers</h3>
    <p>
      If personal data is transferred to countries outside the European Economic
      Area (EEA), we ensure that adequate safeguards are in place to protect the
      data, such as standard contractual clauses, binding corporate rules, or
      certification mechanisms.
    </p>
    <h3>Cookies and Tracking Technologies</h3>
    <p>
      We use cookies and similar tracking technologies on our website. For
      detailed information about our use of cookies, including purposes, types,
      and how to manage them, please refer to our Cookies Policy.
    </p>
    <h3>Changes to this GDPR Policy</h3>
    <p>
      We may update this GDPR Policy as required to reflect changes in our data
      processing practices or legal obligations. Any changes will be posted on
      our website, and we encourage users to review this policy periodically.
    </p>
    <h3>Contact Information</h3>
    <p>
      If you have any questions, concerns, or requests regarding this GDPR
      Policy or our dataIf you have any questions, concerns, or requests
      regarding this GDPR Policy or our data processing practices, please
      contact us using the information provided below:
    </p>
    <p>[Your Company Name] [Address] [City, State, Zip Code] [Email] [Phone]</p>
  </div>
);

const GDPR = (props) => {
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
          GDPR Policy
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"GDPR Policy"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {gdprText}
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

export default GDPR;
