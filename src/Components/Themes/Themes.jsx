export const lightTheme = {
    body: "#060606 ",
    text: "#543787",
    fontFamily: "Monserrate",
    bodyRgba: "252, 246, 244",
    textRgba: "0,0,0",
   
};


export const DarkTheme = {
    body: "#F5F0F7 ",
    text: "#FCF6F4",
    fontFamily: "'Source Sans Pro', sans-serif",
    textRgba: "252, 246, 244",
    bodyRgba: "0,0,0",
    
}


export const breakpoints = {
    sm: 20,//em
    md: 30,
    lg: 45,
    xl: 60,
    xxl: 75,
}

export const mediaQueries = key => {
    return style => `@media (max-width: ${key}em) { ${style} }`
}