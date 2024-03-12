import {
	SocialMedia,
	SocialMediaMobile
} from "@/widgets/footer/components/socialList/components/props/socialIcons";

export const socialList = (mobile:boolean) => {
	return mobile? SocialMediaMobile : SocialMedia
}
