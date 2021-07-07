import React, { useRef, useState } from "react";
import { Form, Card, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../components/AuthContext";
import { Link, useHistory } from "react-router-dom";

import logo from "../assets/Untitled-1.png";

import "../css/Login.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch (e) {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center grid-right"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <div>
          <Card>
            <Card.Body>
              <div id="logo-login">
                <img src={logo} alt="logo" style={{ Width: "200px" }}/>
              </div>
              <h2 className="text-center mb-4">Log in</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                  Login
                </Button>
              </Form>
              <div className="w-100 text-center mt-2">
                <Link to="/forgot-password">Forgot Password</Link>
              </div>
              <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}
