import { SocialsEnum } from "./types";
import GitHubLogo from "../../assets/socials/gh-logo";
import TwitterLogo from "../../assets/socials/tw-logo";
import DiscordLogo from "../../assets/socials/dc-logo";
import { BANNER_LINK, SOCIALS_LINKS } from "../../config";

const defaultSocialsItems = [
  {
    name: SocialsEnum.GITHUB,
    href: SOCIALS_LINKS[SocialsEnum.GITHUB],
    Icon: GitHubLogo,
  },
  {
    name: SocialsEnum.TWITTER,
    href: SOCIALS_LINKS[SocialsEnum.TWITTER],
    Icon: TwitterLogo,
  },
  {
    name: SocialsEnum.DISCORD,
    href: SOCIALS_LINKS[SocialsEnum.DISCORD],
    Icon: DiscordLogo,
  },
];

const defaultBannerContent = {
  text: "Join the Hardhat team! Nomic Labs is hiring",
  href: BANNER_LINK,
};

const defaultHeroBlockContent = {
  title: "Ethereum development environment for professionals",
  tagline: "Flexible. Extensible. Fast.",
  cta: {
    title: "Get started",
    url: "/getting-started",
  },
};

const defaultCTAContent = {
  title: "Hardhat is next- generation Ethereum tooling",
  subtitle: "Experience the new way of building Ethereum software.",
  cta: {
    title: "Get started",
    url: "/getting-started",
  },
};

const defaultVibrantCommunityBlockContent = {
  title: "Vibrant community",
  text: "Great tech attracts great people. Join the Hardhat community to find answers to your problems and contribute to the plugin ecosystem.",
  cta: {
    title: "Join the Hardhat Discord",
    // TODO: switch to page reference later
    url: "https://hardhat.org/getting-started/",
  },
};

const defaultTrustedTeamsBlockContent = {
  title: "Trusted by top teams",
};

const defaultBuiltByBlockContent = {
  title: "Built by",
};

const defaultProps = {
  defaultSocialsItems,
  defaultBannerContent,
  defaultHeroBlockContent,
  defaultCTAContent,
  defaultVibrantCommunityBlockContent,
  defaultTrustedTeamsBlockContent,
  defaultBuiltByBlockContent,
};

export default defaultProps;
