import { CustomIconLink } from "./styles"

export function IconLink({link, svg}){
    return (
        <CustomIconLink href={link} aria-label={`Redirect to ${link}`} target="_blank">
            {svg}
        </CustomIconLink>
    )
}