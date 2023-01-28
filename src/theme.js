const colors = {
    persianBlue: "#12263A",
    blueGreen: "#06BCC1",
    opal: "#C5D8D1",
    isbelline: "#F4EDEA",
    lightOrange: "#F4D1AE"
}

const theme = {
    breakpoints: ["40em", "52em", "64em"],
    fontSizes: [12, 14, 16, 20, 24, 32, 48],
    colors: {
        primary: colors.persianBlue,
        secondary: colors.blueGreen,
        accent: colors.opal,
        text: colors.isbelline,
        light: colors.lightOrange,
        dark: colors.persianBlue
    },
    space: [
        0, 4, 8, 16, 32, 64, 128, 256
    ],
    fonts: {
        body: "Helvetica, sans-serif",
        heading: "inherit",
        monospace: "Menlo, monospace"
    },
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700
    },
    lineHeights: {
        body: 1.5,
        heading: 1.25
    },
    shadows: {
        small: "0 0 4px rgba(0, 0, 0, .125)",
        large: "0 0 24px rgba(0, 0, 0, .125)"
    },
    buttons: {
        primary: {
            color: "white",
            bg: "primary"
        },
        secondary: {
            color: "white",
            bg: "secondary"
        }
    }
}

export default theme;