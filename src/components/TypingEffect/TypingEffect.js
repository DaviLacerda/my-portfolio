import { TypingStyled } from "./styles"

export function TypingEffect({children}){
    return <TypingStyled>
        <h1>{children}</h1>
    </TypingStyled>
}