import slbStyles from './social-links-block.module.scss';
import SocialLink from '../social-link/social-link.component';
import { SocialNetworksTypes } from '../../data/content';
import Image from 'next/image';

interface SocialLinksBlockTypes {
    socialNetworks: SocialNetworksTypes
}

export default function SocialLinksBlock({ socialNetworks }: SocialLinksBlockTypes) {
    return (
        <div className={`${slbStyles.socialLinksBlock}`}>
            { socialNetworks.linkedIn ? 
                <SocialLink url={`https://www.linkedin.com/in/${socialNetworks.linkedIn}`}>
                    <Image src="/icons/linkedin.svg" width={20} height={20} alt="linkedIn" />
                </SocialLink> :
                null
            }
            { socialNetworks.twitter ? 
                <SocialLink url={`https://twitter.com/${socialNetworks.twitter}`}>
                    <Image src="/icons/twitter.svg" width={20} height={20} alt="twitter" />
                </SocialLink> :
                null
            }
            { socialNetworks.blog ? 
                <SocialLink url={`https://${socialNetworks.blog}`}>
                    <Image src="/icons/blog.svg" width={20} height={20} alt="blog" />
                </SocialLink> :
                null
            }
        </div>
    )
}