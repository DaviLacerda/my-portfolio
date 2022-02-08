export function LanguageImg({src, alt}){
    return (
        <abbr title={alt}>
            <img src={src} alt={alt} width="96" height="96" />
        </abbr>
    )
}