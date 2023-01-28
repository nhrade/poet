import { useState } from "react";
import { Box, Text } from "rebass";
import theme from "../theme";

export default function Poem({ title, text }) {
    return (
        <Box marginTop={100} width={1 / 2}>
            <Text
                fontSize={5}
                fontFamily="Helvetica"
                color="text">
                {title}
            </Text>
            <Text
                marginTop={30}
                fontSize={[1, 2, 3]}
                fontFamily="Helvetica"
                color="text">
                {text}
            </Text>
        </Box >
    )

}