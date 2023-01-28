import { Box, Text } from "rebass";

export default function Poem({ title, text }) {
    return (
        <Box marginTop={50} width={1 / 2} align="center" scrolling={true}>
            <Text
                fontSize={5}
                fontFamily="Helvetica"
                textAlign="center"
                color="text">
                {title}
            </Text>
            <Text
                marginTop={30}
                fontSize={[1, 2, 3]}
                fontFamily="Helvetica"
                lineHeight={2}
                color="text">
                {text}
            </Text>
        </Box >
    )

}