import { Label, Input } from '@rebass/forms'
import { Flex } from 'rebass'


export default function Prompt({ updatePrompt, setTemperature }) {

    const updateTemperature = (e) => {
        try {
            setTemperature(parseFloat(e.target.value));
        }
        catch (e) {
            console.error.log(e);
        }
    }

    return (
        <Flex marginTop={50} width="100vh">
            <Label fontSize={4}>Write a poem about</Label>
            <Input
                id="prompt"
                name="prompt"
                type="text"
                maxWidth="100vh"
                width={1240}
                placeholder="Enter a prompt"
                onBlur={updatePrompt}
                height={48}
                fontSize={24}
            />
            <Label fontSize={4} marginLeft={40}>Temperature</Label>
            <Input
                id="temperature"
                name="temperature"
                maxWidth="10vh"
                placeholder="Temp"
                onBlur={updateTemperature}
                defaultValue={0.5}
                marginLeft={30}
                min={0}
                max={1}
                step={0.05}
                type="number" />
        </Flex>
    )
}