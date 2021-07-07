import React, { useState } from "react";
import { Card, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../components/AuthContext";
import { useHistory } from "react-router-dom";
import app from "../components/Firebase";
import Modal from "../components/layout/Modal";
import Backdrop from "../components/layout/Backdrop";

import logo from "../assets/Untitled-1.png";

import "../css/Profile.css";

export default function ProfilePage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { deleteUser } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();
  var myUserEmail = app.auth().currentUser.email;

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  async function handleSubmit(e) {

    try {
      setError("");
      await deleteUser();
      history.push("/");
    } catch (e) {
      setError("Failed to delete account");
    }
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <div>
          <Card>
            <Card.Body>
              <div id="logo-login">
                <img src={logo} alt="logo" style={{ Width: "200px" }} />
              </div>
              <h2 className="text-center mb-4">My Profile</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <label>Email:</label>
              <br></br>
              <label>{myUserEmail}</label>
              <Button
                onClick={deleteHandler}
                className="w-100 btn-primary-profile"
              >
                Delete Account
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      {modalIsOpen && (
          <Modal onCancel={closeModalHandler} onConfirm={handleSubmit} />
        )}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </Container>
  );
}
