import { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';

//password generator component
//this component will generate a random password based on the user's input
//the user will be able to select the length of the password and the type of characters to include
//types of characters include: lowercase, uppercase, numbers, and special characters
//the user will also be able to see the password generated via a spinner loading
//the user will also have the option to copy the password to the clipboard
export const PassGen = () => {
    const [passwordLength, setPasswordLength] = useState(50); // Default password length
    const [isLoading, setIsLoading] = useState(false); // State for loading spinner

    const handleGeneratePassword = () => {
        setIsLoading(true);

        // Generate the password here...

        setIsLoading(false);
    };

    return (
        <Container className="passgen" id='#passgen'>
            <Row>
                <Col>
                    <h1>Password Generator</h1>
                    <Form>
                        <Form.Group>
                            <Form.Label>Password Length: {passwordLength}</Form.Label>
                            <Form.Control type="range" min="1" max="100" value={passwordLength} onChange={e => setPasswordLength(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="switches">
                            <Form.Check type="switch" id="lowercase-switch" label="Lowercase" />
                            <Form.Check type="switch" id="uppercase-switch" label="Uppercase" />
                            <Form.Check type="switch" id="numbers-switch" label="Numbers" />
                            <Form.Check type="switch" id="special-chars-switch" label="Special Characters" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleGeneratePassword} disabled={isLoading}>
                            {isLoading ? <Spinner animation="border" size="sm" /> : 'Generate Password'}
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" type="submit">
                        Copy Password
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}