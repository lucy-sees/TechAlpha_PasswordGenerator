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
    const [hasLowercase, setHasLowercase] = useState(false);
    const [hasUppercase, setHasUppercase] = useState(false);
    const [hasNumbers, setHasNumbers] = useState(false);
    const [hasSymbols, setHasSymbols] = useState(false); 

    const [password, setPassword] = useState(''); // State for the generated password

    const handleGeneratePassword = () => {
        setIsLoading(true);

        let characters = '';
        if (hasLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
        if (hasUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (hasNumbers) characters += '0123456789';
        if (hasSymbols) characters += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

        let password = '';
        for (let i = 0; i < passwordLength; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        setPassword(password); // Store the generated password

        setIsLoading(false);
    };

    const handleCopyPassword = () => {
        navigator.clipboard.writeText(password); // Copy the password to the clipboard
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
                            <Form.Check type="switch" id="lowercase-switch" label="Lowercase" onChange={e => setHasLowercase(e.target.checked)} />
                            <Form.Check type="switch" id="uppercase-switch" label="Uppercase" onChange={e => setHasUppercase(e.target.checked)} />
                            <Form.Check type="switch" id="numbers-switch" label="Numbers" onChange={e => setHasNumbers(e.target.checked)} />
                            <Form.Check type="switch" id="special-chars-switch" label="Special Characters" onChange={e => setHasSymbols(e.target.checked)} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleGeneratePassword} disabled={isLoading}>
                            {isLoading ? <Spinner animation="border" size="sm" /> : 'Generate Password'}
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Control type="text" value={password} readOnly />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" type="submit" onClick={handleCopyPassword}>
                        Copy Password
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}