import Prompt from './components/Prompt';
import { Heading, Box, Flex } from 'rebass';
import { ThemeProvider } from "theme-ui";
import theme from "./theme";
import Poem from './components/Poem';
import { useState } from 'react';
import { createText, createTitle } from './PoemGen';

function App() {

    const [text, setText] = useState("");
    const [title, setTitle] = useState("");

    const updatePrompt = (e) => {
        const prompt = e.target.value;
        createText(prompt, 0.5).then(text => setText(text));
        createTitle(prompt, 0.5).then(title => setTitle(title));
    }

    return (
        <ThemeProvider theme={theme}>
            <Box height="100vh" bg={theme.colors.dark} color={theme.colors.text} >
                <Flex flexDirection="column" alignItems="center">
                    <header className="App-header">
                        <Heading fontSize={[5, 6, 7]} marginTop={25}>
                            Poet
                        </Heading>
                    </header>
                    <Prompt updatePrompt={updatePrompt} />
                    <Poem title={title} text={text} />
                </Flex>
            </Box>
        </ThemeProvider>
    );
}

export default App;
