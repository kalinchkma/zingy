import React from 'react'
import { Media } from '../../../payload/payload-types';

import { FaFacebookF, FaDiscord, FaInstagram, FaGithub, FaLinkedin, FaTelegram, FaXTwitter, FaWhatsapp, FaYoutube, FaStaylinked } from "react-icons/fa6";
import { cn } from '../../_utilities/utils';
import { Media as MediaImage } from '../Media';

export type IconType = {
    iconType?: "facebook" | "whatsapp" | "youtube" | "instagram" | "linkedin" | "discord" | "telegram" | "twitter" | "github" | "custom";
    iconImage?: string | Media;
    
}

const SocialIcon = ({className, icon}: {icon: IconType, className?: string}) => {
    const classes = cn('h-3.5 w-3.5 m-0 p-0',className);
    const iconToRender = () => {
        switch (icon.iconType) {
            case 'facebook':
                return  <FaFacebookF className={classes} />
            case 'discord':
                return <FaDiscord className={classes} />
            case 'instagram':
                return <FaInstagram className={classes} />
            case 'linkedin':
                return <FaLinkedin className={classes} />
            case 'github':
                return <FaGithub className={classes} />
            case 'telegram':
                return <FaTelegram className={classes} />
            case 'twitter':
                return <FaXTwitter className={classes} />
            case 'whatsapp':
                return <FaWhatsapp className={classes} />
            case 'youtube':
                return <FaYoutube className={classes} />
            case 'custom':
                const iconImage = icon?.iconImage as Media
                return <MediaImage resource={iconImage} className='h-[24px] w-[24px]' />
            default:
                return <FaStaylinked className={classes} />
        }
    }
    return <span className='inline-flex items-center justify-center w-full h-full'>
        {iconToRender()}
    </span>
}

export default SocialIcon