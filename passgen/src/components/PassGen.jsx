import { useState } from 'react';
import { Container, Row, Col, Form, Spinner, Alert } from 'react-bootstrap';

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
    const [passwordCopied, setPasswordCopied] = useState(false); // State for password copied alert

    const [password, setPassword] = useState(''); // State for the generated password

    const handleGeneratePassword = (e) => {
        // Prevent default form submission
        e.preventDefault();

        setIsLoading(true);

        // Define character sets
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

        // Build the character set based on the switches
        let characters = '';
        if (hasLowercase) characters += lowercaseChars;
        if (hasUppercase) characters += uppercaseChars;
        if (hasNumbers) characters += numberChars;
        if (hasSymbols) characters += specialChars;

        // Generate password
        let generatedPassword = '';
        for (let i = 0; i < passwordLength; i++) {
            generatedPassword += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        // Set the generated password to the state
        setPassword(generatedPassword);

        // Stop the loading spinner
        setIsLoading(false);
    };

    const handleCopyPassword = () => {
        // Copy the password to the clipboard
        navigator.clipboard.writeText(password);
    
        // Set passwordCopied to true
        setPasswordCopied(true);
    
        // Set a timer to revert passwordCopied back to false after a few seconds
        setTimeout(() => {
            setPasswordCopied(false);
        }, 2000);
    };    

    return (
        <Container className="passgen" id="passgen">
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
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button type="submit" onClick={handleGeneratePassword} disabled={isLoading}>
                        {isLoading ? <Spinner animation="border" size="sm" /> : 'Generate Password'}
                    </button>
                </Col>
            </Row>
            <Row className="password">
                <Col>
                    <Form.Group>
                        <Form.Control type="text" value={password} readOnly />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button type="submit" onClick={handleCopyPassword}>
                        Copy Password
                    </button>
                    {passwordCopied && <Alert variant="success">Password copied to clipboard!</Alert>}
                </Col>
            </Row>
        </Container>
    )
}