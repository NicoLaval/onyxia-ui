import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Divider
} from "@material-ui/core";
import { getKeycloak } from "js/utils";
import "./login.scss";
import "js/components/onyxia-modal.scss";

class LogMe extends React.Component {
  handleClose = () => {};

  handleLogin = () => {
    const redirectUri =
      this.props.redirectUri || `${window.location.origin}/accueil`;
    getKeycloak().login({
      redirectUri
    });
  };

  render() {
    const { handleClose } = this.props;
    return (
      <Dialog
        fullScreen={false}
        open={this.props.open}
        onClose={handleClose}
        aria-labelledby="login-titre"
        classes={{
          root: "login-modal",
          paper: "container"
        }}
      >
        <DialogTitle id="login-titre" classes={{ root: "en-tete" }}>
          <div className="titre">Login</div>
          <div className="sous-titre">
            Une authentification est requise pour accéder à la ressource.
          </div>
        </DialogTitle>
        <DialogContent classes={{ root: "contenu" }}>
          <DialogContentText>
            <Button
              variant="contained"
              color="primary"
              className="bouton-login"
              onClick={this.handleLogin}
            >
              <img
                className="icone-keycloak"
                src="/images/keycloak.png"
                alt="keycloak-logo"
              />
              Authentifiez-vous avec votre compte Insee
            </Button>
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default LogMe;