import Link from "next/link";
import { zmbaContent } from "@/content/zmba";

export function SiteFooter() {
  const linkedSocialChannels = zmbaContent.socialChannels.filter((channel) => channel.url);

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <Link className="footer-mark" href="/">
            ZMBA
          </Link>
          <p>{zmbaContent.organization.name}</p>
          <p>{zmbaContent.organization.community}</p>
          <p lang="zh-Hans">{zmbaContent.organization.communityChinese}</p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/games">Games</Link>
          <Link href="/people">People</Link>
          <Link href="/rules">Rules</Link>
          <Link href="/media">Media</Link>
        </nav>
      </div>

      <div className="footer-meta">
        <p>Founded in {zmbaContent.organization.foundedIn}.</p>
        {linkedSocialChannels.length ? (
          <div className="social-list" aria-label="ZMBA social platforms">
            {linkedSocialChannels.map((channel) =>
              channel.url ? (
                <a href={channel.url} key={channel.platform} rel="noreferrer">
                  {channel.platform}
                </a>
              ) : null,
            )}
          </div>
        ) : null}
        <p>{zmbaContent.organization.officialDomain.replace("https://", "")}</p>
      </div>
    </footer>
  );
}
