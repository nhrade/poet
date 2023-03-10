import Prompt from './components/Prompt';
import { Heading, Box, Flex, Text } from 'rebass';
import { ThemeProvider } from "theme-ui";
import theme from "./theme";
import Poem from './components/Poem';
import { useState } from 'react';
import { createText, createTitle } from './PoemGen';
import { Helmet } from "react-helmet";

function App() {

    const [text, setText] = useState("");
    const [title, setTitle] = useState("");
    const [temperature, setTemperature] = useState(0.5);

    const updatePrompt = (e) => {
        const prompt = e.target.value;
        console.log(temperature);
        setText("Loading...");
        createText(prompt, temperature).then(text => setText(text));
        createTitle(prompt, temperature).then(title => setTitle(title));
    }

    return (
        <ThemeProvider theme={theme}>
            <Box height="100vh" bg={theme.colors.dark} color={theme.colors.text} >
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Poet 📝</title>
                    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📝</text></svg>"></link>
                </Helmet>
                <Flex flexDirection="column" alignItems="center">
                    <header className="App-header">
                        <Heading fontSize={[5, 6, 7]} marginTop={25}>
                            Poet 📝
                        </Heading>
                    </header>
                    <Prompt updatePrompt={updatePrompt} setTemperature={setTemperature} />
                    <Poem title={title} text={text} />
                    <footer>
                        <Text
                            sx={{ position: "fixed", bottom: 10, right: "75vh" }}
                            textAlign="center"
                            fontSize={1}>Powered by OpenAI and React with Rebass</Text>
                    </footer>
                </Flex>
            </Box>
        </ThemeProvider>
    );
}

export default App;
