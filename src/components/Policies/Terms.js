import { useState } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import styles from "./PrivacyPolicy.module.css";

const termsText = (
  <div>
    <h3>Acceptance of Terms</h3>
    <p>
      By accessing and using the <b>Dackos Construction LTD</b> Website, you
      agree to be bound by these Terms and Conditions and all applicable laws
      and regulations. If you do not agree to these terms, please refrain from
      using the Website.
    </p>
    <h3>Intellectual Property</h3>
    <p>
      All content, materials, and images displayed on the Website are the
      intellectual property of <b>Dackos Construction LTD</b> and are protected
      by applicable copyright, trademark, and other intellectual property laws.
      You may not reproduce, modify, distribute, or republish any content from
      the Website without prior written consent from{" "}
      <b>Dackos Construction LTD</b>.
    </p>
    <h3>Website Use</h3>

    <h4>Information Accuracy</h4>
    <p>
      The content on the Website is provided for general informational purposes
      only. While we strive to ensure the accuracy and completeness of the
      information, we make no warranties or representations regarding the
      accuracy, reliability, or suitability of the content. You acknowledge that
      any reliance on the information is at your own risk.
    </p>

    <h4>Use Limitations</h4>
    <p>
      You agree to use the Website for lawful purposes only and to comply with
      all applicable laws and regulations. You may not engage in any activity
      that could disrupt or interfere with the proper functioning of the Website
      or infringe upon the rights of others.
    </p>

    <h3>Limitation of Liability</h3>

    <h4>Disclaimer</h4>
    <p>
      The Website and its content are provided on an "as is" basis without any
      warranties or representations, express or implied.{" "}
      <b>Dackos Construction LTD</b> disclaims all warranties, including but not
      limited to the accuracy, reliability, or availability of the Website, its
      content, or any information or products obtained through the Website.
    </p>

    <h4>Limitation of Liability</h4>
    <p>
      To the fullest extent permitted by law, <b>Dackos Construction LTD</b>{" "}
      shall not be liable for any direct, indirect, incidental, consequential,
      or special damages arising out of or in connection with your use of the
      Website or reliance on its content, even if advised of the possibility of
      such damages.
    </p>

    <h3>Third-Party Links</h3>
    <p>
      The Website may contain links to third-party websites that are not owned
      or controlled by <b>Dackos Construction LTD</b>. We are not responsible
      for the content, privacy policies, or practices of any third-party
      websites. Your use of such websites is at your own risk, and we encourage
      you to review their terms and policies.
    </p>
    <h3>Indemnification</h3>
    <p>
      You agree to indemnify, defend, and hold harmless{" "}
      <b>Dackos Construction LTD</b> and its officers, directors, employees, and
      agents from and against any claims, liabilities, damages, losses, costs,
      or expenses arising out of or related to your use of the Website,
      violation of these Terms and Conditions, or infringement of any
      intellectual property or other rights.
    </p>
    <h3>Governing Law</h3>
    <p>
      These Terms and Conditions shall be governed by and construed in
      accordance with the laws of [Your Jurisdiction]. Any dispute arising out
      of or related to these terms shall be subject to the exclusive
      jurisdiction of the courts in [Your Jurisdiction].
    </p>
    <h3>Changes to the Terms and Conditions</h3>
    <p>
      <b>Dackos Construction LTD</b> reserves the right to update or modify
      these Terms and Conditions at any time without prior notice. The updated
      version will be posted on the Website, and your continued use of the
      Website after any modifications constitutes your acceptance of the updated
      terms.
    </p>
    <h3>Contact Information</h3>
    <p>
      If you have any questions or concerns regarding these Terms and
      Conditions, please contact us using the information provided on the{" "}
      <b>Contact</b> section on the website.
    </p>
  </div>
);

const Terms = (props) => {
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
          Terms & Conditions
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Terms and Conditions"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {termsText}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <button onClick={handleClose}>Close</button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Terms;
