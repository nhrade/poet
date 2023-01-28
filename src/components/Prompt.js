import { Label, Input, Slider } from '@rebass/forms'
import { Flex } from 'rebass'


export default function Prompt({ updatePrompt }) {
    return (
        <Flex marginTop={50} width="100vh">
            <Label fontSize={5} width={4 / 10}>Write a poem about</Label>
            <Input
                id="prompt"
                name="prompt"
                type="text"
                text
                maxWidth="900vh"
                placeholder="Enter a prompt"
                onBlur={updatePrompt}
                width={6 / 10}
                height={48}
                fontSize={24}
            />
        </Flex>
    )
}