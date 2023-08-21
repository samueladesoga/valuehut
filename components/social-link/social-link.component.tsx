import slbStyles from './social-link.module.scss';
import Link from 'next/link';

interface SocialLinkTypes {
    url: string,
    imageURL?: string, 
    children?: any
}

const SocialLink: React.FC<SocialLinkTypes> = ({ url, imageURL, children }) => {
    return (
        <Link href={url} target="_blank" className={`${slbStyles.socialLink}`}>
            { children }
        </Link>
    )
}

export default SocialLink;