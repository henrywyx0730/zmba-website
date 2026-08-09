import Link from "next/link";
import { zmbaContent } from "@/content/zmba";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <Link className="footer-mark" href="/">
            ZMBA
          </Link>
          <p>{zmbaContent.organization.name}</p>
          <p>{zmbaContent.organization.communityChinese}</p>
        </div>

        <div className="footer-links">
          <Link href="/games">Games</Link>
          <Link href="/people">People</Link>
          <Link href="/rules">Rules</Link>
          <Link href="/media">Media</Link>
        </div>
      </div>

      <div className="footer-meta">
        <p>Founded {zmbaContent.organization.foundedYear}</p>
        <div className="social-list" aria-label="ZMBA social platforms">
          {zmbaContent.socialChannels.map((channel) =>
            channel.url ? (
              <a href={channel.url} key={channel.platform} rel="noreferrer">
                {channel.platform}
              </a>
            ) : (
              <span key={channel.platform}>{channel.platform}</span>
            ),
          )}
        </div>
        <p>{zmbaContent.organization.officialDomain.replace("https://", "")}</p>
      </div>
    </footer>
  );
}
