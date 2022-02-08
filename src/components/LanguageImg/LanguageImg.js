import { CustomLanguageImg } from "./styles";

export function LanguageImg({src, alt}){
    return (
        <abbr title={alt}>
            <CustomLanguageImg src={src} alt={alt} width="48px" height="auto" />
        </abbr>
    )
}